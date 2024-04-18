import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './pages/Profile'
import Login from './pages/Login'
import Register from './pages/Register'

export default function App() {
  return (
    <Router>
    <Routes>
      <Route path='/' element={<Register/>} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/profile' element={<Profile />} />
    </Routes>
  </Router>
  )
}
