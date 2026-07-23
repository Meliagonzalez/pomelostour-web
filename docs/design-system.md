# Design System

> Guía de diseño para el desarrollo de la interfaz de Pomelostour.

---

# Objetivo

Este documento define las reglas visuales y de interacción utilizadas en la web de Pomelostour.

Su objetivo es mantener una experiencia consistente, facilitar el desarrollo y garantizar que todos los componentes compartan el mismo lenguaje visual.

---

# Principios de diseño

La interfaz debe transmitir:

- Naturaleza.
- Aventura.
- Seguridad.
- Profesionalismo.
- Cercanía.
- Simplicidad.

Cada elemento debe reforzar la sensación de una experiencia al aire libre sin comprometer la claridad ni la usabilidad.

---

# Paleta de colores

## Primario

Color principal de la marca.

Uso:

- Botones principales.
- Enlaces destacados.
- Elementos activos.

---

## Secundario

Uso:

- Componentes de apoyo.
- Tarjetas.
- Detalles visuales.

---

## Acento

Uso:

- Llamados a la acción.
- Etiquetas.
- Indicadores.

---

## Neutros

Escala de grises utilizada para:

- Texto.
- Fondos.
- Bordes.
- Divisores.

---

## Estados

- Éxito
- Advertencia
- Error
- Información

---

# Tipografía

## Fuente principal

Uso general de toda la interfaz.

---

## Jerarquía

H1

Título principal.

H2

Título de sección.

H3

Subtítulos.

Body

Texto principal.

Small

Texto secundario.

Caption

Información auxiliar.

---

# Espaciado

La interfaz utiliza una escala consistente de espaciados.

Ejemplo:

- XS
- SM
- MD
- LG
- XL
- 2XL

Todos los márgenes y paddings deben respetar esta escala.

---

# Border Radius

Definir un único sistema de radios para toda la interfaz.

Aplicar a:

- Botones.
- Cards.
- Inputs.
- Imágenes.
- Modales.

---

# Sombras

Definir distintos niveles de elevación.

Ejemplo:

- Shadow Small
- Shadow Medium
- Shadow Large

Evitar sombras excesivas.

---

# Botones

## Primario

Acción principal.

Ejemplo:

Reservar ahora.

---

## Secundario

Acciones complementarias.

---

## Outline

Acciones de menor prioridad.

---

## Estados

- Normal
- Hover
- Active
- Disabled
- Focus

---

# Cards

Todas las tarjetas deben compartir:

- Espaciado.
- Bordes.
- Radios.
- Sombra.
- Tipografía.

---

# Inputs

Definir:

- Altura.
- Padding.
- Placeholder.
- Estados.
- Mensajes de error.

---

# Iconografía

Todos los iconos deben mantener:

- Mismo estilo.
- Mismo grosor.
- Mismo tamaño relativo.

---

# Imágenes

Las imágenes deben:

- Ser de alta calidad.
- Mostrar experiencias reales.
- Mantener una misma edición.
- Evitar fotografías genéricas.

---

# Animaciones

Las animaciones deben ser sutiles.

Priorizar:

- Fade.
- Slide.
- Hover.
- Scroll Reveal.

Evitar animaciones largas o distractoras.

---

# Responsive

Breakpoints definidos para:

- Mobile
- Tablet
- Laptop
- Desktop

El desarrollo seguirá un enfoque Mobile First.

---

# Accesibilidad

Todos los componentes deberán cumplir con buenas prácticas de accesibilidad:

- Contraste adecuado.
- Navegación mediante teclado.
- Estados de foco visibles.
- Texto alternativo en imágenes.
- Etiquetas semánticas.

---

# Componentes reutilizables

Los componentes reutilizables del proyecto incluyen:

- Button
- SectionTitle
- Card
- Badge
- CTA
- Gallery
- TestimonialCard
- FAQItem
- TimelineItem

Todo nuevo componente deberá reutilizar estos elementos cuando sea posible para mantener la coherencia visual.

---

# Consistencia

Antes de crear un nuevo componente se deberá verificar:

- ¿Ya existe uno similar?
- ¿Puede reutilizarse?
- ¿Respeta la identidad visual?
- ¿Mantiene la jerarquía tipográfica?
- ¿Utiliza correctamente la paleta de colores?
- ¿Es responsive?
- ¿Es accesible?

La prioridad siempre será reutilizar antes que crear nuevos componentes.

# Tokens de diseño

## Colores

primary-500

secondary-500

neutral-900

...

## Espaciados

space-1
space-2
space-4
space-6
space-8

## Radius

rounded-sm
rounded-md
rounded-xl

## Sombras

shadow-sm
shadow-md
shadow-lg

## Duraciones

150ms
300ms
500ms