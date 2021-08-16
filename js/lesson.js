//Object Lesson 
class Lesson{
    constructor(anImage, aText) {
        this.Image = anImage;
        this.Text = aText;
    }
}

//Object inizialitation
const lesson1 = new Lesson ("css/multimedia/teoric.png","Most usefull class material recopilation")
const lesson2 = new Lesson ("css/multimedia/grammar.png","Grammar and vocabulary review from classes")
const lesson3 = new Lesson ("css/multimedia/practice.png","Practical excersices to do at home")

//Const declaration
const cardsText = ["card1H4", "card2H4", "card3H4"];
const lessonss = [lesson1, lesson2, lesson3];


// Img and text load with JQuery and Vanilla
for (let i = 0; i < lessonss.length; i++) {
    $(document).ready(function() {
        document.getElementById(cardsText[i]).innerHTML = lessonss[i].Text;
        var url = lessonss[i].Image;
        var image = new Image();
        image.src = url;
        var j = i + 1;
        var cardId = '#card' + j + 'Img'
        $(cardId).append(image);
    });
}


