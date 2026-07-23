# POMELOSTOUR — DOCUMENTO DE HANDOFF ACTUALIZADO
### Versión 2 — con datos reales incorporados

> Este documento reemplaza al handoff anterior. Todos los placeholders que el Documento Maestro pudo resolver están ahora integrados. Los datos aún pendientes se listan al final con su categoría de prioridad.

---

## 1. CONTEXTO DEL PROYECTO

**Empresa:** Pomelostour — rafting guiado en el Río Chimehuín, San Martín de los Andes, Neuquén, Patagonia Argentina.

**Producto real (confirmado):**
- Una única experiencia principal de rafting, con dos turnos diarios: mañana (10:30 hs) y tarde (14:30 hs).
- Objetivo #1 de la web: generar consultas y reservas por WhatsApp (+54 9 294 480-2156).
- Reserva online y pagos: fase futura — punto de integración previsto en sección 3 (Precio y Reserva).
- Público: familias (desde 6 años), parejas, grupos de amigos, turistas, empresas.
- Emociones eje: **aventura + seguridad + naturaleza**.
- Idiomas de atención: español, inglés, portugués.

---

## 2. ARQUITECTURA FINAL — ORDEN DE SECCIONES

| # | Sección | Función |
|---|---|---|
| 0 | Header (fijo) | Orientación + CTA permanente |
| 1 | Hero | Impacto emocional, propuesta de valor |
| 2 | ¿Cómo es la experiencia? (timeline 5 pasos) | Mostrar el día sin texto explicativo |
| 3 | Precio y Reserva | Conversión directa, eliminar fricción |
| 4 | Seguridad y Requisitos | Resolver objeción de deporte de riesgo |
| 5 | El Río Chimehuín | Storytelling de destino, diferenciación |
| 6 | Galería / Video | Prueba visual |
| 7 | Guías / Equipo | Humanización, confianza |
| 8 | Opiniones | Prueba social |
| 9 | Cómo llegar / Ubicación | Logística final |
| 10 | FAQ | Dudas residuales |
| 11 | Contacto / Reserva final | Última conversión |
| 12 | Footer | Cierre institucional, SEO |

---

## 3. CONTENIDO REAL POR SECCIÓN

### 0. Header
- **Logo:** Pomelostour (versión blanca sobre Hero oscuro → color al hacer scroll)
- **Menú:** Experiencia · El Río · Seguridad · Opiniones · FAQ · Contacto
- **CTA:** "Reservar por WhatsApp" → wa.me/5492944802156
- **Mobile:** sin CTA en header, barra sticky inferior

---

### 1. Hero
- **H1:** "Rafting en el Río Chimehuín"
- **Bajada:** "A los pies del Volcán Lanín, en el corazón de la Patagonia."
- **Tag de ubicación:** 📍 San Martín de los Andes · Patagonia Argentina
- **Trust bar (3 datos):**
  - "+25 años de experiencia"
  - "Apto desde 6 años"
  - "Único recorrido con Garganta del Diablo"
- **CTA primario:** "Reservar por WhatsApp"
- **CTA secundario:** "Conocé la experiencia" (scroll a sección 2)
- **Visual:** `[VIDEO_HERO]` / `[FOTO_HERO]` — candidata fuerte: toma aérea de bote en rápido ya identificada en material real
- **Deep link WhatsApp:** "Hola, quiero reservar mi rafting en el Chimehuín 🚣"

---

### 2. ¿Cómo es la experiencia? (Timeline)
- **Badge de duración/turnos:** "Turno mañana: 10:30 hs · Turno tarde: 14:30 hs"
- **5 pasos con foto + label + micro-descripción:**

| # | Label | Micro-descripción (máx. 4 palabras) | Foto sugerida |
|---|---|---|---|
| 1 | LLEGADA | Base frente al lago | Vista aérea de la base |
| 2 | EQUIPAMIENTO | Traje, medias, casco | Galpón de trajes o container de equipo |
| 3 | BRIEFING | Técnica y seguridad | Grupo con cascos antes de entrar al agua |
| 4 | RAFTING | Garganta del Diablo | Bote en pleno rápido (pieza de mayor impacto) |
| 5 | REGRESO | Base, merienda, fotos | Desembarco o paisaje de cierre |

- **CTA:** "Reservar mi turno" → wa.me prearmado
- **Mobile:** 5 pasos apilados verticalmente (no carrusel)

---

### 3. Precio y Reserva
- **Precio:** `[PRECIO]` por persona
- **Incluye (resumen):** equipo completo · guía especializado · transporte interno · vestuarios · estacionamiento · medias de neopreno
- **Merienda:** solo turno tarde
- **Traslado:** disponible desde San Martín de los Andes y Junín de los Andes (turno tarde)
- **Selector:** botones Turno mañana (10:30 hs) / Turno tarde (14:30 hs)
- **Medios de pago:** `[MEDIOS_PAGO]`
- **CTA:** "Reservar este turno por WhatsApp" (deep link con turno seleccionado)
- **Nota de integración futura:** punto donde se conecta reserva online/pago sin necesidad de rediseño

---

### 4. Seguridad y Requisitos
- **Grid de 4 datos duros:**
  - Nivel: Clase II+
  - Edad mínima: 6 años
  - Saber nadar: no requerido
  - Habilitación: `[HABILITACION]`
- **Equipamiento de seguridad:** casco homologado · chaleco de flotación · traje de neopreno · medias de neopreno · chaqueta rompeviento
- **Certificación de guías:** `[CERTIFICACION_GUIAS]`
- **Seguro:** `[SEGURO]`
- **Condiciones a informar:** embarazo · enfermedades cardíacas · lesiones · enfermedad celíaca
- **Foto:** flat-lay de equipo real + mini-galería del container/depósito (material real disponible)
- **Deep link WhatsApp:** "Hola, tengo una consulta sobre seguridad antes de reservar"
- **Fondo:** `--glacial` (sección de tono serio, segundo bloque oscuro de la página)

---

### 5. El Río Chimehuín
- **Línea de storytelling:** "Nace en el Lago Huechulafquen. Serpentea entre bosques de coihues y raulíes. Termina a los pies del Volcán Lanín."
- **3 datos duros:**
  - Clase II+ — rápidos moderados
  - Volcán Lanín · Lago Huechulafquen
  - Temporada: primavera y verano
- **Diferencial clave en copy:** "Única empresa que navega el rápido Garganta del Diablo"
- **Foto:** panorámica/dron del río con Volcán Lanín de fondo (material real disponible, imagen de dos botes con el volcán)
- **Animación:** ken burns sutil
- **Mobile:** crop vertical de la imagen

---

### 6. Galería / Video
- **Piezas ancla (material real ya identificado):**
  - Toma aérea de bote en pleno rápido (candidata a elemento grande del mosaico)
  - Toma cenital de botes entrando a rápido turquesa-blanco
  - Grupo en briefing con cascos puestos
  - Dos botes en el río con Volcán Lanín de fondo
- **Formato desktop:** mosaico asimétrico (1 grande + varios pequeños de distinto aspect ratio)
- **Mobile:** carrusel horizontal con scroll snap
- **Interacción:** lightbox con navegación

---

### 7. Guías / Equipo
- **Contenido:** `[NOMBRE_GUIAS]` · `[AÑOS_EXP]` · `[CERTIFICACION_GUIAS]`
- **Frase personal:** máx. 6 palabras
- **Foto:** retrato en el río con equipo puesto
- **Mobile:** carrusel horizontal, una tarjeta visible

---

### 8. Opiniones
- **Rating:** `[RATING_GOOGLE]`/5 · `[CANTIDAD_RESEÑAS]` reseñas en Google
- **Testimonios:** `[TESTIMONIO_1]`, `[TESTIMONIO_2]`, `[TESTIMONIO_3]` (con nombre + ciudad)
- **Link:** "Ver todas las opiniones en Google"
- **Color de estrellas:** `--pomelo`

---

### 9. Cómo llegar / Ubicación
- **Oficina comercial:** Av. San Martín 941, Local 2, San Martín de los Andes
  Google Maps: https://maps.app.goo.gl/gvDiGoz7ZJw66iSa9
- **Base de rafting:** ~67 km de San Martín de los Andes (60 km pavimento + 7 km ripio)
  Google Maps: https://maps.app.goo.gl/UkuPs8A9At4949uU9
- **Referencia clave:** sin señal en los últimos km — recomendable descargar el mapa previamente
- **Estacionamiento:** gratuito en el predio (ingresar a 45°)
- **Traslado:** disponible desde San Martín de los Andes y Junín de los Andes (turno tarde)
- **Foto de apoyo:** toma aérea de la base entre la vegetación (material real disponible)

---

### 10. FAQ

| Pregunta | Respuesta |
|---|---|
| ¿Necesito saber nadar? | No. El chaleco de flotación garantiza tu seguridad en todo momento. |
| ¿Cuál es la edad mínima? | 6 años. |
| ¿Qué pasa si llueve? | `[PROTOCOLO_CLIMA]` |
| ¿Qué tengo que llevar? | Protector solar, toalla, ropa interior seca y zapatillas. Llevá también calzado seco para cambiarte al finalizar. No uses ojotas — no son compatibles con las medias de neopreno. |
| ¿Cuánto dura en total? | Turno mañana: 10:30 a 13:00 hs aprox. Turno tarde: 14:30 a 18:30 hs aprox. |
| ¿Hay vestuarios y baños? | Sí. La base cuenta con vestuarios amplios y baños modernos. |
| ¿Hay estacionamiento? | Sí, gratuito dentro del predio. |
| ¿El turno tarde incluye merienda? | Sí, merienda de cortesía incluida. |
| ¿El turno mañana incluye traslado? | No. El turno mañana es solo con vehículo propio. |
| ¿El turno tarde incluye traslado? | Sí, disponible desde San Martín de los Andes y Junín de los Andes. |
| ¿En qué meses funciona? | Durante la temporada de primavera y verano. |
| ¿Hay condiciones médicas que impiden participar? | Embarazo, enfermedades cardíacas, lesiones o cualquier condición médica relevante deben informarse antes de la reserva. |
| ¿Cuál es la política de cancelación? | Las reservas requieren pago previo. No se realizan devoluciones dentro de las 24 horas previas a la actividad. |
| ¿La actividad incluye fotografía? | Hay servicio de fotografía profesional disponible como opcional. |

- **CTA de cierre FAQ:** "¿Tu duda no está acá? Escribinos por WhatsApp" → wa.me prearmado

---

### 11. Contacto / Reserva final
- **Título:** "¿Listo para mojarte?"
- **Bajada:** "Escribinos y organizamos tu salida a medida. Respondemos por WhatsApp en horario de atención (9 a 21 hs)."
- **Datos de contacto:**
  - WhatsApp: +54 9 294 480-2156
  - Email: pomelostour@hotmail.com
  - Instagram: @pomelostour
  - Oficina: Av. San Martín 941, Local 2 — San Martín de los Andes
- **Formulario:** nombre · personas · turno (mañana 10:30 / tarde 14:30) · fecha · comentario
- **Restricciones del formulario:**
  - Personas: selector con mínimo y máximo real (`[CAPACIDAD_BOTE]`)
  - Turno: botones pill, no dropdown
  - Fecha: selector con calendario

---

### 12. Footer
- **Tagline:** "Rafting y turismo aventura en el Río Chimehuín. Adrenalina y naturaleza en el corazón de la Patagonia argentina."
- **Navegación:** Experiencia · El Río · Seguridad · Opiniones · FAQ · Contacto
- **Contacto:** Av. San Martín 941 Local 2 · +54 9 294 480-2156 · @pomelostour
- **Redes:** Instagram · Facebook · WhatsApp
- **Copyright:** © 2025 Pomelos Tour. Todos los derechos reservados. · San Martín de los Andes · Patagonia Argentina
- **Elemento decorativo:** isotipo del logo a gran escala, baja opacidad (~7%), textura de fondo

---

## 4. SISTEMA DE DISEÑO (sin cambios respecto al handoff anterior)

### Paleta
| Token | Hex | Uso / Proporción |
|---|---|---|
| `--pomelo` | `#E0218A` | CTAs, hover, línea de firma, badges de máxima prioridad — máx. 5-10% de superficie por sección |
| `--glacial` | `#0E3B3E` | Fondos oscuros (Hero, Seguridad, Contacto), íconos funcionales |
| `--andes` | `#16241D` | Header, Footer, máximo contraste |
| `--espuma` | `#F6F8F4` | Fondo dominante de secciones informativas |
| `--piedra` | `#8C9A8D` | Texto secundario, bordes, divisores |
| `--granito` | `#101715` | Texto principal sobre fondo claro |

### Tipografía
| Rol | Referencia | Uso |
|---|---|---|
| Display | Archivo Black / Bebas Neue (con soporte tildes/ñ) | H1/H2, números grandes |
| Body | Inter / General Sans | Párrafos, formularios, FAQ |
| Utility/Data | IBM Plex Mono / JetBrains Mono | Badges, datos técnicos, labels de timeline, horarios |

### Elemento de firma
Línea de río — trazo curvo fino (1-2px), dibujado a mano alzada. `--pomelo` sobre fondos oscuros, `--glacial` sobre fondos claros. En la sección Timeline actúa como conector narrativo de los 5 pasos.

### Botones
- **Primario:** pill `--pomelo`, ícono WhatsApp izquierda, hover con oscurecido + elevación 2px
- **Secundario:** outline 1.5px, mismo pill, sin ícono
- **Flotante WhatsApp:** circular `--pomelo`, pulso lento, oculto en sección Contacto
- **Barra sticky mobile:** "Reservar" (pill `--pomelo`) + ícono WhatsApp (secundario circular), altura ~64px

---

## 5. REGLAS RESPONSIVE

| Componente | Desktop | Mobile |
|---|---|---|
| Header CTA | Visible en header | Ausente → barra sticky inferior |
| Hero | Video fondo, CTAs lado a lado, trust bar 3 cols | Imagen estática, CTAs apilados, trust bar compacta |
| Timeline | 5 nodos horizontales | 5 nodos apilados verticalmente |
| Precio | Bloque centrado ancho medio | Full width, selector de turno en 2 botones pill |
| Seguridad | Grid 4 cols | Grid 2x2 |
| El Río | Imagen panorámica horizontal | Crop vertical (imagen distinta) |
| Galería | Mosaico asimétrico | Carrusel scroll snap |
| Guías/Opiniones | Fila 3-4 tarjetas | Carrusel, 1 visible |
| Cómo llegar | Mapa + datos 2 cols | Mapa arriba reducido + datos debajo |
| Contacto | 2 cols lado a lado | Apilado |
| WhatsApp | Botón flotante circular | Barra sticky inferior |

---

## 6. REGLAS DE ANIMACIÓN

- **Hero:** secuencia orquestada única — H1 fade+translateY → línea de río se dibuja → CTAs aparecen.
- **Scroll reveals:** fade + translateY (12-16px), 250-350ms, sin rebote.
- **Línea de río / Timeline:** stroke-dashoffset via IntersectionObserver.
- **Timeline:** nodos se revelan secuencialmente, no todos a la vez.
- **El Río:** ken burns sutil en imagen de fondo.
- **Hover tarjetas:** escala 1.02, sin rotaciones ni 3D.
- **Descartado:** animación letra-por-letra, parallax agresivo, partículas, efectos 3D.
- **Accesibilidad:** `prefers-reduced-motion` → aparición directa sin transición.

---

## 7. LIBRERÍA DE COMPONENTES

`Header` · `MobileNav` · `Button` (primary/secondary/text/whatsapp) · `StickyMobileCTA` · `FloatingWhatsApp` · `Hero` · `TrustBar`/`DataStat` · `SectionEyebrow` · `RiverDivider` · `ExperienceTimeline` · `ShiftSelector` · `SafetyStatCard` · `MasonryGallery` · `Lightbox` · `GuideCard` · `TestimonialCard` · `RatingBadge` · `MapEmbed` · `AccordionFAQ` · `ContactForm` · `Footer`

**Para desarrollo:**
- Tokens de color → `tailwind.config` como colores custom (no usar paleta default de Tailwind).
- Tipografías → `fontFamily` custom en config.
- `RiverDivider` → SVG inline animado con prop de color y modo (decorativo/narrativo).
- Todos los datos → archivo centralizado `content.ts` para facilitar reemplazo de placeholders.

---

## 8. DECISIONES CLAVE TOMADAS

| Decisión | Razón |
|---|---|
| Sin niveles de excursión ficticios | El boceto original mostraba 3 productos inexistentes |
| Precio ancla visible (no "Consultar") | "Consultar" es la principal causa de abandono en webs de turismo |
| Paleta basada en el logo magenta, no teal/naranja genérico | El boceto no usaba ningún color del logo |
| Magenta restringido a 5-10% de superficie | Conserva su función de señal de acción |
| Nueva sección Timeline (5 pasos) | Reemplaza un párrafo por una secuencia visual, elimina la principal fricción pre-reserva |
| Mención explícita del Volcán Lanín y la Garganta del Diablo | Diferenciales geográficos/exclusivos irrepetibles, validados por el cliente |
| Medias de neopreno como diferencial destacado | Único operador de la zona que las incluye |
| Texto recortado ~40% en toda la web | Prioridad visual, mejora escaneo en mobile |
| WhatsApp en `--pomelo` (no verde de plataforma) | El ícono ya identifica el canal; el color refuerza la marca |
| Deep links contextuales por sección | Reduce fricción de redacción del usuario |
| Barra sticky inferior en mobile | Mayor superficie táctil, evita duplicar CTA |
| Datos de vestuarios/baños en Timeline y FAQ (no sección propia) | Resuelven una objeción real sin requerir una sección dedicada |

---

## 9. DECISIONES DESCARTADAS

| Descartado | Razón |
|---|---|
| 3 tarjetas de niveles de excursión | Productos inexistentes; estructura preparada para futuro sin inventar contenido |
| Paleta teal/naranja del boceto | Sin conexión con el logo |
| Magenta como fondo de sección | Pierde su función de señal de acción |
| Sección "Alojamiento" | La base no es un producto de hospedaje (aclarado por el cliente) |
| Botón WhatsApp en verde de plataforma | Se prioriza refuerzo de identidad de marca |
| Animaciones letra-por-letra, parallax, partículas, 3D | El sitio debe sentirse físico y real, no "genérico de SaaS" |
| Grid uniforme en Galería | Patrón genérico; se prefiere mosaico asimétrico |
| Carrusel para timeline en mobile | La versión vertical apilada mantiene mejor la metáfora de secuencia |
| Checklist "qué incluye" como sección independiente | Redistribuido a Timeline y Seguridad, evita redundancia |
| Input numérico libre de "Personas" | Riesgo de reservas inviables; reemplazado por selector con límites reales |
| CTA "Reservar ahora" sin aclarar que el canal es WhatsApp | Generaba expectativa incorrecta de reserva inmediata confirmada |

---

## 10. PLACEHOLDERS PENDIENTES (solo estos)

| Placeholder | Dato pendiente | Prioridad |
|---|---|---|
| `[PRECIO]` | Precio por persona | 🔴 Alta — bloquea sección 3 |
| `[MEDIOS_PAGO]` | Efectivo / transferencia / tarjeta | 🔴 Alta — bloquea sección 3 |
| `[CAPACIDAD_BOTE]` | Máximo de personas por bote | 🔴 Alta — bloquea formulario |
| `[PROTOCOLO_CLIMA]` | Qué pasa si se suspende por clima | 🟡 Media — bloquea FAQ |
| `[CERTIFICACION_GUIAS]` | Nombre y entidad de certificación | 🟡 Media — bloquea sección 4 |
| `[HABILITACION]` | Número y organismo habilitante | 🟡 Media — bloquea sección 4 |
| `[SEGURO]` | Compañía y cobertura del seguro | 🟡 Media — bloquea sección 4 |
| `[NOMBRE_GUIAS]` + `[AÑOS_EXP]` + `[FRASE]` | Datos de guías a presentar | 🟡 Media — bloquea sección 7 |
| `[RATING_GOOGLE]` + `[CANTIDAD_RESEÑAS]` | Datos de Google Business | 🟡 Media — bloquea sección 8 |
| `[TESTIMONIO_1-3]` | Testimonios reales con permiso | 🟡 Media — bloquea sección 8 |
| `[DESCUENTO_GRUPO]` | Política de grupos (si existe) | 🟢 Baja — opcional |
| `[FOTO_HERO]` / `[VIDEO_HERO]` | Material visual principal | 🔴 Alta — bloquea sección 1 |

---

## 11. PRÓXIMO PASO CONFIRMADO

Con este documento, el proyecto está listo para iniciar desarrollo en React + Tailwind.

**Secuencia recomendada de desarrollo:**
1. `tailwind.config` — tokens de color y tipografía.
2. `content.ts` — todos los datos reales + placeholders centralizados.
3. `RiverDivider` — componente SVG de firma.
4. `Header` + `StickyMobileCTA` + `FloatingWhatsApp` — transversales.
5. Secciones en orden de arquitectura (1 → 12).
