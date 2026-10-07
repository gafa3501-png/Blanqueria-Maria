import { HeartHandshake, Sparkles, Tag } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const values = [
  { icon: Sparkles, title: 'Calidad', text: 'Textiles elegidos para durar y sentirse bien.' },
  { icon: Tag, title: 'Precios accesibles', text: 'Confort para tu casa sin gastar de más.' },
  { icon: HeartHandshake, title: 'Atención cercana', text: 'Te asesoramos para que elijas lo mejor.' },
]

export function AboutSection() {
  return (
    <section id="nosotros" className="bg-secondary/60 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-2 md:gap-16">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-primary">Quiénes somos</p>
          <h2 className="mt-4 text-balance font-serif text-4xl font-semibold leading-tight text-foreground md:text-5xl">
            Una blanquería familiar, hecha con cariño
          </h2>
          <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
            Somos una blanquería familiar dedicada a brindar productos de calidad para el hogar. Nuestro
            objetivo es ofrecer confort, calidez y buenos precios para que cada espacio de tu casa sea más
            cómodo y agradable.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="rounded-3xl bg-card p-8 md:p-10">
            <h3 className="font-serif text-2xl font-semibold text-foreground">¿Qué es una blanquería?</h3>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Una blanquería es un comercio especializado en textiles para el hogar como sábanas,
              acolchados, frazadas, toallas, cortinas, manteles, almohadas y otros productos que hacen
              tu casa más cómoda y linda.
            </p>
          </div>
        </Reveal>

        <ul className="grid gap-4 sm:grid-cols-3 md:col-span-2">
          {values.map((value, i) => (
            <li key={value.title}>
              <Reveal delay={i * 100} className="flex h-full items-start gap-4 rounded-2xl border border-border bg-background p-6">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <value.icon className="size-5" aria-hidden />
                </span>
                <div>
                  <p className="font-medium text-foreground">{value.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{value.text}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
