import { store } from "../store/store";
import { OpenSection, NumberPerPage, FIRST_PAGE } from "./const";

async function disabledPagination(): Promise<void> {
    const prevButton: HTMLButtonElement | null = document.querySelector('.prev-button');
    const nextButton: HTMLButtonElement | null = document.querySelector('.next-button');

    if (store.openSection === OpenSection.GARAGE) {
        if (store.carsPage * NumberPerPage.CARS < store.cars) {

            (nextButton as HTMLButtonElement).disabled = false;
        } else {
            (nextButton as HTMLButtonElement).disabled = true;
        }
        if (store.carsPage > FIRST_PAGE) {
            (prevButton as HTMLButtonElement).disabled = false;
        } else {
            (prevButton as HTMLButtonElement).disabled = true;
        }
    } else {
        if (store.winnersPage * NumberPerPage.WINNERS < store.winners) {

            (nextButton as HTMLButtonElement).disabled = false;
        } else {
            (nextButton as HTMLButtonElement).disabled = true;
        }
        if (store.winnersPage > FIRST_PAGE) {
            (prevButton as HTMLButtonElement).disabled = false;
        } else {
            (prevButton as HTMLButtonElement).disabled = true;
        }
    }
}

export { disabledPagination }