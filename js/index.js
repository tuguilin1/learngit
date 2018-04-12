
var btn1 = document.querySelector("#btn1")
var showNav = document.querySelector(".show-nav")
btn1.addEventListener("click",function(){
	showNav.className== "show-nav show"? showNav.className="show-nav":showNav.className+=" show";
})