# ⛰️ Overland Ready — Adventure Checklist PWA

A mobile-first progressive web app (PWA) for overlanding and adventure camping trip preparation. Built as a single HTML file with no dependencies or frameworks — just install it to your home screen and go.

**Live app → [dbrinda.github.io/overland](https://dbrinda.github.io/overland/)**

![Overland Ready Screenshot](screenshot.png)

-----

## Features

- **190+ items** across 20+ sections covering every aspect of trip prep
- **Swipe left** to hide items you don’t need — swipe right to restore
- **Tap to check** items off as you pack
- **Progress bar** per section and overall packed counter (gear only)
- **Search** to quickly find any item
- **Filter** — All / Remaining / Packed
- **Custom items** — add your own gear to any trip
- **Procedure checklists** — Pre-Departure, Lights-Out, and Camp Departure (visually distinct, excluded from packed counter)
- **Collapse/expand** all sections
- **Print-friendly** layout
- **Offline capable** — works with no internet once cached (PWA + service worker)
- **localStorage persistence** — your packed state survives closing the browser
- Dark tactical UI with gold accents

-----

## Sections

**Gear**
Water · Fire · Shelter & Bedding · Essential Tools · Camp Setup · Lighting · Power · Nav & Comms · Miscellaneous · Entertainment · Personal · Clothing · Kitchen · Sanitation · First Aid · Camera Gear · Vehicle · Food & Snacks · Drinks · Custom Items

**Procedure Checklists**
Pre-Departure · Lights-Out · Camp Departure

-----

## Install as a PWA (Recommended)

**iPhone/iPad:** Safari → Share button → “Add to Home Screen”

**Android:** Chrome → three-dot menu → “Add to Home Screen” (or Chrome will prompt automatically)

Once installed it works fully offline — all state is stored in your browser’s localStorage.

-----

## Make It Your Own — Fork It

This checklist reflects one overlander’s kit. Yours is different — fork it and make it yours.

1. Click **Fork** in the top right on GitHub
1. Go to your forked repo → Settings → Pages → set source to `main` branch / root
1. Your version will be live at `yourusername.github.io/overland/`
1. Edit the `DATA` array in `index.html` to add, remove, or rename items

The entire checklist data is a single JavaScript array near the top of `index.html` — no build tools, no npm, no framework. Just open the file and edit.

-----

## File Structure

```
index.html   — the entire app (HTML + CSS + JS in one file)
sw.js        — service worker for offline/PWA support
README.md    — this file
```

-----

## Customization Tips

**Add an item:**

```javascript
{id:'xx01', t:'Your item text'},
```

**Add a section:**

```javascript
{ id:'mysec', icon:'🎯', title:'My Section', items:[
  {id:'ms01', t:'Item one'},
  {id:'ms02', t:'Item two'},
]},
```

**Add subsections** (like Vehicle or Clothing):

```javascript
{ id:'mysec', icon:'🎯', title:'My Section', subs:[
  { label:'Sub A', items:[
    {id:'sa01', t:'Item one'},
  ]},
  { label:'Sub B', items:[
    {id:'sb01', t:'Item two'},
  ]},
]},
```

**localStorage key** is set at the top of the script as `const KEY='overland-v4'` — bump the version if you make significant changes to force a clean state for returning users.

-----

## Tech Stack

- Vanilla HTML / CSS / JavaScript — zero dependencies
- Google Fonts (Oswald + IBM Plex Mono) — loaded from CDN, cached offline after first visit
- localStorage for all state persistence
- Service Worker for PWA / offline support

-----

## License

MIT — free to use, fork, and modify. Attribution appreciated but not required.

-----

*Built for the trail. Keep it simple, pack smart, leave no trace.* 🌲