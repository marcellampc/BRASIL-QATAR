import { Check, Info } from 'lucide-react';

interface PricingTier {
  name: string;
  description: string;
  priceUSD: string;
  priceBRL: string;
  features: string[];
  highlight?: boolean;
}

const pricingData: PricingTier[] = [
  {
    name: 'Econômica',
    description: 'Conforto básico para sua jornada',
    priceUSD: 'USD 1.000 - 1.600',
    priceBRL: 'R$ 5.000 - 8.000',
    features: [
      'Assento padrão',
      'Bagagem de mão incluída',
      'Refeição a bordo',
      'Entretenimento pessoal',
      'WiFi pago'
    ]
  },
  {
    name: 'Executiva (Business)',
    description: 'Conforto premium com serviço de excelência',
    priceUSD: 'USD 4.500 - 6.200',
    priceBRL: 'R$ 22.839 - 31.524',
    features: [
      'Cama de casal totalmente plana',
      'Acesso ao lounge exclusivo',
      'Refeições gourmet sob demanda',
      '4.000+ opções de entretenimento',
      'Kits de luxo exclusivos',
      'Prioridade em check-in e bagagem'
    ],
    highlight: true
  },
  {
    name: 'Primeira Classe',
    description: 'Luxo absoluto e experiência incomparável',
    priceUSD: 'USD 11.000 - 18.600',
    priceBRL: 'R$ 55.000 - 93.000',
    features: [
      'Suíte privativa com porta',
      'Cama de casal de luxo',
      'Acesso ao lounge de primeira classe',
      'Menu à la carte personalizado',
      'Serviço de concierge a bordo',
      'Amenities de designers premium',
      'Prioridade absoluta em todos os serviços'
    ]
  }
];

export default function PricingTable() {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Preços por Classe de Viagem
          </h2>
          <p className="text-gray-600 text-lg">
            Valores aproximados para voos diretos São Paulo (GRU) → Doha (DOH), ida e volta
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {pricingData.map((tier, index) => (
            <div
              key={index}
              className={`rounded-xl overflow-hidden transition-all duration-300 ${
                tier.highlight
                  ? 'ring-2 ring-blue-900 shadow-xl scale-105 md:scale-100 md:ring-4'
                  : 'shadow-md hover:shadow-lg'
              } ${tier.highlight ? 'bg-white' : 'bg-white'}`}
            >
              {tier.highlight && (
                <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white px-6 py-3 text-center">
                  <span className="text-sm font-semibold">RECOMENDADO</span>
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {tier.name}
                </h3>
                <p className="text-gray-600 text-sm mb-6">
                  {tier.description}
                </p>

                <div className="mb-8 pb-8 border-b border-gray-200">
                  <div className="mb-4">
                    <p className="text-sm text-gray-500 mb-1">Em Dólares</p>
                    <p className="text-3xl font-bold text-blue-900">
                      {tier.priceUSD}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Em Reais</p>
                    <p className="text-2xl font-semibold text-gray-700">
                      {tier.priceBRL}
                    </p>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors ${
                    tier.highlight
                      ? 'bg-blue-900 text-white hover:bg-blue-800'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Reservar Agora
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6 flex gap-4">
          <Info className="w-6 h-6 text-blue-900 flex-shrink-0" />
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Informações Importantes</h4>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• Preços são aproximados e podem variar conforme data e sazonalidade</li>
              <li>• Conversão USD/BRL utiliza taxa de referência (1 USD = R$ 5,00)</li>
              <li>• Tarifas especiais são frequentemente oferecidas pela Qatar Airways</li>
              <li>• Todos os voos são operados pela Qatar Airways com aeronaves modernas</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
