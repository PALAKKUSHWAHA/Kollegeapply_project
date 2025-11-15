'use client'

import { useState } from 'react'
import Link from 'next/link'
import ManipалLanding from '@/components/manipal-landing'
import LeadCaptureForm from '@/components/lead-capture-form'
import FeeModal from '@/components/fee-modal'

export default function ManipалPage() {
  const [showFeeModal, setShowFeeModal] = useState(false)
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null)

  return (
    <>
      <div className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition">
            ← Back to Home
          </Link>
        </div>
      </div>
      <ManipалLanding onViewFees={(course) => {
        setSelectedCourse(course)
        setShowFeeModal(true)
      }} />
      <LeadCaptureForm />
      {showFeeModal && <FeeModal course={selectedCourse} onClose={() => setShowFeeModal(false)} />}
    </>
  )
}
