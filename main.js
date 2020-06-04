var hoverout=document.getElementById("banner");

hoverout.addEventListener("mouseover", function(){
	this.classList.remove("selected");
});

hoverout.addEventListener("mouseout", function(){
	this.classList.add("selected");
});