import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import ContactHead from './components/ContactHead/ContactHead'
import ContactForm from './components/ContactForm/ContactForm'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <Navbar />
   <main className='min-h-vh verflow-hidden'>
   <ContactHead />
   <ContactForm />
   </main>
   
   </>
  )
}

export default App
