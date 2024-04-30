function toggle() {
    let button = document.querySelector(`.button`);
    let divExtra = document.getElementById(`extra`);
    if (divExtra.style.display === `none` || divExtra.style.display === ``) {
        divExtra.style.display = `block`;
    } else {
        divExtra.style.display = `none`;
    }
    //divExtra.style.display = divExtra.style.display === `none` || divExtra.style.display == ``? `block` : `none`;

    if (button.textContent === `More`) {
        button.textContent = `Less`;
    } else {
        button.textContent = `More`;
    }

    //button.textContent = button.textContent===`More` ? `Less` : `More`
}