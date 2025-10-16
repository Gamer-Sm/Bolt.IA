import "./globals.css";

export const metadata = {
  title: "Bolt.IA – Chat inteligente para WhatsApp",
  description: "Automatiza atención y ventas 24/7 en WhatsApp con IA.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}
