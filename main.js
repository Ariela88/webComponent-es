// const searchParams = new URLSearchParams(window.location.search);
// console.log(searchParams);
// const header = document.getElementById('header');

// let color = 'green'
// if (searchParams.get('id')) {
//     if (searchParams.get('id') === 'pluto') {
//         color='yellow'
        
//     }
//     if (searchParams.get('id') === 'pippo') {
//         color='blue'
//     }
// }

// header.setAttribute('title-color', color)
// header.render();

function changeTitleColor(){
    const header = document.getElementById('header');
    // header.setAttribute('title-color', 'pink')
    if (header.getAttribute('site-theme')==='light') {
        header.setAttribute('site-theme', 'dark');
    } else {
        header.setAttribute('site-theme','light');
    }
}






// creare una pagina web che permetta di visualizzare
// gli ultimi 25 post del subreddit /aww (https://www.reddit.com/r/aww/new.json)
// usare i web component

// 1) permettere all'utente di cambiare il tema