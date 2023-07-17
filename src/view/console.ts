const createConsoleTemplate = (): string => {
    return `
<section class="console">
<div class="forms">
    <form action="" class="form">
        <input type="text" class="input">
        <input type="color" class="color" value=#ffffff>
        <button class="button button-form" type="submit">Create</button>
    </form>
    <form action="" class="form">
        <input type="text" class="input">
        <input type="color" class="color" value=#ffffff>
        <button class="button button-form" type="submit">Update</button>
    </form>
</div>

<div class="race-controls">
    <button class="button race-button">Race</button>
    <button class="button reset-button">Reset</button>
    <button class="button generator-button">Generate cars</button>
</div>
</section>
`
};

export { createConsoleTemplate }