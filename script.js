const form = document.querySelector("form");
const savedEmail = "admin@example.com"; // Changed for security
const savedPassword = "password123";    // Changed for security

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
    
})