# Update Contact Page Map - Quick Guide

## 🎯 What Was Done

Replaced the placeholder map on the Contact page with a real interactive Google Map showing your sales office location.

---

## 📍 Update Sales Office Location

### File: `/src/components/ContactMap.tsx`

**Line 15:** Update the default coordinates:

```typescript
// Current (Mumbai default):
center = { lat: 18.9526, lng: 72.8339 }, // Sales office coordinates

// Update to your actual sales office location:
center = { lat: YOUR_LAT, lng: YOUR_LNG },
```

### How to Get Coordinates:

1. Go to [Google Maps](https://maps.google.com)
2. Find your **sales office** location
3. Right-click on the exact location
4. Click on the coordinates (they'll be copied)
5. Paste into the code

**Example:**
```typescript
center = { lat: 18.952600, lng: 72.833900 }, // 107/f Hasham Bldg location
```

---

## 🏢 Update Office Address (Already Set)

The address is automatically pulled from `ContactInfo.tsx`:

```typescript
address: '107/f hasham bldg mohd ali road above mejestic perfume'
city: 'Mumbai 400003'
```

If you need to change it, edit **`/src/components/ContactInfo.tsx`** (line 12-14)

---

## ✨ Features Added

### Interactive Map:
- ✅ Shows sales office location with gold marker
- ✅ Info window with address (opens on page load)
- ✅ Click marker to reopen info window
- ✅ "Get Directions" button in info window
- ✅ Full map controls (zoom, pan, street view)
- ✅ Custom styling matching your theme

### Quick Actions Bar:
- ✅ "Directions" button (opens Google Maps)
- ✅ Sales office icon and label
- ✅ Smooth animations

---

## 🎨 Customization Options

### Change Map Zoom Level

**File:** `/src/components/ContactMap.tsx` (line 16)

```typescript
zoom = 16,  // Current: street level
// Options:
// 15 = Close street view
// 16 = Very close (default)
// 17 = Very detailed
// 18 = Maximum detail
```

### Change Title

**File:** `/src/components/ContactInfo.tsx` (line 66)

```typescript
title="Fortune Square Sales Office"  // Change this
```

---

## 📱 Where to See It

Visit: http://localhost:3000/contact

The map appears in the right column under "Visit Our Sales Office"

---

## 🔧 Same API Key

Uses the same Google Maps API key you set up:
```env
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_key_here
```

No additional setup needed! ✅

---

## ✅ Quick Checklist

- [ ] Same API key from Location page (already done)
- [ ] Update coordinates in `ContactMap.tsx` (line 15)
- [ ] Update office address in `ContactInfo.tsx` (if needed)
- [ ] Test the map loads correctly
- [ ] Test "Get Directions" button
- [ ] Test info window appears

---

## 📊 Two Maps Now Active

Your website now has maps on:

1. **`/location`** - Full property location page
   - Property location
   - Nearby landmarks
   - Connectivity information

2. **`/contact`** - Sales office map
   - Sales office location
   - Office hours
   - Team information

Both use the same API key! 🎉

---

## 💡 Pro Tip

If your **sales office** and **property location** are the same, use the same coordinates on both pages.

If they're different (common for pre-launch), use:
- **Location page** → Property/construction site coordinates
- **Contact page** → Sales office coordinates

---

Made with ❤️ for Fortune Square
