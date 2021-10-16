let greet = document.querySelector(".greet");
console.log(greet);

greet.style.color = "green";

greet.classList.add("pip");

//Canvas

let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");
//context.fillStyle = "blue";
//context.fillRect(100, 100, 400, 400);

context.beginPath();
context.lineWidth = 4;
context.rect(100, 100, 400, 400);
//context.stroke();

context.beginPath();
context.arc(300, 300, 100, 0, Math.PI * 2);
//context.stroke();
const width = 60;
const height = 60;
const gap = 20;
let x, y;
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    x = 100 + (width + gap) * i;
    y = 100 + (height + gap) * j;

    context.beginPath();
    context.rect(x, y, width, height);
    context.stroke();

    if (Math.random() > 0.5) {
      context.beginPath();
      context.rect(x + 8, y + 8, width - 16, height - 16);
      context.stroke();
    }
  }
}
//Arrays

let bands = ["Offspring", "Green Day", "In Extremo", "Avatar"];
let newBands = [...bands];

function listArt() {
  for (i = 0; i < bands.length; i++) {
    if (bands[i] === "Avatar") {
      ava = bands.pop();
      console.log(ava);
    }
  }
}

listArt();

listArtists = () => {
  newBands.forEach((band) => console.log(band));
};

listArtists();
