import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'
import Home from './pages/Home'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='text-4xl font-bold '>
      <Home />
    </div>
  )
}
