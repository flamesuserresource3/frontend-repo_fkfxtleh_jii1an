import { Shield, Phone } from 'lucide-react';

export default function Header() {
  return (
    <header className="w-full sticky top-0 z-20 bg-white/90 backdrop-blur border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-indigo-600 to-blue-600 grid place-items-center text-white">
            <Shield size={18} />
          </div>
          <span className="font-semibold text-gray-900">Fides</span>
          <span className="ml-2 hidden xs:inline text-xs text-gray-500">Tontine & Dons</span>
        </div>
        <nav className="flex items-center gap-2">
          <a href="#features" className="text-sm text-gray-600 hover:text-gray-900">Fonctionnalités</a>
          <a href="#ethics" className="text-sm text-gray-600 hover:text-gray-900">Charte</a>
          <a href="#faq" className="text-sm text-gray-600 hover:text-gray-900">FAQ</a>
        </nav>
        <div className="flex items-center gap-2">
          <button className="hidden sm:flex items-center gap-2 text-sm text-gray-700 px-3 py-1.5 rounded-md border border-gray-200 hover:bg-gray-50">
            <Phone size={16} /> USSD
          </button>
          <button className="text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 px-3 py-1.5 rounded-md">Se connecter</button>
        </div>
      </div>
    </header>
  );
}
