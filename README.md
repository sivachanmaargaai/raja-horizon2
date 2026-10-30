# Raja Narayanasamy — Interactive Website (React)

React + Vite version of the "Builder's Journey" prototype. Visuals, CSS and animations are unchanged from v1; the HTML/JS was split into components and hooks.

## Run

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # outputs ./dist (static, portable: base './')
npm run preview   # serve the production build
```

## Structure

```
src/
  main.jsx            entry
  App.jsx             page composition
  styles.css          original stylesheet, untouched
  assets/             book cover, speaking photo, book-banner (unused, kept from v1)
  data/content.js     ALL copy: timeline, ventures, AI steps, insights, principles, links
  hooks/              useRafScroll, useActiveSection
  components/         Header, Hero, Story, Journey, Ventures, Intelligence,
                      Book, Speaking, Insights, Beliefs, Connect, Footer,
                      Reveal (scroll-in wrapper), ScrollProgress, WatchVideo
```

## Watch Video (still disabled)

Set `VIDEO_URL` in `src/data/content.js` (e.g. `'/intro-video.mp4'`, with the file in `public/`).
While it is empty, no button or modal renders.

## Content review TODOs (carried over from v1)

- Copy is not yet Sir-approved: confirm hero headline, descriptors, career sequence, affiliations and roles.
- Replace the Amazon search link (`BOOK_URL`) with the approved direct purchase link.
- Confirm permission for the event photo, book cover and company branding.
- Add real article/post URLs before turning the Insights cards into links.
- Add a contact email only once a public address is provided.
