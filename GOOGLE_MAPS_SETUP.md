# Google Maps Integration - Setup Guide

## 📍 What This Does

Adds an interactive Google Maps to your Location page showing:
- ✅ Property location with custom marker
- ✅ Interactive map with zoom, pan, street view
- ✅ "Get Directions" button linking to Google Maps
- ✅ Nearby landmarks and distances
- ✅ Connectivity information

---

## 🚀 Quick Setup

### Step 1: Get Google Maps API Key

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Select your existing project: **"Fortune Square Website"** (or the one you created for Sheets)
3. Go to **"APIs & Services"** → **"Library"**
4. Search for **"Maps JavaScript API"**
5. Click **"Enable"**

### Step 2: Create API Key

1. Go to **"APIs & Services"** → **"Credentials"**
2. Click **"Create Credentials"** → **"API Key"**
3. A popup will show your API key - **Copy it**
4. Click **"Restrict Key"** (recommended for security)

### Step 3: Restrict API Key (Recommended)

For security, restrict your API key:

#### Application Restrictions:
- Choose **"HTTP referrers (web sites)"**
- Add these referrers:
  ```
  http://localhost:3000/*
  https://your-domain.com/*
  https://www.your-domain.com/*
  ```

#### API Restrictions:
- Choose **"Restrict key"**
- Select only: **"Maps JavaScript API"**
- Click **"Save"**

### Step 4: Add to Environment Variables

1. Open `.env.local` in your project root
2. Add this line:
   ```env
   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_api_key_here
   ```
3. Replace `your_api_key_here` with your actual API key
4. Save the file

### Step 5: Update Location Coordinates

Open `/src/components/LocationMap.tsx` and update the default coordinates:

```typescript
// Line 12-13
center = { lat: 19.0760, lng: 72.8777 }, // Update with your actual coordinates
```

#### How to Get Your Coordinates:
1. Go to [Google Maps](https://maps.google.com)
2. Find your property location
3. Right-click on the exact location
4. Click on the coordinates (they'll be copied)
5. Format: `lat: LATITUDE, lng: LONGITUDE`

Example:
```typescript
center = { lat: 19.123456, lng: 72.987654 }, // Fortune Square location
```

### Step 6: Test the Map

1. **Restart your dev server** (important!):
   ```bash
   npm run dev
   ```

2. Go to: http://localhost:3000/location

3. You should see:
   - Interactive map with your location marked
   - Custom gold marker
   - Nearby landmarks section
   - Connectivity information

---

## 🎨 Customization

### Update Nearby Places

Edit `/src/components/LocationMap.tsx` (lines 22-29):

```typescript
const nearbyPlaces = [
  { name: 'International Airport', distance: '8 km', time: '15 min', icon: '✈️' },
  { name: 'Metro Station', distance: '2 km', time: '5 min', icon: '🚇' },
  // Add more places...
]
```

### Update Connectivity Data

Edit `/src/components/ConnectivitySection.tsx` (lines 17-70):

```typescript
const connectivityData = [
  {
    category: 'Transportation',
    icon: Car,
    color: 'from-blue-500 to-blue-600',
    items: [
      { name: 'International Airport', distance: '8 km', icon: Plane },
      // Update distances and add more...
    ]
  },
  // Add more categories...
]
```

### Update Address

Edit `/src/components/LocationMap.tsx` (lines 138-143):

```typescript
<p className="text-gray-600 mb-4">
  123 Luxury Boulevard, Downtown District<br />
  Metropolitan City, 400001
</p>
```

---

## 📱 Pages Created

### 1. Location Page (`/location`)
- **Hero Section** - Prime location highlights
- **Interactive Map** - Google Maps with custom marker
- **Connectivity Section** - Detailed nearby places

### 2. Components Created
- `/src/components/LocationMap.tsx` - Interactive map
- `/src/components/LocationHero.tsx` - Hero section
- `/src/components/ConnectivitySection.tsx` - Connectivity info

### 3. Navigation Updated
- Added "Location" link to header navigation
- Updated sitemap for SEO

---

## 💰 Pricing & Billing

### Google Maps Pricing:
- **First 28,000 map loads/month**: FREE
- After that: $7 per 1,000 loads

### Typical Usage:
- Small website: Usually stays within free tier
- Set up billing alerts to monitor usage

### Enable Billing:
1. Go to Google Cloud Console
2. Billing → Add billing account
3. Add payment method (required even for free tier)
4. Set up budget alerts (recommended)

---

## 🔒 Security Best Practices

### ✅ DO:
- Use `NEXT_PUBLIC_` prefix for client-side API keys
- Restrict API key to specific domains
- Restrict to only Maps JavaScript API
- Monitor usage regularly
- Use environment variables

### ❌ DON'T:
- Commit API keys to git (already in `.gitignore`)
- Use unrestricted API keys
- Share API keys publicly
- Use server-side keys on client

---

## 🚀 Production Deployment

### Vercel/Netlify:
1. Add environment variable:
   - Key: `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`
   - Value: Your API key
2. Update API key restrictions:
   - Add your production domain
3. Deploy

---

## 🛠️ Troubleshooting

### Map Doesn't Load
**Issue**: Blank gray box instead of map

**Solutions**:
1. Check API key is correct in `.env.local`
2. Verify Maps JavaScript API is enabled
3. Restart dev server after adding env variable
4. Check browser console for errors
5. Verify billing is enabled (required even for free tier)

### "This page can't load Google Maps correctly"
**Issue**: Error overlay on map

**Solutions**:
1. API key not set: Check `.env.local`
2. Billing not enabled: Enable in Google Cloud Console
3. API not enabled: Enable Maps JavaScript API
4. Referrer restrictions: Add localhost and your domain

### Map Loads But Shows Wrong Location
**Issue**: Map shows default location

**Solutions**:
1. Update coordinates in `LocationMap.tsx`
2. Use correct format: `{ lat: NUMBER, lng: NUMBER }`
3. Check coordinates are valid (latitude: -90 to 90, longitude: -180 to 180)

### Marker Not Showing
**Issue**: Map loads but no marker visible

**Solutions**:
1. Check zoom level (should be 15-18 for street level)
2. Verify center coordinates are correct
3. Check marker code in `LocationMap.tsx` (line 69-82)

---

## 📊 Features Included

### Interactive Map Features:
- ✅ Custom gold marker for property
- ✅ Info window on marker click
- ✅ Zoom controls
- ✅ Street view
- ✅ Full-screen mode
- ✅ Map type controls
- ✅ Custom styling (matches your theme)

### Additional Features:
- ✅ "Get Directions" button (opens Google Maps app)
- ✅ Nearby landmarks with distances
- ✅ Connectivity information by category
- ✅ Responsive design (mobile-friendly)
- ✅ Loading state animation
- ✅ Smooth animations throughout

---

## 🎯 What's Included

### Files Created:
```
/src/app/location/page.tsx           ← Location page
/src/components/LocationMap.tsx      ← Interactive map
/src/components/LocationHero.tsx     ← Hero section
/src/components/ConnectivitySection.tsx ← Connectivity info
/GOOGLE_MAPS_SETUP.md               ← This guide
```

### Files Updated:
```
/src/components/Header.tsx           ← Added Location link
/src/app/sitemap.ts                  ← Added location page
/env.template                        ← Added Maps API key
```

---

## ✅ Checklist

Setup complete when:
- [ ] Maps JavaScript API enabled in Google Cloud
- [ ] API key created and copied
- [ ] API key restricted (domain + API)
- [ ] Billing enabled (required)
- [ ] `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` added to `.env.local`
- [ ] Coordinates updated in `LocationMap.tsx`
- [ ] Address updated in `LocationMap.tsx`
- [ ] Nearby places customized
- [ ] Connectivity data updated
- [ ] Dev server restarted
- [ ] Map loads at http://localhost:3000/location
- [ ] "Get Directions" button works
- [ ] All sections display correctly

---

## 📞 Additional Resources

- [Google Maps JavaScript API Docs](https://developers.google.com/maps/documentation/javascript)
- [API Key Best Practices](https://developers.google.com/maps/api-security-best-practices)
- [Pricing Calculator](https://mapsplatform.google.com/pricing/)
- [Google Cloud Console](https://console.cloud.google.com/)

---

## 🎉 You're Done!

Visit `/location` to see your interactive map in action!

**Next Steps:**
1. Customize coordinates, address, and nearby places
2. Test on mobile devices
3. Set up billing alerts
4. Deploy to production

---

Made with ❤️ for Fortune Square
