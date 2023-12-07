# Gif app con Astro

Aplicación de gifs creada con astro y Vue3 usando la api de [giffy]('https://developers.giphy.com')

## 🚀 Estructura del Proyecto

Dentro de tu proyecto de Astro, encontrarás las siguientes carpetas y archivos:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro busca archivos `.astro` o `.md` en el directorio `src/pages/`. Cada página se expone como una ruta basada en su nombre de archivo.

No hay nada especial sobre `src/components/`, pero ahí es donde nos gusta colocar componentes de Astro/React/Vue/Svelte/Preact.

Cualquier activo estático, como imágenes, puede ser colocado en el directorio `public/`.

## 🧞 Comandos

Todos los comandos se ejecutan desde la raíz del proyecto, desde un terminal:

| Command                   | Action                                                     |
| :------------------------ | :--------------------------------------------------------- |
| `npm install`             | Instala las dependencias                                   |
| `npm run dev`             | Inicia el servidor de desarrollo local en `localhost:4321` |
| `npm run build`           | Construye tu sitio de producción en `./dist/`              |
| `npm run preview`         | Previsualiza tu construcción localmente antes de desplegar |
| `npm run astro ...`       | Ejecuta comandos de la CLI como `astro add`, `astro check` |
| `npm run astro -- --help` | Obtienes ayuda usando la CLI de Astro                      |
