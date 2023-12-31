import { Car, Cars, CreateCar } from "../types/types";
import { store } from "../store/store";

const path = 'http://localhost:3000';
const garage = `${path}/garage`;

export const getCars = async (): Promise<Cars> => {
    const res = await fetch(`${garage}`);
    const carsCount = {
        items: await res.json(),
        count: Number(res.headers.get('X-Total-Count')),
    };
    return carsCount;
};


export const updateCarsStore = async () => {
    const { items, count } = await getCars();
    store.carsArr = items;
    store.cars = count;
};

export const getCar = async (id: number): Promise<Car> =>
    (
        await fetch(`${garage}/${id}`, {
            method: 'GET',
        })
    ).json();



export const createCar = async (car: CreateCar) =>
    (
        await fetch(`${garage}`, {
            method: 'POST',
            body: JSON.stringify(car),
            headers: {
                'Content-Type': 'application/json',
            },
        })
    ).json();

    export const deleteCar = async (id: number) =>
    (
        await fetch(`${garage}/${id}`, {
            method: 'DELETE',
        })
    ).json();

    export const updateCar = async (car: CreateCar, id: number) =>
    (
        await fetch(`${garage}/${id}`, {
            method: 'PUT',
            body: JSON.stringify(car),
            headers: {
                'Content-Type': 'application/json',
            },
        })
    ).json();

    // deleteCar(2)


// console.log(await getCar(3));
// await updateCars();
// console.log(store);