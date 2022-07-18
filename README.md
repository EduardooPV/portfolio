<h1 align="center"> 🚀 Portfolio - Luiz Eduardo 🚀</h1>

### 🎯 Motivação:

Projeto desenvolvido para poder mostrar/práticar alguns dos conceitos que venho estudando ao longo da minha jornada como desenvolvedor **Front-end**, alguns pontos como:
- Semântica e acessibilidade;
- Estrutura e boas práticas em Next.js;
- Consumo de API _(Github nesse caso)_;
- Dark theme com Styled components. 

Dei uma explorada também em algumas etapas de UI/UX bem básicas, explicarei melhor e mais detalhado no próximo tópico.

---

### 🎨 Design:

No processo de construção do design, elaborei primeiramente o Wireframe, pensei inicialmente em uma página simples, contendo apenas o necessário para o entendimento do usuário, então criei uma _Hero_ introdutória, para contextualizar sobre o que se refere o site, uma sessão de _Sobre_ para a pessoa me conhecer melhor, sessão de _Conhecimentos_ e _Projetos_, e uma página para todos os _Projetos_.

Após isso, parti para a paleta de cores e fontes, ficou definido como cor primária um Laranja _(#F89D24)_, que da um contraste bom no Dark e Light mode.

Para as fontes foram utilizadas a _Montserrat_ e a _Roboto_, nos pesos 400 / 700 / 900.

E por final desenvolvi o Mobile e Desktop criando algumas interações e componentes, caso precise utilizar algum futuramente.

#### Veja você mesmo:

- [Design System](https://www.figma.com/file/oyrCTDuRGoBgnkD6lsFdLm/Portif%C3%B3lio?node-id=0%3A1)
- [Wireframe](https://www.figma.com/file/oyrCTDuRGoBgnkD6lsFdLm/Portif%C3%B3lio?node-id=45%3A12)
- [Desktop](https://www.figma.com/file/oyrCTDuRGoBgnkD6lsFdLm/Portif%C3%B3lio?node-id=51%3A268)
- [Mobile](https://www.figma.com/file/oyrCTDuRGoBgnkD6lsFdLm/Portif%C3%B3lio?node-id=99%3A3499)

##### Visite o projeto no figma: [CLICANDO AQUI!](https://www.figma.com/file/oyrCTDuRGoBgnkD6lsFdLm/Portif%C3%B3lio)
---

### 🛠️ Ferramentas utilizadas:

<p class="row">
  <p> <img src="https://daniel-vinicius.gallerycdn.vsassets.io/extensions/daniel-vinicius/code-snipptes-reactjs-pt-br/0.5.0/1610479284868/Microsoft.VisualStudio.Services.Icons.Default" width="35px" height="30px"> - React.js;</p>
  <p> <img src="https://camo.githubusercontent.com/92ec9eb7eeab7db4f5919e3205918918c42e6772562afb4112a2909c1aaaa875/68747470733a2f2f6173736574732e76657263656c2e636f6d2f696d6167652f75706c6f61642f76313630373535343338352f7265706f7369746f726965732f6e6578742d6a732f6e6578742d6c6f676f2e706e67" width="30px"> - Next.js;</p>
  <p> <img src="https://miro.medium.com/max/816/1*mn6bOs7s6Qbao15PMNRyOA.png" width="30px"> - Typescript;</p>
  <p> <img src="https://avatars.githubusercontent.com/u/20658825?s=200&v=4" width="30px"> - Styled components <strong>(Dark/light theme);</strong> </p>
</p>

---

### 👩‍🦯 SEO e Acessibilidade:
Tentei dar uma atenção importante principalmente para a acessibilidade e criei um fluxo para navegação por teclado, e um `:focus` um pouco mais intuitivo e combinando com a cara do projeto:

![Acessibilidade](https://user-images.githubusercontent.com/69824782/179382649-30f4bb7a-e928-4635-880a-4cd23f37104d.png)

E também olhei para a semântica do projeto, organizando as TAGS e possiveis warnings.
![Resultado Lighthouse](https://user-images.githubusercontent.com/69824782/179278302-b5bbd4f1-9161-4c93-9c11-cf75d8064fbb.png)


_Não consegui alcançar o 100% de 'Accessibility' por causa do pacote **"react-switch"**._

---

Caso queria tirar algum insight ou testar o projeto localmente, aqui vai algumas intruções necessárias:

1. Clone o projeto o Github para sua máquina
```bash
https://github.com/EduardooPV/portfolio.git
```

2. Entre na pasta do projeto na sua máquina
```bash
cd portfolio
```

3. Abra o seu editor de código (No meu caso VSCode)
```bash
code . 
```

4. Instale as dependências necessárias
```bash
yarn 
```

5. E por final rode o projeto localmente
```bash
yarn dev
```
_*Irá abrir na porta 3000, ex: https://localhost:3000_
