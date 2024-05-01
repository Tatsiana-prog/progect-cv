$(document).ready(function () {
	// Находим блок с слайдами
	const owl = $('#clients-slider');
	// Запускаем карусель
	owl.owlCarousel({
        items: 1,
        loop: true,
        margin: 30,
        responsive: {
          0:{
              items:1,
              
          },
          768:{
              items:1.7,
              //stagePadding: 250,
              
          },
          991:{
            items:2.3,
            //stagePadding: 250,
          
        },
          1199:{
            items:2.8,
            //stagePadding: 200,
          
            loop:false
        },
          1440:{
              items:3,
              loop:false
          }
      }
	});


	// Находим кастомные кнопки Вперед / Назад
	const prev = $('#sliderPrev');
	const next = $('#sliderNext');

	// Клик на кнопку Назад и прокрутка карусели
	prev.click(function () {
		owl.trigger('prev.owl.carousel');
	});

	// Клик на кнопку Вперед и прокрутка карусели
	next.click(function () {
		owl.trigger('next.owl.carousel');
	});
});






