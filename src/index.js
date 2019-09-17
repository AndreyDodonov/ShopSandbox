'use strict';

/* checkbox */

const checkbox = document.querySelectorAll('.filter-check_checkbox');

checkbox.forEach((elem) => {
    elem.addEventListener('change', function () {
        if (this.checked){
            this.nextElementSibling.classList.add('checked');
        } else {
            this.nextElementSibling.classList.remove('checked');
        }
    });
});

/* cart */

const btnCard = document.querySelector('#cart');
const modalCard = document.querySelector('.cart');
const btnClose = document.querySelector('.cart-close');

btnCard.addEventListener('click', () => {
    modalCard.style.display = 'flex';
    document.body.style.overflow = 'hidden';
});
btnClose.addEventListener('click', () => {
    modalCard.style.display = '';
    document.body.style.overflow = '';
});


