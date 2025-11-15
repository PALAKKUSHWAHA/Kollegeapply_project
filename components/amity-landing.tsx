'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, ArrowRight, CheckCircle2 } from 'lucide-react'

interface AmityLandingProps {
  onViewFees: (course: string) => void
}

export default function AmityLanding({ onViewFees }: AmityLandingProps) {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const features = [
    { title: 'World-Class Faculty', description: 'Learn from industry experts with 20+ years of experience' },
    { title: 'Global Campus', description: 'Study in 25+ countries with international recognition' },
    { title: 'Career Support', description: '95% placement rate within 6 months of graduation' },
    { title: 'Modern Infrastructure', description: 'State-of-the-art facilities and cutting-edge technology' },
  ]

  const courses = [
    { name: 'Bachelor of Engineering', code: 'BE', duration: '4 Years' },
    { name: 'Master of Business Administration', code: 'MBA', duration: '2 Years' },
    { name: 'Bachelor of Science', code: 'BSc', duration: '3 Years' },
    { name: 'Master of Science', code: 'MSc', duration: '2 Years' },
  ]

  const faqs = [
    { q: 'What is the admission process?', a: 'Our admission process includes application review, entrance exam, and personal interview.' },
    { q: 'Do you offer scholarships?', a: 'Yes, we offer merit-based and need-based scholarships up to 100% tuition fee.' },
    { q: 'What is the placement rate?', a: 'We have a 95% placement rate with average salary package of $50,000 per year.' },
    { q: 'Are there online programs?', a: 'Yes, we offer hybrid and fully online programs for select courses.' },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-primary">Amity University</div>
          <div className="hidden md:flex gap-8">
            <Link href="#programs" className="text-muted-foreground hover:text-foreground transition">Programs</Link>
            <Link href="#admissions" className="text-muted-foreground hover:text-foreground transition">Admissions</Link>
            <Link href="#faq" className="text-muted-foreground hover:text-foreground transition">FAQ</Link>
          </div>
          <Link href="/amity/apply" className="btn-primary text-sm">Get Started</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-balance leading-tight mb-6">
              Your Gateway to Global Excellence
            </h1>
            <p className="text-xl text-muted-foreground text-balance mb-8 max-w-2xl mx-auto">
              Join thousands of students pursuing their dreams at Amity University. World-class education, exceptional placement rate, and limitless opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/amity/apply" className="btn-primary">Apply Now</Link>
              <Link href="#admissions" className="btn-secondary">Learn More</Link>
            </div>
          </div>

          {/* Hero Stats */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card rounded-lg p-6 border border-border text-center">
              <div className="text-4xl font-bold text-primary mb-2">25+</div>
              <div className="text-muted-foreground">Global Campus Locations</div>
            </div>
            <div className="bg-card rounded-lg p-6 border border-border text-center">
              <div className="text-4xl font-bold text-primary mb-2">95%</div>
              <div className="text-muted-foreground">Placement Rate</div>
            </div>
            <div className="bg-card rounded-lg p-6 border border-border text-center">
              <div className="text-4xl font-bold text-primary mb-2">50K+</div>
              <div className="text-muted-foreground">Alumni Network</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-balance">Why Choose Amity?</h2>
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
          <h2 className="text-4xl font-bold text-center mb-16 text-balance">Our Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {courses.map((course, i) => (
              <div key={i} className="bg-card rounded-lg border border-border p-8 hover:shadow-lg transition">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-1">{course.name}</h3>
                    <p className="text-sm text-muted-foreground">{course.duration}</p>
                  </div>
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">{course.code}</span>
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
      <section id="admissions" className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-balance">Ready to Transform Your Future?</h2>
          <p className="text-lg mb-8 text-primary-foreground/80">
            Apply today and join our community of scholars, innovators, and leaders shaping the world.
          </p>
          <Link href="/amity/apply" className="bg-primary-foreground text-primary px-8 py-4 rounded-full font-semibold hover:opacity-90 transition">
            Start Your Application
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Frequently Asked Questions</h2>
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
      <footer className="bg-primary text-primary-foreground py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">Amity University</h3>
            <p className="text-sm text-primary-foreground/80">Transforming lives through quality education.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-primary-foreground/80">About Us</Link></li>
              <li><Link href="#" className="hover:text-primary-foreground/80">Contact</Link></li>
              <li><Link href="#" className="hover:text-primary-foreground/80">Careers</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Academics</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-primary-foreground/80">Programs</Link></li>
              <li><Link href="#" className="hover:text-primary-foreground/80">Faculty</Link></li>
              <li><Link href="#" className="hover:text-primary-foreground/80">Admissions</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-primary-foreground/80">Privacy</Link></li>
              <li><Link href="#" className="hover:text-primary-foreground/80">Terms</Link></li>
              <li><Link href="#" className="hover:text-primary-foreground/80">Cookies</Link></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm">
          <p>&copy; 2025 Amity University. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
