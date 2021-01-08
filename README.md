### O Desafio
Os usuários querem saber como vai ficar a previsão do tempo para os próximos 10 dias em sua cidade.
Para isso, você foi chamado, sua responsabilidade é desenvolver um aplicativo que consulte a previsão da [API Advisor da Climatempo](https://advisor.climatempo.com.br/) e entregue essas informações aos usuários. A documentação da rota da API Advisor que deve ser utilizada encontra-se aqui [15 days](http://apiadvisor.climatempo.com.br/doc/index.html#api-Forecast-Forecast15DaysByCity).

### Requisitos

- A aplicação deve ser construida em react-native, utilizando o React Native CLI (`react-native init`);
- O usuário pode consultar novas cidades através de um campo de busca;
- O aplicativo deve armazenar um histórico com os nomes das cidades pesquisadas;
- O aplicativo deve fornecer uma maneira de ver o histórico de cidades pesquisadas;
- O aplicativo deve permitir uma forma de limpar o histórico de pesquisas;
- Testes unitários devem ser aplicados;
- Testes e2e podem ser aplicados; (Opcional)
- O aplicativo deve possuir uma abordagem **offline first**, após a primeira consulta caso a conexão com a internet esteja indiponível o app deve exibir
  a última consulta bem sucedida;
  
- Cada dia da previsão deve ser exibido em um card com os seguintes campos:
    * Dia e mês da previsão;
    * Temperatura mínima;
    * Temperatura máxima;
    * Velocidade do vento;
    * Volume de chuva;
    * Umidade relativa;
    * Frase das condições climáticas;
  

  Exemplo:
  
  <p align="center">
    <a href="http://www.climatempo.com.br">
        <img src="http://i.imgur.com/x3z4tYM.png" alt="Climatempo" width="400px"/>
    </a>
  </p>

Não se preocupe em reproduzir de forma fiel o layout apresentado, isso é apenas um exemplo
sinta-se a vontade para construir a interface da maneira que achar melhor, mas lembre-se de 
cumprir os requisitos de exibição.

### Como iremos avaliar

Iremos avaliar os seguintes pontos:
- Desempenho;
- Manutenabilidade;
- Cobertura de testes - 70%;  
- Organização;
- Boas práticas (Redux, Sagas, Hooks...).

### Entrega do projeto

- Faça o fork do desafio.
- Crie um PROJECT.md com a explicação de como devemos executar o projeto e com o máximo de detalhes possível do que foi feito e das decisões técnicas tomadas;
- Após concluir faça um pull request.
- Envie um e-mail para fullstack@climatempo.com.br com seu curriculo, pretensão salarial e o link do seu pull request.
