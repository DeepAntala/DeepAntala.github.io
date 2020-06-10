var hoverout=document.getElementById("banner");

hoverout.addEventListener("mouseover", function(){
	this.classList.remove("selected");
});

hoverout.addEventListener("mouseout", function(){
	this.classList.add("selected");
});

$(document).ready(function(){
			$(window).on("scroll", (function(){
					$(".main").css("opacity", 1-$(window).scrollTop()/700)
					$("#banner").css("opacity", 1-$(window).scrollTop()/700)
				})
		)})	
