# 📊 Google Sheets Integration - Complete Guide

## 🎯 What This Does

Every time someone submits the contact form on your website, their information is automatically saved to a Google Sheet in real-time.

### Data Captured:
- ✅ Timestamp (IST timezone)
- ✅ Name
- ✅ Email
- ✅ Phone
- ✅ Subject
- ✅ Message
- ✅ Interested In (property type)
- ✅ Preferred Contact Method

---

## 🚀 Quick Start (Choose One)

### Option 1: Quick Start (Recommended)
📄 See **`QUICK_START.md`** - Simple 5-minute setup guide

### Option 2: Detailed Setup
📄 See **`GOOGLE_SHEETS_SETUP.md`** - Comprehensive step-by-step instructions

### Option 3: Checklist Approach
📄 See **`SETUP_CHECKLIST.md`** - Interactive checklist format

---

## 📦 What Was Created

### New Files:
```
/src/lib/googleSheets.ts          ← Google Sheets API functions
/env.template                      ← Environment variables template
/test-sheets.js                    ← Test script
/QUICK_START.md                    ← Quick setup guide
/GOOGLE_SHEETS_SETUP.md           ← Detailed guide
/SETUP_CHECKLIST.md               ← Setup checklist
/README_SHEETS_INTEGRATION.md     ← This file
```

### Modified Files:
```
/src/app/api/contact/route.ts     ← Now saves to Google Sheets
/.gitignore                        ← Protects credentials
```

---

## 📝 Setup Summary

### 1. Install Package
```bash
npm install googleapis
```

### 2. Google Cloud Setup
1. Create Google Cloud project
2. Enable Google Sheets API
3. Create service account
4. Download credentials JSON
5. Save as `google-credentials.json`

### 3. Google Sheet Setup
1. Create new Google Sheet
2. Add 8 column headers (Timestamp, Name, Email, etc.)
3. Share sheet with service account email

### 4. Environment Variables
1. Copy `env.template` to `.env.local`
2. Fill in 3 values from credentials file
3. Add your sheet ID

### 5. Test
```bash
node test-sheets.js
```

---

## 🧪 Testing

### Test Connection
```bash
node test-sheets.js
```
This will:
- ✅ Check environment variables
- ✅ Connect to Google Sheets
- ✅ Write test entry
- ✅ Show success/error messages

### Test Live Form
1. Start server: `npm run dev`
2. Go to: http://localhost:3000/contact
3. Submit form
4. Check Google Sheet for new entry

---

## 🔧 How It Works

### 1. User Submits Form
```
Contact Form (React) → API Route → Validation
```

### 2. Data is Saved
```
API Route → Google Sheets API → Your Sheet (New Row Added)
```

### 3. User Gets Confirmation
```
Success Message → User Notified → Team Can Follow Up
```

### Code Flow:
```typescript
// 1. Contact form submits data
ContactForm.tsx (client)
    ↓
// 2. API route receives data
/api/contact/route.ts
    ↓
// 3. Validates and saves to sheets
appendToSheet() in googleSheets.ts
    ↓
// 4. Data appears in Google Sheet
Your Google Sheet (new row)
```

---

## 📋 Environment Variables Required

```env
GOOGLE_SHEET_ID=your_sheet_id
GOOGLE_SERVICE_ACCOUNT_EMAIL=service-account@project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
```

### Where to Get These:
- **GOOGLE_SHEET_ID**: From your sheet URL
- **GOOGLE_SERVICE_ACCOUNT_EMAIL**: From `google-credentials.json` → `client_email`
- **GOOGLE_PRIVATE_KEY**: From `google-credentials.json` → `private_key`

---

## 🔐 Security

### Protected Files (Not in Git):
- ✅ `google-credentials.json` - Service account credentials
- ✅ `.env.local` - Environment variables
- ✅ `.env*` - All env files

### Safe to Commit:
- ✅ `env.template` - Template file (no secrets)
- ✅ `/src/lib/googleSheets.ts` - Code only (no secrets)
- ✅ All documentation files

---

## 🚀 Production Deployment

### Vercel
1. Go to project settings
2. Environment Variables section
3. Add 3 variables:
   - `GOOGLE_SHEET_ID`
   - `GOOGLE_SERVICE_ACCOUNT_EMAIL`
   - `GOOGLE_PRIVATE_KEY`
4. Deploy

### Netlify
1. Go to Site settings → Environment variables
2. Add the same 3 variables
3. Deploy

### Other Platforms
Add the 3 environment variables to your hosting platform's environment configuration.

---

## 📊 Google Sheet Format

### Headers (Row 1):
| A | B | C | D | E | F | G | H |
|---|---|---|---|---|---|---|---|
| Timestamp | Name | Email | Phone | Subject | Message | Interested In | Preferred Contact |

### Example Data (Row 2):
| A | B | C | D | E | F | G | H |
|---|---|---|---|---|---|---|---|
| 05/10/2025, 10:30 AM | John Doe | john@example.com | +91 98920 72711 | Property Inquiry | Interested in 3BHK | 3 BHK | email |

---

## 🎨 Optional Enhancements

### 1. Google Sheet Notifications
Set up email notifications when new rows are added:
- Tools → Notification rules → Set triggers

### 2. Data Studio Dashboard
Create visual analytics:
- Connect Google Data Studio to your sheet
- Create charts and reports

### 3. Automated Responses
Use Google Apps Script to:
- Send auto-reply emails
- Assign leads to team members
- Create tasks in other systems

### 4. Multiple Sheets
Track different form types:
- Contact inquiries → Sheet1
- Download requests → Sheet2
- Site visit bookings → Sheet3

---

## ❓ Troubleshooting

### Common Issues:

**1. "Request had insufficient authentication scopes"**
- → Sheet not shared with service account
- → Solution: Share sheet with service account email (Editor permission)

**2. "Unable to parse range"**
- → Incorrect sheet ID
- → Solution: Check GOOGLE_SHEET_ID in `.env.local`

**3. "invalid_grant"**
- → Malformed private key
- → Solution: Copy private_key from JSON carefully (include \n)

**4. Form works but no data in sheet**
- → Check server console for errors
- → Run `node test-sheets.js` to diagnose
- → Verify service account has access

---

## 📞 Support

### Documentation Files:
1. **Quick Start**: `QUICK_START.md` - Fast setup
2. **Detailed Guide**: `GOOGLE_SHEETS_SETUP.md` - Complete instructions
3. **Checklist**: `SETUP_CHECKLIST.md` - Step-by-step checklist
4. **This File**: `README_SHEETS_INTEGRATION.md` - Overview

### Code Files:
- `/src/lib/googleSheets.ts` - Main API functions
- `/src/app/api/contact/route.ts` - Form handler
- `/test-sheets.js` - Test script

---

## ✅ Success Checklist

You're all set when:
- [x] `googleapis` package installed
- [x] Google Cloud project created
- [x] Service account created
- [x] Credentials downloaded
- [x] Google Sheet created with headers
- [x] Sheet shared with service account
- [x] `.env.local` file created with 3 variables
- [x] `node test-sheets.js` shows success
- [x] Form submission adds data to sheet
- [x] All fields captured correctly

---

## 🎉 You're Done!

Your contact form now automatically saves all submissions to Google Sheets. You can:
- View submissions in real-time
- Export data anytime
- Create reports and analytics
- Share with your team
- Integrate with other tools

**Next Steps:**
1. Test the form multiple times
2. Set up sheet notifications (optional)
3. Create a backup schedule
4. Train your team on accessing the data

---

Made with ❤️ for Fortune Square
