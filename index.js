const login = document.getElementById("login");
const register = document.getElementById("register");
const login_container = document.getElementById("login_container");
const register_container = document.getElementById("register_container");


register.addEventListener("click", () => {
    login_container.style.display = 'none'
    register_container.style.display = 'block'
    
});
login.addEventListener("click", () => {
    login_container.style.display = 'block'
    register_container.style.display = 'none'
    
});