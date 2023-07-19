import { createCarSvg } from "./car-svg";
import { Car } from "../types/types";

const createGarageItemTemplate = ({name, color}: Car): string => {
    return `
            <div class="buttons">
                <button class="button select-button">Select</button>
                <button class="button remove-button">Remove</button>
                <span class="car-name">${name}</span>
            </div>
            <div class="road">
                <div class="road-area">
                    <div class="controls">
                        <button class="control">Start</button>
                        <button class="control">Stop</button>
                    </div>
                    <div class="car">
                    ${createCarSvg(color)}
                    </div>
                </div>
                <div class="flag">&#127937;</div>
            </div>
`
};

export { createGarageItemTemplate }