import { useEffect, useState } from 'react'
import './App.css'

const FollowPointer = () => {

  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    console.log('effect ', { enabled })


    const handleMove = (event) => {

      const { clientX, clientY } = event
      setPosition({ x: clientX, y: clientY })
    }

    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }

    return () => {
      window.removeEventListener('pointermove', handleMove)
      console.log("cleanUp")
    }
  }, [enabled])

  // [] -> solo se ejecuta una vez al montar el componente
  // [enabled] -> se ejecuta cuando enabled cambia y cuando se monta el componente
  // undefined -> se ejecuta cada vez que renderiza el componente

  useEffect(() => {
    document.body.classList.toggle('no-cursor', enabled)

    return () => {
      document.body.classList.remove('no-cursor')
    }
  }, [enabled])

  return (
    <>
      <div style={{
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        border: '1px solid #fff',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -25,
        top: -25,
        width: 50,
        height: 50,
        transform: `translate(${position.x}px, ${position.y}px)`,
      }} />
      <button onClick={() => { setEnabled(!enabled) }}>{enabled ? 'desactivar' : 'Activar'} seguir puntero</button>
    </>
  )
}

function App() {
  // const [mounted, setMounted] = useState(true)

  return (
    <main>
      {/* {mounted && <FollowPointer />} */}
      {/* <button onClick={() => { setMounted(!mounted) }}>
        toggle mounted bottom
      </button> */}
      <FollowPointer />
    </main>
  )
}

export default App