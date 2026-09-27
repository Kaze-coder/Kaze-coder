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
  .tail { animation: tail 3.2s ease-in-out infinite; transform-origin: 267px 213px; }
  @keyframes scan { from { transform: translateY(-24px) } to { transform: translateY(344px) } }
  @keyframes blink { 0%, 46%, 50%, 100% { transform: scaleY(1) } 48% { transform: scaleY(.08) } }
  @keyframes tail { 0%, 100% { transform: rotate(-5deg) } 50% { transform: rotate(8deg) } }
  @media (prefers-reduced-motion: reduce) { .scan, .blink, .tail { animation: none } }
`;

const frame = (body, viewBox = "0 0 1012 320") => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}" role="img">
<style>${style}</style>${body}</svg>\n`;

const cat = (x, y, scale = 1) => `<g transform="translate(${x} ${y}) scale(${scale})">
  <path d="M26 56 11 12l48 27c13-5 55-5 68 0l48-27-15 44c14 16 21 35 21 57 0 50-38 73-88 73S5 163 5 113c0-22 7-41 21-57Z" fill="#20251e" stroke="${palette.muted}" stroke-width="2"/>
  <path d="m22 26 30 19-23 11Zm142 0-30 19 23 11Z" fill="${palette.amber}" opacity=".72"/>
  <g class="blink"><path d="M37 92c13-11 30-10 40 3-11 16-33 15-40-3Zm72 3c10-13 27-14 40-3-7 18-29 19-40 3Z" fill="${palette.acid}"/><path d="M58 85v20m70-20v20" stroke="${palette.bg}" stroke-width="5" stroke-linecap="round"/></g>
  <path d="m93 116-9 8 9 6 9-6Z" fill="${palette.amber}"/><path d="M93 130c-4 13-17 15-26 7m26-7c4 13 17 15 26 7" fill="none" stroke="${palette.muted}" stroke-width="2" stroke-linecap="round"/>
  <path class="tail" d="M157 151c31 9 37-15 21-27" fill="none" stroke="${palette.muted}" stroke-width="6" stroke-linecap="round"/>
</g>`;

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
  ${cat(726, 78, 1.18)}
  <circle cx="940" cy="58" r="4" fill="${palette.acid}"/><text x="916" y="278" fill="${palette.acid}" font-size="9" letter-spacing="1">PURRING</text>
  <rect class="scan" x="38" y="0" width="936" height="2" fill="${palette.acid}" opacity=".12"/>
`);

const portrait = frame(`<rect width="240" height="220" rx="18" fill="${palette.panel}"/><path d="M20 40h200M20 80h200M20 120h200M20 160h200M40 20v180M80 20v180M120 20v180M160 20v180M200 20v180" stroke="#fff" opacity=".035"/>${cat(28, 13, 1)}<text x="120" y="207" text-anchor="middle" fill="${palette.muted}" font-size="9" letter-spacing="2">CAT.OS / ONLINE</text>`, "0 0 240 220");

const divider = frame(`<rect x="0" y="14" width="1012" height="1" fill="${palette.line}"/><circle cx="18" cy="14.5" r="4" fill="${palette.amber}"/><path d="M34 14h72" stroke="${palette.acid}" stroke-width="2"/>`, "0 0 1012 30");

const plate = (index, title, signal) => frame(`<rect width="1012" height="74" rx="10" fill="${palette.panel}" stroke="${palette.line}"/><rect x="0" width="8" height="74" rx="4" fill="${palette.amber}"/><text x="32" y="30" fill="${palette.amber}" font-size="10" font-weight="700" letter-spacing="2">${index}</text><text x="32" y="54" fill="${palette.text}" font-size="22" font-weight="800" letter-spacing="-1">${title}</text><text x="980" y="43" text-anchor="end" fill="${palette.muted}" font-size="9" letter-spacing="2">${signal}</text>`, "0 0 1012 74");

const footer = frame(`<rect width="1012" height="132" rx="14" fill="${palette.panel}" stroke="${palette.line}"/><text x="44" y="56" fill="${palette.acid}" font-size="11" font-weight="700" letter-spacing="2">CAT.OS // SESSION ACTIVE</text><text x="44" y="88" fill="${palette.text}" font-size="20" font-weight="800">STAY CURIOUS. KEEP SHIPPING.</text>${cat(842, 12, .55)}<text x="970" y="112" text-anchor="end" fill="${palette.muted}" font-size="9">KAZE-CODER / 2026</text>`, "0 0 1012 132");

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
