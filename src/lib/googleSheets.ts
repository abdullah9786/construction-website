import { google } from 'googleapis'

// Initialize Google Sheets API
export async function getGoogleSheetsClient() {
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    })

    const sheets = google.sheets({ version: 'v4', auth })
    return sheets
  } catch (error) {
    console.error('Error initializing Google Sheets client:', error)
    throw error
  }
}

// Append data to Google Sheet
export async function appendToSheet(data: {
  name: string
  email: string
  phone: string
  subject?: string
  message?: string
  interestedIn?: string
}) {
  try {
    const sheets = await getGoogleSheetsClient()
    const spreadsheetId = process.env.GOOGLE_SHEET_ID

    if (!spreadsheetId) {
      throw new Error('GOOGLE_SHEET_ID is not defined in environment variables')
    }

    const timestamp = new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    })

    const values = [
      [
        timestamp,
        data.name,
        data.email,
        data.phone,
        data.subject || 'N/A',
        data.message || 'N/A',
        data.interestedIn || 'N/A',
      ],
    ]

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'Sheet1!A:G', // Updated: 7 columns (removed Preferred Contact)
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values,
      },
    })

    console.log('Data appended to Google Sheet:', response.data)
    return { success: true, data: response.data }
  } catch (error) {
    console.error('Error appending to Google Sheet:', error)
    throw error
  }
}

// Optional: Get all submissions
export async function getSubmissions() {
  try {
    const sheets = await getGoogleSheetsClient()
    const spreadsheetId = process.env.GOOGLE_SHEET_ID

    if (!spreadsheetId) {
      throw new Error('GOOGLE_SHEET_ID is not defined')
    }

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: 'Sheet1!A:G',
    })

    return response.data.values || []
  } catch (error) {
    console.error('Error getting submissions:', error)
    throw error
  }
}
