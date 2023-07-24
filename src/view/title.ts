import { store } from "../store/store";

const createTitle = (name: string): string => {
    return `
    ${name}: ${name === 'Garage' ? store.cars : store.winners}</h1>
`
}

const createPages = (name: string): string => {
    return `
    Page № ${name === 'Garage' ? store.carsPage : store.winnersPage}</h1>
`
}

const createTitleTemplate = (name: string): string => {
    return `
    <h1 class="title title-${name.toLowerCase()}">${createTitle(name)}</h1>
    <h2  class="page-${name.toLowerCase()}">${createPages(name)} </h2>
`
};

export { createTitleTemplate, createTitle, createPages }