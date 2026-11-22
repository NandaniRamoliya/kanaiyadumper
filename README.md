# Shree Kanaiya Dumper — Official Website

Premium, multi-page corporate website for **Shree Kanaiya Dumper**, a heavy vehicle body fabricator established in 1984, headquartered in Himatnagar, Gujarat.

---

## 🚀 Tech Stack

| Layer | Technology |
|---|---|
| Structure | HTML5 (Semantic) |
| Styling | Vanilla CSS (Custom Design System, animations, mobile-first) |
| Logic | Vanilla JavaScript (ES6+, IntersectionObserver) |
| Build/Dev Server | [Vite](https://vitejs.dev/) v8 |
| Fonts | Google Fonts — Montserrat, Inter, Oswald |
| i18n | Built-in EN / HI (Hindi) language toggle |

---

## 📁 Project Structure

```
K_D/
├── index.html           # Home page
├── about.html           # About Us page
├── products.html        # Products listing grid
├── product-detail.html  # Dynamic product detail page (URL param: ?product=tippers)
├── services.html        # Services listing
├── service-detail.html  # Dynamic service detail page (URL param: ?service=customdesign)
├── contact.html         # Contact & inquiry form
├── style.css            # Global design system & all component styles
├── main.js              # i18n translations (EN + HI) & interactive logic
├── package.json         # npm scripts
└── README.md
```
*(Note: Images are located in the root directory. To further clean up, you may move them to an `images/` directory and update the `src=` paths in HTML.)*

---

## 🖥️ Running Locally

```bash
npm install
npm run dev
```
or 
```
npm.cmd run dev
```

The dev server starts at **http://localhost:5173/**

### Expose to other devices on the same network (--host already configured):
```bash
npm run dev
# Network URL shown in terminal, e.g.: http://192.168.x.x:5173/
```

> **Note:** If the network URL is blocked, add a Windows Firewall inbound rule for TCP port 5173.

---

## 🌐 Pages

| Page | URL | Description |
|---|---|---|
| Home | `/index.html` | Hero, stats, trusted customers marquee |
| About | `/about.html` | Story, mission, vision, facility stats |
| Products | `/products.html` | 10-product grid with hover effects |
| Product Detail | `/product-detail.html?product=tippers` | Dynamic: overview + key features + real photos |
| Services | `/services.html` | 2-service grid (Custom Design, Pickup & Delivery) |
| Service Detail | `/service-detail.html?service=customdesign` | Dynamic: overview + highlights per service |
| Contact | `/contact.html` | Address, map, email, inquiry form |

**Valid product keys:** `tippers` `tipcontainers` `tanker` `container` `fulltruck` `halftruck` `mountedcrane` `hookloader` `pickup` `trailer`

**Valid service keys:** `customdesign` `pickup`

---

## 🌍 Bilingual Support (EN / HI)

The site ships with full English and Hindi translations in `main.js`. The language toggle button in the navbar switches between them and persists the preference via `localStorage`.

To add or update translations, edit the `translations` object in [`main.js`](./main.js).

---

## 🎨 Brand Kit

| Token | Value | Description |
|---|---|---|
| Primary Blue | `#003A8C` | Used for headings and accents |
| Premium Red | `#E53935` | Used for primary buttons, highlights, and borders |
| Industrial Black | `#1F1F1F` | Deep dark mode sections (footer) |
| Steel Grey | `#6B7280` | Body text |

**Typography:**
- Heading Font: Montserrat 800/900
- Body Font: Inter 400/600
- Industrial Font: Oswald 500/600

---

## 📞 Contact Details (Live Data)

- **Address:** Himatnagar - Idar State Highway Rd, Himatnagar, Gujarat 383002
- **Phone:** +91 9737134448 / +91 9737134449
- **Email:** kanaiyadumper@gmail.com
- **WhatsApp:** [+91 9737134448](https://wa.me/919737134448)

---

## ✅ Completed Features & Polish

- **Full Mobile Responsiveness:** Interactive hamburger menu and stacked grids for small screens.
- **Scroll-Reveal Animations:** Sections and cards fade-up beautifully as you scroll down the page.
- **Image Hover Effects:** Product and service images subtly zoom on hover for a premium feel.
- **Dynamic Content Routing:** Detail pages load specific titles, descriptions, and high-quality local images dynamically based on URL parameters.
- **Client Marquee:** A continuous scrolling logo banner for trusted clients.
- **Bilingual Interface:** Instant EN/HI language switching without page reloads.
- **Back-to-Top Button:** Floating action button for easy navigation on long pages.
