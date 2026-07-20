import { a5 as useRouter, T as reactExports, K as jsxRuntimeExports } from "./server-4E33zdva.js";
function useLocation(opts) {
  const router = useRouter();
  {
    const location = router.stores.location.get();
    return location;
  }
}
const mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();
const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const toCamelCase = (string) => string.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase()
);
const toPascalCase = (string) => {
  const camelCase = toCamelCase(string);
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
const hasA11yProp = (props) => {
  for (const prop in props) {
    if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
      return true;
    }
  }
  return false;
};
const Icon = reactExports.forwardRef(
  ({
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    absoluteStrokeWidth,
    className = "",
    children,
    iconNode,
    ...rest
  }, ref) => reactExports.createElement(
    "svg",
    {
      ref,
      ...defaultAttributes,
      width: size,
      height: size,
      stroke: color,
      strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
      className: mergeClasses("lucide", className),
      ...!children && !hasA11yProp(rest) && { "aria-hidden": "true" },
      ...rest
    },
    [
      ...iconNode.map(([tag, attrs]) => reactExports.createElement(tag, attrs)),
      ...Array.isArray(children) ? children : [children]
    ]
  )
);
const createLucideIcon = (iconName, iconNode) => {
  const Component = reactExports.forwardRef(
    ({ className, ...props }, ref) => reactExports.createElement(Icon, {
      ref,
      iconNode,
      className: mergeClasses(
        `lucide-${toKebabCase(toPascalCase(iconName))}`,
        `lucide-${iconName}`,
        className
      ),
      ...props
    })
  );
  Component.displayName = toPascalCase(iconName);
  return Component;
};
const __iconNode$5 = [
  [
    "path",
    { d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z", key: "1jg4f8" }
  ]
];
const Facebook = createLucideIcon("facebook", __iconNode$5);
const __iconNode$4 = [
  ["rect", { width: "20", height: "20", x: "2", y: "2", rx: "5", ry: "5", key: "2e1cvw" }],
  ["path", { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z", key: "9exkf1" }],
  ["line", { x1: "17.5", x2: "17.51", y1: "6.5", y2: "6.5", key: "r4j83e" }]
];
const Instagram = createLucideIcon("instagram", __iconNode$4);
const __iconNode$3 = [
  [
    "path",
    {
      d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
      key: "c2jq9f"
    }
  ],
  ["rect", { width: "4", height: "12", x: "2", y: "9", key: "mk3on5" }],
  ["circle", { cx: "4", cy: "4", r: "2", key: "bt5ra8" }]
];
const Linkedin = createLucideIcon("linkedin", __iconNode$3);
const __iconNode$2 = [
  ["path", { d: "M4 5h16", key: "1tepv9" }],
  ["path", { d: "M4 12h16", key: "1lakjw" }],
  ["path", { d: "M4 19h16", key: "1djgab" }]
];
const Menu = createLucideIcon("menu", __iconNode$2);
const __iconNode$1 = [
  [
    "path",
    {
      d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
      key: "1sd12s"
    }
  ]
];
const MessageCircle = createLucideIcon("message-circle", __iconNode$1);
const __iconNode = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
const X = createLucideIcon("x", __iconNode);
const logo = "/assets/portal-juice-logo-BC3hLzi5.png";
const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/juices", label: "Juices" },
  { href: "/contact", label: "Contact" }
];
function Navbar() {
  const [open, setOpen] = reactExports.useState(false);
  const { pathname } = useLocation();
  const isActiveHref = (href) => href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");
  return /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "fixed top-0 left-0 right-0 z-50 bg-white border-b border-black/5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-[100vw] overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-20 md:h-28 items-center justify-between pl-4 pr-4 sm:pl-8 sm:pr-8 md:pl-12 md:pr-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/", className: "flex items-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logo, alt: "Portal Juice", className: "h-16 sm:h-20 md:h-24 w-auto" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden md:flex items-center gap-10 lg:gap-12 ml-auto", children: links.map((l) => {
        const isActive = isActiveHref(l.href);
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: l.href,
            "aria-current": isActive ? "page" : void 0,
            className: `relative text-[14px] font-medium tracking-wide transition-all duration-300 ease-out after:absolute after:left-0 after:-bottom-1.5 after:h-px after:w-full after:origin-left after:bg-brand after:transition-transform after:duration-300 ${isActive ? "text-brand after:scale-x-100" : "text-neutral-700 hover:text-brand after:scale-x-0 hover:after:scale-x-100"}`,
            children: l.label
          },
          l.href
        );
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          "aria-label": "Toggle menu",
          className: "md:hidden inline-flex items-center justify-center rounded-md p-2 text-neutral-800 hover:bg-black/5 transition-colors",
          onClick: () => setOpen((v) => !v),
          children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-5 w-5" })
        }
      )
    ] }),
    open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:hidden border-t border-black/5 bg-white px-6 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "flex flex-col", children: links.map((l) => {
      const isActive = isActiveHref(l.href);
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: l.href,
          onClick: () => setOpen(false),
          "aria-current": isActive ? "page" : void 0,
          className: `py-3 text-base font-medium transition-colors duration-300 ${isActive ? "text-brand" : "text-neutral-800 hover:text-brand"}`,
          children: l.label
        },
        l.href
      );
    }) }) })
  ] }) });
}
const socials = [
  { href: "https://instagram.com", label: "Instagram", Icon: Instagram },
  { href: "https://facebook.com", label: "Facebook", Icon: Facebook },
  { href: "https://linkedin.com", label: "LinkedIn", Icon: Linkedin },
  { href: "https://wa.me/", label: "WhatsApp", Icon: MessageCircle }
];
function Footer({ variant: _variant } = {}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "fixed bottom-0 left-0 right-0 z-40 h-[var(--footer-h)] border-t border-black/5 bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-full w-full items-center justify-between px-4 sm:px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-light uppercase tracking-[0.25em] text-foreground/65 sm:text-[11px]", children: "© 2026 Portal Juice — All Rights Reserved" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "flex items-center gap-2 rounded-full border border-foreground/10 bg-white px-3 py-1.5 shadow-[0_4px_24px_-14px_rgba(0,0,0,0.18)]", children: socials.map(({ href, label, Icon: Icon2 }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "a",
      {
        href,
        target: "_blank",
        rel: "noopener noreferrer",
        "aria-label": label,
        className: "group inline-flex h-7 w-7 items-center justify-center rounded-full text-foreground/70 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-foreground/5 hover:text-foreground",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon2, { className: "h-[15px] w-[15px]", strokeWidth: 1.75 })
      },
      label
    )) })
  ] }) });
}
export {
  Facebook as F,
  Instagram as I,
  Linkedin as L,
  Navbar as N,
  X,
  Footer as a,
  createLucideIcon as c
};
