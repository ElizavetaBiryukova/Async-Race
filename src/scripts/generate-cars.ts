import { getRandomInteger } from "./util";
import { carsNames, carsModels, CarColor, HUNDRED_CARS } from "./const";
import { CreateCar } from "../types/types";
import { createCar, updateCarsStore } from "./api";
import { createGarageListTemplate } from "../view/garage-list";
import { createTitle } from "../view/title";
import { disabledPagination } from "./disabled-pagination";
import { OpenSection } from "./const";

const generateName = (): string => {
    const randomIndexNames = getRandomInteger(0, carsNames.length - 1);
    const randomIndexModels = getRandomInteger(0, carsModels.length - 1);
    return `${carsNames[randomIndexNames]} ${carsModels[randomIndexModels]}`;
};

const generateColor = (): string => {
    return CarColor.HASH + (Math.random().toString(16) + CarColor.INIT_COLOR).substring(CarColor.START_INDEX, CarColor.END_INDEX).toUpperCase();
};

const generateCar = (): CreateCar => ({
    name: generateName(),
    color: generateColor(),
});

const generateCars = async (): Promise<void> => {
    const generateCarsButton: HTMLElement | null = document.querySelector('.generator-button');
    const garageList: HTMLElement | null = document.querySelector('.garage-list');
    const garageTitle: HTMLElement | null = document.querySelector('.title-garage');

    generateCarsButton?.addEventListener('click', async (): Promise<void> => {
        const hundredCars: CreateCar[] = new Array(HUNDRED_CARS).fill(0).map(generateCar);

        await Promise.all(hundredCars.map(async (car) => createCar(car)));
        await updateCarsStore();
        (garageList as HTMLElement).innerHTML = createGarageListTemplate();
        (garageTitle as HTMLElement).innerHTML = createTitle(OpenSection.GARAGE);

        disabledPagination();
    })
}

export { generateCars }