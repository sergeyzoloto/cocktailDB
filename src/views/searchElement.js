/**
 * Create a line for result page
 * @returns {Element}
 */

import { RESULT_ELEMENT_ID } from '../constants.js';

export function createResultLine(drink) {
  const element = document.createElement('div');
  element.classList.add(RESULT_ELEMENT_ID);

  element.innerHTML = String.raw`${drink.strDrink}`;

  return element;
}
