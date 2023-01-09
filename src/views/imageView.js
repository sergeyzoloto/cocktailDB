import {
  COVER_ID,
  ABSOLUTE_ID,
  IMAGE_CONTAINER_ID,
  COVER_IMAGE_ID,
  RELATIVE_ID,
  CONTAINER_ID,
  TITLE_ID,
  FLEX_ID,
  FLEX_COL_ID,
  JUSTIFY_END_ID,
  CENTERED_ID,
  H1_TITLE_ID,
} from '../constants.js';

/**
 * Create a cover for a recipe page
 * @returns {Element}
 */
export const createCover = (link, title) => {
  const element = document.createElement('div');
  element.classList.add(COVER_ID);
  element.classList.add(ABSOLUTE_ID);

  element.innerHTML = String.raw`
    <div class="${ABSOLUTE_ID} ${IMAGE_CONTAINER_ID}">
      <img class="${COVER_IMAGE_ID}" alt="drink image" src=${link}>
    </div>
    <div class="
    ${RELATIVE_ID} ${CONTAINER_ID} ${TITLE_ID}
    ${FLEX_ID} ${FLEX_COL_ID} ${JUSTIFY_END_ID} ${CENTERED_ID}">
      <h1 class=${H1_TITLE_ID}>${title}</h1>
    </div>
  `;

  return element;
};
