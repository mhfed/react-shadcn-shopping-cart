import { IProduct } from '@/common/type'
import NoResults from '@/components/NoResults'
import ProductCard from '@/components/ProductCard'

interface ProductListProps {
  title: string
  items: IProduct[]
}

const RelatedProduct: React.FC<ProductListProps> = ({ title, items }) => {
  return (
    <div className='space-y-4'>
      <h3 className='font-bold text-xl sm:text-3xl text-center my-8'>{title}</h3>
      {items.length === 0 && <NoResults />}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {items.map((item) => (
          <ProductCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  )
}

export default RelatedProduct
