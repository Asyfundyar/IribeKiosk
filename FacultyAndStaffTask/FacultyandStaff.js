function showMap(id) {
    if (id == 1207) {
      document.getElementById("map").src = "../assets/F1_IRB1207.png";
    } else if (id == 0102) {
      document.getElementById("map").src = "../assets/FG_IRB0102.png";
    } else if (id == 1116) {
      document.getElementById("map").src = "../assets/F1_IRB1116.png";
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
  
  function search() {
    var id = document.getElementById("myInput");
    console.log(id);
    var tableRows = document.getElementsByClassName("prof-info");
  
    var rows = [];
    for (var i = 0; i < tableRows.length; i++) {
      console.log(tableRows[i]);
      rows.push(tableRows[i].innerText);
    }
  
    var row = rows.find((s) => s.includes(id.value));
  
    for (var i = 0; i < rows.length; i++) {
      if (!rows[i].includes(row)) {
        tableRows[i].style.display = "none";
      } else {
        tableRows[i].style.display = "table-row";
      }
    }
  }
  
  var rooms = [
    "Daniel Abadi",
    "Mark Anthony",
    "Ashok Agrawala",
    "Mark Adams",
    "Abhinav Patel",
    "Evan Golub",
    "Hassan Tirmizi",
    "Phill Foden",
    "Michael Hicks",
  ];
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
  // This is called for onclick event on search button
