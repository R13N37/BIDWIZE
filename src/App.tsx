import { useState } from 'react'
import './App.css'
import Header from './components/layout/Header/Header'
import Home from './components/layout/Home/Home'
import InfoCard from './components/layout/InfoCard/InfoCard'
import Footer from './components/layout/Footer/Footer'
import InfoAbout from './components/layout/InfoAbout/InfoAbout'
import Events from './components/layout/events/Events'
import Categories from './components/screens/Categories/Categories'
import Contact from './components/screens/Contact/Contact'


function App() {
  const [count, setCount] = useState(0)

  return (
      <div className='bg-white'>
        <Header></Header>
        <Home></Home>
        <InfoCard></InfoCard>
        <Events title={'Titlu'} subtitle={'Subtitlu'} description={'Descriere'} imageUrl={'Imagine'} buttons={[]} features={[]}></Events>
        <InfoAbout></InfoAbout>
        <Categories></Categories>
        <Contact></Contact>
        <Footer></Footer>
      </div>
  )
}

export default App
