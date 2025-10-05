# Google Sheets Integration Setup Guide

## Step 1: Create Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Click "Select a Project" → "New Project"
3. Name it "Fortune Square Website" and click "Create"

## Step 2: Enable Google Sheets API

1. In your project, go to "APIs & Services" → "Library"
2. Search for "Google Sheets API"
3. Click on it and press "Enable"

## Step 3: Create Service Account

1. Go to "APIs & Services" → "Credentials"
2. Click "Create Credentials" → "Service Account"
3. Fill in details:
   - **Service account name**: fortune-square-form
   - **Service account ID**: (auto-generated)
   - Click "Create and Continue"
4. Skip optional steps, click "Done"

## Step 4: Create Service Account Key

1. Click on the service account you just created
2. Go to "Keys" tab
3. Click "Add Key" → "Create new key"
4. Choose "JSON" format
5. Click "Create" - a JSON file will download

## Step 5: Save Credentials

1. Rename the downloaded file to `google-credentials.json`
2. Move it to your project root folder: `/Users/ansari.a/React/construction-website/`
3. **IMPORTANT**: Add to `.gitignore` to keep it private

## Step 6: Create Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "Fortune Square - Contact Form Submissions"
4. Add these column headers in row 1:
   - A1: Timestamp
   - B1: Name
   - C1: Email
   - D1: Phone
   - E1: Subject
   - F1: Message
   - G1: Interested In

## Step 7: Share Sheet with Service Account

1. Open the JSON credentials file
2. Copy the `client_email` value (looks like: xxxxx@xxxxx.iam.gserviceaccount.com)
3. In Google Sheets, click "Share"
4. Paste the service account email
5. Give it "Editor" permission
6. Uncheck "Notify people"
7. Click "Share"

## Step 8: Get Sheet ID

From your Google Sheet URL:
```
https://docs.google.com/spreadsheets/d/SHEET_ID_HERE/edit
```
Copy the SHEET_ID_HERE part

## Step 9: Update Environment Variables

Create `.env.local` file in project root with:

```env
GOOGLE_SHEET_ID=your_sheet_id_here
GOOGLE_SERVICE_ACCOUNT_EMAIL=your_service_account_email_here
GOOGLE_PRIVATE_KEY=your_private_key_here
```

To get these values from your `google-credentials.json`:
- `GOOGLE_SHEET_ID`: From Step 8
- `GOOGLE_SERVICE_ACCOUNT_EMAIL`: The `client_email` field
- `GOOGLE_PRIVATE_KEY`: The `private_key` field (keep the \n characters)

## Step 10: Test Integration

1. Run `npm run dev`
2. Go to Contact page
3. Submit a form
4. Check your Google Sheet for the new entry

## Troubleshooting

### Error: "Request had insufficient authentication scopes"
- Make sure you shared the sheet with the service account email
- Give it "Editor" permission

### Error: "Unable to parse range"
- Check that GOOGLE_SHEET_ID is correct
- Make sure sheet name is "Sheet1" or update the code

### Error: "invalid_grant"
- Check that GOOGLE_PRIVATE_KEY is correctly formatted
- Make sure it includes the full key with `-----BEGIN PRIVATE KEY-----` and `-----END PRIVATE KEY-----`

## Security Notes

1. **Never commit** `google-credentials.json` to git
2. **Never commit** `.env.local` to git
3. Add both to `.gitignore`
4. For production, use environment variables in your hosting platform (Vercel, Netlify, etc.)
