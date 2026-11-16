# Portafolio

Portafolio personal construido con React, Vite y Lucide React. Los datos personales y el contenido editable están centralizados en `src/data/portfolio.js`.

## Requisitos

- Node.js 18 o posterior
- npm

## Desarrollo local

```bash
npm install
npm run dev
```

Vite mostrará la dirección local en la terminal.

## Comprobación de producción

```bash
npm run build
npm run preview
```

La compilación estática se genera en `dist/`.

## Personalización

1. Edita nombre, correo, perfiles sociales, formación, habilidades y proyectos en `src/data/portfolio.js`.
2. Agrega la fotografía profesional como `public/images/foto-perfil.png`. Si todavía no existe, la portada muestra un espacio visual preparado.
3. En los datos del proyecto, completa las tecnologías y enlaces del sitio o repositorio cuando estén disponibles.

Los enlaces opcionales se muestran como pendientes hasta que se configuren; no se usan direcciones de ejemplo.

## GitHub y Vercel

Inicializa un repositorio Git, crea el repositorio correspondiente en GitHub y publícalo desde tu cliente Git habitual. Para Vercel, importa ese repositorio y usa la configuración detectada por Vite:

- Build command: `npm run build`
- Output directory: `dist`

No se necesita configuración especial de rutas para el sitio estático actual.
