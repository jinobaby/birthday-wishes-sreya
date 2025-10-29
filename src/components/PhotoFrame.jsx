import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './PhotoFrame.css'

const PhotoFrame = ({ src, alt, position = 'center', delay = 0 }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  })

  const variants = {
    left: { x: -100, opacity: 0 },
    right: { x: 100, opacity: 0 },
    center: { y: 50, opacity: 0 }
  }

  return (
    <motion.div
      ref={ref}
      initial={variants[position]}
      animate={inView ? { x: 0, y: 0, opacity: 1 } : variants[position]}
      transition={{ duration: 1.2, delay, ease: "easeOut" }}
      className={`photo-frame photo-frame-${position}`}
    >
      <div className="photo-wrapper">
        <img src={src} alt={alt} loading="lazy" />
        <div className="photo-overlay"></div>
      </div>
    </motion.div>
  )
}

export default PhotoFrame
