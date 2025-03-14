import './App.css'
import Navbar from './component/Navbar'
import Home from './component/Home'
import Services from './component/Services'
import About from './component/About'

function App() {
 
  return (
    <div className='font-main'>
      <Navbar/>
      <Home/>
      <Services/>
      <About />      
    </div>
  )
}

export default App
