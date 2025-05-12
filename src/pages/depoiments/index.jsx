import { MessageCircle } from 'lucide-react';

export function Depoiments  () {
  const testimonials = [
    {
      name: "Maria Silva",
      text: "As aulas da Karine foram essenciais para eu conquistar minha nota de 920 na redação do ENEM. A metodologia dela é clara e muito prática!",
      course: "Curso de Redação ENEM"
    },
    {
      name: "Pedro Santos",
      text: "Sempre tive dificuldade em organizar minhas ideias no papel. Com as correções personalizadas, entendi onde estava errando e consegui evoluir rapidamente.",
      course: "Pacotes de Correção"
    },
    {
      name: "Juliana Ferreira",
      text: "Passei no concurso da minha cidade graças às aulas de redação específicas. A diferença na minha pontuação foi o que me garantiu a aprovação!",
      course: "Aulas de Redação para Concurso"
    }
  ];

  return (
    <section className="py-16 bg-[#f0f0f0]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-purple-800 mb-2">Depoimentos</h2>
          <div className="w-20 h-1 bg-[#edb966] mx-auto mb-6"></div>
          <p className="text-gray-600">O que dizem os alunos que já transformaram sua redação</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                <MessageCircle className="text-[#edb966] mr-2" size={20} />
                <span className="text-xs text-gray-500">{testimonial.course}</span>
              </div>
              
              <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
              
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-purple-800/20 flex items-center justify-center text-purple-800 font-medium">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-3">
                  <p className="font-medium text-purple-800">{testimonial.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};