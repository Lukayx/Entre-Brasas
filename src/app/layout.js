import "./globals.css";

export const metadata = {
  title: 'Entre Brasas',
  description: 'El mejor restaurante de Valdivia',
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