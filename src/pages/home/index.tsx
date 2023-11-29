import ProductList from '@/components/ProductList';
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowRightCircle } from 'lucide-react';

// generate data for product list
const products = [
  {
    id: 1,
    name: 'Nike Air Max 270 React',
    price: 170,
    img: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/2c8f0c1e-5f3a-4d0e-9e7c-4a5c6e5c1d3c/air-max-270-react-shoe-8KcW6q.jpg',
    category: {
      id: 1,
      name: 'Shoes',
    },
  },
  {
    id: 2,
    name: 'Nike Air Max 270 React',
    price: 170,
    img: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/2c8f0c1e-5f3a-4d0e-9e7c-4a5c6e5c1d3c/air-max-270-react-shoe-8KcW6q.jpg',
    category: {
      id: 1,
      name: 'Shoes',
    },
  },
  {
    id: 3,
    name: 'Nike Air Max 270 React',
    price: 170,
    img: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/2c8f0c1e-5f3a-4d0e-9e7c-4a5c6e5c1d3c/air-max-270-react-shoe-8KcW6q.jpg',
    category: {
      id: 1,
      name: 'Shoes',
    },
  },
  {
    id: 4,
    name: 'Nike Air Max 270 React',
    price: 170,
    img: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/2c8f0c1e-5f3a-4d0e-9e7c-4a5c6e5c1d3c/air-max-270-react-shoe-8KcW6q.jpg',
    category: {
      id: 1,
      name: 'Shoes',
    },
  },
];

const HomePage = () => {
  return (
    <div className='space-y-10 pb-10'>
      <div className='flex flex-col sm:flex-row graph justify-between'>
        <div className='flex flex-col sm:flex-row subtle gap-10'>
          <div className='px-3 sm:px-5 pt-5 flex gap-8 flex-col sm:pt-0'>
            <div className='flex sm:pt-[130px] flex-col gap-3'>
              <h1 className='text-6xl sm:text-8xl font-semibold italic pb-4'>
                NIKE SHOP
              </h1>
              <p className='max-w-[500px]'>
                Welcome to the ultimate destination for athletic excellence,
                where dreams take flight and champions are made. Step into a
                world of limitless possibilities with Nike.
              </p>
            </div>
            <div>
              <Button className='bg-black mb-4 text-white flex items-center gap-2'>
                Shop Now <ArrowRight className='w-4 h-4' />
              </Button>
            </div>
            <div className='w-full'>
              <label
                className='text-sm pb-2 flex gap-2 items-center'
                htmlFor='email'
              >
                Join our Newsletter <ArrowRightCircle className='w-4 h-4' />
              </label>
              <div className='flex'>
                <input
                  className='bg-gray-100 border sm:w-[300px] border-black'
                  name='email'
                  type='email'
                />
                <Button className='rounded-none'>Subscribe</Button>
              </div>
            </div>
          </div>
          <div>
            <img
              className=''
              width={800}
              height={700}
              style={{ objectFit: 'contain' }}
              alt='image'
              src='/images/nike-reactx.png'
            />
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8'>
        <ProductList title='Featured Products' items={products} />
      </div>
    </div>
  );
};

export default HomePage;
