import { Car, Cars, CreateCar, CarMovement, Winners, GetWinners, Engine } from "../types/types";
import { store } from "../store/store";
import { GARAGE, ENGINE, WINNERS, PAGE, LIMIT, EngineParam, EngineStatus, NumberPerPage } from "../scripts/const";
import { addSort } from "./sort-winners";

export const getCars = async (page: number, limit = 7): Promise<Cars> => {
    const res = await fetch(`${GARAGE}${PAGE}${page}${LIMIT}${limit}`);
    const carsCount = {
        items: await res.json(),
        count: Number(res.headers.get('X-Total-Count')),
    };
    return carsCount;
};

export const updateCarsStore = async (): Promise<void> => {
    const { items, count } = await getCars(store.carsPage);
    store.carsArr = items;
    store.cars = count;
};

export const updateWinnersStore = async (): Promise<void> => {
    const { items, count } = await getWinners(store.winnersPage, NumberPerPage.WINNERS, store.sortValue, store.sortOrder);
    store.winnersArr = items;
    store.winners = count;
};

export const getCar = async (id: number): Promise<Car> =>
    (
        await fetch(`${GARAGE}/${id}`, {
            method: 'GET',
        })
    ).json();

export const createCar = async (car: CreateCar): Promise<void> =>
    (
        await fetch(`${GARAGE}`, {
            method: 'POST',
            body: JSON.stringify(car),
            headers: {
                'Content-Type': 'application/json',
            },
        })
    ).json();

export const deleteCar = async (id: number): Promise<void> =>
    (
        await fetch(`${GARAGE}/${id}`, {
            method: 'DELETE',
        })
    ).json();

export const updateCar = async (car: CreateCar, id: number): Promise<void> =>
    (
        await fetch(`${GARAGE}/${id}`, {
            method: 'PUT',
            body: JSON.stringify(car),
            headers: {
                'Content-Type': 'application/json',
            },
        })
    ).json();

export const startCar = async (id: number): Promise<CarMovement> =>
    (
        await fetch(`${ENGINE}${EngineParam.ID}${id}${EngineParam.STATUS}${EngineStatus.START}`, {
            method: 'PATCH'
        })
    ).json();

export const stopCar = async (id: number): Promise<CarMovement> =>
    (
        await fetch(`${ENGINE}${EngineParam.ID}${id}${EngineParam.STATUS}${EngineStatus.STOP}`, {
            method: 'PATCH'
        })
    ).json();

export const driveCar = async (id: number): Promise<Engine> => {
    const res = await fetch(`${ENGINE}?id=${id}&status=drive`, { method: 'PATCH' }).catch();
    return res.status === 200 ? { ...(await res.json()) } : { success: false };
};

export const getWinners = async (page: number, limit = NumberPerPage.WINNERS, sort: string | null, order: string | null): Promise<GetWinners> => {
    const res = await fetch(`${WINNERS}${PAGE}${page}${LIMIT}${limit}&${addSort(sort, order)}`);
    const items = await res.json();

    return {
        items: await Promise.all(items.map(async (winner: Winners) => ({ ...winner, car: await getCar(winner.id) }))),
        count: Number(res.headers.get('X-Total-Count')),
    };
};

export const getWinner = async (id: number): Promise<Winners> =>
    (
        await fetch(`${WINNERS}/${id}`, {
            method: 'GET',
        })
    ).json();

export const deleteWinner = async (id: number): Promise<void> =>
    (
        await fetch(`${WINNERS}/${id}`, {
            method: 'DELETE',
        })
    ).json();

export const createWinner = async (body: Winners): Promise<void> =>
    (
        await fetch(`${WINNERS}`, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
            },
        })
    ).json();

export const updateWinner = async (id: number, body: Winners): Promise<void> =>
    (
        await fetch(`${WINNERS}/${id}`, {
            method: 'PUT',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
            },
        })
    ).json();

