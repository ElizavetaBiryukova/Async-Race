import { store } from '../store/store';
import { WinnersCars, NewWinner, WinnerCar, Winners } from '../types/types';
import { startCarAnimation, stopCarAnimation } from './start-stop-car';
import { WINNERS, createWinner, getWinner, updateWinner, updateWinnersStore } from './api';
import { createTitle } from "../view/title";
import { createWinnersListTemplate } from "../view/winners-list";

export const getWinnerStatus = async (id: number) => (await fetch(`${WINNERS}/${id}`)).status;

export const saveWinners = async ({ id, time }: NewWinner) => {
    const winnerStatus = await getWinnerStatus(id);
    if (winnerStatus === 404) {
        await createWinner({
            id,
            wins: 1,
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

const race = async (prom: (id: number) => Promise<WinnersCars>) => {
    const promises = store.carsArr.map(({ id }) => prom(id));
    const winner = (await getWinnerRace(
        promises,
        store.carsArr.map((car) => car.id)
    )) as NewWinner;
    return winner;
};

const addWinnerMessage = (winner: NewWinner) => {
    const body: HTMLElement | null = document.querySelector('.body');
    const message = document.createElement('div');
    (message as HTMLElement).className = 'message';
    (message as HTMLElement).innerHTML = `${winner.name} went first in ${winner.time} seconds!`;
    body?.append((message as HTMLElement));


    setTimeout(() => {message.remove()}, 4000);
}

export async function addRace() {
    const raceButton: HTMLElement | null = document.querySelector('.race-button');
    const winnersList: HTMLElement | null = document.querySelector('.winners-list');
    const winnersTitle: HTMLElement | null = document.querySelector('.title-winners');
    const resetButton: HTMLElement | null = document.querySelector('.reset-button');

    raceButton?.addEventListener('click', async () => {
        const winner = await race(startCarAnimation);
        addWinnerMessage(winner);
        await saveWinners(winner);
        await updateWinnersStore();
        (winnersList as HTMLElement).innerHTML = createWinnersListTemplate();
        (winnersTitle as HTMLElement).innerHTML = createTitle('Winners');
    });

    resetButton?.addEventListener('click', async () => {
        store.carsArr.map(({ id }) => {
            stopCarAnimation(id);
        });
    })
}