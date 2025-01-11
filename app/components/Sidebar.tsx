import { Home, BarChart2, Users, Settings, HelpCircle } from 'lucide-react'
import Link from 'next/link'

const navItems = [
  { icon: Home, href: '/' },
  { icon: BarChart2, href: '/analytics' },
  { icon: Users, href: '/audience' },
  { icon: Settings, href: '/settings' },
  { icon: HelpCircle, href: '/help' },
]

export default function Sidebar() {
  return (
    <aside className="w-16 bg-black bg-opacity-50 backdrop-blur-md border-r border-gray-800">
      <nav className="h-full flex flex-col items-center py-8">
        {navItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="w-12 h-12 flex items-center justify-center text-gray-400 hover:text-white hover:bg-indigo-500 rounded-xl mb-4 transition-all duration-200 ease-in-out"
          >
            <item.icon size={24} />
          </Link>
        ))}
      </nav>
    </aside>
  )
}

