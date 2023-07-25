export const validedUpdate = async () => {
    const input: HTMLInputElement | null = document.querySelector('.update-input');
    const color: HTMLInputElement | null = document.querySelector('.update-color');
    const button: HTMLButtonElement | null = document.querySelector('.button-update');

    (input as HTMLInputElement).disabled = false;
    (color as HTMLInputElement).disabled = false;
    (button as HTMLButtonElement).disabled = false;
}

