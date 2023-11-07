# Configurando o um Relatório com o Mochawesome

_Com foco na v10 do Cypress_ 

1. Instalando as dependências
2. Configurando o `cypress.config.js`
3. Configurando o `reporter-config.json`
4. Executando os testes e gerando o relatório

## Instalando as dependências

Instale as seguintes dependências do NodeJS

- cypress-multi-reporters
- mocha
- mochawesome
- mochawesome-merge
- mochawesome-report-generator

## Configurando o cypress.config.js

Sua configuração do relatório será em outro arquivo, pra deixar as configurações mais _clean_. Para isso, adicione as seguintes configurações na raiz de sua configuração - `reporter` e `reporterOptions`: 

```js

const { defineConfig } = require('cypress')

module.exports = defineConfig({
  ...
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    configFile: 'reporter-config.json',
  },
  e2e: {
    ...
  },
})
```

## Configurando o reporter-config.json

Crie um arquivo na raiz do projeto, chamado `reporter-config.json`. Vamos adicionar suas configurações de relatório nesse arquivo, como relatórios habilitados, dentre outras coisas. 

Adicione o seguinte trecho de código no arquivo criado:

```json
{
  "reporterEnabled": "mochawesome",
  "mochawesomeReporterOptions": {
    "reportDir": "mochawesome-report",
    "quiet": true,
    "overwrite": false,
    "html": false,
    "json": true
  }
}
```

## Executando os testes e gerando o relatório

Agora, se deu tudo certo, você pode executar seus testes com o `npx cypress run`. Deve ser gerada uma nova pasta, chamada `mochawesome-report` com uns arquivos `.json` dentro.

Gerou? Se sim, vamos para a segunda etapa.

Cada _spec_ irá gerar um arquivo `.json`. Como queremos um relatório consolidado, vamos _mesclar_ os resultados de todos estes arquivos `.json` em um só. Para isso vamos usar o mochawesome-merge, assim:

```sh
  npx mochawesome-merge > nome_do_arquivo_com_o_resultado_da_mesclagem.json
```

Deve ser gerado um novo arquivo chamado `nome_do_arquivo_com_o_resultado_da_mesclagem.json`, com a mescla do conteúdo de todos os arquivos `.json` que estavam dentro da pasta `mochawesome-report`.

Gerou? Se sim, vamos para a última etapa.

Com nossos resultados consolidados, chegou a hora de gerar um relatório _visual_ em html. Para isso vamos usar o `mochawesome-report-generator`, assim:

```sh
  npx mochawesome-report-generator nome_do_arquivo_com_o_resultado_da_mesclagem.json

  ## você pode usar uma versão mais curta desse comando, como
  npx marge nome_do_arquivo_com_o_resultado_da_mesclagem.json

  ## MARGE = Mocha Awesome Report GEnerator
```

Deve ser gerado um novo relatório em html, com o resultado dos testes.

Gerou? Se sim, agora é só comemorar ⚡️

Dicas extras:

1. Você pode criar scripts no package.json com os comandos usados para gerar o relatório
Examplo: ``"cy:run:rel": "npx cypress run & npx mochawesome-merge > reportMocha.json & npx marge reportMocha.json"``
2. Você pode adicionar um script para apagar os arquivos gerados (pasta do mocha, arquivo com a mesclagem)
3. Esses arquivos não precisam ser versionados, você pode adicioná-los no `.gitignore`

By [samlucax](https://gist.github.com/samlucax/170df8193d0b96184dcf9daaba1c8cd5#instalando-as-depend%C3%AAncias)
