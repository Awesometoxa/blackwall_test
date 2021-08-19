document.addEventListener("DOMContentLoaded", () => {
	const hamburger = document.querySelector(".header__hamburger");
	const menu = document.querySelector(".header__menu");
	const menuItems = document.querySelectorAll(".header__menu-item");
	const featuresSubtitle = document.querySelector(".features__subtitle");

	if (document.documentElement.clientWidth < 991) {
		hamburger.addEventListener("click", () => {
			hamburger.classList.toggle("header__hamburger_active");
			menu.classList.toggle("header__menu_active");
		});

		menuItems.forEach((item) => {
			item.addEventListener("click", () => {
				hamburger.classList.remove("header__hamburger_active");
				menu.classList.remove("header__menu_active");
			});
		});

		featuresSubtitle.textContent =
			"We are familiar with offline speed dating flow so we designed out online platform.";
	}
});
