import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useToast } from '@/components/ui/use-toast'
import { useProductMutation } from '@/hooks/useProductMutation'
import { PlusSquare } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const ProductAdd = () => {
  const { toast } = useToast()
  const navigate = useNavigate()
  const { form, onSubmit } = useProductMutation({
    action: 'CREATE',
    onSuccess: () => {
      toast({
        variant: 'success',
        title: 'Chúc mừng bạn!',
        description: 'Bạn đã thêm sản phẩm thành công'
      })
      form.reset()
      setTimeout(() => {
        navigate('/admin/products')
      }, 2000)
    }
  })
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem className='mt-4'>
              <FormLabel>Tên</FormLabel>
              <FormControl>
                <Input type='text' placeholder='Tên sản phẩm' {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='price'
          render={({ field }) => (
            <FormItem className='mt-4'>
              <FormLabel>Giá</FormLabel>
              <FormControl>
                <Input type='number' placeholder='Giá sản phẩm' {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <div className='mt-8'>
          <Button type='submit'>
            <PlusSquare />
            Thêm sản phẩm
          </Button>
        </div>
      </form>
    </Form>
  )
}

export default ProductAdd
