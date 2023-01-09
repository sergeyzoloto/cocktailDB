import { renderDrinkPage } from '../pages/drinkPage.js';
import { renderError, renderStatus } from '../views/errorView.js';

export function getDrinkById(id) {
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then(function (response) {
      if (response.status !== 200) {
        renderStatus(response);
        return;
      }

      // Examine the text in the response
      response.json().then(function (data) {
        renderDrinkPage(data.drinks[0]);
      });
    })
    .catch(function (err) {
      renderError(err);
    });
}
