//Fetch users data from json
fetch("db/material.json")
    .then(res => res.json())
    .then(data => localStorage.setItem('material', JSON.stringify(data)));

//Save users data on local storage
const material = JSON.parse(localStorage.getItem('material'));

//Teoric Img and text load 
function loadMaterial(aMaterial){
    switch (aMaterial) {
        case 'teoric':
            for (let i = 1; i <= material.teoric.length; i++) {
                $(document).ready(function() {
                    document.getElementById('carouselTitle'+i).innerHTML = material.teoric[i-1].title;
                    document.getElementById('carouselImg'+i).src = material.teoric[i-1].src;
                });
            }
            break;
        case 'grammar':
            for (let i = 1; i <= material.grammar.length; i++) {
                $(document).ready(function() {
                    document.getElementById('carouselTitle'+i).innerHTML = material.grammar[i-1].title;
                    document.getElementById('carouselImg'+i).src = material.grammar[i-1].src;
                });
            }
            break;
        case 'practice':
            for (let i = 1; i <= material.practice.length; i++) {
                $(document).ready(function() {
                    document.getElementById('carouselTitle'+i).innerHTML = material.practice[i-1].title;
                    document.getElementById('carouselImg'+i).src = material.practice[i-1].src;
                });
            }
            break;
        default:
            break;
    }
}
