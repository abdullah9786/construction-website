# Google Maps - Quick Start (2 Minutes)

## Step 1: Enable Maps API (1 min)

1. Go to: https://console.cloud.google.com/
2. Select project: **"Fortune Square Website"** (same as Sheets)
3. Go to: **APIs & Services** → **Library**
4. Search: **"Maps JavaScript API"**
5. Click **Enable**

## Step 2: Create API Key (30 seconds)

1. Go to: **APIs & Services** → **Credentials**
2. Click: **Create Credentials** → **API Key**
3. **Copy the API key** that appears
4. (Optional) Click **Restrict Key** for security

## Step 3: Add to .env.local (30 seconds)

Open your `.env.local` file and add:

```env
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=paste_your_api_key_here
```

## Step 4: Restart Server

```bash
# Stop server (Ctrl+C)
npm run dev
```

## Step 5: Test

Go to: http://localhost:3000/location

You should see an interactive map! 🎉

---

## ⚠️ Important Notes

### Billing Required (But Free!)
- Google requires a billing account
- First **28,000 map loads/month** are FREE
- Small websites stay within free tier

### Enable Billing:
1. Go to: https://console.cloud.google.com/billing
2. Click **Link a billing account**
3. Add payment card (won't be charged for free tier usage)

---

## 🎯 Customize Your Map

### Update Location Coordinates

Edit: `/src/components/LocationMap.tsx` (line 12)

```typescript
center = { lat: 19.123456, lng: 72.987654 }, // Your actual coordinates
```

**Get coordinates:**
1. Go to Google Maps
2. Find your location
3. Right-click → Click coordinates to copy

### Update Address

Edit: `/src/components/LocationMap.tsx` (line 140)

```typescript
<p className="text-gray-600 mb-4">
  Your actual address here<br />
  City, Pincode
</p>
```

### Update Nearby Places

Edit: `/src/components/LocationMap.tsx` (line 23)

```typescript
const nearbyPlaces = [
  { name: 'Airport', distance: '8 km', time: '15 min', icon: '✈️' },
  // Update with actual nearby places
]
```

---

## ✅ Done!

That's it! You now have:
- ✅ Interactive Google Map on `/location` page
- ✅ Custom marker for your property
- ✅ "Get Directions" button
- ✅ Nearby landmarks section
- ✅ Connectivity information

**Full details:** See `GOOGLE_MAPS_SETUP.md`

---

## Troubleshooting

**Map not loading?**
- Check API key is correct
- Restart dev server
- Enable billing in Google Cloud
- Check browser console for errors

**Need help?** Open `GOOGLE_MAPS_SETUP.md` for detailed guide.
