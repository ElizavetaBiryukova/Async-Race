import { deleteCar, updateCarsStore, deleteWinner, updateWinnersStore, getWinner } from "./api";
import { createGarageListTemplate } from "../view/garage-list";
import { createTitle } from "../view/title";
import { createWinnersListTemplate } from "../view/winners-list";
import { OpenSection } from "./const";


const removeCar = async (): Promise<void> => {
    const garage: HTMLElement | null = document.querySelector('.garage-list');
    const garageTitle: HTMLElement | null = document.querySelector('.title-garage');
    const winnersList: HTMLElement | null = document.querySelector('.winners-list');
    const winnersTitle: HTMLElement | null = document.querySelector('.title-winners');

    garage?.addEventListener('click', async (event): Promise<void> => {
        if ((event.target as HTMLElement).classList.contains('remove-button')) {
            const carId = Number(((event.target as HTMLElement).closest('li.car-item') as HTMLElement).id.replace('car-', ''));
            await deleteCar(carId);

            if (await getWinner(carId)) {
                await getWinner(carId)
                await deleteWinner(carId);
                await updateWinnersStore();
                (winnersList as HTMLElement).innerHTML = createWinnersListTemplate();
                (winnersTitle as HTMLElement).innerHTML = createTitle(OpenSection.WINNERS);
            }
            await updateCarsStore();

            (garage as HTMLElement).innerHTML = createGarageListTemplate();
            (garageTitle as HTMLElement).innerHTML = createTitle(OpenSection.GARAGE);

        }
    })
}

export { removeCar }