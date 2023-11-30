import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import useAuthMutation from '@/hooks/useAuthMutation';
import { GithubIcon } from 'lucide-react';

const SignUpForm = () => {
  const { form, onSubmit } = useAuthMutation({
    action: 'SIGN_UP',
    onSuccess: () => {},
  });
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
                      <Input
                        type='email'
                        placeholder='xxx@gmail.com'
                        {...field}
                      />
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
              <FormField
                name='password'
                control={form.control}
                render={({ field }) => (
                  <FormItem className='mt-2'>
                    <FormLabel>Nhập lại mật khẩu</FormLabel>
                    <FormControl>
                      <Input type='password' placeholder='*******' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button
              className='mt-2'
              // disabled={isLoading}
              type='button'
              // variant='outline'
              onClick={() => {
                // setIsGitHubLoading(true);
                // signIn('github');
              }}
              // disabled={isLoading || isGitHubLoading}
            >
              <GithubIcon /> <span className='ml-2'>Sign Up with Email</span>
            </Button>
          </div>
        </form>
      </Form>
      <div className='relative'>
        <div className='absolute inset-0 flex items-center'>
          <span className='w-full border-t' />
        </div>
        <div className='relative flex justify-center text-xs uppercase'>
          <span className='bg-background px-2 text-muted-foreground'>
            Or continue with
          </span>
        </div>
      </div>
      <Button
        type='button'
        variant='outline'
        onClick={() => {
          // setIsGitHubLoading(true);
          // signIn('github');
        }}
        // disabled={isLoading || isGitHubLoading}
      >
        <GithubIcon /> <span className='ml-2'>Github</span>
      </Button>
    </div>
  );
};

export default SignUpForm;
