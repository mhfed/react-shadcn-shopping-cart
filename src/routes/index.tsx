import { Toaster } from '@/components/ui/toaster';
import BaseLayout from '@/layouts/Base';
import ManagerLayout from '@/layouts/Manager';
import Signin from '@/pages/auth/sign-in';
import Signup from '@/pages/auth/sign-up';
import CartPage from '@/pages/cart';
import HomePage from '@/pages/home';
import DashboardPage from '@/pages/manager/dashboard';
import ManagerProductPage from '@/pages/manager/product';

import { Route, Routes } from 'react-router-dom';

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<BaseLayout />}>
          <Route index element={<HomePage />} />
          <Route path='cart' element={<CartPage />} />
        </Route>
        <Route path='/admin' element={<ManagerLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path='products' element={<ManagerProductPage />} />
        </Route>
        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<Signin />} />
      </Routes>
      <Toaster />
    </>
  );
};

export default Routers;
