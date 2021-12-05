//окна
let AllWindows = document.getElementsByClassName("window_main");
let AllButtonsOpenWindow = document.getElementsByClassName("project_button");

function CloseWindows() {
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

// паралакс эффект надписи "cofob"
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

//стрелка вниз
let arrow = document.getElementById("arrow");
let scrollpage = (window.pageYOffset) ;
window.addEventListener("click", function(e){
	if(event.target == arrow){
			window.scrollBy(0, 200);
	}					
});
window.addEventListener("scroll", arrowAnim);
function arrowAnim() {
	if(window.scrollY  >= 150){
		arrow.style.animation = "none";
		arrow.style.transform = "rotate(315deg)"
			window.addEventListener("click", function(e){
				if(event.target == arrow){
					window.scrollTo(pageXOffset, 0);
				}					
			});
	}
	else{
		arrow.style.animation = "arrow 2s infinite ease-in-out";
	}
}

//каждый втрой проект буит появлятся справа остальные слева для мобилак
let projectblock = document.getElementsByClassName("project");
window.addEventListener("scroll", startanimproject);
function startanimproject(){
	if(document.documentElement.clientWidth <= 480){
		for(let i=0; i<AllWindows.length; i++){
			if (i % 2 == 0){
				projectblock[i].setAttribute("style", "animation: slide_right 500ms 1;");
			}
			else {
				projectblock[i].setAttribute("style", "animation: slide_left 500ms 1;");
			}
		}
	}
}









