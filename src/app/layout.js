import "./globals.css";
import { Saira } from 'next/font/google';

const saira = Saira({
  subsets: ['latin'],
  weight: ['100', '400', '900'],
  style: ['normal', 'italic'],
});

export const metadata = {
  title: 'Entre Brasas',
  description: 'El mejor restaurante de Valdivia',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={saira.className}>
        {children}
      </body>
    </html>
  );
}
