# Google Sheets Integration - Setup Checklist

Use this checklist to ensure everything is set up correctly.

## ✅ Step-by-Step Checklist

### 1. Install Dependencies
- [ ] Run `npm install googleapis`
- [ ] Verify installation: check `package.json` for `googleapis` entry

### 2. Google Cloud Console Setup
- [ ] Go to https://console.cloud.google.com/
- [ ] Create new project: "Fortune Square Website"
- [ ] Navigate to "APIs & Services" → "Library"
- [ ] Search for "Google Sheets API"
- [ ] Click "Enable"

### 3. Create Service Account
- [ ] Go to "APIs & Services" → "Credentials"
- [ ] Click "Create Credentials" → "Service Account"
- [ ] Name: `fortune-square-form`
- [ ] Click "Create" → Skip optional steps → Click "Done"

### 4. Download Credentials
- [ ] Click on the service account you created
- [ ] Go to "Keys" tab
- [ ] Click "Add Key" → "Create new key"
- [ ] Choose "JSON" format
- [ ] Click "Create" (file downloads automatically)

### 5. Save Credentials File
- [ ] Rename downloaded file to: `google-credentials.json`
- [ ] Move to project root: `/Users/ansari.a/React/construction-website/`
- [ ] Verify it's in `.gitignore` (already done ✓)

### 6. Create Google Sheet
- [ ] Go to https://sheets.google.com
- [ ] Create new spreadsheet
- [ ] Name it: "Fortune Square - Contact Forms"
- [ ] Add headers in row 1:
  - A1: **Timestamp**
  - B1: **Name**
  - C1: **Email**
  - D1: **Phone**
  - E1: **Subject**
  - F1: **Message**
  - G1: **Interested In**
  - H1: **Preferred Contact**

### 7. Share Sheet with Service Account
- [ ] Open `google-credentials.json`
- [ ] Copy the `client_email` value (xxxxx@xxxxx.iam.gserviceaccount.com)
- [ ] Go to your Google Sheet
- [ ] Click "Share" button
- [ ] Paste the service account email
- [ ] Set permission to "Editor"
- [ ] **Uncheck** "Notify people"
- [ ] Click "Share"

### 8. Get Sheet ID
- [ ] From Google Sheet URL: `https://docs.google.com/spreadsheets/d/SHEET_ID/edit`
- [ ] Copy the SHEET_ID part
- [ ] Save it for next step

### 9. Create Environment Variables File
- [ ] Run: `cp env.template .env.local` (or copy manually)
- [ ] Open `.env.local` in editor

### 10. Fill in Environment Variables
From `google-credentials.json`:
- [ ] Copy `client_email` → paste into `GOOGLE_SERVICE_ACCOUNT_EMAIL`
- [ ] Copy entire `private_key` → paste into `GOOGLE_PRIVATE_KEY` (keep quotes and \n)

From Google Sheet:
- [ ] Copy Sheet ID → paste into `GOOGLE_SHEET_ID`

Example `.env.local`:
```env
GOOGLE_SHEET_ID=1AbC2DeF3GhI4JkL5MnO
GOOGLE_SERVICE_ACCOUNT_EMAIL=fortune-square-form@project-123456.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIEv...ABC\n-----END PRIVATE KEY-----\n"
```

### 11. Test the Connection
- [ ] Run: `node test-sheets.js`
- [ ] Check for success message
- [ ] Verify test entry appears in Google Sheet
- [ ] Delete test entry from sheet (optional)

### 12. Test with Live Form
- [ ] Start dev server: `npm run dev`
- [ ] Go to: http://localhost:3000/contact
- [ ] Fill out the form
- [ ] Submit
- [ ] Check Google Sheet for new entry
- [ ] Verify all fields are captured correctly

### 13. Verify Data Format
In your Google Sheet, verify these columns appear:
- [ ] Timestamp shows correct date/time (IST timezone)
- [ ] Name is captured
- [ ] Email is captured
- [ ] Phone is captured
- [ ] Subject is captured
- [ ] Message is captured
- [ ] Interested In is captured (or shows "N/A")
- [ ] Preferred Contact is captured

### 14. Production Deployment
When deploying to Vercel/Netlify:
- [ ] Add `GOOGLE_SHEET_ID` to environment variables
- [ ] Add `GOOGLE_SERVICE_ACCOUNT_EMAIL` to environment variables
- [ ] Add `GOOGLE_PRIVATE_KEY` to environment variables
- [ ] Deploy and test with production URL

## 🔧 Troubleshooting

### Test Script Fails
- **"googleapis not found"** → Run `npm install googleapis`
- **"GOOGLE_SHEET_ID is missing"** → Check `.env.local` exists and has correct values
- **"invalid_grant"** → Private key is malformed, copy it again carefully
- **"insufficient authentication"** → Sheet not shared with service account email

### Form Submits but No Data
- Check browser console for errors
- Check terminal/server logs
- Verify service account email has Editor access to sheet
- Run `node test-sheets.js` to diagnose

### Data Appears Incorrectly
- Check column headers match exactly (A1-H1)
- Verify sheet name is "Sheet1" or update code in `/src/lib/googleSheets.ts`

## 📁 Files Created/Modified

✅ `/src/lib/googleSheets.ts` - Main integration logic  
✅ `/src/app/api/contact/route.ts` - API endpoint (updated)  
✅ `/.gitignore` - Updated to protect credentials  
✅ `/env.template` - Environment variables template  
✅ `/test-sheets.js` - Test script  
✅ `/GOOGLE_SHEETS_SETUP.md` - Detailed documentation  
✅ `/QUICK_START.md` - Quick reference guide  
✅ `/SETUP_CHECKLIST.md` - This file  

## 🎉 Success Criteria

You're done when:
- ✅ `node test-sheets.js` shows success message
- ✅ Form submission adds row to Google Sheet
- ✅ All form fields appear in correct columns
- ✅ Timestamps show in IST timezone

## 📞 Next Steps

After successful setup:
1. Test form multiple times
2. Set up Google Sheet notifications (optional)
3. Create Google Data Studio dashboard (optional)
4. Set up automated backups (optional)
5. Add more sheets for different form types (optional)

## 🔐 Security Reminder

- ✅ `google-credentials.json` is in `.gitignore`
- ✅ `.env.local` is in `.gitignore`
- ✅ Never commit credentials to git
- ✅ Use environment variables for production
