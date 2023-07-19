import { createCar, updateCarsStore } from "./get-cars";
import { createGarageListTemplate } from "../view/garage-list";
import { createTitle } from "../view/title";

export const createCarEvent = async () => {
    const createCarButton: HTMLElement | null = document.querySelector('.button-create');
    const createCarInput: HTMLInputElement | null = document.querySelector('.create-input');
    const createCarColor: HTMLInputElement | null = document.querySelector('.create-color');
    const garageList: HTMLElement | null = document.querySelector('.garage-list');
    const garageTitle: HTMLElement | null = document.querySelector('.title-garage');

//     let map = new Map();
// map.set('banana', 1);
// map.set('orange', 2);
// map.set('meat', 4);

// let obj = Object.fromEntries(map.entries()); // создаём обычный объект (*)

    createCarButton?.addEventListener('click', async () => {
        const newCreateCar = new Map();
        newCreateCar.set((createCarInput as HTMLInputElement).name, (createCarInput as HTMLInputElement).value);
        newCreateCar.set((createCarColor as HTMLInputElement).name, (createCarColor as HTMLInputElement).value);
        const car = Object.fromEntries(newCreateCar);
        console.log(car)
        await createCar(car);
        await updateCarsStore();
        (garageList as HTMLElement).innerHTML = createGarageListTemplate();
        (garageTitle as HTMLElement).innerHTML = createTitle('Garage');
    })
}