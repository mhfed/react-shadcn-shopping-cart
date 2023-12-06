import { IUser } from '@/common/type'
import { formSignupSchema } from '@/common/schema'
import { signin, signup } from '@/services/auth'
import { joiResolver } from '@hookform/resolvers/joi'
import { useForm } from 'react-hook-form'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useLocalStorage } from './useStorage'
import { useToast } from '@/components/ui/use-toast'
import { AxiosError } from 'axios'
import { cn } from '@/lib/utils'

type useAuthMutationProps = {
  action: 'SIGN_IN' | 'SIGN_UP'
  defaultValues?: IUser
  onSuccess?: () => void
}

const useAuthMutation = ({ action, defaultValues = { email: '', password: '' }, onSuccess }: useAuthMutationProps) => {
  const [, setUser] = useLocalStorage('user', {})
  const queryClient = useQueryClient()
  const { toast } = useToast()
  const { mutate, ...rest } = useMutation({
    mutationFn: async (user: IUser) => {
      switch (action) {
        case 'SIGN_IN':
          return await signin(user)
        case 'SIGN_UP':
          return await signup(user)
        default:
          return null
      }
    },
    onSuccess: (data) => {
      setUser(data)
      onSuccess && onSuccess()
      queryClient.invalidateQueries({
        queryKey: ['user']
      })
    },
    onError: (error: AxiosError) => {
      console.log(`SIGNUP_ERROR`, error)
      toast({
        className: cn('top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4 text-destructive'),
        variant: 'success',
        title: 'Có lỗi xảy ra!',
        description: `Có lỗi, ${error.response?.data}`
      })
    }
  })

  const form = useForm({
    resolver: joiResolver(formSignupSchema),
    defaultValues
  })

  const onSubmit = (user: IUser) => {
    mutate(user)
  }

  return {
    form,
    onSubmit,
    ...rest
  }
}
export default useAuthMutation
