// Подключение функционала "Чертоги Фрилансера"
import { isMobile, bodyUnlock, bodyLock } from "./functions.js";
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

// document.querySelectorAll(".menu-mobile__list .arrow").forEach((arrow) => {
// 	arrow.addEventListener("click", (e) => {
// 		e.preventDefault();
// 		const parentLi = arrow.closest("li");
// 		const parentUl = parentLi.parentElement; // текущий список (уровень)

// 		// закрываем только соседей на этом уровне
// 		parentUl.querySelectorAll(":scope > li._open").forEach((li) => {
// 			if (li !== parentLi) li.classList.remove("_open");
// 		});

// 		// переключаем текущее
// 		parentLi.classList.toggle("_open");
// 	});
// });

// document.querySelector(".menu-mobile__overlay").addEventListener("click", (e) => {
// 	document.documentElement.classList.remove("menu-open");
// 	bodyUnlock();
// });

// document.querySelector(".close").addEventListener("click", (e) => {
// 	document.documentElement.classList.remove("menu-open");
// 	bodyUnlock();
// });

// Menu ===================================
const menu = document.querySelector(".mobile-menu");
const menuMains = menu.querySelectorAll(".menu-main");
const goBack = menu.querySelector(".go-back");
const menuTrigger = document.querySelector(".menu__icon");
const closeMenu = menu.querySelector(".mobile-menu-close");
const overlay = document.querySelector(".menu-overlay");
const menuHead = menu.querySelector(".mobile-menu-head");
const menuTitle = menu.querySelector(".current-menu-title");

let subMenuStack = []; // стек открытых подменю

menuMains.forEach((menuMain) => {
	menuMain.addEventListener("click", (e) => {
		if (!menu.classList.contains("active")) return;

		const hasChildren = e.target.closest(".menu-item-has-children");
		if (hasChildren) {
			showSubMenu(hasChildren);
		}
	});
});

goBack.addEventListener("click", () => {
	hideSubMenu();
});

menuTrigger.addEventListener("click", () => {
	toggleMenu();
	bodyLock();
});

closeMenu.addEventListener("click", () => {
	toggleMenu();
	bodyUnlock();
});

overlay.addEventListener("click", () => {
	toggleMenu();
	bodyUnlock();
});

function toggleMenu() {
	menu.classList.toggle("active");
	overlay.classList.toggle("active");

	// если меню закрываем - сбросить стек
	if (!menu.classList.contains("active")) {
		resetSubMenus();
	}
}

function showSubMenu(hasChildren) {
	const subMenu = hasChildren.querySelector(".sub-menu");
	if (!subMenu) return;

	subMenu.classList.add("active");
	subMenu.style.animation = "slideLeft 0.5s ease forwards";

	// заголовок = текст родителя (без <i>)
	const title = hasChildren.querySelector("i")
		? hasChildren.querySelector("i").parentNode.childNodes[0].textContent.trim()
		: hasChildren.childNodes[0].textContent.trim();

	subMenuStack.push({ element: subMenu, title });

	menuTitle.textContent = title;
	menuHead.classList.add("active");
}

function hideSubMenu() {
	if (subMenuStack.length === 0) return;

	const { element } = subMenuStack.pop();
	element.style.animation = "slideRight 0.5s ease forwards";

	setTimeout(() => {
		element.classList.remove("active");
	}, 300);

	// если стек пуст → убираем заголовок
	if (subMenuStack.length === 0) {
		menuTitle.textContent = "";
		menuHead.classList.remove("active");
	} else {
		// иначе показываем заголовок предыдущего уровня
		menuTitle.textContent = subMenuStack[subMenuStack.length - 1].title;
	}
}

function resetSubMenus() {
	subMenuStack.forEach(({ element }) => element.classList.remove("active"));
	subMenuStack = [];
	menuTitle.textContent = "";
	menuHead.classList.remove("active");
}

window.onresize = function () {
	if (this.innerWidth > 991 && menu.classList.contains("active")) {
		toggleMenu();
	}
};

// Поиск ====================================
const searchForm = document.querySelector(".header__search .b-search");
const searchBtn = searchForm.querySelector(".btn-search");
const searchInput = searchForm.querySelector(".input__field");

// открыть поиск
function openSearch() {
	searchForm.classList.add("is-open");
	searchBtn.classList.add("is-open");
	searchBtn.type = "submit";

	// небольшой таймаут помогает, если форма анимируется
	setTimeout(() => searchInput.focus(), 100);
}

// закрыть поиск
function closeSearch() {
	searchForm.classList.remove("is-open");
	searchBtn.classList.remove("is-open");
	searchBtn.type = "button";
	searchInput.blur();
}

// клик по кнопке
searchBtn.addEventListener("click", (e) => {
	if (!searchForm.classList.contains("is-open")) {
		e.preventDefault();
		openSearch();
	}
});

// клик вне формы
document.addEventListener("click", (e) => {
	if (!searchForm.contains(e.target)) {
		closeSearch();
	}
});

// закрытие по Esc
document.addEventListener("keydown", (e) => {
	if (e.key === "Escape") {
		closeSearch();
	}
});
