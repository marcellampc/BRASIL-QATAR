import { useState } from 'react';
import { Calendar, Users, Filter, Clock, MapPin } from 'lucide-react';

interface Flight {
  id: string;
  flightNumber: string;
  departure: string;
  arrival: string;
  duration: string;
  days: string[];
  aircraft: string;
  amenities: string[];
}

const flightsData: Flight[] = [
  {
    id: '1',
    flightNumber: 'QR 786',
    departure: '20:25',
    arrival: '09:25+1',
    duration: '13h 30m',
    days: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'],
    aircraft: 'Boeing 777-300ER',
    amenities: ['WiFi', 'Entretenimento', 'Refeições', 'Lounge']
  },
  {
    id: '2',
    flightNumber: 'QR 788',
    departure: '00:25',
    arrival: '13:25+1',
    duration: '13h 45m',
    days: ['Qua', 'Sex', 'Dom'],
    aircraft: 'Airbus A350-1000',
    amenities: ['WiFi', 'Entretenimento', 'Refeições', 'Lounge']
  }
];

export default function FlightsSection() {
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const [selectedAircraft, setSelectedAircraft] = useState<string>('');

  const days = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'];

  const filteredFlights = flightsData.filter(flight => {
    if (selectedDays.length > 0) {
      const hasSelectedDay = flight.days.some(day => selectedDays.includes(day));
      if (!hasSelectedDay) return false;
    }
    if (selectedAircraft && !flight.aircraft.includes(selectedAircraft)) {
      return false;
    }
    return true;
  });

  return (
    <section id="flights" className="py-20 bg-white">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Voos Diretos Disponíveis
        </h2>
        <p className="text-gray-600 text-lg mb-12">
          São Paulo (GRU) → Doha (DOH) - Operados por Qatar Airways
        </p>

        {/* Filtros */}
        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          <div className="flex items-center gap-2 mb-6">
            <Filter className="w-5 h-5 text-blue-900" />
            <h3 className="font-semibold text-gray-900">Filtros</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Filtro de Dias */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Dias da Semana
              </label>
              <div className="flex flex-wrap gap-2">
                {days.map(day => (
                  <button
                    key={day}
                    onClick={() => {
                      setSelectedDays(prev =>
                        prev.includes(day)
                          ? prev.filter(d => d !== day)
                          : [...prev, day]
                      );
                    }}
                    className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
                      selectedDays.includes(day)
                        ? 'bg-blue-900 text-white'
                        : 'bg-white border border-gray-300 text-gray-700 hover:border-blue-900'
                    }`}
                  >
                    {day}
                  </button>
                ))}
              </div>
            </div>

            {/* Filtro de Aeronave */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Tipo de Aeronave
              </label>
              <select
                value={selectedAircraft}
                onChange={(e) => setSelectedAircraft(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-900"
              >
                <option value="">Todas as Aeronaves</option>
                <option value="Boeing">Boeing 777-300ER</option>
                <option value="Airbus">Airbus A350-1000</option>
              </select>
            </div>
          </div>

          {(selectedDays.length > 0 || selectedAircraft) && (
            <button
              onClick={() => {
                setSelectedDays([]);
                setSelectedAircraft('');
              }}
              className="mt-4 text-sm text-blue-900 hover:text-blue-700 font-medium"
            >
              Limpar Filtros
            </button>
          )}
        </div>

        {/* Lista de Voos */}
        <div className="space-y-4">
          {filteredFlights.length > 0 ? (
            filteredFlights.map(flight => (
              <div
                key={flight.id}
                className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="grid md:grid-cols-4 gap-6 mb-6">
                  {/* Horários */}
                  <div className="flex items-center justify-between md:justify-start md:flex-col">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-gray-900">
                        {flight.departure}
                      </p>
                      <p className="text-sm text-gray-500">São Paulo</p>
                    </div>
                  </div>

                  {/* Duração */}
                  <div className="flex flex-col items-center justify-center">
                    <Clock className="w-5 h-5 text-gray-400 mb-2" />
                    <p className="text-sm font-semibold text-gray-700">
                      {flight.duration}
                    </p>
                    <div className="w-12 h-0.5 bg-gray-300 my-2"></div>
                    <p className="text-xs text-gray-500">Direto</p>
                  </div>

                  {/* Chegada */}
                  <div className="flex items-center justify-between md:justify-start md:flex-col">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-gray-900">
                        {flight.arrival}
                      </p>
                      <p className="text-sm text-gray-500">Doha</p>
                    </div>
                  </div>

                  {/* Número do Voo */}
                  <div className="flex flex-col items-center justify-center">
                    <p className="text-sm text-gray-500 mb-1">Voo</p>
                    <p className="text-lg font-bold text-blue-900">
                      {flight.flightNumber}
                    </p>
                  </div>
                </div>

                {/* Detalhes */}
                <div className="grid md:grid-cols-3 gap-4 pt-6 border-t border-gray-200">
                  <div>
                    <p className="text-xs text-gray-500 mb-2">AERONAVE</p>
                    <p className="text-sm font-semibold text-gray-900">
                      {flight.aircraft}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-gray-500 mb-2">DIAS DE OPERAÇÃO</p>
                    <div className="flex gap-1 flex-wrap">
                      {flight.days.map(day => (
                        <span
                          key={day}
                          className="text-xs bg-blue-50 text-blue-900 px-2 py-1 rounded"
                        >
                          {day}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-xs text-gray-500 mb-2">AMENIDADES</p>
                    <div className="flex gap-2 flex-wrap">
                      {flight.amenities.map(amenity => (
                        <span
                          key={amenity}
                          className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                        >
                          {amenity}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <button className="mt-6 w-full bg-blue-900 hover:bg-blue-800 text-white font-semibold py-3 rounded-lg transition-colors">
                  Reservar Voo
                </button>
              </div>
            ))
          ) : (
            <div className="text-center py-12 bg-gray-50 rounded-lg">
              <p className="text-gray-600">
                Nenhum voo encontrado com os filtros selecionados.
              </p>
            </div>
          )}
        </div>

        {/* Informações Adicionais */}
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h4 className="font-semibold text-gray-900 mb-3">
              Frequência de Voos
            </h4>
            <p className="text-gray-700 text-sm">
              A Qatar Airways opera <strong>17 voos semanais diretos</strong> entre São Paulo e Doha, com 2 voos diários mais 3 frequências adicionais (quartas, sextas e domingos).
            </p>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h4 className="font-semibold text-gray-900 mb-3">
              Dica de Reserva
            </h4>
            <p className="text-gray-700 text-sm">
              Tarifas especiais estão disponíveis para viagens até março de 2026. Reserve com antecedência para garantir os melhores preços em todas as classes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
