import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Hero from './components/Hero'
import MessageSection from './components/MessageSection'
import FloatingElements from './components/FloatingElements'
import AudioPlayer from './components/AudioPlayer'
import './App.css'

function App() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="app">
      <FloatingElements />
      <AudioPlayer />
      <Hero />
      <MessageSection />
    </div>
  )
}

export default App
