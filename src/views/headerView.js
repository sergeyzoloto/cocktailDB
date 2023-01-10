/**
 * Create a page header
 * @returns {Element}
 */

import {
  HEADER_ID,
  HEADER_CONTENT_ID,
  FLEX_ID,
  SPACE_BETWEEN_ID,
  ALIGN_CENTER_ID,
  SEARCH_BUTTON_ID,
  CONTAINER_ID,
  LOGO_ID,
  LOGO_LINK_ID,
  FORM_FIELD_ID,
  CLOSE_SEARCH_BUTTON_ID,
  OVERLAY_ID,
  SHOW_HEADER_COVER_ID,
} from '../constants.js';

import { getDrinksByName } from '../api/searchName.js';

export const createPageHeader = () => {
  const element = document.createElement('header');

  element.innerHTML = String.raw`
  <div class='${HEADER_CONTENT_ID} ${FLEX_ID} 
    ${SPACE_BETWEEN_ID} ${ALIGN_CENTER_ID}'>
    <div class='${LOGO_ID}'><a class='${LOGO_LINK_ID}' href=''>Cocktails</a></div>
    <div>
        <input id='${FORM_FIELD_ID}' type="text" placeholder="Name of drink" />
    </div>
    <button id=${SEARCH_BUTTON_ID}>
      <svg xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 23.83 24.83">
        <defs><style>.cls-1{fill:#fff;}</style></defs>
        <path class="cls-1" 
        d="M23.39,22.27l-4.08-4.08a10.91,10.91,0,1,0-2.25,2l4.21,
        4.21a1.5,1.5,0,0,0,2.12-2.12ZM3,11a8,8,0,1,1,8,8A8,8,0,0,1,3,11Z">
        </path>
      </svg>
    </button>

    <button id='${CLOSE_SEARCH_BUTTON_ID}'>
      <svg xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 19.8 19.8">
        <polygon points="19.8 1.41 18.39 0 9.9 8.48 1.41 0 0 1.41 8.48 9.9 0 18.39 1.41 19.8 9.9 11.31 18.39 19.8 19.8 18.39 11.31 9.9 19.8 1.41">
        </polygon>
      </svg>
    </button>
  </div>
  <div class='${OVERLAY_ID}'></div>
  `;

  element.classList.add(HEADER_ID);
  element.classList.add(CONTAINER_ID);

  return element;
};

// Function to display a search string in the header:
export const openHeader = () => {
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
export const closeHeader = () => {
  document
    .querySelector(`.${HEADER_CONTENT_ID}`)
    .classList.remove(SHOW_HEADER_COVER_ID);
  document.getElementById(CLOSE_SEARCH_BUTTON_ID).style.display = 'none';
  document.getElementById(SEARCH_BUTTON_ID).style.display = 'inline-block';
  document.getElementById(FORM_FIELD_ID).style.display = 'none';
  document.querySelector(`.${OVERLAY_ID}`).style.display = 'none';
};

// When a user stops typing, the app requests a list from API
export const assignTypeListener = () => {
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
