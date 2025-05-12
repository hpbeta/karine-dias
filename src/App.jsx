import { AboutMe } from "./pages/aboutMe"
import { Depoiments } from "./pages/depoiments"
import { Footer } from "./pages/footer"
import { Hero } from "./pages/hero"
import { NextStep } from "./pages/nextStep"
import { Servicing } from "./pages/servicing"
import { WhatsAppButton } from "./pages/whatsappButton"

function App() {

  return (
    <>
      <Hero />
      <AboutMe />
      <Servicing />
      <Depoiments />
      <NextStep />
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default App
