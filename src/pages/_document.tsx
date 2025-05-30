import React from "react";
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />

          <link
            href="https://fonts.googleapis.com/css?family=Roboto:100,100italic,300,300italic,regular,italic,500,500italic,700,700italic,900,900italic&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Montserrat:100,200,300,regular,500,600,700,800,900,100italic,200italic,300italic,italic,500italic,600italic,700italic,800italic,900italic&display=swap"
            rel="stylesheet"
          />

          <link rel="shortcut icon" href="/favicon.png" />

          <meta name="theme-color" content="#171515" />

          <meta property="og:locale" content="pt_BR" />

          <meta
            property="og:image"
            content="https://luizeduardo.vercel.app/assets/person-mobile.png"
          />

          <meta
            property="og:image:alt"
            content="Fotografia do desenvolvedor."
          />

          <meta
            name="description"
            content="Desenvolvedor especializado em criação e manutenção de sites profissionais com foco em performance, design e conversão. Atendo projetos com WordPress, React.js e Next.js."
          />

          <meta
            property="og:title"
            content="Luiz Eduardo | Sites Profissionais com WordPress, React e Next.js"
          />

          <meta
            property="og:description"
            content="Ajudo empresas e profissionais a conquistarem presença online com sites rápidos, bonitos e que geram resultados. Veja meu portfólio e solicite um orçamento!"
          />

          <meta
            name="keywords"
            content="desenvolvedor front-end, criação de sites, wordpress, react, nextjs, freelancer, portfólio, site, blog, plataforma, ecommerce"
          />

          <meta name="robots" content="index, follow" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
