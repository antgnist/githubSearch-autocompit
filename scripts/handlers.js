export { inputHandler };
import { sendRequest, ucFirst } from './functions.js';
import { renderDatalist } from './render.js';

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
    console.log('инпут пустой');
  }
}
