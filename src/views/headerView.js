/**
 * Create a page header
 * @returns {Element}
 */

import {
  HEADER_ID,
  HEADER_CONTENT_ID,
  FLEX_ID,
  SPACE_BETWEEN_ID,
  SEARCH_BUTTON_ID,
  CONTAINER_ID,
} from '../constants.js';

export const createPageHeader = () => {
  const element = document.createElement('div');

  element.innerHTML = String.raw`
  <div class='${HEADER_CONTENT_ID}'>
  <div class='logo'><a class='logo-link' href=''>Cocktails</a></div>
    <button class=${SEARCH_BUTTON_ID}>
    <svg xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 23.83 24.83">
      <defs><style>.cls-1{fill:#fff;}</style></defs>
      <path class="cls-1" 
      d="M23.39,22.27l-4.08-4.08a10.91,10.91,0,1,0-2.25,2l4.21,
      4.21a1.5,1.5,0,0,0,2.12-2.12ZM3,11a8,8,0,1,1,8,8A8,8,0,0,1,3,11Z">
      </path>
    </svg>
    </button>
  </div>
    `;

  element.classList.add(HEADER_ID);
  element.classList.add(CONTAINER_ID);

  return element;
};
