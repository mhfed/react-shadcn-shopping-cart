import { Button } from '@/components/ui/button'
import useCart from '@/hooks/useCart'
import { ShoppingBag } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ModeToggle } from './mode-toggle'
import { AuthAction } from './AuthAction'

const NavbarActions = () => {
  const navigate = useNavigate()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const cart = useCart()
  const handleGotoCart = () => navigate('/cart')
  if (!isMounted) {
    return null
  }
  return (
    <div className='ml-auto gap-x-4 items-center flex'>
      <Button onClick={handleGotoCart} className='flex items-center rounded-full px-4 py-2'>
        <ShoppingBag size={20} />
        <span className='ml-2 text-sm font-medium'>{cart.items.length}</span>
      </Button>
      <ModeToggle />
      <AuthAction />
    </div>
  )
}

export default NavbarActions
