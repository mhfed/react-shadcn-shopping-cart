import { Link } from 'react-router-dom'
import MainNav from './MainNav'
import Container from '@/components/ui/container'
import NavbarActions from './NavbarActions'

const Header = () => {
  return (
    <header className='border-b'>
      <Container>
        <div className='relative px-2 sm:px-6 lg:px-8 flex h-16 items-center'>
          <Link
            aria-label='Vegetable home page'
            to='/'
            className='ml-4 h-[39px] w-[39px] md:h-[59px] shrink-0 sm:w-[59px] flex lg:ml-0 gap-x-2'
          >
            <img src='/images/logo-vegetable.png' alt='' />
          </Link>
          <MainNav />
          <NavbarActions />
        </div>
      </Container>
    </header>
  )
}

export default Header
