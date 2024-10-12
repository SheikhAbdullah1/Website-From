var wrapper = document.querySelector(".wrapper");
var registerLink = document.querySelector(".register-link");
var loginLink = document.querySelector(".login-link");


registerLink.onclick = (e) => {
    wrapper.classList.add("active");
}
loginLink.onclick = () => {
    wrapper.classList.remove("active");
}



