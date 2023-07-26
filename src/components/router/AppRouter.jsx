import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../../pages/Login/Login'
import Home from '../../pages/Home/Home'
import NotFoundPage from '../../pages/NotFoundPage'

const AppRouter = () => {
  return (
    <BrowserRouter basename='admin'>
      <Routes>
        {/* public routes */}
        <Route path='login' element={<Login />} />
        {/* private routes */}
        <Route path='/' element={<Home />} />
        {/* 404 */}
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
