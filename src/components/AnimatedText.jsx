import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './AnimatedText.css'

const AnimatedText = ({ children, delay = 0 }) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 1, delay, ease: "easeOut" }}
      className="animated-text"
    >
      {children}
    </motion.div>
  )
}

export default AnimatedText
