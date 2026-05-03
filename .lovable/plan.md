

# New "/invitation" Route — Majestic Envelope Design

## Overview
Create a new `/invitation` route inspired by the "Majestic Template" reference site. It features a full-screen cream/parchment envelope with a wax seal that cracks and opens on tap, revealing a second view with draped curtains, a gently swaying chandelier, names, date, and all the same wedding info from the "/" route (countdown, venue, dress code, RSVP, etc.).

## Design Vision

**View 1 — The Envelope (full screen)**
- Warm cream/parchment background filling the entire viewport
- Diagonal envelope flap lines (V-shape fold) with subtle paper texture via CSS gradients
- Pearl-like beaded border along the flap edges (SVG circles in a line)
- Large wax seal in center with "X & R" monogram (gold/burgundy tones, matching existing palette)
- Small cupid/angel illustration below the seal (SVG)
- "Tap to Open" text underneath
- On tap: seal cracks (animated SVG crack lines appearing), then the envelope flap slowly opens upward (CSS rotateX animation ~2s), then the whole view fades/slides away to reveal View 2

**View 2 — The Reveal (scrollable content)**
- Top section: draped curtain SVG illustration across the top (cream/gold beaded curtains)
- Chandelier SVG hanging from center, with a slow CSS `pendulum` animation swinging side to side (~4s ease-in-out infinite, ~3deg rotation)
- "We Are Getting Married" text
- "Omar & Layla" in Playfair Display
- Date: June 27, 2026
- Then all existing sections reused: CountdownTimer, DateLocation, AboutCouple, DressCode, RSVPSection, WeddingFooter
- LanguageToggle at top

## File Changes

### 1. New file: `src/components/InvitationEnvelope.tsx`
- Stage state machine: `sealed` → `cracking` → `opening` → `revealed` → `fading`
- Full-screen cream background with diagonal fold lines (SVG/CSS)
- Pearl bead border (SVG circles along the diagonal)
- Wax seal component with "X & R" monogram
- Crack animation: thin lines appear from seal edges (stroke-dasharray animation)
- Flap opening: the top triangle rotates up via `rotateX(-180deg)` over 2s
- After opening, entire envelope fades out (1.2s) to reveal content underneath

### 2. New file: `src/components/InvitationReveal.tsx`
- Draped curtain SVG at top (beaded scalloped arcs)
- Chandelier SVG with CSS animation: `@keyframes pendulum { 0%,100% { transform: rotate(-3deg) } 50% { transform: rotate(3deg) } }` applied with `transform-origin: top center`, duration 4s
- "We Are Getting Married" + names + date display
- Palm tree / tropical plant accents on sides (small SVGs)

### 3. New file: `src/pages/Invitation.tsx`
- Same pattern as `Index.tsx`: envelope overlay + main content underneath
- Reuses: CountdownTimer, DateLocation, AboutCouple, DressCode, RSVPSection, WeddingFooter, LanguageToggle
- Imports InvitationEnvelope for the opening screen
- Imports InvitationReveal as the hero section (replaces HeroNames)

### 4. Update: `src/App.tsx`
- Add route: `<Route path="/invitation" element={<Invitation />} />`

### 5. Update: `src/index.css`
- Add `pendulum` keyframe and `.animate-pendulum` class
- Add `crack-spread` keyframe for the wax seal crack effect

## Color Palette
Reuse existing tokens: cream `#F5ECD7`, gold `#C8813A`, `#D4AF7A`, navy `#1A1A2E`, burgundy `#8B1A2E`, teal `#3D6B5E`. The envelope itself uses warm cream tones. Wax seal in burgundy/gold.

## Technical Notes
- All SVG inline, no external images needed (except existing couple photos via AboutCouple)
- Chandelier swing uses pure CSS animation, no JS
- Same bilingual support via `useLanguage()` hook
- Mobile-first layout, same 390px base design approach
- No new dependencies

