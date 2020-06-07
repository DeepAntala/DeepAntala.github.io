

$("ul").on("click", "li", function(){
	$(this).toggleClass("checkout");
			
})	



$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
})

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		var enterText=$(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash'></i></span>" + enterText + "</li>");
	}
})

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
})