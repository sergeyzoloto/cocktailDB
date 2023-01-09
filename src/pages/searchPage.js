import { PAGE_CONTAINER_ID, OVERLAY_ID, RESULT_LIST_ID } from '../constants.js';
import { createResultLine } from '../views/searchElement.js';
import { getDrinkById } from '../api/idDrink.js';

export function renderSearchResult(data) {
  // Clear a page content
  const resultPage = document.querySelector(`.${PAGE_CONTAINER_ID}`);
  resultPage.innerHTML = '';
  document.querySelector(`.${OVERLAY_ID}`).style.display = 'none';

  // Attach a result page
  const resultList = document.createElement('div');
  resultPage.appendChild(resultList);
  resultList.classList.add(RESULT_LIST_ID);
  data.drinks.forEach((drink) => {
    const line = createResultLine(drink);
    resultList.appendChild(line);
    line.addEventListener('click', selectDrinkPage(drink.idDrink));
  });
}

const selectDrinkPage = (index) => () => {
  getDrinkById(index);
};
