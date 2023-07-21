import { render } from "./render";
import { createHeaderTemplate } from "../view/header";
import { createMainTemplate } from "../view/main";
import { RenderPosition } from "./const";
import { updateCarsStore } from "./get-cars";
import { togglePage } from "./toggle-pages";
import { generateCars } from "./generate-cars";
import { createCarEvent } from "./create-car";
import { removeCar } from "./remove-car";
import { selectCar } from "./select-car";

const siteBodyElement: HTMLElement | null = document.querySelector('.body');


const renderPage = async () => {
    await updateCarsStore();
    render(siteBodyElement as HTMLElement, createHeaderTemplate(), RenderPosition.AFTERBEGIN);
    render(siteBodyElement as HTMLElement, createMainTemplate(), RenderPosition.BEFOREEND);
    togglePage();
    generateCars();
    createCarEvent();
    removeCar();
    selectCar();
}

renderPage();


