import { T as reactExports, K as jsxRuntimeExports } from "./server-4E33zdva.js";
import { L as Link, g as flavor } from "./router-jPO0Ytt2.js";
import { N as Navbar, a as Footer } from "./Footer-BofCqH7x.js";
import { P as ProductGallery, Z as Zap, L as Leaf, D as Droplet, H as Heart, c as Sun, a as Sparkles, F as Flame, S as ShieldCheck, b as StickyBuyCard } from "./StickyBuyCard--zEXzZuP.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./utils-8RO4xBwZ.js";
import "./check-Q-3din1f.js";
const infoBullets = ["Cup Size: 300 ml", "100% Natural", "Monday–Friday Only", "No Added Sugar", "Delivery at One Location", "No Added Water", "Secure Checkout", "Freshly Made"];
const iconMap = {
  ShieldCheck,
  Flame,
  Sparkles,
  Sun,
  Heart,
  Droplet,
  Leaf,
  Zap
};
function EyeCarePage() {
  reactExports.useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver((entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("in")), {
      threshold: 0.12
    });
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-screen overflow-hidden bg-background text-foreground flex flex-col hbp-page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
        .hbp-page {
          --gold: oklch(0.78 0.10 80);
          --gold-foreground: oklch(0.22 0.03 145);
          --cream: oklch(0.96 0.025 85);
          --leaf: oklch(0.55 0.13 145);
          --success: oklch(0.55 0.13 150);
          --radius: 0.875rem;
          --shadow-soft: 0 1px 2px rgba(20, 35, 25, 0.04), 0 8px 24px -8px rgba(20, 35, 25, 0.08);
          --shadow-elev: 0 2px 6px rgba(20, 35, 25, 0.06), 0 24px 60px -20px rgba(20, 35, 25, 0.18);
          --shadow-glow: 0 20px 60px -20px color-mix(in oklab, var(--primary) 35%, transparent);
          --gradient-hero: linear-gradient(180deg, #ffffff, #ffffff);
          --gradient-gold: linear-gradient(135deg, oklch(0.82 0.10 85), oklch(0.72 0.13 75));
          --font-display: "Cormorant Garamond", "Fraunces", "Playfair Display", ui-serif, Georgia, serif;
        }

        .hbp-page .glass {
          background: color-mix(in oklab, white 65%, transparent);
          backdrop-filter: blur(14px) saturate(140%);
          -webkit-backdrop-filter: blur(14px) saturate(140%);
          border: 1px solid color-mix(in oklab, white 70%, transparent);
        }

        .hbp-page .text-gold {
          color: var(--gold);
        }

        .hbp-page .bg-gold {
          background: var(--gradient-gold);
          color: var(--gold-foreground);
        }

        .hbp-page .shadow-soft {
          box-shadow: var(--shadow-soft);
        }

        .hbp-page .shadow-elev {
          box-shadow: var(--shadow-elev);
        }

        .hbp-page .shadow-glow {
          box-shadow: var(--shadow-glow);
        }

        .hbp-page .bg-hero {
          background: var(--gradient-hero);
        }

        @keyframes hbp-fade-up {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .hbp-page .animate-fade-up {
          animation: hbp-fade-up 0.7s ease-out both;
        }

        .hbp-page h1 {
          font-family: var(--font-display);
        }
      ` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1 overflow-hidden px-6 md:px-12 lg:px-20 pt-[calc(var(--nav-h)+0.75rem)] pb-[calc(var(--footer-h)+0.75rem)] bg-hero", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4 animate-fade-up [animation-delay:60ms]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/juices", className: "group inline-flex items-center gap-1.5 whitespace-nowrap text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-all duration-200", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs transition-transform duration-200 group-hover:-translate-x-0.5", children: "←" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hover:underline", children: "Back to All Juices" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 lg:grid-cols-12 lg:gap-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-5 animate-fade-up lg:sticky lg:top-24 lg:self-start", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ProductGallery, { image: flavor.image }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-4 animate-fade-up [animation-delay:120ms]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-0 font-display text-4xl leading-[1.05] text-foreground md:text-[3rem] [&_em]:not-italic [&_em]:text-gold font-semibold", dangerouslySetInnerHTML: {
            __html: flavor.title
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground", children: "Health Benefits" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 grid grid-cols-3 gap-2", children: flavor.benefits.map((b) => {
              const Icon = iconMap[b.icon];
              return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card/70 px-2 py-3 text-center shadow-soft transition hover:-translate-y-0.5 flex flex-col justify-center min-h-[78px]", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "mx-auto h-4 w-4 text-primary shrink-0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 text-center text-[9px] font-medium leading-tight text-foreground/80 whitespace-pre-line", children: b.label })
              ] }, b.label);
            }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground", children: "Ingredients" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1.5 flex flex-wrap gap-1.5", children: flavor.ingredients.map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-secondary px-2.5 py-1 text-[11px] font-medium text-secondary-foreground", children: i }, i)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-x-4 gap-y-1.5", children: infoBullets.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-xs text-foreground/80 font-medium", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-600 font-bold shrink-0", children: "✓" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "leading-tight", children: item })
          ] }, item)) }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(StickyBuyCard, { pricing: flavor.pricing, showJulyOffer: true, juiceName: "Eye Care Support Juice" }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  EyeCarePage as component
};
