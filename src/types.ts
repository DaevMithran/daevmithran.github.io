export type LinkItem = {
  label: string
  href: string
}

export type ProjectSection = {
  title: string
  body: string
}

export type Project = {
  slug: string
  title: string
  eyebrow: string
  year: string
  summary: string
  image: string
  imageAlt: string
  spokes: string[]
  technologies: string[]
  featured?: boolean
  award?: string
  repo?: string
  links: LinkItem[]
  sections: ProjectSection[]
}

export type Spoke = {
  id: string
  label: string
  shortLabel: string
  description: string
  angle: number
  radius: number
}

export type TimelineItem = {
  period: string
  startYear: number
  endYear: number
  title: string
  subtitle: string
  detail: string
  projectSlug?: string
}

export type TimelineGroup = {
  id: string
  label: string
  introduction: string
  items: TimelineItem[]
}
