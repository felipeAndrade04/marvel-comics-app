<h1 align="center">
  Marvel Comics
</h1>

<br />

<p align="center">
  <a href="https://marvel-comics-app.netlify.app/" target="_blank">
    <img alt="Demo on Netlify" src="https://res.cloudinary.com/lukemorales/image/upload/v1599785319/readme_logos/demo_on_netlify_umjmch.png">
  </a>
</p>

## Indice
- [Sobre](#-sobre)
- [Funcionalidades](#-funcionalidades)
- [Próximos passos](#-próximos-passos)
- [Tecnologias](#-tecnologias)
- [Como baixar e executar o projeto](#-como-baixar-e-executar-o-projeto)

---

## 🔖 Sobre

O **Marvel Comics** é uma aplicação web desenvolvida com o intuito de consumir e explorar informações dos quadrinhos da API da Marvel.

---

## 🚀 Funcionalidades

- Layout responsivo
- Listar quadrinhos da API
- Paginação das informações
- Modal de detalhes do quadrinho ao clica sobre ele
- Filtro de busca para pesquisar quadrinhos pelo título
  - Para o filtro foi desenvolvido um hook de debounce para melhorar a performance
- Selecionar quadrinhos para envio
  - Modal que lista os quadrinhos selecionados e disponibiiliza um mapa para selecionar o local de envio
- Exibir os repositórios do perfil no Github
- Padronização de código utilizando ESlint e Prettier
- Padronização de commits utilizando Husky e Commitlint

---

## 🎯 Próximos passos

- Desenvilvimento de uma suíte de testes
- Listagem das demais informações da API

---

## 👩🏻‍💻 Tecnologias

O projeto foi desenvolvido utilizando as seguintes tecnologias:

- [ReactJS](https://reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Styled-components](https://styled-components.com/)
- [Axios](https://axios-http.com/docs/intro)
- [Husky](https://typicode.github.io/husky/#/)
- [Commitlint](https://commitlint.js.org/#/)
- [API da Marvel](https://developer.marvel.com/)
- [API do Google Maps](https://developers.google.com/maps/documentation/javascript/overview)
- [VS Code][vscode] with [ESLint][vceslint] and [Prettier][vcprettier]

---

## 🗂 Como baixar e executar o projeto

Para clonar e executar esta aplicação na sua máquina é necessário ter instalado:
- [Git](https://git-scm.com/)
- [Yarn](https://yarnpkg.com/)
- [Node.js](https://nodejs.org/en/)

Para configurar a aplicação também é preciso ter:
- [Chave pública e privada da API da Marvel](https://developer.marvel.com/account)
- [Chave da API do Google Maps](https://developers.google.com/maps/documentation/javascript/get-api-key)

```bash

  # Clonar o repositório
  $ git clone https://github.com/felipeAndrade04/marvel-comics-app.git

  # Entrar no diretório
  $ cd marvel-comics-app

  # Instalar as dependências
  $ yarn install

  # Duplicar o arquivo .env.example, renomear para .env e substituir as informações de acesso no seu devido local.

  # Iniciar o projeto
  $ yarn start

```

<br />

Desenvolvido por [Felipe Andrade](https://github.com/felipeAndrade04)

[vscode]: https://code.visualstudio.com/
[vcprettier]: https://prettier.io/
[vceslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
