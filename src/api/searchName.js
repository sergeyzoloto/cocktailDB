import { renderError, renderStatus } from '../views/errorView.js';
import { renderSearchResult } from '../pages/searchPage.js';

export function getDrinksByName(query) {
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`)
    .then(function (response) {
      if (response.status !== 200) {
        renderStatus(response);
        return;
      }

      // Examine the text in the response
      response.json().then(function (data) {
        renderSearchResult(data);
      });
    })
    .catch(function (err) {
      renderError(err);
    });
}
