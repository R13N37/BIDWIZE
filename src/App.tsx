import { useState } from 'react'
import './App.css'
import Header from './components/layout/Header/Header'
import Home from './components/layout/Home/Home'
import InfoCard from './components/layout/InfoCard/InfoCard'
import Footer from './components/layout/Footer/Footer'
import InfoAbout from './components/layout/InfoAbout/InfoAbout'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className='bg-white'>
        <Header content={''} style={''}></Header>
        <Home></Home>
        <InfoCard></InfoCard>
        <InfoAbout></InfoAbout>
        <Footer></Footer>
      </div>
  )
}

export default App
