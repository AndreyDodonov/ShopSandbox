'use strict';

/* checkbox */

function toggleCheckBox() {

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
}

/* cart */

const CartFunction = () => {

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
};

/* add and remove goods from cart */

const CardFunction = () => {

    const cards = document.querySelectorAll('.goods .card'),
        cartWrapper = document.querySelector('.cart-wrapper'),
        cartEmpty = document.getElementById('cart-empty'),
        countGoods = document.querySelector('.counter');

    cards.forEach((card) => {
        const btn = card.querySelector('button');
        btn.addEventListener('click', () => {
            const cardClone = card.cloneNode(true);
            cartWrapper.appendChild(cardClone);
            showData();

            const removeBtn = cardClone.querySelector('.btn');
            removeBtn.textContent = 'Удалить из корзины';
            removeBtn.addEventListener('click', () => {
                cardClone.remove();
                showData();
            });
        });
    });

    function showData() {
        const cardsCart = cartWrapper.querySelectorAll('.card'),
            cardsPrice = cartWrapper.querySelectorAll('.card-price'),
            cardTotal = document.querySelector('.cart-total span');
        let sum = 0;

        countGoods.textContent = cardsCart.length;
        cardsPrice.forEach((cardPrice) => {
            let price = parseFloat(cardPrice.textContent);
            sum += price;
        });

        cardTotal.textContent = sum;

        if (cardsCart.length !== 0) {
            cartEmpty.remove();
        } else {
            cartWrapper.appendChild(cartEmpty);
        }
    }

};

/* filter */

const filterFunctions = () => {
    const cards = document.querySelectorAll('.goods .card'),
          discountCheckbox = document.getElementById('discount-checkbox'),
          min = document.getElementById('min'),
          max = document.getElementById('max');
    
    discountCheckbox.addEventListener('click', () => {
        cards.forEach((elem) => {
            if (discountCheckbox.checked) {
                if(!elem.querySelector('.card-sale')) {
                    elem.parentNode.style.display = 'none';
                }
            } else {
                    elem.parentNode.style.display = '';
            }
        });
    });

    const filterPrice = () => {
        cards.forEach((elem) => {
            const cardPrice = document.querySelector('.card-price');
            let price = parseFloat(cardPrice.textContent);
            
            if (price < min.value || price > max.value) {
                elem.parentNode.style.display = 'none';
            } 
           
            
            
        });
    };

    max.addEventListener('change', filterPrice);
    min.addEventListener('change', filterPrice);


};

/* search */

const searchFunctions = () => {



};

/* call of functions */
toggleCheckBox();
CartFunction();
CardFunction();
filterFunctions();
searchFunctions();