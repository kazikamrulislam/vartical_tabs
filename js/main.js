let i, tabcont, tablink;
tabcont = document.getElementsByClassName("tabcont");
tabcont[0].style.display = "block";

function openCity(evt, cityName) {

    for(i = 0; i < tabcont.length; i++) {
        tabcont[i].style.display = "none";
    }

    tablink = document.getElementsByClassName("tablink");
    for(i = 0; i < tablink.length; i++) {
        tablink[i].className = tablink[i].className.replace(" active", "");
    }

    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}