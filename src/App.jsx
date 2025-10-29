import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Hero from './components/Hero'
import MessageSection from './components/MessageSection'
import FloatingElements from './components/FloatingElements'
import './App.css'

function App() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="app">
      <FloatingElements />
      <Hero />
      <MessageSection />
    </div>
  )
}

export default App
