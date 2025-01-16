import "./globals.css";

export const metadata = {
  title: 'Entre Brasas - Restaurante Chileno',
  description: 'Restaurante de comida chilena en Valdivia, Chile. Disfruta de nuestros platos y vinos en un ambiente único.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>

    </html>
  );
}
