import { createGarageItemTemplate } from "./garage-item";
import { store } from "../store/store";

const createGarageListTemplate = (): string => {
    return `
        ${store.carsArr.map((car) => `<li id ="car-road-${car.id}">${createGarageItemTemplate(car)}</li>`).join('')}
`
};

export { createGarageListTemplate }