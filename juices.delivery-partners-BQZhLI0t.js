import { T as reactExports, K as jsxRuntimeExports } from "./server-4E33zdva.js";
import { b as Route, u as useNavigate, L as Link } from "./router-jPO0Ytt2.js";
import { c as createLucideIcon, N as Navbar, a as Footer } from "./Footer-BofCqH7x.js";
import { a as cn } from "./utils-8RO4xBwZ.js";
import { A as ArrowRight } from "./arrow-right-BfSyukFR.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode = [
  ["path", { d: "M7 7h10v10", key: "1tivn9" }],
  ["path", { d: "M7 17 17 7", key: "1vkiza" }]
];
const ArrowUpRight = createLucideIcon("arrow-up-right", __iconNode);
const PARTNERS = [{
  id: "deliveroo",
  name: "Deliveroo",
  description: "Order your favourite Portal Juice combinations with Deliveroo's swift local delivery.",
  url: "https://deliveroo.ae",
  bgColor: "#00CDBC",
  textColor: "#ffffff",
  logo: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "w-7 h-7 text-white", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M19.78 12.3c-.6-.73-1.63-.8-2.31-.15L14.7 14.8c-.37.35-.9.46-1.37.28l-2.88-1.08c-.62-.23-.88-.93-.53-1.48l3.15-4.87c.48-.75.33-1.74-.35-2.33l-1.08-.94c-.67-.6-1.7-.56-2.32.1L4.85 11.2c-.52.56-.7 1.34-.48 2.07l2.12 7.07c.23.77.93 1.3 1.73 1.3h7.62c.73 0 1.4-.4 1.73-1.06l2.7-5.4c.5-1.02.04-2.28-.5-2.88zM8.5 10c-.83 0-1.5-.67-1.5-1.5S7.67 7 8.5 7s1.5.67 1.5 1.5S9.33 10 8.5 10zm4-2c-.83 0-1.5-.67-1.5-1.5S11.67 5 12.5 5s1.5.67 1.5 1.5S13.33 8 12.5 8z" }) })
}, {
  id: "keeta",
  name: "Keeta",
  description: "Get freshly prepared juices delivered straight to your door with Keeta's premium service.",
  url: "https://www.keeta-global.com",
  bgColor: "#FFD100",
  textColor: "#111111",
  logo: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-black font-extrabold text-[1.2rem] tracking-tight italic select-none", children: "KeeTa" })
}, {
  id: "noon",
  name: "Noon",
  description: "Order Noon Food for amazing deals and rapid delivery across the city.",
  url: "https://www.noon.com/uae-en/food",
  bgColor: "#FEEE00",
  textColor: "#000000",
  logo: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-black font-black text-[1.25rem] tracking-tighter italic select-none", children: "noon" })
}, {
  id: "talabat",
  name: "Talabat",
  description: "The UAE's largest delivery platform, serving fresh juice right to your doorstep.",
  url: "https://www.talabat.com/uae",
  bgColor: "#FF5A00",
  textColor: "#ffffff",
  logo: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white font-black text-[1.35rem] tracking-tight select-none", children: "talabat" })
}];
function DeliveryPartnersPage() {
  const search = Route.useSearch();
  const navigate = useNavigate();
  const [selectedPartner, setSelectedPartner] = reactExports.useState(search.partner || "");
  const handleSelectPartner = (partnerId) => {
    setSelectedPartner(partnerId);
    navigate({
      search: (prev) => ({
        ...prev,
        partner: partnerId
      }),
      replace: true
    });
  };
  const handleVisit = (e, url) => {
    e.stopPropagation();
    window.open(url, "_blank", "noopener,noreferrer");
  };
  const handleContinue = () => {
    if (!selectedPartner) return;
    navigate({
      to: "/juices/payment",
      search: {
        fullName: search.fullName,
        emailAddress: search.emailAddress,
        phoneNumber: search.phoneNumber,
        fullAddress: search.fullAddress,
        partner: selectedPartner,
        juice: search.juice,
        subscription: search.subscription
      }
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "dp-page min-h-screen flex flex-col text-foreground", style: {
    background: "oklch(0.985 0.004 90)"
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
        .dp-page {
          --gold: oklch(0.78 0.10 80);
          --leaf: oklch(0.55 0.13 145);
          --font-display: "Cormorant Garamond", "Playfair Display", ui-serif, Georgia, serif;
          --shadow-card: 0 2px 8px rgba(20, 35, 25, 0.05), 0 32px 64px -24px rgba(20, 35, 25, 0.12);
        }

        @keyframes dp-fade-up {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .dp-fade { animation: dp-fade-up 0.65s ease-out both; }
        .dp-fade-1 { animation-delay: 60ms; }
        .dp-fade-2 { animation-delay: 140ms; }
        .dp-fade-3 { animation-delay: 220ms; }

        .dp-card {
          background: white;
          border-radius: 1.75rem;
          padding: clamp(1.5rem, 4vw, 2.25rem) clamp(1.5rem, 4vw, 2.5rem);
          box-shadow: var(--shadow-card);
          border: 1px solid oklch(0.92 0.008 255);
        }
        .dp-divider {
          height: 1px;
          background: linear-gradient(to right, transparent, oklch(0.88 0.01 255), transparent);
          margin: 1.25rem 0;
        }
        .dp-partner-card {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.15rem 1.25rem;
          background: white;
          border: 1.5px solid oklch(0.92 0.008 255);
          border-radius: 1.25rem;
          transition: all 0.22s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
        }
        .dp-partner-card:hover {
          border-color: oklch(0.62 0.18 145);
          box-shadow: 0 8px 24px -6px oklch(0.62 0.18 145 / 0.12);
          transform: translateY(-2px);
        }
        .dp-partner-card.selected {
          border-color: oklch(0.62 0.18 145);
          background: oklch(0.62 0.18 145 / 0.04);
          box-shadow: 0 8px 28px -6px oklch(0.62 0.18 145 / 0.15);
        }
        .dp-icon-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 52px;
          height: 52px;
          border-radius: 1.1rem;
          flex-shrink: 0;
          box-shadow: 0 4px 10px rgba(0,0,0,0.06);
        }
        .dp-continue-btn {
          width: 100%;
          background: oklch(0.62 0.18 145);
          color: white;
          border: none;
          border-radius: 999px;
          padding: 1rem 2rem;
          font-size: 0.85rem;
          font-weight: 800;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.6rem;
          transition: background 0.22s ease, transform 0.18s ease, box-shadow 0.22s ease;
          box-shadow: 0 10px 30px -8px oklch(0.62 0.18 145 / 0.35);
        }
        .dp-continue-btn:hover:not(:disabled) {
          background: oklch(0.54 0.18 145);
          transform: translateY(-1px);
          box-shadow: 0 14px 36px -8px oklch(0.62 0.18 145 / 0.42);
        }
        .dp-continue-btn:active:not(:disabled) {
          transform: translateY(0);
        }
        .dp-continue-btn:disabled {
          background: oklch(0.85 0.01 255);
          color: oklch(0.5 0.01 255);
          cursor: not-allowed;
          box-shadow: none;
          transform: none;
        }
        @media (min-width: 768px) {
          .dp-heading-title { white-space: nowrap; }
        }
      ` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1 flex items-center justify-center px-5 md:px-12", style: {
      paddingTop: "calc(var(--nav-h) + 1.25rem)",
      paddingBottom: "calc(var(--footer-h) + 1.25rem)"
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full max-w-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "dp-card dp-fade dp-fade-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/juices/customer-info", search: {
          fullName: search.fullName,
          emailAddress: search.emailAddress,
          phoneNumber: search.phoneNumber,
          fullAddress: search.fullAddress,
          partner: selectedPartner || void 0
        }, className: "group inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-all duration-200", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs transition-transform duration-200 group-hover:-translate-x-0.5", children: "←" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hover:underline", children: "Back to Details" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "dp-heading-title mt-3 text-[1.85rem] leading-[1.08] font-semibold text-foreground", style: {
          fontFamily: "var(--font-display)"
        }, children: "Order Through Our Delivery Partners" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-3.5 mb-6", children: PARTNERS.map((partner) => {
        const isSelected = selectedPartner === partner.id;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { onClick: () => handleSelectPartner(partner.id), className: cn("dp-partner-card", isSelected && "selected"), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 mr-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "dp-icon-wrapper", style: {
              backgroundColor: partner.bgColor,
              color: partner.textColor
            }, children: partner.logo }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-foreground text-sm tracking-tight", children: partner.name })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: (e) => handleVisit(e, partner.url), className: "flex items-center gap-1 bg-secondary hover:bg-emerald-600 hover:text-white text-secondary-foreground text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full transition-colors duration-250 cursor-pointer", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Visit" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { size: 12, strokeWidth: 2.5 })
          ] }) })
        ] }, partner.id);
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "dp-divider", style: {
        margin: "0.75rem 0"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: handleContinue, className: "dp-continue-btn", disabled: !selectedPartner, children: [
        "Continue to Payment",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16, strokeWidth: 2.5 })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  DeliveryPartnersPage as component
};
