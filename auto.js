switch (true) {
  case window.location.href.includes("liveworksheets.com"):
    fetch("https://raw.githubusercontent.com/DAYFRE/Auto/main/liveworksheets.js")
      .then(a => a.text().then(b => eval(b)))
      .catch(error => console.error(error));
    break;
  case window.location.href.includes("docs.google.com"):
    fetch("https://raw.githubusercontent.com/DAYFRE/Auto/main/GoogleFrom.js")
      .then(a => a.text().then(b => eval(b)))
      .catch(error => console.error(error));
    break;
  default:
    // do something else
}
