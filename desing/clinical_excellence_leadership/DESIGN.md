---
name: Clinical Excellence & Leadership
colors:
  surface: '#07122e'
  surface-dim: '#07122e'
  surface-bright: '#2e3856'
  surface-container-lowest: '#020c29'
  surface-container-low: '#0f1a37'
  surface-container: '#141e3b'
  surface-container-high: '#1f2946'
  surface-container-highest: '#2a3452'
  on-surface: '#dbe1ff'
  on-surface-variant: '#bcc9c9'
  inverse-surface: '#dbe1ff'
  inverse-on-surface: '#252f4d'
  outline: '#869393'
  outline-variant: '#3d4949'
  surface-tint: '#5cd8da'
  primary: '#5cd8da'
  on-primary: '#003738'
  primary-container: '#00a4a6'
  on-primary-container: '#003233'
  inverse-primary: '#00696b'
  secondary: '#e9c349'
  on-secondary: '#3c2f00'
  secondary-container: '#af8d11'
  on-secondary-container: '#342800'
  tertiary: '#b4ccbd'
  on-tertiary: '#20352a'
  tertiary-container: '#81998b'
  on-tertiary-container: '#1b3126'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#7cf5f7'
  primary-fixed-dim: '#5cd8da'
  on-primary-fixed: '#002020'
  on-primary-fixed-variant: '#004f50'
  secondary-fixed: '#ffe088'
  secondary-fixed-dim: '#e9c349'
  on-secondary-fixed: '#241a00'
  on-secondary-fixed-variant: '#574500'
  tertiary-fixed: '#d0e8d9'
  tertiary-fixed-dim: '#b4ccbd'
  on-tertiary-fixed: '#0a1f16'
  on-tertiary-fixed-variant: '#364b40'
  background: '#07122e'
  on-background: '#dbe1ff'
  surface-variant: '#2a3452'
  deep-navy: '#000825'
  teal-medical: '#00A4A6'
  gold-accent: '#D4AF37'
  mint-surface: '#D9F2E2'
  pure-white: '#FFFFFF'
  danger-red: '#E63946'
typography:
  headline-xl:
    fontFamily: Montserrat
    fontSize: 3.6rem
    fontWeight: '700'
    lineHeight: 4.4rem
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Montserrat
    fontSize: 2.8rem
    fontWeight: '600'
    lineHeight: 3.4rem
  headline-lg-mobile:
    fontFamily: Montserrat
    fontSize: 2.4rem
    fontWeight: '600'
    lineHeight: 3.0rem
  title-md:
    fontFamily: Montserrat
    fontSize: 2.0rem
    fontWeight: '600'
    lineHeight: 2.8rem
  body-lg:
    fontFamily: Inter
    fontSize: 1.8rem
    fontWeight: '400'
    lineHeight: 2.8rem
  body-md:
    fontFamily: Inter
    fontSize: 1.6rem
    fontWeight: '400'
    lineHeight: 2.4rem
  label-caps:
    fontFamily: Inter
    fontSize: 1.2rem
    fontWeight: '700'
    lineHeight: 1.6rem
    letterSpacing: 0.1em
  quiz-option:
    fontFamily: Inter
    fontSize: 1.7rem
    fontWeight: '500'
    lineHeight: 2.2rem
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 0.4rem
  xs: 0.8rem
  sm: 1.2rem
  md: 2.4rem
  lg: 4.0rem
  xl: 6.4rem
  container-margin: 2.0rem
  gutter: 1.6rem
---

## Brand & Style

The design system is engineered for a high-stakes, educational "gamified" environment. It balances the rigor of nursing professional development with the excitement of a competitive quiz format. The aesthetic is **Corporate Modern with a "Millionaire" twist**, blending deep medical authority with vibrant, interactive energy.

The personality is authoritative yet encouraging—designed to make nursing students feel like future leaders in healthcare. The visual direction utilizes high-contrast surfaces, subtle gradients for depth, and crisp typography to ensure clarity under the pressure of timed gameplay.

## Colors

The palette is anchored by **Deep Navy (#000825)**, providing a sophisticated, dark-mode canvas that reduces eye strain and evokes a high-production game show environment. 

- **Primary Teal (#00A4A6):** Represents the nursing profession—healing, modern, and clinical. Used for primary actions and progress indicators.
- **Secondary Gold (#D4AF37):** Used sparingly for "The Challenge" elements, high-score highlights, and "millionaire-style" milestones.
- **Tertiary Mint (#D9F2E2):** Provides a high-legibility surface for feedback, such as correct answer states or light-themed overlays.
- **Semantic Logic:** Success is signaled by Teal/Mint; errors by a vibrant Red; and prestigious achievements by Gold.

## Typography

This system uses a dual-font strategy. **Montserrat** is the display typeface, bringing a bold, geometric confidence to headlines and scores. **Inter** serves as the workhorse for quiz questions and body text, prioritized for maximum legibility in high-pressure scenarios.

The scale is based on a 10px root (1rem = 10px) to simplify responsive calculations. Mobile typography prioritizes vertical space, slightly reducing headline sizes while maintaining generous touch-targets for quiz options.

## Layout & Spacing

A **Mobile-First Fluid Grid** is the primary layout model. The content is centered in a single column on mobile with 20px (2.0rem) side margins. On tablet and desktop, the quiz interface expands to a maximum width of 800px to keep questions readable without excessive horizontal scanning.

Spacing follows an 8px base (implemented as 0.8rem units) to create a rhythmic vertical flow. Interactive elements like quiz answer cards are separated by "md" (2.4rem) spacing to prevent accidental taps.

## Elevation & Depth

Hierarchy is established through **Tonal Layering** and **Glassmorphism**. 
- **Base Layer:** Deep Navy background.
- **Surface Layer:** Darkened Teal or Navy variations with a subtle 1px border (#FFFFFF with 10% opacity) to define edges.
- **Interactive Layer:** Quiz options use a soft backdrop blur (8px) when overlaid on imagery or gradients, creating a premium "glass" feel.
- **Active State:** Elements being selected emit a soft outer glow (drop-shadow) using the primary Teal or Gold color, rather than traditional black shadows, to simulate a digital "lit" game board.

## Shapes

The design system uses a **Rounded (0.5rem)** base for standard UI components. This softens the clinical feel, making the app approachable. 

- **Standard Buttons & Inputs:** 0.5rem (5px).
- **Game Cards & Answer Containers:** 1.0rem (10px) to emphasize them as distinct physical objects in the game space.
- **Lifelines (Comodines):** Circular/Pill-shaped (3.0rem) to distinguish them from structural elements.

## Components

### Game Cards (Quiz Options)
Large, tap-friendly surfaces. Default state: Deep Navy background with Teal border. Hover/Active: Background shifts to Teal with white text. Correct state: Pulse animation with Mint background.

### Lifelines (Comodines)
Floating circular buttons positioned at the top or bottom-right of the screen. They utilize the Gold-accent color and high-elevation shadows to appear "above" the game board.

### Progress Ladder
A vertical sidebar (desktop) or top-horizontal bar (mobile). Current level is highlighted in Gold; completed levels in Teal; upcoming levels in low-opacity white.

### High-Score Lists
Clean rows using "Inter" for data. The top three positions are marked with Gold, Silver (secondary neutral), and Bronze (warm neutral) iconography.

### Inputs & Progress Bars
Input fields use a "ghost" style with a 2px bottom-border that glows when focused. Progress bars are thin (4px) and use a continuous gradient from Teal to Gold to visualize the journey toward "Leadership Mastery."