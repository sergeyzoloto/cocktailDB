import { initWelcomePage } from './pages/welcomePage.js';
import { renderErrorPage } from './pages/errorPage.js';

function loadApp() {
  try {
    initWelcomePage();
  } catch (err) {
    renderErrorPage(err);
  }
}

window.addEventListener('load', loadApp);
