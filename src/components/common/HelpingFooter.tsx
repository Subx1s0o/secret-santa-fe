'use client'

import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

import { useRef, useState } from 'react'

export default function HelpingFooter() {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(prev => !prev)
    }
  }

  return (
    <footer>
      <ToastContainer position='top-center' />
      <div
        onClick={toggleAudio}
        className='fixed bottom-20 left-20 flex size-40 cursor-pointer items-center justify-center
          bg-gift bg-cover'></div>
      <audio
        ref={audioRef}
        className='invisible'
        autoPlay={isPlaying}
        loop>
        <source
          src='/santa.mp3'
          type='audio/mp3'
        />
      </audio>
    </footer>
  )
}
