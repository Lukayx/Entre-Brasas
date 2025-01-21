import "./globals.css";

export const metadata = {
  title: "Entre Brasas - Restaurante Chileno",
  description:
    "Restaurante de comida chilena en Valdivia, Chile. Disfruta de nuestros platos y vinos en un ambiente único.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=no"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
