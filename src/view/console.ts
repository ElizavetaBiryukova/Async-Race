const createConsoleTemplate = (): string => {
    return `
<section class="console">
<div class="forms">
    <form action="" class="form">
        <input type="text" class="input create-input" name="name" autocomplete="given-name" value="">
        <input type="color" class="color create-color" value="#ffffff" name="color">
        <button class="button button-form button-create" type="submit">Create</button>
    </form>
    <form action="" class="form">
        <input type="text" class="input update-input" name="name" autocomplete="given-name" value="">
        <input type="color" class="color update-color" value="#ffffff" name="color">
        <button class="button button-form button-update" type="submit">Update</button>
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