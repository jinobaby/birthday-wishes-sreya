import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import './AudioPlayer.css'

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef(null)

  useEffect(() => {
    // Auto-play after component mounts (with a small delay)
    const timer = setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.play()
          .then(() => {
            setIsPlaying(true)
          })
          .catch(err => {
            console.log('Auto-play was prevented by browser:', err)
            // User will need to click play button
          })
      }
    }, 2000) // 2 second delay for better UX

    return () => clearTimeout(timer)
  }, [])

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play().catch(err => {
          console.log('Audio playback failed:', err)
        })
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <motion.div
      className="audio-player"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2, duration: 0.5 }}
    >
      <audio ref={audioRef} loop preload="auto">
        <source src="./audio/AUDIO-2025-10-29-00-57-49.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      <button
        onClick={togglePlay}
        className="audio-control"
        aria-label={isPlaying ? 'Pause music' : 'Play music'}
      >
        {isPlaying ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z" />
          </svg>
        )}
      </button>

      <span className="audio-label">
        {isPlaying ? '🎵 Playing' : '🎵 Play Music'}
      </span>
    </motion.div>
  )
}

export default AudioPlayer
