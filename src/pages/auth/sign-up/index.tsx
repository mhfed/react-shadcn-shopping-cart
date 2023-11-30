import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ArrowBigLeftDash } from 'lucide-react';
import { Link } from 'react-router-dom';
import SignUpForm from './components/sign-up-form';

const Signin = () => {
  return (
    <>
      <div className='md:hidden'></div>
      <div className='container relative hidden h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0'>
        <Link
          to='/signin'
          className={cn(
            buttonVariants({ variant: 'secondary' }),
            'absolute right-4 top-4 md:right-8 md:top-8'
          )}
        >
          Login
        </Link>
        <div className='relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex'>
          <div className='absolute inset-0 bg-zinc-900' />
          <div className='relative z-20 flex items-center text-lg font-medium'>
            <Link to='/'>
              <Button variant='secondary'>
                <ArrowBigLeftDash />
                <span className='pl-2'>Back</span>
              </Button>
            </Link>
          </div>
          <div className='relative z-20 mt-auto'>
            <blockquote className='space-y-2'>
              <p className='text-md'>
                <i>
                  &ldquo;Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. A nesciunt alias perspiciatis eum illo repellat maiores
                  eos voluptates ut eveniet iusto laboriosam repudiandae
                  temporibus in, odit magnam necessitatibus dolor.
                  Impedit!.&rdquo;
                </i>
              </p>
              <footer className='text-md text-end'>Chanh day</footer>
            </blockquote>
          </div>
        </div>
        <div className='lg:p-8'>
          <div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
            <div className='flex flex-col space-y-2 text-center'>
              <h1 className='text-2xl font-semibold tracking-tight'>
                Sign In with Email
              </h1>
              <p className='text-sm text-muted-foreground'>
                Enter your email below to sign in your account
              </p>
            </div>

            <SignUpForm />

            <p className='px-8 text-center text-sm text-muted-foreground'>
              <Link
                to='/signin'
                className='hover:text-brand underline underline-offset-4'
              >
                Already have an account? <Button variant='link'>Sign In</Button>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
