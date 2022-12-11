import { ucFirst } from './functions.js';

export { renderDatalist, renderResultList };

function renderDatalist(datalist, data) {
  while (datalist.firstChild) {
    datalist.removeChild(datalist.firstChild);
  }
  const optionSearch = document.createElement('div');
  optionSearch.classList.add('search__autocomplit');
  if (data.length > 0) {
    datalist.hidden = false;
  } else {
    datalist.hidden = true;
  }
  data.forEach((elem, id) => {
    let optionClon = optionSearch.cloneNode();
    optionClon.textContent = ucFirst(elem.name);
    optionClon.dataset.id = id;
    datalist.append(optionClon);
  });
}

function renderResultList(resultList, data) {
  while (resultList.firstChild) {
    resultList.removeChild(resultList.firstChild);
  }
  const resultFragment = document.createElement('div');
  resultFragment.classList.add('result__elem');

  const info = document.createElement('div');
  info.classList.add('result__info');

  const name = document.createElement('div');
  name.classList.add('result__name');
  let resultKey = document.createElement('span');
  resultKey.classList.add('result__key');
  resultKey.textContent = 'Name: ';
  let resultValue = document.createElement('span');
  resultValue.classList.add('result__value');
  name.append(resultKey);
  name.append(resultValue);

  const owner = document.createElement('div');
  owner.classList.add('result__owner');
  resultKey = document.createElement('span');
  resultKey.classList.add('result__key');
  resultKey.textContent = 'Owner: ';
  resultValue = document.createElement('span');
  resultValue.classList.add('result__value');
  owner.append(resultKey);
  owner.append(resultValue);

  const star = document.createElement('div');
  star.classList.add('result__star');
  resultKey = document.createElement('span');
  resultKey.classList.add('result__key');
  resultKey.textContent = 'Stars: ';
  resultValue = document.createElement('span');
  resultValue.classList.add('result__value');
  star.append(resultKey);
  star.append(resultValue);

  info.append(name);
  info.append(owner);
  info.append(star);

  const resultButtons = document.createElement('div');
  resultButtons.classList.add('result__buttons');
  const deleteButton = document.createElement('button');
  deleteButton.classList.add('result__delete');
  resultButtons.append(deleteButton);

  resultFragment.append(info);
  resultFragment.append(resultButtons);

  if (data.length > 0) {
    resultList.hidden = false;
  } else {
    resultList.hidden = true;
  }

  data.forEach((obj, id) => {
    let elemResult = resultFragment.cloneNode(true);
    resultList.append(elemResult);

    elemResult
      .querySelector('.result__name')
      .querySelector('.result__value').textContent = obj.name;
    elemResult
      .querySelector('.result__owner')
      .querySelector('.result__value').textContent = obj.owner.login;
    elemResult
      .querySelector('.result__star')
      .querySelector('.result__value').textContent = obj.stargazers_count;

    elemResult.dataset.deleteId = id;
  });
}
