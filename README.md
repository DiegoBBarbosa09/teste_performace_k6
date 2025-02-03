# Testes de Performance com K6

Este projeto utiliza o K6 para a execução de testes de performance, permitindo medir e avaliar o desempenho de sistemas e aplicações em diferentes cenários.

## Estrutura do Projeto

A estrutura do projeto está organizada da seguinte forma:

## Pré-requisitos

Certifique-se de ter os seguintes itens instalados em sua máquina:

- [Node.js](https://nodejs.org/) (recomendado: versão LTS)
- [K6](https://k6.io/) (ferramenta de execução de testes de performance)

## Instalação

1. Clone o repositório:

   ```bash
   git clone <url-do-repositorio>
   ```

   cd PRIMEIROS_TESTES

2. Instale as dependências do Node.js
   ```bash
   npm install
   ```
3. Execução dos testes
   ```bash
   npm run k6:test
   ```

## Relatório

Após a execução dos testes, um relatório em formato HTML será gerado na raiz do projeto com o nome relatorio.html. Esse relatório pode ser aberto em qualquer navegador para uma visualização detalhada dos resultados.

## Cenários de Testes

load_test.js: Simula uma carga constante para avaliar o desempenho sob condições normais.
login_test.js: Valida a funcionalidade e desempenho do processo de autenticação.
rampup_test.js: Simula um aumento gradual de usuários para testar a escalabilidade do sistema.
smoke_test.js: Realiza um teste rápido para verificar se o sistema está funcionando corretamente.

## Contribuição

Sinta-se à vontade para contribuir com melhorias para o projeto. Abra um Pull Request ou crie uma Issue para sugestões.
