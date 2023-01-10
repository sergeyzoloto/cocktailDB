import { renderStatus } from '../views/errorView.js';
import {
  SEARCH_BUTTON_ID,
  CLOSE_SEARCH_BUTTON_ID,
  USER_INTERFACE_ID,
  PAGE_CONTAINER_ID,
} from '../constants.js';
import { createPageHeader } from '../views/headerView.js';
import {
  openHeader,
  closeHeader,
  assignTypeListener,
} from '../views/headerView.js';

export function renderStatusPage(response) {
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

  // Create a response element
  const statusPage = document.createElement('div');
  statusPage.classList.add(PAGE_CONTAINER_ID);
  userInterface.appendChild(statusPage);
  const statusElement = renderStatus(response);
  statusPage.appendChild(statusElement);
}
