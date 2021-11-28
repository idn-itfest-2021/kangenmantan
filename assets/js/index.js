const containerDiskon = document.querySelector(".container-diskon");
const cancelIconDIskon    = document.querySelector (".container-diskon #cancelIconDiskon");

cancelIconDIskon.addEventListener("click", ()=> {
    containerDiskon.style.display = "none";
});

// Javascript Tabbing Function Start ======
function openCity(evt, cityName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("tabcontent");
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
        tablinks[i].classList.remove("tab-active");
        var target = tablinks[i].dataset.target;
        document.getElementById(target).classList.remove('active');
    }
    evt.classList.add('tab-active');
    var target = evt.dataset.target;
    document.getElementById(target).classList.add('active');
  }
  // Javascript Tabbing Function End ======