# Pokelist

## :rocket: Para Rodar
```bash
$ git clone https://github.com/mayronreis/Pokelist.git
$ cd Pokelist
$ yarn
$ yarn android
```
## :page_with_curl: Aplicação

Aplicação desenvolvida em React Native (Cli) com o intuito de listar os pokemos de uma Api de maneira fácil e intuitiva para o usuário. A Api utilizada foi a https://pokeapi.co/.

Para as requisições HTTP a biblioteca Axios foi utilizada, essa foi escolhida devido ao sua performance e pela sintaxe simples que ela oferece ao desenvolvedor.

A aplicação conta com duas telas, sendo uma resposável por elencar os pokemons por ordem do seu Id. Para o desenvolvimento foi utilizado o componente FlatList que inicialmente faz uma requisição pegando apenas os 20 primeiros elementos da Api e imcrementando esse número em 20 de acordo com a rolagem de tela do usuário.

O componente renderizado na lista de elementos é um componente personalizado para a aplicação, nele podemos ver o Id do pokemon, o nome, o(s) tipo(s) e é apresentado também uma imagem do pokemon. Esse componente recebe um objeto com o nome do pokemon e uma url contendo as informações detalhadas do mesmo.

A segunda tela é exibida quando um dos elementos da lista é selecionado e com isso a tela é chamada e os parametros para o preenchimento dela é passado por meio de hook do React. Nessa tela é exibido uma imagem do pokemon, seus tipos e suas habilidades.

Para a estilização da aplicação foi utilizado o Styled Components, com essa biblioteca podemos utilizar CSS de maneira fácil. A biblioteca também favorece a componetização de elementos.

<h1 align="center">
  <img alt="PokeList" src="https://github.com/mayronreis/Pokelist/blob/main/src/assets/pokelist.gif" width="250px" />
</h1>


## :hammer: Tecnologias
Esse projeto utilizou as seguintes tecnologias:

-  [Axios](https://github.com/axios/axios)
-  [Styled Components](https://github.com/styled-components/styled-components)
-  [React-Native](https://facebook.github.io/react-native/)
-  [React Native Gesture Handler](https://kmagiera.github.io/react-native-gesture-handler/)
-  [React Native VectorIcons](https://github.com/oblador/react-native-vector-icons)
-  [React Navigation](https://reactnavigation.org/)
-  [VS Code](https://code.visualstudio.com/) with [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
