const cartItemsContainer = document.querySelector("#cart-items");
const totalPriceElement = document.querySelector("#total-price");

let cart = JSON.parse(localStorage.getItems("my_cart")) || [];

function displayCart() {
    if(cart.length === 0) {
        cartItemsContainer.innerHTML = "<h3>Your cart is empty</h3>";
        return;
    }
    let total = 0;
    cartItemsContainer.innerHtml = cart.map((item, index) => {
        total += item.price;
        return `
        <div class="col-12 mb-3">
            <div class="card d-flex flex-row p-3 align-items-center">
                <img src="${item.img}" style="width: 100px; height: 100px; object-fit: contain;">
                <div class="ms-3">
                    <h5>${item.Brandname}</h5>
                    <p>${item.price}</p>
                </div>
                <button class="btn btn-danger ms-auto" onclick="removeItem(${index})">Remove</button>
            </div>
        </div>
        `;
    }).join("");
    totalPriceElement.innerText = total;
}

function removeItem(index) {
    cart.splice(index)
        localStorage.setItem("my_cart", JSON.stringify(cart));
        displayCart();
}
displayCart();