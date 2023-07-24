import { createTitleTemplate } from "./title";
import { createWinnersListTemplate } from "./winners-list";

const createWinnersTemplate = (): string => {
    return `
    <section class="winners">
    ${createTitleTemplate('Winners')}
    <table class="table" cellspacing="0" border="0" cellpadding="0">
        <thead>
            <th>Number</th>
            <th>Car</th>
            <th>Name</th>
            <th>Wins</th>
            <th>Best time (seconds)</th>
        </thead>
        <tbody class="winners-list">
        ${createWinnersListTemplate()}
        </tbody>
    </table>
</section>
`
};

export { createWinnersTemplate }