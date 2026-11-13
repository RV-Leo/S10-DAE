# Aurora Cinemas

Cartelera estática construida con React y Vite para el laboratorio 09. Presenta películas ficticias, pósters SVG originales y componentes funcionales que reciben sus datos mediante props.

## Requisitos

- Node.js 20.19+ (desarrollo: `v24.19.0`)
- npm 11.17.0
- React y React DOM 19.3.1
- Vite 8.3.8
- Vitest 5.1.0

## Instalación y ejecución

```powershell
cd cinema-app
npm install
npm run dev
```

Abre la URL local que imprime Vite. Para verificar el proyecto:

```powershell
npm run lint
npm run build
npm test
```

## Estructura

- `src/data/movies.js`: datos de las ocho películas y selección de la destacada.
- `src/components/`: `Header`, `Hero`, `MovieList`, `MovieCard` y `Footer`; cada uno tiene carpeta, JSX y CSS BEM.
- `src/styles/`: tokens, base, layout y utilidades globales, importados en ese orden desde `main.jsx`.
- `public/posters/`: ocho ilustraciones SVG creadas para esta cartelera.

`App` obtiene la película destacada y pasa `movie` a `Hero`; entrega `movies` a `MovieList`. El listado recorre esos datos y pasa cada película como prop a `MovieCard` con una `key` estable.

La interfaz utiliza Fraunces e Instrument Sans, diseño mobile-first, landmarks accesibles, anillo de foco ámbar y respeto por la preferencia de movimiento reducido.

Autora del proyecto: Leonardo Ronda.
# Aurora Cinemas

Cartelera creada con React y Vite para el laboratorio 10 de componentes y eventos.

## Comandos

Requiere Node.js 20 o superior. Desde esta carpeta ejecuta `npm install`, `npm run dev`, `npm run lint`, `npm run build` o `npm test`.

## Componentes

- `Button`: reutiliza contenido y variantes por props en el banner y las tarjetas.
- `MovieSearch`: input controlado que actualiza la búsqueda en `App`.
- `MovieList`: filtra por título sin distinguir mayúsculas ni tildes y muestra el estado vacío.
- `MovieCard`: comunica el cambio de favorita al padre con `onToggleFavorite`.
- `Hero`, `Header` y `Footer`: separan las zonas principales de la página.

`App` guarda ids favoritos, texto de búsqueda y texto con debounce. Las favoritas se conservan en `localStorage` con la clave `aurora:favorites:v1`.

## Estilos

Los estilos globales se importan en orden: `tokens.css`, `base.css`, `layout.css`, `forms.css` y `utilities.css`. Cada componente tiene su CSS junto a su JSX.

Versiones usadas: React 19.3, Vite 8.3, Vitest 5.1. Autor: Leonardo Ronda.
