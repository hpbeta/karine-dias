import { ArrowRight } from "lucide-react";

export function NextStep() {
  return (
    <section className="py-16 bg-purple-800 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Pronto para dar o próximo passo na sua jornada?
          </h2>

          <p className="text-lg md:text-xl mb-8 text-white/80">
            Entre em contato hoje mesmo e descubra como posso te ajudar a
            conquistar a redação dos seus sonhos.
          </p>

          <a
            href="https://wa.me/5500000000000?text=Olá Karine! Tenho interesse no seu curso de redação."
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-button inline-block"
          >
            <a
              href="https://wa.me/558291745926"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white text-lg px-8 py-6 rounded-xl flex items-center gap-2 shadow-lg"
            >
              Fale comigo pelo WhatsApp
              <ArrowRight size={20} />
            </a>
          </a>

          <p className="mt-6 text-sm text-white/60">
            Respondo em até 24 horas nos dias úteis
          </p>
        </div>
      </div>
    </section>
  );
}
