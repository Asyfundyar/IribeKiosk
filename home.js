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
var images = ["./assets/fin_FG.png", "./assets/fin_F1.png", "./assets/fin_F2.png", 
"./assets/fin_F3.png", "./assets/fin_F4.png", "./assets/fin_F5.png"];

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

function updateClock(){
    var now = new Date();
    var dname = now.getDay(),
        mo = now.getMonth(),
        dnum = now.getDate(),
        hou = now.getHours(),
        min = now.getMinutes(),
        pe = "AM";

        if(hou >= 12){
          pe = "PM";
        }
        if(hou == 0){
          hou = 12;
        }
        if(hou > 12){
          hou = hou - 12;
        }

        Number.prototype.pad = function(digits){
          for(var n = this.toString(); n.length < digits; n = 0 + n);
          return n;
        }

        var months = ["January", "February", "March", "April", "May", "June", "July", "Augest", "September", "October", "November", "December"];
        var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        var ids = ["dayname", "month", "daynum", "hour", "minutes", "period"];
        var values = [week[dname], months[mo], dnum.pad(2), hou.pad(2), min.pad(2), pe];
        for(var i = 0; i < ids.length; i++)
        document.getElementById(ids[i]).firstChild.nodeValue = values[i];
  }

  function initClock(){
    updateClock();
    window.setInterval("updateClock()", 1);
  }
