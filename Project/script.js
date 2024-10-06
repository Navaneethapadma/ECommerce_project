let cart = [];

function addToCart() {
    let productName = "Kanjeevaram silk saree";
    let price = 4999;
    let quantity = document.querySelector('input[type="number"]').value;

    let product = {
        name: productName,
        price: price,
        quantity: quantity
    };

    cart.push(product);

    displayCartItems();
}
function displayCartItems() {
    let cartItemsDiv = document.getElementById('cart-items');
    cartItemsDiv.innerHTML = ''; 

    cart.forEach((item, index) => {
        cartItemsDiv.innerHTML += `
            <div class="cart-item">
                <p>${item.name} x ${item.quantity} - ₹${item.price * item.quantity}</p>
                <button onclick="removeFromCart(${index})"><i class="fa-solid fa-trash"></i></button>
            </div>
        `;
    });

    if (cart.length === 0) {
        cartItemsDiv.innerHTML = '<p>Cart is empty.</p>';
    }
}
function removeFromCart(index) {
    cart.splice(index, 1); 
    displayCartItems(); 
}
document.getElementById('btn').addEventListener('click', addToCart);


    function clicking(smallImg){
let imageBox = document.getElementById("imagebox");
imageBox.src = smallImg.src;
}

    let myBtn = document.getElementById('btn')

    myBtn.addEventListener('click',() => {

    alert("Added to cart")
    })

   
    
    document.getElementById('colorSelect').addEventListener('change', function () {
        const productImage = document.getElementById('productImage');
        const selectedOption = this.options[this.selectedIndex];
        const newImage = selectedOption.getAttribute('data-img');
        const newPrice = selectedOption.getAttribute('data-price');

        productImage.style.opacity = '0';
        setTimeout(() => {
            productImage.src = newImage;
            productImage.style.opacity = '1';
            document.getElementById('price').innerText = `Price: $${newPrice}`;
        }, 500);
    });

   
    function increaseQuantity() {
        let quantity = document.getElementById('quantity');
        if (quantity.value < 10) quantity.value++;
    }

    function decreaseQuantity() {
        let quantity = document.getElementById('quantity');
        if (quantity.value > 1) quantity.value--;
    }

    const reviews = [
        { rating: 5, comment: "Great product!", date: "2024-09-01" },
        { rating: 4, comment: "Nice quality, would recommend.", date: "2024-08-20" },
        { rating: 3, comment: "Average quality", date: "2024-08-15" }
    ];

    function displayReviews() {
        const container = document.getElementById('reviews-container');
        reviews.forEach(review => {
            const reviewElement = document.createElement('div');
            reviewElement.classList.add('review');
            reviewElement.innerHTML = `
                <strong>Rating: ${'⭐'.repeat(review.rating)}</strong> 
                - ${review.comment} <small>(${review.date})</small>
            `;
            container.appendChild(reviewElement);
        });
    }

    displayReviews();

    // Star Rating System
    const stars = document.querySelectorAll('.star');
    let selectedRating = 0;

    stars.forEach(star => {
        star.addEventListener('click', function() {
            selectedRating = this.getAttribute('data-value');
            updateStarRating(selectedRating);
        });
    });

    function updateStarRating(rating) {
        stars.forEach(star => {
            if (star.getAttribute('data-value') <= rating) {
                star.classList.add('selected');
            } else {
                star.classList.remove('selected');
            }
        });
        document.getElementById('selectedRating').innerText = `Rating: ${rating} stars`;
    }



