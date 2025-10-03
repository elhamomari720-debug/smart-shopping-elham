// Product data with like counts
let products = [
  { id: 1, name: "Barcelona jersey & bottom", price: 44.99, image: "download (8).jpg", category: "clothing", likes: 42 },
  { id: 2, name: "Nike Air zoom Football Boots", price:208.99, image: "download (20).jpg", category: "footwear", likes: 38 },
  { id: 3, name: "Labubu dressed toy", price: 75.99, image: "shopping (5).webp", category: "toys", likes: 56 },
  { id: 4, name: "Real Madrid Jersey", price: 99.99, image: "cr7.jpg", category: "clothing", likes: 67 },
  { id: 5, name: "WC 22 Football", price: 79.99, image: "images (1).jpg", category: "accessories", likes: 23 },
  { id: 6, name: "AC Milan Jersey", price: 39.99, image: "ac-milan.webp", category: "clothing", likes: 31 },
  { id: 7, name: "Nike Football Boots", price: 89.99, image: "download4.jpg", category: "footwear", likes: 45 },
  { id: 8, name: "Adidas Socks", price: 9.99, image: "images (2).jpg", category: "accessories", likes: 12 },
  { id: 9, name: "Men's Black Jeans", price: 21.99, image: "download (2).jpg", category: "clothing", likes: 28 },
  { id: 10, name: "John Cena Cap", price: 7.99, image: "images (3).jpg", category: "accessories", likes: 19 },
  { id: 11, name: "Adidas Yeezy Foam Runner", price: 299.99, image: "shopping (1).webp", category: "footwear", likes: 89 },
  { id: 12, name: "Arabic Designed Watch", price: 109.99, image: "shopping (2).webp", category: "accessories", likes: 34 },
  { id: 13, name: "Cristiano Man-utd Toy", price: 19.99, image: "shopping (3).webp", category: "toys", likes: 41 },
  { id: 14, name: "Nerf Gun - SNIPER", price: 29.99, image: "shopping (4).webp", category: "toys", likes: 63 },
  { id: 15, name: "Nike blackNwhite sneakers", price: 77.99, image: "shopping (11).webp", category: "footwear", likes: 37 },
  { id: 16, name: "Cartoon design phone cover", price: 15.99, image: "download (3).jpg", category: "accessories", likes: 22 },
  { id: 17, name: "Spiderman hoodie", price: 45.99, image: "download (4).jpg", category: "clothing", likes: 51 },
  { id: 18, name: "Stylish glasses", price: 55.99, image: "download (5).jpg", category: "accessories", likes: 29 },
  { id: 19, name: "Red Half sleeve T Shirt", price: 35.99, image: "download (6).jpg", category: "clothing", likes: 33 },
  { id: 20, name: "Nike Backpack", price: 35.99, image: "images.jpg", category: "accessories", likes: 47 },
  { id: 21, name: "Stretchy monkey toy", price: 30.99, image: "monkey.jpg", category: "toys", likes: 58 },
  { id: 22, name: "White designed T Shirt", price: 38.99, image: "download (7).jpg", category: "clothing", likes: 26 },
  { id: 23, name: "Nike Lightining Sneakers", price: 109.99, image: "download (9).jpg", category: "footwear", likes: 72 },
  { id: 24, name: "Champions blue cap", price: 29.99, image: "images (5).jpg", category: "accessories", likes: 18 },
  { id: 25, name: "Nerf Gun Fortnite", price: 33.99, image: "download (10).jpg", category: "toys", likes: 49 },
  { id: 26, name: "Black T Shirt", price: 59.99, image: "shopping.webp", category: "clothing", likes: 35 },
  { id: 27, name: "Champions-League Football", price: 73.99, image: "download (11).jpg", category: "accessories", likes: 44 },
  { id: 28, name: "Golden Football Boots", price: 65.99, image: "shopping (7).webp", category: "footwear", likes: 61 },
  { id: 29, name: "Men's Blue Jeans", price:28.99, image: "download (12).jpg", category: "clothing", likes: 39 },
  { id: 30, name: "Anime designed Backpack", price: 25.99, image: "shopping (8).webp", category: "accessories", likes: 53 },
  { id: 31, name: "Classic Yellow hoodie", price:18.99, image: "download (13).jpg", category: "clothing", likes: 27 },
  { id: 32, name: "Flamin Hot Socks", price: 14.99, image: "shopping (9).webp", category: "accessories", likes: 15 },
  { id: 33, name: "Gray Adidas Yeezy Foam Runner", price: 299.99, image: "shopping1.webp", category: "footwear", likes: 84 },
  { id: 34, name: "Blue designed Watch", price: 55.99, image: "images (6).jpg", category: "accessories", likes: 32 },
  { id: 35, name: "Stylish phone cover", price:15.99, image: "download (14).jpg", category: "accessories", likes: 21 },
  { id: 36, name: "Blue Fashioned glasses", price:83.99, image: "images (7).jpg", category: "accessories", likes: 30 },
  { id: 37, name: "Grey H&M Men's Jeans", price:83.99, image: "download (15).jpg", category: "clothing", likes: 46 },
  { id: 38, name: "Premiere League Football", price:57.99, image: "download (16).jpg", category: "accessories", likes: 38 },
  { id: 39, name: "Nerf Gun Pistol", price:47.99, image: "download (17).jpg", category: "toys", likes: 55 },
  { id: 40, name: "White Adidas Foam Runner", price:108.99, image: "download (18).jpg", category: "footwear", likes: 79 },
  { id: 41, name: "Nike Women's Backpack", price:56.99, image: "download (19).jpg", category: "accessories", likes: 42 },
  { id: 42, name: "Designed Sneakers", price: 49.99, image: "shopping3.webp", category: "footwear", likes: 48 },
  { id: 43, name: "Nike White Socks", price:22.99, image: "download (22).jpg", category: "accessories", likes: 17 },
  { id: 44, name: "Simple Black hoodie", price:28.99, image: "download (23).jpg", category: "clothing", likes: 34 },
  { id: 45, name: "Tom&Jerry Iphone Phone cover", price:35.99, image: "download (24).jpg", category: "accessories", likes: 59 },
  { id: 46, name: "Silver designed Watch", price:56.99, image: "download (25).jpg", category: "accessories", likes: 36 },
  { id: 47, name: "Batman Cap", price:19.99, image: "images (8).jpg", category: "accessories", likes: 43 },
  { id: 48, name: "Thug life glasses", price:39.99, image: "download.png", category: "accessories", likes: 51 },
];

const clothingIds = [1, 3, 4, 5, 6, 8, 9, 10, 12, 13, 14, 16, 17, 18, 19, 20, 21, 22, 24,
 25, 26 ,27, 29, 30, 31, 32, 34, 35, 36, 37, 38, 39, 41, 43, 44, 45, 46, 47, 48];
const footwearIds = [2, 7, 11, 15, 23, 28, 33, 40, 42];
let cart = [];
let likedProducts = JSON.parse(localStorage.getItem("likedProducts")) || [];
let currentZoomLevel = 1;
let currentProductForModal = null;

// Utility functions
const isLoggedIn = () => localStorage.getItem("isLoggedIn") === "true";

const generateSizeOptions = (product) => {
  if (clothingIds.includes(product.id)) {
    return [
      { value: "Small", price: product.price - 5 },
      { value: "Medium", price: product.price, selected: true },
      { value: "Large", price: product.price + 10 },
      { value: "XL", price: product.price + 15 },
      { value: "XXL", price: product.price + 20 }
    ];
  } else if (footwearIds.includes(product.id)) {
    return [
      { value: "7", price: product.price - 5 },
      { value: "8", price: product.price - 2 },
      { value: "9", price: product.price, selected: true },
      { value: "10", price: product.price + 3 },
      { value: "11", price: product.price + 6 }
    ];
  }
  return [];
};

const createSizeSelectHTML = (product) => {
  const options = generateSizeOptions(product);
  if (options.length === 0) return '';
  
  const selectId = `size-select-${product.id}`;
  let optionsHTML = options.map(opt => 
    `<option value="${opt.value}" data-price="${opt.price.toFixed(2)}" ${opt.selected ? 'selected' : ''}>${opt.value}</option>`
  ).join('');
  
  return `
    <div class="size-container">
      <label for="${selectId}">SELECT SIZE</label>
      <select id="${selectId}" class="size-select" onchange="updatePrice(${product.id})">
        ${optionsHTML}
      </select>
    </div>
  `;
};

const createQuantitySelectHTML = (product) => {
  return `
    <div class="quantity-container">
      <label for="quantity-select-${product.id}">QUANTITY</label>
      <select id="quantity-select-${product.id}" class="quantity-select">
        <option value="1" selected>1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
    </div>
  `;
};

// Animation functions
function animateProducts() {
  const productElements = document.querySelectorAll('.product');
  
  productElements.forEach((product, index) => {
    // Add animation class based on position (alternating left and right)
    const animationClass = index % 2 === 0 ? 'animate-left' : 'animate-right';
    product.classList.add(animationClass);
    
    // Stagger the animation
    product.style.animationDelay = `${index * 0.1}s`;
  });
}

// Like/Unlike functionality with counter
function toggleLike(productId) {
  if (!isLoggedIn()) {
    alert("Please log in to like products.");
    return;
  }
  
  const product = products.find(p => p.id === productId);
  const index = likedProducts.indexOf(productId);
  const likeBtn = document.querySelector(`.like-btn[data-product-id="${productId}"]`);
  const likeCount = document.querySelector(`.like-count[data-product-id="${productId}"]`);
  
  if (index === -1) {
    // Like the product - INCREMENT
    likedProducts.push(productId);
    product.likes += 1;
    likeBtn.classList.add('liked');
    likeBtn.innerHTML = '<i class="fas fa-heart"></i>';
    likeCount.textContent = product.likes;
    showNotification('Product liked! ❤️');
  } else {
    // Unlike the product - DECREMENT
    likedProducts.splice(index, 1);
    product.likes -= 1;
    likeBtn.classList.remove('liked');
    likeBtn.innerHTML = '<i class="far fa-heart"></i>';
    likeCount.textContent = product.likes;
    showNotification('Product unliked! 💔');
  }
  
  // Update localStorage
  localStorage.setItem("likedProducts", JSON.stringify(likedProducts));
  localStorage.setItem("products", JSON.stringify(products));
  
  // Update stats
  updateStats();
  
  // Update modal if open
  updateModalLikes(productId);
}

function isProductLiked(productId) {
  return likedProducts.includes(productId);
}

function updateModalLikes(productId) {
  const product = products.find(p => p.id === productId);
  const modalLikesCount = document.getElementById('modal-likes-count');
  if (modalLikesCount) {
    modalLikesCount.textContent = product.likes;
  }
}

// Stats counter animation
function animateStats() {
  const statNumbers = document.querySelectorAll('.stat-number');
  
  statNumbers.forEach(stat => {
    const target = parseInt(stat.getAttribute('data-count'));
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;
    
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      stat.textContent = Math.floor(current);
    }, 16);
  });
}

function updateStats() {
  const totalLikes = products.reduce((sum, product) => sum + product.likes, 0);
  const likedStat = document.getElementById('total-likes-count');
  likedStat.setAttribute('data-count', totalLikes);
  likedStat.textContent = totalLikes;
}

// Main functions
function displayProducts(productsToShow = products) {
  const productList = document.getElementById('product-list');
  productList.innerHTML = '';

  productsToShow.forEach((product, index) => {
    const sizeOptionsHTML = createSizeSelectHTML(product);
    const quantityOptionsHTML = createQuantitySelectHTML(product);
    const initialPrice = generateSizeOptions(product).find(opt => opt.selected)?.price || product.price;
    const isLiked = isProductLiked(product.id);
    
    const div = document.createElement('div');
    div.className = 'product';
    div.innerHTML = `
      <div class="like-container">
        <button class="like-btn ${isLiked ? 'liked' : ''}" data-product-id="${product.id}" onclick="toggleLike(${product.id})">
          <i class="${isLiked ? 'fas' : 'far'} fa-heart"></i>
        </button>
        <div class="like-count" data-product-id="${product.id}">${product.likes}</div>
      </div>
      <div class="product-image-container" onclick="openQuickView(${product.id})">
        <img src="${product.image}" alt="${product.name}" onclick="event.stopPropagation(); zoomImage('${product.image}')" />
      </div>
      <h3>${product.name}</h3>
      <div class="size-price-container">
        ${sizeOptionsHTML}
        <div class="price-container">
          <span class="price-label">PRICE</span>
          <div class="price-value" id="price-display-${product.id}">$${initialPrice.toFixed(2)}</div>
        </div>
      </div>
      ${quantityOptionsHTML}
      <button onclick="addToCart(${product.id})"><i class="fas fa-cart-plus"></i> Add to Cart</button>
    `;
    productList.appendChild(div);
  });
  
  // Animate products after a short delay
  setTimeout(animateProducts, 100);
  updateCartCount();
}

function sortProducts(sortBy) {
  let sortedProducts = [...products];
  
  switch(sortBy) {
    case 'price-low':
      sortedProducts.sort((a, b) => a.price - b.price);
      break;
    case 'price-high':
      sortedProducts.sort((a, b) => b.price - a.price);
      break;
    case 'name':
      sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case 'name-desc':
      sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
      break;
    case 'popular':
      sortedProducts.sort((a, b) => b.likes - a.likes);
      break;
    default:
      // Default sorting (by ID)
      sortedProducts.sort((a, b) => a.id - b.id);
  }
  
  displayProducts(sortedProducts);
}

function updatePrice(productId) {
  const select = document.getElementById(`size-select-${productId}`);
  if (!select) return;
  
  const selectedOption = select.options[select.selectedIndex];
  const newPrice = selectedOption.getAttribute("data-price");
  document.getElementById(`price-display-${productId}`).innerText = `$${newPrice}`;
}

function addToCart(productId) {
  if (!isLoggedIn()) {
    alert("You must be logged in to add items to cart.");
    window.location.href = "Login.html";
    return;
  }

  const product = products.find(p => p.id === productId);
  const select = document.getElementById(`size-select-${product.id}`);
  const quantitySelect = document.getElementById(`quantity-select-${product.id}`);
  
  let selectedSize = null;
  let selectedPrice = product.price;
  let quantity = 1;

  if (select) {
    const selectedOption = select.options[select.selectedIndex];
    selectedSize = selectedOption.value;
    selectedPrice = parseFloat(selectedOption.getAttribute("data-price"));
  }
  
  if (quantitySelect) {
    quantity = parseInt(quantitySelect.value);
  }

  const existingItemIndex = cart.findIndex(item => 
    item.id === product.id && item.selectedSize === selectedSize
  );

  if (existingItemIndex !== -1) {
    cart[existingItemIndex].quantity += quantity;
    cart[existingItemIndex].totalPrice = cart[existingItemIndex].selectedPrice * cart[existingItemIndex].quantity;
  } else {
    const itemToAdd = { 
      ...product, 
      selectedSize, 
      selectedPrice,
      quantity,
      totalPrice: selectedPrice * quantity
    };
    cart.push(itemToAdd);
  }
  
  localStorage.setItem("cartItems", JSON.stringify(cart));
  updateCartCount();
  
  // Show success notification
  showNotification(`${quantity} ${product.name} (${selectedSize || 'Default'}) added to cart!`);
}

function showNotification(message) {
  // Create notification element
  const notification = document.createElement('div');
  notification.className = 'notification';
  notification.innerHTML = `
    <div class="notification-content">
      <i class="fas fa-check-circle"></i>
      <span>${message}</span>
    </div>
  `;
  
  document.body.appendChild(notification);
  
  // Animate in
  setTimeout(() => {
    notification.style.transform = 'translateX(0)';
  }, 10);
  
  // Animate out and remove
  setTimeout(() => {
    notification.style.transform = 'translateX(150%)';
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 300);
  }, 3000);
}

function updateCartCount() {
  const cartCount = document.getElementById('cart-count');
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  cartCount.textContent = totalItems;
  
  // Show/hide cart count badge
  if (totalItems > 0) {
    cartCount.style.display = 'flex';
  } else {
    cartCount.style.display = 'none';
  }
}

function zoomImage(src) {
  const modal = document.getElementById('zoom-modal');
  const zoomedImg = document.getElementById('zoomed-img');
  zoomedImg.src = src;
  modal.classList.add('show');
  currentZoomLevel = 1;
  zoomedImg.style.transform = 'scale(1)';
}

function closeZoom() {
  document.getElementById('zoom-modal').classList.remove('show');
}

function zoomIn(event) {
  event.stopPropagation();
  if (currentZoomLevel < 2) {
    currentZoomLevel += 0.1;
    document.getElementById('zoomed-img').style.transform = `scale(${currentZoomLevel})`;
  }
}

function zoomOut(event) {
  event.stopPropagation();
  if (currentZoomLevel > 0.5) {
    currentZoomLevel -= 0.1;
    document.getElementById('zoomed-img').style.transform = `scale(${currentZoomLevel})`;
  }
}

function openQuickView(productId) {
  const product = products.find(p => p.id === productId);
  currentProductForModal = product;
  
  const modal = document.getElementById('quick-view-modal');
  const modalImage = document.getElementById('modal-product-image');
  const modalName = document.getElementById('modal-product-name');
  const modalPrice = document.getElementById('modal-product-price');
  const modalLikesCount = document.getElementById('modal-likes-count');
  const likeBtnModal = document.querySelector('.like-btn-modal');
  const modalLikeText = document.getElementById('modal-like-text');
  
  modalImage.src = product.image;
  modalName.textContent = product.name;
  modalPrice.textContent = `$${product.price.toFixed(2)}`;
  modalLikesCount.textContent = product.likes;
  
  // Update like button in modal
  const isLiked = isProductLiked(product.id);
  likeBtnModal.innerHTML = `<i class="${isLiked ? 'fas' : 'far'} fa-heart"></i> <span id="modal-like-text">${isLiked ? 'Unlike' : 'Like'}</span>`;
  
  modal.style.display = 'block';
  
  // Add event listener to close modal
  document.querySelector('.close-modal').onclick = function() {
    modal.style.display = 'none';
  };
  
  // Add to cart button in modal
  document.querySelector('.add-to-cart-modal').onclick = function() {
    addToCart(productId);
    modal.style.display = 'none';
  };
  
  // Like button in modal
  likeBtnModal.onclick = function() {
    toggleLike(productId);
    const isLiked = isProductLiked(product.id);
    likeBtnModal.innerHTML = `<i class="${isLiked ? 'fas' : 'far'} fa-heart"></i> <span id="modal-like-text">${isLiked ? 'Unlike' : 'Like'}</span>`;
    modalLikesCount.textContent = product.likes;
  };
}

function handleSearch() {
  const query = document.getElementById("search-input").value.trim().toLowerCase();
  if (!query) {
    alert("⚠️ Please enter a product name to search.");
    return;
  }

  const results = products.filter(product => 
    product.name.toLowerCase().includes(query)
  );

  if (results.length > 0) {
    displayProducts(results);
    setTimeout(() => {
      scrollToProducts();
    }, 100);
  } else {
    document.getElementById("product-list").innerHTML = `
      <div class="text-center" style="font-size: 1.5rem; margin-top: 2rem; color: red; grid-column: 1 / -1;">
        <i class="fas fa-search" style="font-size: 3rem; display: block; margin-bottom: 1rem;"></i>
        No products found for "${query}"
      </div>
    `;
  }

  document.getElementById("back-btn-container").style.display = "block";
}

function filterByCategory(category) {
  if (category === 'all') {
    displayProducts();
  } else {
    const filteredProducts = products.filter(product => product.category === category);
    displayProducts(filteredProducts);
  }
  
  // Update active state of category buttons
  document.querySelectorAll('.category-filter').forEach(btn => {
    btn.classList.remove('active');
  });
  event.target.classList.add('active');
}

// Back to top functionality
function handleScroll() {
  const backToTopBtn = document.getElementById('back-to-top');
  
  if (window.pageYOffset > 300) {
    backToTopBtn.classList.add('visible');
  } else {
    backToTopBtn.classList.remove('visible');
  }
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Loading screen
function hideLoadingScreen() {
  const loadingScreen = document.getElementById('loading-screen');
  loadingScreen.classList.add('hidden');
  
  // Remove from DOM after animation
  setTimeout(() => {
    loadingScreen.style.display = 'none';
  }, 500);
}

// Event listeners
document.getElementById("buy-btn").addEventListener("click", () => {
  if (!isLoggedIn()) {
    alert("You must be logged in to open your cart.");
    window.location.href = "Login.html";
    return;
  }
  if (cart.length === 0) {
    alert("Your cart is empty. Please add items first.");
    return;
  }
  localStorage.setItem("cartItems", JSON.stringify(cart));
  window.location.href = "Add-to-cart.html";
});

document.getElementById("login-btn").addEventListener("click", () => {
  if (isLoggedIn()) {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("cartItems");
    localStorage.removeItem("userDetails");
    localStorage.removeItem("username");
    cart = [];
    updateCartCount();
    alert("Logged out successfully!");
    window.location.href = "Login.html";
  } else {
    window.location.href = "Login.html";
  }
});

document.getElementById("search-btn").addEventListener("click", handleSearch);

document.getElementById("back-btn").addEventListener("click", () => {
  document.getElementById("search-input").value = "";
  displayProducts();
  document.getElementById("back-btn-container").style.display = "none";
});

// Add event listeners for category filters
document.querySelectorAll('.category-filter').forEach(button => {
  button.addEventListener('click', function() {
    const category = this.getAttribute('data-category');
    filterByCategory(category);
  });
});

// Add event listener for hero arrow
document.querySelector('.hero-arrow').addEventListener('click', () => {
  document.querySelector('.category-section').scrollIntoView({ 
    behavior: 'smooth' 
  });
});

// Add event listener for sorting
document.getElementById('sort-select').addEventListener('change', function() {
  sortProducts(this.value);
});

// Add event listener for back to top
document.getElementById('back-to-top').addEventListener('click', scrollToTop);

// Close modal when clicking outside of it
window.onclick = function(event) {
  const modal = document.getElementById('quick-view-modal');
  if (event.target === modal) {
    modal.style.display = "none";
  }
}

// Initialize
window.onload = () => {
  // Load products from localStorage if available
  const savedProducts = localStorage.getItem("products");
  if (savedProducts) {
    products = JSON.parse(savedProducts);
  }
  
  // Show loading screen
  setTimeout(hideLoadingScreen, 2000);
  
  // Initialize AOS
  AOS.init({
    duration: 1000,
    once: true,
    offset: 100
  });
  
  const storedCart = localStorage.getItem("cartItems");
  if (storedCart) cart = JSON.parse(storedCart);

  // Initialize scroll handler
  window.addEventListener('scroll', handleScroll);
  
  displayProducts();
  updateStats();
  animateStats();

  const loginBtn = document.getElementById("login-btn");
  const welcomeMessage = document.getElementById("welcome-message");

  if (isLoggedIn()) {
    loginBtn.innerHTML = '<i class="fas fa-sign-out-alt"></i> <span class="btn-text">Logout</span>';

    // Get username from localStorage (works for both signup and login)
    const username = localStorage.getItem("username");
    const userDetails = localStorage.getItem("userDetails");
    
    let displayName = username;
    
    // Fallback: try to get username from userDetails
    if (!displayName && userDetails) {
      const parsedDetails = JSON.parse(userDetails);
      displayName = parsedDetails.username || parsedDetails.email || "User";
    }

    if (displayName) {
      welcomeMessage.textContent = `Welcome, ${displayName}!`;
      welcomeMessage.style.display = "inline-block";
    }
  } else {
    loginBtn.innerHTML = '<i class="fas fa-user"></i> <span class="btn-text">Login</span>';
    welcomeMessage.style.display = "none";
  }
  
  updateCartCount();
};

function scrollToProducts() {
  document.getElementById('product-list').scrollIntoView({ 
    behavior: 'smooth' 
  });
}
