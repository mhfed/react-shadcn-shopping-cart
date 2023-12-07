import RelatedProduct from '@/components/RelatedProduct'
import { Button } from '@/components/ui/button'
import { useProductQuery } from '@/hooks/useProductQuery'
import { ArrowRight, ArrowRightCircle } from 'lucide-react'

const HomePage = () => {
  const { data, isLoading, isError } = useProductQuery()

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error.</div>

  return (
    <div className='space-y-10 pb-10'>
      <div className='flex flex-col sm:flex-row justify-between'>
        <div className='flex flex-col sm:flex-row bg-[#ffffffb3] dark:bg-[#000000b3] gap-10'>
          <div>
            <img className='object-contain' width={800} height={700} alt='image' src='/images/vegetable.png' />
          </div>
          <div className='px-3 sm:px-5 pt-5 flex gap-8 flex-col sm:pt-0'>
            <div className='flex sm:pt-[48px] flex-col gap-3'>
              <h1 className='text-6xl sm:text-8xl font-semibold italic pb-4'>VEGETABLE SHOP</h1>
              <p className='max-w-[500px]'>
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia
              </p>
            </div>
            <div>
              <Button
                size='xl'
                className='bg-black flex items-center gap-2 rounded-full px-5 dark:bg-white dark:text-black'
              >
                Shop Now <ArrowRight className='w-4 h-4' />
              </Button>
            </div>
            <div className='w-full'>
              <label className='text-sm pb-2 flex gap-2 items-center' htmlFor='email'>
                Join our Newsletter <ArrowRightCircle className='w-4 h-4' />
              </label>
              <div className='flex'>
                <input className='border sm:w-[300px] border-black' name='email' type='email' />
                <Button className='rounded-none'>Subscribe</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8'>
        <RelatedProduct title='Our Products' items={data} />
      </div>
    </div>
  )
}

export default HomePage
