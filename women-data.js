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
const womensproduct = [
    {img:"https://th.bing.com/th/id/OIP.kfhGbzysFNmsP8l7Yy_qKwHaLM?w=182&h=275&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3", Brandname:"Vectezy", price:16999, id:1},
    {img:"https://th.bing.com/th/id/OIP.OLUQoTwruK4hZh9miEOMMwHaNK?w=182&h=324&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3", Brandname:"Vectezy", price:16999, id:2},
    {img:"https://th.bing.com/th/id/OIP.533vu5pC4EPL_JE5w0DXtAHaOl?w=177&h=349&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3", Brandname:"Vectezy", price:16999, id:3},
    {img:"https://th.bing.com/th/id/OIP.kMtEEBf2ruRqDWZIOECz5gHaNO?w=186&h=332&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3", Brandname:"Vectezy", price:1600, id:1},
    {img:"https://tse2.mm.bing.net/th/id/OIP._fGoFIijGnHXHe2MXaJAXwHaNK?cb=defcachec2&rs=1&pid=ImgDetMain&o=7&rm=3", Brandname:"Vectezy", price:1219, id:2},
    {img:"https://th.bing.com/th/id/R.27609253ba4f466b3bdfd6ed76c447e6?rik=GtKbsvKiSUnc9w&riu=http%3a%2f%2fwww.fashionhombre.com%2fwp-content%2fuploads%2f2019%2f10%2fBest-Fall-Casual-Work-Outfits-For-Women-9-1.jpg&ehk=qwaLhW6lDPtn4N3ya4L7P%2fk3ns8kbyhoxlHD9yHN4VI%3d&risl=&pid=ImgRaw&r=0", Brandname:"Vectezy", price:1399, id:3},
];

// Target the container directly
const container = document.querySelector("#product-container");

const result = womensproduct.map((item) => {
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
