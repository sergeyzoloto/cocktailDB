import { STATUS_MESSAGE_ID, ERROR_ELEMENT_ID } from '../constants.js';

/**
 * Create a response status
 * @returns {Element}
 */
export function renderStatus(response) {
  const element = document.createElement('div');
  element.classList.add(STATUS_MESSAGE_ID);

  element.innerHTML = String.raw`
  Looks like there was a problem. Status Code: ${response.status}`;

  return element;
}

/**
 * Create an error element
 * @returns {Element}
 */
export function renderError(err) {
  console.log('Fetch Error', err);
  const element = document.createElement('div');
  element.classList.add(ERROR_ELEMENT_ID);

  element.innerHTML = String.raw`
  'Fetch Error ' + ${err}`;

  return element;
}
