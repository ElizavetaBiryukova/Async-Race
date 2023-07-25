import { store } from "../store/store";
import { updateCarsStore, updateWinnersStore } from "./api";
import { createTitle, createPages } from "../view/title";
import { createWinnersListTemplate } from "../view/winners-list";
import { createGarageListTemplate } from "../view/garage-list";
import { disabledPagination } from "./disabled-pagination";


export async function addPagination() {
    const prevButton: HTMLElement | null = document.querySelector('.prev-button');
    const nextButton: HTMLElement | null = document.querySelector('.next-button');

    const winnersList: HTMLElement | null = document.querySelector('.winners-list');
    const winnersTitle: HTMLElement | null = document.querySelector('.title-winners');
    const winnersPage: HTMLElement | null = document.querySelector('.page-winners');

    const garageList: HTMLElement | null = document.querySelector('.garage-list');
    const garageTitle: HTMLElement | null = document.querySelector('.title-garage');
    const garagePage: HTMLElement | null = document.querySelector('.page-garage');



    prevButton?.addEventListener('click', async () => {
        switch (store.openSection) {
            case 'garage': {
                store.carsPage -= 1;
                await updateCarsStore();
                (garageList as HTMLElement).innerHTML = createGarageListTemplate();
                (garageTitle as HTMLElement).innerHTML = createTitle('Garage');
                (garagePage as HTMLElement).innerHTML = createPages('Garage');
                break;
            }
            case 'winners': {
                store.winnersPage -= 1;
                await updateWinnersStore();
                (winnersList as HTMLElement).innerHTML = createWinnersListTemplate();
                (winnersTitle as HTMLElement).innerHTML = createTitle('Winners');
                (winnersPage as HTMLElement).innerHTML = createPages('Winners');
                break;
            }
        }
        disabledPagination();
    });

    nextButton?.addEventListener('click', async () => {
        switch (store.openSection) {
            case 'garage': {
                store.carsPage += 1;
                await updateCarsStore();
                (garageList as HTMLElement).innerHTML = createGarageListTemplate();
                (garageTitle as HTMLElement).innerHTML = createTitle('Garage');
                (garagePage as HTMLElement).innerHTML = createPages('Garage');
                if (store.carsPage * 7 < store.cars) {
                    (nextButton as HTMLButtonElement).disabled = false;
                } else {
                    (nextButton as HTMLButtonElement).disabled = true;
                }
                if (store.carsPage > 1) {
                    (prevButton as HTMLButtonElement).disabled = false;
                } else {
                    (prevButton as HTMLButtonElement).disabled = true;
                }
                break;
            }
            case 'winners': {
                store.winnersPage += 1;
                await updateWinnersStore();
                (winnersList as HTMLElement).innerHTML = createWinnersListTemplate();
                (winnersTitle as HTMLElement).innerHTML = createTitle('Winners');
                (winnersPage as HTMLElement).innerHTML = createPages('Winners');
                break;
            }
        }
        disabledPagination();
    });
}