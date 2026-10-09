# ☕ The Sangameshwar Cafe — Website Documentation

Welcome to **The Sangameshwar Cafe** official web application! This website is crafted with a cozy, Pinterest-worthy Gen Z aesthetic (warm film tones, cream & coffee palette, rounded cards, micro-animations, and handwritten touches).

Built using **Vite + React + Tailwind CSS + Lucide Icons + Canvas Confetti**.

---

## 🚀 Quick Start / Running the Website

1. **Install dependencies** (first time only):
   ```bash
   npm install
   ```

2. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open your browser at: `http://localhost:5173/`

3. **Build for production**:
   ```bash
   npm run build
   ```
   The production-ready bundle will be created inside the `dist/` directory.

---

## 🛠️ How to Customize Your Cafe Website

All café content lives in easy-to-edit files without touching complex logic.

### 1. Editing Menu Items & Prices
Open `src/menuData.js` ([`src/menuData.js`](file:///Users/pranavsanjaysonwalkar/CAFE%20Website/src/menuData.js)).  
Every single item has this structure:

```javascript
{
  id: "hc-4",
  name: "Cappuccino",
  price: 140,                         // <-- Change the price here in ₹
  category: "hot-coffee",             // <-- Category ID
  isVeg: true,                        // <-- true for Veg (sage dot), false for Non-Veg (chicken)
  slug: "cappuccino",
  image: "/images/menu/cappuccino.jpg", // <-- Local photo path
  fallbackUrl: "https://images.unsplash.com/...", // <-- Fallback online photo
  description: "Equal parts espresso, silky steamed milk, and velvety microfoam.",
  badge: "Bestseller",                // <-- Optional badge ("Bestseller", "Chef's Pick", "New", null)
  isPopular: true,                    // <-- Set to true to show in the 8 popular items on Home
}
```

- **To change a price**: Simply change `price: 140` to your new price (e.g. `price: 160`).
- **To add a new item**: Add a new item object inside the `MENU_ITEMS` array.
- **To change badges**: Update `badge: "Chef's Pick"`, `"Must Try"`, or `"Bestie's Pick"`.

---

### 2. Changing Images
All images are organized inside the `public/images/` directory:

- **Menu Item Photos**: Place your photos inside `public/images/menu/<item-slug>.jpg` (for example, `public/images/menu/cappuccino.jpg`).
- **Hero Background**: Replace `public/images/hero-cafe.jpg`.
- **Gallery Photos**: Replace or add photos inside `public/images/gallery/` and list them in `GALLERY_ITEMS` inside `src/menuData.js`.
- **Graceful Image Fallback**: If an image file is missing, the website automatically falls back to an aesthetic curated photo, and if offline, shows a warm beige card with the category emoji so your website layout never breaks!

---

### 3. Updating WhatsApp Number & Contact Details
Open `src/menuData.js` and locate `CAFE_INFO` at the very top:

```javascript
export const CAFE_INFO = {
  name: "The Sangameshwar Cafe",
  tagline: "Where Every Sip Tells a Story",
  subTagline: "your cozy corner in the city ☕",
  address: "The Sangameshwaram Cafe\nVIIT College, Yashodhan Society,\nKapil Nagar, Kondhwa Budruk,\nPune, Maharashtra 411048",
  phone: "+91 98220 12345",
  whatsappNumber: "919822012345", // <-- Country code + 10-digit number (NO '+' or spaces)
  email: "hello@thesangameshwarcafe.in",
  instagram: "@thesangameshwarcafe",
  instagramUrl: "https://instagram.com/thesangameshwarcafe",
  openingHours: {
    weekdays: "8:00 AM – 11:00 PM",
    weekends: "8:00 AM – 11:30 PM",
  },
};
```

- When a customer clicks **"Place Order on WhatsApp"**, it automatically formats their cart into a clean message and opens WhatsApp directly to this number!

---

### 4. Updating Reviews
Inside `src/menuData.js`, scroll to `REVIEWS` to update customer names, quotes, handles, or ratings.

---

## 🎨 Design System & Colors

- **Cream**: `#FFF8ED` (Main warm background with subtle paper grain)
- **Coffee Brown**: `#5C4033` (Warm accents, hovers)
- **Beige**: `#D8C3A5` (Borders, cards, badges)
- **Dark Brown**: `#2B2118` (Headings, primary buttons)
- **Sage Green**: `#87986A` (Veg badges, subtle botanical accents)
- **Typography**:
  - Headings: *Playfair Display*
  - Body: *Poppins*
  - Taglines & Notes: *Caveat* (handwritten accent)
