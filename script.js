//окна
let AllWindows = document.getElementsByClassName("window_main");
let AllButtonsOpenWindow = document.getElementsByClassName("project_button");

function CloseWindows() {//закрытие окон
	for(let i=0; i<AllWindows.length; i++){
		AllWindows[i].style.visibility = "hidden";
	}
}
window.addEventListener("click", function(event) {
	for(let i=0; i<AllWindows.length; i++){
		if (event.target == AllWindows[i]) {
			AllWindows[i].style.visibility = "hidden";
		}
	}
});
window.addEventListener("click", function(event){
	for(let i=0,w=0; i<AllWindows.length, w<AllButtonsOpenWindow.length; i++, w++){
		if (event.target == AllButtonsOpenWindow[w]) {
			AllWindows[i].style.visibility = "visible";
		}
	}
});

// паралакс эффект надписи
let titlePrlx = document.getElementById("title");
let ParentTitlePrlx = document.getElementById("par_h");
document.addEventListener("mousemove", function (e) { MoveTitle(e); });
document.addEventListener("scroll", PrlxTitle);
function MoveTitle(e) {
	let offsetX = (e.clientX / window.innerWidth * -60) + 30 ;
	let offsetY = (e.clientY / window.innerWidth * -30) + 15;
	let i = (e.clientY / window.innerHeight * 8) - 4;
	let offsetSmnsX = (e.clientX / window.innerWidth * -10) + 5;
	let offsetSX = (e.clientX / window.innerWidth * 10) - 5;
	let offsetSmnsY = (e.clientY / window.innerHeight * - 10) + 5;
	let offsetSY = (e.clientY / window.innerHeight * 8) - 4;
   titlePrlx.setAttribute("style", "transform: translateX(" + offsetX + "px)" + " translateY(" +  offsetY + "px) rotateY(" + offsetSmnsX + "deg) rotateX(" + i + "deg);" + "text-shadow: " + offsetSmnsX + "px " + offsetSmnsY + "px 0px #A72F31," + offsetSX + "px " + offsetSY + "px 0px #5A48D0;" );
}
function PrlxTitle(){
	let prlx = (window.pageYOffset / 3);
	ParentTitlePrlx.setAttribute("style", "transform: translateY(" + prlx + "px);");
}