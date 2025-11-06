import { Send, Download, Upload } from 'lucide-react';

export default function USSDLikeActions() {
  return (
    <section className="px-4 pb-8">
      <div className="max-w-sm mx-auto bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden">
        <div className="bg-gray-50 px-4 py-2 text-xs text-gray-600">Menu rapide</div>
        <div className="divide-y divide-gray-100">
          <ActionRow icon={Upload} label="Dépôt" hint="< 5s, confirmation asynchrone" />
          <ActionRow icon={Download} label="Retrait" hint="OTP requis" />
          <ActionRow icon={Send} label="Cotiser à ma tontine" hint="Rotation automatisée" />
        </div>
      </div>
    </section>
  );
}

function ActionRow({ icon: Icon, label, hint }) {
  return (
    <button className="w-full flex items-center justify-between px-4 py-3 active:bg-gray-50">
      <div className="flex items-center gap-3">
        <div className="h-8 w-8 grid place-items-center rounded-md bg-indigo-50 text-indigo-700">
          <Icon size={16} />
        </div>
        <div className="text-left">
          <div className="text-sm font-medium text-gray-900">{label}</div>
          <div className="text-xs text-gray-500">{hint}</div>
        </div>
      </div>
      <div className="text-gray-300">›</div>
    </button>
  );
}
