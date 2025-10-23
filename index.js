document.addEventListener('DOMContentLoaded', function () {
	const btn = document.querySelector('.nav-toggle');
	const menu = document.getElementById('nav-menu');

	if (!btn || !menu) return;

	function closeMenu() {
		menu.classList.remove('open');
		btn.setAttribute('aria-expanded', 'false');
	}

	function openMenu() {
		menu.classList.add('open');
		btn.setAttribute('aria-expanded', 'true');
		const first = menu.querySelector('a');
		if (first) first.focus();
	}

	btn.addEventListener('click', function () {
		const isOpen = menu.classList.toggle('open');
		btn.setAttribute('aria-expanded', String(isOpen));
		if (isOpen) {
			const first = menu.querySelector('a'); if (first) first.focus();
		}
	});

	// close on outside click
	document.addEventListener('click', function (e) {
		if (!menu.contains(e.target) && !btn.contains(e.target)) closeMenu();
	});

	// close on escape
	document.addEventListener('keydown', function (e) {
		if (e.key === 'Escape') closeMenu();
	});
});
