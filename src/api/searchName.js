import { renderSearchResult } from '../pages/searchPage.js';
import { renderStatusPage } from '../pages/statusPage.js';
import { renderErrorPage } from '../pages/errorPage.js';

export async function getDrinksByName(query) {
  let response;

  try {
    response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`,
    );
  } catch (error) {
    renderErrorPage(error);
  }

  // Uses the 'optional chaining' operator
  if (response?.ok) {
    // Examine the text in the response
    response.json().then(function (data) {
      if (data.drinks) renderSearchResult(data);
    });
  } else {
    renderStatusPage(response);
  }
}
