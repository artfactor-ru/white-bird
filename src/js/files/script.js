// Подключение функционала "Чертоги Фрилансера"
import { isMobile, bodyUnlock } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

document.querySelectorAll("form").forEach(function (form) {
	const checkbox = form.querySelector('input[type="checkbox"][name="personal_data_agreement"]');
	const button = form.querySelector('button[type="submit"]');
	if (!checkbox || !button) return;
	const toggleButton = () => {
		button.disabled = !checkbox.checked;
	};
	toggleButton();
	checkbox.addEventListener("change", toggleButton);
});

document.querySelectorAll(".menu-mobile__list .arrow").forEach((arrow) => {
	arrow.addEventListener("click", (e) => {
		e.preventDefault();
		const parentLi = arrow.closest("li");
		const parentUl = parentLi.parentElement; // текущий список (уровень)

		// закрываем только соседей на этом уровне
		parentUl.querySelectorAll(":scope > li._open").forEach((li) => {
			if (li !== parentLi) li.classList.remove("_open");
		});

		// переключаем текущее
		parentLi.classList.toggle("_open");
	});
});

document.querySelector(".menu-mobile__overlay").addEventListener("click", (e) => {
	document.documentElement.classList.remove("menu-open");
	bodyUnlock();
});

document.querySelector(".close").addEventListener("click", (e) => {
	document.documentElement.classList.remove("menu-open");
	bodyUnlock();
});
