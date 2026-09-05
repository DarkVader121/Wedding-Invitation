import './App.css'
import { Routes, Route } from "react-router";
import { Test, SweetGallery, Home, Login, ManageImages } from './pages'
import {ProtectedRoute, GuestRoute} from './routes';

function App() {
  return (
    <>
      <Routes>
        can you guard this only sign in supabase users can proceed
        <Route
            path="/login"
            element={
                <GuestRoute>
                    <Login />
                </GuestRoute>
            }
        />
        <Route
            path="/manage"
            element={
                <ProtectedRoute>
                    <ManageImages />
                </ProtectedRoute>
            }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/test" element={<Test />} />
        <Route path="/sweet-gallery" element={<SweetGallery />} />
        <Route path="/" element={<Home />} />
      </Routes>

    </>
  )
}

export default App
