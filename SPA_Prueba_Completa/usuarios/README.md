# SPA - Panel de Usuarios

Este proyecto es una Single Page Application (SPA) para administrar usuarios con roles, login y operaciones CRUD.

## Tecnologías
- HTML, CSS y JavaScript
- json-server para simular la API REST

## Instalación
1. Clona el repositorio
2. Instala json-server si no lo tienes:
   ```bash
   npm install -g json-server
   ```
3. Inicia el servidor:
   ```bash
   json-server --watch db.json
   ```
4. Abre `index.html` en el navegador.

## Carpetas
- `views/`: Contiene las vistas parciales HTML
- `js/`: Contiene la lógica principal y servicios
- `css/`: Contiene los estilos

# SPA Panel de Usuarios

Este proyecto es una SPA (Single Page Application) creada con JavaScript Vanilla, HTML y CSS, que permite:

- Iniciar sesión con validación.
- Navegar entre rutas sin recargar.
- Visualizar y controlar acceso por roles.
- Simular backend con `json-server`.

## 📦 Requisitos

- Node.js instalado
- `json-server`: `npm install -g json-server`
- Ejecutar con: `json-server --watch db.json`

## 🧠 Funcionalidades

- Rutas: `/login`, `/users`, `/newuser`, `/about`
- Protección de rutas (solo acceden usuarios autenticados)
- Roles (admin vs cliente)
- Login persistente con `localStorage`

# 🧑‍💼 Panel Administrativo de Usuarios - SPA con CRUD

Este proyecto es una **Single Page Application (SPA)** creada con **HTML, CSS y JavaScript Vanilla** que permite:

* Iniciar sesión con un usuario.
* Ver una lista de usuarios desde una API local.
* Crear, editar y eliminar usuarios (CRUD completo).
* Manejo de roles: admin y usuario.
* Navegación entre vistas sin recargar la página.

---

## 🚀 Tecnologías utilizadas

* HTML5
* CSS3 (Estilizado personalizado)
* JavaScript ES6 (Vanilla)
* `json-server` para simular una API REST

---

## 📦 Estructura del proyecto

```
usuarios-spa/
├── index.html              # Archivo principal
├── db.json                 # Base de datos simulada para json-server
├── css/
│   └── style.css           # Estilos generales
├── js/
│   ├── app.js              # Lógica principal y enrutamiento
│   └── services.js         # Funciones para interactuar con la API
├── views/
│   ├── login.html          # Vista de login
│   ├── users.html          # Vista principal con tabla de usuarios
│   ├── newuser.html        # Formulario para crear/editar
│   └── about.html          # Vista informativa opcional
```

---

## ▶️ Instrucciones rápidas

1. Clona este repositorio.

2. Instala json-server globalmente si no lo tienes:

```bash
npm install -g json-server
```

3. Inicia el servidor json:

```bash
json-server --watch db.json
```

4. Abre `index.html` en tu navegador (por doble clic o usando Live Server).

---

## 👤 Login de prueba

Puedes iniciar sesión con este usuario:

```json
{
  "user": "admin",
  "password": "1234",
  "role": "admin"
}
```

---

## 📚 Más información

* Este proyecto fue desarrollado como parte de una prueba técnica.
* Todo el código está comentado para facilitar su comprensión.

---

## 🧠 Autor

Hecho con propósito educativo por \[Tu Nombre] - 2025


