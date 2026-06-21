import type {Metadata} from 'next';
import { Domine, Work_Sans, Archivo_Narrow } from 'next/font/google';
import './globals.css';

const domine = Domine({
  subsets: ['latin'],
  variable: '--font-domine',
});

const workSans = Work_Sans({
  subsets: ['latin'],
  variable: '--font-work-sans',
});

const archivoNarrow = Archivo_Narrow({
  subsets: ['latin'],
  variable: '--font-archivo-narrow',
});

export const metadata: Metadata = {
  title: 'OutdoorPro | Aventuras de Caiaque',
  description: 'Guias profissionais de equipamentos para o homem moderno ao ar livre. Testado em campo, confiável e sem pretensões.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pt-BR" className={`${domine.variable} ${workSans.variable} ${archivoNarrow.variable} overflow-x-hidden`}>
      <body className="bg-[#fcf9f2] text-[#1c1c18] font-['var(--font-work-sans)'] antialiased min-h-screen flex flex-col selection:bg-[#1b3022] selection:text-white overflow-x-hidden" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
