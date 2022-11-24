type HistoriaProviderInterface = Array<{
  id: string
  content: {
    type: 'video' | 'text' | 'title' | 'image' | 'frase' | 'equipe'
    videoURL?: string
    text?: string
    imagePath?: string
    legend?: string
    year?: string
    captain?: string
    positions?: {
      position: number
      category: string
    }[]
  }[]
}>

export const historiaProvider: HistoriaProviderInterface = [
  {
    id: 'content-intro',
    content: [
      {
        type: 'video',
        videoURL: 'https://www.youtube.com/embed/rWRNxqqoXl4'
      },
      {
        type: 'text',
        text: 'Nós projetamos e construímos carros elétricos de corrida para competir na categoria Fórmula SAE, que é uma competição sediada anualmente em Piracicaba-SP, reunindo equipes universitárias de todo o país. Nessa competição são avaliadas a performance de cada protótipo na pista, com provas de aceleração, curva, volta rápida e resistência, pilotadas pelos próprios integrantes; assim como as apresentações técnicas das equipes, que incluem projeto, custos, manufatura e business. Somado a todas essas etapas, todos os protótipos ainda precisam passar pela aprovação de rigorosas inspeções técnicas de segurança.'
      },
      {
        type: 'text',
        text: 'Contamos com integrantes de diversos cursos: Engenharia Elétrica, Engenharia Mecânica, Controle e Automação, Engenharia Aeroespacial, Engenharia de Produção e Sistemas de Informação.'
      },
      {
        type: 'title',
        text: 'COMO TUDO COMEÇOU'
      },
      {
        type: 'image',
        imagePath: 'fundadores.png',
        legend: 'Fundadores da equipe'
      },
      {
        type: 'text',
        text: 'Nossa história começa em meados de 2016, com o fundador Abraão Guia, então aluno de Engenharia Elétrica, recrutando alguns de seus colegas de curso para iniciarem um projeto inovador na universidade: desenvolver um carro de corrida totalmente elétrico, com o intuito de estimular o desenvolvimento de tecnologia nacional e capacitar seus integrantes para o mercado de trabalho.'
      },
      {
        type: 'text',
        text: 'Logo a equipe toma corpo com seu primeiro processo seletivo, em outubro, sendo composta por 26 alunos de graduação. Dá-se início aos estudos, esboços de projeto e conexões com equipes parceiras.'
      },
      {
        type: 'image',
        imagePath: 'sala-projetos.png',
        legend: 'Primeira sala de projetos'
      }
    ]
  },
  {
    id: 'content-2017',
    content: [
      {
        type: 'equipe',
        year: '2017',
        captain: 'Abraão Guia',
        positions: [
          { position: 8, category: 'projeto' },
          { position: 10, category: 'custos' },
          { position: 10, category: 'geral' },
          { position: 4, category: 'enduro' },
          { position: 10, category: 'apresentação' }
        ]
      },
      {
        type: 'video',
        videoURL: 'https://www.youtube.com/embed/lPQjy78QGok'
      },
      {
        type: 'frase',
        text: 'Em 2017 projetos ousados e alguns até mesmo inéditos no país começam a ganhar vida, enquanto um patrocínio salvador abraça a nossa causa.'
      },
      {
        type: 'text',
        text: 'O ano fica marcado pelo otimismo implacável dos integrantes e por muita energia para virar noites na oficina terminando a fabricação do primeiro veículo. Surge, então, o primeiro protótipo elétrico da UFMG: o Kayran. Porém, ele não surge por completo...'
      },
      {
        type: 'text',
        text: 'Na véspera da competição, desembarcamos com o carro em Piracicaba e continuamos a terminar a montagem do banco de baterias, que não pôde ser finalizado a tempo; o furacão Irma havia atrasado em um mês o despacho das células, eliminando qualquer chance de terminarmos o banco naquele ano.'
      },
      {
        type: 'text',
        text: 'Porém, todos tínhamos em mente que, depois de mais de um ano de dedicação e trabalho extenuante, não poderíamos nos entregar. Viramos a última noite mantendo a chama da esperança acesa, revezando soldadores, esmerilhadores e montadores. Mas não teve jeito...'
      },
      {
        type: 'text',
        text: 'Chegamos no autódromo com um veículo incapaz de ligar, no ano da nossa estreia. Não havia mágica, sem a pontuação das provas dinâmicas, perdíamos metade dos pontos e só podíamos contar com as provas estáticas, com as quais não éramos familiarizados; nem das inspeções técnicas conseguimos participar. Conquistamos décimo lugar, dentre 15 competidores.'
      },
      {
        type: 'image',
        imagePath: '2017/madrugada.jpg',
        legend: 'Madrugada antes da competição'
      },
      {
        type: 'text',
        text: 'Estávamos tristes? Claro... nós quase chegamos lá, pensamos. Porém, percebemos com isso tudo uma coisa: tínhamos garra! Fomos uma das únicas equipes na história do país a conceber o seu primeiro protótipo dentro de um ano. E ainda tínhamos algo inédito na competição nacional – o emprego da motorização dupla traseira.'
      },
      {
        type: 'text',
        text: 'E não era só, também fomos os únicos até aquele momento a desenvolver o nosso próprio sistema eletrônico de monitoramento de baterias (BMS). Mas, mais importante do que isso, nós criamos um time, uma família! Acreditávamos no nosso potencial, confiávamos uns nos outros e sabíamos que juntos, independentemente do resultado, iríamos crescer, como profissionais e como pessoas. O nosso saldo já era positivo. Criamos as bases de uma equipe sólida.'
      },
      {
        type: 'image',
        imagePath: '2017/equipe-2017.png',
        legend: 'Equipe 2017'
      }
    ]
  },
  {
    id: 'content-2018',
    content: [
      {
        type: 'equipe',
        year: '2018',
        captain: 'Ana Flávia Rangel',
        positions: [
          { position: 3, category: 'projeto' },
          { position: 2, category: 'custos' },
          { position: 2, category: 'geral' },
          { position: 2, category: 'enduro' },
          { position: 2, category: 'autocorss' }
        ]
      },
      {
        type: 'video',
        videoURL: 'https://www.youtube.com/embed/s_YGnP0zI4s'
      },
      {
        type: 'frase',
        text: 'Com a nova mentalidade de “um passo de cada vez”, conseguir a aprovação dos juízes nas inspeções técnicas de segurança passa a ser o principal objetivo.'
      },
      {
        type: 'text',
        text: 'Agora, com uma estruturação interna totalmente reorganizada, o Fórmula Tesla UFMG aperfeiçoa seus métodos de gerência, intensifica a capacitação de seus membros e estreita os laços com as equipes vizinhas.'
      },
      {
        type: 'text',
        text: 'O protótipo Kayran finalmente anda em fevereiro e é aproveitado como veículo de testes para o aperfeiçoamento dos sistemas a serem utilizados no NK-218, o segundo protótipo, que já está sendo projetado para participar da competição 2018.'
      },
      {
        type: 'text',
        text: 'Investimos pesado em análises estruturais e dinâmicas, tornamos os sistemas eletrônicos mais robustos e conseguimos uma redução de massa de 80 kg em relação ao primeiro protótipo. E, desta vez com um melhor planejamento, somos capazes de finalizar o novo veículo com tempo hábil para testes em pista..'
      },
      {
        type: 'image',
        imagePath: '2018/primeiro-teste.jpg',
        legend: 'Primeiro teste do Kayran'
      },
      {
        type: 'text',
        text: 'O NK-218 desembarca em Piracicaba e, no teste de checagem na nossa chácara, um dos motores não funciona: “Como isso é possível?! Testamos o carro antes de o despacharmos!”. Identificamos que, de alguma forma, o encoder do motor esquerdo havia queimado durante a viagem. No último instante para pegarmos estrada para buscarmos um novo encoder, por sorte, uma equipe parceira, chamada UTForce e- Racing, num gesto grandioso, nos cede o seu encoder reserva.'
      },
      {
        type: 'image',
        imagePath: '2018/prova-aceleracao.jpg',
        legend: 'NK-218 na prova de aceleração'
      },
      {
        type: 'text',
        text: 'Novamente no autódromo do ECPA, dessa vez conseguimos entrar direto para a inspeção elétrica – mais de três horas ininterruptas de apreensão, aguardando os juízes finalizarem a avaliação do veículo. Passamos de primeira, um feito quase inédito na história da competição. Logo depois, a inspeção mecânica – alguns poucos apontamentos, que exigem retorno para nova análise e aprovação. Corrigimos e também somos aprovados. Nosso principal objetivo acabava de ser cumprido, estávamos aptos para participar das provas dinâmicas!'
      },
      {
        type: 'text',
        text: 'Porém, quando apontamos o carro na pista de aceleração e o posicionamos para a arrancada, somos barrados: nossos pneus slick estavam demasiadamente gastos para os critérios de segurança dos juízes de pista. E não tínhamos outro jogo melhor, utilizávamos pneus doados, já no fim de sua vida útil. Em razão disso, tivemos que competir com pneus de rua.'
      },
      {
        type: 'text',
        text: 'Apesar dos contratempos, conseguimos participar de todas as provas e ser finalistas em projeto. E, para consolidar 2018 como um ótimo ano, conquistamos o 2º lugar geral. Era inacreditável o quão longe havíamos chegado em apenas dois anos de história.'
      },
      {
        type: 'image',
        imagePath: '2018/equipe-2018.jpg',
        legend: 'Equipe 2017'
      }
    ]
  },
  {
    id: 'content-2019',
    content: [
      {
        type: 'equipe',
        year: '2019',
        captain: 'Pedro Henrique Gonçalves',
        positions: [
          { position: 1, category: 'projeto' },
          { position: 5, category: 'custos' },
          { position: 5, category: 'geral' },
          { position: 5, category: 'enduro' },
          { position: 5, category: 'autocross' }
        ]
      },
      {
        type: 'video',
        videoURL: 'https://www.youtube.com/embed/-MkqLh-w-Ew'
      },
      {
        type: 'frase',
        text: '2019 começa grande. Conseguimos um patrocínio financeiro de peso. Ousamos e iniciamos o desenvolvimento de sistemas que antes julgávamos impossíveis de serem feitos.'
      },
      {
        type: 'text',
        text: 'Novos componentes e logística de equipe são planejados e todo o protótipo é projetado na expectativa desse investimento. Porém, devido a mudanças ocorridas na empresa patrocinadora, o patrocínio é cancelado e nos vemos com um projeto financeiramente inviável em mãos.'
      },
      {
        type: 'text',
        text: 'Sabendo do nosso potencial, iniciamos um novo projeto de baixo custo, mantendo a receita do ano anterior, com foco em otimizar ao máximo todos os sistemas. Adotamos frenagem regenerativa, desenvolvemos um pacote aerodinâmico pensado na diminuição do arrasto, otimizamos estruturalmente todos sistemas mecânicos para possibilitar um banco de baterias maior sem aumentar a massa total do veículo e aumentamos a precisão de fabricação. Assim, alcançamos maior eficiência e maior autonomia do protótipo. Além disso, finalmente adquirimos pneus de corrida novos, determinantes para um melhor desempenho dinâmico na competição.'
      },
      {
        type: 'image',
        imagePath: '2019/prova-design.jpg',
        legend: 'Prova de Design (projeto)'
      },
      {
        type: 'text',
        text: 'Somos capazes de antecipar o início da fase de testes e, assim, focar em maiores validações. Testamos o veículo até a última semana e novamente vamos para Piracicaba.'
      },
      {
        type: 'text',
        text: 'Passamos nas inspeções, conseguimos novamente estar entre os finalistas na prova de projeto, porém, dessa vez, temos problemas na prova de frenagem. E, no esforço para fazer o veículo ser aprovado no Brake Test, a elevada carga emocional dos membros acaba por interferir no trabalho, acarretando novos problemas mecânicos e também elétricos.'
      },
      {
        type: 'image',
        imagePath: '2019/boxes.jpg',
        legend: 'Equipe nos boxes da competição'
      },
      {
        type: 'text',
        text: 'As provas dinâmicas vão se passando enquanto continuamos parados nos boxes realizando a manutenção do veículo. Depois de duas provas já perdidas, quando estamos a dez minutos de se encerrar a prova de Autocross, terminamos o reparo, somos aprovados no teste de frenagem e corremos para a pista com o carro. Porém, entramos na prova logo quando começa a chover e não conseguimos fazer um bom tempo. Ao final da prova, levamos o carro em ritmo acelerado para a final de projeto, que já havia começado.'
      },
      {
        type: 'image',
        imagePath: '2019/autocross.jpg',
        legend: 'Prova de Autocross'
      },
      {
        type: 'text',
        text: 'No dia seguinte, Enduro, a prova dinâmica mais temida. Havíamos testado suficientemente o carro em Belo Horizonte, porém, depois dos problemas que tivemos no dia anterior, não estávamos nada seguros. E nossa intuição estava certa... O carro parou na primeira volta. Mais precisamente, na primeira curva.'
      },
      {
        type: 'text',
        text: 'Mas a cara de choro dos membros desapareceu rapidamente quando recebemos a notícia de que havíamos ganhado as final de projeto. Tínhamos o melhor projeto de Fórmula SAE Elétrico do Brasil!'
      },
      {
        type: 'text',
        text: 'Apesar de não termos conseguido mostrar o nosso potencial em pista, o nosso desempenho nas provas estáticas foi tão bom que nos colocou na 5ª colocação geral. Porém, voltamos com a sensação de que essa competição estava incompleta, de que ela ainda não havia acabado...'
      },
      {
        type: 'image',
        imagePath: '2019/equipe-2019.jpg',
        legend: 'Equipe 2019'
      }
    ]
  }
]
