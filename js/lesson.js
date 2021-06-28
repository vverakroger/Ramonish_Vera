//Object Lesson
class Lesson{
    constructor(anImage, aText) {
        this.Image = anImage;
        this.Text = aText;
    }
}

const lesson1 = new Lesson ("css/multimedia/class.png","Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut eum similique repellat a laborum, rerum voluptates ipsam eos quo tempore iusto dolore modi dolorum in pariatur. Incidunt repellendus praesentium quae!")
const lesson2 = new Lesson ("css/multimedia/grammar.png","Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut eum similique repellat a laborum, rerum voluptates ipsam eos quo tempore iusto dolore modi dolorum in pariatur. Incidunt repellendus praesentium quae!")
const lesson3 = new Lesson ("css/multimedia/practice.png","Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut eum similique repellat a laborum, rerum voluptates ipsam eos quo tempore iusto dolore modi dolorum in pariatur. Incidunt repellendus praesentium quae!")

document.getElementById("card1H4").innerHTML = lesson1.Text;
document.getElementById("card2H4").innerHTML = lesson2.Text;
document.getElementById("card3H4").innerHTML = lesson3.Text;

var img = document.createElement("img");
img.src = lesson1.Image;
var src = document.getElementById("card1Img");
src.appendChild(img);

var img = document.createElement("img");
img.src = lesson2.Image;
var src = document.getElementById("card2Img");
src.appendChild(img);

var img = document.createElement("img");
img.src = lesson3.Image;
var src = document.getElementById("card3Img");
src.appendChild(img);