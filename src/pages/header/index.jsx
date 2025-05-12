export function Header() {
  return (
    <header className="border-b border-gray-200 px-6 py-4">
      <nav className="flex items-center justify-between">
        <div>
          <a href="/" className="text-purple-800 font-bold font-serif text-lg">
            Karine Dias
          </a>
          <p className="text-xs text-gray-500">Curso de Redação ENEM</p>
        </div>
        <a
          href="https://wa.me/558291745926"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white px-5 py-2 rounded-3xl"
        >
          Whatsapp
        </a>
      </nav>
    </header>
  );
}
