
let windowminecraft = document.getElementById("window_main-minecraft");// название переменых в нижнем регистре
let windowyggdrasil = document.getElementById("window_main-yggdrasil");
let windowdns = document.getElementById("window_main-dns");


function widnowMinecraftserver() { // имя функции windows+название пректа с заглавной буквы без пробела на латинице
	windowminecraft.classList.toggle("show");//вызов анимации появления
	windowminecraft.style.visibility = "visible";//изменение стиля невидимого окна на видимое
}
window.addEventListener("click", function(event) { //закрытие окна при нажатии на затемненую область
    if (event.target == windowminecraft) {
        windowminecraft.style.visibility = "hidden";//изменение стиля видимого окна на невидимое
    }
});


function windowYggdrasil() {
	windowyggdrasil.classList.toggle("show");
	windowyggdrasil.style.visibility = "visible";
}
window.addEventListener("click", function(event) {
    if (event.target == windowyggdrasil) {
        windowyggdrasil.style.visibility = "hidden";
    }
});


function windowDns() {
	windowdns.classList.toggle("show");
	windowdns.style.visibility = "visible";
}
window.addEventListener("click", function(event) {
    if (event.target == windowdns) {
        windowdns.style.visibility = "hidden";
    }
});