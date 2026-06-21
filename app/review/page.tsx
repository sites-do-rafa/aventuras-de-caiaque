import Image from 'next/image';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Star, ThumbsUp, ThumbsDown, CheckCircle, XCircle } from 'lucide-react';
import Link from 'next/link';

export default function ReviewPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        <article className="lg:col-span-8 space-y-10">
          {/* Breadcrumbs */}
          <div className="flex items-center space-x-2 font-['var(--font-archivo-narrow)'] font-semibold text-[10px] text-[#434843] uppercase tracking-widest">
            <Link href="/review" className="hover:text-[#061b0e]">Avaliações de Equipamentos</Link>
            <span>/</span>
            <Link href="#" className="hover:text-[#061b0e]">Caça</Link>
            <span>/</span>
            <span className="text-[#061b0e]">Arcos</span>
          </div>

          <header>
            <h1 className="font-['var(--font-domine)'] text-4xl md:text-5xl lg:text-6xl text-[#1c1c18] font-bold leading-tight mb-6">
              O Predator Elite: Uma Avaliação Abrangente do Melhor Arco Composto
            </h1>
            <p className="font-['var(--font-work-sans)'] text-xl text-[#434843] leading-relaxed">
              Testado no ambiente inóspito de Montana, o Predator Elite promete precisão e poder inigualáveis. Será que atende à expectativa do aventureiro moderno?
            </p>
          </header>

          {/* Hero Image */}
          <div className="w-full aspect-[16/9] rounded border border-[#c3c8c1] bg-[#f1eee7] relative overflow-hidden">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzGXvOpAs8prY6nfX4gBbeKWEs70YvoSpOf0L32jIRZEwu9u7kcbnBm47dPdoPPkn2DqPYUsk9I_GWggxV0JHiy21OgStge64zLUmXD2PbZuXmeagqMkMXYVbXYnjvaY7pHwhuxylSk1g8W1dMuR_rv7J_sPETFQsnNxToBJ13a_OoxraJ_Zhm8jWwFLXSh_ZW9_aqUrRZoHYG811dMtIBPGC0oK9UP8JhDciH8Sj5ufaDJF8h4k_ZjU6cu8z_pYHqVoDDb86IaXc"
              alt="Arco Composto Predator Elite"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-4 left-4 flex space-x-2">
              <span className="bg-white text-[#061b0e] border border-[#061b0e] px-2 py-1 rounded font-['var(--font-archivo-narrow)'] font-semibold text-[10px] uppercase tracking-widest">Caça</span>
              <span className="bg-[#4e1c00] text-white px-2 py-1 rounded font-['var(--font-archivo-narrow)'] font-semibold text-[10px] uppercase tracking-widest shadow-sm">Escolha do Editor</span>
            </div>
          </div>

          {/* Quick Buy Bento */}
          <div className="bg-white p-6 rounded border border-[#c3c8c1] flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
            <div>
              <h3 className="font-['var(--font-domine)'] text-2xl text-[#1c1c18] font-bold mb-3">Arco Composto Predator Elite</h3>
              <div className="flex items-center space-x-1 text-[#f56600]">
                <Star fill="currentColor" size={16} />
                <Star fill="currentColor" size={16} />
                <Star fill="currentColor" size={16} />
                <Star fill="currentColor" size={16} />
                <Star size={16} />
                <span className="font-['var(--font-work-sans)'] text-sm text-[#434843] ml-2 font-medium">(4.8/5 em 120 avaliações)</span>
              </div>
            </div>
            <div className="flex flex-col items-center md:items-end w-full md:w-auto mt-4 md:mt-0">
              <span className="font-['var(--font-work-sans)'] font-bold text-3xl text-[#061b0e] mb-2">$899.00</span>
              <button className="w-full md:w-auto bg-[#f56600] text-white px-8 py-4 rounded font-['var(--font-archivo-narrow)'] font-semibold text-sm uppercase tracking-widest transition-colors hover:bg-[#d85a00] border-b-4 border-[#4e1c00] active:translate-y-[2px] active:border-b-2">
                Ver Preço no Mercado Livre
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg prose-p:font-['var(--font-work-sans)'] prose-p:text-[#1c1c18] prose-headings:font-['var(--font-domine)'] prose-headings:text-[#061b0e] max-w-none">
            <p>
              Quando você está a quilômetros de distância da civilização, seu equipamento não é somente um utensílio; é um pilar de sobrevivência. O arco composto Predator Elite é construído justamente com esta filosofia em mente. Usinado de uma barra de alumínio grau aeroespacial e incluindo um sistema de roldanas altamente agressivo, ele dispara flechas possuindo uma energia cinética devastadora.
            </p>
            
            <h3>Qualidade de Construção e Pegada</h3>
            <p>
              Ao pegar o Predator Elite, a primeira coisa que você repara é o equilíbrio. Com um modesto peso de 4.2 lbs a nu, faz com que pareça robusto sem ser desajeitado. A empunhadura é totalmente usinada para reduzir o torque, sentando confortavelmente na mão mesmo usando luvas leves.
            </p>

            {/* Spec Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-10 not-prose">
              {[
                { label: 'Velocidade IBO', value: '340 FPS' },
                { label: 'Peso', value: '4.2 lbs' },
                { label: 'Eixo a Eixo', value: '32"' },
                { label: 'Alívio (Let-Off)', value: '80-90%' }
              ].map((spec) => (
                <div key={spec.label} className="bg-[#f6f3ec] p-5 rounded border border-[#c3c8c1] text-center flex flex-col items-center justify-center">
                  <div className="font-['var(--font-archivo-narrow)'] font-semibold text-[10px] text-[#434843] uppercase tracking-widest mb-2">{spec.label}</div>
                  <div className="font-['var(--font-domine)'] text-2xl font-bold text-[#1c1c18]">{spec.value}</div>
                </div>
              ))}
            </div>

            <h3>Desempenho no Campo</h3>
            <p>
              Durante nossos testes práticos em florestas densas, o comprimento de 32 polegadas de eixo a eixo provou ser altamente manobrável em arbustos fechados e plataformas de árvores. O ciclo de puxada, embora rígido no início devido às roldanas de velocidade, cai muito bem em uma parede traseira sólida.
            </p>
          </div>

          {/* Pros/Cons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
            <div className="bg-white p-8 rounded border border-[#c3c8c1]">
              <h4 className="font-['var(--font-domine)'] text-2xl font-bold text-[#061b0e] mb-6 flex items-center">
                <ThumbsUp className="text-[#4d6453] mr-3" /> Prós
              </h4>
              <ul className="space-y-4 font-['var(--font-work-sans)'] text-[#1c1c18]">
                <li className="flex items-start"><CheckCircle className="text-[#4d6453] mr-3 flex-shrink-0 w-5 h-5 mt-0.5" /> Impressionante velocidade de flecha de 340 FPS.</li>
                <li className="flex items-start"><CheckCircle className="text-[#4d6453] mr-3 flex-shrink-0 w-5 h-5 mt-0.5" /> Design excepcional da empunhadura minimiza o torque.</li>
                <li className="flex items-start"><CheckCircle className="text-[#4d6453] mr-3 flex-shrink-0 w-5 h-5 mt-0.5" /> Alívio altamente ajustável para conforto.</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded border border-[#c3c8c1]">
              <h4 className="font-['var(--font-domine)'] text-2xl font-bold text-[#ba1a1a] mb-6 flex items-center">
                <ThumbsDown className="text-[#ba1a1a] mr-3" /> Contras
              </h4>
              <ul className="space-y-4 font-['var(--font-work-sans)'] text-[#1c1c18]">
                <li className="flex items-start"><XCircle className="text-[#ba1a1a] mr-3 flex-shrink-0 w-5 h-5 mt-0.5" /> Ciclo de puxada agressivo não é para iniciantes.</li>
                <li className="flex items-start"><XCircle className="text-[#ba1a1a] mr-3 flex-shrink-0 w-5 h-5 mt-0.5" /> Cordas de fábrica tendem a ceder cedo.</li>
              </ul>
            </div>
          </div>

        </article>

        {/* Sidebar */}
        <aside className="lg:col-span-4 space-y-10">
          <div className="bg-[#f1eee7] border border-dashed border-[#c3c8c1] rounded p-6 flex flex-col items-center justify-center min-h-[250px]">
             <span className="font-['var(--font-archivo-narrow)'] font-semibold text-[10px] text-[#434843] uppercase tracking-widest mb-3">Conteúdo Patrocinado</span>
             <div className="text-center text-[#434843] opacity-70">
               [Espaço AdSense 300x250]
             </div>
          </div>

          <div className="bg-white border border-[#c3c8c1] rounded p-6">
            <h3 className="font-['var(--font-domine)'] text-2xl font-bold text-[#1c1c18] mb-6 border-b border-[#c3c8c1] pb-3">Complete Seu Equipamento</h3>
            <div className="space-y-6">
               <Link href="#" className="flex items-center space-x-4 group">
                 <div className="w-20 h-20 bg-[#f6f3ec] rounded border border-[#e5e2db] flex-shrink-0 overflow-hidden relative">
                   <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9ccJV5Ra-g1MsdePp7pVPq_mkKUeAX9vLvHnMI5mYlo1wzqB0U-2z5d4BVOByyzqPsAllcjiCvr8RdpW0GNhl-HFclhwEdVbPg5GEx7f0CUhFA1XuClAzTCexsMtT8flaw-autwxb7dfa8-2CECPXXNKrFITcnGfNFW9FG72VSYtxxMRIhKcWia2GwJbZ881rECiefN6Nt6ROsGhmQudOtah54FEpN_syMy_YxRzC7cF9_aczlQ0KYnJyrEdzEVli573UZdkcqxU" alt="Gatilho" fill className="object-cover" referrerPolicy="no-referrer" />
                 </div>
                 <div>
                   <h4 className="font-['var(--font-work-sans)'] font-bold text-[#1c1c18] group-hover:text-[#061b0e] transition-colors leading-tight mb-1">Gatilho Apex Gear</h4>
                   <span className="font-['var(--font-archivo-narrow)'] font-semibold text-[10px] text-[#434843] uppercase tracking-widest">Avaliação</span>
                 </div>
               </Link>
               <Link href="#" className="flex items-center space-x-4 group">
                 <div className="w-20 h-20 bg-[#f6f3ec] rounded border border-[#e5e2db] flex-shrink-0 overflow-hidden relative">
                   <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuDS7naEmesI_hVe3gkKIOqTn-YpRENb_W1B-reYGjjUbrP-vHk_weeFixZqyIsTAbizJFtp7wbYGye7_AsbgI2BBSJMvHdw8Va8IWXBuyS4MgB9DIvfR6AycGXPhwrBp7pjAuTt8Jbg8RluSi880IQBND03cP3FqEhaAnpBLBeyoZAULu0rFmxnIFQoaBQ96M8_zELEVd7YQLjc3IOIMClXni1baThSUVPcUwZ65PVup9oZi_gbBC_QgTt28GfQ2Spg6BSTQ26lLIg" alt="Flechas" fill className="object-cover" referrerPolicy="no-referrer" />
                 </div>
                 <div>
                   <h4 className="font-['var(--font-work-sans)'] font-bold text-[#1c1c18] group-hover:text-[#061b0e] transition-colors leading-tight mb-1">Flechas Carbon Express</h4>
                   <span className="font-['var(--font-archivo-narrow)'] font-semibold text-[10px] text-[#434843] uppercase tracking-widest">Melhor Escolha</span>
                 </div>
               </Link>
               <Link href="#" className="flex items-center space-x-4 group">
                 <div className="w-20 h-20 bg-[#f6f3ec] rounded border border-[#e5e2db] flex-shrink-0 overflow-hidden relative">
                   <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvDL33h5FAds76glRaVLhiTIV5biCVyyJXEEw2oIDM6Mq5xk0mvlKMBXCzrnkf8jJEa4bXXpUKdKg28hXTWGbCCulS7T_CJPclt1oSSJIGteb8OiUwAUrtNOm_IKjAfpCAdeSjeD0AV7ljFGDZjn9YlCOq1YH2p6QbfnPmUrVY3tazsNSJHfQA_Nl7fp7ivL5hbPjdZVSePhgYGBg1SlepzQjHGjZt4wE4l-XN7HMdZrQlP6hvy-2gHB_rQ3i8_DIlztTHr3KRCXs" alt="Estojo" fill className="object-cover" referrerPolicy="no-referrer" />
                 </div>
                 <div>
                   <h4 className="font-['var(--font-work-sans)'] font-bold text-[#1c1c18] group-hover:text-[#061b0e] transition-colors leading-tight mb-1">Estojo Plano para Qualquer Clima</h4>
                   <span className="font-['var(--font-archivo-narrow)'] font-semibold text-[10px] text-[#434843] uppercase tracking-widest">Guia</span>
                 </div>
               </Link>
            </div>
          </div>
        </aside>

      </main>
      <Footer />
    </>
  );
}
