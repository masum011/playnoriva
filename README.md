# Playnoriva

Website for **[playnoriva.com](https://playnoriva.com)**, a kids' toy brand. Our toys are sold on **Amazon**, **Flipkart**, and **Meesho**.

## Tech Stack

React, Vite, React Router v6, Tailwind CSS, Framer Motion, Lucide React

## Routes

| Page | Route |
| --- | --- |
| Home | `/` |
| Our Toys | `/toys` |
| Why Us | `/why-us` |
| Reviews | `/reviews` |
| FAQ | `/faq` |
| 404 | `*` |

## Folder Structure

```
playnoriva/
├── public/                 # Static files, _redirects (Netlify)
├── src/
│   ├── components/         # Navbar, Footer, Hero, Products, etc.
│   ├── layouts/            # RootLayout (Navbar + Outlet + Footer)
│   ├── pages/              # One file per route
│   ├── router.jsx          # All route objects
│   ├── App.jsx             # <RouterProvider />
│   └── main.jsx            # Entry point
├── index.html
├── vercel.json             # Vercel rewrites
└── package.json
```

## Getting Started

```bash
git clone https://github.com/your-username/playnoriva.git
cd playnoriva
npm install
npm run dev
```

Build for production: `npm run build`

## Deployment

The host must serve `index.html` for every URL, or refreshing `/toys` gives a 404.

- **Netlify:** `public/_redirects` containing `/* /index.html 200`
- **Vercel:** `vercel.json` containing `{ "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }] }`

## Add a Page

1. Create `src/pages/NewPage.jsx` (default export).
2. Add a route in `src/router.jsx` using `lazy`.
3. Add the link to `links` in `src/components/Navbar.jsx`.

---

© Playnoriva. All rights reserved.