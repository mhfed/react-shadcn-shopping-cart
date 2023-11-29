import { IProduct } from '@/common/type';
import { ShoppingCart } from 'lucide-react';
import useCart from '@/hooks/useCart';
import { MouseEventHandler } from 'react';
import { Button } from '@/components/ui/button';
import Currency from '@/components/ui/currency';

interface InfoProps {
  data: IProduct;
}

const Info: React.FC<InfoProps> = ({ data }) => {
  const cart = useCart();

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    cart.addItem(data);
  };
  return (
    <div>
      <h1 className='text-2xl sm:text-3xl sm:font-bold'>{data?.name}</h1>
      <div className='mt-3 lex items-end justify-between'>
        <p className='text-2xl'>
          <Currency value={data?.price} />
        </p>
      </div>
      <hr className='my-4' />
      <p className='py-4'>{data.description}</p>
      <div className='flex flex-col gap-y-6'>
        <div className='flex items-center gap-x-4'>
          <h3 className='sm:font-semibold'>Size:</h3>
          {/* <div>{data.size.name}</div> */}
        </div>
        <div className='flex items-center gap-x-4'>
          <h3 className='sm:font-semibold'>Color:</h3>
          <div
            className='h-6 w-6 rounded-full border'
            style={{ backgroundColor: data?.color?.value }}
          />
        </div>
      </div>
      <div className='mt-10 flex items-center gap-x-3'>
        <Button
          size='xl'
          onClick={onAddToCart}
          className='flex items-center gap-x-2 rounded-full px-5 py-3'
        >
          Add to Cart
          <ShoppingCart />
        </Button>
      </div>
    </div>
  );
};

export default Info;
