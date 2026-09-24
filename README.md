# Mamma Luisa

A from-scratch redesign of [mammaluisa.com](https://mammaluisa.com/) — cinematic editorial hospitality site for the Newport Italian restaurant.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Authentic photography and content from the live site

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production

```bash
npm run build
npm run start
```

## Content

Business copy, menu, and wine list live in `content/`:

- `content/site.ts` — address, phone, hours, policies, links
- `content/menu.ts` — full food menu
- `content/wine.ts` — full red wine list (105 bottles)
- `content/photos.ts` — gallery inventory

Images are in `public/images/` (copied from the live WordPress media library).

## Routes

| Path | Purpose |
|------|---------|
| `/` | Evening narrative homepage |
| `/menu` | Full food menu |
| `/wine` | Red wine list |
| `/photos` | Gallery + lightbox |
| `/reservations` | Phone, Resy, policy |
| `/contact` | Location, hours, map |
| `/about` | Since 1992 story |
| `/private-dining` | Private table inquire |
| `/gift-certificates` | Square gift link |
