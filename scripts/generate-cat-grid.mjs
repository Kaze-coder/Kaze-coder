import { mkdir, writeFile } from "node:fs/promises";

const demo = process.argv.includes("--demo");
const user = process.env.GITHUB_USER || "Kaze-coder";
const token = process.env.GITHUB_TOKEN;
const out = new URL("../profile/", import.meta.url);

async function fetchCalendar() {
  if (!token) throw new Error("GITHUB_TOKEN is required unless --demo is used");
  const now = new Date();
  const from = new Date(now);
  from.setUTCFullYear(from.getUTCFullYear() - 1);
  const query = `query($login:String!,$from:DateTime!,$to:DateTime!){user(login:$login){contributionsCollection(from:$from,to:$to){contributionCalendar{totalContributions weeks{contributionDays{contributionCount date weekday}}}}}}`;
  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: { authorization: `Bearer ${token}`, "content-type": "application/json", "user-agent": "kaze-profile-cat-grid" },
    body: JSON.stringify({ query, variables: { login: user, from: from.toISOString(), to: now.toISOString() } }),
  });
  if (!response.ok) throw new Error(`GitHub API returned ${response.status}`);
  const payload = await response.json();
  if (payload.errors?.length) throw new Error(payload.errors.map(({ message }) => message).join("; "));
  const calendar = payload.data?.user?.contributionsCollection?.contributionCalendar;
  if (!calendar) throw new Error(`Contribution calendar not found for ${user}`);
  return calendar;
}

function demoCalendar() {
  return {
    totalContributions: 384,
    weeks: Array.from({ length: 53 }, (_, week) => ({
      contributionDays: Array.from({ length: 7 }, (_, weekday) => ({
        contributionCount: (week * 3 + weekday * 5) % 11 < 4 ? 0 : ((week + weekday) % 9) + 1,
        weekday,
        date: `2026-01-${String((week * 7 + weekday) % 28 + 1).padStart(2, "0")}`,
      })),
    })),
  };
}

const calendar = demo ? demoCalendar() : await fetchCalendar();
const max = Math.max(1, ...calendar.weeks.flatMap(({ contributionDays }) => contributionDays.map(({ contributionCount }) => contributionCount)));

function render(theme) {
  const dark = theme === "dark";
  const bg = dark ? "#10130f" : "#f4f0e6";
  const text = dark ? "#eee9dd" : "#22251f";
  const muted = dark ? "#858b7d" : "#6f746a";
  const empty = dark ? "#1c211a" : "#ddd9cd";
  const levels = dark ? [empty, "#34401e", "#657c2f", "#9fbd49", "#d8f06a"] : [empty, "#d9e6a4", "#b5cc65", "#879e3b", "#566d1d"];
  const cells = calendar.weeks.flatMap(({ contributionDays }, week) => contributionDays.map(({ contributionCount, weekday, date }) => {
    const level = contributionCount === 0 ? 0 : Math.min(4, Math.ceil((contributionCount / max) * 4));
    return `<rect x="${82 + week * 16}" y="${58 + weekday * 16}" width="12" height="12" rx="2" fill="${levels[level]}"><title>${contributionCount} contributions on ${date}</title></rect>`;
  })).join("");
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1012 218" role="img" aria-label="${calendar.totalContributions} contributions by ${user} with a walking cat">
<style>
text{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace}.paw{animation:paw .28s steps(2) infinite alternate}@keyframes paw{to{transform:translateY(-2px)}}@media(prefers-reduced-motion:reduce){.paw{animation:none}}
</style>
<rect width="1012" height="218" rx="14" fill="${bg}" stroke="${dark ? "#2b3028" : "#cbc7bb"}"/>
<text x="34" y="35" fill="${text}" font-size="11" font-weight="700" letter-spacing="1.5">CONTRIBUTION CAT / ${user.toUpperCase()}</text>
<text x="978" y="35" text-anchor="end" fill="${muted}" font-size="9">${calendar.totalContributions} SIGNALS / LAST 12 MONTHS</text>
${cells}
<g>
  <animateMotion dur="14s" repeatCount="indefinite" path="M72 0 H842"/>
  <g transform="translate(0 158)"><path d="M7 14 2 3l12 7c5-2 15-2 20 0l12-7-5 11c4 3 6 7 6 12 0 11-9 16-21 16S5 37 5 26c0-5 1-9 2-12Z" fill="${dark ? "#20251e" : "#c7c1b3"}" stroke="${muted}"/><circle cx="17" cy="24" r="2" fill="#d8f06a"/><circle cx="34" cy="24" r="2" fill="#d8f06a"/><path d="M42 35c15 5 17-7 10-11" fill="none" stroke="${muted}" stroke-width="3" stroke-linecap="round"/><path class="paw" d="M16 40v6m20-6v6" stroke="${muted}" stroke-width="3" stroke-linecap="round"/></g>
</g>
</svg>\n`;
}

await mkdir(out, { recursive: true });
await Promise.all([
  writeFile(new URL("cat-grid-dark.svg", out), render("dark")),
  writeFile(new URL("cat-grid-light.svg", out), render("light")),
]);
console.log(`Generated contribution cat for ${user}.`);
