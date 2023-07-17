const createPaginationTemplate = (): string => {
    return `
    <section class="pagination">
    <div class="buttons">
        <button class="button prev-button">Prev</button>
        <button class="button next-button">Next</button>
    </div>
</section>
`
};

export { createPaginationTemplate }