export default function Footer() {
  return (
    <footer className="mt-10 border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-4 py-6 text-center text-sm text-gray-500">
        <p>
          © {new Date().getFullYear()} Fides — Plateforme chrétienne de tontine et de dons. Sécurité, transparence, impact.
        </p>
        <p className="mt-1">
          En utilisant la plateforme, vous confirmez adhérer aux valeurs chrétiennes et à la Charte Éthique.
        </p>
      </div>
    </footer>
  );
}
