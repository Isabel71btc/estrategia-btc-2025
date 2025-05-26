export default function Home() {
  return (
    <main className="min-h-screen p-8 bg-white text-gray-900">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Bienvenida a EstrategiaBTC2025</h1>
        <p className="text-lg">Tu centro privado para seguir la estrategia de inversión en Bitcoin de forma segura y anónima.</p>
      </section>

      <section className="grid md:grid-cols-2 gap-6">
        <div className="border rounded-2xl p-6 shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold mb-2">🧠 Estrategia BTC 2025</h2>
          <p className="text-gray-700 mb-4">
            Accede al seguimiento, análisis y decisiones estratégicas de inversión que estás desarrollando en privado.
          </p>
          <a href="/estrategia" className="text-blue-600 font-medium hover:underline">Ver estrategia →</a>
        </div>

        <div className="border rounded-2xl p-6 shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold mb-2">🛍️ Tienda Online (en construcción)</h2>
          <p className="text-gray-700 mb-4">
            Aquí tendrás tu futura tienda online donde venderás productos o servicios seleccionados con total libertad.
          </p>
          <a href="/tienda" className="text-blue-600 font-medium hover:underline">Explorar tienda →</a>
        </div>
      </section>

      <footer className="mt-16 text-center text-gray-500 text-sm">
        &copy; 2025 EstrategiaBTC2025. Todos los derechos reservados.
      </footer>
    </main>
  );
}
