import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="bg-black text-[#474856] min-h-screen"> {/* Black background, white text, full height */}
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}
