import { createConsoleTemplate } from "./console"
import { createGarageListTemplate } from "./garage-list"
import { createPaginationTemplate } from "./pagination"
import { createWinnersTemplate } from "./winners"

const createMainTemplate = (): string => (
    `<main class="main">
    ${createConsoleTemplate()}
    ${createGarageListTemplate()}
    ${createWinnersTemplate()}
    ${createPaginationTemplate()}
    </main>`
)


export { createMainTemplate }