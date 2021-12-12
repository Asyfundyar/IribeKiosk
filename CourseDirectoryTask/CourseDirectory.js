function showMap(id) {
    document.getElementById("map").src = "";
    if (id == "0102") {
        document.getElementById("map").src = "../assets/FG_IRB0102.png";
    } else if (id == "1116") {
        document.getElementById("map").src = "../assets/F1_IRB1116.png";
    } else if (id == "1207") {
        document.getElementById("map").src = "../assets/F1_IRB1207.png";
    } else if (id == "2207") {
        document.getElementById("map").src = "../assets/FG_IRB2207.png";
    } else if (id == "1121") {
        document.getElementById("map").src = "../assets/CSIC_Combo.png";
    } else if (id == "3117") {
        document.getElementById("map").src = "../assets/CSIC_Combo.png";
    }
}

var modal = document.getElementById("mapModal");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

function showMapModal(id) {
    modal.style.display = "block";
    showMap(id);
}

// When the user clicks on x, close the modal
span.onclick = function () {
    modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

var btn = document.getElementsByClassName("coursebtn");

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

btn[6].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
});
/*
btn[7].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
});*/

// This is called for onclick event on search button
function search() {
    var id = document.getElementById("myInput");
    var coursebtns = document.getElementsByClassName("coursebtn");

    var courses = [];
    for (var i = 0; i < coursebtns.length; i++) {
        courses.push(coursebtns[i].innerText);
    }

    var course = courses.find((s) => s.includes(id.value));

    for (var i = 0; i < courses.length; i++) {
        if (!courses[i].includes(course)) {
            coursebtns[i].style.display = "none";
            var content = coursebtns[i].nextElementSibling;
            if (content.style.display == "block") {
                content.style.display = "none";
            }
        } else {
            coursebtns[i].style.display = "inline-block";
            if (!coursebtns[i].classList.contains("active")) {
                coursebtns[i].classList.toggle("active");

            }
            var content = coursebtns[i].nextElementSibling;
            content.style.display = "block";
        }
    }
}

function returnToList() {
    var coursebtns = document.getElementsByClassName("coursebtn");
    console.log(coursebtns);

    for (var i = 0; i < coursebtns.length; i++) {
        coursebtns[i].style.display = "block"
        var content = coursebtns[i].nextElementSibling;
        if (coursebtns[i].classList.contains("active")) {
            console.log("Contains Active")
            coursebtns[i].classList.remove("active");
            if (content.style.display == "block") {
                content.style.display = "none";
            }
        }
    }
}

var rooms = [
    "CMSC100",
    "CMSC106",
    "CMSC122",
    "CMSC125",
    "CMSC131",
    "CMSC132",
    "CMSC216",
];

function autocomplete(input, room_arr) {
    var currentFocus;
    console.log(input)
    input.addEventListener("input", function (e) {
        var a,
            b,
            i,
            val = this.value;
        closeAllLists();

        if (!val) {
            return false;
        }

        currentFocus = -1;
        a = document.createElement("div");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        this.parentNode.appendChild(a);

        for (i = 0; i < room_arr.length; i++) {
            if (room_arr[i].substr(0, val.length) == val.toUpperCase()) {
                b = document.createElement("div");
                b.innerHTML =
                    "<strong>" + room_arr[i].substr(0, val.length) + "</strong>";
                b.innerHTML += room_arr[i].substr(val.length);
                b.innerHTML += "<input type='hidden' value='" + room_arr[i] + "'>";
                b.addEventListener("click", function (e) {
                    input.value = this.getElementsByTagName("input")[0].value;
                    closeAllLists();
                });
                a.appendChild(b);
            }
        }
    });

    input.addEventListener("keydown", function (e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) {
            x = x.getElementsByTagName("div");
        }
        if (e.keyCode == 40) {
            // down
            currentFocus++;
            addActive(x);
        } else if (e.keyCode == 38) {
            //up
            currentFocus--;
            addActive(x);
        } else if (e.keyCode == 13) {
            //Enter

            e.preventDefault();
            if (currentFocus > -1) {
                //click on the "active" item:
                if (x) {
                    x[currentFocus].click();
                    console.log("search");
                    search();
                }
            }
        }
    });

    function addActive(x) {
        if (!x) {
            return false;
        }
        removeActive(x);
        if (currentFocus >= x.length) {
            currentFocus = 0;
        }
        if (currentFocus < 0) {
            currentFocus = x.length - 1;
        }
        /*add class "autocomplete-active":*/
        x[currentFocus].classList.add("autocomplete-active");
    }

    function removeActive(x) {
        for (var i = 0; i < x.length; i++) {
            x[i].classList.remove("autocomplete-active");
        }
    }

    function closeAllLists(ele) {
        var x = document.getElementsByClassName("autocomplete-items");
        for (var i = 0; i < x.length; i++) {
            if (ele != x[i] && ele != input) {
                x[i].parentNode.removeChild(x[i]);
            }
        }
    }
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
}

// Autocomplete search function
autocomplete(document.getElementById("myInput"), rooms);
console.log(document.getElementById("myInput"));