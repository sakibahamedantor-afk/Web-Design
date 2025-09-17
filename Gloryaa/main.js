// Product Data Example
const womensFashion = [
  {
    id: 1,
    title: 'Cherry Red YSL Heels',
    img: 'img/product1.jpg',
    price: 1900,
    oldPrice: 2200,
    badge: '14% New'
  },
  {
    id: 2,
    title: 'Minimal Golden Anklet',
    img: 'img/product2.jpg',
    price: 100,
    oldPrice: 120,
    badge: '17% in-stock'
  }
];
const electronicsGadgets = [
  {
    id: 1,
    title: 'Panda Speaker',
    img: 'img/product3.jpg',
    price: 100,
    oldPrice: 120,
    badge: '% New'
  }
];

// Render Women's Fashion Products
function renderProductGrid(products, gridId) {
  const grid = document.getElementById(gridId);
  if (!grid) return;
  grid.innerHTML = '';
  products.forEach(prod => {
    grid.innerHTML += `
      <div class="product-card">
        <img src="${prod.img}" alt="${prod.title}">
        <div class="product-title">${prod.title}</div>
        <div>
          <span class="product-price">${prod.price} TK</span>
          <span class="product-old-price">${prod.oldPrice ? prod.oldPrice + ' TK' : ''}</span>
        </div>
        <button>Order Now</button>
      </div>
    `;
  });
}
renderProductGrid(womensFashion, "womensFashionGrid");
renderProductGrid(electronicsGadgets, "electronicsGrid");

// Category carousel scroll (basic)
function scrollCategories(dir) {
  const track = document.getElementById('carouselTrack');
  track.scrollBy({ left: dir * 120, behavior: 'smooth' });
}

// Tabs functionality (product page)
function showTab(tab) {
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(tc => tc.style.display = 'none');
  document.querySelector(`.tab-btn[onclick="showTab('${tab}')"]`).classList.add('active');
  document.getElementById(tab).style.display = 'block';
}

// Gallery thumbnail functionality (product page)
document.querySelectorAll('.product-thumb').forEach((thumb, i) => {
  thumb.addEventListener('click', function() {
    document.querySelectorAll('.product-thumb').forEach(t => t.classList.remove('active'));
    thumb.classList.add('active');
    document.querySelector('.product-big-img').src = thumb.src;
  });
});

// Quantity change (product page)
function changeQty(delta) {
  let qtyElem = document.getElementById('qty');
  let qty = parseInt(qtyElem.innerText);
  qty = Math.max(1, qty + delta);
  qtyElem.innerText = qty;
}

// Search functionality (demo)
function searchProducts() {
  alert('Search feature coming soon!');
}