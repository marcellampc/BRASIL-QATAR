import { ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-semibold text-white mb-4">Sobre</h4>
            <p className="text-sm text-gray-400">
              Site informativo com dados atualizados sobre voos diretos entre Brasil e Catar.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Links Úteis</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://www.qatarairways.com/pt-br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                >
                  Qatar Airways
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.skyscanner.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                >
                  Skyscanner
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.kayak.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                >
                  Kayak
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Informações</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="text-gray-400">Origem: São Paulo (GRU)</span>
              </li>
              <li>
                <span className="text-gray-400">Destino: Doha (DOH)</span>
              </li>
              <li>
                <span className="text-gray-400">Companhia: Qatar Airways</span>
              </li>
              <li>
                <span className="text-gray-400">Voos Semanais: 17</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Contato</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="text-gray-400">Qatar Airways SAC</span>
              </li>
              <li>
                <span className="text-gray-400">0800 777 2827</span>
              </li>
              <li>
                <span className="text-gray-400">Deficiente Auditivo</span>
              </li>
              <li>
                <span className="text-gray-400">0800 777 2829</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-sm text-gray-400 text-center">
            © 2026 Voos Brasil-Catar. Informações atualizadas em janeiro de 2026. 
            <br />
            Dados fornecidos pela Qatar Airways e plataformas de busca de voos.
          </p>
        </div>
      </div>
    </footer>
  );
}
