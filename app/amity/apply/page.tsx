import ApplicationForm from '@/components/application-form'

export const metadata = {
  title: 'Apply Now - Amity University',
  description: 'Submit your application to Amity University'
}

export default function AmityApplyPage() {
  return <ApplicationForm university="amity" universityName="Amity University" primaryColor="primary" />
}
