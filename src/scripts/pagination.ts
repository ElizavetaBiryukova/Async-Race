import { store } from "../store/store";
import { updateCarsStore, updateWinnersStore } from "./api";
import { createPages } from "../view/title";
import { disabledPagination } from "./disabled-pagination";
import { OpenSection } from "./const";
import { updateGarageTemplate, updateWinnersTemplate } from "./update-template";


const addPagination = async (): Promise<void> => {
    const prevButton: HTMLElement | null = document.querySelector('.prev-button');
    const nextButton: HTMLElement | null = document.querySelector('.next-button');
    const winnersPage: HTMLElement | null = document.querySelector('.page-winners');
    const garagePage: HTMLElement | null = document.querySelector('.page-garage');


    prevButton?.addEventListener('click', async (): Promise<void> => {
        switch (store.openSection) {
            case OpenSection.GARAGE: {
                store.carsPage -= 1;
                await updateCarsStore();
                updateGarageTemplate();
                (garagePage as HTMLElement).innerHTML = createPages(OpenSection.GARAGE);
                break;
            }
            case OpenSection.WINNERS: {
                store.winnersPage -= 1;
                await updateWinnersStore();
                updateWinnersTemplate();
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
                updateGarageTemplate();
                (garagePage as HTMLElement).innerHTML = createPages(OpenSection.GARAGE);
                break;
            }
            case OpenSection.WINNERS: {
                store.winnersPage += 1;
                await updateWinnersStore();
                updateWinnersTemplate();
                (winnersPage as HTMLElement).innerHTML = createPages(OpenSection.WINNERS);
                break;
            }
        }
        disabledPagination();
    });
}

export { addPagination }