import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../../pages/Login/Login';
import User from '../../pages/User/User';
import NotFoundPage from '../../pages/NotFoundPage';
import PrivateRoutes from './PrivateRoutes';

const AppRouter = () => {
  return (
    <BrowserRouter basename="admin">
      <Routes>
        {/* public routes */}
        <Route path="login" element={<Login />} />
        {/* private routes */}
        <Route
          path="/user"
          element={
            <PrivateRoutes>
              <User />
            </PrivateRoutes>
          }
        />
        {/* 404 */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
