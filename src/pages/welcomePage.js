import { USER_INTERFACE_ID } from '../constants.js';
import { example } from '../constants.js';
import { createCover } from '../views/imageView.js';
import { drinkTable } from '../views/recipeTableView.js';
import { createPageHeader } from '../views/headerView.js';

const data = example;

export const initWelcomePage = () => {
  // Attach result to the interface
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  // Create a welcome element
  const welcomePage = document.createElement('div');
  userInterface.appendChild(welcomePage);

  // Attach a header
  const header = createPageHeader();
  welcomePage.appendChild(header);

  // Attach a drink image and title to the page cover
  const cover = createCover(data.strDrinkThumb, data.strDrink);
  welcomePage.appendChild(cover);

  // Attach a table containing the drink details
  const tableContent = drinkTable(data);
  welcomePage.appendChild(tableContent);
};
