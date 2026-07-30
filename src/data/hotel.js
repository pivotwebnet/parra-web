export const HOTEL = {
  name: "El Parra",
  fullName: "El Parra Hotel & Suites",
  stars: 3,
  city: "Rafaela",
  province: "Santa Fe",
  address: "Bv. Sta. Fe 554, S2300 Rafaela, Santa Fe",
  phones: ["+54 3492 206600", "+54 3492 433900"],
  whatsappNumber: "5493492206600",
  whatsappMessage:
    "Hola! Quiero consultar disponibilidad y precios en El Parra Hotel & Suites.",
  website: "https://hotel-parra.com.ar",
  bookingUrl:
    "https://www.booking.com/searchresults.html?ss=El+Parra+Hotel+%26+Suites+Rafaela",
  tripadvisorUrl: "https://www.tripadvisor.com.ar",
  instagramUrl: "https://www.instagram.com",
  mapEmbedUrl:
    "https://www.google.com/maps?q=Bv.+Sta.+Fe+554,+S2300+Rafaela,+Santa+Fe&output=embed",
};

export const SERVICES = [
  {
    icon: "wifi",
    title: "Wi-Fi Gratis",
    description: "Conexión de alta velocidad en todo el establecimiento.",
  },
  {
    icon: "clock",
    title: "Recepción 24 hs",
    description: "Atención personalizada las 24 horas, todos los días.",
  },
  {
    icon: "car",
    title: "Cochera Propia",
    description: "Estacionamiento sin cargo a media cuadra del hotel.",
  },
  {
    icon: "dumbbell",
    title: "Sauna & Gimnasio",
    description: "Espacio de bienestar y entrenamiento para tu descanso.",
  },
  {
    icon: "coffee",
    title: "Desayuno Americano",
    description: "Buffet completo incluido para empezar bien el día.",
  },
];

export const HOTEL_PHOTOS = [
  { src: "/images/fotohotel.jpg", alt: "Fachada de El Parra Hotel & Suites" },
  { src: "/images/tour/entrada1.jpg", alt: "Entrada principal" },
  { src: "/images/tour/auditorio.jpg", alt: "Auditorio" },
  { src: "/images/tour/pieza1.jpg", alt: "Habitación" },
  { src: "/images/tour/pieza2.jpg", alt: "Habitación" },
  { src: "/images/tour/pieza3.jpg", alt: "Habitación" },
  { src: "/images/tour/sauna.jpg", alt: "Sauna" },
  { src: "/images/tour/pool.jpg", alt: "Sala de juegos" },
];

export const TOUR_PINS = [
  {
    id: "entrada1",
    label: "Entrada Principal",
    floor: "Piso 1",
    position: [4, -3.2, 3],
    image: "/images/tour/entrada1.jpg",
  },
  {
    id: "auditorio",
    label: "Auditorio",
    floor: "Piso 1",
    position: [-2, -4.5, 1],
    image: "/images/tour/auditorio.jpg",
  },
  {
    id: "pieza1",
    label: "Habitación",
    floor: "Piso 2",
    position: [-1.8, -1.1, 2.4],
    image: "/images/tour/pieza1.jpg",
  },
  {
    id: "pieza2",
    label: "Habitación",
    floor: "Piso 2",
    position: [1.8, -1.1, 2.4],
    image: "/images/tour/pieza2.jpg",
  },
  {
    id: "pieza3",
    label: "Habitación",
    floor: "Piso 3",
    position: [5.5,1, 2],
    image: "/images/tour/pieza3.jpg",
  },
  {
    id: "sauna",
    label: "Sauna",
    floor: "Piso 3",
    position: [1.8, 3, 2],
    image: "/images/tour/sauna.jpg",
  },
  {
    id: "pool",
    label: "Sala de Juegos",
    floor: "Piso 1",
    position: [2, -3.2, -1],
    image: "/images/tour/pool.jpg",
  },
];

export const ROOM_GALLERY = [
  { src: "/images/tour/entrada1.jpg", title: "Entrada Principal" },
  { src: "/images/tour/auditorio.jpg", title: "Auditorio" },
  { src: "/images/tour/pieza1.jpg", title: "Habitación" },
  { src: "/images/tour/sauna.jpg", title: "Sauna" },
  { src: "/images/tour/pieza2.jpg", title: "Habitación" },
  { src: "/images/tour/pieza3.jpg", title: "Habitación" },
  { src: "/images/tour/pool.jpg", title: "Sala de Juegos" },
];
