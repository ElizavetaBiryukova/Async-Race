import { store } from "../store/store";
import { updateCarsStore, updateWinnersStore } from "./api";
import { createTitle, createPages } from "../view/title";
import { createWinnersListTemplate } from "../view/winners-list";
import { createGarageListTemplate } from "../view/garage-list";
import { disabledPagination } from "./disabled-pagination";
import { OpenSection } from "./const";

const addPagination = async (): Promise<void> => {
    const prevButton: HTMLElement | null = document.querySelector('.prev-button');
    const nextButton: HTMLElement | null = document.querySelector('.next-button');

    const winnersList: HTMLElement | null = document.querySelector('.winners-list');
    const winnersTitle: HTMLElement | null = document.querySelector('.title-winners');
    const winnersPage: HTMLElement | null = document.querySelector('.page-winners');

    const garageList: HTMLElement | null = document.querySelector('.garage-list');
    const garageTitle: HTMLElement | null = document.querySelector('.title-garage');
    const garagePage: HTMLElement | null = document.querySelector('.page-garage');


    prevButton?.addEventListener('click', async (): Promise<void> => {
        switch (store.openSection) {
            case OpenSection.GARAGE: {
                store.carsPage -= 1;
                await updateCarsStore();
                (garageList as HTMLElement).innerHTML = createGarageListTemplate();
                (garageTitle as HTMLElement).innerHTML = createTitle(OpenSection.GARAGE);
                (garagePage as HTMLElement).innerHTML = createPages(OpenSection.GARAGE);
                break;
            }
            case OpenSection.WINNERS: {
                store.winnersPage -= 1;
                await updateWinnersStore();
                (winnersList as HTMLElement).innerHTML = createWinnersListTemplate();
                (winnersTitle as HTMLElement).innerHTML = createTitle(OpenSection.WINNERS);
                (winnersPage as HTMLElement).innerHTML = createPages(OpenSection.WINNERS);
                break;
            }
        }
        disabledPagination();
    });

    nextButton?.addEventListener('click', async (): Promise<void> => {
        switch (store.openSection) {
            case OpenSection.GARAGE: {
                store.carsPage += 1;
                await updateCarsStore();
                (garageList as HTMLElement).innerHTML = createGarageListTemplate();
                (garageTitle as HTMLElement).innerHTML = createTitle(OpenSection.GARAGE);
                (garagePage as HTMLElement).innerHTML = createPages(OpenSection.GARAGE);
                break;
            }
            case OpenSection.WINNERS: {
                store.winnersPage += 1;
                await updateWinnersStore();
                (winnersList as HTMLElement).innerHTML = createWinnersListTemplate();
                (winnersTitle as HTMLElement).innerHTML = createTitle(OpenSection.WINNERS);
                (winnersPage as HTMLElement).innerHTML = createPages(OpenSection.WINNERS);
                break;
            }
        }
        disabledPagination();
    });
}

export { addPagination }