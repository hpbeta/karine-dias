import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className=" hero-pattern py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold font-serif text-purple-800 mb-6 leading-tight">
              Conquiste sua vaga no ENEM com uma{" "}
              <span className="text-[#edb966] text-shadow">
                redação nota 1000
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Aprenda a escrever redações que impressionam a banca com quem já
              trilhou esse caminho e realizou seu sonho.
            </p>
            <a
              href="https://wa.me/558291745926"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-button inline-block"
            >
              <button className="bg-purple-800 hover:opacity-90 text-white text-lg px-8 py-6 rounded-xl flex items-center gap-2 shadow-lg">
                Quero garantir minha vaga
                <ArrowRight size={20} />
              </button>
            </a>
          </div>

          <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center animate-fade-in">
            <div className="bg-white p-2 rounded-xl shadow-xl rotate-3 transform hover:rotate-0 transition-all duration-300">
              <div className="bg-[rgba(255,217,102,0.2)] p-6 rounded-lg border-2 border-[#ffd966]">
                <h3 className="text-2xl font-serif text-purple-800 font-bold mb-3">
                  Curso Online!
                </h3>
                <p className="text-lg font-medium text-gray-800 mb-2">
                  • 6 meses de preparação intensiva
                </p>
                <p className="text-lg font-medium text-gray-800 mb-2">
                  • 1ª turma: fevereiro a julho
                </p>
                <p className="text-lg font-medium text-gray-800 mb-2">
                  • 2ª turma: maio a outubro
                </p>
                <p className="text-lg font-medium text-gray-800">
                  • Atendimento por turma
                </p>
                <div className="mt-4 bg-white p-3 rounded-lg text-center">
                  <span className="text-red-600 font-bold">
                    Vagas ilimitadas!
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
