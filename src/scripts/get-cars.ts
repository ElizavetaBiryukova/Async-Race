import { Car, CreateCar } from "../types/types"

const path = 'http://localhost:3000';

export const getCars = async (): Promise<Car> =>
    (
        await fetch(`${path}/garage`, {
            method: 'GET',
            headers: {
                'X-Total-Count': '4',
            },
        })
    ).json();

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


console.log(await getCar(3));

console.log(await getCars());