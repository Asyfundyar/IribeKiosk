const btnR = document.querySelector('.btn-right');
const btnL = document.querySelector('.btn-left');
const tracks = document.querySelector('.tracks');
const tracksW = tracks.scrollWidth;

btnR.addEventListener('click', _ => {
  tracks.scrollBy({
    left: tracksW / 2,
    behavior: 'smooth'
  });
});

btnL.addEventListener('click', _ => {
  tracks.scrollBy({
    left: -tracksW / 2,
    behavior: 'smooth'
  });
});


let observer = new IntersectionObserver(entries => {
  if (!entries[0].isIntersecting) {
    document.body.classList.add("reveal");
  } else {
    document.body.classList.remove("reveal");
  }
});

observer.observe(document.querySelector("#top-of-site-pixel-anchor"));

function showMap(id) {
  if (id == 1207) {
      document.getElementById("map").src = "../assets/F1_IRB1207_Cropped.png";
      document.getElementById("roomtype").innerText = "Classroom";
  }
}

var modal = document.getElementById("mapModal");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

function showMapModal(id) {
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

var rooms = [];

function autocomplete(input, room_arr) {

    var currentFocus;

    input.addEventListener("input", function (e) {
        var a, b, i, val = this.value;
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
            if (room_arr[i].substr(0, val.length) == val) {
                b = document.createElement("div");
                b.innerHTML = "<strong>" + room_arr[i].substr(0, val.length) + "</strong>";
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
        if (e.keyCode == 40) { // down
            currentFocus++;
            addActive(x);
        } else if (e.keyCode == 38) { //up
            currentFocus--;
            addActive(x);
        } else if (e.keyCode == 13) { //Enter

            e.preventDefault();
            if (currentFocus > -1) {
                //click on the "active" item:
                if (x) x[currentFocus].click();
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
            currentFocus = (x.length - 1);
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

var feature_modal = document.getElementsByClassName("modal")[0];
console.log(document.getElementsByClassName("modal"));
// Get the <span> element that closes the modal
var feature_span = document.getElementsByClassName("close")[0];
console.log(document.getElementsByClassName("close"));

function showMapModal() {
  feature_modal.style.display = "block";
}

// When the user clicks on x, close the modal
span.onclick = function () {
  feature_modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == feature_modal) {
      feature_modal.style.display = "none";
  }
}

// This is called for onclick event on search button
function search() {
    var id = document.getElementById("myInput");
    showMapModal(id.value);
}

