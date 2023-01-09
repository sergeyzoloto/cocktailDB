/**
 * Create a drink description table for a recipe page
 * @returns {Element}
 */

import {
  RELATIVE_ID,
  TABLE_ID,
  FLEX_ID,
  CONTAINER_ID,
  FLEX_ELEMENT_ID,
  SPACE_EVENLY_ID,
  INGREDIENT_ID,
  MEASURE_TAG_ID,
  COLUMN_HEADERS_ID,
} from '../constants.js';

export const drinkTable = (data) => {
  const element = document.createElement('div');

  const ingredientsArray = [
    data.strIngredient1,
    data.strIngredient2,
    data.strIngredient3,
    data.strIngredient4,
    data.strIngredient5,
    data.strIngredient6,
    data.strIngredient7,
    data.strIngredient8,
    data.strIngredient9,
    data.strIngredient10,
    data.strIngredient11,
    data.strIngredient12,
    data.strIngredient13,
    data.strIngredient14,
    data.strIngredient15,
  ];
  const measuresArray = [
    data.strMeasure1,
    data.strMeasure2,
    data.strMeasure3,
    data.strMeasure4,
    data.strMeasure5,
    data.strMeasure6,
    data.strMeasure7,
    data.strMeasure8,
    data.strMeasure9,
    data.strMeasure10,
    data.strMeasure11,
    data.strMeasure12,
    data.strMeasure13,
    data.strMeasure14,
    data.strMeasure15,
  ];

  let ul = ``;
  ingredientsArray.forEach((item) => {
    if (item) {
      const measure = measuresArray.shift();
      const li = `<li class=${INGREDIENT_ID}>
        <b class='${MEASURE_TAG_ID}'>${
        measure ? measure : ''
      }</b> ${item}</li>`;
      ul = ul + li;
    }
  });

  element.innerHTML = String.raw`
  <div class=${FLEX_ELEMENT_ID}>
    <h2 class='${COLUMN_HEADERS_ID}'>Ingredients</h2>
    <ul>${ul}</ul>
  </div>
  <div class=${FLEX_ELEMENT_ID}>
    <h2 class='${COLUMN_HEADERS_ID}'>Instructions</h2>
    <p>${data.strInstructions}</p>
  </div>
  <div class=${FLEX_ELEMENT_ID}>
    <h2 class='${COLUMN_HEADERS_ID}'>Facts</h2>
    <p>${collectFacts(data)}</p>
  </div>
  `;

  element.classList.add(RELATIVE_ID);
  element.classList.add(TABLE_ID);
  element.classList.add(FLEX_ID);
  element.classList.add(CONTAINER_ID);
  element.classList.add(SPACE_EVENLY_ID);

  return element;
};

// Attach description
const collectFacts = (data) => {
  let string = '';

  if (data.strIBA) {
    string = string + `${data.strIBA}<br>`;
  }
  if (data.strCategory) {
    if (data.strCategory !== 'Ordinary Drink') {
      string = string + `${data.strCategory}<br>`;
    }
  }
  if (data.strAlcoholic) {
    string = string + `${data.strAlcoholic}<br>`;
  }
  if (data.strGlass) {
    string = string + `${data.strGlass}<br>`;
  }

  return string;
};
