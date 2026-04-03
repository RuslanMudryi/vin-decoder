# VIN Decoder

A web application for decoding vehicle VIN codes using the [NHTSA public API](https://vpic.nhtsa.dot.gov/api/).

**Live demo:** _https://vin-decoder-swart.vercel.app/ 

---

## Features

- **VIN decoding** — enter a 17-character VIN code and get a full breakdown of vehicle characteristics (make, model, year, engine, body type, and more)
- **Search history** — the last 3 decoded VINs are saved in `localStorage` and shown as quick-access buttons
- **Variables reference** — browse all NHTSA decoder variables with descriptions at `/variables`
- **Variable detail page** — view the full description of any individual variable at `/variables/:id`
- **Form validation** — the input is checked for empty value, maximum length (17 characters), and forbidden characters (I, O, Q)
- **API error display** — the `Message` field from NHTSA responses is shown directly in the UI
- **Responsive layout** — works correctly from 420 px to 1440 px

---

## Tech stack

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [React Router v7](https://reactrouter.com/)
- Plain CSS (no UI framework)

---

## Local setup

**Prerequisites:** Node.js 18+

```bash
# 1. Clone the repository
git clone https://github.com/RuslanMudryi/vin-decoder.git
cd vin-decoder

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Other commands

| Command | Description |
|---|---|
| `npm run build` | Production build (output in `dist/`) |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint |
