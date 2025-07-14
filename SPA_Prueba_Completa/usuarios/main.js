import { getUsers } from "./services.js";

// Rutas
const routes = {
  "/users": "./views/users.html",
  "/newuser": "./views/newuser.html",
  "/about": "./views/about.html",
  "/login": "./views/login.html",
};

// Autenticación
function isAuth() {
  const auth = localStorage.getItem("Auth");
  return auth === "true";
}

async function navigate(pathname) {
  if (!isAuth() && pathname !== "/login") {
    pathname = "/login";
  }

  const route = routes[pathname];
  const html = await fetch(route).then((res) => res.text());
  document.getElementById("content").innerHTML = html;
  history.pushState({}, "", pathname);

  if (pathname === "/users") setupUsers();
  if (pathname === "/about") setupCounter();
  if (pathname === "/login") setupLoginForm();
}

document.body.addEventListener("click", (e) => {
  if (e.target.matches("[data-link]")) {
    e.preventDefault();
    navigate(e.target.getAttribute("href"));
  }
});

function setupUsers() {
  const role = localStorage.getItem("role");
  const isAdmin = role === "admin";

  document.querySelectorAll(".admin-btn").forEach((btn) => {
    btn.style.display = isAdmin ? "inline-block" : "none";
  });
}

function setupCounter() {
  let counter = 0;
  const value = document.getElementById("counter-value");
  document.getElementById("increment-btn")?.addEventListener("click", () => {
    value.textContent = ++counter;
  });
  document.getElementById("decrement-btn")?.addEventListener("click", () => {
    value.textContent = --counter;
  });
}

function setupLoginForm() {
  const form = document.getElementById("login-spa");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const user = document.getElementById("user").value.trim();
    const pass = document.getElementById("password").value.trim();

    if (!user || !pass) {
      alert("Todos los campos son obligatorios");
      return;
    }

    const users = await getUsers();
    const foundUser = users.find(
      (u) => u.user === user && String(u.password) === pass
    );

    if (foundUser) {
      localStorage.setItem("Auth", "true");
      localStorage.setItem("role", foundUser.role);
      navigate("/users");
    } else {
      alert("Usuario o contraseña incorrectos");
    }
  });
}

document.getElementById("close-sesion").addEventListener("click", () => {
  localStorage.setItem("Auth", "false");
  localStorage.removeItem("role");
  navigate("/login");
});

window.addEventListener("DOMContentLoaded", () => {
  navigate(location.pathname);
});

window.addEventListener("popstate", () => {
  navigate(location.pathname);
});
