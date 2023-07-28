import { store } from "../store/store";
import { disabledPagination } from "./disabled-pagination";
import { OpenSection, DISPLAY_BLOCK, DISPLAY_NONE } from "./const";

export const togglePage = async (): Promise<void> => {
    const garageButton: HTMLElement | null = document.querySelector('.button-garage');
    const garageBoard: HTMLElement | null = document.querySelector('.garage');
    const winnersButton: HTMLElement | null = document.querySelector('.button-winner');
    const winnersBoard: HTMLElement | null = document.querySelector('.winners');
    const consoleBoard: HTMLElement | null = document.querySelector('.console');

    const locationResolver = async (location: string): Promise<void> => {
        switch (location) {
            case `#/${OpenSection.GARAGE}`:
                (winnersBoard as HTMLElement).style.display = DISPLAY_NONE;
                (garageBoard as HTMLElement).style.display = DISPLAY_BLOCK;
                (consoleBoard as HTMLElement).style.display = DISPLAY_BLOCK;

                break;
            case `#/${OpenSection.WINNERS}`:
                (garageBoard as HTMLElement).style.display = DISPLAY_NONE;
                (consoleBoard as HTMLElement).style.display = DISPLAY_NONE;
                (winnersBoard as HTMLElement).style.display = DISPLAY_BLOCK;
                break;
            default:
                break;
        }
    };

    garageButton?.addEventListener('click', async (): Promise<void> => {
        window.location.hash = `#/${OpenSection.GARAGE}`;
        locationResolver(window.location.hash);
        store.openSection = OpenSection.GARAGE;
        disabledPagination();
    })

    winnersButton?.addEventListener('click', async (): Promise<void> => {
        window.location.hash = `#/${OpenSection.WINNERS}`;
        locationResolver(window.location.hash);
        store.openSection = OpenSection.WINNERS;
        disabledPagination();
    })

}


