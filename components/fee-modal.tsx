'use client'

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'

interface FeeModalProps {
  course: string | null
  onClose: () => void
}

export default function FeeModal({ course, onClose }: FeeModalProps) {
  const [fees, setFees] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Fetch fees from JSON API
    const fetchFees = async () => {
      try {
        const response = await fetch('/api/fees')
        const data = await response.json()
        const courseFee = data.find((f: any) => f.course === course)
        setFees(courseFee)
      } catch (err) {
        console.error('Failed to load fees')
      } finally {
        setLoading(false)
      }
    }

    fetchFees()
  }, [course])

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div
        className="bg-card rounded-2xl border border-border max-w-md w-full p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">{course}</h2>
          <button onClick={onClose} className="p-1 hover:bg-muted rounded-lg transition">
            <X className="w-5 h-5" />
          </button>
        </div>

        {loading ? (
          <div className="py-8 text-center text-muted-foreground">Loading fee structure...</div>
        ) : fees ? (
          <div className="space-y-4">
            <div className="bg-muted/30 rounded-lg p-4">
              <p className="text-sm text-muted-foreground mb-1">Total Fee (per year)</p>
              <p className="text-3xl font-bold text-primary">${fees.fee_per_year}</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-muted/30 rounded-lg p-4">
                <p className="text-xs text-muted-foreground mb-1">Duration</p>
                <p className="font-semibold">{fees.duration} Years</p>
              </div>
              <div className="bg-muted/30 rounded-lg p-4">
                <p className="text-xs text-muted-foreground mb-1">Total Cost</p>
                <p className="font-semibold">${fees.total_fee}</p>
              </div>
            </div>

            <div className="pt-4 border-t border-border">
              <h3 className="font-semibold mb-3">Breakdown</h3>
              <div className="space-y-2 text-sm">
                {fees.breakdown && Object.entries(fees.breakdown).map(([key, value]) => (
                  <div key={key} className="flex items-center justify-between">
                    <span className="text-muted-foreground capitalize">{key}</span>
                    <span className="font-medium">${value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-border space-y-2">
              <h3 className="font-semibold mb-3">Payment Options</h3>
              <button className="w-full px-4 py-2 rounded-lg border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition font-medium">
                Monthly Plan
              </button>
              <button className="w-full px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition font-medium">
                Full Payment
              </button>
            </div>
          </div>
        ) : (
          <div className="py-8 text-center text-muted-foreground">Fee information not available</div>
        )}
      </div>
    </div>
  )
}
