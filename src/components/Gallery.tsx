import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { cn } from '@/lib/utils';

interface GalleryProps {
  images: string[];
}

const Gallery: React.FC<GalleryProps> = ({ images = [] }) => {
  return (
    <Tabs defaultValue={'0'} className='flex flex-col-reverse'>
      <div className='mx-auto mt-6 w-full max-w-2xl sm:block lg:max-w-none'>
        <TabsList className='grid grid-cols-4 gap-6'>
          {images.map((image, index) => (
            // <GalleryTab key={image.id} image={image} />
            <TabsTrigger
              key={image}
              value={index.toString()}
              className='relative flex aspect-square cursor-pointer items-center justify-center rounded-md'
            >
              <div>
                <span className='absolute h-full w-full aspect-square inset-0 overflow-hidden rounded-md'>
                  <img
                    src={image}
                    alt=''
                    className='object-cover object-center'
                  />
                </span>
                <span
                  className={cn(
                    'absolute inset-0 rounded-md ring-2 ring-offset-2'
                    // selected ? 'ring-black' : 'ring-transparent'
                  )}
                />
              </div>
            </TabsTrigger>
          ))}
        </TabsList>
      </div>
      {images.map((image, index) => (
        <TabsContent
          value={index.toString()}
          key={image}
          className='aspect-square w-full'
        >
          <div className='aspect-square relative h-full w-full sm:rounded-lg overflow-hidden'>
            <img
              src={image}
              alt='Image'
              className='object-cover object-center'
            />
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default Gallery;
