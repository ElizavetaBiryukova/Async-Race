import { getRandomInteger } from "./util";
import { carsNames, carsModels } from "./const";
import { CreateCar } from "../types/types";
import { createCar, updateCarsStore } from "./get-cars";
import { createGarageListTemplate } from "../view/garage-list";
import { createTitle } from "../view/title";

const generateName = (): string => {
    const randomIndexNames = getRandomInteger(0, carsNames.length - 1);
    const randomIndexModels = getRandomInteger(0, carsModels.length - 1);
    return `${carsNames[randomIndexNames]} ${carsModels[randomIndexModels]}`;
};

const generateColor = (): string => {
    return '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase();
};

export const generateCar = (): CreateCar => ({
    name: generateName(),
    color: generateColor(),
});

export const generateCars = async () => {
    const generateCarsButton: HTMLElement | null = document.querySelector('.generator-button');
    const garageList: HTMLElement | null = document.querySelector('.garage-list');
    const garageTitle: HTMLElement | null = document.querySelector('.title-garage');

    generateCarsButton?.addEventListener('click', async () => {
        const hundredCars: CreateCar[] = new Array(100).fill(0).map(generateCar);

        await Promise.all(hundredCars.map(async (car) => createCar(car)));
        await updateCarsStore();
        (garageList as HTMLElement).innerHTML = createGarageListTemplate();
        (garageTitle as HTMLElement).innerHTML = createTitle('Garage');

    })
}