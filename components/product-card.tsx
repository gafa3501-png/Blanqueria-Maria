import Image from 'next/image'
import { MessageCircle } from 'lucide-react'
import { formatPrice, whatsappLink, type Product } from '@/lib/site-data'

export function ProductCard({ product }: { product: Product }) {
  const price = formatPrice(product.price)

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-card shadow-sm shadow-foreground/5 transition-shadow hover:shadow-lg">
      <div className="relative aspect-square overflow-hidden bg-secondary">
        <Image
          src={product.image || '/placeholder.svg'}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 25vw, 50vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-4 md:p-5">
        <h3 className="font-serif text-xl font-semibold leading-tight text-foreground md:text-2xl">
          {product.name}
        </h3>
        <p className="mt-1 text-lg font-medium text-primary">{price}</p>
        <a
          href={whatsappLink(`¡Hola! Me interesa el producto "${product.name}" (${price}). ¿Está disponible?`)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-4 py-2.5 text-sm font-medium text-background transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          <MessageCircle className="size-4" aria-hidden />
          Consultar
          <span className="sr-only">{`por ${product.name}`}</span>
        </a>
      </div>
    </article>
  )
}
