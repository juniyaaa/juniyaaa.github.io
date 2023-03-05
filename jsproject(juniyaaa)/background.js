const image = ["1.jpg", "2.jpg" , "3.jpg", "4.jpg"];

const choseImage = image[Math.floor(Math.random()*image.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${choseImage}`;

document.body.appendChild(bgImage);