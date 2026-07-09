# Velmure Tech — Engineering Guidelines (CLAUDE.md)

## System Lifecycle Commands
- **Development Server:** `npm run dev`
- **Production Compilation:** `npm run build`
- **Lint Inspection:** `npm run lint`
- **Strict Typing Verification:** `npx tsc --noEmit`

## Systemic Styling & Aesthetic Directives
1. **Color Scheme Execution:** Base background surfaces must use slate-950 deep values. Containers must utilize slate-900/50 with clean slate-800 borders. Highlights must use cyan-400 precisely for interactive borders, states, and emphasis keywords. 
2. **Zero Fabrication Policy:** Do not invent placeholder customer testimonials, fake client counts, ratings, or GHS pricing metrics. The copywriting must remain focused entirely on engineering standards, process transparency, and service capabilities.
3. **Layout Purity:** Use deep layouts with high padding (`py-24` to `py-32`) to establish premium structural breathing room.
4. **Interactive States:** Every single interactive text anchor, link, or button must have smooth transition characteristics (`transition-all duration-300 ease-in-out`) and distinct cyan hover/focus visual responses.
5. **Legitimate Image Sourcing:** Pull legitimate, high-quality, professional imagery from Unsplash source links for sections requiring visual enhancement. Use developer, workspace, or abstract architectural tech photography that matches the slate/cyan aesthetic. Always implement native Next.js `<Image />` components with defined layout dimensions to prevent Cumulative Layout Shift (CLS).

## Code Standards
- All functional modules inside `/components/sections` must be structured with explicit TypeScript definitions.
- Use native HTML semantic anchors over plain generic blocks (`<section>`, `<article>`, `<aside>`, `<nav>`).
- Commit each layout milestone cleanly with descriptive git messages (e.g., `git commit -m "design: establish Slate Blue and Cyan theme variables across global layout"`).
-
