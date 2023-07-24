export function getPosition(el: HTMLElement) {
    const { left, width } = el.getBoundingClientRect();
    return left + width;
}

export function addDistance(start: HTMLElement, finish: HTMLElement) {
    const startPosition = getPosition(start);
    const finishPosition = getPosition(finish);
    return finishPosition - startPosition;
}