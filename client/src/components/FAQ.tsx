import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: 'Quantos voos diretos existem entre Brasil e Catar?',
    answer: 'A Qatar Airways opera 17 voos semanais diretos entre São Paulo (GRU) e Doha (DOH). Isso resulta em aproximadamente 73 a 77 voos diretos por mês, com 2 voos diários mais 3 frequências adicionais nas quartas, sextas e domingos.'
  },
  {
    question: 'Qual é a duração do voo?',
    answer: 'O tempo de voo varia entre 13h 30m e 14h 20m, dependendo das condições climáticas e da rota específica. Todos os voos são diretos, sem escalas.'
  },
  {
    question: 'Quais são os preços das passagens?',
    answer: 'Os preços variam conforme a classe de viagem: Econômica (USD 1.000-1.600), Executiva (USD 4.500-6.200) e Primeira Classe (USD 11.000-18.600). Tarifas especiais são frequentemente oferecidas pela Qatar Airways.'
  },
  {
    question: 'Qual é a melhor época para viajar?',
    answer: 'Os preços tendem a ser mais altos durante períodos de alta demanda (férias escolares, feriados). Tarifas especiais estão disponíveis para viagens até março de 2026. Recomenda-se reservar com antecedência.'
  },
  {
    question: 'Que aeronaves são utilizadas?',
    answer: 'A Qatar Airways utiliza principalmente Boeing 777-300ER e Airbus A350-1000 para essa rota. Ambas as aeronaves oferecem conforto moderno e excelentes amenidades em todas as classes.'
  },
  {
    question: 'Há voos diretos do Rio de Janeiro?',
    answer: 'Não. Atualmente, todos os voos diretos partem exclusivamente de São Paulo (Aeroporto de Guarulhos). Passageiros do Rio de Janeiro precisam fazer conexão em São Paulo ou em outros hubs internacionais.'
  },
  {
    question: 'Que amenidades estão incluídas?',
    answer: 'Todas as classes incluem refeições, entretenimento pessoal e WiFi (pago na econômica). A classe executiva oferece acesso a lounges exclusivos, cama plana e serviço sob demanda. A primeira classe inclui suíte privativa e serviço de concierge.'
  },
  {
    question: 'Como faço para reservar?',
    answer: 'Você pode reservar diretamente no site da Qatar Airways (qatarairways.com), através de agências de viagem ou plataformas de busca como Skyscanner, Kayak e Decolar. Recomenda-se comparar preços antes de reservar.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Perguntas Frequentes
        </h2>
        <p className="text-gray-600 text-lg mb-12">
          Respostas para as dúvidas mais comuns sobre voos Brasil-Catar
        </p>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-left font-semibold text-gray-900">
                  {item.question}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
                  <p className="text-gray-700 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
