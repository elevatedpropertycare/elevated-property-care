# Elevated Property Care — High-Performance Next.js Website

A custom, institutional-grade website built specifically for **Elevated Property Care** (`elevatedpropertycare.com`), engineered for luxury estate caretaking, absentee home watch, and preventative property maintenance across Coastal Sussex County, Delaware.

---

## 🌟 What Is Included in This Website

1. **Full Mobile & Desktop Responsiveness**: Built with Next.js (App Router) and Tailwind CSS with custom luxury coastal color palettes (`coastal-950`, `sand-100`, etc.).
2. **Dedicated Geographic Hubs (SEO Silos)**:
   - `/locations/rehoboth-beach` (The Pines, Henlopen Acres, Country Club Estates)
   - `/locations/bethany-beach` (Sea Colony, North Bethany, South Bethany canals)
   - `/locations/lewes` (Historic Lewes, Pilottown Village, Cape Shores)
   - `/locations/fenwick-island` (Barrier island oceanfront, Bayside, Little Assawoman Bay)
3. **Dedicated Core Service Pages**:
   - `/services/property-reviews` (Includes the 50-point Interior & Exterior inspection checklists, perks & recommendations, and $45/visit pricing)
   - `/services/preventative-maintenance` (System cycling, HVAC, plumbing, winterizing)
   - `/services/landscaping-care` (Vendor oversight, plant health, 0% routine markup)
   - `/services/pool-and-spa-care` (Chemistry checks, equipment audits, opening/closing)
   - `/services/handyman-and-repairs` (Carpentry, assembly, punch lists, $50/hr transparent rate)
   - `/services/concierge` (Keyholder access, package handling, storm preparation)
4. **Interactive Annual Estimate Calculator**:
   - `/annual-estimate` — Live calculator allowing homeowners to select town, home size, review frequency, and add-on oversight options to get an instant annual estimate and request an official proposal.
5. **Preserved Content & Transparency**:
   - `/faq` — Complete transparent rates ($50/hr labor, $45/visit review, 15% non-routine fee, 0% routine markup, 365-day availability, warranty).
   - `/about` — Hamptons estate care background, Delaware licensed resident contractor credentials.
   - `/contact` — Unified high-converting contact portal.
6. **Migrated & Expanded Content Hub**:
   - `/resources` — Resource center.
   - `/resources/why-weekly-property-checks-are-non-negotiable` (Full original blog post preserved).
   - `/resources/winterizing-delaware-beach-homes` (Authoritative freeze protection guide).
   - `/resources/protecting-coastal-hvac-systems` (Salt-air corrosion mitigation guide).
7. **Complete Technical SEO Engine**:
   - Native Schema.org JSON-LD structured data (`ProfessionalService`, `LocalBusiness`, `FAQPage`, `Service`).
   - Dynamic XML Sitemap (`/sitemap.xml`) generated automatically by Next.js.
   - Clean `robots.txt`.

---

## 🚀 Beginner's Step-by-Step Deployment Guide (Vercel + Squarespace)

### Step 1: Create a Free GitHub Account
1. Go to [https://github.com/](https://github.com/) and sign up for a free account with your email.
2. In the top-right corner, click the **+** icon and select **New repository**.
3. Name the repository: `elevated-property-care`.
4. Choose **Private** or **Public** (either is fine), leave all other checkboxes unchecked, and click **Create repository**.
5. On the setup screen, click the link that says **"uploading an existing file"**.
6. Unzip the `elevated-property-care.zip` file on your computer. Select all files and folders inside and drag them into the GitHub upload area.
7. Scroll down and click the green **Commit changes** button.

---

### Step 2: Deploy to Vercel (1-Click Hosting)
1. Go to [https://vercel.com/](https://vercel.com/) and click **Sign Up**.
2. Select **"Continue with GitHub"** (this links your accounts automatically).
3. Once logged in, click the **"Add New..."** button in your dashboard and select **Project**.
4. You will see your `elevated-property-care` repository in the list. Click **Import** next to it.
5. In the configuration screen, leave everything at their default settings (Next.js is auto-detected).
6. Click **Deploy**.
7. In approximately 45 seconds, Vercel will finish building and provide a live URL (e.g. `elevated-property-care.vercel.app`). Open it to test your new website!

---

### Step 3: Connect Your Domain (`elevatedpropertycare.com` via Squarespace)
1. In your Vercel project dashboard, click **Settings** (top tab), then click **Domains** (left menu).
2. In the text box, type: `elevatedpropertycare.com` and click **Add**.
3. Vercel will instruct you to add two DNS records:
   - **A Record**:
     - Host / Name: `@` (or blank)
     - Value / Points to: `76.76.21.21`
   - **CNAME Record**:
     - Host / Name: `www`
     - Value / Points to: `cname.vercel-dns.com`
4. Log into your **Squarespace** account where you own the domain.
5. Navigate to **Domains** → click **elevatedpropertycare.com** → click **DNS Settings** (or Manage DNS).
6. Delete any old Hostinger records, and add the **A Record** and **CNAME Record** provided by Vercel.
7. Within 15–60 minutes, Vercel will issue a free SSL certificate (green padlock) and your custom site will be live worldwide!

---

## 📸 How to Replace Stock Images with Your Own Photos

Every image used in the code is a high-resolution, royalty-free coastal image from Unsplash. In the code, they are clearly marked with comments.

To replace any image with your own photo:
1. Place your new image file inside the `public/` folder (for example: `public/my-hero.jpg`).
2. Open the page file where you want to change it (e.g. `src/app/page.tsx`).
3. Replace the Unsplash URL with `'/my-hero.jpg'`.
4. Commit the change on GitHub, and Vercel will automatically re-deploy your site in 30 seconds!
