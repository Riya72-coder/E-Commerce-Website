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

const grid = document.querySelector("#product-grid");

//Fake API for men's clothing
const API_URL = "https://api.escuelajs.co/api/v1/categories/products";

async function fetchClothes() {
    // Check if grid exists (prevents error on login-pg.html)
    if (!grid) return;

    grid.innerHTML = '<div class = "text-center w-100"><h3>Loading Products...</h3></div>';

    try{
        const response = await fetch(API_URL);
        const products = await response.json();

        grid.innerHTML = "";

        products.forEach(product => {
            const productHTML = `
            <div class="col-12 col-md-6 col-lg-4 col-xl-3">
                <div class="card h-100 shadow-sm">
                    <img src="${product.image}" class="card-img-top" alt="${product.title}">
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title text-truncate">${product.title}</h5>
                        <p class="card-text text-muted small">${product.description.substring(0, 60)}...</p>
                        <h6 class="mt-auto fw-bold">₹ ${(product.price * 80).toFixed(0)}</h6>
                        <button class="btn btn-outline-dark mt-3 w-100">View Details</button>
                    </div>
                </div>
            </div>`;

            grid.innerHTML += productHTML;
        });
    } catch(error) {
        grid.innerHTML = `<div class="alert alert-danger">Error loading products:${error}</div>`;
    }
}
fetchClothes();