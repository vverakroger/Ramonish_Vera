//Fetch users data from json
fetch("db/material.json")
    .then(res => res.json())
    .then(data => localStorage.setItem('material', JSON.stringify(data)));

//Save users data on local storage
const material = JSON.parse(localStorage.getItem('material'));

//Teoric Img and text load with JQuery and Vanilla
function loadTeoric(){
    for (let i = 1; i <= material.teoric.length; i++) {
        $(document).ready(function() {
            document.getElementById('carouselTitle'+i).innerHTML = material.teoric[i-1].title;
            document.getElementById('carouselImg'+i).src = material.teoric[i-1].src;
        });
    }
}

//Grammar Img and text load with JQuery and Vanilla
function loadGrammar(){
    for (let i = 1; i <= material.grammar.length; i++) {
        $(document).ready(function() {
            document.getElementById('carouselTitle'+i).innerHTML = material.grammar[i-1].title;
            document.getElementById('carouselImg'+i).src = material.grammar[i-1].src;
        });
    }
}

//Practice Img and text load with JQuery and Vanilla
function loadPractice(){
    for (let i = 1; i <= material.practice.length; i++) {
        $(document).ready(function() {
            document.getElementById('carouselTitle'+i).innerHTML = material.practice[i-1].title;
            document.getElementById('carouselImg'+i).src = material.practice[i-1].src;
        });
    }
}

