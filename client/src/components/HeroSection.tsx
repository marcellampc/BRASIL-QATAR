import { ArrowRight, TrendingUp } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="overview" className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Conectando Brasil e Catar
            </h2>
            <p className="text-lg text-blue-100 mb-8">
              Descubra informações completas sobre voos diretos entre São Paulo e Doha, incluindo frequências, horários e preços em todas as classes de viagem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#flights"
                className="inline-flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Explorar Voos
                <ArrowRight className="w-4 h-4" />
              </a>
              <a 
                href="#pricing"
                className="inline-flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 text-white font-semibold px-6 py-3 rounded-lg border border-white/30 transition-colors"
              >
                Ver Preços
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold mb-2">17</div>
              <p className="text-blue-100 text-sm">Voos Semanais Diretos</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold mb-2">73-77</div>
              <p className="text-blue-100 text-sm">Voos Mensais</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold mb-2">14h</div>
              <p className="text-blue-100 text-sm">Duração Média</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center flex flex-col items-center justify-center">
              <TrendingUp className="w-8 h-8 mb-2" />
              <p className="text-blue-100 text-sm">Qatar Airways</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
