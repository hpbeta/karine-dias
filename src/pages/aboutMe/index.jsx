import karineImg from '../../assets/karine.jpeg'

export function AboutMe() {
  return (
    <section className="py-16 bg-[#f0f0f0]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-purple-800 mb-2">Minha História</h2>
          <div className="w-20 h-1 bg-[#edb966] mx-auto mb-8"></div>
        </div>
        
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 md:gap-10">
            <div className="md:w-1/3">
              <div className="bg-purple-800/10 p-4 rounded-xl">
                <div className="aspect-square rounded-full bg-purple-800/20 flex items-center justify-center overflow-hidden mb-4">
                <img src={karineImg} alt="Karine" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-serif font-bold text-purple-800 text-center">Karine Dias</h3>
                <p className="text-center text-gray-600 text-sm">Professora de Redação</p>
              </div>
            </div>
            
            <div className="md:w-2/3">
              <h3 className="text-2xl font-serif font-semibold text-purple-700 mb-4">
                "Sabe aquela história de "ninguém acreditava em mim"? Ela é real. E é minha."
              </h3>
              
              <div className="space-y-4 text-gray-700">
                <p>
                 Passei no Enem em 2022, depois de duas tentativas que quase me fizeram desistir. Não foi fácil. Cada reprovação parecia um soco no peito, e cada comentário de dúvida era mais um peso nas costas. Mas mesmo assim, eu continuei. Na terceira vez, deu certo. Conquistei minha vaga no IFAL – Campus Arapiraca, estudando sozinha, em casa, com o que eu tinha: meu celular, coragem e fé.
                </p>

                <p>Sim, foi com o celular mesmo. Enquanto muita gente acredita que precisa de tudo para começar, eu descobri que o pouco, quando usado com determinação, vira muito. Não precisei de cursinho caro, nem de estrutura perfeita. Eu tinha sede de aprender, disciplina para persistir e fé em Deus para não desanimar. Foi Ele o meu alicerce em cada noite de choro, em cada madrugada de estudo, em cada silêncio cheio de incerteza.</p>
                
                <p>
                  Morava em uma cidade distante e precisei me mudar para seguir esse sonho. Foi um período doce, mas também desafiador — para mim, que deixei tudo para trás, e para os meus pais, que fizeram o possível e o impossível para me apoiar. Enquanto alguns me incentivavam, outros… duvidavam. Diziam que eu ia “endoidar” de tanto estudar. Mas o que ninguém via era que eu não estava enlouquecendo — eu estava lutando. Tudo o que eu queria era uma chance de mudar minha história. E mudei.
                </p>
                
                <p className="font-medium">E mudei.</p>
                
                <p>
                 Hoje estou no 5º período da faculdade, e mesmo com poucos recursos, consegui abrir meu próprio curso de redação com apenas três alunas. Hoje, esse curso é uma das maiores fontes de realização da minha vida. Ensino um time de estudantes com o coração cheio de gratidão, amor e propósito. Porque eu sei o que é sonhar e quase desistir. E sei também o quanto vale a pena continuar.
                </p>
                
                <div className="p-4 bg-[#edb966]/30 rounded-lg border-l-4 border-[#edb966] mt-6">
                  <p className="italic">
                    Se você está estudando para o Enem, guarda isso aqui com carinho:
                    Vai doer. Vão duvidar. Mas você não precisa provar nada pra ninguém — só pra você.
                    Estude. Acredite. Seja constante.
                    E quando der certo (porque vai dar), lembra dessa história aqui. Ou melhor: escreva a sua.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
