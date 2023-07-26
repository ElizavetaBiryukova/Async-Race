import { createGarageListTemplate } from "../view/garage-list";
import { createWinnersListTemplate } from "../view/winners-list";
import { createTitle } from "../view/title";
import { OpenSection } from "./const";

const updateGarageTemplate = () => {
    const garageList: HTMLElement | null = document.querySelector('.garage-list');
    const garageTitle: HTMLElement | null = document.querySelector('.title-garage');

    (garageList as HTMLElement).innerHTML = createGarageListTemplate();
    (garageTitle as HTMLElement).innerHTML = createTitle(OpenSection.GARAGE);

}

const updateWinnersTemplate = () => {
    const winnersList: HTMLElement | null = document.querySelector('.winners-list');
    const winnersTitle: HTMLElement | null = document.querySelector('.title-winners');

    (winnersList as HTMLElement).innerHTML = createWinnersListTemplate();
    (winnersTitle as HTMLElement).innerHTML = createTitle(OpenSection.WINNERS);
}

export { updateGarageTemplate, updateWinnersTemplate }