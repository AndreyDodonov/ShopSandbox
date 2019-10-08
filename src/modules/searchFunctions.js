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

export default searchFunctions;