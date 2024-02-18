import { BrowserRouter } from "react-router-dom"
import {About, Contact, Feedbacks, Hero, Navbar, Experience,Tech,Works,StarsCanvas} from './components'

function App() {
 

  return (
    <BrowserRouter>
    <div className="relative z-0 h-auto bg-primary">
      <div className="bg-hero-pattern h-auto bg-cover bg-no-repeat bg-center" >
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Tech />
      {/* <Works /> */}
      <Feedbacks />
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />

      </div>

    </div>
    </BrowserRouter>
  )
}

export default App
