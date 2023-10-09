const form = document.querySelector('form');

const arrayInputs = Array.from(document.querySelectorAll('.input-item'));
const arrayPhones = Array.from(document.querySelectorAll('.input-phone'));
arrayInputs.push(document.querySelector('textarea'), document.querySelector('select'));

const obj = {};

form.addEventListener('submit', e => {
    e.preventDefault();

    arrayInputs.forEach(input => packInfo(input));
    joinPhone(arrayPhones);
    
    console.log(obj);
});

function packInfo(input) {
    obj[input.name] = input.value;
}

function joinPhone([n1, n2, n3]) {
    obj.phone = `${n1.value}${n2.value}${n3.value}`;
}