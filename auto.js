const urlMap = new Map([
  ["https://liveworksheets.com", "https://raw.githubusercontent.com/DAYFRE/Auto/main/liveworksheets.js"],
  ["https://docs.google.com", "https://raw.githubusercontent.com/DAYFRE/Auto/main/GoogleFrom.js"]
]);

const currentUrl = window.location.href;
const matchingUrl = Array.from(urlMap.keys()).find(url => currentUrl.includes(url));

if (matchingUrl) {
  const scriptUrl = urlMap.get(matchingUrl);
  fetch(scriptUrl)
    .then(a => a.text())
    .then(b => eval(b))
    .catch(error => console.error(error));
}
