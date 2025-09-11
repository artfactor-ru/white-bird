import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

// Галерея Fancybox =================================
Fancybox.bind('[data-fancybox="gallery"]', {});

// Popup Работы
const btnAplication = document.querySelectorAll("[data-work]");
btnAplication.forEach((btn) => {
	btn.addEventListener("click", () => {
		// Находим родительскую карточку
		const card = btn.closest(".work__card");

		// Находим попап
		const popup = document.querySelector("#work");

		// Копируем картинки в слайдер
		const slides = card.querySelectorAll(".work__slide img");
		const popupSlides = popup.querySelectorAll(".work__slide img");
		popupSlides.forEach((img, index) => {
			if (slides[index]) {
				img.setAttribute("data-src", slides[index].getAttribute("data-src"));
				img.setAttribute("src", slides[index].getAttribute("data-src")); // чтобы сразу показывало
				img.setAttribute("alt", slides[index].alt || "");
			} else {
				img.removeAttribute("src");
				img.removeAttribute("data-src");
			}
		});

		// Текстовые данные
		popup.querySelector(".name").textContent = card.querySelector(".name").textContent;
		popup.querySelector(".direction").innerHTML = card.querySelector(".direction").innerHTML;
		popup.querySelector(".doctor").innerHTML = card.querySelector(".doctor").innerHTML;
		popup.querySelector(".complaint").innerHTML = card.querySelector(".complaint").innerHTML;
		popup.querySelector(".treatment").innerHTML = card.querySelector(".treatment").innerHTML;

		// Открываем попап
		Fancybox.show([{ src: "#work", type: "inline" }]);

		// Если используешь swiper внутри попапа – нужно обновить
		setTimeout(() => {
			document.querySelectorAll("#work .swiper").forEach((swiperEl) => {
				if (swiperEl.swiper) swiperEl.swiper.update();
			});
		}, 200);
	});
});

const btnCall = document.querySelectorAll("[data-call]");
btnCall.forEach((btn) => {
	btn.addEventListener("click", () => {
		Fancybox.show([{ src: "#call", type: "inline" }]);
	});
});

const btnService = document.querySelectorAll("[data-call-service]");
const popup = document.querySelector("#call-service");
const spanName = popup.querySelector(".name");
const hiddenInput = popup.querySelector('input[name="service_name"]');

btnService.forEach((btn) => {
	btn.addEventListener("click", () => {
		const serviceName = btn.dataset.name;
		spanName.textContent = serviceName;
		hiddenInput.value = serviceName;
		Fancybox.show([{ src: "#call-service", type: "inline" }]);
	});
});
