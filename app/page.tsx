import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Star, Clock } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow w-full">
        {/* Hero Section */}
        <section className="relative w-full h-[600px] flex items-center justify-center bg-[#e5e2db] border-b border-[#c3c8c1]">
          <div className="absolute inset-0 z-0">
            <video
              src="/hero-abertura.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="object-cover w-full h-full"
            />
            {/* Subtle overlay to ensure text readability */}
            <div className="absolute inset-0 bg-black/30" />
          </div>
          <div className="relative z-10 text-center px-4 max-w-5xl w-full mx-auto">
            <h1 className="font-['var(--font-domine)'] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[64px] text-white font-bold mb-6 drop-shadow-md uppercase tracking-tight leading-tight break-words [text-wrap:balance]">
              Prepare-se para as Aventuras
            </h1>
            <p className="font-['var(--font-work-sans)'] text-lg md:text-xl text-[#fcf9f2] mb-8 drop-shadow font-medium">
              Guias profissionais de equipamentos, avaliações testadas em campo e técnicas tradicionais para o aventureiro moderno.
            </p>
            <Link 
              href="/store"
              className="inline-block bg-[#061b0e] text-white font-['var(--font-archivo-narrow)'] text-sm font-semibold px-8 py-4 rounded border-b-2 border-[#1b3022] hover:bg-[#1b3022] transition-all uppercase tracking-[0.05em] shadow-sm"
            >
              Explorar Melhores Escolhas
            </Link>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-20 grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Primary Content Area (8 columns) */}
          <div className="lg:col-span-8 space-y-20">
            {/* Trending Gear */}
            <section>
              <div className="flex justify-between items-end mb-8 border-b border-[#c3c8c1] pb-2">
                <h2 className="font-['var(--font-domine)'] text-3xl font-bold text-[#061b0e]">Equipamentos em Alta</h2>
                <Link href="/store" className="font-['var(--font-archivo-narrow)'] text-sm font-semibold text-[#434843] hover:text-[#061b0e] flex items-center uppercase tracking-widest">
                  Ver Todos <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                {/* Product Card 1 */}
                <div className="bg-white border border-[#c3c8c1] rounded hover:shadow-md transition-shadow flex flex-col overflow-hidden group">
                  <div className="relative h-56 bg-[#f6f3ec] p-4 flex items-center justify-center overflow-hidden">
                    <Image
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfBYxKMcffHhwAgwGmIRbYteLiKsuGZ_aBQJrgBoXVNogNdUuk8aVVjTFLY1MgmOjxY0vY_fSlhjYRgc3Z2h2wJHCxh-SyLDrTaz6nzeqwUjkAxmIWwPJyW_T28dVZH3vm5qg3IOmENEmvibY_oRu1JEhdyJc8QfBLlOq5nEKXeqA9rGDimboNg9k4fV0vDRKt2HqH15jXvEhjTTVUkw1AXknSg0Hu414Ks2nf_YX8Rm7L4YvLgOyZ7Gc1-X02UevKH4qGI11bjTA"
                      alt="Faca de Sobrevivência Apex Pro"
                      fill
                      className="object-contain p-4 drop-shadow-sm group-hover:scale-105 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                    <span className="absolute top-3 left-3 bg-[#fcf9f2] text-[#1c1c18] border border-[#c3c8c1] px-2 py-1 font-['var(--font-archivo-narrow)'] font-semibold text-[10px] rounded uppercase tracking-wider z-10">
                      Mais Bem Avaliados
                    </span>
                  </div>
                  <div className="p-5 flex flex-col flex-grow justify-between">
                    <div>
                      <h3 className="font-['var(--font-work-sans)'] text-[#1c1c18] font-bold text-lg line-clamp-2 mb-2">
                        Faca de Sobrevivência Apex Pro com Pederneira
                      </h3>
                      <div className="flex items-center space-x-1 mb-4 text-[#f56600]">
                        <Star fill="currentColor" size={14} />
                        <Star fill="currentColor" size={14} />
                        <Star fill="currentColor" size={14} />
                        <Star fill="currentColor" size={14} />
                        <Star size={14} />
                        <span className="text-xs text-[#434843] ml-1 font-['var(--font-work-sans)']">(124)</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-end mt-auto pt-4 border-t border-[#f1eee7]">
                      <span className="font-['var(--font-work-sans)'] font-bold text-xl text-[#061b0e]">$129.99</span>
                      <Link 
                        href="/review"
                        className="bg-[#4e1c00] text-white px-4 py-2 rounded font-['var(--font-archivo-narrow)'] font-semibold text-xs uppercase tracking-widest border-b-2 border-[#7a3000] hover:bg-[#7a3000] transition-colors"
                      >
                        Ler Avaliação
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Product Card 2 */}
                <div className="bg-white border border-[#c3c8c1] rounded hover:shadow-md transition-shadow flex flex-col overflow-hidden group">
                  <div className="relative h-56 bg-[#f6f3ec] p-4 flex items-center justify-center overflow-hidden">
                    <Image
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4m4y0r698WgYOsR81JJgxGl5CbJpIPe5lDPCQnSdvcf5Q7Lb7ubEeaqqs68h-mIYvXpr2PcHMLeuE1aJG470W0sqSvq1LSg9wiKxuowiAIpMzKT4ScTZFCBa1YBrqsPOvKwmnRlIMeLW649Anu3klPq3O_SmRuOaobcm0kvCUwhEhERVGLz4Fg9vnz3Ht_kS86-WzgdJc_kYEW1bnf-zZyaHt88a8NsC39tdRgMFe84lpnDv7osxeWvXl7AqhTK6SaOVzNTZNKr0"
                      alt="Garrafa Térmica com Núcleo de Titânio"
                      fill
                      className="object-contain p-4 drop-shadow-sm group-hover:scale-105 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                    <span className="absolute top-3 left-3 bg-[#fcf9f2] text-[#1c1c18] border border-[#c3c8c1] px-2 py-1 font-['var(--font-archivo-narrow)'] font-semibold text-[10px] rounded uppercase tracking-wider z-10">
                      Mais Vendido
                    </span>
                  </div>
                  <div className="p-5 flex flex-col flex-grow justify-between">
                    <div>
                      <h3 className="font-['var(--font-work-sans)'] text-[#1c1c18] font-bold text-lg line-clamp-2 mb-2">
                        Garrafa Térmica com Núcleo de Titânio 946ml
                      </h3>
                      <div className="flex items-center space-x-1 mb-4 text-[#f56600]">
                        <Star fill="currentColor" size={14} />
                        <Star fill="currentColor" size={14} />
                        <Star fill="currentColor" size={14} />
                        <Star fill="currentColor" size={14} />
                        <Star fill="currentColor" size={14} />
                        <span className="text-xs text-[#434843] ml-1 font-['var(--font-work-sans)']">(89)</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-end mt-auto pt-4 border-t border-[#f1eee7]">
                      <span className="font-['var(--font-work-sans)'] font-bold text-xl text-[#061b0e]">$45.00</span>
                      <button className="bg-[#4e1c00] text-white px-4 py-2 rounded font-['var(--font-archivo-narrow)'] font-semibold text-xs uppercase tracking-widest border-b-2 border-[#7a3000] hover:bg-[#7a3000] transition-colors">
                        Ver Preço
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Ad Banner */}
            <div className="w-full bg-[#f1eee7] flex flex-col items-center justify-center border border-dashed border-[#c3c8c1] rounded py-10 my-12 overflow-hidden">
              <span className="font-['var(--font-archivo-narrow)'] font-semibold text-[10px] text-[#434843] uppercase tracking-widest mb-3">Publicidade</span>
              <div className="w-full max-w-[300px] md:max-w-[728px] h-[250px] md:h-[90px] bg-[#dcdad3] border border-[#c3c8c1] flex items-center justify-center text-[#434843] font-['var(--font-work-sans)'] text-sm">
                [ Espaço para Anúncio Patrocinado ]
              </div>
            </div>

            {/* Latest Guides */}
            <section>
              <div className="flex justify-between items-end mb-8 border-b border-[#c3c8c1] pb-2">
                <h2 className="font-['var(--font-domine)'] text-3xl font-bold text-[#061b0e]">Últimos Guias</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Article 1 */}
                <Link href="/article" className="group flex flex-col border border-[#c3c8c1] bg-white rounded overflow-hidden hover:border-[#061b0e] transition-colors">
                  <div className="w-full h-48 relative border-b border-[#c3c8c1] overflow-hidden">
                    <Image 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAk6LeuuARTNVBPWEp4hEKpoCN3V2SlBNkqxsB9z57MG-ai9Y8MkY9cZ94Hn8y_sMeBwXVFh-BMZ9e8wek84BiD5F-9KXnZiiANylNbvfFlrn3iDvecNBqb5QGSvu9vrCcgX_IL0IsPI-uW9xTk-HEoJUaLUx8HexbojQzB-m5iVFxb-CMyPIMHh7b8WFYUueteh9Vm9rHHjrtv8WC5Sx8j9r82nEC_KLc-xHJjswPWQitFXDgBAZic2tSieBIb7VJsoUqL20NEfPM"
                      alt="Guia de pesca"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm border border-[#c3c8c1] px-3 py-1 rounded font-['var(--font-archivo-narrow)'] font-semibold text-xs uppercase text-[#061b0e] tracking-wider">
                      Pesca
                    </div>
                  </div>
                  <div className="p-6 flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="font-['var(--font-domine)'] text-2xl font-bold text-[#1c1c18] mb-3 group-hover:text-[#061b0e] transition-colors line-clamp-2">
                        Dominando a Mosca Seca: Técnicas Essenciais para a Temporada de Truta
                      </h3>
                      <p className="font-['var(--font-work-sans)'] text-[#434843] line-clamp-3 mb-4">
                        Uma análise abrangente de apresentação, controle de deriva e leitura da água para melhorar sua taxa de captura durante a eclosão crítica da primavera.
                      </p>
                    </div>
                    <div className="flex items-center text-[#434843] text-sm font-['var(--font-archivo-narrow)'] font-semibold uppercase tracking-widest">
                      <Clock className="w-4 h-4 mr-2" /> 8 Min de Leitura
                    </div>
                  </div>
                </Link>

                {/* Article 2 */}
                <Link href="#" className="group flex flex-col border border-[#c3c8c1] bg-white rounded overflow-hidden hover:border-[#061b0e] transition-colors">
                  <div className="w-full h-48 relative border-b border-[#c3c8c1] overflow-hidden">
                    <Image 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRocp7t3gk6CIJJJcsUXwSPL90I1idqJIsEWFKCLlgnancCEOpLe5-VRH2j4qWRwtvEI2iyFZApn5mPV8g76rg8jVqkO0_ko-Uf4fUNmk--vQ-T6ib8zqGmQofhcmym2mM9v8NZ0TGODdFievcwYDnjJljV8ZvMzHXl5D8dClD0fmJTnjV5jKH48EBC3KApv7xbqiaiVgZ-pNrBn_BV0nbOMCh6reghjA05yXC4p0neLuoRLsNs44dmRVTdwc0-ypd2riJ5KcRtx8"
                      alt="Guia de ópticas de caça"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm border border-[#c3c8c1] px-3 py-1 rounded font-['var(--font-archivo-narrow)'] font-semibold text-xs uppercase text-[#061b0e] tracking-wider">
                      Caça
                    </div>
                  </div>
                  <div className="p-6 flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="font-['var(--font-domine)'] text-2xl font-bold text-[#1c1c18] mb-3 group-hover:text-[#061b0e] transition-colors line-clamp-2">
                        Revisão Óptica: Escolhendo a Lente Certa para Caça de Grande Porte
                      </h3>
                      <p className="font-['var(--font-work-sans)'] text-[#434843] line-clamp-3 mb-4">
                        Ampliação não é tudo. Detalhamos o tamanho das lentes objetivas, tipos de retículo e transmissão de luz para caçadores experientes no interior.
                      </p>
                    </div>
                    <div className="flex items-center text-[#434843] text-sm font-['var(--font-archivo-narrow)'] font-semibold uppercase tracking-widest">
                      <Clock className="w-4 h-4 mr-2" /> 12 Min de Leitura
                    </div>
                  </div>
                </Link>
              </div>
            </section>
          </div>

          {/* Sidebar (4 columns) */}
          <aside className="lg:col-span-4 space-y-8 lg:sticky lg:top-28 self-start">
            {/* Sidebar Ad */}
            <div className="w-full bg-[#f1eee7] flex flex-col items-center justify-center border border-dashed border-[#c3c8c1] rounded py-8 overflow-hidden px-4">
              <span className="font-['var(--font-archivo-narrow)'] font-semibold text-[10px] text-[#434843] uppercase tracking-widest mb-3">Publicidade</span>
              <div className="w-full max-w-[300px] h-[250px] bg-[#dcdad3] border border-[#c3c8c1] flex items-center justify-center text-[#434843] font-['var(--font-work-sans)'] text-sm">
                [ Espaço AdSense 300x250 ]
              </div>
            </div>

            {/* Categories Widget */}
            <div className="bg-white border border-[#c3c8c1] rounded p-6">
              <h3 className="font-['var(--font-domine)'] text-xl font-bold text-[#061b0e] border-b border-[#c3c8c1] pb-3 mb-4">Categorias</h3>
              <ul className="space-y-3 font-['var(--font-work-sans)'] text-[#434843]">
                <li className="flex justify-between items-center hover:text-[#061b0e] cursor-pointer border-b border-[#f1eee7] pb-3 font-medium">
                  <span>Equipamentos de Caça</span> <span className="bg-[#f6f3ec] px-2 py-0.5 rounded text-xs">42</span>
                </li>
                <li className="flex justify-between items-center hover:text-[#061b0e] cursor-pointer border-b border-[#f1eee7] pb-3 font-medium">
                  <span>Pesca com Mosca</span> <span className="bg-[#f6f3ec] px-2 py-0.5 rounded text-xs">28</span>
                </li>
                <li className="flex justify-between items-center hover:text-[#061b0e] cursor-pointer border-b border-[#f1eee7] pb-3 font-medium">
                  <span>Habilidades de Sobrevivência</span> <span className="bg-[#f6f3ec] px-2 py-0.5 rounded text-xs">15</span>
                </li>
                <li className="flex justify-between items-center hover:text-[#061b0e] cursor-pointer font-medium">
                  <span>Cozinha de Acampamento</span> <span className="bg-[#f6f3ec] px-2 py-0.5 rounded text-xs">19</span>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </>
  );
}
