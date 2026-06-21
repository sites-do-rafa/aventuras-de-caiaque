import Image from 'next/image';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Star } from 'lucide-react';

export default function StorePage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-10">
        
        {/* Banner */}
        <div className="w-full bg-[#f6f3ec] border border-[#c3c8c1] rounded mb-16 flex flex-col items-center justify-center py-10 relative overflow-hidden">
          <div className="absolute inset-0 bg-[#061b0e] opacity-5"></div>
          <span className="absolute top-3 left-3 text-[#737973] font-['var(--font-archivo-narrow)'] font-semibold text-[10px] uppercase tracking-widest">Conteúdo Patrocinado</span>
          <div className="text-center relative z-10 px-4">
            <p className="font-['var(--font-domine)'] text-2xl mb-2 text-[#061b0e] font-bold">Venda Pré-Temporada de Ópticas de Caça Premium</p>
            <p className="font-['var(--font-work-sans)'] text-[#434843] mb-6 max-w-lg mx-auto">Até 30% de desconto em binóculos e lunetas selecionados. Prepare-se antes da temporada começar.</p>
            <button className="bg-[#061b0e] text-white font-['var(--font-archivo-narrow)'] text-sm font-semibold px-8 py-3 rounded uppercase tracking-widest hover:bg-[#1b3022] transition-colors border-b-2 border-[#74584a] active:translate-y-[2px] active:border-b-0">
              Comprar Ofertas
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-10">
          {/* Sidebar Filters */}
          <aside className="w-full md:w-64 flex-shrink-0">
            <div className="sticky top-28 space-y-8 bg-white p-6 border border-[#c3c8c1] rounded">
              <h2 className="font-['var(--font-domine)'] text-2xl font-bold text-[#061b0e] border-b border-[#c3c8c1] pb-3">Filtrar Equipamentos</h2>
              
              <div className="space-y-4">
                <h3 className="font-['var(--font-archivo-narrow)'] font-semibold text-sm text-[#434843] uppercase tracking-widest">Categoria</h3>
                <div className="flex flex-col gap-3">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" className="w-5 h-5 border-[#c3c8c1] text-[#74584a] focus:ring-[#74584a] rounded-sm" />
                    <span className="font-['var(--font-work-sans)'] text-[#1c1c18] group-hover:text-[#061b0e] transition-colors">Varas e Carretilhas</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" defaultChecked className="w-5 h-5 border-[#c3c8c1] text-[#74584a] focus:ring-[#74584a] rounded-sm" />
                    <span className="font-['var(--font-work-sans)'] text-[#1c1c18] font-semibold group-hover:text-[#061b0e] transition-colors">Arcos e Arquearia</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" className="w-5 h-5 border-[#c3c8c1] text-[#74584a] focus:ring-[#74584a] rounded-sm" />
                    <span className="font-['var(--font-work-sans)'] text-[#1c1c18] group-hover:text-[#061b0e] transition-colors">Roupas e Calçados</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" className="w-5 h-5 border-[#c3c8c1] text-[#74584a] focus:ring-[#74584a] rounded-sm" />
                    <span className="font-['var(--font-work-sans)'] text-[#1c1c18] group-hover:text-[#061b0e] transition-colors">Óptica</span>
                  </label>
                </div>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 gap-4">
              <div>
                <h1 className="font-['var(--font-domine)'] text-3xl md:text-4xl text-[#061b0e] font-bold">Melhores Escolhas para o Campo</h1>
                <p className="font-['var(--font-work-sans)'] text-lg text-[#434843] mt-2">Equipamento curado de alta performance testado por profissionais.</p>
              </div>
              <select className="bg-transparent border border-[#c3c8c1] rounded px-4 py-2 font-['var(--font-work-sans)'] focus:ring-1 focus:ring-[#4e1c00] outline-none">
                <option>Ordenar por: Recomendado</option>
                <option>Preço: Menor para Maior</option>
                <option>Preço: Maior para Menor</option>
                <option>Melhor Avaliado</option>
              </select>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Product Card Wide */}
              <div className="lg:col-span-2 bg-white border border-[#c3c8c1] rounded flex flex-col sm:flex-row overflow-hidden group">
                <div className="sm:w-1/2 h-64 sm:h-auto relative bg-[#f1eee7] overflow-hidden border-r border-[#c3c8c1]">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtYCrLwPVvPbcljVuy3dzQCd_1WTw3fOC999Wz_lu71VQghQzDTHABXgCNyBaCGAxl_QI85rxvHXDmR3dV7mGBT6r_WjM78Q4bqH-JzVQHYU5kmxArWlWQZDOZM1UcueERyQO4QATgErmb_0kq4UI4flYrr3cvUPVduzawBuV1Pc7t1hBJT7s170AxkKmkJMKfzi1fkFYOhrTkXdbvyP9KI6_A-o8U0E6invWCqGlcS-PFZrB2ISYCH2ayRdufHy0ZMl__R_d0I1E"
                    alt="Arco Composto V3X 29"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-[#4e1c00] text-white font-['var(--font-archivo-narrow)'] font-semibold px-2 py-1 rounded text-xs uppercase tracking-widest shadow-sm">
                    Escolha do Editor
                  </div>
                </div>
                <div className="sm:w-1/2 p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="border border-[#74584a] text-[#74584a] font-['var(--font-archivo-narrow)'] font-semibold text-[10px] px-2 py-0.5 rounded uppercase tracking-wider">Arquearia</span>
                      <div className="flex text-[#f56600]">
                         <Star fill="currentColor" size={14} />
                         <Star fill="currentColor" size={14} />
                         <Star fill="currentColor" size={14} />
                         <Star fill="currentColor" size={14} />
                         <Star fill="currentColor" size={14} />
                      </div>
                      <span className="font-['var(--font-work-sans)'] text-xs text-[#434843]">(128)</span>
                    </div>
                    <h3 className="font-['var(--font-domine)'] text-2xl text-[#061b0e] font-bold mb-3 leading-tight">Arco Composto V3X 29</h3>
                    <p className="font-['var(--font-work-sans)'] text-[#434843] line-clamp-3 mb-6">
                      O sistema de caça mais avançado que já testamos. Equilíbrio inigualável e um ciclo de puxada macio como manteiga o tornam perfeito para espaços apertados em uma plataforma de árvore.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-t border-[#f1eee7] pt-4 mt-auto gap-4">
                    <span className="font-['var(--font-work-sans)'] font-bold text-2xl text-[#061b0e]">$1,199.00</span>
                    <button className="w-full sm:w-auto bg-[#4e1c00] text-white font-['var(--font-archivo-narrow)'] font-semibold px-6 py-3 rounded uppercase tracking-widest hover:bg-[#7a3000] transition-colors border-b-2 border-[#2d0d00] active:translate-y-[2px] active:border-b-0 text-sm">
                      Ver Preço
                    </button>
                  </div>
                </div>
              </div>

               {/* Product Card Standard 1 */}
               <div className="bg-white border border-[#c3c8c1] rounded flex flex-col overflow-hidden group">
                <div className="h-56 relative bg-[#f1eee7] overflow-hidden border-b border-[#c3c8c1]">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYranGrwdwx0yp1n1Mki3w3U3CVlZDhH8z3aL2XnktWKFUe-wGZ1iPwtOOTYJc05LeiVIUViaFbv147jFnZbV4ivyDnT_DQISOnZecjtaM4AHi-IQJ8Pco0WxS84tMKBMBYaXcYbEcRvgjXFgVRvI--wta0xrbTN8UKKVv73J0VKVhFIFiqSPMYfS8cB31rJhUbMonmI2QQjwcVnL4Yqt1vSDAP1VbfTJ5BPhKfSU2j-Dkp5zhdv3zJBbL9QHxalG8XrUhdoLnE6Q"
                    alt="Carretilha Curado DC 150"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="border border-[#74584a] text-[#74584a] font-['var(--font-archivo-narrow)'] font-semibold text-[10px] px-2 py-0.5 rounded uppercase tracking-wider">Pesca</span>
                    </div>
                    <h3 className="font-['var(--font-domine)'] text-xl text-[#061b0e] font-bold mb-2 leading-tight">Carretilha Curado DC 150</h3>
                    <div className="flex items-center gap-1 mb-3 text-[#434843]">
                       <Star className="text-[#f56600]" fill="currentColor" size={14} />
                       <span className="font-['var(--font-work-sans)'] text-sm font-semibold text-[#1c1c18]">4.8</span>
                       <span className="font-['var(--font-work-sans)'] text-xs">(342)</span>
                    </div>
                    <p className="font-['var(--font-work-sans)'] text-[#434843] text-sm line-clamp-2 mb-6">
                      O sistema de frenagem de controle digital elimina virtualmente as cabeleiras. Um cavalo de batalha para todas as condições.
                    </p>
                  </div>
                  <div className="flex items-center justify-between border-t border-[#f1eee7] pt-4 mt-auto">
                    <span className="font-['var(--font-work-sans)'] font-bold text-xl text-[#061b0e]">$259.99</span>
                    <button className="bg-[#4e1c00] text-white font-['var(--font-archivo-narrow)'] font-semibold px-4 py-2 rounded uppercase tracking-widest hover:bg-[#7a3000] transition-colors border-b-2 border-[#2d0d00] active:translate-y-[2px] active:border-b-0 text-xs">
                      Ver Oferta
                    </button>
                  </div>
                </div>
              </div>

               {/* Product Card Standard 2 */}
               <div className="bg-white border border-[#c3c8c1] rounded flex flex-col overflow-hidden group">
                <div className="h-56 relative bg-[#f1eee7] overflow-hidden border-b border-[#c3c8c1]">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0t7G3MbvYIoIacV_4bmntyvvB4HDVqHHL0SdlaXEkIgvohJfsnZpOuhmAK9sUSudi9yNlxmIuW_7s9-loZ63MAXBWaCgqCgcn9tHx2qHlz8GrIXf9BYipZySYeNPxTEg6L3c65MAqC4Z5XoK1QToZrvm0w_7xRg9Ig8SQANU2FpyqxWDMvpaIpgoyZRTUH9y60EvPYN9DJwMkowLxbg0SNTuzelYMVe8N3J9UtSOmYwgBlsftL7gKvT0gDedKPK-BfuSfSYXkbGM"
                    alt="Jaqueta Corta-Vento Jetstream"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="border border-[#74584a] text-[#74584a] font-['var(--font-archivo-narrow)'] font-semibold text-[10px] px-2 py-0.5 rounded uppercase tracking-wider">Vestuário</span>
                    </div>
                    <h3 className="font-['var(--font-domine)'] text-xl text-[#061b0e] font-bold mb-2 leading-tight">Jaqueta Corta-Vento Jetstream</h3>
                    <div className="flex items-center gap-1 mb-3 text-[#434843]">
                       <Star className="text-[#f56600]" fill="currentColor" size={14} />
                       <span className="font-['var(--font-work-sans)'] text-sm font-semibold text-[#1c1c18]">4.9</span>
                       <span className="font-['var(--font-work-sans)'] text-xs">(512)</span>
                    </div>
                    <p className="font-['var(--font-work-sans)'] text-[#434843] text-sm line-clamp-2 mb-6">
                      A camada definitiva para o final da temporada. Bloqueia 100% do vento frio sem adicionar volume desnecessário.
                    </p>
                  </div>
                  <div className="flex items-center justify-between border-t border-[#f1eee7] pt-4 mt-auto">
                    <span className="font-['var(--font-work-sans)'] font-bold text-xl text-[#061b0e]">$379.00</span>
                    <button className="bg-[#4e1c00] text-white font-['var(--font-archivo-narrow)'] font-semibold px-4 py-2 rounded uppercase tracking-widest hover:bg-[#7a3000] transition-colors border-b-2 border-[#2d0d00] active:translate-y-[2px] active:border-b-0 text-xs">
                      Ver Oferta
                    </button>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
