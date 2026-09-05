import './App.css'
import { Routes, Route } from "react-router";
import { Test, SweetGallery, Home } from './pages'

function App() {
  return (
    <>
      <Routes>
         <Route path="/test" element={<Test />} />
        <Route path="/sweet-gallery" element={<SweetGallery />} />
        <Route path="/" element={<Home />} />
      </Routes>

    </>
  )
}

export default App
