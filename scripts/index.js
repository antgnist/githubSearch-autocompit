import { debounce } from './functions.js';
import {
  inputHandler,
  searchListHandler,
  deleteButtonHandler,
} from './handlers.js';

console.log('hi');

const reposArr = [];
const resultArr = [];

const app = document.querySelector('.app');
const searchInput = document.querySelector('.search__input');
const datalist = document.querySelector('.search_list');
const resultList = document.querySelector('.result');

const inputHandlerDebo = debounce(inputHandler, 350);

//----------------------------------

searchInput.addEventListener('input', (e) => {
  inputHandlerDebo(searchInput, datalist, reposArr);
});

app.addEventListener('click', (e) => {
  const autocomplit = e.target.closest('.search__autocomplit');
  if (!!autocomplit) {
    searchListHandler(
      autocomplit,
      resultList,
      reposArr,
      resultArr,
      searchInput,
      datalist
    );
    return;
  }

  const deleteButton = e.target.closest('.result__delete');
  if (!!deleteButton) {
    deleteButtonHandler(deleteButton, resultList, resultArr);
    return;
  }
});

searchInput.addEventListener('change', (e) => {});
searchInput.addEventListener('focus', () => {});
searchInput.addEventListener('blur', () => {});
