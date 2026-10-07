'use client'

import { useEffect, useState } from 'react'
import { Reveal } from '@/components/reveal'
import { ProductCard } from '@/components/product-card'
import { categories, products, type CategoryId } from '@/lib/site-data'
import { cn } from '@/lib/utils'

type Filter = CategoryId | 'todos'

const filters: { id: Filter; label: string }[] = [
  { id: 'todos', label: 'Todos' },
  ...categories.map((c) => ({ id: c.id, label: c.name })),
]

function readFilterFromUrl(): Filter {
  const value = new URLSearchParams(window.location.search).get('categoria')
  return filters.some((f) => f.id === value) ? (value as Filter) : 'todos'
}

export function ProductsSection() {
  const [active, setActive] = useState<Filter>('todos')

  useEffect(() => {
    const sync = () => setActive(readFilterFromUrl())
    sync()
    window.addEventListener('popstate', sync)
    return () => window.removeEventListener('popstate', sync)
  }, [])

  function select(filter: Filter) {
    setActive(filter)
    const url = new URL(window.location.href)
    if (filter === 'todos') url.searchParams.delete('categoria')
    else url.searchParams.set('categoria', filter)
    window.history.replaceState(null, '', url)
  }

  const visible = active === 'todos' ? products : products.filter((p) => p.category === active)

  return (
    <section id="productos" className="scroll-mt-20 bg-secondary/60 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-primary">Productos</p>
            <h2 className="mt-4 text-balance font-serif text-4xl font-semibold leading-tight text-foreground md:text-5xl">
              Nuestro catálogo
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            Elegí tu producto y consultanos por WhatsApp. Te respondemos a la brevedad.
          </p>
        </Reveal>

        <div
          role="group"
          aria-label="Filtrar por categoría"
          className="-mx-5 mt-10 flex gap-2 overflow-x-auto px-5 pb-2 md:mx-0 md:flex-wrap md:px-0"
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              type="button"
              aria-pressed={active === filter.id}
              onClick={() => select(filter.id)}
              className={cn(
                'shrink-0 rounded-full border px-5 py-2 text-sm font-medium transition-colors',
                active === filter.id
                  ? 'border-primary bg-primary text-primary-foreground'
                  : 'border-border bg-background text-foreground hover:border-primary/50',
              )}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <ul className="mt-8 grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4" aria-live="polite">
          {visible.map((product) => (
            <li key={product.id} className="animate-fade-up">
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
