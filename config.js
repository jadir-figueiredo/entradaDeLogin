var email = document.getElementById("email");
var password = document.getElementById("password");
    
    email.addEventListener("focus", () => {
        email.style.borderColor = "#234740"; //Ao digitar muda a cor de fundo
    });
    email.addEventListener("blur", () => {
        email.style.borderColor = "#ccc"; //Ao clicar fora, volta ao normal
    });
    password.addEventListener("focus", () => {
        password.style.borderColor = "#234740";
    });
    password.addEventListener("blur", () => {
        password.style.borderColor = "#ccc";
    });