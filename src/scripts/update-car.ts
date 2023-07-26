import { updateCar, updateCarsStore } from "./api";
import { store } from "../store/store";
import { updateGarageTemplate } from "./update-template";


const updateCarEvent = async (): Promise<void> => {
    const updateButton: HTMLElement | null = document.querySelector('.button-update');
    const updateCarInput: HTMLInputElement | null = document.querySelector('.update-input');
    const updateCarColor: HTMLInputElement | null = document.querySelector('.update-color');

    updateButton?.addEventListener('click', async (): Promise<void> => {
        const newCreateCar = new Map();
        newCreateCar.set((updateCarInput as HTMLInputElement).name, (updateCarInput as HTMLInputElement).value);
        newCreateCar.set((updateCarColor as HTMLInputElement).name, (updateCarColor as HTMLInputElement).value);
        const car = Object.fromEntries(newCreateCar);
        await updateCar(car, store.idCar as number);
        await updateCarsStore();
        updateGarageTemplate();
    })
}

export { updateCarEvent }