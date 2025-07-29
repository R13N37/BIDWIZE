import { useState } from 'react'
import './App.css'
import Header from './components/layout/Header/Header'
import Home from './components/layout/Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className='bg-white'>
        <Header content={''} style={''}></Header>
        <Home></Home>
      </div>
  )
}

export default App
