export type Category = 'diamante' | 'platina' | 'ouro' | 'prata' | 'bronze' | 'parceiros' | 'apoio'

export interface PopoverProps {
  title: string
  description: string
  text: string
  to: string
  social: {
    facebook?: string
    instagram?: string
    youtube?: string
  }
}

export const parceirosProvider: {
    category: Category,
    partners: Array<{
        path: string,
      } & PopoverProps>
}[] = [
  {
    category: 'diamante',
    partners: [
      {
        path: 'weg.webp',
        title: 'WEG',
        description: 'Empresa Foda',
        text: 'Lorem Ipsum dolor sit amet, consectetur adipiscing',
        to: 'https://www.weg.net',
        social: {
          facebook: 'https://www.facebook.com',
          instagram: 'https://www.instagram.com',
          youtube: 'https://www.youtube.com'
        }
      },{
        path: 'weg.webp',
        title: 'WEG',
        description: 'Empresa Foda',
        text: 'Lorem Ipsum dolor sit amet, consectetur adipiscing',
        to: 'https://www.weg.net',
        social: {
          facebook: 'https://www.facebook.com',
          instagram: 'https://www.instagram.com',
          youtube: 'https://www.youtube.com'
        }
      },
    ]
  },{
    category: 'platina',
    partners: [
      {
        path: 'weg.webp',
        title: 'WEG',
        description: 'Empresa Foda',
        text: 'Lorem Ipsum dolor sit amet, consectetur adipiscing',
        to: 'https://www.weg.net',
        social: {
          facebook: 'https://www.facebook.com',
          instagram: 'https://www.instagram.com',
          youtube: 'https://www.youtube.com'
        }
      },{
        path: 'weg.webp',
        title: 'WEG',
        description: 'Empresa Foda',
        text: 'Lorem Ipsum dolor sit amet, consectetur adipiscing',
        to: 'https://www.weg.net',
        social: {
          facebook: 'https://www.facebook.com',
          instagram: 'https://www.instagram.com',
          youtube: 'https://www.youtube.com'
        }
      },
    ]
  },{
    category: 'ouro',
    partners: [
      {
        path: 'weg.webp',
        title: 'WEG',
        description: 'Empresa Foda',
        text: 'Lorem Ipsum dolor sit amet, consectetur adipiscing',
        to: 'https://www.weg.net',
        social: {
          facebook: 'https://www.facebook.com',
          instagram: 'https://www.instagram.com',
          youtube: 'https://www.youtube.com'
        }
      },{
        path: 'weg.webp',
        title: 'WEG',
        description: 'Empresa Foda',
        text: 'Lorem Ipsum dolor sit amet, consectetur adipiscing',
        to: 'https://www.weg.net',
        social: {
          facebook: 'https://www.facebook.com',
          instagram: 'https://www.instagram.com',
          youtube: 'https://www.youtube.com'
        }
      },{
        path: 'weg.webp',
        title: 'WEG',
        description: 'Empresa Foda',
        text: 'Lorem Ipsum dolor sit amet, consectetur adipiscing',
        to: 'https://www.weg.net',
        social: {
          facebook: 'https://www.facebook.com',
          instagram: 'https://www.instagram.com',
          youtube: 'https://www.youtube.com'
        }
      },
    ]
  },{
    category: 'prata',
    partners: [
      {
        path: 'weg.webp',
        title: 'WEG',
        description: 'Empresa Foda',
        text: 'Lorem Ipsum dolor sit amet, consectetur adipiscing',
        to: 'https://www.weg.net',
        social: {
          facebook: 'https://www.facebook.com',
          instagram: 'https://www.instagram.com',
          youtube: 'https://www.youtube.com'
        }
      },{
        path: 'weg.webp',
        title: 'WEG',
        description: 'Empresa Foda',
        text: 'Lorem Ipsum dolor sit amet, consectetur adipiscing',
        to: 'https://www.weg.net',
        social: {
          facebook: 'https://www.facebook.com',
          instagram: 'https://www.instagram.com',
          youtube: 'https://www.youtube.com'
        }
      },{
        path: 'weg.webp',
        title: 'WEG',
        description: 'Empresa Foda',
        text: 'Lorem Ipsum dolor sit amet, consectetur adipiscing',
        to: 'https://www.weg.net',
        social: {
          facebook: 'https://www.facebook.com',
          instagram: 'https://www.instagram.com',
          youtube: 'https://www.youtube.com'
        }
      },
    ]
  },{
    category: 'bronze',
    partners: [
      {
        path: 'weg.webp',
        title: 'WEG',
        description: 'Empresa Foda',
        text: 'Lorem Ipsum dolor sit amet, consectetur adipiscing',
        to: 'https://www.weg.net',
        social: {
          facebook: 'https://www.facebook.com',
          instagram: 'https://www.instagram.com',
          youtube: 'https://www.youtube.com'
        }
      },{
        path: 'weg.webp',
        title: 'WEG',
        description: 'Empresa Foda',
        text: 'Lorem Ipsum dolor sit amet, consectetur adipiscing',
        to: 'https://www.weg.net',
        social: {
          facebook: 'https://www.facebook.com',
          instagram: 'https://www.instagram.com',
          youtube: 'https://www.youtube.com'
        }
      },{
        path: 'weg.webp',
        title: 'WEG',
        description: 'Empresa Foda',
        text: 'Lorem Ipsum dolor sit amet, consectetur adipiscing',
        to: 'https://www.weg.net',
        social: {
          facebook: 'https://www.facebook.com',
          instagram: 'https://www.instagram.com',
          youtube: 'https://www.youtube.com'
        }
      },{
        path: 'weg.webp',
        title: 'WEG',
        description: 'Empresa Foda',
        text: 'Lorem Ipsum dolor sit amet, consectetur adipiscing',
        to: 'https://www.weg.net',
        social: {
          facebook: 'https://www.facebook.com',
          instagram: 'https://www.instagram.com',
          youtube: 'https://www.youtube.com'
        }
      },
    ]
  },{
    category: 'parceiros',
    partners: [
      {
        path: 'weg.webp',
        title: 'WEG',
        description: 'Empresa Foda',
        text: 'Lorem Ipsum dolor sit amet, consectetur adipiscing',
        to: 'https://www.weg.net',
        social: {
          facebook: 'https://www.facebook.com',
          instagram: 'https://www.instagram.com',
          youtube: 'https://www.youtube.com'
        }
      },{
        path: 'weg.webp',
        title: 'WEG',
        description: 'Empresa Foda',
        text: 'Lorem Ipsum dolor sit amet, consectetur adipiscing',
        to: 'https://www.weg.net',
        social: {
          facebook: 'https://www.facebook.com',
          instagram: 'https://www.instagram.com',
          youtube: 'https://www.youtube.com'
        }
      },{
        path: 'weg.webp',
        title: 'WEG',
        description: 'Empresa Foda',
        text: 'Lorem Ipsum dolor sit amet, consectetur adipiscing',
        to: 'https://www.weg.net',
        social: {
          facebook: 'https://www.facebook.com',
          instagram: 'https://www.instagram.com',
          youtube: 'https://www.youtube.com'
        }
      },{
        path: 'weg.webp',
        title: 'WEG',
        description: 'Empresa Foda',
        text: 'Lorem Ipsum dolor sit amet, consectetur adipiscing',
        to: 'https://www.weg.net',
        social: {
          facebook: 'https://www.facebook.com',
          instagram: 'https://www.instagram.com',
          youtube: 'https://www.youtube.com'
        }
      },{
        path: 'weg.webp',
        title: 'WEG',
        description: 'Empresa Foda',
        text: 'Lorem Ipsum dolor sit amet, consectetur adipiscing',
        to: 'https://www.weg.net',
        social: {
          facebook: 'https://www.facebook.com',
          instagram: 'https://www.instagram.com',
          youtube: 'https://www.youtube.com'
        }
      },
    ]
  },{
    category: 'apoio',
    partners: [
      {
        path: 'weg.webp',
        title: 'WEG',
        description: 'Empresa Foda',
        text: 'Lorem Ipsum dolor sit amet, consectetur adipiscing',
        to: 'https://www.weg.net',
        social: {
          facebook: 'https://www.facebook.com',
          instagram: 'https://www.instagram.com',
          youtube: 'https://www.youtube.com'
        }
      },{
        path: 'weg.webp',
        title: 'WEG',
        description: 'Empresa Foda',
        text: 'Lorem Ipsum dolor sit amet, consectetur adipiscing',
        to: 'https://www.weg.net',
        social: {
          facebook: 'https://www.facebook.com',
          instagram: 'https://www.instagram.com',
          youtube: 'https://www.youtube.com'
        }
      },{
        path: 'weg.webp',
        title: 'WEG',
        description: 'Empresa Foda',
        text: 'Lorem Ipsum dolor sit amet, consectetur adipiscing',
        to: 'https://www.weg.net',
        social: {
          facebook: 'https://www.facebook.com',
          instagram: 'https://www.instagram.com',
          youtube: 'https://www.youtube.com'
        }
      },{
        path: 'weg.webp',
        title: 'WEG',
        description: 'Empresa Foda',
        text: 'Lorem Ipsum dolor sit amet, consectetur adipiscing',
        to: 'https://www.weg.net',
        social: {
          facebook: 'https://www.facebook.com',
          instagram: 'https://www.instagram.com',
          youtube: 'https://www.youtube.com'
        }
      },{
        path: 'weg.webp',
        title: 'WEG',
        description: 'Empresa Foda',
        text: 'Lorem Ipsum dolor sit amet, consectetur adipiscing',
        to: 'https://www.weg.net',
        social: {
          facebook: 'https://www.facebook.com',
          instagram: 'https://www.instagram.com',
          youtube: 'https://www.youtube.com'
        }
      },{
        path: 'weg.webp',
        title: 'WEG',
        description: 'Empresa Foda',
        text: 'Lorem Ipsum dolor sit amet, consectetur adipiscing',
        to: 'https://www.weg.net',
        social: {
          facebook: 'https://www.facebook.com',
          instagram: 'https://www.instagram.com',
          youtube: 'https://www.youtube.com'
        }
      },
    ]
  },
]