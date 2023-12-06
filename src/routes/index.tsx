import PrivateRouter from '@/components/PrivateRouter'
import { Toaster } from '@/components/ui/toaster'
import { useLocalStorage } from '@/hooks/useStorage'
import BaseLayout from '@/layouts/Base'
import ManagerLayout from '@/layouts/Manager'
import Signin from '@/pages/auth/sign-in'
import Signup from '@/pages/auth/sign-up'
import CartPage from '@/pages/cart'
import HomePage from '@/pages/home'
import DashboardPage from '@/pages/manager/dashboard'
import ManagerProductPage from '@/pages/manager/product'
import ManagerProductAddPage from '@/pages/manager/product-add'
import ManagerProductEditPage from '@/pages/manager/product-edit'

import { Navigate, Route, Routes } from 'react-router-dom'

const Routers = () => {
  const [user] = useLocalStorage('user', {})
  return (
    <>
      <Routes>
        <Route path='/' element={<BaseLayout />}>
          <Route index element={<HomePage />} />
          <Route path='cart' element={<CartPage />} />
        </Route>
        <Route
          path='/admin'
          element={
            <PrivateRouter user={user}>
              <ManagerLayout />
            </PrivateRouter>
          }
        >
          <Route index element={<DashboardPage />} />
          <Route path='products' element={<ManagerProductPage />} />
          <Route path='product/add' element={<ManagerProductAddPage />} />
          <Route path='product/:id/edit' element={<ManagerProductEditPage />} />
        </Route>
        <Route path='/signup' element={!user || Object.keys(user).length === 0 ? <Signup /> : <Navigate to='/' />} />
        <Route path='/signin' element={!user || Object.keys(user).length === 0 ? <Signin /> : <Navigate to='/' />} />
      </Routes>
      <Toaster />
    </>
  )
}

export default Routers
