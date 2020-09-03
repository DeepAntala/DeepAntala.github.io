

window.onload= function() {
	Particles.init({
		selector: '.background',
		connectParticles: true,
		speed:0.8,
		maxParticles:120,
		sizeVariations:10,
		color:["#36d1dc","#cb356b","#283c86","#36d1dc","#40e0d0"],
		responsive: [
    {
      breakpoint: 768,
      options: {
        maxParticles: 80,
        color:["#36d1dc","#cb356b","#283c86","#36d1dc","#40e0d0"],
        connectParticles: true}},
         {
      breakpoint: 425,
      options: {
        maxParticles: 50,
        connectParticles: true}}
        ]
    });
};

$(document).ready(function(){
			$(".fa-envelope").hover( function(){
				$(".fa-envelope").css({
					"color": "green",
					"font-weight": "900"
					});
				}, function(){
					$(".fa-envelope").css({
						"color": "black",
						"font-weight": "normal"
					});

				})
			$(".fa-facebook-f").hover(function(){
				$(".fa-facebook-f").css({
					"color": "#3b5998",
					"font-weight": "900"
					});
				}, function(){
					$(".fa-facebook-f").css({
						"color": "black",
						"font-weight": "normal"
					});

				})
			$(".fa-linkedin-in").hover(function(){
				$(".fa-linkedin-in").css({
					"color": "#0077b5",
					"font-weight": "900"
					});
				}, function(){
					$(".fa-linkedin-in").css({
						"color": "black",
						"font-weight": "normal"
					});

				})
			$(".fa-github").hover(function(){
				$(".fa-github").css({
					"color": "#6e5494",
					"font-weight": "900"
					});
				}, function(){
					$(".fa-github").css({
						"color": "black",
						"font-weight": "normal"
					});

				})

		})
