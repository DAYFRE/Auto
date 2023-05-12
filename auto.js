const sites = [
  {
    url: "https://liveworksheets.com",
    scriptUrl: "https://raw.githubusercontent.com/DAYFRE/Auto/main/liveworksheets.js"
  },
  {
    url: "https://docs.google.com",
    scriptUrl: "https://raw.githubusercontent.com/DAYFRE/Auto/main/GoogleFrom.js"
  }
];

const currentUrl = window.location.href;
const site = sites.find(s => currentUrl.includes(s.url));

if (site) {
  fetch(site.scriptUrl)
    .then(response => response.text())
    .then(script => eval(script))
    .catch(error => console.error(error));
}
