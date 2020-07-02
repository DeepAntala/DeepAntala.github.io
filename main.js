
$(document).ready(function(){
			$(window).on("scroll", (function(){
					$(".main").css("opacity", 1-$(this).scrollTop()/700)
					$("#banner").css("opacity", 1-$(this).scrollTop()/700)
				})
		)})	





$(document).ready(function(){
			$(".fa-envelope").on("mouseover", function(){
				$(".fa-envelope").css({
					"color": "green",
					"font-weight": "900"
					});
				})
			$(".fa-envelope").on("mouseout", function(){
					$(".fa-envelope").css({
						"color": "black",
						"font-weight": "normal"
					});

				})
			$(".fa-facebook-f").on("mouseover", function(){
				$(".fa-facebook-f").css({
					"color": "#3b5998",
					"font-weight": "900"
					});
				})
			$(".fa-facebook-f").on("mouseout", function(){
					$(".fa-facebook-f").css({
						"color": "black",
						"font-weight": "normal"
					});

				})
			$(".fa-linkedin-in").on("mouseover", function(){
				$(".fa-linkedin-in").css({
					"color": "#0077b5",
					"font-weight": "900"
					});
				})
			$(".fa-linkedin-in").on("mouseout", function(){
					// $(".main").css("opacity", "1")
					$(".fa-linkedin-in").css({
						"color": "black",
						"font-weight": "normal"
					});

				})
			$(".fa-github").on("mouseover", function(){
				$(".fa-github").css({
					"color": "#6e5494",
					"font-weight": "900"
					});
				})
			$(".fa-github").on("mouseout", function(){
					$(".fa-github").css({
						"color": "black",
						"font-weight": "normal"
					});

				})
		})
