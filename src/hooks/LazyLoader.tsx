import { useEffect, useState } from "react"

export default function useProgressiveImage(src: string) {  
    const [sourceLoaded, setSourceLoaded] = useState(String)
  
    useEffect(() => {
      const img = new Image()
      img.src = src
      img.onload = () => setSourceLoaded(src)
    }, [src])
  
    return sourceLoaded 
}