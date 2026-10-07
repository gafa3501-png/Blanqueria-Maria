import { MessageCircle } from 'lucide-react'
import { BUSINESS_NAME, navLinks, whatsappLink } from '@/lib/site-data'

export function SiteFooter() {
  return (
    <>
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-serif text-2xl font-semibold text-foreground">{BUSINESS_NAME}</p>
            <p className="text-sm text-muted-foreground">Blanquería familiar · Textiles para el hogar</p>
          </div>
          <nav aria-label="Pie de página">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-primary">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <p className="pb-8 text-center text-xs text-muted-foreground">
          {`© ${new Date().getFullYear()} ${BUSINESS_NAME}. Todos los derechos reservados.`}
        </p>
      </footer>

      <a
        href={whatsappLink('¡Hola! Quiero hacer una consulta.')}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-foreground/20 transition-transform hover:scale-105"
      >
        <MessageCircle className="size-6" aria-hidden />
        <span className="sr-only">Escribinos por WhatsApp</span>
      </a>
    </>
  )
}
