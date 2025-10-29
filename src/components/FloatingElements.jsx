import { motion } from 'framer-motion'
import './FloatingElements.css'

const FloatingElements = () => {
  const elements = [
    { emoji: '✨', delay: 0, duration: 8 },
    { emoji: '💕', delay: 1, duration: 10 },
    { emoji: '🌸', delay: 2, duration: 12 },
    { emoji: '✨', delay: 3, duration: 9 },
    { emoji: '💫', delay: 4, duration: 11 },
    { emoji: '🌺', delay: 1.5, duration: 10 },
    { emoji: '✨', delay: 2.5, duration: 13 },
    { emoji: '🌷', delay: 3.5, duration: 9 }
  ]

  return (
    <div className="floating-elements">
      {elements.map((element, index) => (
        <motion.div
          key={index}
          className="floating-element"
          initial={{ y: '100vh', x: `${Math.random() * 100}vw`, opacity: 0 }}
          animate={{
            y: '-20vh',
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: element.duration,
            delay: element.delay,
            repeat: Infinity,
            repeatDelay: Math.random() * 5,
            ease: 'linear'
          }}
          style={{
            left: `${(index * 12) % 100}%`,
          }}
        >
          {element.emoji}
        </motion.div>
      ))}
    </div>
  )
}

export default FloatingElements
