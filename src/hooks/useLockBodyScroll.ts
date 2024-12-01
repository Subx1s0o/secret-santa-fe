import { useEffect } from "react"

export function useLockBodyScroll(open: boolean) {
    useEffect(() => {
        if (open) {
          document.body.style.overflow = 'hidden'
        } else {
          document.body.style.overflow = 'auto'
        }
    
        return () => {
          document.body.style.overflow = 'auto'
        }
      }, [open])
    
}