// Enlace oficial de Pomelostour en Google (ficha de la empresa).
export const GOOGLE_PROFILE_URL = "https://g.co/kgs/Ab9DWsp";

// Si en el futuro se obtiene el enlace directo "Escribir una reseña"
// (https://search.google.com/local/writereview?placeid=...), reemplazarlo acá.
export const GOOGLE_WRITE_REVIEW_URL = GOOGLE_PROFILE_URL;

// Reseñas verificadas. Cargar SOLO reseñas reales, copiando el texto original
// sin modificarlo. No inventar ni completar datos faltantes.
//
// Campos:
//   author     (obligatorio) Nombre público tal como aparece en la plataforma.
//   rating     (obligatorio) Puntuación real, número entero de 1 a 5.
//   text       (obligatorio) Texto original de la reseña. Los saltos de línea (\n) se respetan.
//   dateLabel  (opcional)    Fecha tal como la muestra Google, por ejemplo "hace 7 meses".
//   date       (opcional)    Fecha exacta "AAAA-MM-DD" o "AAAA-MM", si se conoce. Si existe
//                            dateLabel, se muestra dateLabel.
//   url        (opcional)    Enlace a la reseña original o al perfil del autor.
//   source     (obligatorio) "google" si proviene de Google; cualquier otro valor
//                            (por ejemplo "tripadvisor") no muestra la marca de Google.
//
// Fuente de las reseñas actuales: capturas de la ficha de Google de Pomelostour
// (fechas relativas tomadas en octubre de 2026).
export const reviews = [
  {
    author: "Carolina Lazzaroni",
    rating: 5,
    dateLabel: "hace 7 meses",
    source: "google",
    text: "Excelente experiencia!! Te llevan hasta la base (que es un hermoso lugar), a nosotras nos tocó Lucas como guía y chofer, ya ahí hay unos paisajes soñados. A la llegada de la base, ya te reciben super cálido (gracias Andrea!), hasta ofrecen protectores de lentes/anteojos de sol. Los trajes de neoprene y las rompevientos ayudan muchísimo para tirarse al Río Chimehuin con mucha valentía y poco frío. Grandes fotos de Pome, y excelentes los juegos en el recorrido del río. Una hora y media, dos horas después, volvimos a la base en combi y nos recibieron con una merienda calentita. Vimos las fotos y emprendimos el regreso agotados pero con unas grandes anécdotas 💪🏻",
  },
  {
    author: "María Agustina Artana",
    rating: 5,
    dateLabel: "hace 11 meses",
    source: "google",
    text: "Experiencia 10/10. El equipo es nuevo y de buena calidad, limpio y desinfectado. La actividad es re segura y muy divertida. La vista del volcán Lanín desde el río te vuela la cabeza. Luego de remar hay una merienda riquísima con bebidas calientes y un paisaje espectacular desde la cabaña. En el grupo había chicos de todas las edades y la pasaron súper bien. Recomiendo.",
  },
  {
    author: "Agus Holman",
    rating: 5,
    dateLabel: "hace un año",
    source: "google",
    text: "Fuimos con mi bebé de 2 meses y pude realizar la actividad gracias a que me ofrecieron servicio de niñera en esas 2hs que dura la experiencia. Muchísimas gracias a Andrea y Juli muy amorosa, atenta con nosotros y con mi bebé. Me llevo experiencia inolvidable!! Todos unos genios 😍😍",
  },
  {
    author: "Aldana Robledo",
    rating: 5,
    dateLabel: "hace un año",
    source: "google",
    text: "Recomiendo al 100% para toda la familia, es una visita obligada si estás por Sanma. La actividad, son de los pocos que hacen el recorrido más largo; es muy divertida y desafiante para quien se lo proponga, el paisaje es hermoso y en determinados lugares se puede ver el imponente Lanín. Además le van sumando juegos y paradas que suman mucho <3\n\nQuiero destacar el compromiso que tiene ésta empresa por el rafting y por el disfrute de cada persona que va. Cumplieron con todas las normas de seguridad y te hacen sentir segura en todo momento. Un genio Gastón como guía por todo lo que sabe y la buena onda que le pone a todo el recorrido. Andrea y Mariano son unos divinos.\n\nQuedé muy contenta y con ganas de volver!",
  },
];
