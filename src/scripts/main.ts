import { render } from "./render";
import { createHeaderTemplate } from "../view/header";
import { createMainTemplate } from "../view/main";
import { RenderPosition } from "./const";
import { updateCarsStore, updateWinnersStore } from "./api";
import { togglePage } from "./toggle-pages";
import { generateCars } from "./generate-cars";
import { createCarEvent } from "./create-car";
import { removeCar } from "./remove-car";
import { selectCar } from "./select-car";
import { updateCarEvent } from "./update-car";
import { addPagination } from "./pagination";
import { drivingCar } from "./start-stop-car";
import { addRace } from "./race";
import { OpenSection } from "./const";
import { listenSort } from "./sort-winners";

const siteBodyElement: HTMLElement | null = document.querySelector('.body');

const renderPage = async (): Promise<void> => {
    await updateCarsStore();
    await updateWinnersStore();
    render(siteBodyElement as HTMLElement, createHeaderTemplate(), RenderPosition.AFTERBEGIN);
    render(siteBodyElement as HTMLElement, createMainTemplate(), RenderPosition.BEFOREEND);
    window.location.hash = `#/${OpenSection.GARAGE}`;
    togglePage();
    generateCars();
    createCarEvent();
    removeCar();
    selectCar();
    updateCarEvent();
    addPagination();
    drivingCar();
    addRace();
    listenSort();
}

renderPage();


