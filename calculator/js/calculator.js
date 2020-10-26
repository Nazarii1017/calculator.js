document.querySelectorAll('.calculator .digits button')
    .forEach(button => button.addEventListener('click', digitPressed));

function digitPressed(ev) {
    const btn = ev.target;
    const display = document.querySelector('.display');
    display.value += btn.innerText;
}

document.querySelectorAll('.calculator .operators button')
    .forEach(button => button.addEventListener('click', operatorPressed));

function operatorPressed(ev) {
    const btn = ev.target;
    const display = document.querySelector('.display');
    display.value += btn.innerText;
}
document.querySelector('.calculator .equal').addEventListener('click', equalPressed);

function equalPressed() {
    const display = document.querySelector('.display');
    display.value = eval(display.value).toFixed(2);
}
document.querySelector('.calculator .clean').addEventListener('click', cleanPressed);

function cleanPressed() {
    const display = document.querySelector('.display');
    display.value = ('');
}