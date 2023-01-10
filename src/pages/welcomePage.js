import { getRandomDrink } from '../api/randomDrink.js';
import { renderErrorPage } from './errorPage.js';

export function initWelcomePage() {
  try {
    getRandomDrink();
  } catch (error) {
    renderErrorPage(error);
  }
}
