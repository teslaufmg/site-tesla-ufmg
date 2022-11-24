export const equipeProvider: {
  [year: string]: {
    captain: {
      name: string
      imagePath: string
      linkedin: string
    }
    members: {
      setor: string
      members: {
        name: string
        role: string
        imagePath: string
        linkedin: string
      }[]
    }[]
  }
} = {
  2019: {
    captain: {
      name: 'Nome Capitão',
      imagePath: '',
      linkedin: 'https://www.linkedin.com/'
    },
    members: [
      {
        setor: 'ADMINISTRAÇÃO',
        members: [
          {
            name: 'Matheus',
            role: 'Vice-Capitão',
            imagePath: '',
            linkedin: 'https://www.linkedin.com/'
          },
          {
            name: 'Matheus Teste Teste',
            role: 'Vice-Capitão',
            imagePath: '',
            linkedin: 'https://www.linkedin.com/'
          },
          {
            name: 'Matheus',
            role: 'Vice-Capitão',
            imagePath: '',
            linkedin: 'https://www.linkedin.com/'
          },
          {
            name: 'Matheus Teste',
            role: 'Vice-Capitão',
            imagePath: '',
            linkedin: 'https://www.linkedin.com/'
          },
          {
            name: 'Matheus',
            role: 'Vice-Capitão',
            imagePath: '',
            linkedin: 'https://www.linkedin.com/'
          },
          {
            name: 'Matheus',
            role: 'Vice-Capitão',
            imagePath: '',
            linkedin: 'https://www.linkedin.com/'
          }
        ]
      },
      {
        setor: 'ELETRÔNICA',
        members: [
          {
            name: 'Matheus',
            role: 'Vice-Capitão',
            imagePath: '',
            linkedin: 'https://www.linkedin.com/'
          },
          {
            name: 'Matheus',
            role: 'Vice-Capitão',
            imagePath: '',
            linkedin: 'https://www.linkedin.com/'
          }
        ]
      }
    ]
  }
}
