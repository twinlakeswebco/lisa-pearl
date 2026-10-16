---
name: Lisa Pearl for Clarkson Mayor
description: A hometown campaign broadside in red, black, and warm white.
colors:
  paper: "#f8f6f0"
  ink: "#242622"
  red: "#bd252c"
  muted: "#5f615b"
  line: "#d6d6cd"
  white: "#ffffff"
  surface: "#eeeee6"
  primary-hover: "#962027"
  light-hover: "#e5e1d5"
  nav-hover: "#9c1c23"
typography:
  display:
    fontFamily: "Geist, Arial, sans-serif"
    fontSize: "clamp(48px, 5.6vw, 78px)"
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Geist, Arial, sans-serif"
    fontSize: "clamp(30px, 3vw, 43px)"
    fontWeight: 750
    lineHeight: 1.12
    letterSpacing: "-0.035em"
  body:
    fontFamily: "Geist, Arial, sans-serif"
    fontSize: "16px"
    lineHeight: 1.65
  label:
    fontFamily: "Geist, Arial, sans-serif"
    fontSize: "14px"
    fontWeight: 650
rounded:
  square: "0px"
components:
  button-primary:
    backgroundColor: "{colors.red}"
    textColor: "{colors.white}"
    typography: "{typography.label}"
    rounded: "{rounded.square}"
    padding: "12px 23px"
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
  button-light:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.square}"
    padding: "12px 23px"
  button-light-hover:
    backgroundColor: "{colors.light-hover}"
  navigation-donate:
    backgroundColor: "{colors.red}"
    textColor: "{colors.white}"
    typography: "{typography.label}"
    padding: "12px 26px"
  navigation-donate-hover:
    backgroundColor: "{colors.nav-hover}"
---

# Design System: Lisa Pearl for Clarkson Mayor

## Overview

**Creative North Star: "Hometown campaign broadside"**

The user-approved direction pairs red and black with warm white, real community photography, large direct type, and horizontal rules. The self-hosted sans serif keeps the campaign clear and familiar.

**Key Characteristics:**
- Large, tightly set headlines with selective red emphasis.
- Square sections, open space, and fine horizontal rules.
- Real photographs and direct, concise actions.

## Colors

### Primary
- **Campaign Red** (`colors.red`): headline emphasis, primary actions, photo caption, and contribution panel. Primary buttons, light buttons, and navigation donations each retain their observed hover token.

### Neutral
- **Warm Paper** (`colors.paper`): page background and reversed dark-section copy.
- **Campaign Ink** (`colors.ink`): primary text, dark statement band, and preview strip.
- **Quiet Gray** (`colors.muted`): secondary copy and small notes.
- **Rule Gray** (`colors.line`): section and action-row dividers.
- **Soft Surface** (`colors.surface`): footer and contact aside.
- **White** (`colors.white`): text on red controls and preview strip.

## Typography

Geist is self-hosted with Arial and sans-serif fallbacks. Display and headline roles use tight leading and negative tracking; body copy has generous line height. Labels use a medium-heavy weight.

The frontmatter records base roles. Surface-specific headline sizes remain in the stylesheet: Home uses a mobile clamp of 51–72px, About uses 62px desktop and 50px mobile, and Contact and Donate use their own responsive headline sizes. Do not force every page to share the hero scale.

## Layout

The content maximum is 1240px with 48px side gutters, reducing to 24px at 900px and 20px at 650px. Desktop layouts combine paired columns and full-width color bands; at 650px they become single-column. The Home headline precedes its photograph; on mobile About copy precedes its photograph. Primary action rows have generous separation and thin rules.

The mobile menu replaces desktop navigation at 650px. At widths above 1500px, Home increases the hero gap and photograph height. Section spacing varies by surface; it is not a single universal spacing scale.

## Elevation & Depth

The site is flat. Tonal bands, photographs, borders, and spacing establish hierarchy. The active navigation underline uses a two-pixel red box shadow as a rule rather than elevation.

## Shapes

Controls, images, panels, and editorial sections use square corners. The mobile menu control has a thin ink border. There are no floating rounded cards.

## Components

- **Primary action:** red rectangle, white label and inline arrow, minimum height 50px. Hover darkens the background and moves the arrow 4px right.
- **Light action:** warm-paper rectangle with ink label, used on a red band; shares primary-action dimensions.
- **Text link:** underlined medium-heavy label and arrow; hover moves the arrow 4px.
- **Navigation:** desktop text links with a red active underline; Donate is filled red. Mobile uses a bordered Menu/Close menu control and stacked links. Escape closes the expanded menu.
- **Action list:** full-width linked rows separated by fine rules; hover changes text to red and shifts the arrow.
- **Preview strip:** sticky ink strip above the header, white small tracked type, present on every page.

All interactive elements receive a red three-pixel focus outline with a five-pixel offset. The hero photograph has a brief clip reveal; reduced-motion preferences remove animations, transitions, and smooth scrolling.

## Do's and Don'ts

- **Do** use real community photography with large, direct headlines.
- **Do** preserve square geometry and horizontal rules.
- **Do** keep the preview strip visible on every preview page.
- **Don't** replace the approved red, black, and warm-white direction with gradients or decorative effects.
- **Don't** add biography, policies, endorsements, or election dates without verified campaign content.

## Campaign countdown
Shared red strip after the navigation, before page content. Warm white text, tabular day/hour/minute/second digits, exact target in Central time, and a warm-white CTA to the Kentucky Voter Information Center. Wraps at 1050px, stacks at 650px. Timer updates once a second without screen-reader announcements. Stops at zero and switches to a voting-day message; after November 3 Central time it thanks Clarkson and retains voter information.

## About biography expansion
First-person editorial story: portrait introduction, experience, family roots, service commitments, closing quote and contact action. Story rows inherit the .9fr/1.1fr About grid and 80px gap (40px at 900px; stacked at 650px). Warm neutral experience section, ink service section with definition-list commitments; no biography metric cards. User-supplied facts captured in PRODUCT.md.
