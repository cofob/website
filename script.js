
let EptaCloseWindows = document.getElementsByClassName("window_main");//
let windowminecraft = document.getElementById("window_main-minecraft");// название переменых в нижнем регистре
let windowyggdrasil = document.getElementById("window_main-yggdrasil");
let windowdns = document.getElementById("window_main-dns");

function CloseWindows() {//закрытие окон
	for(let i=0; i<EptaCloseWindows.length; i++){
		EptaCloseWindows[i].style.visibility = "hidden";
	}
}

function widnowMinecraftserver() { // имя функции windows+название пректа с заглавной буквы без пробела на латинице
	windowminecraft.classList.toggle("show");//вызов анимации появления
	windowminecraft.style.visibility = "visible";//изменение стиля невидимого окна на видимое
}
window.addEventListener("click", function(event) { //закрытие окна при нажатии на затемненую область
    if (event.target == windowminecraft) {
		windowminecraft.classList.toggle("show");
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



const titlePrlx = document.getElementById("title");
const ParentTitlePrlx = document.getElementById("par_h");

document.addEventListener("mousemove", function (e) { MoveTitle(e); });

function MoveTitle(e)
{
	let offsetX = (e.clientX / window.innerWidth * -60) + 30;
	let offsetY = (e.clientY / window.innerWidth * -30) + 15;
	let i = (e.clientY / window.innerHeight * 8) - 4;
	let offsetSmnsX = (e.clientX / window.innerWidth * -10) + 5;
	let offsetSX = (e.clientX / window.innerWidth * 10) - 5;
	let offsetSmnsY = (e.clientY / window.innerHeight * - 10) + 5;
	let offsetSY = (e.clientY / window.innerHeight * 8) - 4;
   titlePrlx.setAttribute("style", "transform: translateX(" + offsetX + "px)" + " translateY(" +  offsetY + "px) rotateY(" + offsetSmnsX + "deg) rotateX(" + i + "deg);" + "text-shadow: " + offsetSmnsX + "px " + offsetSmnsY + "px 0px #A72F31," + offsetSX + "px " + offsetSY + "px 0px #5A48D0;" );
}

window.addEventListener("scroll", PrlxTitle);

function PrlxTitle(){
	let prlx = (window.pageYOffset / 3);
	ParentTitlePrlx.setAttribute("style", "transform: translateY(" + prlx + "px");
}


