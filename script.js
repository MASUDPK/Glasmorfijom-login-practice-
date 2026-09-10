// =================================================
// Smart Building Management
// Login Demo Script
// =================================================

const loginForm = document.getElementById("loginForm");
const username = document.getElementById("username");
const password = document.getElementById("password");
const loginMessage = document.getElementById("loginMessage");

const loginScreen = document.getElementById("loginScreen");
const dashboardScreen = document.getElementById("dashboardScreen");

const togglePassword = document.getElementById("togglePassword");
const logoutBtn = document.getElementById("logoutBtn");

// -------------------------------------------------
// DEMO LOGIN
// Username: admin
// Password: 1234
// -------------------------------------------------

const ADMIN_USERNAME = "admin";
const ADMIN_PASSWORD = "1234";

// -------------------------------------------------
// CHECK EXISTING LOGIN
// -------------------------------------------------

if (sessionStorage.getItem("sbmsLoggedIn") === "true") {
  showDashboard();
}

// -------------------------------------------------
// LOGIN
// -------------------------------------------------

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const user = username.value.trim();
  const pass = password.value;

  if (user === ADMIN_USERNAME && pass === ADMIN_PASSWORD) {

    sessionStorage.setItem("sbmsLoggedIn", "true");

    loginMessage.textContent = "";
    showDashboard();

  } else {

    loginMessage.textContent = "Incorrect username or password.";

    password.value = "";
    password.focus();
  }
});

// -------------------------------------------------
// SHOW / HIDE PASSWORD
// -------------------------------------------------

togglePassword.addEventListener("click", function () {

  if (password.type === "password") {
    password.type = "text";
    togglePassword.innerHTML =
      '<i class="fa-solid fa-eye-slash"></i>';
  } else {
    password.type = "password";
    togglePassword.innerHTML =
      '<i class="fa-solid fa-eye"></i>';
  }

});

// -------------------------------------------------
// LOGOUT
// -------------------------------------------------

logoutBtn.addEventListener("click", function () {

  sessionStorage.removeItem("sbmsLoggedIn");

  dashboardScreen.classList.add("hidden");
  loginScreen.classList.remove("hidden");

  username.value = "";
  password.value = "";
  loginMessage.textContent = "";

  username.focus();
});

// -------------------------------------------------
// SCREEN FUNCTIONS
// -------------------------------------------------

function showDashboard() {
  loginScreen.classList.add("hidden");
  dashboardScreen.classList.remove("hidden");
}
