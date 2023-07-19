import { createTitleTemplate } from "./title";
import { createGarageListTemplate } from "./garage-list";

const createGarageTemplate = (): string => {
    return `
    <section class="garage">
    ${createTitleTemplate('Garage')}
    <ul class="garage-list">
        ${createGarageListTemplate()}
    </ul>
</section>
`
};

export { createGarageTemplate }