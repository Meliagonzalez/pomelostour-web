# Pomelostour — estado real del proyecto

Relevamiento hecho leyendo directamente cada archivo de `src/`, `public/`, `index.html` y los archivos de configuración de la raíz. Fecha: 2026-07-23. Donde no hay evidencia directa en el código se indica "no determinado" en lugar de suponer.

---

## 1. Stack y configuración

| | package.json | instalado (node_modules) |
|---|---|---|
| React | `^19.2.6` | `19.2.7` |
| React DOM | `^19.2.6` | — |
| Vite | `^8.0.12` | `8.0.16` |
| Tailwind CSS | `^4.3.1` | `4.3.1` |

- Tailwind se integra vía `@tailwindcss/vite` (plugin de Vite), **no** vía PostCSS.
- **No existe `tailwind.config.js`**. Es Tailwind v4: el theme (color de marca) se define directamente en `src/index.css` con `@theme { --color-brand: #e0218a; --color-brand-dark: #be1c75; }`.
- `eslint.config.js` en formato flat config, con `eslint-plugin-react-hooks` y `eslint-plugin-react-refresh`; ignora `dist/`.
- Hay `@types/react` y `@types/react-dom` en devDependencies, pero no se usa TypeScript — todos los archivos son `.jsx`.

**Comandos** (`package.json > scripts`):
- `npm run dev` → `vite`
- `npm run build` → `vite build`
- `npm run lint` → `eslint .`
- `npm run preview` → `vite preview`

Se ejecutó `npm run build` para este relevamiento: compiló sin errores (43 módulos, ~200ms).

---

## 2. Estructura de `src/`

| Archivo | Qué hace |
|---|---|
| `App.jsx` | Compone la página: skip link, `Header`, todas las secciones dentro de `<main id="main">` en orden, `Footer`, botón flotante de WhatsApp. |
| `main.jsx` | Entry point de Vite/React: monta `<App />` dentro de `<StrictMode>` en `#root`. |
| `index.css` | Único archivo CSS del proyecto. `@import "tailwindcss"`, bloque `@theme` con los colores de marca, `scroll-behavior: smooth`, color de `::selection`, keyframes y clase `.animate-fade-up`, y un bloque `@media (prefers-reduced-motion: reduce)` que neutraliza animaciones/scroll suave. |
| `components/Header.jsx` | Header fijo con logo, nav desktop, CTA y menú mobile. |
| `components/Footer.jsx` | Pie de página con links de contacto y copyright. |
| `components/SectionHeading.jsx` | Título de sección reutilizable (eyebrow + h2 + descripción opcional). |
| `components/Reveal.jsx` | Wrapper de animación de entrada al hacer scroll (IntersectionObserver). |
| `components/WhatsAppFloatingButton.jsx` | Botón flotante de WhatsApp, solo mobile. |
| `sections/Hero.jsx` | Sección de apertura con imagen a pantalla completa. |
| `sections/TrustBar.jsx` | Franja de trust signals. |
| `sections/ExperienceTimeline.jsx` | Timeline de 5 pasos de la experiencia. |
| `sections/Reservation.jsx` | Formulario de reserva con validación y envío a WhatsApp. |
| `sections/Safety.jsx` | Grid de 4 puntos de seguridad/requisitos. |
| `sections/River.jsx` | Info del Río Chimehuín con imagen y stats. |
| `sections/Gallery.jsx` | Galería masonry con lightbox. |
| `sections/Testimonials.jsx` | Badge de Google + 3 testimonios. |
| `sections/Faq.jsx` | FAQ con tabs de categoría + acordeón. |
| `sections/Contact.jsx` | CTA final de contacto. |
| `assets/logo.png` | Logo usado en `Header.jsx`. |
| `assets/images/Todas/` | 46 archivos de fotos (drone y actividad); solo una parte está importada en componentes (ver sección 5). |

No hay carpetas `hooks/`, `lib/`, `utils/` ni archivos de configuración de rutas — es una landing de una sola página, todo navega por anclas (`#id`).

---

## 3. Secciones (`src/sections/`)

**Hero.jsx** — Imagen de fondo (`DJI_0053.jpg`) a `h-[85vh]` con overlay degradado, título "Rafting rio Chimehuín", copy y dos CTAs. Sin estado ni lógica. Contenido real. Animación: `animate-fade-up` (la única sección que no usa `Reveal`, usa la clase CSS custom).

**TrustBar.jsx** — Lista de 4 frases de trust separadas por bullets, mapeadas desde un array estático. Sin lógica. Contenido real. Animación: `Reveal`.

**ExperienceTimeline.jsx** — 5 pasos en grid (Llegada → Equipamiento → Briefing → Rafting → Regreso), horarios de turnos y CTA. Sin lógica más allá del `.map()`. Contenido real. Animación: `Reveal` con delay escalonado por índice.

**Reservation.jsx** — La sección con más lógica del sitio:
- Estado (`useState`) para fecha, turno, personas, traslado y errores.
- Fecha mínima calculada dinámicamente (hoy + 1 día).
- Validación en `handleSubmit`: fecha obligatoria y posterior a la mínima, turno obligatorio, personas entre 1 y 9, traslado obligatorio solo si el turno es "Tarde".
- Al cambiar el turno a "Mañana" se limpia automáticamente el campo de traslado.
- Si no hay errores, arma un mensaje de WhatsApp contextual (fecha formateada, turno, personas, traslado si aplica) y abre `api.whatsapp.com` en pestaña nueva.
Contenido real, sin placeholders. Animación: todo el bloque del formulario en `Reveal`.

**Safety.jsx** — Grid de 4 tarjetas con ícono SVG inline: "No requiere experiencia", "Equipamiento completo", "Edad mínima", "Duración". Sin lógica de estado. Contenido real y específico (edades mínimas por temporada, duración, ítems de equipamiento). Animación: `Reveal` con delay escalonado.

**River.jsx** — Imagen aérea (`DJI_0018.jpg`) + texto + 3 stats (Clase II+, 16–18°C, Garganta del Diablo). Sin lógica. Contenido real (nace en el Lago Huechulafquen, temperatura del agua, dificultad por temporada). Animación: dos `Reveal` (imagen y texto, el segundo con delay).

**Gallery.jsx** — 9 fotos en masonry (`columns-2`/`columns-3`) con lightbox modal:
- Estado `openIndex` para la foto activa.
- Navegación por teclado (Escape, flechas izquierda/derecha) vía `useEffect`.
- Foco automático al botón de cerrar al abrir el modal.
- `role="dialog"`, `aria-modal`, `aria-label`.
Contenido real, fotos propias. Animación: `Reveal` con delay cíclico por foto.

**Testimonials.jsx** — Badge de Google (logo, 5 estrellas, "4.9", "+3.000 reseñas", link a Maps) + 3 tarjetas de testimonios. Sin lógica de estado. Contenido **mixto**: el rating está comentado en el código como dato real confirmado por el cliente vía Google Maps; los 3 testimonios de texto son de ejemplo, con un `TODO` explícito en el código (`src/sections/Testimonials.jsx:9`) pidiendo reemplazarlos por reseñas reales. Animación: `Reveal` en badge y cada card.

**Faq.jsx** — 5 categorías con tabs (Experiencia, Equipamiento, Clima, Instalaciones, Reservas) y acordeón por pregunta:
- Estado `activeCategory` y `openQuestion`.
- Cambiar de categoría cierra la pregunta abierta.
- Usa `<details>`/`<summary>` nativos controlados por React.
33 preguntas en total, todas con respuestas concretas del negocio (políticas de cancelación, medios de pago, ubicación exacta, etc.). Sin placeholders. Animación: `Reveal` por pregunta.

**Contact.jsx** — CTA final con WhatsApp, Instagram, dirección y horario de atención. Sin lógica. Contenido real. Animación: `Reveal` en el bloque.

---

## 4. Componentes globales (`src/components/`)

**Header.jsx**
- Fijo (`fixed top-0`), con logo, nav desktop de 7 links y CTA "Reservar".
- **Scroll-aware**: listener de `scroll` (passive) que cambia el fondo (`bg-black/50` → `bg-black/80`) cuando `scrollY > 40`.
- **Mobile**: botón hamburguesa con estado propio (`menuOpen`), menú desplegable animado por `max-height`, se cierra automáticamente al hacer click en un link.
- Accesibilidad: `aria-expanded`, `aria-controls`, `aria-label` dinámico, focus rings visibles.

**Footer.jsx** — Nombre, ubicación, links a WhatsApp/Instagram con SVG inline, copyright con año calculado con `new Date().getFullYear()`. Sin estado.

**SectionHeading.jsx** — Eyebrow + `<h2>` + descripción opcional. Reutilizado en la mayoría de las secciones con id propio.

**Reveal.jsx** — Animación de entrada (fade + translate-y) basada en `IntersectionObserver` (`threshold: 0.15`), con props `delay` y `as` (tag polimórfico). Respeta `prefers-reduced-motion`: si está activo, el contenido se muestra visible desde el montaje sin esperar el observer.

**WhatsAppFloatingButton.jsx** — Botón fijo (`bottom-5 right-5`) con mensaje predefinido. Oculto en desktop (`lg:hidden`), visible solo en mobile/tablet.

---

## 5. Assets

**`src/assets/`**
- `logo.png` (~836 KB) — usado en `Header.jsx`.
- `images/Todas/` — 46 archivos (`.jpg`/`.jpeg`/`.png`), mezcla de tomas de drone (`DJI_*`) y fotos de la actividad. De esos 46, solo 10 imports están efectivamente usados en el código: 1 en `Hero.jsx`, 1 en `River.jsx`, y 9 en `Gallery.jsx` (importados como 8 líneas de `import`, pero uno de los archivos alimenta un array de 9 fotos — revisar detalle en `Gallery.jsx` líneas 4–24). El resto queda como banco de imágenes sin integrar todavía.

**`public/`**
- `logo.png` (~856 KB) — usado como favicon (`<link rel="icon">` y `apple-touch-icon`).
- `og-image.jpg` (~456 KB) — referenciada en `og:image` y `twitter:image`.
- `google-logo.svg` (~1.9 KB) — logo de Google usado en el badge de `Testimonials.jsx`.
- `robots.txt` — `User-agent: *`, `Allow: /`, referencia al sitemap.
- `sitemap.xml` — una sola URL (la home), `lastmod` 2026-07-23, `changefreq monthly`, `priority 1.0`.

**Alt text**: todas las `<img>` del código tienen `alt` descriptivo y específico en español (Hero, River, las 9 de Gallery, logo del Header, logo de Google). No se encontró ninguna imagen sin `alt`.

**Imágenes externas**: no se encontró ninguna referencia a picsum, unsplash, wikimedia u otro banco externo en `src/`. Todas las imágenes son locales.

---

## 6. SEO (`index.html`)

- **Title**: `Pomelostour | Rafting en el Río Chimehuín — San Martín de los Andes`.
- **Meta description**: presente, con keywords relevantes al negocio.
- **Meta keywords**: presente.
- `robots`: `index, follow`. `canonical`: `https://pomelostour.com.ar/`. `theme-color`: `#0f172a`.

**Open Graph** — presentes: `og:type`, `og:url`, `og:title`, `og:description`, `og:image`, `og:locale`, `og:site_name`. Ausentes: `og:image:width`, `og:image:height`.

**Twitter Card** — presentes: `twitter:card` (`summary_large_image`), `twitter:title`, `twitter:description`, `twitter:image`. Ausentes: `twitter:site`, `twitter:creator`.

**Geo tags** — `geo.region`, `geo.placename`, `geo.position`, `ICBM`: todos presentes.

**JSON-LD** — un único `<script type="application/ld+json">` con un array de 3 schemas:
1. `LocalBusiness`: nombre, descripción, teléfono, email, dirección, geo, horario, redes (`sameAs`), medios de pago, link a Maps.
2. `TouristAttraction`: descripción de la actividad, tipo de turismo, idiomas disponibles, ubicación.
3. `FAQPage`: 6 preguntas/respuestas — es un subconjunto de las 33 que tiene el componente `Faq.jsx`, no están replicadas todas.

**Favicon**: `<link rel="icon" type="image/png" href="/logo.png">` + `apple-touch-icon` apuntando al mismo `logo.png`. No hay `.ico` ni otras variantes de tamaño. En `git status` figura `public/favicon.svg` como archivo eliminado, y no fue reemplazado por otro favicon vectorial.

**Sitemap y robots**: ambos existen en `public/` y están correctamente enlazados entre sí (ver sección 5).

---

## 7. WhatsApp y contacto

**Número de WhatsApp** (`5492944802156` / `+5492944802156`) hardcodeado en 6 archivos:
- `index.html` (JSON-LD, campo `telephone`)
- `src/components/Footer.jsx`
- `src/components/WhatsAppFloatingButton.jsx`
- `src/sections/Contact.jsx`
- `src/sections/Faq.jsx`
- `src/sections/Reservation.jsx`

No hay constante centralizada ni variable de entorno.

**Instagram** (`https://www.instagram.com/pomelostour/`) hardcodeado en 3 lugares: `Footer.jsx`, `Contact.jsx`, y `index.html` (dentro de `sameAs` del JSON-LD). También aparece un link a Facebook (`facebook.com/pomelostourrafting`) en el `sameAs` del JSON-LD, pero no hay ningún link a Facebook visible en la interfaz.

**Mensajes de WhatsApp**:
- **Contextual**: solo `Reservation.jsx`, que arma el mensaje según lo completado en el formulario.
- **Genéricos**: `WhatsAppFloatingButton.jsx` ("Hola, quiero consultar disponibilidad para el rafting."), `Contact.jsx` ("Hola, quiero reservar mi lugar en el rafting 🚣"), `Faq.jsx` ("Hola, tengo una consulta sobre el rafting."), `Footer.jsx` (sin texto predefinido).

---

## 8. Funcionalidades implementadas

- Formulario de reserva con validación de campos y mensaje contextual a WhatsApp.
- FAQ con tabs por categoría + acordeón nativo (`<details>`).
- Menú mobile animado, con cierre automático al navegar.
- Header que cambia de estilo al hacer scroll.
- Scroll suave entre anclas, respetando `prefers-reduced-motion`.
- Animaciones de entrada por scroll (`Reveal`/`IntersectionObserver`) en casi todas las secciones, con delays escalonados en grids y galerías.
- Galería con lightbox: teclado (flechas + Escape), gestión de foco, `role="dialog"`.
- Badge de rating de Google con link a Maps.
- Botón flotante de WhatsApp solo en mobile.
- Skip link de accesibilidad al inicio del `App.jsx`.
- Focus rings visibles en elementos interactivos.
- SEO completo: meta tags, Open Graph, Twitter Card, geo tags, 3 schemas JSON-LD, `sitemap.xml`, `robots.txt`.

---

## 9. Pendientes conocidos

- Los 3 testimonios de `Testimonials.jsx` son de ejemplo — hay un `TODO` explícito en el código para reemplazarlos por reseñas reales de Google. Solo el rating (4.9 / +3.000 reseñas) está confirmado como dato real.
- Número de WhatsApp duplicado literal en 6 archivos — sin constante central, cualquier cambio requiere editar los 6 uno por uno.
- Mensajes de WhatsApp genéricos en Footer, botón flotante, Contact y Faq — solo Reservation arma un mensaje contextual.
- El `FAQPage` del JSON-LD tiene solo 6 de las 33 preguntas que existen en `Faq.jsx` — podría ampliarse para mejorar rich snippets.
- `public/favicon.svg` fue eliminado (aparece como archivo borrado en `git status`) sin reemplazo vectorial; el favicon actual es un PNG de ~856 KB, pesado para ese uso.
- 36 de las 46 imágenes en `src/assets/images/Todas/` no están usadas en ningún componente todavía.
- El JSON-LD referencia una página de Facebook (`sameAs`) que no tiene ningún link visible en Header, Footer o Contact.
- Faltan `og:image:width` / `og:image:height` en los meta tags Open Graph.
- Existe una carpeta `docs/` en la raíz con varios `.md` (arquitectura, contenido, SEO, historia, marca, etc.) que no se usó como fuente para este relevamiento — se trabajó únicamente sobre el código. Puede haber desalineación entre esos documentos y el estado real; no determinado sin compararlos.
- Al momento de este relevamiento hay cambios sin commitear: modificaciones en `index.html`, todos los componentes y secciones, `src/index.css`, y archivos nuevos sin trackear (`WhatsAppFloatingButton.jsx`, `TrustBar.jsx`, `public/robots.txt`, `public/sitemap.xml`, `public/og-image.jpg`, `public/google-logo.svg`, `public/logo.png`, `datos-pomelostour.md`, este mismo archivo).

---

## 10. Performance

**Peso de imágenes principales**
- Hero (`DJI_0053.jpg`): ~4.08 MB sin optimizar. Se carga con `fetchPriority="high"` y sin `loading="lazy"` (correcto para LCP, pero el peso es alto para una imagen crítica).
- `og-image.jpg`: ~456 KB — razonable para preview social.
- `logo.png` (usado tanto para el Header como para el favicon): ~836–856 KB — muy pesado para ese uso, sin versión optimizada, WebP/AVIF ni SVG.
- Según el output de `npm run build`, otras imágenes usadas en Gallery/River van desde ~114 KB (`deck-rafting.jpeg`) hasta ~9.5 MB (`DJI_0026.jpg`, usada en Gallery) — varias fotos aéreas pesan varios MB sin comprimir.

**Lazy loading**
- Configurado en `River.jsx` y en todas las imágenes de `Gallery.jsx` (`loading="lazy"`).
- El Hero no usa lazy loading (esperado, es la imagen above-the-fold).
- No hay `srcset`/`sizes` en ninguna imagen — todo se sirve en resolución original, sin variantes responsive.

**Recursos externos**
- No hay fuentes externas (`<link>` a Google Fonts u otro `@font-face` remoto) — se usa la fuente por defecto del sistema/Tailwind.
- No hay librerías de íconos externas — todos los SVG están escritos a mano inline en el JSX.
- No hay scripts de terceros (analytics, chat widgets, etc.) en `index.html`.
- Los únicos destinos "externos" son links salientes a `api.whatsapp.com`, `instagram.com` y `maps.app.goo.gl` — no son recursos cargados en la página, solo navegación.
