// Product Data

const products = [

    {
        id: 1,
        name: "Classic T-Shirt",
        price: 499,
        category: "fashion",
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
    },

    {
        id: 2,
        name: "Running Shoes",
        price: 1299,
        category: "fashion",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
    },

    {
        id: 3,
        name: "Smart Watch",
        price: 1999,
        category: "electronics",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30"
    },

    {
        id: 4,
        name: "Wireless Headphones",
        price: 1499,
        category: "electronics",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
    },

    {
        id: 5,
        name: "Leather Wallet",
        price: 699,
        category: "accessories",
        image: "https://images.unsplash.com/photo-1627123424574-724758594e93"
    },

    {
        id: 6,
        name: "Sunglasses",
        price: 599,
        category: "accessories",
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083"
    }

];


// Cart

let cart = [];


// Display Products

function displayProducts(productArray) {

    const productList =
        document.getElementById("productList");

    productList.innerHTML = "";


    if (productArray.length === 0) {

        productList.innerHTML =
            "<p>No products found.</p>";

        return;
    }


    productArray.forEach(function(product) {

        productList.innerHTML += `

            <div class="product-card">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                >

                <div class="product-details">

                    <h3>
                        ${product.name}
                    </h3>

                    <p class="category">
                        ${product.category}
                    </p>

                    <p class="price">
                        ₹${product.price}
                    </p>

                    <button
                        class="add-button"
                        onclick="addToCart(${product.id})"
                    >
                        Add to Cart
                    </button>

                </div>

            </div>

        `;

    });

}


// Add To Cart

function addToCart(productId) {

    const product =
        products.find(function(item) {

            return item.id === productId;

        });


    cart.push(product);

    updateCart();

    alert(product.name + " added to cart!");
}


// Update Cart

function updateCart() {

    const cartItems =
        document.getElementById("cartItems");

    const cartCount =
        document.getElementById("cartCount");

    const cartTotal =
        document.getElementById("cartTotal");


    cartCount.textContent = cart.length;


    cartItems.innerHTML = "";


    if (cart.length === 0) {

        cartItems.innerHTML =
            '<p class="empty-cart">Your cart is empty.</p>';

        cartTotal.textContent = "0";

        return;
    }


    let total = 0;


    cart.forEach(function(product, index) {

        total += product.price;


        cartItems.innerHTML += `

            <div class="cart-item">

                <div>

                    <strong>
                        ${product.name}
                    </strong>

                    <p>
                        ₹${product.price}
                    </p>

                </div>

                <button
                    class="remove-button"
                    onclick="removeFromCart(${index})"
                >
                    Remove
                </button>

            </div>

        `;

    });


    cartTotal.textContent = total;

}


// Remove From Cart

function removeFromCart(index) {

    cart.splice(index, 1);

    updateCart();

}


// Search Products

function searchProducts() {

    const searchText =
        document
        .getElementById("searchBox")
        .value
        .toLowerCase();


    const filteredProducts =
        products.filter(function(product) {

            return product.name
                .toLowerCase()
                .includes(searchText);

        });


    displayProducts(filteredProducts);

}


// Filter Products

function filterProducts() {

    const category =
        document.getElementById("categoryFilter").value;


    if (category === "all") {

        displayProducts(products);

        return;
    }


    const filteredProducts =
        products.filter(function(product) {

            return product.category === category;

        });


    displayProducts(filteredProducts);

}


// Checkout

function checkout() {

    if (cart.length === 0) {

        alert("Your cart is empty!");

        return;
    }


    alert(
        "Order placed successfully! Thank you for shopping."
    );

}


// Load Products When Page Opens

displayProducts(products);

updateCart();