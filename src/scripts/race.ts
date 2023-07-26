import { store } from '../store/store';
import { WinnersCars, NewWinner, WinnerCar, Winners } from '../types/types';
import { startCarAnimation, stopCarAnimation } from './start-stop-car';
import { createWinner, getWinner, updateWinner, updateWinnersStore } from './api';
import { createTitle } from "../view/title";
import { createWinnersListTemplate } from "../view/winners-list";
import { WINNERS, STATUS, FIRST_WINS, OpenSection } from './const';

const getWinnerStatus = async (id: number): Promise<number> => (await fetch(`${WINNERS}/${id}`)).status;

const saveWinners = async ({ id, time }: NewWinner): Promise<void> => {
    const winnerStatus = await getWinnerStatus(id);
    if (winnerStatus === STATUS) {
        await createWinner({
            id,
            wins: FIRST_WINS,
            time,
        });
    } else {
        const winner: Winners = await getWinner(id);
        await updateWinner(id, {
            id,
            wins: winner.wins + 1,
            time: time < winner.time ? time : winner.time,
        });
    }
};

const getWinnerRace = async (promises: Promise<WinnersCars>[], ids: number[]): Promise<WinnerCar | null> => {
    const { success, id, time } = await Promise.race(promises);
    if (!success) {
        const failedIndex = ids.findIndex((i) => i === id);
        promises.splice(failedIndex, 1);
        ids.splice(failedIndex, 1);
        if (promises.length < 1) return null;
        return getWinnerRace(promises, ids);
    }
    return { ...store.carsArr.find((car) => car.id === id), time: +(time / 1000).toFixed(2) };
};

const race = async (prom: (id: number) => Promise<WinnersCars>): Promise<NewWinner> => {
    const promises = store.carsArr.map(({ id }) => prom(id));
    const winner = (await getWinnerRace(
        promises,
        store.carsArr.map((car) => car.id)
    )) as NewWinner;
    return winner;
};

const addWinnerMessage = (winner: NewWinner): void => {
    const body: HTMLElement | null = document.querySelector('.body');
    const message = document.createElement('div');
    (message as HTMLElement).className = 'message';
    (message as HTMLElement).innerHTML = `${winner.name} went first in ${winner.time} seconds!`;
    (body as HTMLElement).append((message as HTMLElement));

    setTimeout((): void => { message.remove() }, 4000);
}

const addRace = async (): Promise<void> => {
    const raceButton: HTMLElement | null = document.querySelector('.race-button');
    const winnersList: HTMLElement | null = document.querySelector('.winners-list');
    const winnersTitle: HTMLElement | null = document.querySelector('.title-winners');
    const resetButton: HTMLElement | null = document.querySelector('.reset-button');

    raceButton?.addEventListener('click', async (): Promise<void> => {
        const winner = await race(startCarAnimation);
        addWinnerMessage(winner);
        await saveWinners(winner);
        await updateWinnersStore();
        (winnersList as HTMLElement).innerHTML = createWinnersListTemplate();
        (winnersTitle as HTMLElement).innerHTML = createTitle(OpenSection.WINNERS);
    });

    resetButton?.addEventListener('click', async (): Promise<void> => {
        store.carsArr.map(({ id }) => {
            stopCarAnimation(id);
        });
    })
}

export { addRace, saveWinners, getWinnerStatus}