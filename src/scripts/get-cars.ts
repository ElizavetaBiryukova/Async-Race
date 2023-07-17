import { Car, Cars, CreateCar } from "../types/types";
import { store } from "../store/store";

const path = 'http://localhost:3000';

export const getCars = async (page: number): Promise<Cars> => {
    const res = await fetch(`${path}/garage/?_page=${page}`);
    const carsCount = {
        items: await res.json(),
        count: Number(res.headers.get('X-Total-Count')),
    };
    return carsCount;
};


export const updateCarsStore = async () => {
    const { items, count } = await getCars(store.pages);
    store.carsArr = items;
    store.cars = count;
};

export const getCar = async (id: number): Promise<Car> =>
    (
        await fetch(`${path}/garage/${id}`, {
            method: 'GET',
        })
    ).json();






export const createCar = async (car: CreateCar) =>
    (
        await fetch(`${path}/garage`, {
            method: 'POST',
            body: JSON.stringify(car),
            headers: {
                'Content-Type': 'application/json',
            },
        })
    ).json();


// console.log(await getCar(3));
// await updateCars();
// console.log(store);