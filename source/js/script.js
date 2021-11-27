$(document).ready(function(){
	$('.slider').slick({
		arrows:true,
		dots:false,
		slidesToShow:4,
		autoplay:true,
		speed:1000,
		autoplaySpeed:5000,
		responsive:[
			{
				breakpoint: 1370,
				settings: {
					slidesToShow:3
				}
			},
      {
				breakpoint: 1070,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 760,
				settings: {
					slidesToShow:1,
		      dots:true,
          arrows:false,
				}
			}
		]
	});
});
