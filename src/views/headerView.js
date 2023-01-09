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
} from '../constants.js';

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
