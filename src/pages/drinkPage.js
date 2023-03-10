import {
  USER_INTERFACE_ID,
  SEARCH_BUTTON_ID,
  CLOSE_SEARCH_BUTTON_ID,
  PAGE_CONTAINER_ID,
} from '../constants.js';
import { createCover } from '../views/imageView.js';
import { drinkTable } from '../views/recipeTableView.js';
import { createPageHeader } from '../views/headerView.js';
import {
  closeHeader,
  openHeader,
  assignTypeListener,
} from '../views/headerView.js';

export function renderDrinkPage(data) {
  // Attach result to the interface
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  // Attach a header
  const header = createPageHeader();
  userInterface.appendChild(header);

  // Create a drink page
  const drinkPage = document.createElement('div');
  drinkPage.classList.add(PAGE_CONTAINER_ID);
  userInterface.appendChild(drinkPage);

  document
    .getElementById(SEARCH_BUTTON_ID)
    .addEventListener('click', openHeader);

  document
    .getElementById(CLOSE_SEARCH_BUTTON_ID)
    .addEventListener('click', closeHeader);

  // Attach a drink image and title to the page cover
  const cover = createCover(data.strDrinkThumb, data.strDrink);
  drinkPage.appendChild(cover);

  // Attach a table containing the drink details
  const tableContent = drinkTable(data);
  drinkPage.appendChild(tableContent);

  // Attach search function to the input
  assignTypeListener();
}
