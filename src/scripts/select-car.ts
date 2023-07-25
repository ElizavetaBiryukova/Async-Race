import { getCar } from "./api";
import { store } from "../store/store";
import { validedUpdate } from "./valided-update";

export const selectCar = async () => {
    const garage: HTMLElement | null = document.querySelector('.garage-list');
    const updateName: HTMLInputElement | null = document.querySelector('.update-input');
    const updateColor: HTMLInputElement | null = document.querySelector('.update-color');

    garage?.addEventListener('click', async (event) => {
        if ((event.target as HTMLElement).classList.contains('select-button')) {
            validedUpdate();
            const carId = Number(((event.target as HTMLElement).closest('li.car-item') as HTMLElement).id.replace('car-', ''));
            store.idCar = carId;
            const selectedCar = await getCar(carId);
            (updateName as HTMLInputElement).value = selectedCar.name;
            (updateColor as HTMLInputElement).value = selectedCar.color;
        }
    })
}