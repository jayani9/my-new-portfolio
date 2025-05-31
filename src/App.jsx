import About from './Components/About'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Technologies from './Components/Technologies'
import Experience from './Components/Experience'
import Footer from './Components/Footer'
import Pro from './Components/Pro'
import Education from './Components/Education'

function App() {

  return (
    <div className='overflow-x-hidden text-neutral-300'>
      <div className='fixed top-0 -z-10 h-full w-full'>

      </div>
      <div className="bg-gradient-to-tl from-blue-400 via-purple-700 to-black">  
          <div className='container mx-auto px-8 font-inter font-light'>
            <Navbar/>
            <Hero/>
            <About/>
            <Technologies/>
            <Experience/>
            <Education/>
            <Pro/>
          </div>
          <Footer/>
      </div>
    </div>
    
  )
}

export default App
