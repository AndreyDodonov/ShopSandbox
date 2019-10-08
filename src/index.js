'use strict';

import getData from './modules/getData';
import renderCards from './modules/renderCards';
import renderCatalog from './modules/renderCatalog';
import toggleCheckBox from './modules/toggleCheckBox';
import cartFunction from './modules/cartFunctions';
import cardFunction from './modules/cardFunctions';
import filterFunctions from './modules/filterFunctions';
import searchFunctions from './modules/searchFunctions';

getData().then((data) => {
    renderCards(data);
    renderCatalog();
    toggleCheckBox();
    cartFunction();
    cardFunction();
    filterFunctions();
    searchFunctions();

});