import { createCar, updateCarsStore } from "./api";
import { updateGarageTemplate } from "./update-template";

const createCarEvent = async (): Promise<void> => {
    const createCarButton: HTMLElement | null = document.querySelector('.button-create');
    const createCarInput: HTMLInputElement | null = document.querySelector('.create-input');
    const createCarColor: HTMLInputElement | null = document.querySelector('.create-color');

    createCarButton?.addEventListener('click', async (): Promise<void> => {
        const newCreateCar = new Map();
        newCreateCar.set((createCarInput as HTMLInputElement).name, (createCarInput as HTMLInputElement).value);
        newCreateCar.set((createCarColor as HTMLInputElement).name, (createCarColor as HTMLInputElement).value);
        const car = Object.fromEntries(newCreateCar);
        await createCar(car);
        await updateCarsStore();
        updateGarageTemplate();
    })
}

export { createCarEvent }