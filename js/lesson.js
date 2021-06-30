//Object Lesson
class Lesson{
    constructor(anImage, aText) {
        this.Image = anImage;
        this.Text = aText;
    }
}

const lesson1 = new Lesson ("css/multimedia/class.png","Lorem ipsum dolor sit amet consectetur, adipisicing elit.")
const lesson2 = new Lesson ("css/multimedia/grammar.png","Lorem ipsum dolor sit amet consectetur, adipisicing elit.")
const lesson3 = new Lesson ("css/multimedia/practice.png","Lorem ipsum dolor sit amet consectetur, adipisicing elit.")

const cardsImgs = ["card1Img", "card2Img", "card3Img"];
const cardsText = ["card1H4", "card2H4", "card3H4"];
const lessonss = [lesson1, lesson2, lesson3];

for (let i = 0 ; i < lessonss.length; i++) {
    // Carga de imágenes
    var img = document.createElement("img");
    img.src = lessonss[i].Image;
    var src = document.getElementById(cardsImgs[i]);
    src.appendChild(img);

    //Carga de texto
    document.getElementById(cardsText[i]).innerHTML = lessonss[i].Text;
}
