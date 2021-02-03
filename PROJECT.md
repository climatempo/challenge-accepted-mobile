# Wallace Antunes

## Desafio Climatempo

## Tecnologias usadas
 - Typescript
   - Usado para tipagem e autocomplete, pois, facilita na hora de saber quais dados vão ser enviados e recebidos de uma camada (classes, servições, etc.).
 - Redux
   - Gerenciar estado global do app.
 - Saga
   - Middleware do redux e facilita na hora de integrar serviços (API por exemplo) no redux.
## Configurações
  Antes de rodar o projeto crie um .env baseado no .env.example
## Install
Caso não tenha o yarn 
`npm install --global yarn`

Instalar pacotes
`yarn install`

## Run
Rodar no android
`yarn android`

## Observações
Caso as variaveis de ambiente estejam com cache, rode esse comando
`yarn start -- --reset-cache`
