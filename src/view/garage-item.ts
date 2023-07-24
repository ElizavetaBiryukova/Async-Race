import { createCarSvg } from "./car-svg";
import { Car } from "../types/types";

const createGarageItemTemplate = ({name, color, id}: Car): string => {
    return `
            <div class="buttons">
                <button class="button select-button">Select</button>
                <button class="button remove-button">Remove</button>
                <span class="car-name">${name}</span>
            </div>
            <div class="road">
                <div class="road-area">
                    <div class="controls">
                        <button class="control control-start control-start-${id}">Start</button>
                        <button class="control control-stop control-stop-${id}">Stop</button>
                    </div>
                    <div class="car car-${id}">
                    ${createCarSvg(color)}
                    </div>
                </div>
                <div class="flag flag-${id}">&#127937;</div>
            </div>
`
};

export { createGarageItemTemplate }