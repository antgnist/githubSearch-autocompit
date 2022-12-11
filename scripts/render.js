import { ucFirst } from './functions.js';

export { renderDatalist };

function renderDatalist(datalist, data) {
  console.log('рендерится список автокомплита');
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
