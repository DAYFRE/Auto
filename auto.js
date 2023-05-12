window.location.href.includes("liveworksheets.com")
  ? fetch("https://raw.githubusercontent.com/DAYFRE/Auto/main/liveworksheets.js")
      .then(a => a.text().then(b => eval(b)))
      .catch(error => console.error(error))
  : window.location.href.includes("docs.google.com")
      ? fetch("https://raw.githubusercontent.com/DAYFRE/Auto/main/GoogleFrom.js")
          .then(a => a.text().then(b => eval(b)))
          .catch(error => console.error(error))
      : // do something else
