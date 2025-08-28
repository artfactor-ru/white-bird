/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper с node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper from "swiper";
import { Navigation, Scrollbar, Pagination, Thumbs, EffectFade, Autoplay } from "swiper/modules";
import { initYandexMap } from "./map.js";
/*
Основные модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей с scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей с node_modules
// import 'swiper/css';
if (document.querySelector(".hero__slider")) {
	// Указываем скласс нужного слайдера
	// Создаем слайдер
	new Swiper(".hero__slider", {
		// Указываем скласс нужного слайдера
		// Подключаем модули слайдера
		// для конкретного случая
		modules: [Pagination, EffectFade, Autoplay],
		observer: true,
		observeParents: true,
		slidesPerView: 1,
		spaceBetween: 0,
		autoHeight: true,
		speed: 800,

		//touchRatio: 0,
		//simulateTouch: false,
		loop: true,
		//preloadImages: false,
		//lazy: true,

		// Эффекты
		effect: "fade",
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},

		// Пагинация

		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},

		// Скроллбар
		/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

		// Кнопки "влево/вправо"
		// navigation: {
		// 	prevEl: ".swiper-button-prev",
		// 	nextEl: ".swiper-button-next",
		// },
		/*
			// Брейкпоинты
			breakpoints: {
				640: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
		// События
		on: {},
	});
}

if (document.querySelector(".experts__slider")) {
	// Указываем скласс нужного слайдера
	// Создаем слайдер
	new Swiper(".experts__slider", {
		// Указываем скласс нужного слайдера
		// Подключаем модули слайдера
		// для конкретного случая
		modules: [Navigation],
		observer: true,
		observeParents: true,
		slidesPerView: 2,
		spaceBetween: 25,
		autoHeight: true,
		speed: 800,

		//touchRatio: 0,
		//simulateTouch: false,
		// loop: true,
		//preloadImages: false,
		//lazy: true,

		// Эффекты
		// effect: "fade",
		// autoplay: {
		// 	delay: 3000,
		// 	disableOnInteraction: false,
		// },

		// Пагинация

		// pagination: {
		// 	el: ".swiper-pagination",
		// 	clickable: true,
		// },

		// Скроллбар
		/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

		// Кнопки "влево/вправо"
		navigation: {
			prevEl: ".experts-prev",
			nextEl: ".experts-next",
		},
		/*
			// Брейкпоинты
			breakpoints: {
				640: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
		// События
		on: {},
	});
}

if (document.querySelector(".stories__slider")) {
	// Указываем скласс нужного слайдера
	// Создаем слайдер
	new Swiper(".stories__slider", {
		// Указываем скласс нужного слайдера
		// Подключаем модули слайдера
		// для конкретного случая
		modules: [Navigation],
		observer: true,
		observeParents: true,
		slidesPerView: 2,
		spaceBetween: 25,
		autoHeight: true,
		speed: 800,

		//touchRatio: 0,
		//simulateTouch: false,
		// loop: true,
		//preloadImages: false,
		//lazy: true,

		// Эффекты
		// effect: "fade",
		// autoplay: {
		// 	delay: 3000,
		// 	disableOnInteraction: false,
		// },

		// Пагинация

		// pagination: {
		// 	el: ".swiper-pagination",
		// 	clickable: true,
		// },

		// Скроллбар
		/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

		// Кнопки "влево/вправо"
		navigation: {
			prevEl: ".stories-prev",
			nextEl: ".stories-next",
		},
		/*
			// Брейкпоинты
			breakpoints: {
				640: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
		// События
		on: {},
	});
}

if (document.querySelector(".contacts__slider")) {
	const swiper = new Swiper(".contacts__slider", {
		modules: [Navigation],
		observer: true,
		allowTouchMove: false,
		observeParents: true,
		slidesPerView: 1,
		spaceBetween: 0,
		autoHeight: true,
		speed: 800,

		navigation: {
			prevEl: ".contacts-prev",
			nextEl: ".contacts-next",
		},

		on: {
			// === добавляем инициализацию первой карты сразу ===
			init: function () {
				const firstSlide = this.slides[this.activeIndex];
				const mapContainer = firstSlide.querySelector("#map");

				if (mapContainer && !mapContainer.dataset.mapLoaded) {
					mapContainer.dataset.mapLoaded = "true";

					if (typeof ymaps === "undefined") {
						const tag = document.createElement("script");
						tag.src = "https://api-maps.yandex.ru/2.1/?lang=ru_RU&apikey=eab455d8-6e16-40a2-aa40-ac2b679a05b6";
						tag.onload = () => initYandexMap(mapContainer);
						document.head.appendChild(tag);
					} else {
						initYandexMap(mapContainer);
					}
				}
			},

			slideChange: function () {
				const activeSlide = this.slides[this.activeIndex];
				const mapContainer = activeSlide.querySelector("#map");

				if (mapContainer && !mapContainer.dataset.mapLoaded) {
					mapContainer.dataset.mapLoaded = "true";

					if (typeof ymaps === "undefined") {
						const tag = document.createElement("script");
						tag.src = "https://api-maps.yandex.ru/2.1/?lang=ru_RU&apikey=eab455d8-6e16-40a2-aa40-ac2b679a05b6";
						tag.onload = () => initYandexMap(mapContainer);
						document.head.appendChild(tag);
					} else {
						initYandexMap(mapContainer);
					}
				}
			},
		},
	});

	// явно вызываем init, чтобы отработало событие init
	swiper.init();
}

// Инициализация слайдеров
function initSliders() {}
// Скролл на базе слайдера (по классу swiper scroll для оболочки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll(".swiper_scroll");
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector(".swiper-scrollbar");
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: "vertical",
				slidesPerView: "auto",
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false,
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});
