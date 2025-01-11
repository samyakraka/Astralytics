'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const teamMembers = [
  {
    name: 'Vedant Deore',
    role: 'Full Stack Developer',
    bio: 'Passionate about building scalable web applications and exploring new technologies.',
    image: 'https://media.licdn.com/dms/image/v2/D4D03AQGBczx7Az5SFA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1723009716220?e=1741824000&v=beta&t=quhrUw6GQvaBSs9jemR98yMEv4L3br937o2FcgC9xck',
    linkedin: 'https://www.linkedin.com/in/vedantdeore/',
    github: 'https://github.com/vedantdeore',
    twitter: 'https://twitter.com/vedantdeore'
  },
  {
    name: 'Samyak Raka',
    role: 'Frontend Developer',
    bio: 'Specialized in creating beautiful and responsive user interfaces with modern frameworks.',
    image: 'https://media.licdn.com/dms/image/v2/D4D03AQHJsyE8fvU0Hw/profile-displayphoto-shrink_400_400/B4DZPlNV.0HwAk-/0/1734717301809?e=1741824000&v=beta&t=WEEBeg_tUflEsk-Cf72o1P40fR_YD4nXy00BmPBUKfY',
    linkedin: 'https://www.linkedin.com/in/samyakraka/',
    github: 'https://github.com/samyakraka',
    twitter: 'https://twitter.com/samyakraka'
  },
  {
    name: 'Satyajit Shinde',
    role: 'Backend Developer',
    bio: 'Expert in building robust backend systems and optimizing database performance.',
    image: 'https://media.licdn.com/dms/image/v2/D4D03AQG6n-D5lYR51g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1728193694925?e=1741824000&v=beta&t=z2AtackyN-r0XtLrWx_dhSAuOE6H51kGC14q5vnakjw',
    linkedin: 'https://www.linkedin.com/in/satyajitshinde',
    github: 'https://github.com/satyajitshinde',
    twitter: 'https://twitter.com/satyajitshinde'
  },
  {
    name: 'Ritesh Borse',
    role: 'UI/UX Designer',
    bio: 'Creating intuitive and engaging user experiences through thoughtful design.',
    image: 'https://media.licdn.com/dms/image/v2/D4D03AQHPVOtEVdufkA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1709465192531?e=1741824000&v=beta&t=PO47lcqgQdFXhEOVgq4f6w0Qz-V704tykKOoCgPX9tQ',
    linkedin: 'https://www.linkedin.com/in/ritesh-borse-293564223',
    github: 'https://github.com/riteshborse',
    twitter: 'https://twitter.com/riteshborse'
  }
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export default function TeamSection({ showTitle = true }: { showTitle?: boolean }) {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background to-background/50">
      <div className="max-w-7xl mx-auto">
        {showTitle && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A talented group of individuals working together to revolutionize social media analytics
            </p>
          </motion.div>
        )}

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.name}
              variants={item}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-2xl bg-secondary/50 backdrop-blur-sm p-6 transition-all duration-300 hover:shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/5 to-background/50" />
                
                <div className="relative">
                  <div className="aspect-square mb-4 overflow-hidden rounded-xl">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={400}
                      height={400}
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>

                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-sm text-primary mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>

                  <div className="flex space-x-3">
                    <Link
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Linkedin className="h-5 w-5" />
                    </Link>
                    <Link
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github className="h-5 w-5" />
                    </Link>
                    <Link
                      href={member.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Twitter className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

