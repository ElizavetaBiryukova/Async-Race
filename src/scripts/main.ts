import { render } from "./render";
import { createHeaderTemplate } from "../view/header";
import { createMainTemplate } from "../view/main";
import { RenderPosition } from "./const";

const siteBodyElement: HTMLElement | null = document.querySelector('.body');

render(siteBodyElement as HTMLElement, createHeaderTemplate(), RenderPosition.AFTERBEGIN);
render(siteBodyElement as HTMLElement, createMainTemplate(), RenderPosition.BEFOREEND);

