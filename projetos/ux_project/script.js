const tagImg = document.getElementById("img");
const buttonProx = document.getElementById("proximo");
const buttonAnt = document.getElementById("anterior");

let arrayImgs = ["imgs/img1.jpg", "imgs/img2.jpg", "imgs/img3.jpg", "imgs/img4.jpg"];
let index = 0;
let timer;
let count = 0;

init();

function init() {
  start();

  buttonProx.onclick = imgProx;
  buttonAnt.onclick = imgAnt;
}

function start() {
  timer = setInterval(update, 1000);
}

function update() {
  count++;
  
  if (count == 3) {
    alterImage();
    count = 0;
  }
}

function alterImage() {
  if (index == 3) {
    index = 0;
    tagImg.src = arrayImgs[index];
  } else {
    index ++;
    tagImg.src = arrayImgs[index];
  }
}

function imgProx() {
  clearInterval(timer)
  count = 0;
  
  if (index == 3) {
    index = 0;
    tagImg.src = arrayImgs[index];
  } else {
    index ++;
    tagImg.src = arrayImgs[index];
  }

  start();
}

function imgAnt() {
  clearInterval(timer);
  count = 0;

  if (index == 0) {
    index = 3;
    tagImg.src = arrayImgs[index];
  } else {
    index --;
    tagImg.src = arrayImgs[index];
  }

  start();
}