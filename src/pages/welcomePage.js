import { example } from '../constants.js';
import { renderDrinkPage } from './drinkPage.js';
import { getRandomDrink } from '../api/randomDrink.js';

export function initWelcomePage() {
  getRandomDrink();
}
