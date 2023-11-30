import { Button } from '@/components/ui/button';
import useCart from '@/hooks/useCart';
import { ShoppingBag } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ModeToggle } from './mode-toggle';

const NavbarActions = () => {
  const navigate = useNavigate();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const cart = useCart();
  const handleGotoCart = () => navigate('/cart');
  if (!isMounted) {
    return null;
  }
  return (
    <div className='ml-auto gap-x-4 items-center flex'>
      <Button
        onClick={handleGotoCart}
        className='flex items-center rounded-full px-4 py-2'
      >
        <ShoppingBag size={20} />
        <span className='ml-2 text-sm font-medium'>{cart.items.length}</span>
      </Button>
      <ModeToggle />
      <Button
        onClick={() => navigate('/signin')}
        variant='outline'
        className='flex items-center rounded-full px-4 py-2 border-border'
      >
        <span className='ml-2 text-sm font-medium'>Login</span>
      </Button>
    </div>
  );
};

export default NavbarActions;
