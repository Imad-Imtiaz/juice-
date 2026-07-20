import { K as jsxRuntimeExports } from "./server-4E33zdva.js";
import { N as Navbar, F as Facebook, L as Linkedin, I as Instagram, a as Footer } from "./Footer-BofCqH7x.js";
import { M as Mail } from "./mail-aKqNmRhY.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function ContactPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "contact-shell relative h-screen overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "contact-main pt-6 md:pt-8 pb-[88px] overflow-hidden transform translate-y-[95px] md:translate-y-[110px]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "contact-left fade-in", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "contact-intro", children: [
          "Do you want to get in touch?",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "We would love to hear from you. Give us a call or drop an email at",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:hello@portal-juice.com", className: "contact-link", children: "hello@portal-juice.com" }),
          " ",
          "and we will get back soon."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "contact-form", onSubmit: (e) => e.preventDefault(), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "name", children: "Name*" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: "name", type: "text", required: true })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "email", children: "Email*" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: "email", type: "email", required: true })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "field", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "subject", children: "Subject" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: "subject", type: "text" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "field field-message", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "message", children: "Message*" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { id: "message", rows: 3, required: true })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "send-btn", children: "SEND" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "contact-right fade-in", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "map-frame", children: /* @__PURE__ */ jsxRuntimeExports.jsx("iframe", { title: "Portal Juice location", src: "https://www.google.com/maps?q=25.235184,55.274826&z=16&output=embed", width: "100%", height: "100%", loading: "lazy", style: {
          border: 0
        }, allowFullScreen: true, referrerPolicy: "no-referrer-when-downgrade" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "connect-block", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "connect-title", children: "CONNECT" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "phone-line", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "+971586072026" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "phone-region", children: "UAE" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "socials", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:hello@portal-juice.com", "aria-label": "Email", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { size: 16 }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", "aria-label": "Facebook", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Facebook, { size: 16 }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", "aria-label": "LinkedIn", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Linkedin, { size: 16 }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", "aria-label": "Instagram", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { size: 16 }) })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  ContactPage as component
};
