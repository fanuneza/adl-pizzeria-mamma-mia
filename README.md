# Pizzería Mamma Mía

Proyecto de pizzería desarrollado con React y Vite para el bootcamp **Desafío Latam**. La aplicación consume una API local en Node.js/Express para listar pizzas, manejar autenticación con JWT y simular compras.

## Características

- Catálogo de pizzas con imágenes, ingredientes y precios.
- Vista de detalle por pizza.
- Carrito de compras con aumento, disminución y cálculo de total.
- Registro, inicio de sesión y perfil de usuario.
- Rutas públicas, rutas protegidas y página 404.
- Backend local con endpoints para pizzas, autenticación y checkout.

## Estructura del proyecto

```text
.
|-- pizzeria-mama-mia/
|   `-- Frontend React + Vite
`-- simple-api-backend-nodejs-express-fs-json-jwt-main/
    `-- Backend Node.js + Express + JWT
```

## Requisitos

- Node.js 18 o superior.
- npm.

## Instalación y ejecución

Instala y levanta primero el backend:

```bash
cd simple-api-backend-nodejs-express-fs-json-jwt-main
npm install
npm start
```

El backend queda disponible en:

```text
http://localhost:5000
```

En otra terminal, instala y levanta el frontend:

```bash
cd pizzeria-mama-mia
npm install
npm run dev
```

El frontend queda disponible en:

```text
http://localhost:5173
```

## Scripts disponibles

Frontend:

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Build de producción
npm run preview  # Previsualizar build
npm run lint     # Ejecutar ESLint
```

Backend:

```bash
npm start        # Ejecutar API
npm run dev      # Ejecutar API con nodemon
```

## Endpoints principales

```text
GET  /api/pizzas
GET  /api/pizzas/:id
POST /api/auth/register
POST /api/auth/login
GET  /api/auth/me
POST /api/checkouts
```

Las rutas de perfil y checkout requieren enviar el token JWT en el header `Authorization`.

## Tecnologías utilizadas

- React
- Vite
- React Router DOM
- Context API
- Bootstrap 5
- Node.js
- Express
- JSON Web Token
