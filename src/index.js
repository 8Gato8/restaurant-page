import './style.css';

import renderHomePage from './renderHomePage';
import renderMenuPage from './renderMenuPage';
import renderContactsPage from './renderContactsPage';

const rendererFunctions = {
  renderHomePage,
  renderMenuPage,
  renderContactsPage,
};

const content = document.querySelector('.content');
const navList = document.querySelector('.nav-list');

let currentPageName = 'Home';

function clearContent(content) {
  while (content.firstChild) {
    content.lastChild.remove();
  }
}

function handleTabSwitch(e) {
  const target = e.target;
  if (!target.classList.contains('nav-list__button')) return;

  const pageName = target.id;
  if (pageName === currentPageName) return;

  currentPageName = pageName;

  clearContent(content);

  const rendererName = `render${pageName}Page`;

  const { [rendererName]: renderer } = rendererFunctions;

  renderer(content);
}

navList.addEventListener('click', handleTabSwitch);

renderHomePage(content);
