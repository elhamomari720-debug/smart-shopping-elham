// Product data
const products = [
  { id: 1, name: "Barcelona jersey & bottom", price: 44.99, image: "download (8).jpg" },
  { id: 2, name: "Nike Air zoom Football Boots", price:208.99, image: "download (20).jpg" },
  { id: 3, name: "Labubu dressed toy", price: 75.99, image: "shopping (5).webp" },
  { id: 4, name: "Real Madrid Jersey", price: 99.99, image: "cr7.jpg" },
  { id: 5, name: "WC 22 Football", price: 79.99, image: "images (1).jpg" },
  { id: 6, name: "AC Milan Jersey", price: 39.99, image: "ac-milan.webp" },
  { id: 7, name: "Nike Football Boots", price: 89.99, image: "download4.jpg" },
  { id: 8, name: "Adidas Socks", price: 9.99, image: "images (2).jpg" },
  { id: 9, name: "Men's Black Jeans", price: 21.99, image: "download (2).jpg" },
  { id: 10, name: "John Cena Cap", price: 7.99, image: "images (3).jpg" },
  { id: 11, name: "Adidas Yeezy Foam Runner", price: 299.99, image: "shopping (1).webp" },
  { id: 12, name: "Arabic Designed Watch", price: 109.99, image: "shopping (2).webp" },
  { id: 13, name: "Cristiano Man-utd Toy", price: 19.99, image: "shopping (3).webp" },
  { id: 14, name: "Nerf Gun - SNIPER", price: 29.99, image: "shopping (4).webp" },
  { id: 15, name: "Nike blackNwhite sneakers", price: 77.99, image: "shopping (11).webp" },
  { id: 16, name: "Cartoon design phone cover", price: 15.99, image: "download (3).jpg" },
  { id: 17, name: "Spiderman hoodie", price: 45.99, image: "download (4).jpg" },
  { id: 18, name: "Stylish glasses", price: 55.99, image: "download (5).jpg" },
  { id: 19, name: "Red Half sleeve T Shirt", price: 35.99, image: "download (6).jpg" },
  { id: 20, name: "Nike Backpack", price: 35.99, image: "images.jpg" },
  { id: 21, name: "Stretchy monkey toy", price: 30.99, image: "monkey.jpg" },
  { id: 22, name: "White designed T Shirt", price: 38.99, image: "download (7).jpg" },
  { id: 23, name: "Nike Lightining Sneakers", price: 109.99, image: "download (9).jpg" },
  { id: 24, name: "Champions blue cap", price: 29.99, image: "images (5).jpg" },
  { id: 25, name: "Nerf Gun Fortnite", price: 33.99, image: "download (10).jpg" },
  { id: 26, name: "Black T Shirt", price: 59.99, image: "shopping.webp" },
  { id: 27, name: "Champions-League Football", price: 73.99, image: "download (11).jpg" },
  { id: 28, name: "Golden Football Boots", price: 65.99, image: "shopping (7).webp" },
  { id: 29, name: "Men's Blue Jeans", price:28.99, image: "download (12).jpg" },
  { id: 30, name: "Anime designed Backpack", price: 25.99, image: "shopping (8).webp" },
  { id: 31, name: "Classic Yellow hoodie", price:18.99, image: "download (13).jpg" },
  { id: 32, name: "Flamin Hot Socks", price: 14.99, image: "shopping (9).webp" },
  { id: 33, name: "Gray Adidas Yeezy Foam Runner", price: 299.99, image: "shopping1.webp" },
  { id: 34, name: "Blue designed Watch", price: 55.99, image: "images (6).jpg" },
  { id: 35, name: "Stylish phone cover", price:15.99, image: "download (14).jpg" },
  { id: 36, name: "Blue Fashioned glasses", price:83.99, image: "images (7).jpg" },
  { id: 37, name: "Grey H&M Men's Jeans", price:83.99, image: "download (15).jpg" },
  { id: 38, name: "Premiere League Football", price:57.99, image: "download (16).jpg" },
  { id: 39, name: "Nerf Gun Pistol", price:47.99, image: "download (17).jpg" },
  { id: 40, name: "White Adidas Foam Runner", price:108.99, image: "download (18).jpg" },
  { id: 41, name: "Nike Women's Backpack", price:56.99, image: "download (19).jpg" },
  { id: 42, name: "Designed Sneakers", price: 49.99, image: "shopping3.webp" },
  { id: 43, name: "Nike White Socks", price:22.99, image: "download (22).jpg" },
  { id: 44, name: "Simple Black hoodie", price:28.99, image: "download (23).jpg" },
  { id: 45, name: "Tom&Jerry Iphone Phone cover", price:35.99, image: "download (24).jpg" },
  { id: 46, name: "Silver designed Watch", price:56.99, image: "download (25).jpg" },
  { id: 47, name: "Batman Cap", price:19.99, image: "images (8).jpg" },
  { id: 48, name: "Thug life glasses", price:39.99, image: "download.png" },
];

const clothingIds = [1, 3, 4, 5, 6, 8, 9, 10, 12, 13, 14, 16, 17, 18, 19, 20, 21, 22, 24,
 25, 26 ,27, 29, 30, 31, 32, 34, 35, 36, 37, 38, 39, 41, 43, 44, 45, 46, 47, 48];
const footwearIds = [2, 7, 11, 15, 23, 28, 33, 40, 42];
let cart = [];
let currentZoomLevel = 1;

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

// Main functions
function displayProducts(productsToShow = products) {
  const productList = document.getElementById('product-list');
  productList.innerHTML = '';

  productsToShow.forEach(product => {
    const sizeOptionsHTML = createSizeSelectHTML(product);
    const quantityOptionsHTML = createQuantitySelectHTML(product);
    const initialPrice = generateSizeOptions(product).find(opt => opt.selected)?.price || product.price;
    
    const div = document.createElement('div');
    div.className = 'product';
    div.innerHTML = `
      <div class="product-image-container">
        <img src="${product.image}" alt="${product.name}" onclick="zoomImage('${product.image}')" />
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
  alert(`${quantity} ${product.name} (${selectedSize || 'Default'}) added to cart at $${selectedPrice.toFixed(2)} each`);
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
      <div class="text-center" style="font-size: 1.5rem; margin margin-top: 2rem; color: red; grid-column: 1 / -1;">
        <i class="fas fa-search" style="font-size: 3rem; display: block; margin-bottom: 1rem;"></i>
        No products found for "${query}"
      </div>
    `;
  }

  document.getElementById("back-btn-container").style.display = "block";
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

// Initialize
window.onload = () => {
  const storedCart = localStorage.getItem("cartItems");
  if (storedCart) cart = JSON.parse(storedCart);

  displayProducts();

  const loginBtn = document.getElementById("login-btn");
  const welcomeMessage = document.getElementById("welcome-message");

  if (isLoggedIn()) {
    loginBtn.innerHTML = '<i class="fas fa-sign-out-alt"></i> Logout';

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
    loginBtn.innerHTML = '<i class="fas fa-user"></i> Login';
    welcomeMessage.style.display = "none";
  }
};

// Extra addToCart button (if exists in HTML)
const addToCartBtn = document.getElementById("addToCartBtn");
if (addToCartBtn) {
  addToCartBtn.addEventListener("click", function () {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

    if (!isLoggedIn) {
      alert("Please log in to add products to your cart.");
      return;
    }

    addProductToCart();
  });
}

function addProductToCart() {
  alert('Product added to cart!');
}

function scrollToProducts() {
  document.getElementById('product-list').scrollIntoView({ 
    behavior: 'smooth' 
  });
}