import { cn } from '@/lib/utils'
import { Link, useLocation } from 'react-router-dom'

type routeDataType = {
  id: string
  name: string
}[]

const routeData: routeDataType = [
  {
    id: 'vegetable',
    name: 'Vegetable'
  },
  {
    id: 'meat',
    name: 'Meat'
  },
  {
    id: 'seafood',
    name: 'Seafood'
  },
  {
    id: 'fastfood',
    name: 'Fastfood'
  },
  {
    id: 'fruit',
    name: 'Fruit'
  },
  {
    id: 'juice',
    name: 'Juice'
  },
  {
    id: 'mix',
    name: 'Mix'
  }
]

const MainNav: React.FC = () => {
  const { pathname } = useLocation()

  const routes = routeData.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`
  }))

  return (
    <nav className='mx-3 md:mx-6 flex overflow-auto scrollbar-hide whitespace-nowrap items-center space-x-4 lg:space-x-6'>
      {routes.map((route) => (
        <Link
          key={route.label}
          to={route.href}
          className={cn(
            'text-sm font-medium inline-block text-center transition-colors hover:text-black',
            route.active ? 'text-black' : 'text-neutral-500'
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  )
}

export default MainNav
