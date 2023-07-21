import { getCar } from "./get-cars";

export const selectCar = async () => {
    const garage: HTMLElement | null = document.querySelector('.garage-list');
    const updateName: HTMLInputElement | null = document.querySelector('.update-input');
    const updateColor: HTMLInputElement | null = document.querySelector('.update-color');

    garage?.addEventListener('click', async (event) => {
        if ((event.target as HTMLElement).classList.contains('select-button')) {
            const carId = Number(((event.target as HTMLElement).closest('li.car-item') as HTMLElement).id.replace('car-', ''));
            const selectedCar = await getCar(carId);
            (updateName as HTMLInputElement).value = selectedCar.name;
            (updateColor as HTMLInputElement).value = selectedCar.color;
        }
    })
}