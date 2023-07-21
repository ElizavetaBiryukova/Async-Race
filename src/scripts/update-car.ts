import { updateCar, updateCarsStore } from "./get-cars";
import { createGarageListTemplate } from "../view/garage-list";
import { createTitle } from "../view/title";
import { store } from "../store/store";

export const updateCarEvent = async () => {
    const updateButton: HTMLElement | null = document.querySelector('.button-update');
    const updateCarInput: HTMLInputElement | null = document.querySelector('.update-input');
    const updateCarColor: HTMLInputElement | null = document.querySelector('.update-color');
    const garageList: HTMLElement | null = document.querySelector('.garage-list');
    const garageTitle: HTMLElement | null = document.querySelector('.title-garage');

    updateButton?.addEventListener('click', async () => {
            const newCreateCar = new Map();
            newCreateCar.set((updateCarInput as HTMLInputElement).name, (updateCarInput as HTMLInputElement).value);
            newCreateCar.set((updateCarColor as HTMLInputElement).name, (updateCarColor as HTMLInputElement).value);
            const car = Object.fromEntries(newCreateCar);
            await updateCar(car, store.idCar as number);
            await updateCarsStore();
            (garageList as HTMLElement).innerHTML = createGarageListTemplate();
            (garageTitle as HTMLElement).innerHTML = createTitle('Garage');

    })
}