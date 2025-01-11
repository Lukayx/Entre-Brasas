import "./globals.css";
import { Saira, Tangerine } from 'next/font/google';
import Head from "next/head";

const saira = Saira({
  subsets: ['latin'],
  weight: ['100', '400', '900'],
  style: ['normal', 'italic'],
});

const tangerine = Tangerine({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal'],
});

export const metadata = {
  title: 'Entre Brasas',
  description: 'El mejor restaurante de Valdivia',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <Head>
        <title>Entre Brasas - Restaurante Chileno</title>
        <meta
          name="description"
          content="Restaurante de comida chilena en Valdivia, Chile. Disfruta de nuestros platos y vinos en un ambiente único."
        />
      </Head>
      <body className={saira.className}>
        {children}
      </body>

    </html>
  );
}
