let counter = 1;
let faviconImgs = 3;
let favicons = document.querySelectorAll('link')

function animateFacion(){
    favicons.forEach( item => {
        if(item.getAttribute('rel').indexOf('icon') >= 0){
            item.setAttribute('href', 'img/' + counter + '.png')
        }
    });
    counter++;
    if(counter == faviconImgs) {counter = 1; }
}

setInterval(animateFacion,600)