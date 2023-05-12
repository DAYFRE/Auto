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
    .then(response => {
      if (!response.ok) {
        throw new Error(`Failed to retrieve ${site.scriptUrl} (${response.status} ${response.statusText})`);
      }
      const contentType = response.headers.get('content-type');
      if (contentType.includes('application/json')) {
        return response.json();
      } else if (contentType.includes('application/javascript')) {
        return response.text();
      } else {
        throw new Error(`Invalid content type ${contentType}`);
      }
    })
    .then(script => {
      if (typeof script === 'string') {
        eval(script);
      } else {
        console.error('Invalid script format');
      }
    })
    .catch(error => console.error(error));
}
