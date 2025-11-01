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

	// --- Week 2: Product Search, Filters, and Cart Counter ---
	const searchInput = document.getElementById('search-input');
	const categoryFilter = document.getElementById('category-filter');
	const priceFilter = document.getElementById('price-filter');
	const productsGrid = document.querySelectorAll('.product-card');
	const cartCountEl = document.getElementById('cart-count');

	let cartCount = 0;

	function updateCartCount() {
		if (cartCountEl) cartCountEl.textContent = String(cartCount);
	}

	function matchesFilters(card) {
		const q = (searchInput && searchInput.value || '').trim().toLowerCase();
		const cat = (categoryFilter && categoryFilter.value) || 'all';
		const priceLimit = (priceFilter && priceFilter.value) || 'all';

		const name = (card.dataset.name || '').toLowerCase();
		const category = (card.dataset.category || 'all');
		const price = parseFloat(card.dataset.price || '0');

		// name match
		if (q && !name.includes(q)) return false;

		// category
		if (cat !== 'all' && category !== cat) return false;

		// price
		if (priceLimit !== 'all') {
			const lim = parseFloat(priceLimit);
			if (Number.isFinite(lim) && !(price <= lim)) return false;
		}

		return true;
	}

	function filterProducts() {
		productsGrid.forEach(card => {
			const ok = matchesFilters(card);
			card.style.display = ok ? '' : 'none';
		});
	}

	// wire up controls
	if (searchInput) searchInput.addEventListener('input', filterProducts);
	if (categoryFilter) categoryFilter.addEventListener('change', filterProducts);
	if (priceFilter) priceFilter.addEventListener('change', filterProducts);

	// Add to cart buttons
	const addButtons = document.querySelectorAll('.add-to-cart');
	addButtons.forEach(btnAdd => {
		btnAdd.addEventListener('click', function (e) {
			e.preventDefault();
			cartCount += 1;
			updateCartCount();

			// brief visual feedback
			btnAdd.textContent = 'Added';
			setTimeout(() => { btnAdd.textContent = 'Add to Cart'; }, 900);
		});
	});

	// initial state
	updateCartCount();
	filterProducts();
});
