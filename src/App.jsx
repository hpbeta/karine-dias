import { AboutMe } from "./pages/aboutMe"
import { Depoiments } from "./pages/depoiments"
import { Footer } from "./pages/footer"
import { Hero } from "./pages/hero"
import { InstagramSection } from "./pages/instagramSection"
import { NextStep } from "./pages/nextStep"
import { Servicing } from "./pages/servicing"
import { WhatsAppButton } from "./pages/whatsappButton"

function App() {

  return (
    <>
      <Hero />
      <AboutMe />
      <InstagramSection />
      <Servicing />
      <Depoiments />
      <NextStep />
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default App
