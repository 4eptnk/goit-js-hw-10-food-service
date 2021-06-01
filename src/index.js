import './styles.css';
import menuData from './data/menu.json';
import menuTemplate from './templates/menu-item.hbs';

const bodyLink = document.querySelector('body');
const menuLink = document.querySelector('.js-menu');
const switchEl = document.querySelector('#theme-switch-toggle');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const setTheme = theme => {
  currentTheme = theme;
  bodyLink.classList.remove(Theme.LIGHT, Theme.DARK);
  bodyLink.classList.add(theme);
  localStorage.setItem('theme', theme);
  switchEl.checked = theme !== Theme.LIGHT;
};

let currentTheme = localStorage.getItem('theme') || Theme.LIGHT;
setTheme(currentTheme);

const getOppositeTheme = () => {
  return currentTheme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
};

const onThemeCheckBoxChanged = () => {
  setTheme(getOppositeTheme());
};

menuLink.innerHTML = menuTemplate(menuData);

switchEl.addEventListener('change', onThemeCheckBoxChanged);
