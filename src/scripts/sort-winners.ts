import { store } from "../store/store";
import { updateWinnersStore } from "./api";
import { updateWinnersTemplate } from "./update-template";


const addSort = (sort: string | null, order: string | null) => sort && order ? `&_sort=${sort}&_order=${order}` : '';


const setSort = () => {
    store.sortOrder = store.sortOrder === 'ASC' ? 'DESC' : 'ASC';
};

const listenSort = async () => {
    const winsButton = document.querySelector('.wins');
    const timeButton = document.querySelector('.time');

    winsButton?.addEventListener('click', async (): Promise<void> => {
        store.sortValue = 'wins';
        setSort();
        await updateWinnersStore();
        updateWinnersTemplate();
    });

    timeButton?.addEventListener('click', async (): Promise<void> => {
        store.sortValue = 'time';
        setSort();
        await updateWinnersStore();
        updateWinnersTemplate();
    });
};

export { addSort, listenSort }