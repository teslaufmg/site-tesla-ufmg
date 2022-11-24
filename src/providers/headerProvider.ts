export const headerOptionsProvider: Array<{
  label: string
  to: string
  options?: {
    label: string
    to: string
  }[]
}> = [
  { label: 'História', to: '/historia' },
  {
    label: 'Protótipos',
    to: '/prototipos',
    options: [
      { label: 'NK319', to: '/prototipos/NK319' },
      { label: 'NK218', to: '/prototipos/NK218' },
      { label: 'Kayran', to: '/prototipos/Kayran' }
    ]
  },
  {
    label: 'Equipe',
    to: '/equipe/2019',
    options: [{ label: '2019', to: '/equipe/2019' }]
  },
  { label: 'Parceiros', to: '/parceiros' }
]

export const siderbarOptionsProvider = [
  { label: 'História', to: '/historia' },
  { label: 'Protótipos', to: '/prototipos' },
  { label: 'Equipe', to: '/equipe/2019' },
  { label: 'Parceiros', to: '/parceiros' },
  { label: 'Blog', to: '/blog' },
  { label: 'A competição', to: '/competicao' },
  { label: 'Galeria', to: '/galeria' },
  { label: 'Rollouts', to: '/rollouts' },
  { label: 'Loja', to: '/loja' }
]
