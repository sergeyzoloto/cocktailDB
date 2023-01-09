import {
  USER_INTERFACE_ID,
  SEARCH_BUTTON_ID,
  CLOSE_SEARCH_BUTTON_ID,
  HEADER_CONTENT_ID,
  SHOW_HEADER_COVER_ID,
  FORM_FIELD_ID,
  PAGE_CONTAINER_ID,
  OVERLAY_ID,
} from '../constants.js';
import { createCover } from '../views/imageView.js';
import { drinkTable } from '../views/recipeTableView.js';
import { createPageHeader } from '../views/headerView.js';
import { getDrinksByName } from '../api/searchName.js';

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

// Function to display a search string in the header:
const openHeader = () => {
  document
    .querySelector(`.${HEADER_CONTENT_ID}`)
    .classList.add(SHOW_HEADER_COVER_ID);
  document.getElementById(SEARCH_BUTTON_ID).style.display = 'none';
  document.getElementById(CLOSE_SEARCH_BUTTON_ID).style.display =
    'inline-block';
  document.getElementById(FORM_FIELD_ID).style.display = 'inline-block';
  document.querySelector(`.${OVERLAY_ID}`).style.display = 'block';
};

// Function to hide the search string:
const closeHeader = () => {
  document
    .querySelector(`.${HEADER_CONTENT_ID}`)
    .classList.remove(SHOW_HEADER_COVER_ID);
  document.getElementById(CLOSE_SEARCH_BUTTON_ID).style.display = 'none';
  document.getElementById(SEARCH_BUTTON_ID).style.display = 'inline-block';
  document.getElementById(FORM_FIELD_ID).style.display = 'none';
  document.querySelector(`.${OVERLAY_ID}`).style.display = 'none';
};

// When a user stops typing, the app requests a list from API
const assignTypeListener = () => {
  const inputElement = document.getElementById(FORM_FIELD_ID);

  let keyStoppedTimer = null;
  inputElement.addEventListener(
    'keydown',
    function (event) {
      clearTimeout(keyStoppedTimer);
      keyStoppedTimer = setTimeout(function () {
        event.target.dispatchEvent(new Event('keyStopped'));
      }, 600);
    },
    false,
  );

  inputElement.addEventListener(
    'keyStopped',
    function (event) {
      getDrinksByName(inputElement.value);
    },
    false,
  );
};
