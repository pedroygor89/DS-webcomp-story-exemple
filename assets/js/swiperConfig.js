var navigationData = {
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  a11y: {
  	firstSlideMessage:'Esse é o primeiro slide',
  	lastSlideMessage:'Esse é o último slide',
    prevSlideMessage:'Slide anterior',
    nextSlideMessage:'Próximo slide',
    paginationBulletMessage:'Vá para o slide {{index}}',
    
  }
}

var progressData = {
  pagination: {
    el: '.swiper-pagination',
    type: 'progressbar',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  a11y: {
  	firstSlideMessage:'Esse é o primeiro slide',
  	lastSlideMessage:'Esse é o último slide',
    prevSlideMessage:'Slide anterior',
    nextSlideMessage:'Próximo slide',
    paginationBulletMessage:'Vá para o slide {{index}}',
    
  }
}

var multipleData = {
      slidesPerView: 3,
      spaceBetween: 40,
      // init: false,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },

      navigation: {
	    nextEl: '.swiper-button-next',
	    prevEl: '.swiper-button-prev',
	  },

      breakpoints: {
        1024: {
          slidesPerView: 3,
          spaceBetween: 40,
        },

        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },

        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },

        360: {
          slidesPerView: 1,
          spaceBetween: 10,
        }
      },

  a11y: {
  	firstSlideMessage:'Esse é o primeiro slide',
  	lastSlideMessage:'Esse é o último slide',
    prevSlideMessage:'Slide anterior',
    nextSlideMessage:'Próximo slide',
    paginationBulletMessage:'Vá para o slide {{index}}',
    
  }
}