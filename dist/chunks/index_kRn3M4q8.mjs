import { b as createAstro, d as createComponent, e as renderTemplate, f as addAttribute, g as renderComponent, m as maybeRenderHead, h as renderSlot, i as renderHead } from './astro/server_CgV33TIG.mjs';
import 'kleur/colors';
import 'html-escaper';
/* empty css                         */
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const $$Astro$9 = createAstro("https://astro-sphere-demo.vercel.app");
const $$ViewTransitions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "C:/Users/Produccion/Desktop/New folder/sayhello/node_modules/astro/components/ViewTransitions.astro", void 0);

var __freeze$3 = Object.freeze;
var __defProp$3 = Object.defineProperty;
var __template$3 = (cooked, raw) => __freeze$3(__defProp$3(cooked, "raw", { value: __freeze$3(cooked.slice()) }));
var _a$3;
const $$Astro$8 = createAstro("https://astro-sphere-demo.vercel.app");
const $$BaseHead = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  const { title, description, image = "/open-graph.jpg" } = Astro2.props;
  return renderTemplate(_a$3 || (_a$3 = __template$3(['<!-- Global Metadata --><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"', '><link rel="preload" href="/fonts/atkinson-regular.woff" as="font" type="font/woff" crossorigin><link rel="preload" href="/fonts/atkinson-bold.woff" as="font" type="font/woff" crossorigin><!-- Canonical URL --><link rel="canonical"', "><!-- Primary Meta Tags --><title>", '</title><meta name="title"', '><meta name="description"', '><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"', '><meta property="twitter:title"', '><meta property="twitter:description"', '><meta property="twitter:image"', '><!-- Sitemap --><link rel="sitemap" href="/sitemap-index.xml"><!-- RSS Feed --><link rel="alternate" type="application/rss+xml"', "", '><!-- Global Scripts --><script src="/js/theme.js"><\/script><script src="/js/scroll.js"><\/script><script src="/js/animate.js"><\/script>', ""])), addAttribute(Astro2.generator, "content"), addAttribute(canonicalURL, "href"), title, addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(Astro2.url, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(new URL(image, Astro2.url), "content"), addAttribute(Astro2.url, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(new URL(image, Astro2.url), "content"), addAttribute(title, "title"), addAttribute(`${Astro2.site}rss.xml`, "href"), renderComponent($$result, "ViewTransitions", $$ViewTransitions, {}));
}, "C:/Users/Produccion/Desktop/New folder/sayhello/src/components/BaseHead.astro", void 0);

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const $$Astro$7 = createAstro("https://astro-sphere-demo.vercel.app");
const $$Container = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Container;
  const { size } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(cn(
    "w-full h-full mx-auto px-5",
    size === "sm" && "max-w-screen-sm",
    size === "md" && "max-w-screen-md",
    size === "lg" && "max-w-screen-lg",
    size === "xl" && "max-w-screen-xl",
    size === "2xl" && "max-w-screen-2xl"
  ), "class")}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "C:/Users/Produccion/Desktop/New folder/sayhello/src/components/Container.astro", void 0);

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(cooked.slice()) }));
var _a$2;
const $$Astro$6 = createAstro("https://astro-sphere-demo.vercel.app");
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Header;
  const { pathname } = Astro2.url;
  pathname.match(/[^/]+/g);
  return renderTemplate(_a$2 || (_a$2 = __template$2(["", '<header id="header" class="fixed top-0 w-full h-16 z-50 " data-astro-cid-3ef6ksr2> ', ' </header>  <script>\n  function toggleDrawer() {\n    const drawer = document.getElementById("drawer")\n    const drawerButton = document.getElementById("header-drawer-button")\n    drawer?.classList.toggle("open")\n    drawerButton?.classList.toggle("open")\n  }\n\n  function initializeDrawerButton() {\n    const drawerButton = document.getElementById("header-drawer-button")\n    drawerButton?.addEventListener("click", toggleDrawer)\n  }\n\n  document.addEventListener("astro:after-swap", initializeDrawerButton)\n  initializeDrawerButton()\n<\/script>'])), maybeRenderHead(), renderComponent($$result, "Container", $$Container, { "size": "md", "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate` <div class=" mt-6  h-full w-full" data-astro-cid-3ef6ksr2> <div class="absolute left-0 top-1/2 -translate-y-1/2 flex gap-1 font-semibold" data-astro-cid-3ef6ksr2> <a href="/" class="flex gap-1 text-current hover:text-black dark:hover:text-white transition-colors duration-300 ease-in-out" style="margin-top: 25px; margin-left: 25px;" data-astro-cid-3ef6ksr2> <img src="/public/logo.png" alt="" srcset="" data-astro-cid-3ef6ksr2> <div data-astro-cid-3ef6ksr2></div> </a> </div> <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" data-astro-cid-3ef6ksr2></div> </div> ` }));
}, "C:/Users/Produccion/Desktop/New folder/sayhello/src/components/Header.astro", void 0);

const $$Astro$5 = createAstro("https://astro-sphere-demo.vercel.app");
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer class="relative bg-white dark:bg-black"></footer>`;
}, "C:/Users/Produccion/Desktop/New folder/sayhello/src/components/Footer.astro", void 0);

const SITE = {
  TITLE: "Say Hello",
  DESCRIPTION: ".",
  AUTHOR: "Josue Flores"
};
const LINKS = [
  {
    TEXT: "Home",
    HREF: "/"
  }
];

const $$Astro$4 = createAstro("https://astro-sphere-demo.vercel.app");
const $$Drawer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Drawer;
  const { pathname } = Astro2.url;
  const subpath = pathname.match(/[^/]+/g);
  return renderTemplate`${maybeRenderHead()}<div id="drawer" class="fixed inset-0 h-0 z-40 overflow-hidden flex flex-col items-center justify-center md:hidden bg-neutral-100 dark:bg-neutral-900 transition-[height] duration-300 ease-in-out" data-astro-cid-hxtyo74s> <nav class="flex flex-col items-center space-y-2" data-astro-cid-hxtyo74s> ${LINKS.map((LINK) => renderTemplate`<a${addAttribute(LINK.HREF, "href")}${addAttribute(cn("flex items-center justify-center px-3 py-1 rounded-full", "text-current hover:text-black dark:hover:text-white", "hover:bg-black/5 dark:hover:bg-white/20", "transition-colors duration-300 ease-in-out", pathname === LINK.HREF || "/" + subpath?.[0] === LINK.HREF ? "pointer-events-none bg-black dark:bg-white text-white dark:text-black" : ""), "class")} data-astro-cid-hxtyo74s> ${LINK.TEXT} </a>`)} </nav> <div class="flex gap-1 mt-5" data-astro-cid-hxtyo74s> <a href="/search"${addAttribute(`Search blog posts and projects on ${SITE.TITLE}`, "aria-label")}${addAttribute(cn("size-9 rounded-full p-2 items-center justify-center bg-transparent hover:bg-black/5 dark:hover:bg-white/20 stroke-current hover:stroke-black hover:dark:stroke-white border border-black/10 dark:border-white/25 transition-colors duration-300 ease-in-out", pathname === "/search" || "/" + subpath?.[0] === "search" ? "pointer-events-none bg-black dark:bg-white text-white dark:text-black" : ""), "class")} data-astro-cid-hxtyo74s> <svg class="size-full" data-astro-cid-hxtyo74s> <use href="/ui.svg#search" data-astro-cid-hxtyo74s></use> </svg> </a> <a href="/rss.xml" target="_blank"${addAttribute(`Rss feed for ${SITE.TITLE}`, "aria-label")} class="size-9 rounded-full p-2 items-center justify-center bg-transparent hover:bg-black/5 dark:hover:bg-white/20 stroke-current hover:stroke-black hover:dark:stroke-white border border-black/10 dark:border-white/25 transition-colors duration-300 ease-in-out" data-astro-cid-hxtyo74s> <svg class="size-full" data-astro-cid-hxtyo74s> <use href="/ui.svg#rss" data-astro-cid-hxtyo74s></use> </svg> </a> <button id="drawer-theme-button"${addAttribute(`Toggle light and dark theme`, "aria-label")} class="size-9 rounded-full p-2 items-center justify-center bg-transparent hover:bg-black/5 dark:hover:bg-white/20 stroke-current hover:stroke-black hover:dark:stroke-white border border-black/10 dark:border-white/25 transition-colors duration-300 ease-in-out" data-astro-cid-hxtyo74s> <svg class="block dark:hidden size-full" data-astro-cid-hxtyo74s> <use href="/ui.svg#sun" data-astro-cid-hxtyo74s></use> </svg> <svg class="hidden dark:block size-full" data-astro-cid-hxtyo74s> <use href="/ui.svg#moon" data-astro-cid-hxtyo74s></use> </svg> </button> </div> </div> `;
}, "C:/Users/Produccion/Desktop/New folder/sayhello/src/components/Drawer.astro", void 0);

const $$Astro$3 = createAstro("https://astro-sphere-demo.vercel.app");
const $$PageLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$PageLayout;
  const { title, description } = Astro2.props;
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": `${title} | ${SITE.TITLE}`, "description": description })}${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} ${renderComponent($$result, "Drawer", $$Drawer, {})} <main> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/Users/Produccion/Desktop/New folder/sayhello/src/layouts/PageLayout.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro$2 = createAstro("https://astro-sphere-demo.vercel.app");
const $$TwinklingStars = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$TwinklingStars;
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<svg id="twinkle-star" class="template" width="149" height="149" viewBox="0 0 149 149" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute left-full animate-twinkle"> <circle cx="74" cy="74" r="11" fill="white"></circle> <rect y="141.421" width="200" height="10" transform="rotate(-45 0 141.421)" fill="url(#paint0_linear_4_2)"></rect> <rect x="7.07107" width="200" height="10" transform="rotate(45 7.07107 0)" fill="url(#paint1_linear_4_2)"></rect> <defs> <linearGradient id="paint0_linear_4_2" x1="0" y1="146.421" x2="200" y2="146.421" gradientUnits="userSpaceOnUse"> <stop stop-color="#1E1E1E"></stop> <stop offset="0.445" stop-color="white"></stop> <stop offset="0.58721" stop-color="white"></stop> <stop offset="1" stop-color="#1E1E1E"></stop> </linearGradient> <linearGradient id="paint1_linear_4_2" x1="7.07107" y1="5" x2="207.071" y2="5" gradientUnits="userSpaceOnUse"> <stop stop-color="#1E1E1E"></stop> <stop offset="0.42" stop-color="white"></stop> <stop offset="0.555" stop-color="white"></stop> <stop offset="1" stop-color="#1E1E1E"></stop> </linearGradient> </defs> </svg> <script>\n  // Generate a twinkle star and append it to the galaxy, remove it after animation.\n  function generateTwinkleStar() {\n    // Clone the twinkle star template and set its attributes.\n    const twinkleStar = document.getElementById("twinkle-star").cloneNode(true);\n    twinkleStar.style.position = "absolute";\n    twinkleStar.style.left = Math.floor(Math.random() * window.innerWidth) + "px";\n    twinkleStar.style.top = Math.floor(Math.random() * (window.innerHeight/3)) + "px";\n    twinkleStar.style.width = window.innerWidth < 768 ? Math.floor(Math.random() * (15 - 7.5 + 1) + 7.5) : Math.floor(Math.random() * (30 - 15 + 1) + 15) + "px";\n    twinkleStar.style.height = twinkleStar.style.width;\n    twinkleStar.classList.add("twinkle");\n    document.getElementById("galaxy").appendChild(twinkleStar);\n\n    // Remove the twinkle star after the animation is completed.\n    setTimeout(() => {\n      twinkleStar.remove();\n    }, 2500);\n  }\n\n  setInterval(generateTwinkleStar, 5000);\n<\/script>'])), maybeRenderHead());
}, "C:/Users/Produccion/Desktop/New folder/sayhello/src/components/TwinklingStars.astro", void 0);

const $$Astro$1 = createAstro("https://astro-sphere-demo.vercel.app");
const $$MeteorShower = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$MeteorShower;
  return renderTemplate`${maybeRenderHead()}<div id="meteors"> <!-- rotations defined in base.css & tailwind.config.mjs --> <div class="shower ur"></div> <div class="shower dr"></div> <div class="shower dl"></div> <div class="shower ul"></div> </div> `;
}, "C:/Users/Produccion/Desktop/New folder/sayhello/src/components/MeteorShower.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://astro-sphere-demo.vercel.app");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": "Home", "description": SITE.DESCRIPTION }, { "default": ($$result2) => renderTemplate(_a || (_a = __template(["  ", '<div class="absolute inset-0 bg-black block dark:hidden"> <div id="particles1" class="fixed inset-0"></div> <div id="particles2" class="fixed inset-0"></div> <div id="particles3" class="fixed inset-0"></div> <div id="particles4" class="fixed inset-0"></div> <div id="particles5" class="fixed inset-0"></div> </div>  <div class="absolute inset-0 bg-black hidden dark:block"> <div id="stars1" class="fixed inset-0"></div> <div id="stars2" class="fixed inset-0"></div> <div id="stars3" class="fixed inset-0"></div> <div id="stars4" class="fixed inset-0"></div> <div id="stars5" class="fixed inset-0"></div> <div id="stars6" class="fixed inset-0"></div> </div>  <div id="galaxy" class="fixed inset-0"> <div class="dark:block"> ', " ", ' </div> </div> <script src="/js/bg.js"><\/script>  <section class="relative h-screen w-full"> <div id="planetcont" class="animate absolute inset-0 top-1/4 overflow-hidden"></div> <div class="animate absolute h-full w-full flex items-center justify-center"> <div class="relative w-full h-full flex items-center justify-center"> <div class="p-5 text-center"> <p class="animated text-lg md:text-xl lg:text-2xl font-semibold opacity-75">\nHello,\n</p> <p class="animated text-2xl md:text-3xl lg:text-4xl font-bold uppercase text-black dark:text-white">\nComming Soon\n</p> <p class="animated text-sm md:text-base lg:text-lg opacity-75">\nwebsite build\n</p> </div> </div> </div> </section> '])), maybeRenderHead(), renderComponent($$result2, "TwinklingStars", $$TwinklingStars, {}), renderComponent($$result2, "MeteorShower", $$MeteorShower, {})) })}`;
}, "C:/Users/Produccion/Desktop/New folder/sayhello/src/pages/index.astro", void 0);

const $$file = "C:/Users/Produccion/Desktop/New folder/sayhello/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
