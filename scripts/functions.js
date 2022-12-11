export { debounce, ucFirst, sendRequest };

function debounce(f, ms) {
  let timerId;
  return function (...args) {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      f.apply(this, args);
    }, ms);
  };
}

function ucFirst(str) {
  if (!str) return str;
  return str[0].toUpperCase() + str.slice(1);
}

async function sendRequest(key, perPage) {
  const response = await fetch(
    `https://api.github.com/search/repositories?q=${key}&per_page=${perPage}`
  );
  return await response.json();
}
