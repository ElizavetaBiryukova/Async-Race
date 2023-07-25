import { store } from "../store/store";

export async function disabledPagination() {
    const prevButton: HTMLButtonElement | null = document.querySelector('.prev-button');
    const nextButton: HTMLButtonElement | null = document.querySelector('.next-button');

    if (store.openSection === 'garage') {
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
    } else {
        if (store.winnersPage * 10 < store.winners) {
            (nextButton as HTMLButtonElement).disabled = false;
        } else {
            (nextButton as HTMLButtonElement).disabled = true;
        }
        if (store.winnersPage > 1) {
            (prevButton as HTMLButtonElement).disabled = false;
        } else {
            (prevButton as HTMLButtonElement).disabled = true;
        }
    }

}