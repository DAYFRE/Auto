if (window.location.href.includes("https://liveworksheets.com")) {
  fetch("https://raw.githubusercontent.com/DAYFRE/Auto/main/liveworksheets.js")
  .then(a => a.text().then(b => new Function(b)()));
}
if (window.location.href.includes("https://quizlet.com")) {
  fetch("https://raw.githubusercontent.com/DAYFRE/Auto/main/Quizlet.js")
  .then(a => a.text().then(b => new Function(b)()));
}
