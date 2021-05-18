![Climatempo](https://pqtec.org.br/wpfiles/wp-content/uploads/2020/12/unnamed.jpg)
# Teste técnico Climatempo

## Breve Descrição

### Página Home
![Home](https://i.imgur.com/yb5X9gl.png)

> Existe um campo de busca para pesquisar a cidade que o usuário deseja, ao executar uma pesquisa o app irá lançar uma requisição `GET` para a API Climatempo e irá retornar uma lista de cidades de acordo com o pesquisado, caso não tenha internet irá receber uma notificação de alerta e será redirecionado para a tela `Offline` com a sua última pesquisa válidade realizada (caso exista).

![Offline](https://i.imgur.com/KcufHt1.png)

> Após a pesquisa ser realizada

### Página Weather

![Weather](https://i.imgur.com/ytC2Vcv.png)

> A página `Weather` irá buscar os próximos dias de previsão e serão apresentados usando o component `WeatherCard`

![Historic](https://i.imgur.com/XE10J9T.png)

> A página `Historic` é acessada através do ícone da tela inicial `Home`, ela permite acessar a última pesquisa válida que foi armazenada no `storage` do celular e é possível excluir através do botão inferior `Limpar Histórico`

## Documentação :page_facing_up:

  ### Estrutura da API

  ```ts
  import axios from 'axios';
  import keys from '../configs/env';

  const api = {
    locale: axios.create({
      baseURL: `http://apiadvisor.climatempo.com.br/api/v1/locale`,
      params: {
        token: keys.climatempo,
      },
    }),
    manager: axios.create({
      baseURL: `http://apiadvisor.climatempo.com.br/api-manager/user-token/${keys.climatempo}/locales`,
    }),
    forecast: axios.create({
      baseURL: `http://apiadvisor.climatempo.com.br/api/v1/forecast/locale`,
      params: {
        token: keys.climatempo,
      },
    })
  };
  ```
  >A API foi dividida em 3 módulos `locale`, `manager` e `forecast` usando a key que é importada de `/config/env.ts`


  ### App keys :key:

  Adicione sua app key ao arquivo `/src/configs/env.ts`

  ```ts
  const keys = {
    climatempo: 'SUA_APP_KEY',
  };

  export default keys;
  ```

## Inicialização :octocat:

[1] - **Inicializando em Android**

  ```bash
  yarn android
  ```
  >OBS: Caso não inicialize imediatamente rode o comando adicional abaixo
  ```bash
  yarn start
  ```

[2] - **Inicializando no iOS**
  ```bash
  sudo gem install cocoapods && cd ios/ && pod install && cd .. && yarn ios
  ```
  >OBS: Caso esteja no Mac e já tenha o cocoapods instalado, pode ignorar o primeiro comando
  ```bash
  cd ios/ && pod install && cd .. && yarn ios
  ```


## Testes :wrench:

>Os testes foram criados para `Hooks`, `Components` e `Pages`, totalizando 7 testes de renderização e passagem de `Props` para os `Components`/`Pages`

[x] - Executando testes
```bash
yarn test
```
![Testes](https://i.imgur.com/3v2AEh1.png)


[x] - Gerando Coverage
```bash
yarn test --coverage
```
> esse comando irá criar uma pasta na raíz do projeto `coverage` com um arquivo `/lcov-report/index.html`, que pode ser aberta no browser para verficar a totalidade dos testes (nem todos foram executados)
