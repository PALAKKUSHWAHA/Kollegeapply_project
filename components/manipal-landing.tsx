'use client'

import { useState } from 'react'
import { ChevronDown, ArrowRight, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'

interface ManipалLandingProps {
  onViewFees: (course: string) => void
}

export default function ManipалLanding({ onViewFees }: ManipалLandingProps) {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const features = [
    { title: 'NAAC Accredited', description: 'A++ rated institution with international recognition' },
    { title: 'Industry Partnerships', description: 'Collaborations with Fortune 500 companies for internships' },
    { title: 'Research Excellence', description: 'Publication in top-tier journals and active research centers' },
    { title: 'Global Network', description: 'Presence in 14 countries with over 225,000 alumni worldwide' },
  ]

  const courses = [
    { name: 'Bachelor of Technology', code: 'B.Tech', duration: '4 Years' },
    { name: 'Master of Technology', code: 'M.Tech', duration: '2 Years' },
    { name: 'Doctor of Philosophy', code: 'PhD', duration: '3-5 Years' },
    { name: 'Bachelor of Commerce', code: 'B.Com', duration: '3 Years' },
  ]

  const faqs = [
    { q: 'What is the cut-off score for admission?', a: 'Cut-off scores vary by program. Engineering typically requires 85%+, while management programs require strong GMAT/CAT scores.' },
    { q: 'Does Manipal offer financial aid?', a: 'Yes, we provide merit scholarships, need-based aid, and education loans through partner institutions.' },
    { q: 'What is the average salary after graduation?', a: 'Our graduates earn an average of $45,000-60,000 per year, with top performers reaching $100,000+.' },
    { q: 'Can international students apply?', a: 'We have students from 50+ countries. International applicants require valid English scores (TOEFL/IELTS).' },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-accent">Manipal University</div>
          <div className="hidden md:flex gap-8">
            <a href="#programs" className="text-muted-foreground hover:text-foreground transition">Programs</a>
            <a href="#admissions" className="text-muted-foreground hover:text-foreground transition">Admissions</a>
            <a href="#faq" className="text-muted-foreground hover:text-foreground transition">FAQ</a>
          </div>
          <button className="px-6 py-3 rounded-full bg-accent text-accent-foreground font-medium hover:opacity-90 transition">Get Started</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-accent/5 to-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-balance leading-tight mb-6">
              Excellence in Education, Innovation in Learning
            </h1>
            <p className="text-xl text-muted-foreground text-balance mb-8 max-w-2xl mx-auto">
              Join Manipal's legacy of academic excellence. World-renowned faculty, state-of-the-art research facilities, and a global community of achievers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/manipal/apply" className="px-6 py-3 rounded-full bg-accent text-accent-foreground font-medium hover:opacity-90 transition">Apply Now</Link>
              <button className="px-6 py-3 rounded-full border border-accent text-accent font-medium hover:bg-accent hover:text-accent-foreground transition">Learn More</button>
            </div>
          </div>

          {/* Hero Stats */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card rounded-lg p-6 border border-border text-center">
              <div className="text-4xl font-bold text-accent mb-2">14</div>
              <div className="text-muted-foreground">Campuses Globally</div>
            </div>
            <div className="bg-card rounded-lg p-6 border border-border text-center">
              <div className="text-4xl font-bold text-accent mb-2">92%</div>
              <div className="text-muted-foreground">Average Placement Rate</div>
            </div>
            <div className="bg-card rounded-lg p-6 border border-border text-center">
              <div className="text-4xl font-bold text-accent mb-2">225K+</div>
              <div className="text-muted-foreground">Global Alumni Network</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-balance">Why Manipal?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <div key={i} className="bg-background rounded-lg p-6 border border-border hover:border-accent transition">
                <CheckCircle2 className="w-8 h-8 text-accent mb-4" />
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section id="programs" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-balance">Explore Our Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {courses.map((course, i) => (
              <div key={i} className="bg-card rounded-lg border border-border p-8 hover:shadow-lg transition">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-1">{course.name}</h3>
                    <p className="text-sm text-muted-foreground">{course.duration}</p>
                  </div>
                  <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">{course.code}</span>
                </div>
                <button 
                  onClick={() => onViewFees(course.name)}
                  className="flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all"
                >
                  View Fees <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="admissions" className="py-20 px-4 sm:px-6 lg:px-8 bg-accent text-accent-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-balance">Join Our Community of Leaders</h2>
          <p className="text-lg mb-8 text-accent-foreground/80">
            Become part of a global network driving innovation, research, and positive change in the world.
          </p>
          <Link href="/manipal/apply" className="bg-accent-foreground text-accent px-8 py-4 rounded-full font-semibold hover:opacity-90 transition">
            Begin Application
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Common Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-background rounded-lg border border-border overflow-hidden">
                <button
                  onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-muted/50 transition"
                >
                  <span className="font-semibold text-left">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 transition-transform ${openFAQ === i ? 'rotate-180' : ''}`} />
                </button>
                {openFAQ === i && (
                  <div className="px-6 py-4 bg-muted/20 border-t border-border">
                    <p className="text-muted-foreground">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-accent text-accent-foreground py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">Manipal University</h3>
            <p className="text-sm text-accent-foreground/80">Empowering minds, transforming futures.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-accent-foreground/80">About Us</a></li>
              <li><a href="#" className="hover:text-accent-foreground/80">Contact</a></li>
              <li><a href="#" className="hover:text-accent-foreground/80">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Programs</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-accent-foreground/80">Engineering</a></li>
              <li><a href="#" className="hover:text-accent-foreground/80">Management</a></li>
              <li><a href="#" className="hover:text-accent-foreground/80">Research</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-accent-foreground/80">Privacy</a></li>
              <li><a href="#" className="hover:text-accent-foreground/80">Terms</a></li>
              <li><a href="#" className="hover:text-accent-foreground/80">Cookies</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-accent-foreground/20 mt-8 pt-8 text-center text-sm">
          <p>&copy; 2025 Manipal University. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
