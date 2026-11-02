# Portfolio personal

Este repositorio contiene el código de mi portfolio personal, desarrollado con
[Astro](https://astro.build/). En él presento información sobre mí, mis estudios,
algunos proyectos, las tecnologías con las que he trabajado y mis datos de
contacto.

## Requisitos

- [Node.js](https://nodejs.org/) (se recomienda una versión LTS)
- npm, incluido con Node.js

## Empezar

Clona el repositorio y accede a su directorio:

```sh
git clone <url-del-repositorio>
cd portfolio
```

Instala las dependencias e inicia el servidor de desarrollo:

```sh
npm install
npm run dev
```

Abre la dirección que indique la terminal; normalmente es
`http://localhost:4321`. Los cambios en los archivos se reflejan mientras el
servidor está en marcha.

## Comandos disponibles

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Inicia el servidor local de desarrollo. |
| `npm run build` | Genera la versión de producción en `dist/`. |
| `npm run preview` | Sirve localmente la versión generada para revisarla. |

Para comprobar la versión de producción, ejecuta `npm run build` y después
`npm run preview`.

## Estructura del repositorio

```text
/
├── public/             # Imágenes, iconos y otros archivos estáticos
├── src/
│   ├── components/
│   │   ├── sections/  # Secciones y piezas reutilizables de la interfaz
│   │   ├── Nav.astro  # Navegación superior y selector de tema
│   │   └── Footer.astro
│   ├── data/           # Contenido de proyectos, formación y tecnologías
│   ├── layouts/        # Estructuras compartidas de página
│   ├── pages/          # Rutas del sitio; index.astro es la página principal
│   └── styles/         # Variables de tema, tipografía y estilos globales
├── astro.config.mjs    # Configuración de Astro
└── package.json        # Dependencias y comandos del proyecto
```

## Cómo hacer cambios

- Edita `src/pages/` para cambiar la composición de una ruta.
- Modifica o añade secciones en `src/components/sections/`.
- Ajusta los enlaces de navegación y el selector de tema en
  `src/components/Nav.astro`.
- Actualiza proyectos, formación y tecnologías en `src/data/portfolio.ts`.
- Añade imágenes e iconos en `public/` y referencia sus rutas desde los
  componentes.
- Ajusta la paleta, los temas y la tipografía en `src/styles/global.css`.

Antes de compartir cambios, puedes verificar que el sitio se genera
correctamente con `npm run build`.
