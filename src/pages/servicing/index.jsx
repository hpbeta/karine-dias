import { Check } from "lucide-react";

export function Servicing() {
  const services = [
    {
      title: "Curso de Redação ENEM",
      description:
        "Aulas focadas na estrutura da redação dissertativo-argumentativa exigida pelo ENEM, com abordagem prática, repertórios estratégicos e desenvolvimento da escrita passo a passo.",
      features: [
        "Estrutura da redação ENEM",
        "Repertórios estratégicos",
        "Desenvolvimento passo a passo",
        "Critérios da banca",
      ],
      highlight: true,
    },
    {
      title: "Pacotes de Correção",
      description:
        "Correções personalizadas de redações com devolutiva completa: análise detalhada dos cinco critérios do ENEM, comentários sobre argumentação, coesão, repertório e proposta de intervenção.",
      features: [
        "Análise dos 5 critérios",
        "Comentários detalhados",
        "Acompanhamento individual",
        "Evolução real da escrita",
      ],
      highlight: false,
    },
    {
      title: "Aulas de Redação para Concurso",
      description:
        "Aulas voltadas exclusivamente para a redação exigida em concursos públicos. Abordagem prática com foco nos principais tipos textuais cobrados, técnicas de argumentação e análise de temas recorrentes.",
      features: [
        "Tipos textuais para concursos",
        "Técnicas de argumentação",
        "Estruturação do texto",
        "Análise de temas recorrentes",
      ],
      highlight: false,
    },
    {
      title: "Trabalhos Acadêmicos e Escolares",
      description:
        "Auxílio na produção e revisão de resumos, fichamentos, resenhas, seminários e demais atividades escolares ou universitárias. Textos bem estruturados e com linguagem adequada.",
      features: [
        "Resumos e fichamentos",
        "Resenhas e seminários",
        "Normas da ABNT",
        "Linguagem adequada",
      ],
      highlight: false,
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-purple-800 mb-2">
            Serviços
          </h2>
          <div className="w-20 h-1 bg-[#edb966] mx-auto mb-6"></div>
          <p className="text-gray-600">
            Escolha o serviço que melhor atende às suas necessidades
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`service-card rounded-xl p-6 flex flex-col justify-between h-full ${
                service.highlight
                  ? "bg-purple-800 text-white border-4 border-[#edb966] shadow-lg"
                  : "bg-[#f0f0f0] border border-gray-200"
              }`}
            >
              {service.highlight && (
                <div className="bg-[#edb966] text-purple-800 text-xs font-bold uppercase py-1 px-3 rounded-full inline-block mb-4">
                  Mais popular
                </div>
              )}

              <h3
                className={`text-xl font-serif font-bold mb-3 ${
                  service.highlight ? "text-white" : "text-purple-800"
                }`}
              >
                {service.title}
              </h3>

              <p
                className={`text-sm mb-6 ${
                  service.highlight ? "text-white/80" : "text-gray-600"
                }`}
              >
                {service.description}
              </p>

              <ul className="space-y-2 flex-grow">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check
                      size={18}
                      className={`mr-2 mt-0.5 flex-shrink-0 ${
                        service.highlight ? "text-[#ffd966]" : "text-purple-800"
                      }`}
                    />
                    <span
                      className={`text-sm ${
                        service.highlight ? "text-white/90" : "text-gray-700"
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-4 border-t border-dashed border-gray-200">
                <a
                  href={`https://wa.me/558291745926?text=${encodeURIComponent(
                    service.title
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-center block w-full py-2 px-4 rounded-lg font-medium ${
                    service.highlight
                      ? "bg-white text-purple-800 hover:bg-[#ffd966]"
                      : "bg-[#713292] text-white hover:bg-[#713292]/90"
                  } transition-colors`}
                >
                  Quero saber mais
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}