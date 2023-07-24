import { ObjNumber } from "../types/types";

export function animation(car: HTMLElement, distance: number, time: number) {
    const state: ObjNumber = {};
    const startTime = new Date().getTime();
    async function getInterval() {
        const currTime = new Date().getTime();
        const passedDistance = Math.round((currTime - startTime) * (distance / time));

        car.style.transform = `translateX(${Math.min(passedDistance, distance)}px)`;
        if (passedDistance < distance) {
            state.id = window.requestAnimationFrame(getInterval);
        }
    }
    state.id = window.requestAnimationFrame(getInterval);
    return state;
}