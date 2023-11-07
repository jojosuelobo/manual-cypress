Este fluxo de trabalho fará uma instalação limpa das dependências do node, construirá o código-fonte e executará testes em diferentes versões do node
**Para mais informações: https://help.github.com/actions/language-and-framework-guides/using-nodejs-with-github-actions**

```yml
name: Node.js CI

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:

    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [14.x]
        # See supported Node.js release schedule at https://nodejs.org/en/about/releases/

    steps:
    - uses: actions/checkout@v2
    - name: Use Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v1
      with:
        node-version: ${{ matrix.node-version }}
    - run: npm install
    
    
    # action criada especialmente para o Cypress    
    - name: Cypress run
      uses: cypress-io/github-action@v2.8.2
      with:
        record: true
        group: 'Semana Agilizei'
      env:
        # pass the Dashboard record key as an environment variable
        CYPRESS_RECORD_KEY: ${{ secrets.CYPRESS_RECORD_KEY }}
        
    # upload dos vídeos gerados    
    - name: Upload videos
      uses: actions/upload-artifact@v2.2.0
      if: always()
      with:
        name: videos
        path: cypress/videos
```