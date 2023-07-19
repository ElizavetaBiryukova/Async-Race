import { deleteCar, updateCarsStore } from "./get-cars";
import { createGarageListTemplate } from "../view/garage-list";
import { createTitle } from "../view/title";

export const removeCar = async () => {
    const garage: HTMLElement | null = document.querySelector('.garage-list');
    const garageList: HTMLElement | null = document.querySelector('.garage-list');
    const garageTitle: HTMLElement | null = document.querySelector('.title-garage');


    garage?.addEventListener('click',  async (event) => {
        if ((event.target as HTMLElement).classList.contains('remove-button')) {
            const carId = Number(((event.target as HTMLElement).closest('li.car-item') as HTMLElement).id.replace('car-', ''));
            await deleteCar(carId);
            await updateCarsStore();
            (garageList as HTMLElement).innerHTML = createGarageListTemplate();
            (garageTitle as HTMLElement).innerHTML = createTitle('Garage');

        }
    })
}