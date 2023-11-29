import { Button } from '@/components/ui/button';
// import useCart from '@/hooks/use-cart';
import { ShoppingBag } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NavbarActions = () => {
  const navigate = useNavigate();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  //   const cart = useCart();
  const handleGotoCart = () => navigate('/cart');
  if (!isMounted) {
    return null;
  }
  return (
    <div className='ml-auto gap-x-4 items-center flex'>
      <Button
        onClick={handleGotoCart}
        className='flex items-center rounded-full bg-black px-4 py-2'
      >
        <ShoppingBag size={20} color='white' />
        <span className='ml-2 text-sm font-medium text-white'>
          {/* {cart.items.length} */}2
        </span>
      </Button>
    </div>
  );
};

export default NavbarActions;
