'use client'

import { useState } from 'react'
import Link from 'next/link'
import { AlertCircle, CheckCircle } from 'lucide-react'

interface ApplicationFormProps {
  university: 'amity' | 'manipal'
  universityName: string
  primaryColor: string
}

export default function ApplicationForm({ university, universityName, primaryColor }: ApplicationFormProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    gender: '',
    nationality: '',
    address: '',
    city: '',
    state: '',
    postalCode: '',
    course: '',
    intakeYear: '',
    qualification: '',
    percentageScore: '',
    interestedSpecialization: '',
    workExperience: '',
    referralSource: '',
    consent: false,
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const courses = university === 'amity'
    ? ['Bachelor of Engineering', 'Master of Business Administration', 'Bachelor of Science', 'Master of Science']
    : ['Bachelor of Technology', 'Master of Technology', 'Doctor of Philosophy', 'Bachelor of Commerce']

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email format'
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required'
    if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) newErrors.phone = 'Phone must be 10 digits'
    if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Date of birth is required'
    if (!formData.gender) newErrors.gender = 'Gender is required'
    if (!formData.nationality) newErrors.nationality = 'Nationality is required'
    if (!formData.address.trim()) newErrors.address = 'Address is required'
    if (!formData.city.trim()) newErrors.city = 'City is required'
    if (!formData.state.trim()) newErrors.state = 'State is required'
    if (!formData.postalCode.trim()) newErrors.postalCode = 'Postal code is required'
    if (!formData.course) newErrors.course = 'Course selection is required'
    if (!formData.intakeYear) newErrors.intakeYear = 'Intake year is required'
    if (!formData.qualification) newErrors.qualification = 'Educational qualification is required'
    if (!formData.percentageScore.trim()) newErrors.percentageScore = 'Percentage score is required'
    if (!formData.consent) newErrors.consent = 'You must accept terms and conditions'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        [name]: (e.target as HTMLInputElement).checked
      }))
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return

    setIsSubmitting(true)
    try {
      const response = await fetch('/api/submit-application', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          university,
        }),
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          dateOfBirth: '',
          gender: '',
          nationality: '',
          address: '',
          city: '',
          state: '',
          postalCode: '',
          course: '',
          intakeYear: '',
          qualification: '',
          percentageScore: '',
          interestedSpecialization: '',
          workExperience: '',
          referralSource: '',
          consent: false,
        })
      }
    } catch (error) {
      console.error('Submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <div className="bg-card border border-border rounded-lg shadow-lg p-8 max-w-md w-full text-center">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">Application Submitted Successfully!</h2>
          <p className="text-muted-foreground mb-6">
            Thank you for applying to {universityName}. We have received your application and will be in touch within 5-7 business days.
          </p>
          <Link href={university === 'amity' ? '/amity' : '/manipal'} className="inline-block bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:opacity-90 transition">
            Back to University Page
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary text-primary-foreground py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href={university === 'amity' ? '/amity' : '/manipal'} className="text-primary-foreground/80 hover:text-primary-foreground mb-4 inline-block">
            ← Back
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold">{universityName} Application Form</h1>
          <p className="text-primary-foreground/80 mt-2">Complete this form to apply for admission</p>
        </div>
      </div>

      {/* Form */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Personal Information Section */}
          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-6">Personal Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary ${errors.fullName ? 'border-red-500' : 'border-border'}`}
                  placeholder="John Doe"
                />
                {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary ${errors.email ? 'border-red-500' : 'border-border'}`}
                  placeholder="john@example.com"
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary ${errors.phone ? 'border-red-500' : 'border-border'}`}
                  placeholder="1234567890"
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Date of Birth</label>
                <input
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary ${errors.dateOfBirth ? 'border-red-500' : 'border-border'}`}
                />
                {errors.dateOfBirth && <p className="text-red-500 text-xs mt-1">{errors.dateOfBirth}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Gender</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary ${errors.gender ? 'border-red-500' : 'border-border'}`}
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                {errors.gender && <p className="text-red-500 text-xs mt-1">{errors.gender}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Nationality</label>
                <input
                  type="text"
                  name="nationality"
                  value={formData.nationality}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary ${errors.nationality ? 'border-red-500' : 'border-border'}`}
                  placeholder="Indian"
                />
                {errors.nationality && <p className="text-red-500 text-xs mt-1">{errors.nationality}</p>}
              </div>
            </div>
          </div>

          {/* Address Information Section */}
          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-6">Address Information</h2>
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Address</label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary ${errors.address ? 'border-red-500' : 'border-border'}`}
                  placeholder="Street address"
                  rows={2}
                />
                {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">City</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary ${errors.city ? 'border-red-500' : 'border-border'}`}
                  />
                  {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">State</label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary ${errors.state ? 'border-red-500' : 'border-border'}`}
                  />
                  {errors.state && <p className="text-red-500 text-xs mt-1">{errors.state}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Postal Code</label>
                  <input
                    type="text"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary ${errors.postalCode ? 'border-red-500' : 'border-border'}`}
                  />
                  {errors.postalCode && <p className="text-red-500 text-xs mt-1">{errors.postalCode}</p>}
                </div>
              </div>
            </div>
          </div>

          {/* Academic Information Section */}
          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-6">Academic Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Desired Course</label>
                <select
                  name="course"
                  value={formData.course}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary ${errors.course ? 'border-red-500' : 'border-border'}`}
                >
                  <option value="">Select a Course</option>
                  {courses.map((course) => (
                    <option key={course} value={course}>{course}</option>
                  ))}
                </select>
                {errors.course && <p className="text-red-500 text-xs mt-1">{errors.course}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Intake Year</label>
                <select
                  name="intakeYear"
                  value={formData.intakeYear}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary ${errors.intakeYear ? 'border-red-500' : 'border-border'}`}
                >
                  <option value="">Select Year</option>
                  <option value="2025">2025</option>
                  <option value="2026">2026</option>
                  <option value="2027">2027</option>
                </select>
                {errors.intakeYear && <p className="text-red-500 text-xs mt-1">{errors.intakeYear}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Previous Qualification</label>
                <input
                  type="text"
                  name="qualification"
                  value={formData.qualification}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary ${errors.qualification ? 'border-red-500' : 'border-border'}`}
                  placeholder="e.g., Class XII, B.Tech"
                />
                {errors.qualification && <p className="text-red-500 text-xs mt-1">{errors.qualification}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Percentage Score</label>
                <input
                  type="text"
                  name="percentageScore"
                  value={formData.percentageScore}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary ${errors.percentageScore ? 'border-red-500' : 'border-border'}`}
                  placeholder="e.g., 85.5"
                />
                {errors.percentageScore && <p className="text-red-500 text-xs mt-1">{errors.percentageScore}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Interested Specialization (Optional)</label>
                <input
                  type="text"
                  name="interestedSpecialization"
                  value={formData.interestedSpecialization}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="e.g., Data Science, Finance"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Work Experience (Optional)</label>
                <input
                  type="text"
                  name="workExperience"
                  value={formData.workExperience}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="e.g., 2 years in IT"
                />
              </div>
            </div>
          </div>

          {/* Additional Information Section */}
          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-6">Additional Information</h2>
            <div>
              <label className="block text-sm font-medium mb-2">How did you hear about us? (Optional)</label>
              <select
                name="referralSource"
                value={formData.referralSource}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">Select a source</option>
                <option value="friend">Friend/Family</option>
                <option value="website">Website</option>
                <option value="social-media">Social Media</option>
                <option value="college-fair">College Fair</option>
                <option value="search-engine">Search Engine</option>
                <option value="advertisement">Advertisement</option>
              </select>
            </div>
          </div>

          {/* Terms and Conditions */}
          <div className="bg-card border border-border rounded-lg p-6">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleInputChange}
                className="mt-1 w-4 h-4 accent-primary"
              />
              <span className="text-sm">
                I confirm that the information provided is accurate and I agree to the terms and conditions and privacy policy of {universityName}. I understand that any false information may result in rejection of my application.
              </span>
            </label>
            {errors.consent && <p className="text-red-500 text-xs mt-2">{errors.consent}</p>}
          </div>

          {/* Submit Button */}
          <div className="flex gap-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition disabled:opacity-50"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </button>
            <Link href={university === 'amity' ? '/amity' : '/manipal'} className="px-8 py-3 border border-border rounded-lg font-semibold hover:bg-muted/50 transition">
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}
