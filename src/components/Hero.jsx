import { Rocket, Smartphone, ShieldCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-16 pb-10 bg-gradient-to-b from-indigo-50 to-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 text-xs font-medium text-indigo-700 bg-indigo-100 px-3 py-1 rounded-full">
            <ShieldCheck size={14} /> Confiance numérique chrétienne
          </span>
          <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
            Tontines et Dons mobiles, sécurisés et transparents
          </h1>
          <p className="mt-3 text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Plateforme mobile-first dédiée aux communautés chrétiennes d'Afrique subsaharienne. Optimisée pour réseaux lents et intégrée au Mobile Money.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-indigo-600 text-white font-medium hover:bg-indigo-700">
              <Rocket size={16} /> Démarrer une tontine
            </button>
            <button className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-gray-200 text-gray-800 hover:bg-gray-50">
              <Smartphone size={16} /> Faire un don
            </button>
          </div>

          <p className="mt-4 text-xs text-gray-500">MFA par OTP SIM • Journalisation immuable • Règles KYC dynamiques</p>
        </div>
      </div>
    </section>
  );
}
