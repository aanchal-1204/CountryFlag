import Header from './components/Header'
import { Outlet } from 'react-router-dom'
// import { ThemeContext } from '../contexts/ThemeContext'
import './App.css'
import { ThemeProvider } from '../contexts/ThemeContext'
import { useState } from 'react'

const App = () => {
  const [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem('isDarkMode')))

  return (
    <>
    {/* <ThemeContext.Provider value={[isDark, setIsDark]}> */}
    <ThemeProvider>

    <Header  />
    <Outlet  />
    </ThemeProvider>
   
      {/* </ThemeContext.Provider> */}
    </>
  )
}

export default App