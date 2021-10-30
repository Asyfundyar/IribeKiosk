var modal = document.getElementById("HungryModal");

// Get the button that opens the modal


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
function showModal() {
    modal.style.display = "block";
}

// When the user clicks on x, close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var imgNr = 0;
var images = ["./assets/Final_GroundFloor.png", "./assets/Final_FloorOne.png", "./assets/Final_FloorTwo.png", 
"./assets/Final_FloorThree.png", "./assets/Final_FloorFour.png", "./assets/Final_FloorFive.png"];

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
