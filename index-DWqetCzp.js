import{r,n}from"./index-SYPI0li6.js";import{N as D,a as I}from"./Footer-CsZd5I18.js";const O="/videos/03-video-full.mp4",q="/videos/hero-video-2.mp4",U="/sfx/whoosh.mp3",Y="/sfx/splash.mp3",H=.2,F=600,N=1200,J=N/1e3,y=["Nature doesn't rush, yet it creates perfection.","Every drop begins with real fruits and vegetables, pure, vibrant, alive.","Fuel your day with what your body was made for."];function V(){const c=r.useRef(null),l=r.useRef(null),u=r.useRef(null),m=r.useRef(null),[o,k]=r.useState(1),[p,S]=r.useState(18),[v,A]=r.useState(0),f=r.useRef(!1);r.useEffect(()=>{if(typeof window>"u")return;const e=new Audio(U),t=new Audio(Y);return e.preload="auto",t.preload="auto",e.volume=0,t.volume=0,u.current=e,m.current=t,()=>{e.pause(),t.pause(),u.current=null,m.current=null}},[]);const w=(e,t,a)=>{const s=e.volume,i=performance.now(),d=T=>{const E=Math.min(1,(T-i)/a);if(e.volume=Math.max(0,Math.min(1,s+(t-s)*E)),E<1)requestAnimationFrame(d);else if(t===0)try{e.pause(),e.currentTime=0}catch{}};requestAnimationFrame(d)},b=e=>{const t=e===1?u.current:m.current,a=e===1?m.current:u.current;if(a&&w(a,0,F),!!t){try{t.currentTime=0}catch{}t.volume=0,t.play().then(()=>w(t,H,F)).catch(()=>{})}};r.useEffect(()=>{const e=()=>{const s=c.current?.duration,i=l.current?.duration;s&&i&&Number.isFinite(s)&&Number.isFinite(i)&&S(s+i)},t=c.current,a=l.current;return t?.addEventListener("loadedmetadata",e),a?.addEventListener("loadedmetadata",e),e(),()=>{t?.removeEventListener("loadedmetadata",e),a?.removeEventListener("loadedmetadata",e)}},[]),r.useEffect(()=>{const e=o===1?c.current:l.current,t=o===1?l.current:c.current;if(!e||!t)return;f.current=!1,e.play().catch(()=>{}),b(o);const a=()=>{const s=e.duration;if(!s||!Number.isFinite(s))return;const i=s-e.currentTime;if(!f.current&&i<=J){f.current=!0;try{t.currentTime=0}catch{}t.play().catch(()=>{}),window.setTimeout(()=>{k(d=>d===1?2:1);try{e.pause(),e.currentTime=0}catch{}},N)}};return e.addEventListener("timeupdate",a),()=>e.removeEventListener("timeupdate",a)},[o]),r.useEffect(()=>{const e=()=>{const t=o===1?u.current:m.current;t&&t.paused&&b(o),window.removeEventListener("pointerdown",e),window.removeEventListener("keydown",e)};return window.addEventListener("pointerdown",e,{once:!0}),window.addEventListener("keydown",e,{once:!0}),()=>{window.removeEventListener("pointerdown",e),window.removeEventListener("keydown",e)}},[o]),r.useEffect(()=>{const e=performance.now();let t=0;const a=s=>{A((s-e)/1e3%p),t=requestAnimationFrame(a)};return t=requestAnimationFrame(a),()=>cancelAnimationFrame(t)},[p]);const[L]=r.useState(()=>{const e=new Date,t=new Date(e.getFullYear(),7,1);return e<t}),x=p/y.length,h=Math.min(y.length-1,Math.floor(v/x)),g=v-h*x,j=Math.min(1,g/1.4),M=Math.min(1,(x-g)/1.4),R=Math.max(0,Math.min(j,M)),_=(1-j)*16;return n.jsxs("section",{className:"relative h-screen w-full overflow-hidden",children:[n.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@800&display=swap');

        @keyframes july-glow-pulse {
          0%   {
            transform: scale(1);
            filter: brightness(1);
            box-shadow: 0 8px 28px rgba(11,107,67,0.20), 0 0 0px 0px rgba(11,107,67,0);
          }
          50%  {
            transform: scale(1.025);
            filter: brightness(1.08);
            box-shadow: 0 14px 44px rgba(11,107,67,0.42), 0 0 28px 8px rgba(11,107,67,0.28);
          }
          100% {
            transform: scale(1);
            filter: brightness(1);
            box-shadow: 0 8px 28px rgba(11,107,67,0.20), 0 0 0px 0px rgba(11,107,67,0);
          }
        }
        @keyframes july-text-flash {
          0%   { opacity: 1; }
          45%  { opacity: 1; }
          50%  { opacity: 0.15; }
          55%  { opacity: 1; }
          100% { opacity: 1; }
        }
        .july-badge {
          animation: july-glow-pulse 1.5s ease-in-out infinite;
          transform-origin: center;
        }
        .july-badge:hover {
          animation: none;
          transform: scale(1.03);
          filter: brightness(1.06);
        }
        .july-text-flash {
          animation: july-text-flash 0.55s ease-in-out infinite;
          display: inline-block;
        }
        .july-badge:hover .july-text-flash {
          animation: none;
          opacity: 1;
        }
      `}),n.jsx("video",{ref:c,src:O,autoPlay:!0,muted:!0,playsInline:!0,preload:"auto",className:`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1200ms] ease-in-out ${o===1?"opacity-100":"opacity-0"}`}),n.jsx("video",{ref:l,src:q,muted:!0,playsInline:!0,preload:"auto",className:`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1200ms] ease-in-out ${o===2?"opacity-100":"opacity-0"}`}),n.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-black/65 via-black/50 to-black/80"}),n.jsxs("div",{className:"relative z-10 flex h-full flex-col items-center justify-center px-6 text-center",children:[n.jsx("div",{className:"relative h-[260px] w-full max-w-5xl sm:h-[240px] md:h-[260px]",children:y.map((e,t)=>n.jsx("p",{style:{opacity:t===h?R:0,transform:t===h?`translateY(${_}px)`:"translateY(16px)",fontFamily:"var(--font-display)",fontStyle:"italic",fontWeight:500,letterSpacing:"-0.005em",textShadow:"0 1px 2px rgba(0,0,0,0.55), 0 2px 14px rgba(0,0,0,0.55), 0 8px 40px rgba(0,0,0,0.45)"},className:"absolute inset-0 flex items-center justify-center px-4 text-center text-4xl leading-[1.2] text-white sm:text-5xl md:text-6xl lg:text-7xl transition-[opacity,transform] duration-[1200ms] ease-out",children:e},t))}),L?n.jsx("a",{href:"/juices",className:"july-badge group mt-4 inline-flex items-center justify-center text-center bg-[#0B6B43] px-6 py-2.5 sm:px-8 sm:py-3 rounded-[14px] w-full max-w-[300px] sm:max-w-[380px] md:max-w-[440px] mx-auto border border-white/10 transition-colors duration-300 ease-out hover:bg-[#0D7F50] cursor-pointer overflow-hidden",children:n.jsx("span",{className:"july-text-flash uppercase text-white text-[36px] sm:text-[46px] md:text-[54px]",style:{fontFamily:'"Montserrat", "Helvetica Neue", ui-sans-serif, system-ui, sans-serif',fontWeight:800,letterSpacing:"0.03em",lineHeight:1,whiteSpace:"nowrap"},children:"JULY OFFER"})}):n.jsx("a",{href:"/juices",className:"group mt-4 inline-flex items-center justify-center border border-brand/70 bg-brand/10 px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.3em] text-white backdrop-blur-sm transition-all duration-700 ease-out hover:bg-brand hover:border-brand hover:tracking-[0.4em] hover:shadow-[0_10px_40px_-10px_rgba(34,197,94,0.6)]",children:"EXPLORE JUICES"})]}),n.jsx("div",{className:"absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-[10px] font-medium uppercase tracking-[0.4em] text-white/60"})]})}function z(){return n.jsxs("main",{className:"relative h-screen w-screen overflow-hidden bg-background",children:[n.jsx(D,{}),n.jsx(V,{}),n.jsx(I,{})]})}export{z as component};
