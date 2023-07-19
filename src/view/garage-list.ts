import { createGarageItemTemplate } from "./garage-item";
import { store } from "../store/store";

const createGarageListTemplate = (): string => {
    return `
        ${store.carsArr.map((car) => `<li class='car-item' id ="car-${car.id}">${createGarageItemTemplate(car)}</li>`).join('')}
`
};

export { createGarageListTemplate }