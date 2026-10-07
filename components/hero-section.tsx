import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { whatsappLink } from '@/lib/site-data'

export function HeroSection() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 md:grid-cols-2 md:gap-14 md:py-24">
        <div className="animate-fade-up">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-primary">Blanquería familiar</p>
          <h1 className="mt-5 text-balance font-serif text-5xl font-semibold leading-[1.05] text-foreground md:text-6xl lg:text-7xl">
            Calidez y confort para cada rincón de tu hogar
          </h1>
          <p className="mt-6 max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
            Sábanas, frazadas, toallas, cortinas, manteles y mucho más. Productos de calidad a precios
            accesibles, con atención cercana.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#productos"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Ver productos
              <ArrowRight className="size-4" aria-hidden />
            </a>
            <a
              href={whatsappLink('¡Hola! Quiero hacer una consulta.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border border-foreground/20 px-7 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              Escribinos por WhatsApp
            </a>
          </div>
        </div>

        <div className="animate-fade-up relative [animation-delay:150ms]">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-secondary md:aspect-[5/6]">
            <Image
              src="/hero.png"
              alt="Dormitorio cálido con sábanas blancas, cubrecama beige y almohadas"
              fill
              priority
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-5 left-5 rounded-2xl bg-card px-5 py-4 shadow-lg shadow-foreground/5 md:-left-8">
            <p className="font-serif text-2xl font-semibold text-foreground">Envíos y puntos de entrega</p>
            <p className="text-sm text-muted-foreground">Celina · Constitución</p>
          </div>
        </div>
      </div>
    </section>
  )
}
