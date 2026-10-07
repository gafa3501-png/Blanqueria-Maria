import { Mail, MessageCircle } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { EMAIL, whatsappLink } from '@/lib/site-data'

export function ContactSection() {
  return (
    <section id="contacto" className="scroll-mt-20 px-5 pb-20 md:pb-28">
      <Reveal className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-foreground px-6 py-14 text-center text-background md:px-16 md:py-20">
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-background/70">Contacto</p>
        <h2 className="mx-auto mt-4 max-w-2xl text-balance font-serif text-4xl font-semibold leading-tight md:text-6xl">
          ¿Tenés alguna consulta? Escribinos
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-pretty leading-relaxed text-background/75">
          Te ayudamos a elegir, te pasamos medidas y colores disponibles, y coordinamos el envío o la entrega.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={whatsappLink('¡Hola! Quiero hacer una consulta.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 font-medium text-primary-foreground transition-opacity hover:opacity-90 sm:w-auto"
          >
            <MessageCircle className="size-5" aria-hidden />
            WhatsApp
          </a>
          {EMAIL ? (
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-background/30 px-8 py-4 font-medium transition-colors hover:bg-background/10 sm:w-auto"
            >
              <Mail className="size-5" aria-hidden />
              Gmail
            </a>
          ) : (
            <p className="inline-flex items-center gap-2 px-4 py-4 text-sm text-background/70">
              <Mail className="size-5" aria-hidden />
              También por Gmail
            </p>
          )}
        </div>
      </Reveal>
    </section>
  )
}
