import { RenderPosition } from "./const";

const createElement = (template: string): Node | null => {
    const newElement = document.createElement('div');
    newElement.innerHTML = template;

    return newElement.firstChild;
};

const render = (container: HTMLElement, child: string, place: string): void => {

    const childElement = createElement(child);

    switch (place) {
        case RenderPosition.AFTERBEGIN:
            (container as HTMLElement).prepend(childElement as HTMLElement);
            break;
        case RenderPosition.BEFOREEND:
            (container as HTMLElement).append(childElement as HTMLElement);
            break;
    }
};

const remove = (component: HTMLElement | null) => {
    (component as HTMLElement).remove();
};

export { createElement, render, remove }