### bitbucket-pipelines.yml
Modelo de `yaml` de entrega continua para repositório do bitbucket

```yaml
#  Template NodeJS build

#  This template allows you to validate your NodeJS code.
#  The workflow allows running tests and code linting on the default branch.

image: cypress/included:13.2.0

pipelines:
  default:
    #- parallel:
        - step:
            name: Build and Test
            script:
              - echo "Instalando dependências"
              - npm install
        # - step:
        #     name: Faker installation
        #     script:
        #       - npm install --save-dev @faker-js/faker
        - step:
            name: Cypress test
            script:
              - echo "Testes Cypress"
              - npm install --save-dev @faker-js/faker
              - npx cypress run
```