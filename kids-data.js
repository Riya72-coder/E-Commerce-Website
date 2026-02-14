const form = document.querySelector("form");
const savedEmail = "admin@example.com"; // Changed for security
const savedPassword = "password123";    // Changed for security

// Check if form exists before adding event listener (prevents error on index.html)
if (form) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = document.querySelector("#email").value;
        const password = document.querySelector("#password").value;

        if(email === savedEmail && password === savedPassword){
            alert("Login successful!");
            window.location.href = "index.html";   //redirects to website pg, if details are correct.
        } else if(email === "" || password === ""){
            alert("Please fill in all fields");
        } else {
            alert("Invalid email or password");
        }
    });
}

//creating own api
const kidsproduct = [
    {img:"https://th.bing.com/th/id/OIP.K8qhS0TCefDe6l6Ke7HZeAHaHa?w=198&h=198&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3", Brandname:"Vectezy", price:16999, id:1},
    {img:"https://th.bing.com/th/id/OIP.ov63oPAcZEHRC0iBaer7TQHaLH?w=130&h=150&c=6&o=7&dpr=1.3&pid=1.7&rm=3", Brandname:"Vectezy", price:16999, id:2},
    {img:"https://th.bing.com/th/id/OIP.ZDhJC5vvO0aKQZHV8MDpAAHaIr?w=143&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3", Brandname:"Vectezy", price:16999, id:3},
    {img:"https://th.bing.com/th/id/OIP.uHzQyJIJji49X-xSN2e_qgHaE8?w=267&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3", Brandname:"Vectezy", price:16999, id:4},
    {img:"https://th.bing.com/th/id/OIP.27DwhL0RBS2MMw2-OK1nxgHaLH?w=131&h=197&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3", Brandname:"Vectezy", price:16999, id:5},
    {img:"https://th.bing.com/th/id/OIP.6Ral9ARfnczM67nVfL7iaQHaIV?w=178&h=202&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3", Brandname:"Vectezy", price:16999, id:6}
];

// Target the container directly
const container = document.querySelector("#product-container");

const result = kidsproduct.map((item) => {
    return `
    <div class="col-md-4">
        <div class="card h-100 shadow-sm">
            <img src="${item.img}" class="card-img-top" alt="${item.Brandname}" style="height:350px; object-fit:contain; padding: 5px;">
            <div class="card-body">
                <h3>${item.Brandname}</h3>
                <p>Price: ₹${item.price}</p>
                <button onclick="addToCart(${item.id})" class="btn btn-primary w-100">Add To Cart</button>
            </div>
        </div>
    </div>`;
}).join("");

// Just inject the result directly into the row
container.innerHTML = result;

//add to Cart
let cart = JSON.parse(localStorage.getItem("my_cart")) || [];

function AddToCart(productId) {
    const itemToAdd = product.find(item => item.id === productId.id);

    cart.push(itemToAdd);
    localStorage.setItem("my_cart", JSON.stringify(cart));

    alert(`${item.Brandname} added to Cart!`);
}
