
let card = document.querySelectorAll(".row__card");
let active = document.querySelectorAll(".active");
let absent = document.querySelectorAll(".absent");
let subtitle = document.querySelectorAll(".subtitle");
let have = document.querySelectorAll(".row__have");
let button = document.querySelectorAll(".button");



function clickingOnTheFatCat(i) {
    active[i].classList.toggle('hide');
    active[i].classList.toggle('show');
    subtitle[i].classList.toggle('hide');
    card[i].classList.toggle('bk-static');
    card[i].classList.toggle('bk-active')
}

function clickinTheFeedOver(i) {
    absent[i].classList.toggle('hide');
    absent[i].classList.toggle('show');
    subtitle[i].classList.toggle('hide');
    card[i].classList.toggle('bk-static');
    card[i].classList.toggle('bk-absent')
}


for (let i = 0; i < card.length; i++) {
    card[i].addEventListener('click', function () {
        if (have[i].innerHTML == "-") {
            clickinTheFeedOver(i);
        }else {
            clickingOnTheFatCat(i);
        }
    })
    
    button[i].addEventListener('click', function () {
        if (have[i].innerHTML == "-") {
            clickinTheFeedOver(i);
        }else {
            clickingOnTheFatCat(i);
        }
    })
    
}


