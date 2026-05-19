// ─── Business ─────────────────────────────────────────────────────────────────
export const BUSINESS = {
  name:            'Pedro de las Cuevas Fisioterapia',
  shortName:       'Pedro de las Cuevas',
  phone:           '659 83 58 00',
  phoneHref:       'tel:+34659835800',
  whatsappHref:    'https://wa.me/34659835800?text=Hola%20Pedro%2C%20me%20gustar%C3%ADa%20pedir%20cita',
  email:           'contacto@pedrofisioterapia.es',
  emailHref:       'mailto:contacto@pedrofisioterapia.es',
  address: {
    street:   'Sector Foresta, 35',
    city:     'Tres Cantos',
    province: 'Madrid',
    zip:      '28760',
    full:     'Sector Foresta, 35, 28760 Tres Cantos, Madrid',
  },
  googleMapsUrl:    'https://maps.google.com/?q=Sector+Foresta+35+28760+Tres+Cantos+Madrid',
  googleReviewsUrl: 'https://search.google.com/local/reviews?placeid=PLACEHOLDER',
  rating:           5.0,
  reviewCount:      9,
  priceRange:       '€€',
  colegiadoNum:     'M-XXXX',
  geo:              { lat: 40.602, lng: -3.702 },
} as const

// ─── Images (Google Business) ─────────────────────────────────────────────────
export const IMAGES = {
  logo:       'https://lh3.googleusercontent.com/p/AF1QipMeTCCEs4RTrfz6zjM9KZuQe9i8XIKsVJmURtcv=s720-k-no',
  heroMasaje: 'https://lh3.googleusercontent.com/p/AF1QipOYxk_M9zriorIfotpUo1dukd2KWxdtaWqABr_6=s720-k-no',
  pedroPerfil:'https://lh3.googleusercontent.com/p/AF1QipNDSOWkS2kMIu2V7pfQFUA9qHJx7jZVpLmNwzuk=s544-k-no',
  pedroEcografo:'https://lh3.googleusercontent.com/p/AF1QipN1_ZPWwUaRcpXYxaNYjP1pYM-iEqMiZPN-wcr8=s720-k-no',
  pedroConsulta:'https://lh3.googleusercontent.com/p/AF1QipMAaFPHwF9hjeHigzfAIR5a9HBqM1qfDcevqT_S=s720-k-no',
} as const

// ─── Schedule ─────────────────────────────────────────────────────────────────
export const SCHEDULE = [
  { day: 'Lunes',          hours: '12:00–14:00 · 16:00–21:00', closed: false },
  { day: 'Martes',         hours: '12:00–14:00 · 16:00–20:00', closed: false },
  { day: 'Miércoles',      hours: '12:00–14:00 · 16:00–20:00', closed: false },
  { day: 'Jueves',         hours: '12:00–14:00 · 16:00–21:00', closed: false },
  { day: 'Viernes',        hours: '16:00–21:00',                closed: false },
  { day: 'Sábado–domingo', hours: 'Cerrado',                    closed: true  },
] as const

// ─── Navigation ───────────────────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: 'Especialidades',    href: '#especialidades' },
  { label: 'Sobre Pedro',       href: '#sobre-pedro' },
  { label: 'Testimonios',       href: '#testimonios' },
  { label: 'FAQ',               href: '#faq' },
  { label: 'Contacto',          href: '#contacto' },
] as const

// ─── Diferenciadores ──────────────────────────────────────────────────────────
export const DIFERENCIADORES = [
  {
    icon: 'search',
    title: 'Diagnóstico preciso',
    body: 'Encontramos la causa real del problema. Sin eso, cualquier tratamiento es un disparo en la oscuridad.',
  },
  {
    icon: 'user-check',
    title: 'Sin protocolos genéricos',
    body: 'Cada caso es diferente. El tratamiento se adapta a ti, no al revés.',
  },
  {
    icon: 'dumbbell',
    title: 'Ejercicios para casa',
    body: 'La recuperación no acaba cuando sales de consulta. Sales con un plan claro de lo que hacer.',
  },
  {
    icon: 'clock',
    title: 'Solo un paciente a la vez',
    body: 'Atención completa y sin interrupciones. Tu sesión es tuya al 100%.',
  },
] as const

// ─── Precios ──────────────────────────────────────────────────────────────────
export const PRECIOS = [
  {
    label: 'Sesión individual',
    price: '50€',
    description: 'Tras el diagnóstico, este tratamiento está basado íntegramente en terapia manual avanzada y trabajo con el paciente.',
    note: null,
    highlighted: false,
    ctaLabel: 'Cita Online',
    ctaType: 'whatsapp' as const,
  },
  {
    label: 'Bono de 5 sesiones',
    price: '220€',
    description: 'Comprando nuestro bono de 5 sesiones, lograrás un descuento de 5€ en cada una de tus citas.',
    note: '*Válido durante un año desde la fecha de compra',
    highlighted: true,
    ctaLabel: 'Llámanos',
    ctaType: 'phone' as const,
  },
] as const

// ─── Especialidades ───────────────────────────────────────────────────────────
export const ESPECIALIDADES = [
  {
    icon:  'activity',
    title: 'Fisioterapia Deportiva',
    body:  'LCA, meniscos, esguinces, rotura de fibras. Protocolo progresivo desde la fase aguda hasta la vuelta completa al deporte.',
  },
  {
    icon:  'refresh-cw',
    title: 'Rehabilitación Postquirúrgica',
    body:  'Recuperación tras cirugía de rodilla, hombro o columna. Plan de readaptación gradual y seguro para recuperar la funcionalidad plena.',
  },
  {
    icon:  'zap',
    title: 'Lesiones de Rodilla y Hombro',
    body:  'Condromalacia, cintilla iliotibial, manguito rotador, impingement. Diagnóstico diferencial preciso para tratar la causa, no el síntoma.',
  },
  {
    icon:  'scan',
    title: 'Ecografía y Diagnóstico',
    body:  'Exploración ecográfica para ver en tiempo real tendones, músculos y ligamentos. Diagnóstico más preciso, tratamiento más efectivo.',
  },
  {
    icon:  'dumbbell',
    title: 'Ejercicio Terapéutico',
    body:  'Pauta de ejercicios específica para tu lesión y tu actividad. Aprendes a moverte mejor para que el problema no vuelva a aparecer.',
  },
  {
    icon:  'shield',
    title: 'Dolor Lumbar y Cervical',
    body:  'Dolor de espalda agudo o crónico, contracturas, hernias. Tratamiento manual más ejercicio personalizado para una recuperación duradera.',
  },
] as const

// ─── Sobre Pedro ──────────────────────────────────────────────────────────────
export const ABOUT = {
  paragraphs: [
    'Llevo años acompañando a deportistas y familias de Tres Cantos con un mismo enfoque: no solo aliviar el dolor, sino entender por qué apareció y darte las herramientas para que no vuelva.',
    'Me especialicé en fisioterapia deportiva y traumatológica porque creo que el diagnóstico preciso es la mitad del tratamiento. Combino terapia manual con ecografía diagnóstica y ejercicio terapéutico para que el progreso continúe también en casa.',
    'Cada sesión termina con un plan claro: qué hacer, cómo hacerlo y cuándo. La recuperación no acaba cuando sales de la consulta.',
  ],
} as const

// ─── Testimonios (reseñas reales de Google) ───────────────────────────────────
export const TESTIMONIOS = [
  {
    name:    'Alejandro Curto Alaiz',
    timeAgo: 'hace 4 meses',
    stars:   5,
    quote:   'Llevé con Pedro mi recuperación del LCA. En vez de ir por el seguro, fue todo un acierto. Tras 8 meses de mucho trabajo volví a jugar al baloncesto. Lo recomiendo enormemente.',
    featured: true,
  },
  {
    name:    'Silvia Aguado',
    timeAgo: 'hace 2 años',
    stars:   5,
    quote:   'Fui al médico y a otro fisio pero no conseguían averiguar el por qué de mi dolor de rodilla. En la primera consulta, Pedro ya sabía qué me ocurría y nunca más me dio problemas.',
    featured: false,
  },
  {
    name:    'Rodrigo Ortiz',
    timeAgo: 'hace 1 año',
    stars:   5,
    quote:   'De los mejores encontrando la causa raíz de los dolores. Explica todos los detalles al paciente y enseña los ejercicios de rehabilitación a la perfección.',
    featured: false,
  },
  {
    name:    'Daniel Lozano González',
    timeAgo: 'hace 2 años',
    stars:   5,
    quote:   'Tuve la suerte de toparme con Pedro cuando me hice un esguince. No solo por el trato personal y profesional, también por los consejos y ejercicios para fortalecer y evitar recaídas.',
    featured: false,
  },
  {
    name:    'Diego Pérez',
    timeAgo: 'hace 1 año',
    stars:   5,
    quote:   'Profesional y simpático. Buena sesión y con explicación detallada de ejercicios para hacer en casa.',
    featured: false,
  },
  {
    name:    'Miriam Izquierdo',
    timeAgo: 'hace 2 años',
    stars:   5,
    quote:   'Tratamiento de dolor de hombro enfocado a fortalecer para continuar la práctica deportiva. Muy satisfecha con el resultado.',
    featured: false,
  },
  {
    name:    'M.',
    timeAgo: 'hace 1 año',
    stars:   5,
    quote:   'Gran profesional. Busca ejercicios con los que estés a gusto y te explica todo de manera que lo entiendas.',
    featured: false,
  },
  {
    name:    'Pablo Cascio',
    timeAgo: 'hace 2 años',
    stars:   5,
    quote:   'Mi fisio y el de mi familia desde hace años. Sin duda lo mejor de Tres Cantos.',
    featured: false,
  },
] as const

// ─── FAQ ──────────────────────────────────────────────────────────────────────
export const FAQ_ITEMS = [
  {
    q: '¿Tratáis lesiones deportivas complejas como el LCA o esguinces?',
    a: 'Sí. Contamos con protocolos específicos de readaptación para lesiones como el ligamento cruzado anterior, roturas de menisco o esguinces de tobillo, desde la fase aguda hasta la vuelta completa al deporte con fortalecimiento preventivo.',
  },
  {
    q: '¿Cuál es vuestro método de trabajo?',
    a: 'Nos enfocamos en encontrar la causa raíz del dolor, no en tapar el síntoma. Combinamos terapia manual, ecografía diagnóstica y ejercicio terapéutico personalizado. Cada sesión termina con un plan de ejercicios para casa porque la recuperación no acaba en la consulta.',
  },
  {
    q: '¿Cuánto dura una sesión?',
    a: 'La primera consulta dura aproximadamente 60 minutos: entrevista clínica, valoración física completa y tratamiento. Las sesiones de seguimiento suelen durar entre 45 y 60 minutos.',
  },
  {
    q: '¿Dónde está ubicada la clínica?',
    a: 'En Sector Foresta, 35, 28760 Tres Cantos, Madrid. Atendemos a pacientes de Tres Cantos y toda la zona norte de Madrid.',
  },
  {
    q: '¿Trabajáis con mutuas o seguros médicos?',
    a: 'Actualmente trabajamos en consulta privada. Si tienes seguro médico, consúltanos antes de venir y lo valoramos juntos.',
  },
  {
    q: '¿Cuántas sesiones serán necesarias?',
    a: 'Depende del tipo de lesión, el tiempo de evolución y tu ritmo de recuperación. Lo valoramos en la primera consulta y te damos una estimación honesta: sin más sesiones de las necesarias ni promesas de soluciones en una sola.',
  },
] as const
