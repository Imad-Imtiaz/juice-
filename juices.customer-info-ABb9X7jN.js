import { T as reactExports, K as jsxRuntimeExports } from "./server-4E33zdva.js";
import { c as Route, u as useNavigate, L as Link } from "./router-jPO0Ytt2.js";
import { N as Navbar, a as Footer } from "./Footer-BofCqH7x.js";
import { U as User, P as Phone, C as Calendar, M as MapPin } from "./user-XSWRUfTV.js";
import { M as Mail } from "./mail-aKqNmRhY.js";
import { A as ArrowRight } from "./arrow-right-BfSyukFR.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const validateEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};
const validatePhone = (phone) => {
  return /^\+?[0-9\s\-()]{7,}$/.test(phone);
};
function CustomerInfoPage() {
  const search = Route.useSearch();
  const navigate = useNavigate();
  const [form, setForm] = reactExports.useState({
    fullName: search.fullName || "",
    phoneNumber: search.phoneNumber || "",
    emailAddress: search.emailAddress || "",
    dateOfBirth: "",
    fullAddress: search.fullAddress || ""
  });
  const [touched, setTouched] = reactExports.useState({});
  const handleChange = (field, value) => {
    setForm((prev) => ({
      ...prev,
      [field]: value
    }));
  };
  const handleBlur = (field) => {
    setTouched((prev) => ({
      ...prev,
      [field]: true
    }));
  };
  const isPhoneValid = validatePhone(form.phoneNumber);
  const isEmailValid = validateEmail(form.emailAddress);
  const isValid = form.fullName.trim() && isPhoneValid && isEmailValid && form.dateOfBirth && form.fullAddress.trim();
  const handleContinue = (e) => {
    e.preventDefault();
    setTouched({
      fullName: true,
      phoneNumber: true,
      emailAddress: true,
      dateOfBirth: true,
      fullAddress: true
    });
    if (!isValid) return;
    navigate({
      to: "/juices/delivery-partners",
      search: {
        fullName: form.fullName,
        emailAddress: form.emailAddress,
        phoneNumber: form.phoneNumber,
        fullAddress: form.fullAddress,
        juice: search.juice,
        subscription: search.subscription
      }
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ci-page min-h-screen flex flex-col text-foreground", style: {
    background: "oklch(0.985 0.004 90)"
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
        .ci-page {
          --gold: oklch(0.78 0.10 80);
          --leaf: oklch(0.55 0.13 145);
          --font-display: "Cormorant Garamond", "Playfair Display", ui-serif, Georgia, serif;
          --shadow-card: 0 2px 8px rgba(20, 35, 25, 0.05), 0 32px 64px -24px rgba(20, 35, 25, 0.12);
        }

        @keyframes ci-fade-up {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .ci-fade { animation: ci-fade-up 0.65s ease-out both; }
        .ci-fade-1 { animation-delay: 60ms; }
        .ci-fade-2 { animation-delay: 140ms; }
        .ci-fade-3 { animation-delay: 220ms; }
        .ci-fade-4 { animation-delay: 300ms; }

        .ci-input-wrap {
          position: relative;
        }
        .ci-input-icon {
          position: absolute;
          left: 1.1rem;
          top: 50%;
          transform: translateY(-50%);
          color: oklch(0.58 0.03 145);
          pointer-events: none;
          width: 16px;
          height: 16px;
          flex-shrink: 0;
        }
        .ci-textarea-icon {
          position: absolute;
          left: 1.1rem;
          top: 1.1rem;
          color: oklch(0.58 0.03 145);
          pointer-events: none;
          width: 16px;
          height: 16px;
          flex-shrink: 0;
        }
        .ci-input {
          width: 100%;
          background: white;
          border: 1.5px solid oklch(0.88 0.012 255);
          border-radius: 999px;
          padding: 0.85rem 1.25rem 0.85rem 2.75rem;
          font-size: 0.93rem;
          color: oklch(0.18 0.02 260);
          font-family: inherit;
          outline: none;
          transition: border-color 0.22s ease, box-shadow 0.22s ease;
          -webkit-appearance: none;
        }
        .ci-input:focus {
          border-color: oklch(0.62 0.18 145);
          box-shadow: 0 0 0 3px oklch(0.62 0.18 145 / 0.10);
        }
        .ci-input.error {
          border-color: oklch(0.57 0.22 27);
          box-shadow: 0 0 0 3px oklch(0.57 0.22 27 / 0.08);
        }
        .ci-textarea {
          width: 100%;
          background: white;
          border: 1.5px solid oklch(0.88 0.012 255);
          border-radius: 1.25rem;
          padding: 0.85rem 1.25rem 0.85rem 2.75rem;
          font-size: 0.93rem;
          color: oklch(0.18 0.02 260);
          font-family: inherit;
          outline: none;
          resize: none;
          min-height: 88px;
          transition: border-color 0.22s ease, box-shadow 0.22s ease;
          line-height: 1.55;
        }
        .ci-textarea:focus {
          border-color: oklch(0.62 0.18 145);
          box-shadow: 0 0 0 3px oklch(0.62 0.18 145 / 0.10);
        }
        .ci-textarea.error {
          border-color: oklch(0.57 0.22 27);
          box-shadow: 0 0 0 3px oklch(0.57 0.22 27 / 0.08);
        }
        .ci-label {
          display: block;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: oklch(0.5 0.03 145);
          margin-bottom: 0.45rem;
        }
        .ci-error-msg {
          font-size: 0.72rem;
          color: oklch(0.57 0.22 27);
          margin-top: 0.35rem;
          padding-left: 0.25rem;
        }
        .ci-continue-btn {
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
        .ci-continue-btn:hover:not(:disabled) {
          background: oklch(0.54 0.18 145);
          transform: translateY(-1px);
          box-shadow: 0 14px 36px -8px oklch(0.62 0.18 145 / 0.42);
        }
        .ci-continue-btn:active:not(:disabled) {
          transform: translateY(0);
        }
        .ci-continue-btn:disabled {
          background: oklch(0.85 0.01 255);
          color: oklch(0.5 0.01 255);
          cursor: not-allowed;
          box-shadow: none;
          transform: none;
        }
        .ci-card {
          background: white;
          border-radius: 1.75rem;
          padding: clamp(1.5rem, 4vw, 2.25rem) clamp(1.5rem, 4vw, 2.5rem);
          box-shadow: var(--shadow-card);
          border: 1px solid oklch(0.92 0.008 255);
        }
        .ci-divider {
          height: 1px;
          background: linear-gradient(to right, transparent, oklch(0.88 0.01 255), transparent);
          margin: 1.25rem 0;
        }

      ` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1 flex items-center justify-center px-5 md:px-12", style: {
      paddingTop: "calc(var(--nav-h) + 1rem)",
      paddingBottom: "calc(var(--footer-h) + 1rem)"
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full max-w-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ci-card ci-fade ci-fade-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/juices/hbp", className: "group inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-all duration-200", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs transition-transform duration-200 group-hover:-translate-x-0.5", children: "←" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hover:underline", children: "Back to Product" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-3 text-[1.85rem] leading-[1.08] font-semibold text-foreground", style: {
          fontFamily: "var(--font-display)"
        }, children: "Personal Details" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 text-sm text-muted-foreground leading-relaxed", children: "Please provide your details so we can prepare and deliver your order." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ci-divider" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleContinue, noValidate: true, className: "flex flex-col gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 ci-fade ci-fade-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "ci-full-name", className: "ci-label", children: "Full Name" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ci-input-wrap", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "ci-input-icon" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: "ci-full-name", type: "text", autoComplete: "name", placeholder: "Enter your full name", value: form.fullName, onChange: (e) => handleChange("fullName", e.target.value), onBlur: () => handleBlur("fullName"), className: `ci-input${touched.fullName && !form.fullName.trim() ? " error" : ""}` })
              ] }),
              touched.fullName && !form.fullName.trim() && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "ci-error-msg", children: "Please enter your full name." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "ci-phone", className: "ci-label", children: "Phone Number" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ci-input-wrap", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "ci-input-icon" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: "ci-phone", type: "tel", autoComplete: "tel", placeholder: "Enter your phone number", value: form.phoneNumber, onChange: (e) => handleChange("phoneNumber", e.target.value), onBlur: () => handleBlur("phoneNumber"), className: `ci-input${touched.phoneNumber && !isPhoneValid ? " error" : ""}` })
              ] }),
              touched.phoneNumber && !form.phoneNumber.trim() && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "ci-error-msg", children: "Please enter your phone number." }),
              touched.phoneNumber && form.phoneNumber.trim() && !isPhoneValid && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "ci-error-msg", children: "Please enter a valid phone number." })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "ci-email", className: "ci-label", children: "Email Address" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ci-input-wrap", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "ci-input-icon" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: "ci-email", type: "email", autoComplete: "email", placeholder: "Enter your email address", value: form.emailAddress, onChange: (e) => handleChange("emailAddress", e.target.value), onBlur: () => handleBlur("emailAddress"), className: `ci-input${touched.emailAddress && !isEmailValid ? " error" : ""}` })
              ] }),
              touched.emailAddress && !form.emailAddress.trim() && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "ci-error-msg", children: "Please enter your email address." }),
              touched.emailAddress && form.emailAddress.trim() && !isEmailValid && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "ci-error-msg", children: "Please enter a valid email address." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "ci-dob", className: "ci-label", children: "Date of Birth" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ci-input-wrap", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "ci-input-icon" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: "ci-dob", type: "date", autoComplete: "bday", value: form.dateOfBirth, onChange: (e) => handleChange("dateOfBirth", e.target.value), onBlur: () => handleBlur("dateOfBirth"), className: `ci-input${touched.dateOfBirth && !form.dateOfBirth ? " error" : ""}` })
              ] }),
              touched.dateOfBirth && !form.dateOfBirth ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "ci-error-msg", children: "Please enter your date of birth." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground/80 mt-1 pl-1", children: "Used for birthday rewards and special offers." })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ci-fade ci-fade-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "ci-address", className: "ci-label", children: "Full Address" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ci-input-wrap", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "ci-textarea-icon" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { id: "ci-address", autoComplete: "street-address", placeholder: "Building, street, area, city…", value: form.fullAddress, onChange: (e) => handleChange("fullAddress", e.target.value), onBlur: () => handleBlur("fullAddress"), className: `ci-textarea${touched.fullAddress && !form.fullAddress.trim() ? " error" : ""}` })
          ] }),
          touched.fullAddress && !form.fullAddress.trim() && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "ci-error-msg", children: "Please enter your delivery address." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ci-divider", style: {
          margin: "0.5rem 0"
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", className: "ci-continue-btn", disabled: !isValid, children: [
          "Continue Order",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16, strokeWidth: 2.5 })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-[11px] text-muted-foreground mt-1", children: "Your information is kept private and used only for order fulfilment." })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  CustomerInfoPage as component
};
