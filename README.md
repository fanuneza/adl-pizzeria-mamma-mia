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
|   `-- Frontend React 19 + Vite 8
`-- simple-api-backend-nodejs-express-fs-json-jwt-main/
    `-- Backend Node.js + Express 4 + JWT
```

## Requisitos

- Node.js 18 o superior.
- npm.

## Instalación y ejecución

Cada proyecto tiene su propio `package.json` y debe instalarse por separado.

### 1. Backend

```bash
cd simple-api-backend-nodejs-express-fs-json-jwt-main
npm install
npm start
```

El backend queda disponible en:

```text
http://localhost:5000
```

### 2. Frontend

En otra terminal:

```bash
cd pizzeria-mama-mia
npm install
npm run dev
```

El frontend queda disponible en:

```text
http://localhost:5173
```

## Configuración de entorno

El backend requiere una variable de entorno `JWT_SECRET`. El repositorio ya incluye un archivo `.env` con un valor por defecto:

```env
JWT_SECRET=increiblementeSecreto
```

> **Nota:** En producción debes reemplazar este valor por una clave segura.

## Scripts disponibles

**Frontend:**

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Build de producción
npm run preview  # Previsualizar build
npm run lint     # Ejecutar ESLint
```

**Backend:**

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

Las rutas de perfil (`/api/auth/me`) y checkout (`/api/checkouts`) requieren enviar el token JWT en el header:

```text
Authorization: Bearer <token_jwt>
```

## Tecnologías utilizadas

- React 19
- Vite 8
- React Router DOM 7
- Context API
- Bootstrap 5.3
- Node.js
- Express 4
- JSON Web Token

## Solución de problemas

### Puerto 5000 ocupado

Si al iniciar el backend ves el error `EADDRINUSE: address already in use :::5000`, significa que otro proceso está usando ese puerto. Puedes cambiarlo temporalmente:

```bash
# Windows (PowerShell)
$env:PORT=5001; npm start

# Windows (Git Bash / Linux / macOS)
PORT=5001 npm start
```

Luego actualiza la URL de la API en el frontend si es necesario.
