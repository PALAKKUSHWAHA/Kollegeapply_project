export async function GET() {
  const fees = [
    {
      course: 'Bachelor of Engineering',
      code: 'BE',
      fee_per_year: 4500,
      duration: 4,
      total_fee: 18000,
      breakdown: {
        tuition: 3500,
        facilities: 600,
        technology: 400,
      }
    },
    {
      course: 'Master of Business Administration',
      code: 'MBA',
      fee_per_year: 6000,
      duration: 2,
      total_fee: 12000,
      breakdown: {
        tuition: 4800,
        facilities: 800,
        technology: 400,
      }
    },
    {
      course: 'Bachelor of Science',
      code: 'BSc',
      fee_per_year: 3500,
      duration: 3,
      total_fee: 10500,
      breakdown: {
        tuition: 2800,
        facilities: 500,
        technology: 200,
      }
    },
    {
      course: 'Master of Science',
      code: 'MSc',
      fee_per_year: 5000,
      duration: 2,
      total_fee: 10000,
      breakdown: {
        tuition: 4000,
        facilities: 700,
        technology: 300,
      }
    },
    {
      course: 'Bachelor of Technology',
      code: 'B.Tech',
      fee_per_year: 4800,
      duration: 4,
      total_fee: 19200,
      breakdown: {
        tuition: 3800,
        facilities: 700,
        technology: 300,
      }
    },
    {
      course: 'Master of Technology',
      code: 'M.Tech',
      fee_per_year: 5500,
      duration: 2,
      total_fee: 11000,
      breakdown: {
        tuition: 4200,
        facilities: 900,
        technology: 400,
      }
    },
    {
      course: 'Doctor of Philosophy',
      code: 'PhD',
      fee_per_year: 3000,
      duration: 4,
      total_fee: 12000,
      breakdown: {
        tuition: 2000,
        facilities: 600,
        technology: 400,
      }
    },
    {
      course: 'Bachelor of Commerce',
      code: 'B.Com',
      fee_per_year: 3000,
      duration: 3,
      total_fee: 9000,
      breakdown: {
        tuition: 2200,
        facilities: 500,
        technology: 300,
      }
    },
  ]

  return Response.json(fees)
}
