'use client'

import { memo, useState } from 'react'

interface SantaCopyingLinkButtonProps {
  link: string
  initialText: string
  className: string
}

function SantaCopyingLinkButton({
  link,
  initialText,
  className
}: SantaCopyingLinkButtonProps) {
  const [buttonText, setButtonText] = useState(initialText)

  const copyLink = () => {
    navigator.clipboard.writeText(link).then(() => {
      setButtonText('Cкопійовано!')
      setTimeout(() => setButtonText(initialText), 1000)
    })
  }

  return (
    <button
      className={className}
      type='button'
      onClick={copyLink}>
      {buttonText}
    </button>
  )
}

export default memo(SantaCopyingLinkButton)
