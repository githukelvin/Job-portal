import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
// import Card from './components/Card'

function App() {

  return (
    <>
    
   <Navbar/>
   <Outlet/>
   {/* <Card/> */}
 
    </>
  )
}

export default App