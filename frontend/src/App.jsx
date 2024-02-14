import { useEffect, useState } from 'react'
import './App.css'

function App () {
  const [message, setMessage] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/ping')
        if (response.ok) {
          const data = await response.json()
          setMessage(data.message)
        } else {
          console.error('Error fetching data:', response.status)
        }
      } catch (error) {
        console.error('Error:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <>
      <main>
        <h1>Ping</h1>
        {null && (
          <>
            <h1 className='pong'>{message}</h1>
            <p>Server response ⬆️</p>{' '}
          </>
        )}
      </main>
    </>
  )
}

export default App
