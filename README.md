# banco-web-tests

## Objetivo
Este projeto tem como objetivo demonstrar aos alunos da Mentoria 2.0 como automatizar testes de aplicações web utilizando Cypress e JavaScript. O foco está em boas práticas de organização, uso de custom commands e geração de relatórios automatizados.

## Componentes do Projeto
- **Cypress**: Framework de automação de testes end-to-end.
- **Custom Commands**: Comandos personalizados para facilitar e reutilizar ações comuns nos testes, localizados em `cypress/support/commands/`.
- **Relatórios**: Geração de relatórios em HTML utilizando o `cypress-mochawesome-reporter`, disponíveis em `cypress/reports/html/`.
- **Testes Automatizados**: Exemplos de testes para login e transferência, organizados em `cypress/e2e/`.
- **Fixtures**: Dados de teste em arquivos JSON, em `cypress/fixtures/`.

## Pré-requisitos
- Node.js instalado
- API [banco-api](https://github.com/juliodelimas/banco-api) em execução
- Aplicação web [banco-web](https://github.com/juliodelimas/banco-web) em execução

## Instalação
1. Clone este repositório:
   ```bash
   git clone https://github.com/JonathasAnalista/banco-web-tests.git
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```

## Execução dos Testes
1. Certifique-se de que a API e a aplicação web estejam rodando.
2. Execute os testes com Cypress:
   ```bash
   npx cypress open
   ```
   ou em modo headless:
   ```bash
   npx cypress run
   ```
3. Os relatórios serão gerados automaticamente em `cypress/reports/html/`.

## Estrutura dos Testes
- **login.cy.js**: Testa o fluxo de login com credenciais válidas e inválidas.
- **transferencia.cy.js**: Testa o fluxo de transferência entre contas.

## Custom Commands
Os comandos personalizados estão em `cypress/support/commands/` e incluem:
- `fazerLoginComCredenciaisValidas`: Realiza login com dados válidos.
- `fazerLoginComCredenciaisInvalidas`: Tenta login com dados inválidos.
- `verificarMensagemNoToast`: Valida mensagens exibidas em toast.
- Outros comandos comuns para facilitar a automação de cenários recorrentes.

## Relatórios
Os relatórios de execução dos testes são gerados automaticamente em HTML, facilitando a análise dos resultados e evidências (screenshots e vídeos).

## Contribuição
Sinta-se à vontade para sugerir melhorias ou enviar pull requests.

---
Mentoria 2.0 | Automação de Testes com Cypress
