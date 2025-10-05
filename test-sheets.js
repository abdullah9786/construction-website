// Simple test script to verify Google Sheets connection
// Run with: node test-sheets.js

require('dotenv').config({ path: '.env.local' });

async function testConnection() {
  console.log('🔍 Testing Google Sheets Connection...\n');

  // Check environment variables
  console.log('📋 Checking Environment Variables:');
  const sheetId = process.env.GOOGLE_SHEET_ID;
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const key = process.env.GOOGLE_PRIVATE_KEY;

  if (!sheetId) {
    console.log('❌ GOOGLE_SHEET_ID is missing');
  } else {
    console.log('✅ GOOGLE_SHEET_ID is set:', sheetId);
  }

  if (!email) {
    console.log('❌ GOOGLE_SERVICE_ACCOUNT_EMAIL is missing');
  } else {
    console.log('✅ GOOGLE_SERVICE_ACCOUNT_EMAIL is set:', email);
  }

  if (!key) {
    console.log('❌ GOOGLE_PRIVATE_KEY is missing');
  } else {
    console.log('✅ GOOGLE_PRIVATE_KEY is set (length:', key.length, 'chars)');
  }

  if (!sheetId || !email || !key) {
    console.log('\n❌ Setup incomplete! Please check your .env.local file');
    console.log('See QUICK_START.md for instructions');
    return;
  }

  console.log('\n🔌 Attempting to connect to Google Sheets...');

  try {
    const { google } = require('googleapis');

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: email,
        private_key: key.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    // Try to read the sheet
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: sheetId,
      range: 'Sheet1!A1:H1',
    });

    console.log('✅ Successfully connected to Google Sheets!');
    console.log('📊 Sheet headers:', response.data.values?.[0]);
    
    // Try to append test data
    console.log('\n📝 Testing write access...');
    const testData = [
      [
        new Date().toLocaleString('en-IN'),
        'Test Name',
        'test@example.com',
        '+91 9999999999',
        'Test Subject',
        'Test Message',
        'Test Interest',
        'email'
      ]
    ];

    const appendResponse = await sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range: 'Sheet1!A:H',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: testData,
      },
    });

    console.log('✅ Successfully wrote test data to sheet!');
    console.log('Updated range:', appendResponse.data.updates.updatedRange);
    console.log('\n🎉 All tests passed! Your Google Sheets integration is working!');
    console.log('👉 Check your Google Sheet to see the test entry');
    
  } catch (error) {
    console.log('\n❌ Connection failed!');
    console.log('Error:', error.message);
    
    if (error.message.includes('invalid_grant')) {
      console.log('\n💡 Tip: Check that your GOOGLE_PRIVATE_KEY is correctly formatted');
      console.log('   Make sure it includes \\n characters and quotes');
    } else if (error.message.includes('insufficient authentication')) {
      console.log('\n💡 Tip: Make sure you shared the sheet with:', email);
      console.log('   And gave it Editor permission');
    } else if (error.message.includes('Unable to parse')) {
      console.log('\n💡 Tip: Check that your GOOGLE_SHEET_ID is correct');
    }
  }
}

// Check if googleapis is installed
try {
  require('googleapis');
  testConnection();
} catch (error) {
  console.log('❌ googleapis package not found!');
  console.log('👉 Run: npm install googleapis');
}
