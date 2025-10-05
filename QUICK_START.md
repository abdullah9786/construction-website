# Quick Start Guide - Google Sheets Integration

## Prerequisites
✅ You already have the code files created
✅ Now follow these steps to get it working

## Quick Setup (5 minutes)

### 1. Install Package
```bash
npm install googleapis
```

### 2. Create Google Sheet

1. Go to https://sheets.google.com
2. Create new spreadsheet named: **Fortune Square - Contact Forms**
3. In row 1, add these headers:
   - **A1**: Timestamp
   - **B1**: Name  
   - **C1**: Email
   - **D1**: Phone
   - **E1**: Subject
   - **F1**: Message
   - **G1**: Interested In
   - **H1**: Preferred Contact

### 3. Set Up Service Account (Google Cloud)

1. Go to https://console.cloud.google.com/
2. Create new project: "Fortune Square Website"
3. Enable **Google Sheets API**:
   - APIs & Services → Library → Search "Google Sheets API" → Enable
4. Create Service Account:
   - APIs & Services → Credentials → Create Credentials → Service Account
   - Name: "fortune-square-form"
   - Click Create → Done
5. Create Key:
   - Click on service account
   - Keys tab → Add Key → Create new key → JSON
   - **Download the JSON file**

### 4. Save Credentials

1. Rename downloaded file to: `google-credentials.json`
2. Place it in project root: `/Users/ansari.a/React/construction-website/`
3. It's already in `.gitignore` (safe from git)

### 5. Share Sheet with Service Account

1. Open your `google-credentials.json` file
2. Copy the `client_email` value (looks like: xxxxx@xxxxx.iam.gserviceaccount.com)
3. Go back to your Google Sheet
4. Click **Share** button
5. Paste the service account email
6. Give **Editor** permission
7. **Uncheck** "Notify people"
8. Click **Share**

### 6. Create Environment File

1. Copy the template file:
```bash
cp env.template .env.local
```

2. Open `.env.local` and fill in these values:

**GOOGLE_SHEET_ID**: 
- From your sheet URL: `docs.google.com/spreadsheets/d/YOUR_SHEET_ID/edit`
- Copy the `YOUR_SHEET_ID` part

**GOOGLE_SERVICE_ACCOUNT_EMAIL**:
- Open `google-credentials.json`
- Copy the `client_email` value

**GOOGLE_PRIVATE_KEY**:
- Open `google-credentials.json`
- Copy the entire `private_key` value (including -----BEGIN PRIVATE KEY----- and -----END PRIVATE KEY-----)

Example `.env.local`:
```env
GOOGLE_SHEET_ID=1a2b3c4d5e6f7g8h9i0j
GOOGLE_SERVICE_ACCOUNT_EMAIL=fortune-square-form@project-123456.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBg...[YOUR_KEY]...xyzABC==\n-----END PRIVATE KEY-----\n"
```

### 7. Test It!

1. Start your dev server:
```bash
npm run dev
```

2. Go to: http://localhost:3000/contact

3. Fill out and submit the form

4. Check your Google Sheet - new row should appear! 🎉

## Troubleshooting

### "Request had insufficient authentication scopes"
→ Make sure you shared the sheet with service account email and gave Editor permission

### "Unable to parse range"
→ Check GOOGLE_SHEET_ID is correct in `.env.local`

### "invalid_grant"
→ Check GOOGLE_PRIVATE_KEY is correctly copied (including all \n characters)

### Form submits but no data in sheet
→ Check the terminal/console for error messages
→ Verify service account email has access to the sheet

## For Production (Vercel/Netlify)

When deploying, add these environment variables in your hosting platform:
- `GOOGLE_SHEET_ID`
- `GOOGLE_SERVICE_ACCOUNT_EMAIL`
- `GOOGLE_PRIVATE_KEY`

## Files Created

✅ `/src/lib/googleSheets.ts` - Google Sheets integration logic
✅ `/src/app/api/contact/route.ts` - Updated to save to sheets
✅ `/GOOGLE_SHEETS_SETUP.md` - Detailed setup guide
✅ `/QUICK_START.md` - This file
✅ `/env.template` - Environment variables template
✅ `.gitignore` - Updated to protect credentials

## Need Help?

See detailed instructions in: `GOOGLE_SHEETS_SETUP.md`
