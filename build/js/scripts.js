// Custom Scripts
// Custom scripts
// Мобильное меню бургер
function burgerMenu() {
  const burger = document.querySelector('.burger')
  const menu = document.querySelector('.menu')
  const body = document.querySelector('body')
  burger.addEventListener('click', () => {
    if (!menu.classList.contains('active')) {
      menu.classList.add('active')
      burger.classList.add('active-burger')
      body.classList.add('locked')
    } else {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    }
  })
  //снять классы при клике на элементы меню
  const menuItems = document.querySelectorAll('.menu__item')

  menuItems.forEach(item => {
    item.addEventListener('click', function () {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    })
  });

  // Вот тут мы ставим брейкпоинт навбара
  window.addEventListener('resize', () => {
    if (window.innerWidth > 991.98) {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    }
  })
}
burgerMenu();


// // Вызываем эту функцию, если нам нужно зафиксировать меню при скролле.
// function fixedNav() {
//   const nav = document.querySelector('nav')

//   // тут указываем в пикселях, сколько нужно проскроллить что бы наше меню стало фиксированным
//   const breakpoint = 1
//   if (window.scrollY >= breakpoint) {
//     nav.classList.add('fixed__nav')
//   } else {
//     nav.classList.remove('fixed__nav')
//   }
// }
// window.addEventListener('scroll', fixedNav)


function newsSlider() {
  const container = document.querySelector('.news-slider');

  if (!container) {
    return null
  }

  const swiper = new Swiper('.news-slider__swiper', {
    slidesPerView: 2,
    spaceBetween: 20,
    loop: true,

    navigation: {
      nextEl: '.news-slider__arrow--next',
      prevEl: '.news-slider__arrow--prev',
    },

    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      // when window width is >= 1025px
      1025: {
        slidesPerView: 3,
        spaceBetween: 30
      },
    }
  })
}

document.addEventListener('DOMContentLoaded', function () {
  newsSlider();
});

function reviewsSlider() {
  const container = document.querySelector('.reviews');

  if (!container) {
    return null
  }

  const swiper = new Swiper('.reviews__slider', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    grid: {
      rows: 2,
    },


    navigation: {
      nextEl: '.reviews-slider__arrow--next',
      prevEl: '.reviews-slider__arrow--prev',
    },

    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20,


        loop: true,
        grid: {
          rows: 2,
        },
      },
      // when window width is >= 992px
      992: {
        slidesPerView: 2,
        spaceBetween: 32,
        grid: {
          rows: 1,
        },
      },
    }
  })
}

document.addEventListener('DOMContentLoaded', function () {
  reviewsSlider();
});

function map() {
  const container = document.querySelector('.contacts')
  if (!container) {
    return null
  }

  let center = [55.769728, 37.676025];

  function init() {


    let map = new ymaps.Map('map', {
      center: center,
      zoom: 12
    });

    let placemark = new ymaps.Placemark(center, {}, {
      iconLayout: 'default#image',
      iconImageHref: '../img/pin.svg',
      // iconImageHref: '/local/templates/main/img/pin.svg',
      iconImageSize: [42, 42],
      iconImageOffset: [-14, -64]
    })

    map.geoObjects.add(placemark);

    map.controls.remove('geolocationControl'); // удаляем геолокацию
    map.controls.remove('searchControl'); // удаляем поиск
    map.controls.remove('trafficControl'); // удаляем контроль трафика
    map.controls.remove('typeSelector'); // удаляем тип
    map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    map.controls.remove('zoomControl'); // удаляем контрол зуммирования
    map.controls.remove('rulerControl'); // удаляем контрол правил
    // map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
  }

  ymaps.ready(init);
}

map();
