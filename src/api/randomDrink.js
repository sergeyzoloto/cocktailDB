import { renderDrinkPage } from '../pages/drinkPage.js';

export function getRandomDrink() {
  fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    .then(function (response) {
      if (response.status !== 200) {
        console.log(
          'Looks like there was a problem. Status Code: ' + response.status,
        );
        return;
      }

      // Examine the text in the response
      response.json().then(function (data) {
        console.log(data.drinks[0]);
        renderDrinkPage(data.drinks[0]);
      });
    })
    .catch(function (err) {
      console.log('Fetch Error :-S', err);
    });
}
