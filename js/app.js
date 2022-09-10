function fillProgress(id) {
  const weatherappProgress = document.getElementById(`${id}`);
  let url = `https://api.github.com/repos/ademkoca/${id}/languages`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      let total = data.JavaScript + data.HTML + data.CSS;
      for (let i = 0; i < weatherappProgress.children.length; i++) {
        weatherappProgress.children[i].setAttribute('aria-valuemax', total);
      }
      weatherappProgress.children[0].setAttribute(
        'aria-valuenow',
        data.JavaScript
      );
      weatherappProgress.children[0].style.width =
        percentage(data.JavaScript, total) + '%';
      weatherappProgress.children[1].setAttribute('aria-valuenow', data.HTML);
      weatherappProgress.children[1].style.width =
        percentage(data.HTML, total) + '%';
      weatherappProgress.children[2].setAttribute('aria-valuenow', data.CSS);
      weatherappProgress.children[2].style.width =
        percentage(data.CSS, total) + '%';
    });
}

function percentage(partialValue, totalValue) {
  return (100 * partialValue) / totalValue;
}

let ids = [
  `weather-app`,
  `countries`,
  `todo`,
  `social-media-dashboard-with-theme-switch`,
  `intro-component-with-signup-form`,
  `search-bio`,
  `cats`,
  `wordle-clone`,
];
ids.forEach((element) => {
  fillProgress(element);
});

function fillProgressSpotify() {
  const Progress = document.getElementById(`spotify`);
  let url = `https://api.github.com/repos/ademkoca/spotify-clone/languages`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      let total = data.SCSS + data.HTML + data.CSS;
      for (let i = 0; i < Progress.children.length; i++) {
        Progress.children[i].setAttribute('aria-valuemax', total);
      }
      Progress.children[0].setAttribute('aria-valuenow', data.SCSS);
      Progress.children[0].style.width = percentage(data.SCSS, total) + '%';
      Progress.children[1].setAttribute('aria-valuenow', data.HTML);
      Progress.children[1].style.width = percentage(data.HTML, total) + '%';
      Progress.children[2].setAttribute('aria-valuenow', data.CSS);
      Progress.children[2].style.width = percentage(data.CSS, total) + '%';
    });
}

function fillProgressCrowdfund() {
  const Progress = document.getElementById(`crowdfund`);
  let url = `https://api.github.com/repos/ademkoca/crowdfund/languages`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      let total = data.SCSS + data.HTML + data.CSS + data.JavaScript;
      for (let i = 0; i < Progress.children.length; i++) {
        Progress.children[i].setAttribute('aria-valuemax', total);
      }
      Progress.children[0].setAttribute('aria-valuenow', data.CSS);
      Progress.children[0].style.width = percentage(data.CSS, total) + '%';
      Progress.children[1].setAttribute('aria-valuenow', data.SCSS);
      Progress.children[1].style.width = percentage(data.SCSS, total) + '%';
      Progress.children[2].setAttribute('aria-valuenow', data.Javascript);
      Progress.children[2].style.width =
        percentage(data.Javascript, total) + '%';
    });
  Progress.children[3].setAttribute('aria-valuenow', data.HTML);
  Progress.children[3].style.width = percentage(data.HTML, total) + '%';
}

function percentage(partialValue, totalValue) {
  return (100 * partialValue) / totalValue;
}

fillProgressSpotify();
fillProgressCrowdfund();
