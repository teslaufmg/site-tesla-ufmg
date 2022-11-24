export interface PrototipoData {
  year: number
  sectionStart: {
    top: boolean
    left: boolean
  }
  positions: {
    general: number
    categories: { name: string; position?: number }[]
    text: string[]
  }
  especifications: {
    dtec: string
    data: { info: string; data: string }[]
  }
  subsystems?: Array<
    | {
        type: 'title' | 'subsystem' | 'text'
        content: string
      }
    | {
        type: 'image'
        content: string[]
      }
  >
}

export const prototiposProvider: {
  [prototipo: string]: PrototipoData
} = {
  NK319: {
    year: 2019,
    sectionStart: {
      top: false,
      left: true
    },
    positions: {
      general: 5,
      categories: [
        { name: 'custos', position: 5 },
        { name: 'apresentação', position: 5 },
        { name: 'design', position: 1 },
        { name: 'aceleração' },
        { name: 'skidpad' },
        { name: 'autocross', position: 5 },
        { name: 'enduro' }
      ],
      text: [
        'Sendo o terceiro carro fabricado, melhorou os índices de eficiência e autonomia da equipe e conseguiu uma melhora significativa no desempenho em pista, em razão do projeto dinâmico mais refinado, menores perdas mecânicas e soluções aerodinâmicas inovadoras.',
        'Lançado em 31 de outubro de 2019, foi à competição cheio de expectativas pela surpreendente segunda colocação no ano anterior. O grande empenho da equipe durante o ano levou ao primeiro lugar na prova de projeto, porém o protótipo enfrentou alguns imprevistos nas provas dinâmicas e assim, conquistou a quinta colocação geral.'
      ]
    },
    especifications: {
      dtec: 'DTEC-NK319.svg',
      data: [
        { info: 'Motor', data: '2x WEG VE-M01' },
        { info: 'Autonomia', data: '22 km' },
        { info: 'Potência Máx.', data: '54 cv (39,7kW)' },
        { info: 'Bitola Diant.', data: '1170 mm' },
        { info: 'Torque Máx.', data: '8,2 Nm (39,7 kW)' },
        { info: 'Bitola Tras.', data: '1150 mm' },
        { info: '0 - 75m', data: '5,1 s' },
        { info: 'Entre-eixos', data: '1150 mm' },
        { info: 'Velocidade Máx.', data: '99 Km/h' },
        { info: 'Massa', data: '279 kg' },
        { info: 'Consumo', data: '216 Wh/km' },
        { info: 'Massa Diant.', data: '49,9%' }
      ]
    },
    subsystems: [
      {
        type: 'title',
        content: 'ELETRÔNICA'
      },
      {
        type: 'text',
        content:
          'O projeto eletrônico teve dois objetivos principais no ano de 2019: sensoriamento abrangente do veículo, permitindo diagnóstico e validação dos diversos sistemas do carro; e aumento da autonomia através do melhor gerenciamento de energia, visando alcançar os 22 quilômetros da prova de Enduro.'
      },
      {
        type: 'subsystem',
        content: 'CONTROLE'
      },
      {
        type: 'text',
        content:
          'Em 2019 houve a implementação de frenagem regenerativa no veículo e foi investido tempo em pesquisas sobre Controle de Arrancada e Vetorização de Torque para aplicações futuras. Também foi aprimorada a estabilidade de comunicação do sistema de controle com os outros módulos.'
      },
      {
        type: 'subsystem',
        content: 'TELEMETRIA & AQUISIÇÃO'
      },
      {
        type: 'text',
        content:
          'Investiu-se em instrumentação e aquisição de dados, tornando possível medir deformação de peças estruturais, temperatura dos discos de freios, curso dos amortecedores, pressão nas linhas de freio, além das acelerações e velocidade angular do veículo. Esse processo ainda contou com o desenvolvimento de um datalogger para registro de todos os dados aferidos. Associado a isso, os sistemas de telemetria e interface foram aprimorados, garantindo que tanto a equipe nos boxes quanto o piloto conseguissem fazer uma análise instantânea das condições do veículo, auxiliando na definição de estratégias e acompanhamento dos sinais vitais. Houve substituição dos módulos de telemetria NRF para o Xbee, aumentando a eficiência e a taxa de transmissão, e reformulou-se a interface gráfica de visualização de dados em tempo real, podendo agora ser acessada livremente em computadores, tablets e celulares por quaisquer integrantes da equipe simultaneamente.'
      },
      {
        type: 'subsystem',
        content: 'BANCO DE BATERIAS'
      },
      {
        type: 'text',
        content:
          'A principal mudança no banco de baterias foi o acréscimo de mais um ramo de células em paralelo, a fim de aumentar a capacidade de carga e possibilitar a finalização da prova de Enduro juntamente com o novo pacote aerodinâmico e a frenagem regenerativa. O banco passou a ter 72 células e a configuração tornou-se 24s3p. Um dos destaques do projeto foi a diminuição do volume da estrutura em 10% em relação ao ano anterior, mesmo com o aumento da quantidade de células em 50%. Também, o isolamento elétrico foi otimizado e reduziu-se a quantidade de parafusos necessários para a montagem, contribuindo para a segurança, facilidade de manutenção e baixo peso.'
      },
      {
        type: 'subsystem',
        content: 'BATTERY MONITORING SYSTEM (BMS)'
      },
      {
        type: 'text',
        content:
          'O BMS – modular, baseado em master/slave e ampliável – foi otimizado, contando com filtros via software e um display touchscreen para controle de parâmetros e monitoração local em tempo real, auxiliando no monitoramento do carregamento e diagnóstico de manutenção do banco.'
      },
      {
        type: 'title',
        content: 'MECÂNICA'
      },
      {
        type: 'subsystem',
        content: 'POWERTRAIN'
      },
      {
        type: 'image',
        content: ['POWERTRAIN.png']
      },
      {
        type: 'text',
        content:
          'O foco base para a transmissão 2019 foi aumentar a confiabilidade e a eficiência do sistema, bem como otimizar o dimensionamento das peças. Falhas estruturais e de fabricação foram corrigidas, a fim de reduzir vibrações e evitar desgaste acentuado do sistema. Também foi possível reduzir a massa e a inércia rotacional dos componentes, tanto pela otimização estrutural, quanto pela migração para o uso de juntas e semieixos de projeto próprio. Em paralelo, deu-se início aos estudos dos efeitos da fadiga em componentes mecânicos, visando alicerçar o desenvolvimento de uma metodologia de dimensionamento de peças mais precisa e condizente com as aplicações dos protótipos da equipe.'
      },
      {
        type: 'subsystem',
        content: 'CHASSI'
      },
      {
        type: 'image',
        content: ['CHASSI.png']
      },
      {
        type: 'text',
        content:
          'Entre os principais avanços do projeto em relação ao ano anterior se destaca o melhor dimensionamento das juntas soldadas e parafusadas, realizado de acordo com normas nacionais vigentes, garantindo maior confiabilidade ao veículo e criando as bases para redução das dimensões das fixações em projetos futuros. Em relação ao chassi propriamente, maior robustez e rigidez torcional foram alcançadas, de modo a suportar e distribuir melhor as cargas impostas, permitindo maior controle da distribuição de transferência lateral de carga. Além disso, o seu processo de fabricação foi mais acurado, através do uso de um novo tipo de gabarito – planos cortados a laser – aumentando a correspondência entre o projetado e o fabricado. Por último, foram feitos ensaios, testes e aquisições de dados visando assegurar a qualidade da estrutura e validar as simulações computacionais realizadas na fase inicial.'
      },
      {
        type: 'subsystem',
        content: 'AERODINÂMICA'
      },
      {
        type: 'image',
        content: ['AERO.png']
      },
      {
        type: 'text',
        content:
          'A nova meta da equipe de completar a prova de enduro mesmo com limitações de baterias e motores fez com que o pacote aerodinâmico fosse focado em proporcionar maior eficiência ao veículo. Com base nisso, a asa dianteira, a carenagem traseira e o bico foram desenvolvidos com o intuito exclusivo de diminuir a resistência aerodinâmica, o que resultou em uma redução final de 50% nos níveis de arrasto. Todo o projeto foi baseado no uso de CFD para o desenvolvimento e prototipagem e, de modo a avaliar de forma efetiva a eficiência do pacote aerodinâmico e seus impactos nas provas e pontuações finais, testes em túnel de vento e em pista foram realizados.'
      },
      {
        type: 'subsystem',
        content: 'DIREÇÃO'
      },
      {
        type: 'image',
        content: ['DIRECAO.png']
      },
      {
        type: 'text',
        content:
          'A direção 2019 teve um foco maior no aumento da responsividade do sistema, a fim de torná-lo mais direto. Para isso, reduziu-se a razão de esterçamento de 5:1 para 3,5:1 e desenvolveu-se um sistema de redução de folga da coluna, tornando o veículo mais ágil em mudanças de trajetória. Ainda, conferiu-se ajustabilidade ao sistema através de steering arms substituíveis e obteve-se uma redução de massa de 25% através do redesenho dos componentes já existentes.'
      },
      {
        type: 'subsystem',
        content: 'SUSPENSÃO'
      },
      {
        type: 'image',
        content: ['SUSP-DIANT.png', 'SUSP-TRAS.png']
      },
      {
        type: 'text',
        content:
          'Em 2019 otimizou-se o projeto cinemático da suspensão, visando alcançar um ganho de cambagem mais adequado; investiu-se novamente em ajustabilidade, com o desenvolvimento de barras estabilizadoras do tipo faca giratória, consideradas mais versáteis, e de camber plates, capazes de proporcionar diferentes ajustes de cambagem; e reduziu-se a massa não-suspensa, através do emprego de alumínio aeronáutico nas mangas de eixo e cubos de roda, contribuindo para a aderência dos pneus mediante irregularidades da pista e para a redução da inércia rotacional do veículo e das partes girantes.'
      },
      {
        type: 'subsystem',
        content: 'FREIOS'
      },
      {
        type: 'image',
        content: ['FREIO.png']
      },
      {
        type: 'text',
        content:
          'O projeto do sistema de freios do NK-319 teve três focos principais: validação do comportamento teórico do sistema, redução de massa de peças julgadas superdimensionadas e análises mais precisas das cargas mecânicas e térmicas impostas aos componentes. Sensores de pressão e temperatura foram empregados, possibilitando avaliar as pressões nas linhas hidráulicas em diferentes condições de frenagem e a necessidade de arrefecimento dos discos de freio, validando o projeto. Por fim, através de otimizações topológicas, 23% da massa do sistema foi reduzida.'
      }
    ]
  },
  NK218: {
    year: 2018,
    sectionStart: {
      top: false,
      left: false
    },
    positions: {
      general: 2,
      categories: [
        { name: 'custos', position: 2 },
        { name: 'apresentação', position: 10 },
        { name: 'design', position: 3 },
        { name: 'aceleração', position: 10 },
        { name: 'skidpad', position: 3 },
        { name: 'autocross', position: 2 },
        { name: 'enduro', position: 2 }
      ],
      text: [
        'O NK-218 é o nosso 2º protótipo​, fabricado no ano de 2018 e lançado em 9 de novembro. Foi o primeiro carro da equipe a conseguir realizar as provas dinâmicas, e não decepcionou.',
        'Era um veículo de alta confiabilidade eletrônica e bom comportamento dinâmico, apresentando um limite de aderência de fácil exploração. Coroado com o segundo lugar geral da competição, o modelo conta com diversos prêmios na FSAE 2018.'
      ]
    },
    especifications: {
      dtec: 'DTEC-NK218.jpg',
      data: [
        { info: 'Motor', data: 'WEG VE-M01' },
        { info: 'Autonomia', data: '13 km' },
        { info: 'Potência Máx.', data: '54 cv' },
        { info: 'Bitola Diant.', data: '1150 mm' },
        { info: 'Torque Máx.', data: '8,2 kgf.m' },
        { info: 'Bitola Tras.', data: '1150 mm' },
        { info: '0 - 75m', data: '4,6 s' },
        { info: 'Entre-eixos', data: '1150 mm' },
        { info: 'Velocidade Máx.', data: '99 Km/h' },
        { info: 'Massa', data: '267 kg' },
        { info: 'Consumo', data: '244 Wh/km' },
        { info: 'Massa Diant.', data: '49,9%' }
      ]
    },
    subsystems: [
      {
        type: 'title',
        content: 'ELETRÔNICA'
      },
      {
        type: 'text',
        content:
          'O foco na otimização das soluções de 2017 em conjunto com o aprimoramento da segurança e da organização foram os pontos chaves do projeto eletrônico de 2018, que resultaram num ganho significativo de confiabilidade. Houve implementação de watchdog na ECU, para resguardar o carro de travamento de código; comunicação isolada com o inversor e filtragem de dados por superamostragem.'
      },
      {
        type: 'subsystem',
        content: 'CONTROLE'
      },
      {
        type: 'text',
        content:
          'No sistema de controle, foram feitas algumas alterações tendo em vista atender o uso automotivo: a comunicação com o inversor passou a ser feita em protocolo CAN, reduzindo ruídos, e adotaram-se conectores automotivos, com fixação feita em pontos estratégicos e reforçada em pontos críticos. Tais providências conferiram boa confiabilidade quanto à integridade do sinal sob efeito de vibração intensa, evitando mal contato e perdas de conexão. Os cabos foram envoltos por malha náutica, protegendo-os contra possíveis agentes cortantes do ambiente, melhorando a rigidez mecânica e mantendo-os unidos e organizados.'
      },
      {
        type: 'subsystem',
        content: 'TELEMETRIA & AQUISIÇÃO'
      },
      {
        type: 'text',
        content:
          'Desenvolveu-se um sistema de telemetria capaz de se comunicar com os outros módulos do veículo por CAN, seguindo a filosofia geral de projeto, de modo que era possível transmitir em tempo real as informações de velocidade do veículo e das quatro rodas separadamente; temperatura dos motores, inversores e acumulador; corrente dos motores e acumulador; carga, tensão, temperatura e corrente das baterias; além de estado e erros do BMS, ECU e inversores aos boxes. Ademais, foi implementado conjuntamente um sistema de datalog local com o uso de cartão SD e microcontrolador, responsável, também, por exibir dados vitais do carro ao piloto por meio do painel no cockpit.'
      },
      {
        type: 'subsystem',
        content: 'BANCO DE BATERIAS'
      },
      {
        type: 'text',
        content:
          'O projeto do banco de baterias do NK-218 se propôs a tornar o veículo mais competitivo, com a definição de parâmetros mais precisos mediante análises computacionais e uma estratégia voltada para a performance. Também visou melhorar a segurança dos operadores e das células, assim como otimizar e facilitar a construção e a montagem. A configuração usada consistiu em 24 células em série (divididas em 2 packs de 12 células) e 2 ramos em paralelo; a capacidade total de carga foi de 3168 Wh. Ainda, tendo em vista suprir a necessidade de refrigeração, coolers foram adotados para arrefecimento forçado do banco.'
      },
      {
        type: 'subsystem',
        content: 'BATTERY MONITORING SYSTEM (BMS)'
      },
      {
        type: 'text',
        content:
          'No BMS 2018, a nova disposição dos sensores e dos módulos responsáveis por fazer as medições contribuiu para uma maior precisão de leitura, que, juntamente ao uso do protocolo ISOSPI e à implementação de watchdogs, assegurou a confiabilidade do sistema. Por fim, a estimativa de carga e o balanceamento de células foram feitos com algoritmos mais adequados à aplicação, proporcionando resultados mais precisos e um melhor desempenho das baterias.'
      },
      {
        type: 'title',
        content: 'MECÂNICA'
      },
      {
        type: 'subsystem',
        content: 'POWERTRAIN'
      },
      {
        type: 'text',
        content:
          'Após novas análises em 2018, com simulações que levaram em consideração o novo grip e massa do veículo, manteve-se a redução de 9:1 em dois estágios, que se mostrou adequada mais uma vez por razões de custo e empacotamento. Com o objetivo de reduzir a massa do sistema e otimizá-lo como um todo, novas geometrias de peça foram desenhadas e um estudo de fadiga iniciado. Também, com o desenvolvimento de tensionadores e a aquisição de um novo e mais adequado rolamento para conexão, foi possível melhorar o tensionamento e o alinhamento das correntes, resultando num sistema mais eficiente.'
      },
      {
        type: 'subsystem',
        content: 'CHASSI'
      },
      {
        type: 'text',
        content:
          'Em 2018, dimensionou-se uma carroceria mais enxuta, cerca de 10% mais leve, e fez-se uso de um modelo matemático para estimar um valor de rigidez torcional apropriado. Com estudos mais aprofundados via método dos elementos finitos, foi possível simular o valor de rigidez à torção e analisar os níveis de tensão sofridos durante a operação do veículo. Realizaram-se, então, diversos testes e aquisições de dados no intuito de validar as análises computacionais e assegurar o bom desempenho da estrutura.'
      },
      {
        type: 'subsystem',
        content: 'AERODINÂMICA'
      },
      {
        type: 'text',
        content:
          'O projeto aerodinâmico do NK-218 foi feito em fluidodinâmica computacional e a sua validação realizada através de ensaios em túnel de vento e testes em pista. As análises de CFD foram feitas em Star CCM+ utilizando-se diversos modelos de turbulência, um para cada etapa de desenvolvimento, possibilitando uma análise mais ampla do comportamento do escoamento ao redor do veículo. As análises para determinar a rigidez da carenagem foram feitas nos softwares Ansys e Abaqus.'
      },
      {
        type: 'subsystem',
        content: 'DIREÇÃO'
      },
      {
        type: 'text',
        content:
          'O projeto de direção do protótipo 2018 foi feito com dois objetivos principais: otimizar a geometria de esterçamento, para garantir uma melhor utilização dos pneus, e reduzir as folgas do sistema, para menor tempo de resposta e evitar desgaste prematuro e sobrecarga de peças. Para o cumprimento do primeiro objetivo, foram utilizados dados fornecidos pelo Milliken Research Associate através do TTC (Tire Test Consortium) para obter os valores ótimos de slip angle para cada pneu na condição para a qual o sistema foi projetado. Já na realização do segundo objetivo, focou-se em garantir que a junta universal da coluna de direção trabalhasse da maneira adequada e que todos os componentes fossem bem fixados no chassi.'
      },
      {
        type: 'subsystem',
        content: 'SUSPENSÃO'
      },
      {
        type: 'text',
        content:
          'Desenvolvido juntamente com o sistema de direção, o projeto de suspensão de 2018 teve por principal meta otimizar o uso dos pneus em relação ao primeiro protótipo e conferir ajustabilidade ao sistema. Isso foi concretizado através de simulações cinemáticas mais acuradas, mediante utilização de dados do TTC e do software Adams Car, que resultaram na elaboração de uma geometria de suspensão mais adequada à finalidade do protótipo. Além disso, a realização de revalvulação nos amortecedores também conferiu aos pneus melhor interação com a pista. Por fim, o ganho em ajustabilidade deveu-se ao desenvolvimento de barras estabilizadoras ajustáveis, que aumentaram significativamente as possibilidades de setups dinâmicos.'
      },
      {
        type: 'subsystem',
        content: 'FREIOS'
      },
      {
        type: 'text',
        content:
          'O projeto de freio do NK-218 teve o objetivo de garantir uma desaceleração eficaz ao veículo levando em consideração uma boa ergonomia de pilotagem, visando potência, precisão e conforto no acionamento. Assim como os sistemas de suspensão e direção desse ano, a modelagem do sistema de freios foi realizada com o auxílio de dados de pneu do FSAE TTC. Além disso, o pedal box, estrutura que compreende os pedais, cilindros mestres e balance bar, foi projetado analisando-se parâmetros anatômicos, como força do piloto, tamanho do pé e comprimento das pernas, para o adequado dimensionamento da alavanca de pedal.'
      }
    ]
  },
  Kayran: {
    year: 2017,
    sectionStart: {
      top: true,
      left: false
    },
    positions: {
      general: 10,
      categories: [
        { name: 'custos', position: 10 },
        { name: 'apresentação', position: 10 },
        { name: 'design', position: 8 },
        { name: 'aceleração' },
        { name: 'skidpad' },
        { name: 'autocross' },
        { name: 'enduro' }
      ],
      text: [
        'Desenvolvido em 2017, foi o primeiro protótipo da equipe, colocando em prática o objetivo dos integrantes de desenvolver tecnologia nacional e transformar estudantes em profissionais capacitados. Embora pesado e de grandes dimensões, por possuir estrutura e componentes robustos, o Kayran era bastante confiável mecanicamente.',
        'Foi pioneiro na competição FSAE Brasil ao utilizar a motorização dupla e o BMS de fabricação própria e, mesmo sem ter conseguido realizar as provas dinâmicas, alcançou décimo lugar na classificação geral.'
      ]
    },
    especifications: {
      dtec: 'DTEC-Kayran.jpeg',
      data: [
        { info: 'Motor', data: 'WEG VE-M01' },
        { info: 'Autonomia', data: '24 km' },
        { info: 'Potência Máx.', data: '54 cv' },
        { info: 'Bitola Diant.', data: '1270 mm' },
        { info: 'Torque Máx.', data: '8,2 kgf.m' },
        { info: 'Bitola Tras.', data: '1270 mm' },
        { info: '0 - 75m', data: '8 s' },
        { info: 'Entre-eixos', data: '1550 mm' },
        { info: 'Velocidade Máx.', data: '87 Km/h' },
        { info: 'Massa', data: '349 kg' },
        { info: 'Consumo', data: '264 Wh/km' },
        { info: 'Massa Diant.', data: '49,9%' }
      ]
    },
    subsystems: [
      {
        type: 'title',
        content: 'ELETRÔNICA'
      },
      {
        type: 'text',
        content:
          'O projeto eletrônico de 2017 consistiu em desenvolver um sistema de controle do conjunto trativo, sistema de gerenciamento de bateria e sistemas de segurança. Teve como funções processar a demanda de torque para cada roda; comandar os inversores e, por consequência, os motores; desenvolver os sistemas de segurança; fazer o sensoriamento dos pedais, volante e velocidade das rodas; gerenciar e proteger as baterias; entre outras funções.'
      },
      {
        type: 'subsystem',
        content: 'CONTROLE'
      },
      {
        type: 'text',
        content:
          'A plataforma de microcontroladores selecionada foi a PIC® da Microchip, usada em todas as placas do carro, por questões de manutenção e troca de conhecimento entre os subsistemas; e a comunicação com os inversores feita com protocolo serial RS-485, utilizando par trançado e sinal diferencial. A ECU foi totalmente desenvolvida pela equipe, reduzindo custos e tornando o sistema mais adequado às necessidades do veículo. Ao mesmo tempo, por centralizar o tratamento de dados e ser capaz de se comunicar usando diferentes padrões de comunicação, o sistema tornou possível comandar outros tipos de inversores e drivers, permitindo seu uso em aplicações diversas.'
      },
      {
        type: 'subsystem',
        content: 'BANCO DE BATERIAS'
      },
      {
        type: 'text',
        content:
          'O projeto do banco de baterias de 2017 foi conduzido com foco em proporcionar autonomia suficiente para o veículo completar a prova de Enduro (22 km) e em fornecer a corrente necessária para que a força trativa ultrapassasse ligeiramente o limite de aderência dos pneus, a fim de otimizar a aceleração do protótipo. Utilizaram-se células de LiFePO4 da A123 Systems, com capacidade de 20 Ah, na configuração 24s4p.'
      },
      {
        type: 'subsystem',
        content: 'BATTERY MONITORING SYSTEM (BMS)'
      },
      {
        type: 'text',
        content:
          'Visando confiabilidade, total controle sobre o projeto e redução de custos, o BMS, sistema responsável por garantir o aproveitamento ótimo da energia e reduzir os riscos de danos às células, também foi totalmente desenvolvido pela equipe. Com foco na versatilidade e na fácil manutenção, o design foi pensado de maneira modular, de forma que o centro de tratamento de dados se conectasse a módulos de aquisição, permitindo sua aplicação em bancos de baterias de uma ampla gama de tecnologias e uma vasta possibilidade de configurações de células. A manutenção também era simples, uma vez que os módulos podiam ser facilmente substituídos. Além disso, o projeto apresentou alta competitividade de mercado, já que possuía as diversas funcionalidades de equivalentes comerciais a um custo reduzido.'
      },
      {
        type: 'title',
        content: 'MECÂNICA'
      },
      {
        type: 'subsystem',
        content: 'POWERTRAIN'
      },
      {
        type: 'text',
        content:
          'O powertrain 2017 contou com dupla motorização traseira independente com utilização de diferencial eletrônico. Foi elaborado com motores WEG e transmissão com foco na eficiência e bom empacotamento. Utilizou relação de redução de 9:1, para maior potencial de aceleração e, principalmente, para fazer com que o ponto de operação mais frequente na prova de Enduro também fosse o ponto de maior eficiência do motor. O sistema contou com dois estágios de redução, sendo composto por um redutor de engrenagens planetárias na saída do motor associado a um sistema pinhão, corrente e coroa. Por fim, semieixos homocinéticos foram empregados para transmitir o torque das coroas para as rodas.'
      },
      {
        type: 'subsystem',
        content: 'CHASSI'
      },
      {
        type: 'text',
        content:
          'As principais demandas consideradas na escolha do tipo de chassi foram rigidez estrutural, facilidade de fabricação, peso e custo. O material selecionado foi o aço baixo carbono (SAE 1020), devido ao baixo custo e boa soldabilidade. Também, valorizaram-se escolhas de projeto que resultassem em alta rigidez torcional, o que foi posto em prática com a adoção de tubos de seção quadrada em determinadas regiões do veículo. Durante o processo de fabricação, utilizaram-se gabaritos de MDF, de elevado custo-benefício, a fim de garantir os ângulos e distâncias corretas da estrutura e permitir sua soldagem com mínima deformação.'
      },
      {
        type: 'subsystem',
        content: 'AERODINÂMICA'
      },
      {
        type: 'text',
        content:
          'Por não possuir pacote aerodinâmico, o foco do projeto da carenagem foi obter o menor arrasto aerodinâmico possível. Além disso, deu-se importância à facilidade de fabricação, à qualidade de acabamento e ao baixo custo. Foram realizadas simulações CFD no programa Ansys para a otimização da geometria do bico. Também foram desenvolvidos sidepods com o objetivo de direcionar o fluxo de ar para os motores e acumulador, melhorando o arrefecimento.'
      },
      {
        type: 'subsystem',
        content: 'DIREÇÃO'
      },
      {
        type: 'text',
        content:
          'O sistema de direção do protótipo Kayran foi projetado de forma a conciliar desempenho e ergonomia. Adotou-se uma razão de esterçamento de 5:1 e um volante de grande diâmetro, resultando em uma direção mais leve e ergonômica. Também foram empregados geometria Ackermann e acionamento do tipo pinhão-cremalheira de dentes retos.'
      },
      {
        type: 'subsystem',
        content: 'SUSPENSÃO'
      },
      {
        type: 'text',
        content:
          'Visando maximizar o contato dos pneus com o solo, adotou-se uma suspensão do tipo duplo A, que proporciona ótima estabilidade e controle, além de grande ajustabilidade. Utilizando-se configuração pullrod na dianteira e pushrod na traseira, foi possível alcançar ótimo empacotamento e bom aproveitamento do curso do coilover.'
      },
      {
        type: 'subsystem',
        content: 'FREIOS'
      },
      {
        type: 'text',
        content:
          'Com foco na segurança do piloto e boa performance de frenagem, o protótipo 2017 foi equipado com freios a disco nas quatro rodas e pinças flutuantes, contando com duas linhas hidráulicas, divididas em dianteira e traseira. Os discos foram cortados a laser em aço SAE 1045 e o pedal de freio, cortado a água em alumínio.'
      }
    ]
  }
}

export const years = [
  { year: '' },
  { year: '' },
  {
    year: '2017',
    car: 'Kayran',
    image: 'kayran.png',
    description:
      'Primeiro protótipo da equipe, dando vida ao objetivo dos integrantes de desenvolver tecnologia nacional e formar profissionais capacitados.',
    to: '/prototipos/Kayran',
    initialYear: false,
    time: '4,6s',
    velocity: '350km/h',
    potency: '25kW'
  },
  {
    year: '2018',
    car: 'NK218',
    image: 'NK218.png',
    description:
      'Coroado com o segundo lugar geral da competição, o modelo conta com diversos prêmios na FSAE 2018.',
    to: '/prototipos/NK218',
    initialYear: false,
    time: '4,5s',
    velocity: '340km/h',
    potency: '24kW'
  },
  {
    year: '2019',
    car: 'NK319',
    image: 'NK319.png',
    description:
      'O grande empenho da equipe durante o ano levou ao primeiro lugar na prova de projeto.',
    to: '/prototipos/NK319',
    initialYear: true,
    time: '4,4s',
    velocity: '330km/h',
    potency: '23kW'
  },
  {
    year: '2020/21',
    car: 'NK420',
    image: 'NK420.png',
    description: 'Carro em desenvolvimento.',
    to: '/prototipos/NK420',
    initialYear: false,
    time: '-',
    velocity: '-',
    potency: '-'
  },
  {
    year: '2022',
    car: 'NK420',
    image: 'NK420.png',
    description: 'Carro em desenvolvimento.',
    to: '/prototipos/NK420',
    initialYear: false,
    time: '-',
    velocity: '-',
    potency: '-'
  }
]
