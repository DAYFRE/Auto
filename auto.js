const sites = {
"https://liveworksheets.com": "https://raw.githubusercontent.com/DAYFRE/Auto/main/liveworksheets.js",
"https://docs.google.com": "https://raw.githubusercontent.com/DAYFRE/Auto/main/GoogleFrom.js"
};

const currentSite = Object.keys(sites).find(site => window.location.href.includes(site));

if (currentSite) {
fetch(sites[currentSite])
.then(response => response.text())
.then(script => eval(script))
.catch(error => console.error(error));
}
