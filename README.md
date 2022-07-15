<h1 align="center">HubDev</h1>

Como objetivo principal do desafio, criar uma Landing Page apresentando um produto que resolvesse o seguinte problema: **"Explique por que as empresas devem ter a acesso e serem clientes da HubLocal"**, com base nesse problema resolvi criar o lançamento de um **aplicativo** de celular, visto que atualmente existem muitos usuários de mobile(realizei algumas pesquisas e a HubLocal não possui nenhuma aplicação mobile), tive contato pela primeira vez com TypeScript e configurando o ESLint com o EditorConfig.

---

### Design:

Contando um pouco o processo do Design, eu tentei dar uma atenção a mais, já que é uma ferramente que eu estou estudando atualmente, pela falta de tempo só consegui explorar a parte da paleta de cores, desenvolvi tudo no **[Figma](https://www.figma.com/)**.

Inicialmente esboçei um Wireframe com algumas ideias, após o Wireframe feito, pensei um pouco sobre as cores e cheguei na decisão de manter a paleta da própria HubLocal _(Azul e verde)_. Depois dei uma refinada no design desenvolvendo duas variações Desktop e Mobile.

- [Design System](https://www.figma.com/file/3iFu3cgQkr8nFGU38HQCwD/HubDev---RocketSeat?node-id=50%3A2379)
- [Wireframe](https://www.figma.com/file/3iFu3cgQkr8nFGU38HQCwD/HubDev---RocketSeat?node-id=50%3A3)
- [Desktop](https://www.figma.com/file/3iFu3cgQkr8nFGU38HQCwD/HubDev---RocketSeat?node-id=0%3A1)
- [Mobile](https://www.figma.com/file/3iFu3cgQkr8nFGU38HQCwD/HubDev---RocketSeat?node-id=50%3A283)

---

### Ferramentas utilizadas:

<p class="row">
  <p> <img src="https://daniel-vinicius.gallerycdn.vsassets.io/extensions/daniel-vinicius/code-snipptes-reactjs-pt-br/0.5.0/1610479284868/Microsoft.VisualStudio.Services.Icons.Default" width="35px" height="30px"> - React.js </p>
  <p> <img src="https://camo.githubusercontent.com/92ec9eb7eeab7db4f5919e3205918918c42e6772562afb4112a2909c1aaaa875/68747470733a2f2f6173736574732e76657263656c2e636f6d2f696d6167652f75706c6f61642f76313630373535343338352f7265706f7369746f726965732f6e6578742d6a732f6e6578742d6c6f676f2e706e67" width="30px"> - Next.js </p>
  <p> <img src="https://miro.medium.com/max/816/1*mn6bOs7s6Qbao15PMNRyOA.png" width="30px"> - Typescript (Primeiro contato)</p>
  <p> <img src="https://avatars.githubusercontent.com/u/20658825?s=200&v=4" width="30px"> - Styled components </p>
</p>

### Componentes/Sessões:

- **Header**:
  - Contendo um header simples com um menu de navegação e um CTA para o usuário baixar o aplicativo.
- **Hero**:
  - Simples contendo apenas informações necessárias também com um CTA.
  - Uma foto fullscreen passando um tom agradável.
- **Cards Diferenciais**:
  - Contem 3 cards com alguns cases importantes.
  - No mobile ele vira um slide utilziando a biblioteca [React slideshow image](https://www.npmjs.com/package/react-responsive-carousel).
- **Cases**:
  - Alguns cases dando mais informações sobre o aplicativo.
  - Um padrão de landing page imagem/texto com um CTA levando o usuário para um ponto especifico.
- **Banner CTA**:
  - Um banner com um CTA explicando as duas plataformas de download.
- **Dúvidas frequentes (FAQ)**:
  - Possui um Accordion simples utilizando o [Material UI](https://v4.mui.com/pt/).
- **Planos**:
  - Alguns 'planos' para usuários desbloquar mais ferramentas do aplicativo.
- **Footer**:
  - Footer simples intencionalmente, com alguns links importantes e as redes sociais, impedindo a poluição visual.

![image](https://user-images.githubusercontent.com/69824782/149769503-de912bdc-d248-4049-9463-a2eec1e875cb.png)

_Não consegui alcançar o 100% de 'Accessibility' por causa do pacote de slide_

---

#### Visite o site: [CLICANDO AQUI!](https://hub-dev.vercel.app/)

<h2 align='center'>📌 PREVIEW -WEB- 📌</h2> </br>

![image](https://user-images.githubusercontent.com/69824782/149769993-d25c3364-df65-4d2e-87fe-6be731d8bac0.png)

<h2 align='center'>📌 PREVIEW -MOBILE- 📌</h2> </br>

![image](https://user-images.githubusercontent.com/69824782/149770155-666b2e57-8fa8-4e44-9c36-f2daa2681ca2.png)
