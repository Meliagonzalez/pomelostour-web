# Estructura del Proyecto

> Documentación de la organización de archivos y carpetas del proyecto web de Pomelostour.

---

# Objetivo

Este documento describe la estructura del proyecto, el propósito de cada carpeta y las convenciones utilizadas durante el desarrollo.

Su finalidad es facilitar el mantenimiento, la escalabilidad y el trabajo colaborativo.

---

# Tecnologías

- React
- Vite
- TypeScript (si aplica)
- Tailwind CSS
- React Router
- Framer Motion (si aplica)
- ESLint
- Prettier

---

# Estructura de carpetas

src/
│
├── assets/
├── components/
├── layouts/
├── pages/
├── sections/
├── hooks/
├── context/
├── services/
├── utils/
├── constants/
├── data/
├── styles/
├── types/
└── App.tsx

---

# Descripción de carpetas

## assets/

Recursos estáticos.

Contiene:

- Imágenes.
- Videos.
- Iconos.
- Logos.
- Fuentes.

---

## components/

Componentes reutilizables.

Ejemplos:

- Button
- Card
- Modal
- SectionTitle

---

## sections/

Secciones completas de la Home.

Ejemplos:

- Hero
- Experience
- Gallery
- FAQ
- CTA

---

## pages/

Páginas completas.

Ejemplos:

- Home
- Galería
- Contacto

---

## layouts/

Layouts compartidos.

Ejemplo:

DefaultLayout.

---

## hooks/

Hooks personalizados.

---

## services/

Servicios externos.

Ejemplo:

WhatsApp
API
Analytics

---

## utils/

Funciones auxiliares.

---

## constants/

Constantes reutilizables.

---

## data/

Información estática utilizada por la web.

Ejemplo:

FAQ

Timeline

Testimonios

---

## styles/

Estilos globales.

---

## types/

Tipos e interfaces.

---

# Convenciones

## Componentes

PascalCase.

Ejemplo:

Hero.tsx

Gallery.tsx

---

## Hooks

Siempre comienzan con use.

Ejemplo:

useScroll.ts

---

## Utilidades

camelCase.

---

## Archivos

Un componente por carpeta cuando su complejidad lo justifique.

---

# Organización de componentes

Cada componente complejo deberá contener:

- index.ts
- Component.tsx
- styles.ts (si aplica)
- types.ts
- constants.ts (si aplica)

---

# Importaciones

Orden recomendado:

1. Librerías.
2. Hooks.
3. Context.
4. Services.
5. Components.
6. Styles.
7. Assets.

---

# Buenas prácticas

- Componentes pequeños.
- Responsabilidad única.
- Reutilización antes de duplicación.
- Evitar lógica innecesaria en la UI.
- Mantener consistencia en nombres y estructura.

---

# Escalabilidad

Toda nueva funcionalidad deberá integrarse respetando la estructura definida en este documento para mantener un proyecto ordenado y fácil de mantener.