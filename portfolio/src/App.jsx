import { Layout } from '../components/Layout'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import { Contact } from '../components/Contact'
import {Home} from '../components/Home'
import { Projects } from '../components/Projects'
import { Skills } from '../components/Skills'

import './App.css'

function App() {

  return (
    <>
        <BrowserRouter>
            <Routes>
               <Route path='/' element = {<Layout/>} >
                <Route index element = {<Home/>}/>
                <Route  path='skills' element = {<Skills/>}/>
                <Route  path='projects' element = {<Projects/>}/>
                <Route  path='contact' element = {<Contact/>}/>
                    
               </Route>
            </Routes>
        </BrowserRouter>
     
    </>
  )
}

export default App
