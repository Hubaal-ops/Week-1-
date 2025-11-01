# First-Week — Hami Mini-Market

Week 2: Product Catalog with Search & Filter

Features implemented
- Responsive product catalog (8 products) using CSS Grid
- Real-time search by product name
- Category filter (All, Fruits, Vegetables, Bakery, Dairy)
- Price filter (show products under a selected price)
- Add to Cart buttons with a simple cart counter in the navbar (no backend)

Technologies used
- HTML, CSS, and vanilla JavaScript

How to run
1. Open `index.html` in your browser (double-click or use a simple static server).

Optional (serve with a simple local server):
PowerShell:
```
# from the project folder
python -m http.server 8000
# then open http://localhost:8000/ in your browser
```

Notes on design & tone
- The added UI follows the existing brand (green palette, friendly concise copy).
- Accessibility: controls have aria-labels and keyboard-friendly elements.

Next steps (optional)
- Persist cart contents in localStorage so the counter survives reloads.
- Add quantity controls and a cart drawer or page.
- Deploy the site to GitHub Pages or Netlify and add the live link to the Hamiskills submission.