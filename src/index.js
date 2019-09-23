'use strict';

/* checkbox */

const checkbox = document.querySelectorAll('.filter-check_checkbox');

checkbox.forEach((elem) => {
    elem.addEventListener('change', function () {
        if (this.checked) {
            this.nextElementSibling.classList.add('checked');
        } else {
            this.nextElementSibling.classList.remove('checked');
        }
    });
});

/* cart */

const btnCard = document.querySelector('#cart'),
    modalCard = document.querySelector('.cart'),
    btnClose = document.querySelector('.cart-close');

btnCard.addEventListener('click', () => {
    modalCard.style.display = 'flex';
    document.body.style.overflow = 'hidden';
});
btnClose.addEventListener('click', () => {
    modalCard.style.display = '';
    document.body.style.overflow = '';
});

/* add and remove goods from cart */

const cards = document.querySelectorAll('.goods .card'),
    cartWrapper = document.querySelector('.cart-wrapper'),
    cartEmpty = document.getElementById('cart-empty'),
    countGoods = document.querySelector('.counter');

cards.forEach((card) => {
    const btn = card.querySelector('button');
    btn.addEventListener('click', () => {
        const cardClone = card.cloneNode(true);
        cartWrapper.appendChild(cardClone);
        cartEmpty.remove();
        showData();
    });
});

function showData() {
    const cardsCart = cartWrapper.querySelectorAll('.card'),
        cardsPrice = cartWrapper.querySelectorAll('.card-price'),
        cardTotal = document.querySelector('.cart total span');
    let sum = 0;

    countGoods.textContent = cardsCart.length;
    cardsPrice.forEach((cardPrice) => {
        let price = parseFloat(cardPrice.textContent);
        sum = sum + price;
    });

}