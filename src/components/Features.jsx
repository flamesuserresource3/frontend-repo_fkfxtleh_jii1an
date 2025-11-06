import { Shield, Timer, Globe2, Layers, Wallet, Repeat, Bell, Image as ImageIcon } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Sécurité & conformité',
    desc: "Chiffrement avancé, MFA via OTP SIM, journalisation immuable et moteur de règles KYC/AML par pays.",
  },
  {
    icon: Wallet,
    title: 'Mobile Money natif',
    desc: "Intégrations Orange/Moov avec callbacks, réconciliation asynchrone et tolérance aux latences.",
  },
  {
    icon: Repeat,
    title: 'Tontine transparente',
    desc: "Algorithme déterministe pour l'ordre de rotation, pénalités automatiques et rappels de paiement.",
  },
  {
    icon: Globe2,
    title: 'Transfrontalier',
    desc: "Support diaspora conforme PAPSS, conversion et routage sûrs.",
  },
  {
    icon: Timer,
    title: 'Rapide sur réseaux lents',
    desc: "Optimisé 2G/3G, compression et priorisation QoS pour les flux critiques.",
  },
  {
    icon: ImageIcon,
    title: 'Crowdfunding efficace',
    desc: "Projets modérés, contreparties, images 3:2 compressées et suggestions de don populaire.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-10">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-xl font-bold text-gray-900">Pourquoi Fides ?</h2>
        <p className="text-gray-600 mt-1">Pensé pour la fiabilité, la transparence et la simplicité mobile.</p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm hover:shadow-md transition">
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-md bg-indigo-50 text-indigo-700 grid place-items-center">
                  <Icon size={18} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
