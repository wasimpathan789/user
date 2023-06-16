
import './App.css'
import Navbar from './components/Navbar'
import { Routes, Route} from 'react-router-dom'
import User from './components/User'
import Dashboard from './components/Dashboard'
import Charts from './components/Charts/Charts'
import Table from './components/Table'


function App() {

  return (
    <div>
      <Navbar/>
    
      <Routes>
   
      <Route index element={<Dashboard />} />
      <Route path="/user" element={<User />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/charts" element={<Charts />} />
      <Route path="/createuser" element={<User />} />
      <Route path="/table" element={<Table />} />



      
    </Routes>

    </div>
  )
}

export default App
