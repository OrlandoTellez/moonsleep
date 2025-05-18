import { Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home"
import { Profile } from "../pages/Profile"

export const AppRoutes = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
    </>
  )
}
