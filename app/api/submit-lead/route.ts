export async function POST(request: Request) {
  try {
    const data = await request.json()

    // In production, this would call Pipedream webhook
    // For now, we'll just validate and return success
    console.log('Lead captured:', data)

    return Response.json({ success: true, message: 'Lead submitted successfully' })
  } catch (error) {
    return Response.json(
      { error: 'Failed to process request' },
      { status: 400 }
    )
  }
}
