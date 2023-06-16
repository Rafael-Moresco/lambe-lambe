# Lambe-Lambe

![Screenshot_1680116991](https://user-images.githubusercontent.com/95244995/228659354-0cd3f377-4322-496f-a288-af4a8273ce6c.png)

## Objetivo:
A aplicação foi criada como portfólio, demonstrando um aplicativo para envio de fotos do estilo gravura lambe-lambe. Possui funcionamento semelhante ao Instagram, com postagens de fotos e comentários de usuários.

O aplicativo foi desenvolvido a partir do projeto de mesmo nome, oferecido no curso de React Native da escola Cod3r. O diferencial é que esta versão utiliza todas as bibliotecas, dependências e arquitetura mais recentes, totalmente atualizadas até março de 2023.

## Arquitetura:
O App foi construído em React Native na versão 0.71.3. Cada tela é, na verdade, um modulo que interage com o outro, autenticando os usuários no firebase. Utilizando os conceitos de hooks, navegação e utilização do hardware do celular, câmera e galeria nativas. A navegação entre telas, que baseia-se no conceito de navegação aninhada, e utiliza componentes do React-Navigation para trazer facilidade de utilização do usuário final. O Firebase é responsável pela autenticação, banco de dados e upload de imagens.

### Video Exemplo

https://github.com/Rafael-Moresco/lambe-lambe/assets/95244995/ea6581a2-b6f5-4195-9884-f3f0c7885bee


## Bibliotecas:
* [bottom-tabs]: Responsável por criar o menu inferior de navegação entre telas.
* [react-navigation]: Responsável por criar rotas e navegar entre telas dentro da estrutura do Aplicativo. 
* [react-navigation/stack]: Resposável pela criação de rotas e navegação em pilhas, utilzado para aninhar a navegação entre telas.
* [axios]: Biblioteca que permite uma integração do projeto React para um serviço de API disponível.
* [Firebase]: Para acessar, salvar e tudo que é preciso no Firebase
* [react-native-gesture-handler]: Para reconhecer gestos no celular, como o gesto de pinça.
* [react-native-gravatar]: Integra com a ferramenta Gravatar para gerar um avatar personalizado do usuário. 
* [react-native-image-picker]: Para acessar a câmera e galeria nativa do dispositivo Android ou IOS.
* [react-redux]: Biblioteca para gerenciar o estado global da aplicação.
* [react-native-vector-icons]: Resposável pela estilização de ícones e fontes.
* [redux-thunk]: Responsável por lidar com requisições assíncronas.


[bottom-tabs]: <https://reactnavigation.org/docs/bottom-tab-navigator>
[react-navigation]: <https://reactnavigation.org>
[react-navigation/stack]: <https://reactnavigation.org/docs/stack-navigator/>
[axios]: <https://github.com/axios/axios>
[Firebase]: <https://github.com/firebase/firebase-ios-sdk>
[react-native-gesture-handler]: <https://github.com/software-mansion/react-native-gesture-handler>
[react-native-gravatar]: <https://github.com/lwhiteley/react-native-gravatar>
[react-native-image-picker]: <https://github.com/react-native-image-picker/react-native-image-picker>
[react-redux]: <https://react-redux.js.org>
[react-native-vector-icons]: <https://github.com/oblador/react-native-vector-icons>
[redux-thunk]: <https://github.com/reduxjs/redux-thunk>



## Referência:
* [**Cod3r**]

[**Cod3r**]: <https://www.cod3r.com.br/>
