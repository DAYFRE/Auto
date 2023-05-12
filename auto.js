if (window.location.href.includes("liveworksheets.com")) {
  fetch("https://raw.githubusercontent.com/DAYFRE/Auto/main/liveworksheets.js")
  .then(a => a.text().then(b => eval(b)))
  .catch(error => console.error(error));
}
