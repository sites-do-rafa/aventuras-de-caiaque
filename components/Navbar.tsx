import Link from 'next/link';
import Image from 'next/image';
import { Search, ShoppingCart, User, Menu } from 'lucide-react';

export function Navbar() {
  return (
    <header className="bg-[#ffffff] border-b border-[#e5e2db] sticky top-0 z-50">
      <div className="flex justify-between items-center w-full px-4 md:px-6 lg:px-8 max-w-7xl mx-auto py-3 min-h-[100px]">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="Aventuras de Caiaque Logo" width={300} height={96} className="w-auto h-[96px] object-contain flex-shrink-0" referrerPolicy="no-referrer" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 items-center">
          <Link href="/store" className="text-[#434843] hover:text-[#061b0e] hover:bg-[#f6f3ec] transition-colors px-2 py-1 rounded font-['var(--font-archivo-narrow)'] text-sm font-semibold tracking-wider uppercase">
            Melhores Escolhas
          </Link>
          <Link href="/store" className="text-[#434843] hover:text-[#061b0e] hover:bg-[#f6f3ec] transition-colors px-2 py-1 rounded font-['var(--font-archivo-narrow)'] text-sm font-semibold tracking-wider uppercase">
            Caça
          </Link>
          <Link href="/article" className="text-[#434843] hover:text-[#061b0e] hover:bg-[#f6f3ec] transition-colors px-2 py-1 rounded font-['var(--font-archivo-narrow)'] text-sm font-semibold tracking-wider uppercase">
            Pesca
          </Link>
          <Link href="/review" className="text-[#434843] hover:text-[#061b0e] hover:bg-[#f6f3ec] transition-colors px-2 py-1 rounded font-['var(--font-archivo-narrow)'] text-sm font-semibold tracking-wider uppercase">
            Equipamentos
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2 md:gap-4 text-[#061b0e]">
          <button aria-label="Buscar" className="hover:bg-[#f6f3ec] p-2 rounded-full transition-colors flex items-center justify-center">
            <Search className="w-5 h-5" />
          </button>
          <button aria-label="Carrinho" className="hover:bg-[#f6f3ec] p-2 rounded-full transition-colors relative flex items-center justify-center">
            <ShoppingCart className="w-5 h-5" />
            <span className="absolute top-0 right-0 bg-[#f56600] text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">3</span>
          </button>
          <button aria-label="Conta" className="hover:bg-[#f6f3ec] p-2 rounded-full transition-colors hidden md:flex items-center justify-center">
            <User className="w-5 h-5" />
          </button>
          {/* Mobile Menu Toggle */}
          <button aria-label="Menu" className="md:hidden hover:bg-[#f6f3ec] p-2 rounded-full transition-colors flex items-center justify-center">
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
