# 🧠 Teoría y Comentarios del Proyecto SPA CRUD de Usuarios

Este documento explica, paso a paso, todos los conceptos importantes del proyecto de tipo SPA (Single Page Application) con funcionalidades CRUD, login y roles, utilizando HTML, CSS y JavaScript.

---

## 1. ¿Qué es una SPA?

Una SPA (Single Page Application) es una aplicación web que carga una sola página HTML y actualiza dinámicamente su contenido sin recargar la página completa. Esto se logra con JavaScript usando el API del navegador `history` y manipulando el DOM.

**Ventajas**:

* Mejor experiencia de usuario (fluidez).
* Menos consumo de ancho de banda.
* El contenido cambia sin recargar la página.

---

## 2. Estructura del Proyecto

* `index.html`: Archivo principal donde se carga la SPA.
* `main.js`: Lógica central: rutas, autenticación, eventos.
* `views/*.html`: Vistas parciales inyectadas según la ruta.
* `style.css`: Estilos generales.
* `db.json`: Base de datos falsa usada por `json-server`.
* `services.js`: Módulo para peticiones a la "API" local.

---

## 3. Manejo de Rutas (Routing)

Las rutas se definen en el objeto:

```js
const routes = {
  "/users": "./views/users.html",
  "/newuser": "./views/newuser.html",
  ...
};
```

Se escucha el evento `click` para detectar cuando un enlace tiene `data-link`, y entonces:

* Se evita que recargue la página (`e.preventDefault()`).
* Se ejecuta `navigate(ruta)` para cargar el contenido.

```js
document.body.addEventListener("click", (e) => {
  if (e.target.matches("[data-link]")) {
    e.preventDefault();
    navigate(e.target.getAttribute("href"));
  }
});
```

---

## 4. Protección de rutas (Autenticación)

Antes de mostrar cualquier vista, se verifica si el usuario está autenticado:

```js
if (!isAuth() && pathname !== "/login") {
  pathname = "/login";
}
```

Esto evita que accedan a `/users`, `/newuser` u otras rutas sin haber iniciado sesión.

---

## 5. LocalStorage

Se utiliza `localStorage` para guardar el estado de sesión:

```js
localStorage.setItem("Auth", "true");
localStorage.setItem("role", "admin");
```

Y para verificar:

```js
const isAuth = () => localStorage.getItem("Auth") === "true";
```

---

## 6. Inicio de sesión (Login)

Cuando el usuario envía el formulario de login:

1. Se obtiene la lista de usuarios desde `json-server`.
2. Se busca un usuario con `find()` que coincida en usuario y contraseña.
3. Si existe, se guarda la sesión en `localStorage`.

```js
const foundUser = users.find(u => u.user === user && String(u.password) === pass);
```

---

## 7. Roles de usuario

El rol (por ejemplo: admin o cliente) se guarda y permite mostrar u ocultar botones:

```js
const isAdmin = localStorage.getItem("role") === "admin";
```

---

## 8. CRUD

Aunque en este proyecto básico no se implementan todos los métodos, un CRUD completo incluiría:

* **C**reate: Crear nuevo usuario (formulario en `/newuser`).
* **R**ead: Ver lista de usuarios (vista `/users`).
* **U**pdate: Editar datos de un usuario (botón opcional para admin).
* **D**elete: Eliminar usuario (visible solo para admin).

---

## 9. Vistas Dinámicas

Cada vista parcial (`*.html`) es cargada en el contenedor `#content`:

```js
const html = await fetch(route).then(res => res.text());
document.getElementById("content").innerHTML = html;
```

Esto permite cambiar de página sin recargar.

---

## 10. JSON Server (Simulación de API)

Se utiliza para simular una API REST local.

* Instalar: `npm install -g json-server`
* Ejecutar: `json-server --watch db.json`
* Accede a: `http://localhost:3000/usuarios`

---

## 11. Buenas Prácticas Aplicadas

* Uso de módulos (`services.js`).
* Separación de vistas.
* Estilos en CSS externo.
* Validaciones básicas de formulario.
* Comentarios y nombres claros.

---

## 12. Validaciones incluidas

* Campos obligatorios en el login.
* Prevención de acceso a rutas si no está logueado.
* Ocultar botones de admin si no tiene el rol.
* Alertas para errores comunes (login incorrecto).

---

## 13. Tecnologías utilizadas

* HTML5
* CSS3 (sin framework)
* JavaScript (ES6+)
* JSON Server para API local

---

## 14. Posibles mejoras

* Editar usuarios (Update)
* Crear usuarios desde la interfaz (Create real)
* Paginación o filtrado de usuarios
* Vista de perfil de usuario
* Persistencia de sesión con tokens (nivel avanzado)

---

Este documento es parte de tu kit de estudio y soporte para la prueba. Puedes usarlo como referencia para sustentar tu código y demostrar tus conocimientos técnicos.
