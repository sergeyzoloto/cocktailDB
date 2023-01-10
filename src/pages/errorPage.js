import { renderError } from '../views/errorView.js';
import {
  SEARCH_BUTTON_ID,
  CLOSE_SEARCH_BUTTON_ID,
  USER_INTERFACE_ID,
  PAGE_CONTAINER_ID,
} from '../constants.js';
import { createPageHeader } from '../views/headerView.js';

import {
  closeHeader,
  openHeader,
  assignTypeListener,
} from '../views/headerView.js';

export function renderErrorPage(err) {
  // Attach result to the interface
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  // Attach a header
  const header = createPageHeader();
  userInterface.appendChild(header);

  document
    .getElementById(SEARCH_BUTTON_ID)
    .addEventListener('click', openHeader);

  document
    .getElementById(CLOSE_SEARCH_BUTTON_ID)
    .addEventListener('click', closeHeader);

  // Attach search function to the input
  assignTypeListener();

  // Create an error element

  // Create an error page
  const errorPage = document.createElement('div');
  errorPage.classList.add(PAGE_CONTAINER_ID);
  userInterface.appendChild(errorPage);
  const statusElement = renderError(err);
  errorPage.appendChild(statusElement);
}
