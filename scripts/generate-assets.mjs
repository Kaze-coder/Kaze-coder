import { mkdir, writeFile } from "node:fs/promises";

const out = new URL("../assets/", import.meta.url);
await mkdir(out, { recursive: true });

const avatarResponse = await fetch("https://avatars.githubusercontent.com/u/206677812?v=4&s=512", {
  headers: { "user-agent": "kaze-profile-assets" },
});
if (!avatarResponse.ok) throw new Error(`Avatar download failed with ${avatarResponse.status}`);
const avatarMime = avatarResponse.headers.get("content-type")?.split(";")[0] || "image/png";
const avatarData = Buffer.from(await avatarResponse.arrayBuffer()).toString("base64");
const avatarHref = `data:${avatarMime};base64,${avatarData}`;

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
  .avatar-float { animation: avatar-float 4s ease-in-out infinite; }
  .avatar-orbit { animation: orbit 12s linear infinite; transform-box: fill-box; transform-origin: center; }
  .avatar-scan { animation: avatar-scan 3.4s linear infinite; }
  @keyframes scan { from { transform: translateY(-24px) } to { transform: translateY(344px) } }
  @keyframes avatar-float { 0%, 100% { transform: translateY(0) } 50% { transform: translateY(-5px) } }
  @keyframes orbit { to { transform: rotate(360deg) } }
  @keyframes avatar-scan { from { transform: translateY(0) } to { transform: translateY(var(--travel)) } }
  @media (prefers-reduced-motion: reduce) { .scan, .avatar-float, .avatar-orbit, .avatar-scan { animation: none } }
`;

const frame = (body, viewBox = "0 0 1012 320") => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}" role="img">
<style>${style}</style>${body}</svg>\n`;

const avatar = (x, y, size, id, withScan = false) => {
  const centerX = x + size / 2;
  const centerY = y + size / 2;
  const radius = size / 2 - 7;
  return `<defs><clipPath id="${id}-clip"><circle cx="${centerX}" cy="${centerY}" r="${radius}"/></clipPath><filter id="${id}-glow" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="7" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>
  <g class="avatar-float">
    <circle cx="${centerX}" cy="${centerY}" r="${radius + 6}" fill="none" stroke="${palette.amber}" stroke-width="2" opacity=".28" filter="url(#${id}-glow)"/>
    <image href="${avatarHref}" x="${x + 7}" y="${y + 7}" width="${size - 14}" height="${size - 14}" preserveAspectRatio="xMidYMid slice" clip-path="url(#${id}-clip)"/>
    <circle class="avatar-orbit" cx="${centerX}" cy="${centerY}" r="${radius + 3}" fill="none" stroke="${palette.acid}" stroke-width="3" stroke-dasharray="18 36 4 42" opacity=".9"/>
    ${withScan ? `<g clip-path="url(#${id}-clip)"><rect class="avatar-scan" style="--travel:${size}px" x="${x}" y="${y}" width="${size}" height="3" fill="${palette.acid}" opacity=".42"/></g>` : ""}
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
  ${avatar(738, 66, 220, "banner-avatar", true)}
  <circle cx="940" cy="58" r="4" fill="${palette.acid}"/><text x="916" y="278" fill="${palette.acid}" font-size="9" letter-spacing="1">PURRING</text>
  <rect class="scan" x="38" y="0" width="936" height="2" fill="${palette.acid}" opacity=".12"/>
`);

const portrait = frame(`<rect width="240" height="220" rx="18" fill="${palette.panel}"/><path d="M20 40h200M20 80h200M20 120h200M20 160h200M40 20v180M80 20v180M120 20v180M160 20v180M200 20v180" stroke="#fff" opacity=".035"/>${avatar(27, 10, 186, "portrait-avatar")}<text x="120" y="210" text-anchor="middle" fill="${palette.muted}" font-size="9" letter-spacing="2">CAT.OS / ONLINE</text>`, "0 0 240 220");

const divider = frame(`<rect x="0" y="14" width="1012" height="1" fill="${palette.line}"/><circle cx="18" cy="14.5" r="4" fill="${palette.amber}"/><path d="M34 14h72" stroke="${palette.acid}" stroke-width="2"/>`, "0 0 1012 30");

const plate = (index, title, signal) => frame(`<rect width="1012" height="74" rx="10" fill="${palette.panel}" stroke="${palette.line}"/><rect x="0" width="8" height="74" rx="4" fill="${palette.amber}"/><text x="32" y="30" fill="${palette.amber}" font-size="10" font-weight="700" letter-spacing="2">${index}</text><text x="32" y="54" fill="${palette.text}" font-size="22" font-weight="800" letter-spacing="-1">${title}</text><text x="980" y="43" text-anchor="end" fill="${palette.muted}" font-size="9" letter-spacing="2">${signal}</text>`, "0 0 1012 74");

const footer = frame(`<rect width="1012" height="132" rx="14" fill="${palette.panel}" stroke="${palette.line}"/><text x="44" y="56" fill="${palette.acid}" font-size="11" font-weight="700" letter-spacing="2">CAT.OS // SESSION ACTIVE</text><text x="44" y="88" fill="${palette.text}" font-size="20" font-weight="800">STAY CURIOUS. KEEP SHIPPING.</text>${avatar(858, 15, 92, "footer-avatar")}<text x="970" y="112" text-anchor="end" fill="${palette.muted}" font-size="9">KAZE-CODER / 2026</text>`, "0 0 1012 132");

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
