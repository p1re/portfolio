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
│   ├── components/     # Secciones y componentes del portfolio
│   ├── layouts/        # Estructuras compartidas de página
│   └── pages/          # Páginas del sitio; index.astro es la página principal
├── astro.config.mjs    # Configuración de Astro
└── package.json        # Dependencias y comandos del proyecto
```

## Cómo hacer cambios

- Edita `src/pages/index.astro` para cambiar la composición de la página
  principal.
- Modifica los componentes de `src/components/` para actualizar las secciones
  de presentación, estudios, proyectos, tecnologías o contacto.
- Añade o sustituye imágenes e iconos en `public/` y referencia sus rutas desde
  los componentes.

Antes de compartir cambios, puedes verificar que el sitio se genera
correctamente con `npm run build`.
