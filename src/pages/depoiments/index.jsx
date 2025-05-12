import { MessageCircle } from 'lucide-react';

export function Depoiments() {
  const testimonials = [
    {
      name: "Yhane",
      text: "Esse curso me ensinou grandes coisas,  pois vem me  ajudando a organizar minhas ideias e trazer sentidos para os meus textos.Você é uma professora incrível e muito profissional. No começo do curso eu queria desistir por medo de não destravar minha escrita na redação, pois já cheguei a zerar a redação do Enem, mas você me motivou a não desistir e enfrentar os meus próprios medos. Sou muito grata por isso, por não me deixar desistir. Hoje não tenho mais palavras para dizer o que estou sentindo, mas se fosse escrever em palavras daria um texto",
      course: "Curso de Redação ENEM"
    },
    {
      name: "Renata",
      text: "Eu amei começar a fazer o curso de redação com você,  pois aprendi bastante sobre, e é uma coisa que por mais que seja difícil no começo, quando você aprende e começa a organizar as ideias, as coisas ficam mais fáceis. Se eu pudesse dar um conselho para quem está no processo, seria : nunca desista, pois tudo é possível",
      course: "Curso de Redação ENEM"
    },
    {
      name: "Raquele",
      text: "Com o curso de Redação, aprendi a desenvolver argumentos mais consistentes e organizar melhor a minha redação. Além disso, a relação de nós alunas com a profª é de amigas mesmo, o que me deu mais confiança de fazer perguntas e tirar todas as dúvidas possíveis, é isso  facilitou muito minha aprendizagem",
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
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow flex flex-col h-full"
            >
              <div className="flex items-center mb-4">
                <MessageCircle className="text-[#edb966] mr-2" size={20} />
                <span className="text-xs text-gray-500">{testimonial.course}</span>
              </div>

              <p className="text-gray-700 mb-6 italic flex-1">"{testimonial.text}"</p>

              <div className="flex items-center mt-auto">
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
}