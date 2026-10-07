import { MapPin, Truck } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { deliveryPoints, mapEmbedUrl, mapLinkUrl, storeLocation } from '@/lib/site-data'

export function LocationSection() {
  return (
    <section id="ubicacion" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-primary">Ubicación y entregas</p>
          <h2 className="mt-4 text-balance font-serif text-4xl font-semibold leading-tight text-foreground md:text-5xl">
            Encontranos o retirá cerca tuyo
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <div className="overflow-hidden rounded-3xl border border-border bg-card">
              <iframe
                title="Mapa de la ubicación de Blanquería María"
                src={mapEmbedUrl(storeLocation)}
                className="aspect-[4/3] w-full border-0 lg:aspect-[16/11]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="flex flex-wrap items-center justify-between gap-3 p-5">
                <p className="flex items-center gap-2 font-medium text-foreground">
                  <MapPin className="size-5 text-primary" aria-hidden />
                  Nuestra blanquería
                </p>
                <a
                  href={mapLinkUrl(storeLocation)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-primary underline-offset-4 hover:underline"
                >
                  Abrir en Google Maps
                </a>
              </div>
            </div>
          </Reveal>

          <div className="flex flex-col gap-6 lg:col-span-2">
            <Reveal delay={100} className="rounded-3xl bg-accent p-7 text-accent-foreground">
              <Truck className="size-7" aria-hidden />
              <h3 className="mt-4 font-serif text-3xl font-semibold">Hacemos envíos</h3>
              <p className="mt-2 leading-relaxed">
                Coordinamos tu pedido por WhatsApp y también podés retirarlo en nuestros puntos de entrega.
              </p>
            </Reveal>

            {deliveryPoints.map((point, i) => (
              <Reveal key={point.name} delay={180 + i * 80}>
                <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5">
                  <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                    <MapPin className="size-6" aria-hidden />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Punto de entrega</p>
                    <p className="font-serif text-2xl font-semibold text-foreground">{point.name}</p>
                    <a
                      href={mapLinkUrl(point)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-primary underline-offset-4 hover:underline"
                    >
                      Ver en el mapa
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
