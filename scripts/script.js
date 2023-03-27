// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');
const image = document.getElementById('aboutimg');
let images = ["imagens/about2.jpeg","imagens/about3.jpeg", "imagens/about.jpeg"], i=0;

window.onscroll = function() {
    var top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}

function changePic (){
    image.src = images[i];
    i > 1 ? i = 0 : i++;
}

window.onload = function() {
    setInterval(changePic, 5000);
}


