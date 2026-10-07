import Image from 'next/image'
import { Reveal } from '@/components/reveal'
import { categories } from '@/lib/site-data'

export function CategoriesSection() {
  return (
    <section id="categorias" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-primary">Categorías</p>
          <h2 className="mt-4 text-balance font-serif text-4xl font-semibold leading-tight text-foreground md:text-5xl">
            Todo lo que tu casa necesita
          </h2>
        </Reveal>

        <ul className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {categories.map((category, i) => (
            <li key={category.id} className={i === 0 ? 'col-span-2 md:col-span-1' : undefined}>
              <Reveal delay={i * 80} className="h-full">
                <a
                  href={`?categoria=${category.id}#productos`}
                  className="group relative block aspect-[4/5] overflow-hidden rounded-2xl bg-secondary"
                >
                  <Image
                    src={category.image || '/placeholder.svg'}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 20vw, (min-width: 768px) 33vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/75 via-foreground/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-4 md:p-5">
                    <h3 className="font-serif text-xl font-semibold leading-tight text-primary-foreground md:text-2xl">{category.name}</h3>
                    <p className="mt-1 hidden text-sm leading-snug text-primary-foreground/85 sm:block">{category.description}</p>
                  </div>
                </a>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
