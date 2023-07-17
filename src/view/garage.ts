import { createCarSvg } from "./car-svg";
import { createTitleTemplate } from "./title";

const createGarageTemplate = (): string => {
    return `
    <section class="garage">
    ${createTitleTemplate('Garage')}
    <ul class="garage-list">
        <li class="garage-item">

            <div class="buttons">
                <button class="button select-button">Select</button>
                <button class="button remove-button">Remove</button>
                <span class="car-name">Tesla</span>
            </div>
            <div class="road">
                <div class="road-area">
                    <div class="controls">
                        <button class="control">Start</button>
                        <button class="control">Stop</button>
                    </div>
                    <div class="car">
                    ${createCarSvg()}
                    </div>
                </div>
                <div class="flag">&#127937;</div>
            </div>
        </li>
    </ul>
</section>
`
};

export { createGarageTemplate }