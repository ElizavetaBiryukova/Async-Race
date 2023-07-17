import { createTitleTemplate } from "./title";

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
        <tbody>
            <tr>
                <td>1</td>
                <td>111</td>
                <td>Tesla</td>
                <td>0</td>
                <td>100000</td>
            </tr>
        </tbody>
    </table>
</section>
`
};

export { createWinnersTemplate }