import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import SecurityInfrastructure from './pages/SecurityInfrastructure'
import Nids from './pages/Nids'
import Firewalls from './pages/Firewalls'
import Penetration from './pages/Penetration'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/security-infrastruture'
          element={<SecurityInfrastructure />}
        />
        <Route
          path='/network-intrusion-detection-systems'
          element={<Nids />}
        />
        <Route
          path='/firewalls'
          element={<Firewalls />}
        />
        <Route
          path='/penetration-testing'
          element={<Penetration />}
        />

      </Routes>
    </>
  )
}

export default App
