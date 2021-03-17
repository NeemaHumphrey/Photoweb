document.querySelector("#form-login").onsubmit = () => {
    const name = document.querySelector("#login-username").value;
    const pass = document.querySelector("#login-password").value;
    if (name != pass) {
        alert("Passwords don't match");
        return false;
    }
};
document.querySelector("#form-register").onsubmit = () => {
    const pass1 = document.querySelector("#reg-password1").value;
    const pass2 = document.querySelector("#reg-password2").value;
    if (pass1 != pass2) {
        alert("Passwords don't match");
        return false;
    }
};