import { Button } from '@/components/ui/button'
import { useLocalStorage } from '@/hooks/useStorage'
import { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useToast } from './ui/use-toast'

export const AuthAction = () => {
  const navigate = useNavigate()
  const { toast } = useToast()

  const [user, , removeUser] = useLocalStorage('user', {})

  const isLogin = useMemo(() => {
    return user && Object.keys(user).length > 0
  }, [user])

  const handleLogoutOrLogin = () => {
    if (isLogin) {
      // Logout
      removeUser()
      toast({
        variant: 'success',
        title: 'Logout successfully!'
      })
      setTimeout(() => {
        navigate('/signin')
      }, 1000)
    } else {
      navigate('/signin')
    }
  }

  return (
    <>
      {isLogin ? (
        <Button variant='ghost' className='flex items-center px-4 py-2'>
          <span className='ml-2 text-sm font-medium'>Hi - {user.user.email}</span>
        </Button>
      ) : null}
      <Button onClick={handleLogoutOrLogin} variant='outline' className='flex items-center px-4 py-2 border-border'>
        <span className='ml-2 text-sm font-medium'>{isLogin ? 'Logout' : 'Login'}</span>
      </Button>
    </>
  )
}
