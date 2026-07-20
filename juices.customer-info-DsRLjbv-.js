import{e as b,u as g,r as u,n as e,L as N}from"./index-SYPI0li6.js";import{N as j,a as v}from"./Footer-CsZd5I18.js";import{U as k,P as y,C as w,M as A}from"./user-DE38FFP1.js";import{M as B}from"./mail-uJM15KKI.js";import{A as P}from"./arrow-right-r7LkqFu6.js";const C=i=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(i),O=i=>/^\+?[0-9\s\-()]{7,}$/.test(i);function D(){const i=b.useSearch(),p=g(),[r,h]=u.useState({fullName:i.fullName||"",phoneNumber:i.phoneNumber||"",emailAddress:i.emailAddress||"",dateOfBirth:"",fullAddress:i.fullAddress||""}),[s,c]=u.useState({}),l=(a,d)=>{h(f=>({...f,[a]:d}))},t=a=>{c(d=>({...d,[a]:!0}))},o=O(r.phoneNumber),n=C(r.emailAddress),m=r.fullName.trim()&&o&&n&&r.dateOfBirth&&r.fullAddress.trim(),x=a=>{a.preventDefault(),c({fullName:!0,phoneNumber:!0,emailAddress:!0,dateOfBirth:!0,fullAddress:!0}),m&&p({to:"/juices/delivery-partners",search:{fullName:r.fullName,emailAddress:r.emailAddress,phoneNumber:r.phoneNumber,fullAddress:r.fullAddress,juice:i.juice,subscription:i.subscription}})};return e.jsxs("div",{className:"ci-page min-h-screen flex flex-col text-foreground",style:{background:"oklch(0.985 0.004 90)"},children:[e.jsx("style",{children:`
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

      `}),e.jsx(j,{}),e.jsx("main",{className:"flex-1 flex items-center justify-center px-5 md:px-12",style:{paddingTop:"calc(var(--nav-h) + 1rem)",paddingBottom:"calc(var(--footer-h) + 1rem)"},children:e.jsx("div",{className:"w-full max-w-xl",children:e.jsxs("div",{className:"ci-card ci-fade ci-fade-2",children:[e.jsxs("div",{className:"mb-4",children:[e.jsxs(N,{to:"/juices/hbp",className:"group inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-all duration-200",children:[e.jsx("span",{className:"text-xs transition-transform duration-200 group-hover:-translate-x-0.5",children:"←"}),e.jsx("span",{className:"hover:underline",children:"Back to Product"})]}),e.jsx("h1",{className:"mt-3 text-[1.85rem] leading-[1.08] font-semibold text-foreground",style:{fontFamily:"var(--font-display)"},children:"Personal Details"}),e.jsx("p",{className:"mt-1.5 text-sm text-muted-foreground leading-relaxed",children:"Please provide your details so we can prepare and deliver your order."})]}),e.jsx("div",{className:"ci-divider"}),e.jsxs("form",{onSubmit:x,noValidate:!0,className:"flex flex-col gap-4",children:[e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 ci-fade ci-fade-2",children:[e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"ci-full-name",className:"ci-label",children:"Full Name"}),e.jsxs("div",{className:"ci-input-wrap",children:[e.jsx(k,{className:"ci-input-icon"}),e.jsx("input",{id:"ci-full-name",type:"text",autoComplete:"name",placeholder:"Enter your full name",value:r.fullName,onChange:a=>l("fullName",a.target.value),onBlur:()=>t("fullName"),className:`ci-input${s.fullName&&!r.fullName.trim()?" error":""}`})]}),s.fullName&&!r.fullName.trim()&&e.jsx("p",{className:"ci-error-msg",children:"Please enter your full name."})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"ci-phone",className:"ci-label",children:"Phone Number"}),e.jsxs("div",{className:"ci-input-wrap",children:[e.jsx(y,{className:"ci-input-icon"}),e.jsx("input",{id:"ci-phone",type:"tel",autoComplete:"tel",placeholder:"Enter your phone number",value:r.phoneNumber,onChange:a=>l("phoneNumber",a.target.value),onBlur:()=>t("phoneNumber"),className:`ci-input${s.phoneNumber&&!o?" error":""}`})]}),s.phoneNumber&&!r.phoneNumber.trim()&&e.jsx("p",{className:"ci-error-msg",children:"Please enter your phone number."}),s.phoneNumber&&r.phoneNumber.trim()&&!o&&e.jsx("p",{className:"ci-error-msg",children:"Please enter a valid phone number."})]})]}),e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"ci-email",className:"ci-label",children:"Email Address"}),e.jsxs("div",{className:"ci-input-wrap",children:[e.jsx(B,{className:"ci-input-icon"}),e.jsx("input",{id:"ci-email",type:"email",autoComplete:"email",placeholder:"Enter your email address",value:r.emailAddress,onChange:a=>l("emailAddress",a.target.value),onBlur:()=>t("emailAddress"),className:`ci-input${s.emailAddress&&!n?" error":""}`})]}),s.emailAddress&&!r.emailAddress.trim()&&e.jsx("p",{className:"ci-error-msg",children:"Please enter your email address."}),s.emailAddress&&r.emailAddress.trim()&&!n&&e.jsx("p",{className:"ci-error-msg",children:"Please enter a valid email address."})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"ci-dob",className:"ci-label",children:"Date of Birth"}),e.jsxs("div",{className:"ci-input-wrap",children:[e.jsx(w,{className:"ci-input-icon"}),e.jsx("input",{id:"ci-dob",type:"date",autoComplete:"bday",value:r.dateOfBirth,onChange:a=>l("dateOfBirth",a.target.value),onBlur:()=>t("dateOfBirth"),className:`ci-input${s.dateOfBirth&&!r.dateOfBirth?" error":""}`})]}),s.dateOfBirth&&!r.dateOfBirth?e.jsx("p",{className:"ci-error-msg",children:"Please enter your date of birth."}):e.jsx("p",{className:"text-[11px] text-muted-foreground/80 mt-1 pl-1",children:"Used for birthday rewards and special offers."})]})]})]}),e.jsxs("div",{className:"ci-fade ci-fade-3",children:[e.jsx("label",{htmlFor:"ci-address",className:"ci-label",children:"Full Address"}),e.jsxs("div",{className:"ci-input-wrap",children:[e.jsx(A,{className:"ci-textarea-icon"}),e.jsx("textarea",{id:"ci-address",autoComplete:"street-address",placeholder:"Building, street, area, city…",value:r.fullAddress,onChange:a=>l("fullAddress",a.target.value),onBlur:()=>t("fullAddress"),className:`ci-textarea${s.fullAddress&&!r.fullAddress.trim()?" error":""}`})]}),s.fullAddress&&!r.fullAddress.trim()&&e.jsx("p",{className:"ci-error-msg",children:"Please enter your delivery address."})]}),e.jsx("div",{className:"ci-divider",style:{margin:"0.5rem 0"}}),e.jsxs("button",{type:"submit",className:"ci-continue-btn",disabled:!m,children:["Continue Order",e.jsx(P,{size:16,strokeWidth:2.5})]}),e.jsx("p",{className:"text-center text-[11px] text-muted-foreground mt-1",children:"Your information is kept private and used only for order fulfilment."})]})]})})}),e.jsx(v,{})]})}export{D as component};
