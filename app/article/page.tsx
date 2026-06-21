import Image from 'next/image';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CheckCircle } from 'lucide-react';

export default function ArticlePage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Main Article Content */}
        <article className="lg:col-span-8 space-y-12">
          
          <header className="space-y-6">
            <div className="flex items-center space-x-3">
              <span className="border border-[#74584a] text-[#74584a] px-2 py-1 rounded font-['var(--font-archivo-narrow)'] font-semibold text-[10px] uppercase tracking-wider">Pesca</span>
              <span className="text-[#c3c8c1]">•</span>
              <span className="text-[#434843] font-['var(--font-archivo-narrow)'] font-semibold text-xs tracking-wider uppercase">Por James Miller | Atualizado em Out 2024</span>
            </div>
            <h1 className="font-['var(--font-domine)'] text-4xl md:text-5xl lg:text-6xl text-[#061b0e] font-bold leading-tight">
              O Guia Definitivo para Pesca em Água Doce
            </h1>
            <p className="font-['var(--font-work-sans)'] text-xl text-[#434843] leading-relaxed">
              Domine os lagos, rios e riachos. Este guia abrangente aborda as técnicas essenciais, locais privilegiados e equipamentos de primeira linha de que você precisa para conseguir a captura da sua vida.
            </p>
            
            <div className="w-full aspect-[2/1] rounded overflow-hidden border border-[#c3c8c1] relative mt-8">
              <Image 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7496BbOm4SGBQ0BvcbwLCzUCF1KiOJcp5TEhVv1uoUHL-TNW8vV_1BrRwZOJJgCKOS_npVAuHbzTexlm9U0p3LAUKFIQxkf_oo_nd3Zd4mJM1cIjs8hxLHh3kkPeUd-ZBLSp8Et7KHxm_XgMGqk6UkL4yTLrn9yUluQB7ZbH1LzTU30T5fPpvzQixeIuM195QdZguVgYVnic38nQ-V8eFZpwBqZCuGo3gtkjBedPJuuywktBozUITCZ1nOF8cBlWZES2hVCrh6Dw"
                alt="Pescador lançando a linha ao nascer do sol"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </header>

          <section className="space-y-6 prose prose-lg prose-p:font-['var(--font-work-sans)'] prose-p:text-[#1c1c18] prose-p:leading-relaxed max-w-none">
            <h2 className="font-['var(--font-domine)'] text-3xl font-bold text-[#061b0e] border-b border-[#c3c8c1] pb-3 mb-6">
              Entendendo a Água
            </h2>
            <p>
              A pesca em água doce oferece uma conexão incomparável com a natureza, mas o sucesso exige mais do que apenas lançar uma linha. Requer uma compreensão dos ecossistemas aquáticos, comportamento sazonal dos peixes e a aplicação precisa da técnica. Esteja você visando robalos-boca-pequena em um rio rochoso ou perseguindo trutas indescritíveis em um riacho nas montanhas, sua abordagem deve ser calculada.
            </p>
            <p>
              As variáveis principais incluem a temperatura da água, clareza e fluxo da corrente. Os peixes têm sangue frio; seu metabolismo e hábitos alimentares estão diretamente ligados a esses fatores. Um pescador de sucesso lê a água como um mapa, identificando declives, estruturas submersas e costuras de corrente onde peixes predadores ficam à espreita.
            </p>

            <h2 className="font-['var(--font-domine)'] text-3xl font-bold text-[#061b0e] border-b border-[#c3c8c1] pb-3 mb-6 mt-12">
              O Arsenal do Profissional
            </h2>
            <p>
              Seu equipamento é sua conexão direta com o peixe. Uma vara comprometida ou uma carretilha com defeito pode significar a diferença entre uma captura de troféu e um dia frustrante na água. Eis um detalhamento dos componentes principais que todo pescador sério de água doce deve ter:
            </p>

            <ul className="space-y-4 list-none pl-0 mt-8">
              <li className="flex items-start">
                <CheckCircle className="text-[#4d6453] w-6 h-6 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-[#061b0e]">Vara de Molinete de Ação Média-Leve:</strong> Ideal pela versatilidade. Proporciona sensibilidade suficiente para sentir as leves fisgadas de panfish (peixes pequenos) ou trutas, enquanto mantém resistência suficiente para fisgar um robalo agressivo.
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-[#4d6453] w-6 h-6 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-[#061b0e]">Líder de Fluorocarbono:</strong> Essencial em ambientes de água doce límpida. Seu índice de refração coincide com a água, tornando-o quase invisível a peixes ariscos com a linha.
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-[#4d6453] w-6 h-6 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-[#061b0e]">Óculos Escuros Polarizados de Qualidade:</strong> Não é um acessório, mas uma ferramenta vital. Eliminam o brilho da superfície, permitindo-lhe detectar estruturas subaquáticas e peixes em movimento.
                </div>
              </li>
            </ul>

            {/* In-article Affiliate Box */}
            <div className="bg-white border border-[#c3c8c1] rounded p-8 mt-12 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#4d6453]"></div>
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="text-[#f56600] font-['var(--font-archivo-narrow)'] font-semibold text-[10px] uppercase tracking-widest mb-2 block">Escolha Profissional</span>
                  <h3 className="font-['var(--font-domine)'] text-2xl text-[#061b0e] font-bold m-0">Molinete Shimano Stradic FL</h3>
                </div>
                <span className="font-['var(--font-work-sans)'] font-bold text-xl text-[#f56600] bg-[#fcf9f2] px-3 py-1 border border-[#f56600] rounded">$199.99</span>
              </div>
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2 aspect-video relative bg-[#f6f3ec] border border-[#c3c8c1] rounded overflow-hidden">
                  <Image 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTS4Ti6zHG1_ESIio2tCOCAZ8MmD0IxUcjyvMrENqi9KnjVkuHxgkah7fwGo2NrdDkmjTS9C-XWmeoTd1fBeI3VUhmtBEkcxggN6GIv0pAUjrhZ90U6mjAe_DZ75J54LmWDJHb7Y2OD0MmgfjADbuaBU5FqKbGl2tcR222dkPdtktSILQGfCD-JU6Rmv5ZgYw0NQ7l4XR_83Kso1wJoZFDIKtuLaOjZWdmxW6_x4j16IahnTre2Z3d34WwTJEcZhX6U55zWS-bUHE"
                    alt="Molinete Shimano Stradic"
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="md:w-1/2 flex flex-col justify-between">
                  <p className="text-[#434843] text-sm m-0">
                    Projetado para total suavidade e durabilidade. A tecnologia Hagane de forjamento a frio garante desempenhos de longa duração, mesmo sob a tensão dos pesados predadores de água doce. Uma escolha de elite para o pescador sério.
                  </p>
                  <button className="w-full bg-[#f56600] text-white font-['var(--font-archivo-narrow)'] font-semibold px-4 py-3 rounded uppercase tracking-widest mt-6 hover:bg-[#d85a00] transition-colors border-b-2 border-[#4e1c00]">
                    Ver Preço no Mercado Livre
                  </button>
                </div>
              </div>
            </div>

            <h2 className="font-['var(--font-domine)'] text-3xl font-bold text-[#061b0e] border-b border-[#c3c8c1] pb-3 mb-6 mt-16">
              Táticas Avançadas para Condições Difíceis
            </h2>
            <p>
              Quando as fisgadas estão escassas—talvez por causa de uma frente fria ou alta pressão pesqueira—as apresentações padrão frequentemente falham. É aí que o verdadeiro pescador profissional se adapta. Foco na abordagem fina: redução das apresentações, usando uma linha mais leve, e optando por iscas de cores naturais.
            </p>
          </section>
        </article>

        {/* Sidebar */}
        <aside className="lg:col-span-4 space-y-8 lg:sticky lg:top-28 self-start">
          <div className="bg-[#f1eee7] border border-dashed border-[#c3c8c1] rounded p-6 flex flex-col items-center justify-center min-h-[400px]">
            <span className="font-['var(--font-archivo-narrow)'] font-semibold text-[10px] text-[#434843] uppercase tracking-widest mb-3">Conteúdo Patrocinado</span>
            <div className="text-center text-[#434843] opacity-70">
              Espaço Publicitário
            </div>
          </div>

          <div className="bg-white border border-[#c3c8c1] rounded overflow-hidden">
            <h3 className="bg-[#f6f3ec] text-[#061b0e] font-['var(--font-domine)'] text-xl font-bold p-5 border-b border-[#c3c8c1]">
              Mais Guias de Campo
            </h3>
            <ul className="divide-y divide-[#e5e2db]">
              <li>
                <a href="#" className="block p-5 hover:bg-[#fcf9f2] transition-colors group">
                  <span className="font-['var(--font-archivo-narrow)'] font-semibold text-[10px] text-[#74584a] uppercase tracking-widest mb-2 block">Caça</span>
                  <span className="font-['var(--font-work-sans)'] font-semibold text-[#1c1c18] group-hover:text-[#4d6453] transition-colors block leading-snug">Veado-de-cauda-branca: Rastreamento e Comportamento</span>
                </a>
              </li>
              <li>
                <a href="#" className="block p-5 hover:bg-[#fcf9f2] transition-colors group">
                  <span className="font-['var(--font-archivo-narrow)'] font-semibold text-[10px] text-[#74584a] uppercase tracking-widest mb-2 block">Equipamento</span>
                  <span className="font-['var(--font-work-sans)'] font-semibold text-[#1c1c18] group-hover:text-[#4d6453] transition-colors block leading-snug">Top 10 Facas de Sobrevivência para 2024</span>
                </a>
              </li>
              <li>
                <a href="#" className="block p-5 hover:bg-[#fcf9f2] transition-colors group">
                  <span className="font-['var(--font-archivo-narrow)'] font-semibold text-[10px] text-[#74584a] uppercase tracking-widest mb-2 block">Acampamento</span>
                  <span className="font-['var(--font-work-sans)'] font-semibold text-[#1c1c18] group-hover:text-[#4d6453] transition-colors block leading-snug">Construção de Abrigos para Tempo Frio</span>
                </a>
              </li>
            </ul>
          </div>
        </aside>

      </main>
      <Footer />
    </>
  );
}
