import "./globals.css";

export const metadata = {
  title: 
    "EntreBrasas Restaurant | Valdivia",
  description:
    "Disfruta de nuestros increíbles platos y mejores vinos en un ambiente único.",
  keywords:
    "restaurante en Valdivia, comida chilena, platos tradicionales, vinos chilenos, mejor restaurante, cocina local, gastronomía Valdivia, comida típica chilena, restaurante EntreBrasas"
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
