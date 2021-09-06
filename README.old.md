# 📋 Sobre a atividade

Nesta atividade o principal objetivo é entender como podemos utilizar as renderizações condicionais em conjunto com pequenos formulários utilizando o conceito de [estados no react](https://reactjs.org/docs/hooks-state.html)

# ℹ️ Informações úteis

## Exemplo de resultado

![](https://i.imgur.com/pW3cRkL.gif)

## 🖐️🍝Mão na massa!

1.  Crie um projeto react usando o comando: `yarn create react-app***nomedoseuprojeto***`

2.  Abra seu projeto no seu editor e execute o comando `yarn start` para iniciar o servidor com seu app.

3.  Crie os componentes `GetUserComponent` e `WelcomePage` dentro de uma pasta `components`, assim como vimos nas aulas anteriores.

    ![](https://i.imgur.com/iuNYoNf.png)

4.  O componente `App.js` deve possuir um **state** _isLoggedIn_, _setIsLoggedIn_ que é instanciado a partir do useState e **inicializado** como false.

5.  Além disso, o App possui:

    *   Um state `user` que é **inicializado** como uma string vazia
    *   O **App** importa os dois componentes **WelcomePage** e **GetUserComponent**

    * * *

6.  O componente `WelcomePage` recebe duas props `{ user, setIsLoggedIn }`

7.  O componente `WelcomePage` deverá:

    *   Conter uma função `**HandleLogout**` que chama a prop `SetIsLoggedIn` transformando-a em false
    *   Conter uma mensagem de Boas-vindas acessando a prop `{user}`
    *   Conter um button que seu onclick chama a função `HandleLogout`

    * * *

8.  O componente `GetUserComponent` recebe duas props `{ setUser, setIsLoggedIn }`

9.  O componente `GetUserComponent` deverá:

    *   Conter um state `userInput`, `setUserInput` que é **inicializado** como uma string vazia

    *   Seu JSX deve conter uma tag pai [form](https://www.w3schools.com/tags/tag_form.asp)

    *   Na tag form deve haver uma tag `input` com a prop **value** e o evento **onChange** e seu ****onChange deve chamar a função `setUserInput`

            <input
                    type="text"
                    value={userInput}
                    onChange={(event) => setUserInput(event.target.value)}
                  />

    * * *

    *   Agora crie uma função `HandleLogin` que recebe a prop `**userInput**`

    *   A função `HandleLogin` chama `setUser(**userInput**)`

    *   A função `HandleLogin` chama a prop `SetIsLoggedIn` transformando-a em true

    *   Na tag form deve haver um `button` ****com a prop evento `onClick` que chama a função `**HandleLogin**`, desta forma

            <button onClick={() => HandleLogin(userInput)}>Acessar com o nome</button>

        * * *

10.  Voltando ao App.js, agora devemos fazer uma renderização condicional onde:

    *   Se o state `**isLoggedIn**` for true vamos renderizar o componente `WelcomePage`
    *   Se o state `**isLoggedIn**` for false vamos renderizar o componente `GetUserComponent`
11.  Não esqueça de passar as props para cada componente importado no App 😉

## 💪Agora é com você

*   Estilize sua aplicação, **seja original** 😉
*   Consegue pensar em uma maneira de juntar a solução da atividade passada com essa?

# 💡Conhecimentos aplicados:

*   Fundamentos do React
*   Passagem de valores para um componente
*   Componentização e Reutilização
*   Utilização dos valores vindo das props no componente
*   Renderização condicional
*   Eventos de formulários + state
