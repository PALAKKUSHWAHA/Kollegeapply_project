'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section with Background Image */}
      <div
        className="relative h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{
          backgroundImage: 'url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-pixabay-256490-PwgpO1NQjoxcrmWbZuTFI8CSCzPEsj.jpg)',
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content Overlay */}
        <div className="relative z-10 text-center px-4">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 text-balance drop-shadow-lg">
            KOLLEGEAPPLY
          </h1>
          <p className="text-xl md:text-2xl text-white/90 drop-shadow-md text-balance">
            Your Path to Excellence in Higher Education
          </p>
        </div>
      </div>

      {/* University Selection Section */}
      <div className="bg-background py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
              Choose Your Path
            </h2>
            <p className="text-lg text-muted-foreground text-balance">
              Select your preferred university to explore programs, fees, and begin your application journey.
            </p>
          </div>

          {/* University Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Amity Card */}
            <Link href="/amity">
              <div className="group h-full bg-card rounded-2xl border border-border p-8 hover:border-primary hover:shadow-lg transition-all cursor-pointer">
                <div className="mb-6">
                  <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold mb-4">
                    Amity University
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Global Excellence</h3>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold mt-0.5">✓</span>
                    <span className="text-muted-foreground">25+ Global Campus Locations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold mt-0.5">✓</span>
                    <span className="text-muted-foreground">95% Placement Rate</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold mt-0.5">✓</span>
                    <span className="text-muted-foreground">50K+ Alumni Network</span>
                  </li>
                </ul>
                <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                  Explore <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>

            {/* Manipal Card */}
            <Link href="/manipal">
              <div className="group h-full bg-card rounded-2xl border border-border p-8 hover:border-accent hover:shadow-lg transition-all cursor-pointer">
                <div className="mb-6">
                  <div className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent font-semibold mb-4">
                    Manipal University
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Research Excellence</h3>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-bold mt-0.5">✓</span>
                    <span className="text-muted-foreground">14 Campuses Globally</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-bold mt-0.5">✓</span>
                    <span className="text-muted-foreground">92% Average Placement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-bold mt-0.5">✓</span>
                    <span className="text-muted-foreground">225K+ Alumni Worldwide</span>
                  </li>
                </ul>
                <div className="flex items-center gap-2 text-accent font-semibold group-hover:gap-3 transition-all">
                  Explore <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-muted/30 rounded-lg p-6 border border-border">
              <h4 className="font-semibold mb-2">Simple Application</h4>
              <p className="text-sm text-muted-foreground">Quick 5-minute form with instant feedback</p>
            </div>
            <div className="bg-muted/30 rounded-lg p-6 border border-border">
              <h4 className="font-semibold mb-2">Transparent Pricing</h4>
              <p className="text-sm text-muted-foreground">Clear fee structures with multiple payment options</p>
            </div>
            <div className="bg-muted/30 rounded-lg p-6 border border-border">
              <h4 className="font-semibold mb-2">Expert Support</h4>
              <p className="text-sm text-muted-foreground">Dedicated advisors to guide your journey</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-muted/30 border-t border-border px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-7xl mx-auto text-center text-sm text-muted-foreground">
          <p>&copy; 2025 KOLLEGEAPPLY. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
