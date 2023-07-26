import { deleteCar, updateCarsStore, deleteWinner, updateWinnersStore, getWinner } from "./api";
import { updateWinnersTemplate, updateGarageTemplate } from "./update-template";



const removeCar = async (): Promise<void> => {
    const garage: HTMLElement | null = document.querySelector('.garage-list');

    garage?.addEventListener('click', async (event): Promise<void> => {
        if ((event.target as HTMLElement).classList.contains('remove-button')) {
            const carId = Number(((event.target as HTMLElement).closest('li.car-item') as HTMLElement).id.replace('car-', ''));
            await deleteCar(carId);

            if (await getWinner(carId)) {
                await getWinner(carId)
                await deleteWinner(carId);
                await updateWinnersStore();
                updateWinnersTemplate();
            }
            await updateCarsStore();

            updateGarageTemplate();
        }
    })
}

export { removeCar }