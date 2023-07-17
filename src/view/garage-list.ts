import { createTitleTemplate } from "./title";
import { createGarageTemplate } from "./garage";
import { store } from "../store/store";

const createGarageListTemplate = (): string => {
    return `
    <section class="garage">
    ${createTitleTemplate('Garage')}
    <ul class="garage-list">
        ${store.carsArr.map((car) => `<li id ="car-road-${car.id}">${createGarageTemplate(car)}</li>`).join('')}
    </ul>
</section>
`
};

export { createGarageListTemplate }