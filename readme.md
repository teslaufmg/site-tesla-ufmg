# SITE TESLA UFMG

Site construido com o React JS utilizando o framework Next JS.
Hospedado no site da Vercel em https://tesla-ufmg.vercel.app/

## Instalação, execução e deploy

#### Configuração do ambiente:

- Instalação Node JS: https://nodejs.org/en/download/
- Instalação do Git: https://git-scm.com/downloads

Após as instalações, para clonar o repositório, rode o seguinte comando em seu terminal na pasta desejada

- Clone do repositório: git clone https://github.com/teslaufmg/site-tesla-ufmg

Caso não tenha permissão de poder clonar ou fazer commits nesse repositório solicite a algum perfil com acesso de administrador a esse repositório

- Link da página para liberar acesso: https://github.com/teslaufmg/site-tesla-ufmg/settings/access

#### Instalação:

No terminal, dentro da pasta do repositório rode o seguinte comando para instalar as bibliotecas necessárias.
Esse comando deve ser executado apenas antes da primeira execução

- Instalação das bibliotecas: npm install

#### Execução:

Para rodar o código deve executar o seguinte comando na pasta do repositório.

- Execução: npm run dev

#### Deploy:

Após a realização das mudanças necessárias, deve-se rodar:

- git add .
- git commit -m "<mensagem descrevendo as mudanças>"
- git push

Em sequencia deve-se acessar o site da vercel (https://vercel.com/teslaufmg/tesla-ufmg) logado com as credencias do Tesla

---

## Atualização de conteúdo

As atualizações dos conteúdos serão feitas todas dentro dos arquivos na pasta ./src/providers

#### Conceitos para facilitar:

- Objeto: { chave: valor } representado por essa sintaxe
- Array: [Item 1, Item 2] representado por essa sintaxe
- String: "texto" sempre vem entre aspas
- Number: 0 valor numérico
- Boolean: True ou False
- Caminho da url (path): Tudo que vem depois de `https://tesla-ufmg.vercel.app/`. Esse caminho é definido de acordo com as pastas e arquivos dentro de `./src/pages`. Por exemplo o arquivo `./src/pages/historia.tsx` indica o caminho `/historia`. Para mais informações sobre o caminho ver https://nextjs.org/docs/routing/introduction
- Caminho do arquivo da imagem: Todas as imagens estão salvas dentro da pasta `./public/assets/images`, separados de acordo com a página em que aquela imagem será exibida.

### Header e Sidebar

- Arquivo: headerProvider.ts

Para adicionar uma opção ao header deve-se adicionar um objeto ao array `headerOptionsProvider`. Lembrando que a ordem que os objetos se encontram define a ordem que serão exibidos.

O objeto deve conter as chaves:

- label: String, o nome da opção que irá aparecer na tela
- to: String, caminho da url redirecionando para a página
- options: Array, opcional, caso presente a opção será do tipo "dropdown". Esse array deverá conter outros objetos do mesmo formato { label: string, to: string }

Para adicionar uma opção ao sidebar deve-se adicionar um objeto ao array `siderbarOptionsProvider`. Lembrando que a ordem que os objetos se encontram define a ordem que serão exibidos.

O objeto deve conter as chaves:

- label: String, o nome da opção que irá aparecer na tela
- to: String, caminho da url redirecionando para a página

### Footer

- Arquivo: footerProvider.ts

As opções do footer são divididas entre `Explorar` e `Social`.

- Explorar:
  O item `explorar` do objeto `FooterOptionsProvider` é um array composto por outros arrays, em que cada array indica uma coluna que irá aparecer contendo as opções de explorar.
  Para adicionar um novo item basta adicionar um objeto no array da coluna desejada, lembrando que a ordem dos itens é a ordem que irá aparecer na tela.
  O objeto adicionado deve ter as seguintes chaves:
  - label: String, o nome que irá aparecer na tela
  - to: String, caminho da url redirecionando para a página
- Social:
  O item `social` do objeto `FooterOptionsProvider` é um array que contem os objetos das opções a serem listadas na coluna do social, sendo que a ordem do array será a ordem a ordem mostrada na tela.
  O objeto adicionado deve ter as seguintes chaves:
  - label: String, o nome que irá aparecer na tela
  - to: String, caminho da url redirecionando para a página

### Página de História

- Arquivo: historiaProvider.ts

O conteúdo da página de história é dividida em anos, e está dentro de um array, `historiaProvider`, de objetos, sendo que cada objeto contém o conteúdo de cada ano. A ordem que os objetos se encontram é a ordem que os anos apareceram na página.

Cada objeto contém as seguintes chaves:

- id: String, identificador único
- content: Array, formado por objetos que formarão o conteúdo

Sendo cada objeto desse array de conteúdo do seguinte formado:

- type: 'video' | 'text' | 'title' | 'image' | 'frase' | 'equipe'. Um desses valores, indicando o tipo de conteúdo
- videoURL: String, Caso o type seja `'video'`, valor necessário, indicando a URL do vídeo
- text: String, Caso o type seja `'text'`, `'title'` ou `'frase'`, valor necessário, com o texto que irá aparecer, sendo um parágrafo por objeto, caso seja text
- imagePath: String, Caso o type seja `'image'`, valor necessário, com o caminho do arquivo da imagem que está dentro da pasta `historia`, no ./public/assets/images.
- legend: String, Caso o type seja `'image'`, valor necessário, com o texto que será exibido como legenda da imagem
- year: String, Caso o type seja `'equipe'`, valor necessário, com o ano da equipe daquele conteúdo
- captain: String, Caso o type seja `'equipe'`, valor necessário, com o nome do capitão daquele ano
- positions: Array, Caso o type seja `'equipe'`, valor necessário, com os objetos que indicam valores das posições daquele ano, sendo as chaves desses objetos
  - position: Number, número que indica a posição
  - category: String, indica a prova da posição

### Página de Protótipos

- Arquivo: prototiposProvider.ts

Para adicionar mais um protótipo na página de protótipos, basta editar a constante `years`. Ela é um array composta por objetos, em que dois dois primeiros itens obrigatoriamente devem ser `{ year: '' }`, e em seguida vem os objetos com os dados dos carros de cada ano.
O Objeto é composto pelas seguintes chaves:

- year: String, indicando o ano do carro (por ser uma string, pode ser tanto '2017' quanto '2020/21')
- car: String, identifica o nome do carro
- image: String, caminho da imagem que será mostratada na tela de prototipos, sendo esse caminho relativo à pasta do carro dentro de protótipos `./public/images/prototipos/[nome do carro]`
- description: String, texto com uma breve descrição do veículo
- to: String, caminho da url que indica a página específica do protótipo
- initialYear: Boolean, se `True` indica qual o ano que deve vir selecionado quando a página for carregada, somente um ano deve ser marcado como `True`
- time: String, valor de tempo que vai na caixa com o titulo `0-100 Km/h`
- velocity: String, valor de velocidade que vai na caixa com o título `Vel. Max.`
- potency: String, valor de potencia que vai na caixa com o título `Potência`

### Página de cada protótipo

- Arquivo: prototiposProvider.ts

A página de cada protótipo é construida com o conteúdo presente no objeto `prototiposProvider`. Esse objeto contém chaves com os nomes dos protótipos, mesmo nomes que devem ser usados no caminho da url do protótipo.

O objeto de cada protótipo contém as seguintes chaves:

- year: Number, ano da competição que o carro foi usado, aparece na primeira sessão
- sectionStart: Objeto, indica a posição na tela em que o nome do carro irá aparecer

  - top: Boolean, se `True` o texto aparece no alto da primeira sessão, se não aparece em baixo
  - left: Boolean, se `True` o texto aparece no lado esquerdo da primeira sessão, se não aparece lado direito

- positions: Objeto, contem os dados que serão mostrados na segunda sessão
  - general: Number, valor da posição geral na competição, valor que aparece também na primeira sessão
  - categories: Array, formado por objetos indicando cada posição nas provas
    - name: String, nome da prova
    - position: Number, valor que indica a posição na prova, não é obrigatório, caso não tenha irá aparecer '-'
  - text: Array, formado por strings, sendo cada string um paragrafo do texto que aparece na sessão
- especifications: Objeto, contem os dados que serão mostrados na terceira sessão
  - dtec: String, contem o caminho da imagem do desenho técnico que aparecerá, sendo esse caminho relativo à pasta do carro dentro de protótipos `./public/images/prototipos/[nome do carro]`
  - data: Array, formado por objetos e contem as informações dos dados do carro
    - info: String, valor com o nome da informação
    - data: String, valor da informação
- subsystems: Array, formado por dois tipos de objetos, que preencherá o conteúdo da quarta sessão da página, lembrando que a ordem no array será a ordem na tela, sendo esses objetos da seguinte forma

  - type: 'title' | 'subsystem' | 'text', deve ser um dos valores, que indicam qual será o tipo do conteúdo do objeto
  - content: String, conteúdo com o título, nome do subsistem ou texto

  ou

  - type: 'image', caso o objeto tenha uma imagem de conteúdo
  - content: Array, formado por strings que indicam as imagens, dando liberdade de ser uma ou mais imagens

### Página de cada Equipe

- Arquivo: equipeProvider.ts

A página de equipe é construida com o conteúdo específico da equipe de um ano, mostrando foto, nome, posição e linkedin de cada membro, com o conteúdo presente em `equipeProvider`. Esse objeto contém chaves que são cada ano, e o conteúdo pra cada ano.

- ano: Essa chave deve ser o valor que vai aparecer no caminho da url, como por exemplo `'/equipe/2019'`, em que `2019` deve ser a chave.

Essa chave recebe um objeto do seguinte formato:

- captain: Objeto, com informações do capitão da equipe, no seguinte formato
  - name: String, nome do capitão
  - imagePath: String, caminho da imagem do capitão, sendo esse caminho relativo à pasta do ano dentro de `./public/assets/images/equipe/[ano]`
  - linkedin: string, Link da página do linkedin do capitão
- members: Array de objetos, com informações de cada subsistema, sendo esses objetos no formato
  - setor: String, nome do subsistema
  - members: Array de objetos, com informações de cada membro do subsistema, sendo esses obketos no formato
    - name: String, nome do membro
    - role: String, posição do membro no subsistema
    - imagePath: String, caminho da imagem do membro, sendo esse caminho relativo à pasta do ano dentro de `./public/assets/images/equipe/[ano]`
    - linkedin: string, Link da página do linkedin do membro

### Página de Parceiros

- Arquivo: parceirosProvider.ts

A página de parceiros é construida com o conteúdo presente em `parceirosProvider`. Essa variável é um array de objetos, sendo que cada objeto possui os parceiros de cada categoria. Lembrando que a ordem em que os objetos das categorias se encontram nesse array é a ordem em que serão mostrados na tela

O objetos são no seguinte formato

- category: 'diamante' | 'platina' | 'ouro' | 'prata' | 'bronze' | 'parceiros' | 'apoio', valores indicando a categoria daquele grupo
- partners: Array de objetos, contém todos os parceiros daquela categoria, sendo que a ordem no array é a ordem que os parceiros aparecerão na tela, o objeto possui o seguinte formato
  - title: string, Nome do parceiro que aparecerá no modal quando clicar na logo
  - description: string, descrição sobre o parceiro que aparecerá no modal quando clicar na logo
  - text: string, texto sobre o parceiro que aparecerá no modal quando clicar na logo
  - to: string, link para a página do parceiro
  - social: Objeto, contém as redes sociais do parceiro, podendo elas serem opcionais, o objeto pode conter as seguintes chaves:
    - facebook?: string, opcional, url da pagina do facebook
    - instagram?: string, opcional, url da página do instagram
    - youtube?: string, opcional, url do canal do youtubeß
  - path: string, caminho da imagem da logo do parceiro, sendo esse caminho relativo à pasta da categoria dentro de `./public/assets/images/parceiros/[categoria]`

### Página de Galeria e de cada ano da galeria

- Arquivo: galeriaProvider.ts

A página de galeria é construida com o conteúdo presente em `GaleriaProvider`. Essa variável é um objeto que possui como chave cada ano.

- ano: Essa chave deve ser o valor que vai aparecer no caminho da url, como por exemplo `'/galeria/2019'`, em que `2019` deve ser a chave.

Cada uma dessas chaves recebe um array de strings, sendo essas strings os caminhos para cada imagem. Esses caminhos são relativos à pasta de ano dentro de `./public/assets/images/galeria/[ano]`

Para cada chave desse objeto é gerado na página `/galeria` um novo quadrado com uma imagem presente em `./public/assets/images/galeria` com o nome `[ano]_capa.jpg`

### Página de Rollouts

- Arquivo: rolloutsProvider.ts

A página de rollouts é construida com o conteúdo presente em `RolloutsProvider`. Essa variável é um array de objetos, sendo que cada objeto representa um protótipo. Lembrando que a ordem em que os objetos se encontram no array é a ordem que os protótipos aparecerão na tela. Esse objeto tem o seguinte formato:

- car: string, nome do carro
- video: Array de objetos, com o vídeo, sendo esse objeto da seguinte forma:
  - title: string, opcional, usado para casos como 'Parte 01'
  - url: string, url do vídeo
