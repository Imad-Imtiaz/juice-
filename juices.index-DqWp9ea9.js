import { K as jsxRuntimeExports } from "./server-4E33zdva.js";
import { L as Link } from "./router-jPO0Ytt2.js";
import { N as Navbar, a as Footer } from "./Footer-BofCqH7x.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const juices = [{
  title: "High Blood Pressure",
  image: "/images/high-blood-pressure.png",
  description: "A fresh, grounding blend built to support circulation and heart balance.",
  ingredients: "Beetroot, celery, pomegranate and ginger.",
  href: "/juices/hbp"
}, {
  title: "Diabetes",
  image: "/images/diabetes.png",
  description: "A low-sugar blend designed to support stable glucose levels and cravings.",
  ingredients: "Bitter gourd, jamun, celery and ginger.",
  href: "/juices/diabetes"
}, {
  title: "Arthritis",
  image: "/images/arthritis.png",
  description: "A turmeric based blend designed to help ease joint stiffness and discomfort.",
  ingredients: "Pineapple, pomegranate, celery and turmeric.",
  href: "/juices/arthritis"
}, {
  title: "Asthma",
  image: "/images/asthma.png",
  description: "A cooling, gentle blend crafted for easier breathing and lasting freshness.",
  ingredients: "Orange, carrot, pineapple and ginger.",
  href: "/juices/asthma"
}, {
  title: "Weight Loss",
  image: "/images/weight-loss.png",
  description: "A light, filling blend that helps reduce bloating and support appetite.",
  ingredients: "Grapefruit, celery, white cabbage and turmeric.",
  href: "/juices/weight-loss"
}, {
  title: "High Cholesterol",
  image: "/images/high-cholesterol.png",
  description: "A deep, rich blend with a tangy edge using fiber-rich greens and fruits.",
  ingredients: "Apple, carrot, white cabbage and turmeric.",
  position: "14% center",
  href: "/juices/high-cholesterol"
}, {
  title: "Eye Care",
  image: "/images/eye-care.png",
  description: "Bright, vibrant, sweet blend rich in ingredients for natural eye care.",
  ingredients: "Carrot, pomegranate, orange and ginger.",
  href: "/juices/eye-care"
}, {
  title: "Energy",
  image: "/images/energy.png",
  description: "A naturally invigorating mix perfect for a morning or afternoon energy boost.",
  ingredients: "Orange, beetroot, carrot and ginger.",
  href: "/juices/energy"
}];
function JuiceCard({
  juice,
  onHover
}) {
  const innerContent = /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105", style: {
      backgroundImage: `url(${juice.image})`,
      backgroundPosition: juice.position ?? "center"
    }, role: "img", "aria-label": juice.title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-x-0 top-0 z-10 bg-gradient-to-b from-black/60 to-transparent p-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { style: {
      fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif"
    }, className: "text-base sm:text-lg font-bold uppercase tracking-wider text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]", children: juice.title }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 z-20 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/65 to-black/10 p-6 text-white opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-semibold uppercase tracking-[0.28em] text-white/70", children: "Wellness Blend" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { style: {
        fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif"
      }, className: "mt-1.5 text-2xl font-bold tracking-tight text-white leading-tight", children: juice.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 max-w-[28ch] text-pretty text-[13px] leading-relaxed text-white/95 font-sans juice-card-description", children: juice.description }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex gap-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/80", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "No Added Sugar" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "·" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "No Added Water" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-5 inline-flex w-fit items-center justify-center border-b border-white/70 pb-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-white transition-colors group-hover:border-[var(--brand-green)] group-hover:text-[var(--brand-green)]", children: "Order" })
    ] })
  ] });
  if (juice.href) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: juice.href, onMouseEnter: onHover, onFocus: onHover, className: "group relative aspect-[4/5] block overflow-hidden rounded-xl border border-[var(--brand-green)]/40 bg-white outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-green)] cursor-pointer", children: innerContent });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("article", { onMouseEnter: onHover, onFocus: onHover, tabIndex: 0, className: "group relative aspect-[4/5] overflow-hidden rounded-xl border border-[var(--brand-green)]/40 bg-white outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-green)]", children: innerContent });
}
function JuicesPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-screen overflow-hidden bg-background flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1 overflow-y-auto overflow-x-hidden px-6 md:px-12 lg:px-20 pt-[calc(var(--nav-h)+1rem)] pb-[calc(var(--footer-h)+1rem)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx("section", { "aria-label": "Juice categories", className: "grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4", children: juices.map((j) => /* @__PURE__ */ jsxRuntimeExports.jsx(JuiceCard, { juice: j }, j.title)) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  JuicesPage as component
};
