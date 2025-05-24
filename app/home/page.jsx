export default function HomePage() {
  return (
    <main style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <h1>👋 Bienvenida a Estrategia BTC 2025</h1>
      <p>Este es tu centro de operaciones personal.</p>

      <h2>🔗 Accesos directos</h2>
      <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
        <li>
          <a href="/estrategia" style={{ fontSize: '1.2rem', textDecoration: 'none', color: '#0070f3' }}>
            🔒 Estrategia de inversión BTC
          </a>
        </li>
        <li style={{ marginTop: '1rem' }}>
          <a href="/tienda" style={{ fontSize: '1.2rem', textDecoration: 'none', color: '#0070f3' }}>
            🛒 Entrar en la tienda eCommerce
          </a>
        </li>
      </ul>
    </main>
  );
}
