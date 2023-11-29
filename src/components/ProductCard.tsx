import { MouseEventHandler } from 'react';
import { Expand, ShoppingCart } from 'lucide-react';

import Currency from '@/components/ui/currency';
import IconButton from '@/components/ui/icon-button';
// import usePreviewModal from "@/hooks/use-preview-modal";
// import useCart from "@/hooks/use-cart";
import { IProduct } from '@/common/type';
import { useNavigate } from 'react-router-dom';
import { PreviewModal } from './PreviewModal';
import Gallery from './Gallery';
import Info from './Info';

interface ProductCard {
  data: IProduct;
}

const imgUrl = 'https://picsum.photos/200';

const ProductCard: React.FC<ProductCard> = ({ data }) => {
  const navigate = useNavigate();
  // const previewModal = usePreviewModal();
  //   const cart = useCart();

  const handleClick = () => {
    navigate(`/product/${data?.id}`);
  };

  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    // previewModal.onOpen(data);
  };

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    // cart.addItem(data);
  };

  return (
    <div
      onClick={handleClick}
      className='group cursor-pointer rounded-xl border p-3 space-y-4'
    >
      {/* Image & actions */}
      <div className='aspect-square rounded-xl relative'>
        <img
          src={data?.img || imgUrl}
          alt=''
          className='aspect-square object-cover rounded-md'
        />
        <div className='opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5'>
          <div className='flex gap-x-6 justify-center'>
            <PreviewModal
              content={
                <div className='grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8'>
                  <div className='sm:col-span-4 lg:col-span-5'>
                    <Gallery images={[data?.img]} />
                  </div>
                  <div className='sm:col-span-8 lg:col-span-7'>
                    <Info data={data} />
                  </div>
                </div>
              }
            >
              <IconButton onClick={onPreview} icon={<Expand size={20} />} />
            </PreviewModal>

            <IconButton
              onClick={onAddToCart}
              icon={<ShoppingCart size={20} />}
            />
          </div>
        </div>
      </div>
      {/* Description */}
      <div>
        <p className='font-semibold text-lg'>{data.name}</p>
        <p className='text-sm text-gray-500'>{data.category?.name}</p>
      </div>
      {/* Price & Reiew */}
      <div className='flex items-center justify-between'>
        <Currency value={data?.price} />
      </div>
    </div>
  );
};

export default ProductCard;
