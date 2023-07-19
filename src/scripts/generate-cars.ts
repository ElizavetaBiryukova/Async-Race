import { store } from "../store/store";
import { getRandomInteger } from "./util";
import { carsNames, carsModels } from "./const";
import { CreateCar } from "../types/types";
import { createCar, updateCarsStore } from "./get-cars";
import { createGarageListTemplate } from "../view/garage-list";

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


// console.log(hundredCars)
export const generateCars = async () => {
    const generateCarsButton: HTMLElement | null = document.querySelector('.generator-button');
    const garageList: HTMLElement | null = document.querySelector('.garage-list')

    generateCarsButton?.addEventListener('click', async () => {
        // console.log(store)
        // store.carsArr = store.carsArr.concat(hundredCars);
        const hundredCars: CreateCar[] = new Array(100).fill(0).map(generateCar);

        console.log(hundredCars)
        await Promise.all(hundredCars.map(async (car) => createCar(car)));
        await updateCarsStore();
        (garageList as HTMLElement).innerHTML = createGarageListTemplate();
        console.log(store)
    })
}