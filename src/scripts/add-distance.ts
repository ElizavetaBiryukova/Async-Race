const getPosition = (el: HTMLElement): number => {
    const { left, width } = el.getBoundingClientRect();
    return left + width;
}

const addDistance = (start: HTMLElement, finish: HTMLElement): number => {
    const startPosition = getPosition(start);
    const finishPosition = getPosition(finish);
    return finishPosition - startPosition;
}

export {getPosition, addDistance}