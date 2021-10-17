function fillProgress(id) {

const weatherappProgress = document.getElementById(`${id}`);
let url = `https://api.github.com/repos/ademkoca/${id}/languages`;
fetch(url)
.then(response => response.json())
.then(data => {
    console.log(data.JavaScript);
    console.log(data.HTML);
    console.log(data.CSS);
    let total = data.JavaScript+data.HTML+data.CSS;
    let totalPercent = total/100;
    console.log(totalPercent);
    for (let i=0; i<weatherappProgress.children.length; i++){
weatherappProgress.children[i].setAttribute('aria-valuemax',total);
    }
    weatherappProgress.children[0].setAttribute('aria-valuenow',data.JavaScript);
    weatherappProgress.children[0].style.width=percentage(data.JavaScript,total)+"%";
    weatherappProgress.children[1].setAttribute('aria-valuenow',data.HTML);
    weatherappProgress.children[1].style.width=percentage(data.HTML,total)+"%";
    weatherappProgress.children[2].setAttribute('aria-valuenow',data.CSS);
    weatherappProgress.children[2].style.width=percentage(data.CSS,total)+"%";
});

}

function percentage(partialValue, totalValue) {
    return (100 * partialValue) / totalValue;
 } 

 let ids = [`weather-app`,`countries`,`todo`,`social-media-dashboard-with-theme-switch`,`intro-component-with-signup-form`,`search-bio`,`cats`];
 ids.forEach(element => {
     fillProgress(element);
     
 });