import Creative from "./components/superside/Creative"
import Engage from "./components/superside/Engage"
import Enterprice from "./components/superside/Enterprice"
import Features from "./components/superside/Features"
import Footer from "./components/superside/Footer"
import Hero from "./components/superside/Hero"
import Header from "./components/superside/Navbar"
import Sponsor from "./components/superside/Sponsor"
import Team from "./components/superside/Team"

function App() {

  return (
    <div className="min-h-screen font-inter bg-milk">
      <Header />
      <main>
        <Hero />
        <Sponsor />
        <Creative />
        <Team />
        <Enterprice />
        <Features />
        <Engage />
        <Footer />
      </main>
    </div>
  )
}

export default App
