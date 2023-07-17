import { store } from "../store/store";

const createTitleTemplate = (name: string): string => {
    return `
    <h1 class="title">${name}: ${name === 'Garage' ? store.cars : store.winners}</h1>
    <h2>Page № ${store.pages}</h2>
`
};

export { createTitleTemplate }