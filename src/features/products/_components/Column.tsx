import { IProduct } from '@/common/type'
import { ColumnDef } from '@tanstack/react-table'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { HelpCircle, Pencil, PlusSquare, Trash2 } from 'lucide-react'

export const getColumns = (onRemove: (product: IProduct) => void): ColumnDef<IProduct>[] => [
  {
    accessorKey: 'name',
    header: 'Product Name'
  },
  {
    accessorKey: 'price',
    header: 'Product Price'
  },
  {
    accessorKey: 'categoryId',
    header: 'Category'
  },
  {
    id: 'action',

    header: () => (
      <Link to={`/admin/product/add`}>
        <Button className='rounded-full'>
          <PlusSquare size={18} className='mr-2' /> Add
        </Button>
      </Link>
    ),
    cell: ({ row }) => {
      const product = row?.original
      return (
        <>
          <Link to={`/admin/product/${product.id}/edit`}>
            <Button variant={'warning'}>
              <Pencil size={18} className='mr-2' /> Edit
            </Button>
          </Link>
          <Button
            onClick={() => {
              window.confirm('Bạn có chắc chắn xóa không?') && onRemove(product)
            }}
            variant={'destructive'}
            className='ml-2'
          >
            <Trash2 size={18} className='mr-2' /> Delete
          </Button>
        </>
      )
    }
  }
]
