import "./globals.css";

export const metadata = {
  title: "Bolt.IA",
  description: "Automatiza atención y ventas 24/7 en WhatsApp con IA.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        {/* Ícono de la pestaña del navegador */}
        <link rel="icon" href="/LogoBoltIA_Blanco_render.png" type="image/png" />
      </head>
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}
