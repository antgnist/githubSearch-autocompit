export { inputHandler, searchListHandler, deleteButtonHandler };
import { sendRequest } from './functions.js';
import { renderDatalist, renderResultList } from './render.js';

function inputHandler(searchInput, datalist, reposArr) {
  let contentInput = searchInput.value;
  if (!!contentInput) {
    sendRequest(contentInput, 5)
      .then((repos) => {
        console.log(repos);
        reposArr.length = 0;
        repos.items.forEach((rep) => reposArr.push(rep));
        renderDatalist(datalist, reposArr);
        return repos;
      })
      .catch((err) => console.log('Error from sendRequest: ', err));
  } else {
    reposArr.length = 0;
    renderDatalist(datalist, reposArr);
  }
}

function searchListHandler(
  autocomplit,
  resultList,
  reposArr,
  resultArr,
  searchInput,
  datalist
) {
  if (
    !resultArr.find((elem) => elem.id === reposArr[autocomplit.dataset.id].id)
  ) {
    resultArr.push(reposArr[autocomplit.dataset.id]);
    renderResultList(resultList, resultArr);
    reposArr.length = 0;
    searchInput.value = '';
    renderDatalist(datalist, reposArr);
  } else {
    alert('Данный репозиторий уже был добавлен');
  }
}

function deleteButtonHandler(deleteButton, resultList, resultArr) {
  const deleteElement = deleteButton.closest('.result__elem');
  resultArr.splice(deleteElement.dataset.deleteId, 1);
  renderResultList(resultList, resultArr);
}
