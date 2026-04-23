import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Story from './pages/Story'
import Contents from './pages/Contents'
import Goods from './pages/Goods'
import Licensing from './pages/Licensing'
import Contact from './pages/Contact'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/story" element={<Story />} />
        <Route path="/contents" element={<Contents />} />
        <Route path="/goods" element={<Goods />} />
        <Route path="/licensing" element={<Licensing />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}
