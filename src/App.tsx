import { useEffect, useMemo, useState } from 'react'
import { externalLinks, projects, spokes, timelines } from './content'
import { applyTheme, themes, type ThemeName } from './theme'
import type { Project, TimelineGroup } from './types'

function useRoute() {
  const [path, setPath] = useState(window.location.pathname)

  useEffect(() => {
    const update = () => setPath(window.location.pathname)
    window.addEventListener('popstate', update)
    return () => window.removeEventListener('popstate', update)
  }, [])

  return { path }
}

function Link({ href, children, className = '', style }: { href: string; children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  const isExternal = href.startsWith('http') || href.startsWith('mailto:')
  if (isExternal) return <a href={href} className={className} style={style} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">{children}</a>
  return <a href={href} className={className} style={style} onClick={(event) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
    event.preventDefault()
    const destination = new URL(href, window.location.origin)
    const pathChanged = destination.pathname !== window.location.pathname
    window.history.pushState({}, '', href)
    if (pathChanged) window.dispatchEvent(new PopStateEvent('popstate'))
    window.setTimeout(() => {
      if (destination.hash) document.querySelector(destination.hash)?.scrollIntoView({ behavior: 'smooth' })
      else window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 0)
  }}>{children}</a>
}

function ThemePicker({ theme, setTheme }: { theme: ThemeName; setTheme: (value: ThemeName) => void }) {
  const isDark = theme === 'dark'
  return (
    <button
      className="theme-toggle"
      type="button"
      aria-label={isDark ? 'Switch to Heritage theme' : 'Switch to Dark theme'}
      title={isDark ? 'Heritage theme' : 'Dark theme'}
      onClick={() => setTheme(isDark ? 'signal' : 'dark')}
    >
      {isDark
        ? <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="3.7" /><path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M18.7 5.3l-1.4 1.4M6.7 17.3l-1.4 1.4" /></svg>
        : <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19.6 15.2A8.5 8.5 0 0 1 8.8 4.4 8.5 8.5 0 1 0 19.6 15.2Z" /></svg>}
    </button>
  )
}

function SocialIcon({ type }: { type: 'github' | 'linkedin' | 'medium' | 'email' }) {
  if (type === 'github') return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.8a9.2 9.2 0 0 0-2.9 17.9c.5.1.6-.2.6-.5v-1.8c-2.8.6-3.4-1.2-3.4-1.2-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 0 1.6 1.1 1.6 1.1.9 1.6 2.4 1.1 2.9.9.1-.7.4-1.1.7-1.3-2.2-.3-4.6-1.1-4.6-4.6 0-1 .4-1.9 1-2.5-.1-.3-.4-1.3.1-2.5 0 0 .8-.3 2.5 1a8.8 8.8 0 0 1 4.6 0c1.8-1.2 2.5-1 2.5-1 .5 1.2.2 2.2.1 2.5.6.7 1 1.5 1 2.5 0 3.5-2.4 4.3-4.6 4.6.4.3.7.9.7 1.7v2.6c0 .4.2.6.7.5A9.2 9.2 0 0 0 12 2.8Z" /></svg>
  if (type === 'linkedin') return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5.2 8.8v10M5.2 5.3v.1M9.7 18.8v-10M9.7 13.1c0-2.4 1.4-4.1 3.8-4.1 2.8 0 4 1.8 4 4.8v5" /></svg>
  if (type === 'medium') return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3.5 6.3h4.1l4.8 10.8 4.3-10.8h3.8M5.5 6.3v11.4M18.4 6.3v11.4M3.5 17.7h4M16.4 17.7h4" /></svg>
  return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.2" y="5.3" width="17.6" height="13.4" rx="2" /><path d="m4.2 7 7.8 6 7.8-6" /></svg>
}

function Header({ theme, setTheme }: { theme: ThemeName; setTheme: (value: ThemeName) => void }) {
  return (
    <header className="site-header">
      <Link href="/" className="brand"><span className="brand-mark">DM</span><span>Daev Mithran</span></Link>
      <nav className="social-nav" aria-label="Social links">
        <a href={externalLinks.github} target="_blank" rel="noreferrer" aria-label="GitHub" title="GitHub"><SocialIcon type="github" /></a>
        <a href={externalLinks.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn"><SocialIcon type="linkedin" /></a>
        <a href={externalLinks.medium} target="_blank" rel="noreferrer" aria-label="Medium" title="Medium"><SocialIcon type="medium" /></a>
        <a href={externalLinks.email} aria-label="Email" title="Email"><SocialIcon type="email" /></a>
      </nav>
      <div className="header-tools">
        <ThemePicker theme={theme} setTheme={setTheme} />
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div><span className="section-index">END / 2026</span><h2>Let’s build systems worth trusting.</h2></div>
    </footer>
  )
}

function Hub() {
  const [scopeId, setScopeId] = useState<string | null>(null)
  const scope = spokes.find((spoke) => spoke.id === scopeId)
  const scopeProjects = scope ? projects.filter((project) => project.spokes.includes(scope.id)) : []

  return (
    <div className="hub-shell">
      <div className={`hub-map ${scope ? 'scope-mode' : ''} ${scopeProjects.length > 6 ? 'scope-mode-dense' : ''}`} aria-label={scope ? `Projects in ${scope.label}` : 'Areas of work'}>
        <div className="orbit orbit-one" /><div className="orbit orbit-two" />
        {scope ? <>
          <button className="hub-back" type="button" onClick={() => setScopeId(null)}><span aria-hidden="true">←</span> Main hub</button>
          <div className="hub-core scope-core"><small>Selected scope</small><strong>{scope.shortLabel}</strong></div>
          <div className="scope-count">{scopeProjects.length} {scopeProjects.length === 1 ? 'project' : 'projects'}</div>
          {scopeProjects.map((project, index) => {
            const dense = scopeProjects.length > 6
            const angle = -90 + (360 / scopeProjects.length) * index
            const radians = (angle * Math.PI) / 180
            const radius = dense ? 38 : scopeProjects.length === 1 ? 31 : 36
            const x = 50 + Math.cos(radians) * radius
            const y = 52 + Math.sin(radians) * radius
            return <Link href={`/work/${project.slug}`} key={project.slug} className="project-spoke" style={{ left: `${x}%`, top: `${y}%` }}><small>{project.year}</small><span>{project.title}</span><i aria-hidden="true">↗</i></Link>
          })}
        </> : <>
          <div className="hub-core"><span>Trusted</span><strong>systems</strong></div>
          {spokes.map((spoke) => {
          const radians = (spoke.angle * Math.PI) / 180
          const x = 50 + Math.cos(radians) * spoke.radius
          const y = 50 + Math.sin(radians) * spoke.radius
          return <button key={spoke.id} className={`spoke spoke-${spoke.id}`} style={{ left: `${x}%`, top: `${y}%` }} onClick={() => setScopeId(spoke.id)}><span>{spoke.shortLabel}</span><small>{spoke.description}</small></button>
          })}
        </>}
      </div>
    </div>
  )
}

function ProjectCard({ project, index, compact = false }: { project: Project; index: number; compact?: boolean }) {
  return (
    <article className={`project-card ${compact ? 'project-card-compact' : ''}`}>
      {!compact && <Link href={`/work/${project.slug}`} className="project-image-wrap">
          <img src={project.image} alt={project.imageAlt} className="project-image" />
          <span className="project-number">{String(index + 1).padStart(2, '0')}</span>
        </Link>}
      <div className="project-meta"><span>{project.eyebrow}</span><span>{project.year}</span></div>
      <h3><Link href={`/work/${project.slug}`}>{project.title}<i aria-hidden="true">↗</i></Link></h3>
      <p>{project.summary}</p>
      {!compact && <div className="tag-row">{project.technologies.slice(0, 3).map((tag) => <span key={tag}>{tag}</span>)}</div>}
    </article>
  )
}

function FeaturedProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className={`featured-card featured-card-${index + 1}`}>
      <Link href={`/work/${project.slug}`} className="featured-visual">
        <img src={project.image} alt={project.imageAlt} />
        <span>{String(index + 1).padStart(2, '0')}</span>
      </Link>
      <div className="featured-copy">
        <div className="project-meta"><span>{project.eyebrow}</span><span>{project.year}</span></div>
        <h3><Link href={`/work/${project.slug}`}>{project.title}<i aria-hidden="true">↗</i></Link></h3>
        <p>{project.summary}</p>
        <div className="tag-row">{project.technologies.slice(0, 2).map((tag) => <span key={tag}>{tag}</span>)}</div>
      </div>
    </article>
  )
}

function PublicIcon({ type }: { type: 'code' | 'speak' | 'write' }) {
  if (type === 'code') return <svg viewBox="0 0 48 48" aria-hidden="true"><path d="m18 14-10 10 10 10M30 14l10 10-10 10M27 8l-6 32" /></svg>
  if (type === 'speak') return <svg viewBox="0 0 48 48" aria-hidden="true"><path d="M14 18a10 10 0 0 1 20 0c0 7-5 10-10 10S14 25 14 18Z" /><path d="M24 28v9M17 41h14M9 17v3M39 17v3M12 9l-2-2M36 9l2-2" /></svg>
  return <svg viewBox="0 0 48 48" aria-hidden="true"><path d="M12 7h20l5 5v29H12Z" /><path d="M32 7v6h5M18 21h13M18 27h13M18 33h8" /></svg>
}

function HomePage() {
  const featured = projects.filter((project) => project.featured)
  return (
    <main>
      <section className="hero">
        <div className="hero-copy">
          <span className="section-index">Hello — I’m Daev Mithran</span>
          <h1 className="hero-role">Software engineer working across identity, payments, blockchain and AI agents.</h1>
          <p className="hero-intro">For 6+ years, I’ve shipped production infrastructure, contributed to open-source protocols and shared what I learned through writing and speaking.</p>
          <div className="hero-actions"><Link href="/work" className="button primary">Explore my work</Link><Link href="/journey" className="button">Journey</Link></div>
        </div>
        <Hub />
      </section>

      <section className="work-section" id="work">
        <header className="section-heading"><div><span className="section-index">Selected work</span><h2>Featured work</h2></div><p>Production case studies across agents, payments, identity and distributed systems.</p></header>
        <div className="featured-showcase">{featured.slice(0, 3).map((project, index) => <FeaturedProjectCard project={project} index={index} key={project.slug} />)}</div>
        <div className="section-link"><Link href="/work">View the complete work index →</Link></div>
      </section>

      <section className="public-section" id="public-work">
        <span className="section-index">03 / PUBLIC PRACTICE</span>
        <div className="public-grid">
          <article><div className="public-card-top"><span>01</span><PublicIcon type="code" /></div><h3>Open source</h3><p>Specifications, upstream integrations and tools across OpenWallet Foundation, OpenClaw, Cosmos and Polkadot ecosystems.</p><a href={externalLinks.github} target="_blank" rel="noreferrer">Browse GitHub ↗</a></article>
          <article><div className="public-card-top"><span>02</span><PublicIcon type="speak" /></div><h3>Speaking</h3><p>Selected UbuCon 2026 speaker on bounded authorization for autonomous agents, with more talks to come.</p><Link href="/journey#recognition">See recognition →</Link></article>
          <article><div className="public-card-top"><span>03</span><PublicIcon type="write" /></div><h3>Writing & advisory</h3><p>Technical articles, authentication and security consulting, interview design and practical engineering challenges.</p><a href={externalLinks.medium} target="_blank" rel="noreferrer">Read on Medium ↗</a></article>
        </div>
      </section>

      <section className="journey-cta">
        <div><span className="section-index">04 / THE THREAD</span><h2>There’s a thread through all of it.</h2></div>
        <div className="journey-cta-copy"><span className="journey-years">2016 — now</span><p>Physics, identity, distributed systems, payments and agents aren’t separate chapters. The journey shows how one question kept leading to the next.</p><Link href="/journey" className="button primary">Follow the full journey →</Link></div>
      </section>
    </main>
  )
}

function packTimeline(group: TimelineGroup) {
  const rowEnds: number[] = []
  return [...group.items]
    .sort((a, b) => a.startYear - b.startYear || a.endYear - b.endYear)
    .map((item) => {
      let row = rowEnds.findIndex((end) => end <= item.startYear)
      if (row === -1) {
        row = rowEnds.length
        rowEnds.push(item.endYear)
      } else rowEnds[row] = item.endYear
      return { item, row: row + 1 }
    })
}

function TimelineSection({ group }: { group: TimelineGroup }) {
  const packedItems = packTimeline(group)
  const years = [2016, 2018, 2020, 2022, 2024, 2026]

  return (
    <section className="timeline-group" id={group.id}>
      <header><div><span className="section-index">{group.label}</span><h2>{group.label}</h2></div><p>{group.introduction}</p></header>
      <div className={`timeline-board timeline-board-${group.id}`}>
        <div className="timeline-axis" aria-hidden="true">
          {years.map((year) => <span key={year} style={{ gridColumn: year - 2016 + 1 }}>{year}</span>)}
        </div>
        <div className="timeline-grid">
          {packedItems.map(({ item, row }) => {
            const start = Math.max(2016, item.startYear) - 2016 + 1
            const end = Math.min(2027, item.endYear) - 2016 + 1
            const className = `timeline-block ${item.projectSlug ? 'timeline-block-linked' : ''} ${item.startYear >= 2026 && group.id !== 'recognition' ? 'timeline-block-end' : ''}`
            const style = { gridColumn: `${start} / ${Math.max(start + 1, end)}`, gridRow: row }
            const contents = <><time>{item.period}</time><h3>{item.title}</h3><strong>{item.subtitle}</strong><p>{item.detail}</p>{item.projectSlug && <i>Read project ↗</i>}</>
            return item.projectSlug
              ? <article className={className} style={style} key={`${item.period}-${item.title}`}><Link href={`/work/${item.projectSlug}`} className="timeline-block-link">{contents}</Link></article>
              : <article className={className} style={style} key={`${item.period}-${item.title}`}>{contents}</article>
          })}
        </div>
      </div>
    </section>
  )
}

function JourneyPage() {
  const [view, setView] = useState<'horizontal' | 'vertical'>(() => window.matchMedia('(max-width: 820px)').matches ? 'vertical' : 'horizontal')

  return (
    <main className={`journey-page journey-view-${view}`}>
      <section className="journey-intro"><span className="section-index">Journey / 2016—now</span><div><h1>My journey</h1><p>Education, professional experience and recognition—three connected timelines rather than competing résumé sections.</p><div className="journey-view-control"><span>View</span><div className="journey-view-toggle" role="group" aria-label="Journey view"><button type="button" className={view === 'horizontal' ? 'active' : ''} aria-pressed={view === 'horizontal'} onClick={() => setView('horizontal')}>Timeline</button><button type="button" className={view === 'vertical' ? 'active' : ''} aria-pressed={view === 'vertical'} onClick={() => setView('vertical')}>Story</button></div></div></div></section>
      {timelines.map((group) => <TimelineSection group={group} key={group.id} />)}
    </main>
  )
}

function WorkIndexPage() {
  const [filter, setFilter] = useState('all')
  const visible = filter === 'all' ? projects : projects.filter((project) => project.spokes.includes(filter))
  return (
    <main className="work-index-page">
      <div className="work-filters"><button className={filter === 'all' ? 'active' : ''} onClick={() => setFilter('all')}>All work</button>{spokes.map((spoke) => <button key={spoke.id} className={filter === spoke.id ? 'active' : ''} onClick={() => setFilter(spoke.id)}>{spoke.shortLabel}</button>)}</div>
      <section className="project-grid all-projects">{visible.map((project, index) => <ProjectCard project={project} index={index} key={project.slug} />)}</section>
    </main>
  )
}

function InlineArticleText({ text }: { text: string }) {
  return <>{text.split(/(\*\*.+?\*\*)/g).map((part, index) => part.startsWith('**') && part.endsWith('**')
    ? <strong key={`${part}-${index}`}>{part.slice(2, -2)}</strong>
    : part)}</>
}

function ArticleContent({ text }: { text: string }) {
  const blocks = text.trim().split(/\n\s*\n/)
  return (
    <div className="article-content">
      {blocks.map((block, index) => {
        const lines = block.split('\n').map((line) => line.trim()).filter(Boolean)
        const isList = lines.length > 0 && lines.every((line) => line.startsWith('- '))
        if (isList) return <ul key={index}>{lines.map((line) => <li key={line}><InlineArticleText text={line.slice(2)} /></li>)}</ul>
        return <p key={index}><InlineArticleText text={lines.join(' ')} /></p>
      })}
    </div>
  )
}

function WorkDetailPage({ project }: { project: Project }) {
  const overview = project.sections.map((section) => section.body).join('\n\n')

  return (
    <main className="article-page">
      <section className="article-hero">
        <div><span className="section-index">WORK / {project.year}</span><p className="article-eyebrow">{project.eyebrow}</p><h1>{project.title}</h1><p className="article-summary">{project.summary}</p><div className="article-actions">{project.repo && <a href={project.repo} target="_blank" rel="noreferrer" className="button primary">Repository ↗</a>}<Link href="/work" className="button">All work</Link></div></div>
        <img src={project.image} alt={project.imageAlt} />
      </section>
      <section className="article-body">
        <aside><div><span>Year</span><strong>{project.year}</strong></div><div><span>Areas</span>{project.spokes.map((id) => <strong key={id}>{spokes.find((spoke) => spoke.id === id)?.shortLabel}</strong>)}</div><div><span>Stack</span>{project.technologies.map((item) => <strong key={item}>{item}</strong>)}</div></aside>
        <article className="article-reading">
          {project.award && <div className="award-callout"><span>Recognition</span><strong>{project.award}</strong></div>}
          <ArticleContent text={overview} />
          <div className="article-links"><span>Sources & links</span><div>{project.links.map((link) => <a href={link.href} target="_blank" rel="noreferrer" key={link.href}>{link.label} ↗</a>)}</div></div>
        </article>
      </section>
      <section className="next-work"><span>Continue exploring</span>{projects.filter((item) => item.slug !== project.slug).slice(0, 3).map((item) => <Link href={`/work/${item.slug}`} key={item.slug}>{item.title} →</Link>)}</section>
    </main>
  )
}

function NotFoundPage() {
  return <main className="not-found"><span className="section-index">404 / LOST NODE</span><h1>This path left the network.</h1><Link href="/" className="button primary">Return to the hub</Link></main>
}

export default function App() {
  const { path } = useRoute()
  const [theme, setThemeState] = useState<ThemeName>(() => {
    const saved = localStorage.getItem('portfolio-theme')
    return saved && saved in themes ? saved as ThemeName : 'signal'
  })

  useEffect(() => applyTheme(theme), [theme])
  const setTheme = (value: ThemeName) => { setThemeState(value); localStorage.setItem('portfolio-theme', value) }

  const page = useMemo(() => {
    if (path === '/') return <HomePage />
    if (path === '/journey') return <JourneyPage />
    if (path === '/work') return <WorkIndexPage />
    if (path.startsWith('/work/')) {
      const project = projects.find((item) => item.slug === path.split('/')[2])
      return project ? <WorkDetailPage project={project} /> : <NotFoundPage />
    }
    return <NotFoundPage />
  }, [path])

  return <div className="app-shell"><Header theme={theme} setTheme={setTheme} />{page}<Footer /></div>
}
