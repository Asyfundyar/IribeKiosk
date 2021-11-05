function showMap(id) {
    if (id == 1605) {
        document.getElementById("map").src = "../assets/F1_IRB1207_Cropped.png";
    } else if (id == 0102) {
        document.getElementById("map").src = "../assets/Final_GroundFloor.png";
    }
}

/*function put_marker(from_left, from_top) {
    var marker = document.getElementById('marker');
    marker.style.left = from_left + "px";
    marker.style.top = from_top + "px";
    marker.display = "block";
};
*/
var modal = document.getElementById("mapModal");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

function showMapModal(id) {
    console.log("Test");
    console.log(id);
    modal.style.display = "block";
    showMap(id)
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

var btn = document.getElementsByClassName("floorbtn");

btn[0].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
});

btn[1].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
});

btn[2].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
});

btn[3].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
});

btn[4].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
});

btn[5].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
});
