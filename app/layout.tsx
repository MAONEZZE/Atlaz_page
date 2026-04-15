import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fator de Longo Horizonte",
  description:
    "Uma imersão presencial para empresários que querem dominar as vendas de alto valor com processo, clareza e direção. 28 de abril, São Paulo.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${poppins.variable} scroll-smooth`}>
      <body className="bg-[#0D0618] text-white overflow-x-hidden">
        <div className="fixed inset-0 bg-gradient-to-br from-[#7C3AED]/[0.04] via-transparent to-[#1D0D45]/[0.06] pointer-events-none" />
        {children}
        {/* WhatsApp floating button */}
        <a
          href="https://wa.me/5511934581064?text=Ol%C3%A1%2C%20vim%20pela%20pagina%20da%20FLH%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20funcionamento%20para%20garantir%20a%20vaga%3F"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Fale conosco pelo WhatsApp"
          className="fixed bottom-6 left-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-[0_4px_24px_rgba(37,211,102,0.4)] hover:shadow-[0_4px_36px_rgba(37,211,102,0.6)] hover:scale-110 transition-all duration-200 cursor-pointer"
          style={{ backgroundColor: "#190438ff" }}
        >
          
        </a>
      </body>
    </html>
  );
}
