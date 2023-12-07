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
        title: 'Add product successfully!'
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
              <FormLabel>Product Name</FormLabel>
              <FormControl>
                <Input type='text' placeholder='Product name' {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='price'
          render={({ field }) => (
            <FormItem className='mt-4'>
              <FormLabel>Product Price</FormLabel>
              <FormControl>
                <Input type='number' placeholder='Product price' {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <div className='mt-8'>
          <Button type='submit'>
            <PlusSquare />
            Add Product
          </Button>
        </div>
      </form>
    </Form>
  )
}

export default ProductAdd
