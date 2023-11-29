import { Link } from 'react-router-dom';
import MainNav from './MainNav';
import Container from '@/components/ui/container';
import NavbarActions from './NavbarActions';

const Header = () => {
  return (
    <header className='border-b'>
      <Container>
        <div className='relative px-2 sm:px-6 lg:px-8 flex h-16 items-center'>
          <Link
            aria-label='Nike home page'
            to='/'
            className='ml-4 h-[39px] w-[39px] md:h-[59px] shrink-0 sm:w-[59px] flex lg:ml-0 gap-x-2'
          >
            <svg
              aria-hidden='true'
              className='h-full w-full transition-transform scale-[1.33]'
              focusable='false'
              viewBox='0 0 24 24'
              role='img'
              width='24px'
              height='24px'
              fill='none'
            >
              <path
                fill='currentColor'
                fillRule='evenodd'
                d='M21 8.719L7.836 14.303C6.74 14.768 5.818 15 5.075 15c-.836 0-1.445-.295-1.819-.884-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.2.666.298 1.147.298.386 0 .829-.063 1.316-.19L21 8.719z'
                clipRule='evenodd'
              ></path>
            </svg>
          </Link>
          <MainNav />
          <NavbarActions />
        </div>
      </Container>
    </header>
  );
};

export default Header;
