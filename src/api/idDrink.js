import { renderDrinkPage } from '../pages/drinkPage.js';
import { renderStatusPage } from '../pages/statusPage.js';
import { renderErrorPage } from '../pages/errorPage.js';

export async function getDrinkById(id) {
  let response;

  try {
    response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`,
    );
  } catch (error) {
    renderErrorPage(error);
  }

  // Uses the 'optional chaining' operator
  if (response?.ok) {
    // Examine the text in the response
    response.json().then(function (data) {
      renderDrinkPage(data.drinks[0]);
    });
  } else {
    renderStatusPage(response);
  }
}
