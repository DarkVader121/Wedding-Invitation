import './App.css'
import { Routes, Route, Navigate } from "react-router";
import { Test, SweetGallery, Home, Login, ManageImages, SweetGalleryGuest, SweetGalleryGuestOfficial } from './pages'
import {ProtectedRoute, GuestRoute} from './routes';

function App() {
  return (
    <>
      <Routes>
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
        <Route path="/sweet-gallery/prenup" element={<SweetGallery />} />
        <Route path="/sweet-gallery/wedding-day" element={<SweetGalleryGuestOfficial />} />
        <Route path="/sweet-gallery/guest-photos" element={<SweetGalleryGuest />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

    </>
  )
}

export default App
