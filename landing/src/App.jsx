
import './App.css'
import { Landing } from '../components/Landing'
import { Photos } from '../components/Photos'
import { Footer } from '../components/Footer'
function App() {
  

  return (
    <>
    
    <Landing/>
    <h2 className='text-center'>Most Visited Places</h2>
     <Photos/>
     <Footer/>

    </>
  )
}

export default App
