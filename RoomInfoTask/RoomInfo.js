function showMap(id) {
  if (id == 0102) {
    document.getElementById("map").src = "../assets/FG_IRB0102.png";
  } else if (id == 1116) {
    document.getElementById("map").src = "../assets/F1_IRB1116.png";
  } else if (id == 1207) {
    document.getElementById("map").src = "../assets/F1_IRB1207.png";
  }
}

var modal = document.getElementById("mapModal");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

function showMapModal(id) {
  modal.style.display = "inline-block";
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

var rooms = ["0102", "0108", "0198", "0324", "1104", "1119", "1124", "1207", "1116"];

function autocomplete(input, room_arr) {
  var currentFocus;

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
      if (room_arr[i].substr(0, val.length) == val) {
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

// This is called for onclick event on search button
function search() {
  var id = document.getElementById("myInput");
  showMapModal(id.value);
}
