import './styles.css';
import menuData from './data/menu.json';
import menuTemplate from './templates/menu-item.hbs';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const setTheme = theme => {
  currentTheme = theme;
  bodyRef.classList.remove(Theme.LIGHT, Theme.DARK);
  bodyRef.classList.add(theme);
  localStorage.setItem('theme', theme);
  themeCheckboxRef.checked = theme !== Theme.LIGHT;
};

const getOppositeTheme = () => {
  return currentTheme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
};

const onThemeCheckBoxChanged = () => {
  setTheme(getOppositeTheme());
};

const bodyRef = document.body;
const menuRef = document.querySelector('.js-menu');
const themeCheckboxRef = document.querySelector('#theme-switch-toggle');

let currentTheme = localStorage.getItem('theme') || Theme.LIGHT;
setTheme(currentTheme);

menuRef.innerHTML = menuTemplate(menuData);

themeCheckboxRef.addEventListener('change', onThemeCheckBoxChanged);
