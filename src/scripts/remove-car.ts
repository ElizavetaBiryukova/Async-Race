import { deleteCar, updateCarsStore, deleteWinner, updateWinnersStore } from "./api";
import { createGarageListTemplate } from "../view/garage-list";
import { createTitle } from "../view/title";
import { createWinnersListTemplate } from "../view/winners-list";


export const removeCar = async () => {
    const garage: HTMLElement | null = document.querySelector('.garage-list');
    const garageTitle: HTMLElement | null = document.querySelector('.title-garage');
    const winnersList: HTMLElement | null = document.querySelector('.winners-list');
    const winnersTitle: HTMLElement | null = document.querySelector('.title-winners');


    garage?.addEventListener('click',  async (event) => {
        if ((event.target as HTMLElement).classList.contains('remove-button')) {
            const carId = Number(((event.target as HTMLElement).closest('li.car-item') as HTMLElement).id.replace('car-', ''));
            await deleteCar(carId);
            await deleteWinner(carId);
            await updateCarsStore();
            await updateWinnersStore();

            (garage as HTMLElement).innerHTML = createGarageListTemplate();
            (garageTitle as HTMLElement).innerHTML = createTitle('Garage');

            (winnersList as HTMLElement).innerHTML = createWinnersListTemplate();
            (winnersTitle as HTMLElement).innerHTML = createTitle('Winners');

        }
    })
}