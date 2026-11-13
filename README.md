# Laboratorio 10 — Componentes y eventos

Aurora Cinemas continúa el laboratorio 9 con componentes reutilizables, favoritas guardadas en el navegador y búsqueda de cartelera.

## Ejecutar

```powershell
cd cinema-app
npm install
npm run dev
```

También están disponibles `npm run lint`, `npm run build` y `npm test`. Revisa [README de la aplicación](cinema-app/README.md) y [avance del laboratorio](docs/PROGRESS.md).

## Componentes reutilizables

`Button` recibe el contenido por `children` y selecciona variantes por `variant`; lo usan el banner y las tarjetas. `MovieCard` recibe la película y comunica cambios de favorita al padre por callback. `MovieSearch` es controlado por `App` y envía cada cambio por `onChange`.

## Decisiones de estado

| Dato que la app recuerda | Componente donde vive | Motivo |
|---|---|---|
| `favoriteIds` | `App` | Lo comparten todas las tarjetas; guarda ids y se persiste en el navegador. |
| `query` | `App` | `MovieSearch` comunica cambios hacia el ancestro común que coordina el filtro. |
| `debouncedQuery` | `App` | `App` demora 300 ms el valor usado por `MovieList` para filtrar. |

`isFavorite` se deriva de `favoriteIds`; la lista filtrada se deriva de `movies` y `debouncedQuery`. No se duplican en estado.
