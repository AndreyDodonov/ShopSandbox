import filter from './filter';

function renderCatalog() {
    const cards = document.querySelectorAll('.goods .card'),
        catalogList = document.querySelector('.catalog-list'),
        catalogBtn = document.querySelector('.catalog-button'),
        catalogWrapper = document.querySelector('.catalog'),
        filterTitle = document.querySelector('.filter-title h5'),
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
            catalogLi.forEach((e) => {
                if (e === event.target) {
                    e.classList.add('active');
                } else {
                    e.classList.remove('active');
                }
            });
            filter();
            filterTitle.textContent = event.target.textContent;
        }
    });
}

export default renderCatalog;