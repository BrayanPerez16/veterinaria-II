// Selecciona los formularios y el indicador
var LoginForm = document.getElementById("LoginForm");
var RegForm = document.getElementById("RegForm");
var Indicator = document.getElementById("Indicator");

function register() {
    // Muestra el formulario de registro y oculta el de inicio de sesión
    RegForm.style.display = "block";
    LoginForm.style.display = "none";
    Indicator.style.transform = "translateX(100px)"; // Mueve el indicador
}

function login() {
    // Muestra el formulario de inicio de sesión y oculta el de registro
    RegForm.style.display = "none";
    LoginForm.style.display = "block";
    Indicator.style.transform = "translateX(0px)"; // Mueve el indicador
}

// Establece que el formulario de inicio de sesión se muestre inicialmente
login();

// Función para validar el formulario de inicio de sesión
function validateLogin(event) {
    event.preventDefault();
    var username = document.querySelector("#LoginForm input[type='text']").value;
    var password = document.querySelector("#LoginForm input[type='password']").value;
    
    if (username === "" || password === "") {
        alert("Por favor, ingresa tu usuario y contraseña.");
    } else {
        // Lógica para enviar al servidor o verificar las credenciales
        alert("Inicio de sesión exitoso");
    }
}

// Función para validar el formulario de registro
function validateRegister(event) {
    event.preventDefault();
    var username = document.querySelector("#RegForm input[type='text']").value;
    var email = document.querySelector("#RegForm input[type='text']:nth-of-type(2)").value;
    var password = document.querySelector("#RegForm input[type='password']").value;

    if (username === "" || email === "" || password === "") {
        alert("Por favor, completa todos los campos.");
    } else {
        // Lógica para enviar los datos al servidor
        alert("Registro exitoso");
    }
}

// Agregar los eventos de validación al formulario
document.getElementById("LoginForm").addEventListener("submit", validateLogin);
document.getElementById("RegForm").addEventListener("submit", validateRegister);

