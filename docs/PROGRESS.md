# Progreso del laboratorio 10

## Pasos

- [x] Paso 00 — Estructura y documentación del agente — commit de documentación (hash anotado al cierre)
- [x] Pasos 01–03 — Base en ejecución, estilos globales y Button reutilizable — `d2f6624`
- [x] Pasos 04–05 — Estado de favoritas y callback a MovieCard — `d2f6624`
- [x] Pasos 06–09 — Búsqueda controlada, debounce, filtro sin tildes, estado vacío e integración en Hero — `d2f6624`
- [x] Paso 10 — Persistencia de favoritas — `d2f6624`
- [x] Pasos 11–12 — Decisiones de estado, README y arquitectura final — commit de documentación (hash anotado al cierre)

Se agruparon pasos cortos relacionados en pocos commits locales. Se hará un solo push al final.

## Decisiones

- Se parte del laboratorio 9 copiado a esta carpeta para mantener el proyecto acumulativo y sus pósteres originales.
- Los ids de películas son slugs de texto desde el lab 9; se conservan y se validan como strings al persistir favoritas.
- `favoriteIds`, `query` y `debouncedQuery` viven en `App`; `isFavorite` y los resultados filtrados se derivan.
- El entregable y sus capturas para campus los prepara el alumno.

## Hallazgos

- La guía pide estilos, botón reutilizable, estado/eventos, callback hijo→padre, búsqueda con debounce, filtro/estado vacío y persistencia en `localStorage`.
- La búsqueda normaliza `NFD` y quita diacríticos; «orbita» encuentra «Órbita».
- Al tipear seis caracteres, sin debounce el filtrado puede ejecutarse seis veces; con pausa de 300 ms se ejecuta una vez.
- `npm run lint`, `npm run build` y las 12 pruebas pasan. Playwright no estaba instalado; se revisaron los breakpoints y estilos responsive en CSS, sin capturas automatizadas.
