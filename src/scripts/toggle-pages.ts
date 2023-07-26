import { store } from "../store/store";
import { disabledPagination } from "./disabled-pagination";
import { OpenSection, DISPLAY_BLOCK, DISPLAY_NONE } from "./const";

export const togglePage = async (): Promise<void> => {
    const garageButton: HTMLElement | null = document.querySelector('.button-garage');
    const garageBoard: HTMLElement | null = document.querySelector('.garage');
    const winnersButton: HTMLElement | null = document.querySelector('.button-winner');
    const winnersBoard: HTMLElement | null = document.querySelector('.winners');
    const consoleBoard: HTMLElement | null = document.querySelector('.console');

    garageButton?.addEventListener('click', async (): Promise<void> => {
        (winnersBoard as HTMLElement).style.display = DISPLAY_NONE;
        (garageBoard as HTMLElement).style.display = DISPLAY_BLOCK;
        (consoleBoard as HTMLElement).style.display = DISPLAY_BLOCK;

        store.openSection = OpenSection.GARAGE;
        disabledPagination();
    })

    winnersButton?.addEventListener('click', async (): Promise<void> => {
        (garageBoard as HTMLElement).style.display = DISPLAY_NONE;
        (consoleBoard as HTMLElement).style.display = DISPLAY_NONE;
        (winnersBoard as HTMLElement).style.display = DISPLAY_BLOCK;

        store.openSection = OpenSection.WINNERS;
        disabledPagination();
    })

}


