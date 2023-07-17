import { createConsoleTemplate } from "./console"
import { createGarageTemplate } from "./garage"
import { createPaginationTemplate } from "./pagination"
import { createWinnersTemplate } from "./winners"

const createMainTemplate = (): string => (
    `<main class="main">
    ${createConsoleTemplate()}
    ${createGarageTemplate()}
    ${createWinnersTemplate()}
    ${createPaginationTemplate()}
    </main>`
)


export { createMainTemplate }