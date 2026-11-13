# S10-DAE — Lab 10: Componentes y eventos

Este proyecto extiende Aurora Cinemas del laboratorio 9 con componentes reutilizables y estado interactivo.
Se evalúan props, `useState`, eventos y comunicación del hijo al padre.
Rama de trabajo: `main`.

## Estructura agéntica

```mermaid
flowchart TD
    H(["👤 Alumno lanza la ventana"]) --> O
    subgraph TEAM["Equipo agéntico — roles que corren en secuencia dentro de UNA sesión de Codex"]
        O["🧭 Orchestrator<br/>lee LAB-10.md y docs/PROGRESS.md<br/>decide el siguiente paso"]
        B["🏗️ Builder<br/>escribe el código del paso"]
        D["🎨 Designer<br/>tokens · layout · a11y · responsive"]
        V["🧪 Verifier<br/>lint · build · tests"]
        S["📝 Scribe<br/>README · docs/PROGRESS.md"]
        G["🔒 Git Steward<br/>commits agrupados<br/>push único al cierre"]
    end
    O --> B --> D --> V
    V -- "falla" --> B
    V -- "pasa" --> S --> G
    G -- "siguiente paso" --> O
    G --> R[("GitHub<br/>repo S10-DAE")]
    G -. "commit local + push final" .-> R
```

```text
 ┌────────────────────────── CICLO DE TRABAJO ──────────────────────────────┐
 │ [1 PLAN] → [2 BUILD] → [3 DESIGN] → [4 VERIFY] → [5 NOTES] → [6 COMMIT] │
 │     ▲                         │                                  │       │
 │     └──────────────────── falla┘                     pasos agrupados    ▼
 │                                                  [7 PUSH FINAL] → [8 ESTADO]
 └──────────────────────────────────────────────────────────────────────────┘
```

## Arquitectura del laboratorio

```mermaid
flowchart TD
    App["App<br/>favoriteIds · query · debouncedQuery"]
    LS[("localStorage<br/>aurora:favorites:v1")]
    App <-->|"lee al cargar · escribe al cambiar"| LS
    App -->|"movie + children"| Hero
    Hero --> MovieSearch
    Hero --> Button
    App -->|"movies · query · favoriteIds · onToggleFavorite"| MovieList
    MovieList --> MovieCard
    MovieCard --> Button
    MovieList --> Empty["Estado vacío"]
    MovieSearch -. "onChange ↑" .-> App
    MovieCard -. "onToggleFavorite(id) ↑" .-> App
```

## Árbol

```text
S10-DAE/
├── AGENTS.md · README.md
├── docs/PROGRESS.md
└── cinema-app/
    ├── public/posters/ (8 SVG originales)
    └── src/
        ├── main.jsx · App.jsx
        ├── data/movies.js · utils/favoritesStorage.js
        ├── styles/ (tokens · base · layout · forms · utilities)
        └── components/
            ├── Button/ · Header/ · Footer/
            ├── Hero/ · MovieSearch/ · MovieList/ · MovieCard/
        └── test/setup.js
```

## Comandos

Desde `cinema-app/`: `npm install`, `npm run dev`, `npm run lint`, `npm run build`, `npm test`.
Usa React 19, Vite 8, Vitest 5, Lucide y las fuentes Fraunces/Instrument Sans.

## Trabajo y diseño

Los pasos cercanos se agrupan en un commit local; el push se hace una vez al terminar. No se suben `node_modules`, `dist` ni secretos.
Aurora usa fondo oscuro, marfil y ámbar, tipografía editorial, tarjetas de póster, foco visible, teclado, landmarks y diseño adaptable.

## Terminado

La cartelera corre; botones, favoritas, búsqueda con debounce, filtro sin tildes, estado vacío y persistencia están listos; README y progreso describen la implementación; lint, build y pruebas pasan; cambios publicados en `origin`.
