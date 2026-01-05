import { Plane } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="container">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-900 to-blue-700 rounded-lg flex items-center justify-center">
              <Plane className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-xl font-bold text-gray-900">
              Voos Brasil-Catar
            </h1>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#overview" className="text-sm text-gray-600 hover:text-blue-900 transition-colors">
              Visão Geral
            </a>
            <a href="#flights" className="text-sm text-gray-600 hover:text-blue-900 transition-colors">
              Voos
            </a>
            <a href="#pricing" className="text-sm text-gray-600 hover:text-blue-900 transition-colors">
              Preços
            </a>
            <a href="#faq" className="text-sm text-gray-600 hover:text-blue-900 transition-colors">
              FAQ
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
