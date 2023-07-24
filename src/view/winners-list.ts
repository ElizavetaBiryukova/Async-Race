import { store } from "../store/store";
import { createCarSvg } from "./car-svg";

const createWinnersListTemplate = (): string => {
    return `${store.winnersArr.map((winner, index) =>
        `<tr>
        <td>${index + 1}</td>
            <td>${createCarSvg(winner.car.color)}</td>
            <td>${winner.car.name}</td>
            <td>${winner.wins}</td>
            <td>${winner.time}</td>
        </tr>
        `
    )
        .join(' ')
        }
`
};

export { createWinnersListTemplate }