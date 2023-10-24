export type Category = 'diamante' | 'platina' | 'ouro' | 'prata' | 'bronze'

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
  category: Category
  partners: Array<
    {
      path: string
    } & PopoverProps
  >
}[] = [
  {
    category: 'diamante',
    partners: [
      {
        path: 'ansys.png',
        title: 'ANSYS',
        description: 'Companhia relacionada à simulação computacional',
        text: 'ANSYS, Inc. é um desenvolvedor de programas de simulação para engenharia sediado em Canonsburg, Pensilvânia, Estados Unidos. A companhia foi fundada em 1970 por John A. Swanson, e denominada originalmente Swanson Analysis Systems, Inc',
        to: 'https://www.ansys.com',
        social: {
          facebook: 'https://www.facebook.com/Ansys/',
          instagram: 'https://www.instagram.com/ansys_inc/',
          youtube: 'https://www.youtube.com/user/ansysinc'
        }
      }
    ]
  },
  {
    category: 'platina',
    partners: [
      {
        path: 'weg.png',
        title: 'WEG',
        description:
          'Empresa especializada na fabricação e comercialização de motores elétricos, transformadores, geradores e tintas',
        text: 'WEG S.A é uma empresa multinacional brasileira, foi fundada em 1961, com sede na cidade de Jaraguá do Sul, no estado de Santa Catarina',
        to: 'https://www.weg.net',
        social: {
          facebook: 'https://www.facebook.com/weg.brasil/',
          instagram: 'https://www.instagram.com/weg.motores/',
          youtube: 'https://www.youtube.com/channel/UCs1vPZqsU9WmcSmNkUO6T7w'
        }
      },
      {
        path: 'fablab.webp',
        title: 'Fablab',
        description:
          ' É uma rede de laboratórios públicos - espaços de criatividade, aprendizado e inovação',
        text: 'Um fab lab é uma oficina que oferece recursos de fabricação digital. Um fab lab é geralmente equipado com um conjunto de ferramentas flexíveis controladas por computador que cobrem diversas escalas de tamanho e diversos materiais diferentes, com o objetivo de fazer "quase tudo"',
        to: 'https://www.fablabs.io',
        social: {
          instagram: 'https://www.instagram.com/institutofablabbrasil/'
        }
      },
      {
        path: 'isofort.png',
        title: 'Isofort',
        description:
          'Empresa especializada no fornecimento de poliestireno expandido (EPS)',
        text: 'A Isofort fabrica bloquetes de EPS, cantoneiras, perfis, fôrmas, lajes nervuradas, juntas de dilatação, painéis para isolamento térmico de ambientes etc. Atua em todo o território nacional',
        to: 'https://isofort.com.br',
        social: {
          facebook: 'https://www.facebook.com/isofortoficial/',
          instagram: 'https://www.instagram.com/isofortoficial/',
          youtube: 'https://www.youtube.com/channel/UCaJ2z4yP0ac7q-kiZoq5rGw'
        }
      },
      {
        path: 'rois.png',
        title: 'Rois',
        description:
          'Empresa especializada em serviços de usinagem, tornearia e solda',
        text: 'Em serviços de usinagem, tornearia e solda estão incluídas atividades de grande importância para a indústria e no processo de manufatura de peças metálicas para diversas máquinas e equipamentos. Entre as atividades, citam-se: fresagem, jateamento de peças (também de granalhas), jateamento-usinagem (de areia), tornearia e usinagem de forma geral (tornos, fresas)',
        to: '',
        social: {}
      },
      {
        path: 'siemens.png',
        title: 'Siemens',
        description:
          'Empresa especializada em automação, mobilidade, energia, soluções industriais e empresariais',
        text: 'A Siemens Aktiengesellschaft, ou simplesmente Siemens AG, é um conglomerado industrial alemão, sendo o maior da Europa e um dos maiores do mundo. Seus principais escritórios estão localizados em Berlim, Munique e Erlangen',
        to: 'https://www.siemens.com/br/pt.html',
        social: {
          facebook: 'https://www.facebook.com/SiemensBrasil/',
          instagram: 'https://www.instagram.com/siemens/',
          youtube: 'https://www.youtube.com/user/siemens'
        }
      },
      {
        path: 'triadimensio.jpg',
        title: 'Triadimensio',
        description: 'Empresa especializada em impressões 3D',
        text: 'a Triadimensio se dedica à prototipação rápida através da impressão de peças em 3d com modelamento tridimensional feita pelo cliente ou desenvolvido por encomenda',
        to: 'https://www.triadimensio.com/',
        social: {
          facebook: 'https://www.facebook.com/triadimensio/?locale=pt_BR',
          instagram: 'https://www.instagram.com/triadimensio_impressao3d/'
        }
      }
    ]
  },
  {
    category: 'ouro',
    partners: [
      {
        path: 'st.png',
        title: 'ST',
        description: 'Empresa relacionada microeletrônicos e semicondutores',
        text: 'A ST é uma líder global em semicondutores que oferece produtos e soluções inteligentes e energeticamente eficientes que alimentam a eletrônica no centro da vida cotidiana. Os produtos da ST são encontrados em todos os lugares hoje e, junto com nossos clientes, estamos permitindo uma condução mais inteligente e fábricas, cidades e residências mais inteligentes, juntamente com a próxima geração de dispositivos móveis e Internet das Coisas',
        to: 'https://www.st.com/content/st_com/en.html',
        social: {
          facebook: 'https://www.facebook.com/STMicroelectronics.NV/',
          instagram: 'https://www.instagram.com/stmicroelectronics.nv/',
          youtube: 'https://www.youtube.com/@stmicroelectronics'
        }
      }
    ]
  },
  {
    category: 'prata',
    partners: [
      {
        path: 'ciser.svg',
        title: 'Ciser',
        description: 'Empresa fabricante de peças e fixadores',
        text: 'A Ciser é a maior fabricante de fixadores da América Latina. Fundada em 1959, somos referência nacional em inovação e tecnologia e reconhecidos pelo nosso pioneirismo e compromisso com a sociedade e o meio ambiente',
        to: 'https://www.ciser.com.br',
        social: {
          facebook: 'https://pt-br.facebook.com/canalciser/',
          instagram: 'https://www.instagram.com/ciseroficial/'
        }
      },
      {
        path: 'plastmetal.png',
        title: 'Plastmetal',
        description:
          'Empresa fornecedora de metais não ferrosos, plásticos de engenharia e eoutros',
        text: 'A Plastmetal, pioneira em Contagem/MG na distribuição de metais não-ferrosos e plásticos industriais semi-acabados, hoje também é distribuidora de ferro fundido, Aços Carbono, Aços Ligados e Aços Ferramenta',
        to: 'https://plastmetal.com.br',
        social: {
          facebook: 'https://www.facebook.com/plastmetal/'
        }
      },
      {
        path: 'sensata.png',
        title: 'Sensata',
        description:
          'Empresa especializada na fabricação de aparelhos elétricos e eletrônicos',
        text: 'Sensata Technologies (NYSE: ST) é um dos principais fornecedores mundiais de soluções de detecção, proteção elétrica, controle e gerenciamento de energia com operações e centros de negócios em 13 países. Os produtos da Sensata melhoram a segurança, a eficiência e o conforto de milhões de pessoas todos os dias em aplicações automotivas, eletrodomésticos, aeronáuticas, industriais, militares, veículos pesados, aquecimento, ar condicionado e ventilação, dados, telecomunicações, veículos recreativos e marítimas',
        to: 'https://www.sensata.com',
        social: {
          facebook: 'https://www.facebook.com/SensataTechnologies/',
          instagram: 'https://www.instagram.com/sensatatechnologies/',
          youtube: 'https://www.youtube.com/channel/UCvWcKk5g6C4bhpcyPXsUilA'
        }
      },
      {
        path: 'solidworks.png',
        title: 'SolidWorks',
        description: 'Empresa Fornecedora de softwares de desenho 3D',
        text: 'O SolidWorks é um software de CAD 3D desenvolvido inicialmente pela SolidWorks Corporation que funciona no sistema operativo Windows.',
        to: 'https://www.solidworks.com/pt-br',
        social: {
          facebook: 'https://www.facebook.com/solidworks/',
          instagram: 'https://www.instagram.com/solidworks/',
          youtube: 'https://www.youtube.com/solidworks'
        }
      },
      {
        path: 'step.png',
        title: 'STEP',
        description: 'Empresa de design automotivo',
        text: 'A Step é uma empresa de design especializada no setor automotivo . Fundada em 1992 , a Step hoje tem sua sede no coração do desenvolvimento do automóvel na Itália, Torino',
        to: 'https://stepspa.com.br',
        social: {}
      },
      {
        path: 'stick.png',
        title: 'Stick',
        description:
          'Empresa de placas de circuitos impressos e componentes elétricos',
        text: 'Aplicada no mercado de placas de circuitos impressos, a Stick Circuitos estreou em 1976 atendendo no mercado de informática, telecomunicações, eletrônica, automação, entre outros setores correlatos e já se revelava destaque na área desde o início de suas atividades',
        to: 'https://stick.ind.br',
        social: {
          facebook: 'https://www.facebook.com/stickcircuitos/'
        }
      },
      {
        path: 'te.png',
        title: 'TE',
        description: 'Empresa de soluções elétricas e energéticas',
        text: 'Soluções que alimentam veículos elétricos, aeronaves, fábricas digitais e casas inteligentes. Inovação que permite cuidados médicos que salvam vidas, comunidades sustentáveis, redes de utilidades eficientes e infraestrutura global de comunicações.',
        to: 'https://www.te.com/global-en/home.html',
        social: {
          facebook: 'https://www.facebook.com/teconnectivity',
          instagram: 'https://www.instagram.com/teconnectivity/',
          youtube: 'https://www.youtube.com/teconnectivity'
        }
      },
      {
        path: 'tekbond.svg',
        title: 'Tek Bond',
        description: 'Empresa de materias diversos',
        text: 'Tekbond é uma empresa especializada na produção e na importação de diversos produtos como: adesivos instantâneos, selantes, travas químicas, silicones, entre outros',
        to: 'https://www.tekbond.com.br',
        social: {
          facebook: 'https://www.facebook.com/TekbondOficial/',
          instagram: 'https://www.instagram.com/tekbond_oficial/'
        }
      }
    ]
  },
  {
    category: 'bronze',
    partners: [
      {
        path: 'cabelauto.png',
        title: 'Cabelauto',
        description: 'Empresa de condutores elétricos',
        text: 'A Cabelauto é uma empresa que foi preparada para o fornecimento de cabos automotivos, expandindo posteriormente sua gama de produtos para linha de energia e especiais',
        to: 'https://www.cabelauto.com.br',
        social: {
          facebook: 'https://www.facebook.com/Cabelauto',
          instagram: 'https://www.instagram.com/cabelauto/'
        }
      },
      {
        path: 'emob.jpeg',
        title: 'E-mob',
        description:
          'Empresa da indústria automotiva com foco em carros elétricos',
        text: 'A principal atividade dessa empresa é a pesquisa e desenvolvimento experimental em ciências físicas e naturais.',
        to: 'http://e-mobcenter.com/',
        social: {
          instagram: 'https://www.instagram.com/e_mobcenter/'
        }
      },
      {
        path: 'kingston.png',
        title: 'Kingston',
        description: 'Empresa de Tecnologia',
        text: 'Kingston Corporation é uma empresa multinacional norte-americana que fabrica e comercializa produtos de armazenamento de memória: cartões de memória e pen-drives. Tendo também a marca HyperX de fones de ouvido, teclados, mousepads e de unidades de estado sólido',
        to: 'https://www.kingston.com/br',
        social: {
          facebook: 'https://www.facebook.com/KingstonBrasil/',
          instagram: 'https://www.instagram.com/kingstonbrasil/',
          youtube: 'https://www.youtube.com/user/KingstonTechnologyBR'
        }
      },
      {
        path: 'littelfuse.png',
        title: 'Littelfuse',
        description: 'Empresa de fabricação de eletrônicos',
        text: 'Littelfuse é uma empresa americana com sede em Chicago, Illinois. A empresa produz principalmente produtos de proteção de circuitos, mas também fabrica uma variedade de interruptores eletrônicos e sensores automotivos',
        to: 'https://www.littelfuse.com/',
        social: {
          facebook: 'https://www.facebook.com/Littelfuse/',
          instagram: 'https://www.instagram.com/littelfuse/'
        }
      },
      {
        path: 'lojaeletrica.png',
        title: 'Loja Elétrica',
        description: 'Loja de materias e produtos diversos',
        text: 'A mais completa do Brasil em materiais elétricos para casas, prédios comerciais e industriais',
        to: 'http://www.lojaeletrica.com.br',
        social: {
          facebook: 'https://www.facebook.com/lojaeletrica/',
          instagram: 'https://www.instagram.com/lojaeletricaltda/'
        }
      },
      {
        path: 'melexis.svg',
        title: 'Melexis',
        description: 'Empresa de semicondutores e microeletrônicos',
        text: 'A Melexis é uma fornecedora global de soluções de semicondutores microeletrônicos e representa a engenharia que permite o melhor futuro seguro, limpo, confortável e saudável.',
        to: 'https://www.melexis.com/',
        social: {
          facebook: 'https://www.facebook.com/MelexisSensors/',
          instagram: 'https://www.instagram.com/melexis_sensors/'
        }
      }
    ]
  }
]
