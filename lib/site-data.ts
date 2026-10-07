export const BUSINESS_NAME = 'Blanquería María'

/**
 * El sitio original muestra WhatsApp y Gmail como medios de contacto sin publicar
 * el número ni la dirección. Completá estos valores para activar los enlaces directos.
 * WHATSAPP_NUMBER: formato internacional sin "+" ni espacios (ej. 5491112345678).
 */
export const WHATSAPP_NUMBER = ''
export const EMAIL = ''

export function whatsappLink(message: string) {
  const text = encodeURIComponent(message)
  return WHATSAPP_NUMBER
    ? `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`
    : `https://wa.me/?text=${text}`
}

export type CategoryId = 'cama' | 'bano' | 'cortinas' | 'frazadas' | 'cocina'

export type Category = {
  id: CategoryId
  name: string
  description: string
  image: string
}

export const categories: Category[] = [
  {
    id: 'cama',
    name: 'Ropa de cama',
    description: 'Sábanas, cubrecamas, almohadas y fundas.',
    image: '/products/cubrecama.png',
  },
  {
    id: 'bano',
    name: 'Ropa de baño',
    description: 'Batas y toallas suaves para todos los días.',
    image: '/products/toallas.png',
  },
  {
    id: 'cortinas',
    name: 'Cortinas',
    description: 'Luz y calidez para cada ambiente.',
    image: '/products/cortina.png',
  },
  {
    id: 'frazadas',
    name: 'Frazadas',
    description: 'Abrigo y comodidad para tus noches.',
    image: '/products/frazada.png',
  },
  {
    id: 'cocina',
    name: 'Cocina y mantelería',
    description: 'Manteles, repasadores, guantes y delantales.',
    image: '/products/manteles.png',
  },
]

export type Product = {
  id: string
  name: string
  price: number
  category: CategoryId
  image: string
}

export const products: Product[] = [
  { id: 'bata', name: 'Bata', price: 20000, category: 'bano', image: '/products/bata.png' },
  { id: 'toallas', name: 'Toallas', price: 8000, category: 'bano', image: '/products/toallas.png' },
  { id: 'cortina', name: 'Cortina', price: 10000, category: 'cortinas', image: '/products/cortina.png' },
  { id: 'frazada', name: 'Frazada', price: 20000, category: 'frazadas', image: '/products/frazada.png' },
  { id: 'cubrecama', name: 'Cubrecama', price: 12000, category: 'cama', image: '/products/cubrecama.png' },
  { id: 'almohada', name: 'Almohada', price: 18000, category: 'cama', image: '/products/almohada.png' },
  { id: 'sabana', name: 'Sábana', price: 12000, category: 'cama', image: '/products/sabana.png' },
  { id: 'fundas', name: 'Fundas para almohadas', price: 8000, category: 'cama', image: '/products/fundas.png' },
  { id: 'manteles', name: 'Manteles', price: 12000, category: 'cocina', image: '/products/manteles.png' },
  { id: 'guantes', name: 'Guantes de cocina', price: 12000, category: 'cocina', image: '/products/guantes.png' },
  { id: 'repasadores', name: 'Repasadores', price: 5000, category: 'cocina', image: '/products/repasadores.png' },
  { id: 'delantales', name: 'Delantales de cocina', price: 10000, category: 'cocina', image: '/products/delantales.png' },
]

export function formatPrice(value: number) {
  return `$${value.toLocaleString('es-AR')}`
}

export type MapPoint = {
  name: string
  lat: number
  lng: number
  zoom: number
}

export const storeLocation: MapPoint = {
  name: 'Blanquería María',
  lat: -34.677193,
  lng: -58.467288,
  zoom: 17,
}

export const deliveryPoints: MapPoint[] = [
  { name: 'Celina', lat: -34.700472, lng: -58.482449, zoom: 16 },
  { name: 'Constitución', lat: -34.628304, lng: -58.380529, zoom: 16 },
]

export function mapEmbedUrl({ lat, lng, zoom }: MapPoint) {
  return `https://maps.google.com/maps?q=${lat},${lng}&z=${zoom}&output=embed`
}

export function mapLinkUrl({ lat, lng }: MapPoint) {
  return `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`
}

export const navLinks = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#productos', label: 'Productos' },
  { href: '#categorias', label: 'Categorías' },
  { href: '#ubicacion', label: 'Ubicación' },
  { href: '#contacto', label: 'Contacto' },
]
