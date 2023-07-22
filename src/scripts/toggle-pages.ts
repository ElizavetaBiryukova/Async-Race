export const togglePage = async () => {
    const garageButton: HTMLElement | null = document.querySelector('.button-garage');
    const garageBoard: HTMLElement | null = document.querySelector('.garage');
    const winnersButton: HTMLElement | null = document.querySelector('.button-winner');
    const winnersBoard: HTMLElement | null = document.querySelector('.winners');
    const consoleBoard: HTMLElement | null = document.querySelector('.console');

    garageButton?.addEventListener('click', async () => {
        (winnersBoard as HTMLElement).style.display = 'none';
        (garageBoard as HTMLElement).style.display = 'block';
        (consoleBoard as HTMLElement).style.display = 'block';
    })

    winnersButton?.addEventListener('click', async () => {
        (garageBoard as HTMLElement).style.display = 'none';
        (consoleBoard as HTMLElement).style.display = 'none';
        (winnersBoard as HTMLElement).style.display = 'block';
    })

}


