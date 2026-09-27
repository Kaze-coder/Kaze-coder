import { mkdir, writeFile } from "node:fs/promises";

const out = new URL("../assets/", import.meta.url);
await mkdir(out, { recursive: true });

const palette = {
  bg: "#090b09",
  panel: "#10130f",
  line: "#2b3028",
  text: "#eee9dd",
  muted: "#858b7d",
  acid: "#d8f06a",
  amber: "#eea84b",
};

const style = `
  text { font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; }
  .scan { animation: scan 7s linear infinite; }
  .blink { animation: blink 4.8s steps(1) infinite; transform-origin: center; }
  .float { animation: float 4s ease-in-out infinite; }
  @keyframes scan { from { transform: translateY(-24px) } to { transform: translateY(344px) } }
  @keyframes blink { 0%, 46%, 50%, 100% { transform: scaleY(1) } 48% { transform: scaleY(.08) } }
  @keyframes float { 0%, 100% { transform: translateY(0) } 50% { transform: translateY(-5px) } }
  @media (prefers-reduced-motion: reduce) { .scan, .blink, .float { animation: none } }
`;

const frame = (body, viewBox = "0 0 1012 320") => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}" role="img">
<style>${style}</style>${body}</svg>\n`;

// Font Awesome Free 7.3.1 cat icon, CC BY 4.0: https://fontawesome.com/license/free
const cat = (x, y, width) => {
  const scale = width / 576;
  return `<!-- Font Awesome Free 7.3.1 cat icon, CC BY 4.0: https://fontawesome.com/license/free --><g transform="translate(${x} ${y}) scale(${scale})">
  <g class="float">
    <path d="M64 96c53 0 96 43 96 96v85.8c29.7-44.7 77.8-76.2 133.4-84 25.6 60 85.2 102.1 154.6 102.1 10.9 0 21.6-1.1 32-3.1V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V339.2L280 448h56c17.7 0 32 14.3 32 32s-14.3 32-32 32H192c-53 0-96-43-96-96V192c0-16.6-12.6-30.2-28.7-31.8l-6.6-.3C44.6 158.2 32 144.6 32 128c0-17.7 14.3-32 32-32Zm469.8-92.8C544.2-5.5 560 1.9 560 15.5V128c0 61.9-50.1 112-112 112S336 189.9 336 128V15.5c0-13.6 15.8-21 26.2-12.3L416 48h64l53.8-44.8Z" fill="#171b16" stroke="${palette.muted}" stroke-width="7" stroke-linejoin="round"/>
    <path d="M367 22 416 63h-52Zm162 0-49 41h52Z" fill="${palette.amber}" opacity=".82"/>
    <path d="M366 242c26 23 138 23 164 0" fill="none" stroke="${palette.amber}" stroke-width="13" stroke-linecap="round"/>
    <path d="M447 250v34" stroke="${palette.amber}" stroke-width="8"/><path d="m447 278-14 15 14 15 14-15Z" fill="${palette.acid}"/>
    <g class="blink"><ellipse cx="400" cy="128" rx="24" ry="18" fill="${palette.acid}"/><ellipse cx="496" cy="128" rx="24" ry="18" fill="${palette.acid}"/><path d="M400 111v34m96-34v34" stroke="${palette.bg}" stroke-width="8" stroke-linecap="round"/></g>
  </g>
</g>`;
};

const banner = frame(`
  <rect width="1012" height="320" rx="18" fill="${palette.bg}"/>
  <path d="M0 40h1012M0 80h1012M0 120h1012M0 160h1012M0 200h1012M0 240h1012M0 280h1012M80 0v320M160 0v320M240 0v320M320 0v320M400 0v320M480 0v320M560 0v320M640 0v320M720 0v320M800 0v320M880 0v320M960 0v320" stroke="#ffffff" opacity=".035"/>
  <rect x="38" y="34" width="936" height="252" rx="12" fill="${palette.panel}" stroke="${palette.line}"/>
  <text x="76" y="78" fill="${palette.acid}" font-size="12" font-weight="700" letter-spacing="2">$ BOOT PROFILE --USER KAZE</text>
  <text x="72" y="151" fill="${palette.text}" font-size="58" font-weight="800" letter-spacing="-5">AUTOMATE.</text>
  <text x="72" y="207" fill="${palette.text}" font-size="58" font-weight="800" letter-spacing="-5">SHIP. REPEAT.</text>
  <text x="76" y="248" fill="${palette.muted}" font-size="13" letter-spacing="1">AUTOMATION-FOCUSED DEVELOPER / INDONESIA</text>
  <path d="M676 34v252" stroke="${palette.line}"/>
  <text x="706" y="67" fill="${palette.muted}" font-size="9" letter-spacing="2">CAT.PROCESS / PID 09</text>
  ${cat(738, 76, 218)}
  <circle cx="940" cy="58" r="4" fill="${palette.acid}"/><text x="916" y="278" fill="${palette.acid}" font-size="9" letter-spacing="1">PURRING</text>
  <rect class="scan" x="38" y="0" width="936" height="2" fill="${palette.acid}" opacity=".12"/>
`);

const portrait = frame(`<rect width="240" height="220" rx="18" fill="${palette.panel}"/><path d="M20 40h200M20 80h200M20 120h200M20 160h200M40 20v180M80 20v180M120 20v180M160 20v180M200 20v180" stroke="#fff" opacity=".035"/><!-- Font Awesome Free cat icon: CC BY 4.0 -->${cat(35, 18, 170)}<text x="120" y="207" text-anchor="middle" fill="${palette.muted}" font-size="9" letter-spacing="2">CAT.OS / ONLINE</text>`, "0 0 240 220");

const divider = frame(`<rect x="0" y="14" width="1012" height="1" fill="${palette.line}"/><circle cx="18" cy="14.5" r="4" fill="${palette.amber}"/><path d="M34 14h72" stroke="${palette.acid}" stroke-width="2"/>`, "0 0 1012 30");

const plate = (index, title, signal) => frame(`<rect width="1012" height="74" rx="10" fill="${palette.panel}" stroke="${palette.line}"/><rect x="0" width="8" height="74" rx="4" fill="${palette.amber}"/><text x="32" y="30" fill="${palette.amber}" font-size="10" font-weight="700" letter-spacing="2">${index}</text><text x="32" y="54" fill="${palette.text}" font-size="22" font-weight="800" letter-spacing="-1">${title}</text><text x="980" y="43" text-anchor="end" fill="${palette.muted}" font-size="9" letter-spacing="2">${signal}</text>`, "0 0 1012 74");

const footer = frame(`<rect width="1012" height="132" rx="14" fill="${palette.panel}" stroke="${palette.line}"/><text x="44" y="56" fill="${palette.acid}" font-size="11" font-weight="700" letter-spacing="2">CAT.OS // SESSION ACTIVE</text><text x="44" y="88" fill="${palette.text}" font-size="20" font-weight="800">STAY CURIOUS. KEEP SHIPPING.</text>${cat(850, 14, 104)}<text x="970" y="112" text-anchor="end" fill="${palette.muted}" font-size="9">KAZE-CODER / 2026</text>`, "0 0 1012 132");

const files = {
  "banner.svg": banner,
  "portrait-cat.svg": portrait,
  "divider.svg": divider,
  "plate-profile.svg": plate("01 / PROFILE", "OPERATOR PROFILE", "IDENTITY LOADED"),
  "plate-modules.svg": plate("02 / MODULES", "MODULE REGISTRY", "16 MODULES ONLINE"),
  "plate-processes.svg": plate("03 / PROCESSES", "RUNNING PROCESSES", "4 SELECTED BUILDS"),
  "plate-activity.svg": plate("04 / ACTIVITY", "ACTIVITY LOGS", "SIGNAL NOMINAL"),
  "plate-network.svg": plate("05 / NETWORK", "NETWORK LINK", "CHANNELS OPEN"),
  "footer.svg": footer,
};

await Promise.all(Object.entries(files).map(([name, svg]) => writeFile(new URL(name, out), svg)));
console.log(`Generated ${Object.keys(files).length} Cat.OS assets.`);
