export function Footer ()  {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-serif font-bold">Karine Dias</h2>
            <p className="text-xs text-gray-400">Curso de Redação ENEM</p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm text-gray-400">
              &copy; {year} Karine Dias. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};