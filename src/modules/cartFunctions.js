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

export default cartFunction;