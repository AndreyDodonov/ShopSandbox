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

const cartFunction = () => {
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

const cardFunction = () => {
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
    const filter = () => {
        cards.forEach((elem) => {
            const cardPrice = elem.querySelector('.card-price'),
                price = parseFloat(cardPrice.textContent),
                discount = elem.querySelector('.card-sale');
            if ((min.value && price < min.value) || (max.value && price > max.value)) {
                elem.parentNode.style.display = 'none';
            } else if (discountCheckbox.checked && !discount) {
                elem.parentNode.style.display = 'none';
            } else {
                elem.parentNode.style.display = '';
            }
        });
    };
    discountCheckbox.addEventListener('click', filter);
    min.addEventListener('change', filter);
    max.addEventListener('change', filter);
};

/* search */

const searchFunctions = () => {
    const search = document.querySelector('.search-wrapper_input'),
        searchBtn = document.querySelector('.search-btn'),
        cards = document.querySelectorAll('.goods .card');
    const searchEvent = () => {
        const searchText = new RegExp(search.value.trim(), 'i');
        cards.forEach((elem) => {
            const title = elem.querySelector('.card-title');
            if (!searchText.test(title.textContent)) {
                elem.parentNode.style.display = 'none';
            } else {
                elem.parentNode.style.display = '';
            }
        });
        search.value = '';
    };

    searchBtn.addEventListener('click', searchEvent);
    search.addEventListener('change', searchEvent);
};

/* get data from server */

const getData = () => {
    const goodsWrapper = document.querySelector('.goods');
    return fetch('../db/db.json')
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Данные не были получены, ошибка: ' + response.status);
            }
        })
        .then((data) => {
            return data;
        })
        .catch((err) => {
            console.warn(err);
            goodsWrapper.innerHTML = '<div style = "color:red; font-size:30px"> Упс, что-то пошло не так! </div>';
        });

};

/* render cards of goods */

const renderCards = (data) => {
    const goodsWrapper = document.querySelector('.goods');
    data.goods.forEach((item) => {
        const card = document.createElement('div');
        card.className = 'col-12 col-md-6 col-lg-4 col-xl-3';
        card.innerHTML = `                
				<div class="card" data-category="${item.category}">
					${item.sale ? '<div class="card-sale">🔥Hot Sale🔥</div>' : ''}
					<div class="card-img-wrapper">
						<span class="card-img-top"
							style="background-image: url('${item.img}')"></span>
					</div>
					<div class="card-body justify-content-between">
						<div class="card-price" style="${item.sale ? 'color:red;' : ''}">${item.price} ₽</div>
						<h5 class="card-title">${item.title}</h5>
						<button class="btn btn-primary">В корзину</button>
					</div>
				</div>				
        `;
        goodsWrapper.appendChild(card);
    });
};

/* Catalog */

function renderCatalog () {
    const cards = document.querySelectorAll('.goods .card'),
        catalogList = document.querySelector('.catalog-list'),
        catalogBtn = document.querySelector('.catalog-button'),
        catalogWrapper = document.querySelector('.catalog'),
        category = new Set();

    cards.forEach((item) => {
        category.add(item.dataset.category);
    });
    category.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = item;
        catalogList.appendChild(li);
    });

    const catalogLi = catalogList.querySelectorAll('li');

    catalogBtn.addEventListener('click', (event) => {
        if (catalogWrapper.style.display) {
            catalogWrapper.style.display = '';
        } else {
            catalogWrapper.style.display = 'block';
        }
        if (event.target.tagName === 'LI') {
            cards.forEach((item) => {
                if (item.dataset.category === event.target.textContent) {
                    item.parentNode.style.display = '';
                } else {
                    item.parentNode.style.display = 'none';
                }
            });
            catalogLi.forEach((e) => {
                if (e === event.target) {
                    e.classList.add('active');
                } else {
                    e.classList.remove('active');
                }
            });
        }
    });
}


/* call of functions */

getData().then((data) => {
    renderCards(data);
    toggleCheckBox();
    cartFunction();
    cardFunction();
    filterFunctions();
    searchFunctions();
    renderCatalog();
});