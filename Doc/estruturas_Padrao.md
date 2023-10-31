## Estruturas com padrões com Cypress

### Como checar um alert

```jsx
/* Caso de entrar com senha inválida */
it('Senha inválida', () => {
    cy.login('ADMIN', 'SENHA123')
    cy.on('window:alert', (alert) => {
        expect(alert).to.contains('Invalid user name or password')
    })
})
```

### Request com Cypress

```jsx
it('Valid login', () => {
    cy.login(usuarioValido.username, usuarioValido.password)
    cy.request({
        method: 'GET',
        url: `https://apialurapic.herokuapp.com/${usuarioValido.username}/photos?`
    }).then((res) => {
        expect(res.status).to.be.equal(200)
        expect(res.body).is.not.empty
    })
})
```