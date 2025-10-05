import { NextRequest, NextResponse } from 'next/server'
import { appendToSheet } from '@/lib/googleSheets'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate required fields (only name, email, phone are required)
    const requiredFields = ['name', 'email', 'phone']
    const missingFields = requiredFields.filter(field => !body[field])
    
    if (missingFields.length > 0) {
      return NextResponse.json(
        { 
          success: false, 
          error: `Missing required fields: ${missingFields.join(', ')}` 
        },
        { status: 400 }
      )
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Invalid email address' 
        },
        { status: 400 }
      )
    }

    // Log the submission
    console.log('Contact form submission:', {
      name: body.name,
      email: body.email,
      phone: body.phone,
      subject: body.subject,
      message: body.message,
      interestedIn: body.interestedIn,
      preferredContact: body.preferredContact,
      timestamp: new Date().toISOString()
    })

    // Save to Google Sheets
    try {
      await appendToSheet({
        name: body.name,
        email: body.email,
        phone: body.phone,
        subject: body.subject || '',
        message: body.message || '',
        interestedIn: body.interestedIn || '',
      })
      console.log('Successfully saved to Google Sheets')
    } catch (sheetError) {
      // Log error but don't fail the request
      console.error('Failed to save to Google Sheets:', sheetError)
      // Continue processing even if Google Sheets fails
    }

    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 1000))

    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you for your inquiry. We will get back to you within 24 hours.' 
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: 'Internal server error. Please try again later.' 
      },
      { status: 500 }
    )
  }
}
