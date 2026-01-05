import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FlightsSection from '@/components/FlightsSection';
import PricingTable from '@/components/PricingTable';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

/**
 * Design Philosophy: Minimalismo Corporativo Moderno
 * - Clareza informacional acima de tudo
 * - Hierarquia visual forte com tipografia estratégica
 * - Paleta: Azul marinho (#003366), branco, cinza e acentos em ouro
 * - Foco em eficiência de navegação e apresentação de dados
 */
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FlightsSection />
        <PricingTable />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
