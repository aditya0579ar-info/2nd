// Application Data
const appData = {
  "categories": [
    {
      "id": 1,
      "name": "Electronics",
      "image": "/api/placeholder/300/200",
      "productCount": 45
    },
    {
      "id": 2,
      "name": "Fashion",
      "image": "/api/placeholder/300/200",
      "productCount": 78
    },
    {
      "id": 3,
      "name": "Home & Kitchen",
      "image": "/api/placeholder/300/200",
      "productCount": 62
    },
    {
      "id": 4,
      "name": "Health & Fitness",
      "image": "/api/placeholder/300/200",
      "productCount": 34
    },
    {
      "id": 5,
      "name": "Beauty",
      "image": "/api/placeholder/300/200",
      "productCount": 41
    }
  ],
  "products": [
    {
      "id": 1,
      "name": "Apple AirPods Pro (2nd Generation)",
      "price": 249.99,
      "originalPrice": 299.99,
      "rating": 4.8,
      "reviews": 12847,
      "image": "/api/placeholder/400/400",
      "category": "Electronics",
      "brand": "Apple",
      "inStock": true,
      "features": ["Active Noise Cancellation", "Spatial Audio", "6 Hours Battery", "MagSafe Charging"],
      "description": "Experience next-level sound with Apple AirPods Pro featuring active noise cancellation and transparency mode.",
      "amazonLink": "https://amazon.com/dp/B0BDHWDR12?tag=youraffiliatelink",
      "badges": ["Editor's Choice", "Best Seller"]
    },
    {
      "id": 2,
      "name": "Samsung Galaxy Watch 6",
      "price": 299.99,
      "originalPrice": 399.99,
      "rating": 4.6,
      "reviews": 8934,
      "image": "/api/placeholder/400/400",
      "category": "Electronics",
      "brand": "Samsung",
      "inStock": true,
      "features": ["Health Monitoring", "GPS", "5ATM Water Resistant", "40mm Display"],
      "description": "Advanced smartwatch with comprehensive health tracking and sleek design.",
      "amazonLink": "https://amazon.com/dp/B0C2JGHQTG?tag=youraffiliatelink",
      "badges": ["Popular"]
    },
    {
      "id": 3,
      "name": "Instant Pot Duo 7-in-1 Electric Pressure Cooker",
      "price": 89.99,
      "originalPrice": 119.99,
      "rating": 4.7,
      "reviews": 15632,
      "image": "/api/placeholder/400/400",
      "category": "Home & Kitchen",
      "brand": "Instant Pot",
      "inStock": true,
      "features": ["7-in-1 Functionality", "6 Quart Capacity", "Stainless Steel", "Easy Clean"],
      "description": "Multi-functional electric pressure cooker that replaces 7 kitchen appliances.",
      "amazonLink": "https://amazon.com/dp/B00FLYWNYQ?tag=youraffiliatelink",
      "badges": ["Best Value"]
    },
    {
      "id": 4,
      "name": "Levi's 501 Original Fit Jeans",
      "price": 59.99,
      "originalPrice": 79.99,
      "rating": 4.4,
      "reviews": 9876,
      "image": "/api/placeholder/400/400",
      "category": "Fashion",
      "brand": "Levi's",
      "inStock": true,
      "features": ["Classic Fit", "100% Cotton", "Button Fly", "Multiple Sizes"],
      "description": "The original blue jean since 1873. Iconic straight fit with authentic details.",
      "amazonLink": "https://amazon.com/dp/B0000DI0T1?tag=youraffiliatelink",
      "badges": ["Classic"]
    },
    {
      "id": 5,
      "name": "Ninja Foodi Personal Blender",
      "price": 79.99,
      "originalPrice": 99.99,
      "rating": 4.5,
      "reviews": 6543,
      "image": "/api/placeholder/400/400",
      "category": "Home & Kitchen",
      "brand": "Ninja",
      "inStock": true,
      "features": ["20oz Cups", "BPA Free", "Easy Cleaning", "Powerful Motor"],
      "description": "Personal blender perfect for smoothies, protein shakes, and frozen drinks.",
      "amazonLink": "https://amazon.com/dp/B07GSDZ6JL?tag=youraffiliatelink",
      "badges": ["Trending"]
    },
    {
      "id": 6,
      "name": "CeraVe Daily Moisturizing Lotion",
      "price": 12.99,
      "originalPrice": 16.99,
      "rating": 4.6,
      "reviews": 23451,
      "image": "/api/placeholder/400/400",
      "category": "Beauty",
      "brand": "CeraVe",
      "inStock": true,
      "features": ["Hyaluronic Acid", "Ceramides", "Non-comedogenic", "24hr Hydration"],
      "description": "Daily moisturizing lotion for normal to dry skin with essential ceramides.",
      "amazonLink": "https://amazon.com/dp/B000Q2VC7M?tag=youraffiliatelink",
      "badges": ["Dermatologist Recommended"]
    },
    {
      "id": 7,
      "name": "Adidas Ultraboost 22 Running Shoes",
      "price": 129.99,
      "originalPrice": 180.00,
      "rating": 4.7,
      "reviews": 7891,
      "image": "/api/placeholder/400/400",
      "category": "Health & Fitness",
      "brand": "Adidas",
      "inStock": true,
      "features": ["Boost Midsole", "Primeknit Upper", "Continental Rubber", "Energy Return"],
      "description": "Premium running shoes with responsive cushioning and energy return.",
      "amazonLink": "https://amazon.com/dp/B09JF8GX2M?tag=youraffiliatelink",
      "badges": ["Athlete's Choice"]
    },
    {
      "id": 8,
      "name": "Sony WH-1000XM5 Noise Canceling Headphones",
      "price": 349.99,
      "originalPrice": 399.99,
      "rating": 4.8,
      "reviews": 11234,
      "image": "/api/placeholder/400/400",
      "category": "Electronics",
      "brand": "Sony",
      "inStock": true,
      "features": ["Industry Leading Noise Canceling", "30 Hour Battery", "Quick Charge", "Premium Comfort"],
      "description": "Industry-leading noise canceling headphones with exceptional sound quality.",
      "amazonLink": "https://amazon.com/dp/B09XS7JWHH?tag=youraffiliatelink",
      "badges": ["Premium Choice"]
    },
    {
      "id": 9,
      "name": "Nike Air Force 1 '07 Sneakers",
      "price": 89.99,
      "originalPrice": 110.00,
      "rating": 4.5,
      "reviews": 18765,
      "image": "/api/placeholder/400/400",
      "category": "Fashion",
      "brand": "Nike",
      "inStock": true,
      "features": ["Leather Upper", "Air-Sole Unit", "Rubber Outsole", "Classic Style"],
      "description": "Timeless sneaker with classic basketball style and modern comfort.",
      "amazonLink": "https://amazon.com/dp/B0000VMYEU?tag=youraffiliatelink",
      "badges": ["Iconic"]
    },
    {
      "id": 10,
      "name": "Protein Powder - Whey Isolate",
      "price": 39.99,
      "originalPrice": 49.99,
      "rating": 4.4,
      "reviews": 13567,
      "image": "/api/placeholder/400/400",
      "category": "Health & Fitness",
      "brand": "Optimum Nutrition",
      "inStock": true,
      "features": ["25g Protein", "Low Carbs", "Fast Absorption", "Multiple Flavors"],
      "description": "High-quality whey protein isolate for muscle building and recovery.",
      "amazonLink": "https://amazon.com/dp/B000QSNYGI?tag=youraffiliatelink",
      "badges": ["Fitness Favorite"]
    }
  ]
};

// Application State
let appState = {
  currentPage: 'home',
  cart: [],
  user: null,
  searchTerm: '',
  selectedCategory: '',
  sortBy: 'name',
  currentProduct: null
};

// Utility Functions
function showToast(message, type = 'success') {
  const toastContainer = document.getElementById('toastContainer');
  const toast = document.createElement('div');
  toast.className = `toast toast--${type}`;
  toast.innerHTML = `
    <div class="toast-content">
      <span>${message}</span>
    </div>
  `;
  
  toastContainer.appendChild(toast);
  
  setTimeout(() => {
    if (toast.parentNode) {
      toast.remove();
    }
  }, 3000);
}

function formatPrice(price) {
  return `$${price.toFixed(2)}`;
}

function generateStars(rating) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  let stars = '';
  
  for (let i = 0; i < fullStars; i++) {
    stars += '<i class="fas fa-star star"></i>';
  }
  
  if (hasHalfStar) {
    stars += '<i class="fas fa-star-half-alt star"></i>';
  }
  
  const emptyStars = 5 - Math.ceil(rating);
  for (let i = 0; i < emptyStars; i++) {
    stars += '<i class="far fa-star star"></i>';
  }
  
  return stars;
}

function getBadgeClass(badge) {
  const badgeMap = {
    "Editor's Choice": 'product-badge--editor',
    "Best Seller": 'product-badge--bestseller',
    "Best Value": 'product-badge--value',
    "Popular": 'product-badge--bestseller',
    "Trending": 'product-badge--editor'
  };
  return badgeMap[badge] || 'product-badge--editor';
}

// Navigation System
function showPage(pageId) {
  console.log(`Navigating to: ${pageId}`);
  
  // Hide all pages
  const allPages = document.querySelectorAll('.page');
  allPages.forEach(page => page.classList.remove('active'));
  
  // Show target page
  const targetPage = document.getElementById(`page-${pageId}`);
  if (targetPage) {
    targetPage.classList.add('active');
  }
  
  // Update navigation state
  const allNavLinks = document.querySelectorAll('.nav-link');
  allNavLinks.forEach(link => link.classList.remove('active'));
  
  const activeNavLink = document.querySelector(`[data-page="${pageId}"]`);
  if (activeNavLink) {
    activeNavLink.classList.add('active');
  }
  
  // Update app state
  appState.currentPage = pageId;
  
  // Load page-specific content
  switch(pageId) {
    case 'products':
      displayAllProducts();
      break;
    case 'cart':
      displayCart();
      break;
    case 'checkout':
      displayCheckoutSummary();
      break;
    case 'account':
      showLogin();
      break;
  }
}

// Product Display Functions
function createProductCard(product) {
  const badges = product.badges ? product.badges.map(badge => 
    `<span class="product-badge ${getBadgeClass(badge)}">${badge}</span>`
  ).join('') : '';

  return `
    <div class="product-card" data-product-id="${product.id}">
      <div class="product-image">
        <div class="product-badges">
          ${badges}
        </div>
        <i class="fas fa-image"></i>
        <div style="text-align: center; margin-top: 8px; font-size: 12px;">${product.name}</div>
      </div>
      <div class="product-info">
        <h3 class="product-title">${product.name}</h3>
        <div class="product-rating">
          <div class="stars">
            ${generateStars(product.rating)}
          </div>
          <span class="rating-text">(${product.reviews.toLocaleString()})</span>
        </div>
        <div class="product-price">
          <span class="price-current">${formatPrice(product.price)}</span>
          ${product.originalPrice ? `<span class="price-original">${formatPrice(product.originalPrice)}</span>` : ''}
        </div>
        <div class="product-actions">
          <button class="btn btn--secondary btn--product" onclick="addToCart(${product.id})">
            <i class="fas fa-cart-plus"></i>
            Add to Cart
          </button>
          <button class="btn btn--primary btn--product" onclick="buyNow(${product.id})">
            <i class="fas fa-shopping-bag"></i>
            Buy Now
          </button>
        </div>
      </div>
    </div>
  `;
}

function createCategoryCard(category) {
  return `
    <div class="category-card" onclick="filterByCategory('${category.name}')">
      <div class="category-icon">
        <i class="fas fa-tag"></i>
      </div>
      <h3 class="category-name">${category.name}</h3>
      <p class="category-count">${category.productCount} products</p>
    </div>
  `;
}

function displayFeaturedProducts() {
  const container = document.getElementById('featuredProducts');
  if (!container) return;
  
  const featuredProducts = appData.products.slice(0, 6);
  container.innerHTML = featuredProducts.map(product => createProductCard(product)).join('');
}

function displayCategories() {
  const container = document.getElementById('categoriesGrid');
  if (!container) return;
  
  container.innerHTML = appData.categories.map(category => createCategoryCard(category)).join('');
}

function displayAllProducts() {
  const container = document.getElementById('allProducts');
  if (!container) return;
  
  let products = [...appData.products];
  
  // Apply filters
  if (appState.selectedCategory) {
    products = products.filter(p => p.category === appState.selectedCategory);
  }
  
  if (appState.searchTerm) {
    const searchLower = appState.searchTerm.toLowerCase();
    products = products.filter(p => 
      p.name.toLowerCase().includes(searchLower) ||
      p.category.toLowerCase().includes(searchLower) ||
      p.brand.toLowerCase().includes(searchLower)
    );
  }
  
  // Apply sorting
  switch (appState.sortBy) {
    case 'price-low':
      products.sort((a, b) => a.price - b.price);
      break;
    case 'price-high':
      products.sort((a, b) => b.price - a.price);
      break;
    case 'rating':
      products.sort((a, b) => b.rating - a.rating);
      break;
    default:
      products.sort((a, b) => a.name.localeCompare(b.name));
  }
  
  if (products.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <i class="fas fa-search"></i>
        <h3>No products found</h3>
        <p>Try adjusting your search or filter criteria</p>
      </div>
    `;
  } else {
    container.innerHTML = products.map(product => createProductCard(product)).join('');
  }
}

function displayProductDetail(productId) {
  const product = appData.products.find(p => p.id === productId);
  if (!product) return;
  
  appState.currentProduct = product;
  
  const container = document.getElementById('productDetailContent');
  if (!container) return;
  
  const features = product.features.map(feature => `<li>${feature}</li>`).join('');
  
  container.innerHTML = `
    <div class="product-detail-image">
      <i class="fas fa-image"></i>
      <div style="margin-top: 16px; text-align: center; font-size: 14px;">${product.name}</div>
    </div>
    <div class="product-detail-info">
      <h1>${product.name}</h1>
      <div class="product-rating">
        <div class="stars">
          ${generateStars(product.rating)}
        </div>
        <span class="rating-text">${product.rating} out of 5 (${product.reviews.toLocaleString()} reviews)</span>
      </div>
      <div class="product-detail-price">
        <span class="price-current">${formatPrice(product.price)}</span>
        ${product.originalPrice ? `<span class="price-original">${formatPrice(product.originalPrice)}</span>` : ''}
      </div>
      <div class="product-description">
        <p>${product.description}</p>
      </div>
      <div class="product-features">
        <h3>Key Features:</h3>
        <ul class="features-list">
          ${features}
        </ul>
      </div>
      <div class="product-detail-actions">
        <button class="btn btn--secondary btn--lg" onclick="addToCart(${product.id})">
          <i class="fas fa-cart-plus"></i>
          Add to Cart
        </button>
        <button class="btn btn--primary btn--lg" onclick="buyNow(${product.id})">
          <i class="fas fa-external-link-alt"></i>
          Buy Now on Amazon
        </button>
      </div>
    </div>
  `;
}

// Shopping Cart Functions
function addToCart(productId) {
  const product = appData.products.find(p => p.id === productId);
  if (!product) return;
  
  const existingItem = appState.cart.find(item => item.id === productId);
  
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    appState.cart.push({
      ...product,
      quantity: 1
    });
  }
  
  updateCartCount();
  showToast(`${product.name} added to cart!`);
}

function removeFromCart(productId) {
  appState.cart = appState.cart.filter(item => item.id !== productId);
  updateCartCount();
  displayCart();
  showToast('Item removed from cart');
}

function updateQuantity(productId, newQuantity) {
  const item = appState.cart.find(item => item.id === productId);
  if (item) {
    if (newQuantity <= 0) {
      removeFromCart(productId);
    } else {
      item.quantity = newQuantity;
      updateCartCount();
      displayCart();
    }
  }
}

function updateCartCount() {
  const count = appState.cart.reduce((total, item) => total + item.quantity, 0);
  const cartCountElement = document.getElementById('cartCount');
  if (cartCountElement) {
    cartCountElement.textContent = count;
  }
}

function displayCart() {
  const container = document.getElementById('cartContent');
  if (!container) return;
  
  if (appState.cart.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <i class="fas fa-shopping-cart"></i>
        <h3>Your cart is empty</h3>
        <p>Add some products to get started!</p>
        <button class="btn btn--primary" onclick="showPage('home')">Continue Shopping</button>
      </div>
    `;
    return;
  }
  
  const cartItems = appState.cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-image">
        <i class="fas fa-image"></i>
      </div>
      <div class="cart-item-info">
        <h4 class="cart-item-title">${item.name}</h4>
        <div class="cart-item-price">${formatPrice(item.price)}</div>
      </div>
      <div class="cart-item-actions">
        <div class="quantity-control">
          <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity - 1})">
            <i class="fas fa-minus"></i>
          </button>
          <span>${item.quantity}</span>
          <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity + 1})">
            <i class="fas fa-plus"></i>
          </button>
        </div>
        <button class="btn btn--outline btn--sm" onclick="removeFromCart(${item.id})">
          <i class="fas fa-trash"></i>
        </button>
      </div>
    </div>
  `).join('');
  
  const subtotal = appState.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  const tax = subtotal * 0.08;
  const total = subtotal + tax;
  
  container.innerHTML = `
    <div class="cart-items">
      ${cartItems}
    </div>
    <div class="cart-summary">
      <div class="summary-row">
        <span>Subtotal:</span>
        <span>${formatPrice(subtotal)}</span>
      </div>
      <div class="summary-row">
        <span>Tax:</span>
        <span>${formatPrice(tax)}</span>
      </div>
      <div class="summary-row summary-total">
        <span>Total:</span>
        <span>${formatPrice(total)}</span>
      </div>
      <button class="btn btn--primary btn--full-width btn--lg" onclick="showPage('checkout')">
        Proceed to Checkout
      </button>
    </div>
  `;
}

function buyNow(productId) {
  const product = appData.products.find(p => p.id === productId);
  if (!product) return;
  
  showToast(`Redirecting to Amazon for ${product.name}...`);
  
  setTimeout(() => {
    window.open(product.amazonLink, '_blank');
  }, 1000);
}

// Search and Filter Functions
function filterByCategory(categoryName) {
  appState.selectedCategory = categoryName;
  const categoryFilter = document.getElementById('categoryFilter');
  if (categoryFilter) {
    categoryFilter.value = categoryName;
  }
  showPage('products');
}

function handleSearch() {
  const searchInput = document.getElementById('searchInput');
  if (searchInput && searchInput.value.trim()) {
    appState.searchTerm = searchInput.value.trim();
    showPage('products');
    showToast(`Searching for: ${appState.searchTerm}`);
  }
}

// Checkout Functions
function displayCheckoutSummary() {
  const container = document.getElementById('checkoutSummary');
  if (!container) return;
  
  if (appState.cart.length === 0) {
    container.innerHTML = '<p>Your cart is empty</p>';
    return;
  }
  
  const cartItems = appState.cart.map(item => `
    <div class="summary-row">
      <span>${item.name} × ${item.quantity}</span>
      <span>${formatPrice(item.price * item.quantity)}</span>
    </div>
  `).join('');
  
  const subtotal = appState.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  const tax = subtotal * 0.08;
  const total = subtotal + tax;
  
  container.innerHTML = `
    ${cartItems}
    <div class="summary-row">
      <span>Subtotal:</span>
      <span>${formatPrice(subtotal)}</span>
    </div>
    <div class="summary-row">
      <span>Tax:</span>
      <span>${formatPrice(tax)}</span>
    </div>
    <div class="summary-row summary-total">
      <span>Total:</span>
      <span>${formatPrice(total)}</span>
    </div>
  `;
}

function processCheckout(event) {
  event.preventDefault();
  
  if (appState.cart.length === 0) {
    showToast('Your cart is empty!', 'error');
    return;
  }
  
  showToast('Redirecting to Amazon to complete your purchase...', 'success');
  
  setTimeout(() => {
    if (appState.cart.length > 0) {
      window.open(appState.cart[0].amazonLink, '_blank');
    }
  }, 2000);
  
  setTimeout(() => {
    appState.cart = [];
    updateCartCount();
    showPage('home');
    showToast('Thank you for shopping with us!');
  }, 3000);
}

// User Authentication (Mock)
function showLogin() {
  const loginForm = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm');
  const userDashboard = document.getElementById('userDashboard');
  
  if (loginForm) loginForm.classList.remove('hidden');
  if (registerForm) registerForm.classList.add('hidden');
  if (userDashboard) userDashboard.classList.add('hidden');
}

function showRegister() {
  const loginForm = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm');
  const userDashboard = document.getElementById('userDashboard');
  
  if (loginForm) loginForm.classList.add('hidden');
  if (registerForm) registerForm.classList.remove('hidden');
  if (userDashboard) userDashboard.classList.add('hidden');
}

// Event Handlers - Centralized navigation handling
function setupNavigation() {
  // Main navigation handler
  document.addEventListener('click', function(e) {
    // Prevent default for navigation links
    if (e.target.matches('.nav-link') || e.target.closest('.nav-link')) {
      e.preventDefault();
      e.stopPropagation();
      
      const link = e.target.matches('.nav-link') ? e.target : e.target.closest('.nav-link');
      const page = link.getAttribute('data-page');
      
      if (page) {
        showPage(page);
      }
      return;
    }
    
    // Logo click - return to home
    if (e.target.closest('.logo')) {
      e.preventDefault();
      e.stopPropagation();
      showPage('home');
      return;
    }
    
    // Footer navigation links
    if (e.target.hasAttribute('data-page')) {
      e.preventDefault();
      e.stopPropagation();
      const page = e.target.getAttribute('data-page');
      showPage(page);
      return;
    }
    
    // Product card clicks
    const productCard = e.target.closest('.product-card');
    if (productCard && !e.target.closest('button')) {
      const productId = parseInt(productCard.getAttribute('data-product-id'));
      displayProductDetail(productId);
      showPage('product-detail');
      return;
    }
  });
  
  // Account button
  const accountBtn = document.getElementById('accountBtn');
  if (accountBtn) {
    accountBtn.onclick = function(e) {
      e.preventDefault();
      showPage('account');
    };
  }
  
  // Cart button - Fixed to go to cart page
  const cartBtn = document.getElementById('cartBtn');
  if (cartBtn) {
    cartBtn.onclick = function(e) {
      e.preventDefault();
      showPage('cart');
    };
  }
  
  // Shop now button
  const shopNowBtn = document.getElementById('shopNowBtn');
  if (shopNowBtn) {
    shopNowBtn.onclick = function(e) {
      e.preventDefault();
      showPage('products');
    };
  }
  
  // Search button - Fixed to perform search
  const searchBtn = document.getElementById('searchBtn');
  if (searchBtn) {
    searchBtn.onclick = function(e) {
      e.preventDefault();
      handleSearch();
    };
  }
  
  // Search input enter key
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.onkeypress = function(e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        handleSearch();
      }
    };
  }
  
  // Filter handlers
  const categoryFilter = document.getElementById('categoryFilter');
  if (categoryFilter) {
    categoryFilter.onchange = function(e) {
      appState.selectedCategory = e.target.value;
      displayAllProducts();
    };
  }
  
  const sortFilter = document.getElementById('sortFilter');
  if (sortFilter) {
    sortFilter.onchange = function(e) {
      appState.sortBy = e.target.value;
      displayAllProducts();
    };
  }
  
  // Auth forms
  const showRegisterLink = document.getElementById('showRegister');
  if (showRegisterLink) {
    showRegisterLink.onclick = function(e) {
      e.preventDefault();
      showRegister();
    };
  }
  
  const showLoginLink = document.getElementById('showLogin');
  if (showLoginLink) {
    showLoginLink.onclick = function(e) {
      e.preventDefault();
      showLogin();
    };
  }
  
  // Form submissions
  const loginForm = document.querySelector('#loginForm form');
  if (loginForm) {
    loginForm.onsubmit = function(e) {
      e.preventDefault();
      showToast('Successfully logged in!');
    };
  }
  
  const registerForm = document.querySelector('#registerForm form');
  if (registerForm) {
    registerForm.onsubmit = function(e) {
      e.preventDefault();
      showToast('Account created successfully!');
    };
  }
  
  const checkoutForm = document.getElementById('checkoutForm');
  if (checkoutForm) {
    checkoutForm.onsubmit = processCheckout;
  }
  
  // Newsletter forms
  document.querySelectorAll('.newsletter-form').forEach(form => {
    form.onsubmit = function(e) {
      e.preventDefault();
      showToast('Thank you for subscribing!');
      form.reset();
    };
  });
  
  // Contact form
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.onsubmit = function(e) {
      e.preventDefault();
      showToast('Message sent successfully! We\'ll get back to you soon.');
      contactForm.reset();
    };
  }
}

// Initialize Application
function initializeApp() {
  console.log('Initializing ShopSmart application...');
  
  // Populate category filter
  const categoryFilter = document.getElementById('categoryFilter');
  if (categoryFilter) {
    appData.categories.forEach(category => {
      const option = document.createElement('option');
      option.value = category.name;
      option.textContent = category.name;
      categoryFilter.appendChild(option);
    });
  }
  
  // Display initial content
  displayFeaturedProducts();
  displayCategories();
  updateCartCount();
  
  // Setup navigation and event handlers
  setupNavigation();
  
  // Show home page
  showPage('home');
  
  console.log('Application initialized successfully');
}

// Global function exports for onclick handlers
window.addToCart = addToCart;
window.buyNow = buyNow;
window.removeFromCart = removeFromCart;
window.updateQuantity = updateQuantity;
window.filterByCategory = filterByCategory;
window.showPage = showPage;

// Start the application
document.addEventListener('DOMContentLoaded', initializeApp);