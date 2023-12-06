import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useToast } from '@/components/ui/use-toast'
import useAuthMutation from '@/hooks/useAuthMutation'
import { useNavigate } from 'react-router-dom'

const SignInForm = () => {
  const { toast } = useToast()
  const navigate = useNavigate()

  const { isPending, form, onSubmit } = useAuthMutation({
    action: 'SIGN_IN',
    onSuccess: () => {
      toast({
        variant: 'success',
        title: 'Chúc mừng bạn!',
        description: 'Đăng nhập thành công, chuyển hướng sau 2 giây!'
      })

      form.reset()

      setTimeout(() => {
        navigate('/')
      }, 2000)
    }
  })
  return (
    <div className='grid gap-6'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className='grid gap-2'>
            <div className='grid gap-1'>
              <FormField
                name='email'
                control={form.control}
                render={({ field }) => (
                  <FormItem className='mt-2'>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type='email' placeholder='xxx@gmail.com' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name='password'
                control={form.control}
                render={({ field }) => (
                  <FormItem className='mt-2'>
                    <FormLabel>Mật khẩu</FormLabel>
                    <FormControl>
                      <Input type='password' placeholder='*******' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button className='mt-2' disabled={isPending} type='submit'>
              <span className='ml-2'>Đăng nhập</span>
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}

export default SignInForm
