import { useEffect, useState } from 'react'
import './App.css'

function App () {
  const [message, setMessage] = useState('')

  useEffect(() => {
    setMessage('hola')
  }, [])

  return (
    <>
      <h1>{message}</h1>
    </>
  )
}

export default App
