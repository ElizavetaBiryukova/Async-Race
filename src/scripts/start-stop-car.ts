import { WinnersCars } from "../types/types";
import { startCar, driveCar, stopCar } from "./api";
import { store } from "../store/store";
import { addDistance } from "./add-distance";
import { animation } from "./animation";


export const startCarAnimation = async (id: number): Promise<WinnersCars> => {
    const { velocity, distance } = await startCar(id);
    const time = Math.round(distance / velocity);

    const car: HTMLElement | null = document.querySelector(`.car-${id}`);

    const flag: HTMLElement | null = document.querySelector(`.flag-${id}`);

    const currentDistance = Math.floor(addDistance((car as HTMLElement), (flag as HTMLElement)));

    store.animation[id] = animation((car as HTMLElement), currentDistance, time);

    const { success } = await driveCar(id).then((data) => {

        if (data.success === false) {
            window.cancelAnimationFrame(store.animation[id].id);
        }
        return data;
    });
    return { success, id, time };
};

export const stopCarAnimation = async (id: number) => {
    await stopCar(id);
    const car: HTMLElement | null = document.querySelector(`.car-${id}`);
    (car as HTMLElement).style.transform = 'translateX(0)';
    if (store.animation[id] !== undefined) window.cancelAnimationFrame(store.animation[id].id);
};

export const drivingCar = async () => {
    const garage: HTMLElement | null = document.querySelector('.garage-list');


    garage?.addEventListener('click', async (event) => {
        if ((event.target as HTMLElement).classList.contains('control-start')) {
            const carId = Number(((event.target as HTMLElement).closest('li.car-item') as HTMLElement).id.replace('car-', ''));
            startCarAnimation(carId);
        }

        if ((event.target as HTMLElement).classList.contains('control-stop')) {
            const carId = Number(((event.target as HTMLElement).closest('li.car-item') as HTMLElement).id.replace('car-', ''));
            stopCarAnimation(carId);
        }
    })
}