# SITE TESLA UFMG

Site construido com o React JS utilizando o framework Next JS.
Hospedado no site da Vercel em https://tesla-ufmg.vercel.app/

## Instalação, execução e deploy

#### Configuração do ambiente:

- Instalação Node JS: https://nodejs.org/en/download/
- Instalação do Git: https://git-scm.com/downloads

Após as instalações, para clonar o repositório, rode o seguinte comando em seu terminal na pasta desejada

- Clone do repositório: git clone https://github.com/Tesla-UFMG/site-tesla-ufmg.git

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

### Página de cada protótipo

- Arquivo: prototiposProvider.ts

### Página de cada Equipe

- Arquivo: equipeProvider.ts

### Página de Parceiros

- Arquivo: parceirosProvider.ts

### Página de Galeria

- Arquivo: galeriaProvider.ts

### Página de Rollouts

- Arquivo: rolloutsProvider.ts
