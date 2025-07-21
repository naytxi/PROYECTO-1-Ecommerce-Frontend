![Texto alternativo](https://i.pinimg.com/736x/c8/cb/14/c8cb1490828284bc7e7738c5d0a045d0.jpg)

# 🛍️ Frontend E-commerce – React + React Router DOM + Context API

Este repositorio contiene el frontend de una tienda de objetos de segunda mano, desarrollado con **React** para crear una experiencia de usuario dinámica y fluida. Usamos **React Router DOM** para manejar la navegación entre vistas, y el **Context API** para el manejo eficiente del estado global. Además, el frontend realiza llamadas a la API del backend para obtener y modificar datos en tiempo real.

---

## 📌 Acerca del proyecto

Creamos una tienda funcional y visualmente atractiva con funcionalidades completas para el usuario y para el administrador. Permite la exploración de productos, gestión de carrito, registro, login y pedidos, junto con una vista protegida para administradores que pueden gestionar los productos.

El diseño está construido con SASS modular y colores definidos, y se han seguido buenas prácticas como uso de rutas protegidas, separación de contextos y persistencia con localStorage.

---

## 🛠 Tecnologías usadas

- **React**: Librería principal para construir la interfaz.
- **React Router DOM**: Para la navegación entre páginas.
- **Context API + useReducer**: Para el estado global de usuario y productos.
- **Axios**: Para peticiones HTTP a la API backend.
- **SASS (SCSS)**: Para estilos limpios, reutilizables y organizados.
- **LocalStorage**: Para persistir el carrito y el token de sesión.

---

## 🧩 Funcionalidades implementadas

- Registro y login de usuarios
- Vista de productos (lista y detalle)
- Carrito con contador y persistencia
- Creación de pedidos
- Perfil de usuario con historial de pedidos
- Buscador de productos
- Filtro por precio y orden alfabético
- Vista admin protegida por rol
- CRUD completo de productos para administradores
- Botón directo al panel admin desde el perfil

---

## 📦 Estructura del proyecto

```
PROYECTO-1-Ecommerce-Frontend/
├─ README.md
├─ e-commerce/
│   ├─ public/
│   ├─ src/
│   │   ├─ components/
│   │   │   ├─ Products/
│   │   │   ├─ Admin/
│   │   ├─ context/
│   │   ├─ styles/
│   ├─ package.json
```

---

## 🚀 Cómo instalar y ejecutar el proyecto

1. Clonar el repositorio:

```bash
git clone https://github.com/Elimila/PROYECTO-1-Ecommerce-Frontend.git
cd PROYECTO-1-Ecommerce-Frontend/e-commerce
```

2. Instalar dependencias:

```bash
npm install
```

3. Ejecutar el servidor:

```bash
npm run dev
```

> Asegúrate de tener el backend corriendo en `http://localhost:3000`

---

## 👩‍💻 Autoras

Proyecto realizado por:

- **Elida ** – Desarrollo de la parte de productos, diseño y vista admin.
- **Nahia ** – Registro, login, perfil de usuario y gestión de usuarios.

---

## 🎯 Estado actual

Proyecto funcional, responsive en parte, con posibilidad de expandir funcionalidades en futuras versiones. Repositorio organizado en ramas `main` y `develop`.

---

## 📚 Licencia

Proyecto realizado como parte del Bootcamp de Desarrollo Web Full Stack.
