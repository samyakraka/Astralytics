import Link from 'next/link'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border/40">
      {/* <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Astralytics</h3>
            <p className="text-sm text-muted-foreground">
              Empowering your social media strategy with AI-driven analytics and insights.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Dashboard', 'Analytics', 'Team', 'AI Assistant'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4"></h3>

          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border/40 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Astralytics. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
              <Link key={index} href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Icon className="h-5 w-5" />
              </Link>
            ))}
          </div>
        </div>
      </div> */}
    </footer>
  )
}

