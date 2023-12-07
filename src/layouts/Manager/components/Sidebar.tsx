import { CategoryIcon, DashBoardIcon, ProductIcon } from '@/components/SvgIcon'
import { Link, useLocation } from 'react-router-dom'

export const Sidebar = () => {
  const { pathname } = useLocation()

  const navConfig = [
    {
      title: 'Dashboard',
      icon: DashBoardIcon,
      href: '/admin'
    },
    {
      title: 'Products',
      icon: ProductIcon,
      href: '/admin/products'
    },
    {
      title: 'Categories',
      icon: CategoryIcon,
      href: '/admin/categories'
    }
  ]

  const classActive = (path: string) => {
    return pathname === path ? ' bg-gradient-to-tl from-blue-600 to-lime-400' : ''
  }
  const classActive2 = (path: string) => {
    return pathname === path ? ' shadow-soft-xl rounded-lg bg-white font-semibold text-slate-700' : ''
  }
  return (
    <aside className='max-w-62.5 ease-nav-brand z-990 fixed inset-y-0 my-4 ml-4 block w-full -translate-x-full flex-wrap items-center justify-between overflow-y-auto rounded-2xl border-0 bg-white p-0 antialiased shadow-none transition-transform duration-200 xl:left-0 xl:translate-x-0 xl:bg-transparent'>
      <div className='h-19.5'>
        <i
          className='absolute top-0 right-0 hidden p-4 opacity-50 cursor-pointer fas fa-times text-slate-400 xl:hidden'
          sidenav-close=''
        />
        <Link
          className='block px-8 py-6 m-0 text-sm whitespace-nowrap text-slate-700'
          to='javascript:;'
          target='_blank'
        >
          <img
            src='/images/logo-vegetable.png'
            className='inline h-full max-w-full transition-all duration-200 ease-nav-brand max-h-8'
            alt='main_logo'
          />
          <span className='ml-1 font-semibold transition-all duration-200 ease-nav-brand'>Vegetable Store</span>
        </Link>
      </div>
      <hr className='h-px mt-0 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent' />

      {/*  Nav */}
      <div className='items-center block w-auto max-h-screen h-sidenav grow basis-full'>
        <ul className='flex flex-col pl-0 mb-0'>
          {navConfig.map((item) => {
            const Icon = item.icon
            return (
              <li className='mt-0.5 w-full' key={item.href}>
                <Link
                  className={`py-2.7 text-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap px-4 transition-colors ${classActive2(
                    item.href
                  )}`}
                  to={item.href}
                >
                  <div
                    className={`${classActive(
                      item.href
                    )} shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5`}
                  >
                    <Icon isActive={pathname === item.href} />
                  </div>
                  <span className='ml-1 duration-300 opacity-100 pointer-events-none ease-soft'>{item.title}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </aside>
  )
}
