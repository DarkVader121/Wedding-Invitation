import './App.css'
import { Routes, Route } from "react-router";
import { Test, SweetGallery, Home, Login, ManageImages } from './pages'

function App() {
  return (
    <>
      <Routes>
        <Route path="/manage" element={<ManageImages />} />
        <Route path="/login" element={<Login />} />
        <Route path="/test" element={<Test />} />
        <Route path="/sweet-gallery" element={<SweetGallery />} />
        <Route path="/" element={<Home />} />
      </Routes>

    </>
  )
}

export default App
