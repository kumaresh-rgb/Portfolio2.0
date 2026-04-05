# Design System Document

## 1. Overview & Creative North Star: "The Digital Nebula"

This design system is built to transform a technical portfolio from a static resume into a high-end editorial journey through a developer’s ecosystem. Moving beyond standard grid systems, we lean into the "Microsoft Fluent" philosophy of light, depth, and motion, but with an aggressive, premium edge.

**Creative North Star: The Digital Nebula**
The interface is not a flat canvas; it is a three-dimensional pocket of space. Information is held in suspension through glassmorphism and light. We break the "template" look by utilizing intentional asymmetry, where technical data orbits the user’s identity. The aesthetic is defined by "Deep Dark" backgrounds that allow neon-glow accents to serve as functional waypoints, rather than just decoration.

---

## 2. Colors: Tonal Depth & Radiant Accents

We use a "Deep Dark" palette that prioritizes optical comfort while allowing brand colors (Azure, .NET, React) to pop with luminosity.

### The Foundation
*   **Background (`#090f15`):** The absolute base. All depth begins here.
*   **Surface Tiers:** Use `surface_container_low` for subtle sectioning and `surface_container_highest` for interactive elements.

### The "No-Line" Rule
Standard 1px borders are strictly prohibited for defining sections. Structure must be achieved through **Background Shifts**. To separate the Hero from the Project grid, transition the background from `surface` to `surface_container_low`. Use the **Spacing Scale (16 or 24)** to create breathable, editorial-style voids between these shifts.

### The Glass & Gradient Rule
Interactive elements should never be flat. Use `surface_tint` (with 10-15% opacity) and a `backdrop-blur` of 12px to create a frosted-glass effect for navigation bars and floating cards.
*   **Signature Gradient:** For primary actions, use a linear gradient: `primary` (`#73b1ff`) to `primary_container` (`#53a3ff`) at a 135-degree angle. This adds a "soul" to the UI that flat color cannot replicate.

---

## 3. Typography: Editorial Authority

We use a tri-font system to balance technical precision with high-end readability.

*   **Display & Headlines (Plus Jakarta Sans):** Our "Voice." Large-scale, bold headings (e.g., `display-lg` at 3.5rem) should use tighter letter-spacing (-0.02em) to feel like a high-end tech magazine.
*   **Body (Inter):** Our "Clarity." This is for long-form project descriptions. It is neutral, highly legible, and should always use the `on_surface_variant` color to reduce eye strain against the dark background.
*   **Labels (Space Grotesk):** Our "Code." Used for technical tags, micro-copy, and tech stack chips. The monospaced lean of Space Grotesk reinforces the developer identity.

---

## 4. Elevation & Depth: Tonal Layering

In this design system, shadows are light, and depth is felt, not seen.

*   **The Layering Principle:** Instead of shadows, stack surfaces. Place a `surface_container_highest` card on a `surface_container_low` background. The subtle shift in hex value creates a natural "lift."
*   **Ambient Shadows:** For floating elements like the "Orbiting Tech Icons," use a diffused glow rather than a black shadow. Use the icon's own color (e.g., Azure blue) at 20% opacity with a 30px blur. This mimics how a neon light interacts with its environment.
*   **The Ghost Border Fallback:** If a border is required for accessibility, use the `outline_variant` token at **15% opacity**. It should be a suggestion of a container, not a cage.
*   **Glassmorphism Depth:** Navigation menus should use `surface_bright` with a `backdrop-filter: blur(20px)`. This integrates the UI into the background "Nebula" rather than looking pasted on top.

---

## 5. Components

### Buttons (High-Impact CTAs)
*   **Primary:** A pill-shaped (`rounded-full`) gradient button using the `primary` to `primary_container` transition. No border.
*   **Secondary:** A "Ghost" button. Transparent background with a `ghost border` (15% opacity `outline_variant`). On hover, the background fills with 5% `primary_tint`.

### Orbiting Tech Chips
*   **Visual Style:** Icons should be encased in a `surface_container_highest` circle with a 10px backdrop blur.
*   **The Glow:** Each chip should have an external glow (`box-shadow`) using its specific tech brand color (e.g., `#0078d4` for Azure) at low opacity.

### Input Fields & Search
*   **Style:** Minimalist. No bottom line or full box. Use a `surface_container_high` background with `rounded-md` (0.375rem). 
*   **Active State:** The border glows softly with the `tertiary` (`#47ccff`) color.

### Cards & Lists (Project Showcase)
*   **Strict Rule:** No dividers. Separate project list items using `spacing-10` (2.5rem) and a background shift from `surface_container_low` to `surface_container`.
*   **Layout:** Use asymmetrical padding. A card might have `padding-top: 8` and `padding-bottom: 12` to create a dynamic, editorial feel.

---

## 6. Do's and Don'ts

### Do
*   **DO** use whitespace as a structural element. Let the content breathe.
*   **DO** use `tertiary` (`#47ccff`) for micro-interactions (hover states, small icons) to provide a "spark" of tech-forward energy.
*   **DO** ensure that all glassmorphic containers have at least a 60% contrast ratio with the text inside.

### Don't
*   **DON'T** use 100% white (`#ffffff`) for text. It vibrates against the deep blue background. Use `on_surface` (`#e6ebf4`) for headers and `on_surface_variant` for body.
*   **DON'T** use sharp corners for interactive elements. Stick to the `md` (0.375rem) or `full` roundedness scale to maintain the Fluent Design "softness."
*   **DON'T** clutter the orbit. If displaying many icons, vary their scale and opacity to create "Z-axis" depth (smaller/dimmer icons appear further away).