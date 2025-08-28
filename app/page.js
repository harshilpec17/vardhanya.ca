import Navbar from '../components/Navbar';
import DynamicHero from '../components/DynamicHero';

export default function Home() {
  return (
  <div className="min-h-screen bg-white dark:bg-slate-950">
      <Navbar />
      <main>
        <DynamicHero />
      </main>
    </div>
  );
}
