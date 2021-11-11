var imgNr = 0;
var images = ["../assets/fin_FG.png", "../assets/fin_F1.png", "../assets/fin_F2.png", 
"../assets/fin_F3.png", "../assets/fin_F4.png", "../assets/fin_F5.png"];

// As we add floors to the home page, add to this array
var floorNames = ["Ground Floor", "Floor One", "Floor Two", "Floor Three", "Floor Four", "Floor Five"]
var floorNum = 0;

function changeForward() {
  if (imgNr < images.length - 1) {
    imgNr++;
    floorNum++;
  } else {
    imgNr = 0;
    floorNum = 0;
  }
  var imgSrc = document.getElementById("iter");
  imgSrc.src = images[imgNr];
  document.getElementById("currFloor").innerText = floorNames[floorNum];
}

function changeBackward() {
  if (imgNr > 0) {
    imgNr--;
    floorNum--;
  } else {
    imgNr = images.length - 1;
    floorNum = floorNames.length - 1;
  }
  var imgSrc = document.getElementById("iter");
  imgSrc.src = images[imgNr];
  document.getElementById("currFloor").innerText = floorNames[floorNum];
}
