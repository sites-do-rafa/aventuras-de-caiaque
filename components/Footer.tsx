import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#ebe8e1] border-t border-[#c3c8c1] mt-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-6 lg:px-8 py-12 max-w-7xl mx-auto items-end">
        <div className="flex flex-col space-y-4">
          <div className="flex items-center">
            <Image src="/logo.png" alt="Aventuras de Caiaque Logo" width={300} height={96} className="w-[180px] md:w-[300px] h-auto object-contain flex-shrink-0" referrerPolicy="no-referrer" />
          </div>
          <p className="font-['var(--font-work-sans)'] text-[#434843] max-w-sm">
            Guias profissionais de equipamentos para o homem moderno ao ar livre. Testado em campo, confiável e sem pretensões.
          </p>
          <div className="flex items-center gap-3 pt-2">
            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#434843] hover:text-[#061b0e] hover:bg-[#c3c8c1]/30 p-2 rounded-full transition-colors -ml-2">
              <Instagram className="w-5 h-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-[#434843] hover:text-[#061b0e] hover:bg-[#c3c8c1]/30 p-2 rounded-full transition-colors">
              <Youtube className="w-5 h-5" />
              <span className="sr-only">YouTube</span>
            </Link>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <h4 className="font-['var(--font-archivo-narrow)'] text-[#061b0e] font-semibold text-sm uppercase tracking-[0.05em] border-b border-[#c3c8c1] pb-1 inline-block w-max">
            Recursos
          </h4>
          <ul className="space-y-2 font-['var(--font-work-sans)']">
            <li><Link href="#" className="text-[#434843] hover:text-[#061b0e] transition-colors">Guias de Caça</Link></li>
            <li><Link href="#" className="text-[#434843] hover:text-[#061b0e] transition-colors">Técnicas de Pesca</Link></li>
            <li><Link href="#" className="text-[#434843] hover:text-[#061b0e] transition-colors">Avaliações de Equipamentos</Link></li>
          </ul>
        </div>
        <div className="flex flex-col space-y-4">
          <h4 className="font-['var(--font-archivo-narrow)'] text-[#061b0e] font-semibold text-sm uppercase tracking-[0.05em] border-b border-[#c3c8c1] pb-1 inline-block w-max">
            Legal e Suporte
          </h4>
          <ul className="space-y-2 font-['var(--font-work-sans)']">
            <li><Link href="#" className="text-[#434843] hover:text-[#061b0e] transition-colors">Divulgação de Afiliados</Link></li>
            <li><Link href="#" className="text-[#434843] hover:text-[#061b0e] transition-colors">Política de Privacidade</Link></li>
            <li><Link href="#" className="text-[#434843] hover:text-[#061b0e] transition-colors">Fale Conosco</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-[#c3c8c1] py-6 px-6 lg:px-8 text-center">
        <p className="font-['var(--font-work-sans)'] text-[#434843] text-sm md:text-base">
          © {new Date().getFullYear()} Aventuras de Caiaque. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
