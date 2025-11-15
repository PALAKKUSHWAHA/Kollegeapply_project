import ApplicationForm from '@/components/application-form'

export const metadata = {
  title: 'Apply Now - Manipal University',
  description: 'Submit your application to Manipal University'
}

export default function ManipалApplyPage() {
  return <ApplicationForm university="manipal" universityName="Manipal University" primaryColor="accent" />
}
