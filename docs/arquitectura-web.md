# Arquitectura Web

> Documentación de la estructura, organización y funcionamiento de la página web de Pomelostour.

---

# Objetivo

Este documento describe la arquitectura funcional del sitio web de Pomelostour.

Su objetivo es servir como referencia para el desarrollo, mantenimiento y futuras ampliaciones del proyecto, documentando la estructura general, el flujo de navegación, las páginas, los componentes principales y las decisiones de diseño.

---

# Objetivos de la página

La web tiene como principales objetivos:

- Presentar la experiencia de rafting de forma atractiva.
- Generar confianza en nuevos visitantes.
- Mostrar toda la información necesaria antes de reservar.
- Facilitar el contacto con el equipo de Pomelostour.
- Convertir visitantes en reservas mediante llamados a la acción claros.

---

# Público objetivo

La página está orientada principalmente a:

- Familias.
- Parejas.
- Grupos de amigos.
- Turistas nacionales.
- Turistas extranjeros.
- Empresas y grupos privados.

---

# Mapa del sitio

/
│
├── Inicio
├── Experiencia
├── Galería
├── Preguntas frecuentes
├── Contacto
└── Reserva (WhatsApp)

---

# Flujo del usuario

El recorrido ideal del visitante es:

1. Llega al Hero.
2. Comprende rápidamente qué ofrece Pomelostour.
3. Descubre la experiencia.
4. Conoce los diferenciales.
5. Visualiza fotografías y videos.
6. Lee opiniones de otros clientes.
7. Resuelve dudas frecuentes.
8. Reserva mediante WhatsApp.

Cada sección debe reducir objeciones y acercar al usuario a la reserva.

---

# Estructura de la página de inicio

La Home es una Landing Page de conversión.

Orden de las secciones:

1. Navbar
2. Hero
3. Sobre la experiencia
4. Cómo es la aventura
5. ¿Por qué elegir Pomelostour?
6. Galería
7. Opiniones
8. Preguntas frecuentes
9. Llamado a la acción final
10. Footer

---

# Navegación

La navegación debe ser simple e intuitiva.

Características:

- Navbar fija.
- Scroll suave entre secciones.
- Botón permanente de WhatsApp.
- Accesos rápidos desde el menú.
- Footer con enlaces principales.

---

# Componentes principales

Los principales componentes reutilizables del proyecto son:

- Navbar
- Hero
- SectionTitle
- Cards
- ExperienceTimeline
- Gallery
- TestimonialCard
- FAQ
- CTA
- Footer

Cada componente debe mantener una estructura independiente y reutilizable.

---

# Llamados a la acción (CTA)

La página utiliza distintos llamados a la acción distribuidos estratégicamente.

Objetivos:

- Reservar.
- Consultar disponibilidad.
- Solicitar información.

El botón principal siempre dirige al canal de WhatsApp.

---

# Responsive

La experiencia debe adaptarse correctamente a:

- Desktop.
- Notebook.
- Tablet.
- Mobile.

El diseño se desarrollará con enfoque Mobile First.

---

# Accesibilidad

Se priorizarán buenas prácticas de accesibilidad:

- Contraste adecuado.
- Navegación mediante teclado.
- Etiquetas semánticas.
- Texto alternativo en imágenes.
- Botones claramente identificables.

---

# Rendimiento

La web deberá priorizar:

- Carga rápida.
- Imágenes optimizadas.
- Lazy Loading.
- Componentes livianos.
- Excelente puntaje en Lighthouse.

---

# SEO técnico

La arquitectura del sitio deberá facilitar:

- URLs limpias.
- Jerarquía correcta de encabezados.
- Meta etiquetas.
- Datos estructurados.
- Buen enlazado interno.

---

# Escalabilidad

La estructura del proyecto debe permitir incorporar nuevas secciones sin modificar la arquitectura existente.

Ejemplos:

- Blog.
- Nuevas actividades.
- Sistema de reservas propio.
- Panel administrativo.
- Múltiples idiomas.

---

# Cambios importantes

Toda modificación significativa en la estructura del sitio deberá registrarse en este documento para mantener la documentación actualizada.

# Arquitectura de componentes

App
│
├── Navbar
├── Hero
├── Experience
├── Timeline
├── WhyUs
├── Gallery
├── Testimonials
├── FAQ
├── CTA
└── Footer


# Secciones de la Home

Cada sección de la página cumple un objetivo específico dentro del recorrido del usuario. Ninguna debe existir únicamente por motivos estéticos.

---

# Hero

## Objetivo

Captar la atención del visitante en los primeros segundos, transmitir rápidamente qué ofrece Pomelostour y generar el primer interés por la experiencia.

## Debe comunicar

- Qué actividad se realiza.
- Dónde se realiza.
- Que es apta para la mayoría de las personas.
- La belleza del entorno.
- El principal llamado a la acción.

## Elementos

- Título principal.
- Subtítulo.
- Botón "Reservar".
- Imagen o video de fondo.
- Indicador para continuar el recorrido.

---

# Sobre la experiencia

## Objetivo

Explicar de forma sencilla en qué consiste la actividad.

## Debe responder

- ¿Qué voy a hacer?
- ¿Cuánto dura?
- ¿Necesito experiencia?
- ¿Qué incluye?

## Elementos

- Texto descriptivo.
- Iconos.
- Imagen de apoyo.

---

# Cómo es la aventura

## Objetivo

Mostrar paso a paso cómo será la experiencia desde la llegada hasta el final del recorrido.

## Elementos

- Timeline.
- Fotografías.
- Duración aproximada de cada etapa.

---

# ¿Por qué elegir Pomelostour?

## Objetivo

Generar confianza y diferenciarse de la competencia.

## Debe destacar

- Más de 25 años de experiencia.
- Garganta del Diablo.
- Equipamiento incluido.
- Base propia.
- Guías especializados.

---

# Galería

## Objetivo

Permitir que el visitante imagine la experiencia antes de vivirla.

## Contenido

- Fotografías.
- Videos.
- Paisajes.
- Clientes.
- Equipamiento.

---

# Opiniones

## Objetivo

Generar prueba social mediante experiencias reales.

## Contenido

- Reseñas de Google.
- Testimonios destacados.

---

# Preguntas frecuentes

## Objetivo

Resolver las dudas más habituales antes de que el usuario contacte por WhatsApp.

---

# CTA Final

## Objetivo

Invitar a realizar la reserva una vez respondidas todas las objeciones.

Debe incluir:

- Mensaje breve.
- Botón de WhatsApp.

---

# Footer

## Objetivo

Cerrar la navegación ofreciendo información institucional y accesos rápidos.

Debe incluir:

- Datos de contacto.
- Redes sociales.
- Ubicación.
- Derechos de autor.