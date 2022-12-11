import { debounce, ucFirst, sendRequest } from './functions.js';
import { inputHandler } from './handlers.js';

console.log('hi');

const reposArr = [];
const resultArr = [];

const searchInput = document.querySelector('.search__input');
const datalist = document.querySelector('.search_list');

const inputHandlerDebo = debounce(inputHandler, 3000);
//----------------------------------

searchInput.addEventListener('input', () => {
  inputHandlerDebo(searchInput, datalist, reposArr);
});

searchInput.addEventListener('change', (e) => {});

searchInput.addEventListener('focus', () => {});
searchInput.addEventListener('blur', () => {});
