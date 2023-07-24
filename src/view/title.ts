import { store } from "../store/store";

const createTitle = (name: string): string => {
    return `
    ${name}: ${name === 'Garage' ? store.carsArr.length : store.winnersArr.length}</h1>
`
}

const createTitleTemplate = (name: string): string => {
    return `
    <h1 class="title title-${name.toLowerCase()}">${createTitle(name)}</h1>
    <h2>Page № ${store.pages}</h2>
`
};

export { createTitleTemplate, createTitle }