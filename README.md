<div align="center">

<!-- ════════════════════════════════════════════════════════════════ -->
<!--   BANNER: SVG key-art style, dark CS2 palette                  -->
<!-- ════════════════════════════════════════════════════════════════ -->

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 300" width="100%">
  <defs>
    <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#0a0a0a"/>
      <stop offset="100%" stop-color="#1c1714"/>
    </linearGradient>
    <linearGradient id="glowL" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#c8a84b" stop-opacity="0.18"/>
      <stop offset="100%" stop-color="#c8a84b" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="glowR" x1="1" y1="0" x2="0" y2="0">
      <stop offset="0%" stop-color="#c8a84b" stop-opacity="0.12"/>
      <stop offset="100%" stop-color="#c8a84b" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="fg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#151211"/>
      <stop offset="100%" stop-color="#0a0a0a"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="900" height="300" fill="url(#sky)"/>

  <!-- Architectural silhouette — Dust2-like structures -->
  <!-- Far left building -->
  <rect x="0"   y="110" width="90"  height="190" fill="#111"/>
  <rect x="10"  y="90"  width="60"  height="30"  fill="#111"/>
  <rect x="20"  y="75"  width="40"  height="20"  fill="#111"/>
  <!-- Windows left building -->
  <rect x="18"  y="115" width="12"  height="16"  fill="#1e1a0e" opacity="0.9"/>
  <rect x="36"  y="115" width="12"  height="16"  fill="#1e1a0e" opacity="0.9"/>
  <rect x="54"  y="115" width="12"  height="16"  fill="#1e1a0e" opacity="0.9"/>
  <rect x="18"  y="145" width="12"  height="16"  fill="#1e1a0e" opacity="0.9"/>
  <rect x="36"  y="145" width="12"  height="16"  fill="#c8a84b" opacity="0.15"/>

  <!-- Mid-left building -->
  <rect x="95"  y="140" width="120" height="160" fill="#131313"/>
  <rect x="105" y="120" width="80"  height="25"  fill="#131313"/>
  <rect x="120" y="105" width="50"  height="20"  fill="#131313"/>
  <!-- Windows mid-left -->
  <rect x="104" y="148" width="14"  height="18"  fill="#c8a84b" opacity="0.12"/>
  <rect x="124" y="148" width="14"  height="18"  fill="#1e1a0e" opacity="0.8"/>
  <rect x="144" y="148" width="14"  height="18"  fill="#1e1a0e" opacity="0.8"/>
  <rect x="164" y="148" width="14"  height="18"  fill="#c8a84b" opacity="0.12"/>
  <rect x="104" y="176" width="14"  height="18"  fill="#1e1a0e" opacity="0.8"/>
  <rect x="144" y="176" width="14"  height="18"  fill="#c8a84b" opacity="0.10"/>

  <!-- CT-side arch / tunnel entrance center-left -->
  <rect x="225" y="155" width="80"  height="145" fill="#0e0e0e"/>
  <rect x="235" y="155" width="60"  height="20"  fill="#0e0e0e"/>
  <!-- Arch opening -->
  <rect x="248" y="175" width="34"  height="60"  fill="#060606"/>
  <rect x="225" y="145" width="80"  height="15"  fill="#1a1a1a"/>

  <!-- Long wall / catwalk -->
  <rect x="0"   y="240" width="900" height="8"   fill="#1a1818"/>
  <rect x="0"   y="248" width="900" height="52"  fill="#111010"/>

  <!-- Ground floor detail stripes -->
  <rect x="0"   y="240" width="900" height="2"   fill="#c8a84b" opacity="0.25"/>

  <!-- Right-side building -->
  <rect x="700" y="130" width="130" height="170" fill="#131313"/>
  <rect x="710" y="110" width="90"  height="25"  fill="#131313"/>
  <rect x="730" y="95"  width="55"  height="20"  fill="#131313"/>
  <!-- Windows right -->
  <rect x="712" y="140" width="14"  height="18"  fill="#1e1a0e" opacity="0.8"/>
  <rect x="734" y="140" width="14"  height="18"  fill="#c8a84b" opacity="0.14"/>
  <rect x="756" y="140" width="14"  height="18"  fill="#1e1a0e" opacity="0.8"/>
  <rect x="778" y="140" width="14"  height="18"  fill="#c8a84b" opacity="0.10"/>
  <rect x="712" y="168" width="14"  height="18"  fill="#1e1a0e" opacity="0.8"/>
  <rect x="756" y="168" width="14"  height="18"  fill="#1e1a0e" opacity="0.8"/>

  <!-- Far right building -->
  <rect x="840" y="100" width="60"  height="200" fill="#111"/>
  <rect x="845" y="120" width="14"  height="16"  fill="#c8a84b" opacity="0.13"/>
  <rect x="867" y="120" width="14"  height="16"  fill="#1e1a0e" opacity="0.9"/>

  <!-- Glow overlays from sides (simulate lamp posts) -->
  <rect x="0"   y="0"   width="300" height="300" fill="url(#glowL)"/>
  <rect x="600" y="0"   width="300" height="300" fill="url(#glowR)"/>

  <!-- Smoke particles — subtle circles at various opacities -->
  <circle cx="420" cy="180" r="55" fill="#888" opacity="0.04"/>
  <circle cx="460" cy="155" r="40" fill="#999" opacity="0.03"/>
  <circle cx="390" cy="200" r="35" fill="#777" opacity="0.04"/>
  <circle cx="510" cy="190" r="45" fill="#888" opacity="0.03"/>

  <!-- === CS2 PRO PLAYER SILHOUETTES === -->
  <!-- CT - left, crouching behind cover -->
  <!-- body -->
  <rect x="310" y="195" width="22"  height="40"  fill="#1e2e40"/>
  <!-- head -->
  <ellipse cx="321" cy="188" rx="10" ry="10"     fill="#d4a97a"/>
  <!-- helmet -->
  <rect x="312" y="177" width="18"  height="12"  fill="#243b55" rx="2"/>
  <!-- vest -->
  <rect x="308" y="200" width="26"  height="26"  fill="#243b55"/>
  <!-- legs -->
  <rect x="310" y="232" width="9"   height="16"  fill="#1a2a3a"/>
  <rect x="323" y="232" width="9"   height="16"  fill="#1a2a3a"/>
  <!-- rifle (AK47 shape going right) -->
  <rect x="330" y="207" width="52"  height="5"   fill="#555" rx="1"/>
  <rect x="378" y="204" width="8"   height="4"   fill="#444"/>
  <rect x="330" y="207" width="14"  height="9"   fill="#444" rx="1"/>
  <!-- muzzle flash -->
  <ellipse cx="388" cy="209" rx="5" ry="3"       fill="#ffcc44" opacity="0.85"/>
  <ellipse cx="394" cy="209" rx="3" ry="2"       fill="#ffffff" opacity="0.7"/>

  <!-- T - right, standing -->
  <!-- body -->
  <rect x="556" y="188" width="22"  height="48"  fill="#3b2a1a"/>
  <!-- head -->
  <ellipse cx="567" cy="181" rx="10" ry="10"     fill="#d4a97a"/>
  <!-- kufiya / headwrap -->
  <rect x="557" y="168" width="20"  height="16"  fill="#5c3d1e" rx="2"/>
  <rect x="555" y="172" width="4"   height="22"  fill="#5c3d1e"/>
  <!-- vest -->
  <rect x="553" y="194" width="28"  height="28"  fill="#4a3020"/>
  <!-- legs -->
  <rect x="556" y="232" width="9"   height="16"  fill="#2e1e0e"/>
  <rect x="571" y="232" width="9"   height="16"  fill="#2e1e0e"/>
  <!-- rifle going left -->
  <rect x="500" y="200" width="54"  height="5"   fill="#555" rx="1"/>
  <rect x="500" y="197" width="8"   height="4"   fill="#444"/>
  <rect x="540" y="200" width="14"  height="9"   fill="#444" rx="1"/>

  <!-- Crosshair dot center between them (fight zone) -->
  <line x1="438" y1="197" x2="450" y2="197" stroke="#c8a84b" stroke-width="1" opacity="0.6"/>
  <line x1="444" y1="191" x2="444" y2="203" stroke="#c8a84b" stroke-width="1" opacity="0.6"/>
  <circle cx="444" cy="197" r="2" fill="none" stroke="#c8a84b" stroke-width="0.8" opacity="0.5"/>

  <!-- Bomb on ground -->
  <rect x="432" y="238" width="24"  height="9"   fill="#c8a84b" rx="2"/>
  <rect x="436" y="233" width="16"  height="6"   fill="#c8a84b" rx="1"/>
  <rect x="443" y="229" width="4"   height="5"   fill="#c8a84b"/>
  <!-- bomb LED blink -->
  <circle cx="444" cy="240" r="2" fill="#ff3333"/>

  <!-- Muzzle smoke trail -->
  <circle cx="400" cy="207" r="4" fill="#aaa" opacity="0.08"/>
  <circle cx="410" cy="204" r="5" fill="#bbb" opacity="0.06"/>
  <circle cx="422" cy="202" r="6" fill="#bbb" opacity="0.05"/>

  <!-- ═══════ HUD OVERLAY TOP ═══════ -->
  <!-- HUD bar -->
  <rect x="0" y="0" width="900" height="36" fill="#0a0a0a" opacity="0.85"/>
  <line x1="0" y1="36" x2="900" y2="36" stroke="#c8a84b" stroke-width="0.8" opacity="0.5"/>

  <!-- CT score pill -->
  <rect x="18" y="8" width="56" height="20" rx="3" fill="#243b55" opacity="0.9"/>
  <text x="46" y="22" font-family="monospace" font-size="13" fill="#5b9bd5" text-anchor="middle" font-weight="bold">CT  7</text>

  <!-- Timer center -->
  <text x="450" y="24" font-family="monospace" font-size="15" fill="#e0e0e0" text-anchor="middle" font-weight="bold">1:23</text>
  <text x="450" y="10" font-family="monospace" font-size="8" fill="#888" text-anchor="middle">de_dust2</text>

  <!-- T score pill -->
  <rect x="826" y="8" width="56" height="20" rx="3" fill="#3b1a08" opacity="0.9"/>
  <text x="854" y="22" font-family="monospace" font-size="13" fill="#c87941" text-anchor="middle" font-weight="bold">T   5</text>

  <!-- HP / Armor left -->
  <text x="90" y="18" font-family="monospace" font-size="10" fill="#c8a84b">♥ 94</text>
  <text x="90" y="30" font-family="monospace" font-size="9"  fill="#666">AK-47</text>

  <!-- Money right -->
  <text x="780" y="18" font-family="monospace" font-size="10" fill="#4caf8a">$3,400</text>
  <text x="780" y="30" font-family="monospace" font-size="9"  fill="#666">AWP</text>

  <!-- ═══════ MAIN TITLE ═══════ -->
  <text x="450" y="148" font-family="'Share Tech Mono', 'Courier New', monospace" font-size="48"
    fill="#c8a84b" text-anchor="middle" font-weight="bold" letter-spacing="4">COUNTER-STRIKE 2</text>

  <!-- Subtitle / tagline -->
  <text x="450" y="172" font-family="'Share Tech Mono', 'Courier New', monospace" font-size="13"
    fill="#888888" text-anchor="middle" letter-spacing="2">YOURUSERNAME  ·  DEVELOPER  ·  ENTRY FRAGGER</text>

  <!-- Bottom accent line -->
  <rect x="300" y="182" width="300" height="1" fill="#c8a84b" opacity="0.4"/>
</svg>

<br/>

<!-- Typing animation — Share Tech Mono for authentic terminal feel -->
<a href="https://git.io/typing-svg">
  <img src="https://readme-typing-svg.demolab.com?font=Share+Tech+Mono&size=16&duration=2000&pause=600&color=C8A84B&center=true&vCenter=true&width=560&lines=%3E+cs2.exe+launched+%E2%80%94+OK;%3E+Connecting+to+game+server...;%3E+YOURUSERNAME+joined+CT+side;%3E+buy_menu%3A+TypeScript+%5B%245700%5D+%E2%80%94+PURCHASED;%3E+Round+start.+Good+luck+have+fun." alt="typing" />
</a>

<br/><br/>

<!-- Rank badges — minimal, no borders, consistent palette -->
![](https://img.shields.io/badge/Global%20Elite-C8A84B?style=flat-square&labelColor=111&label=★%20RANK)
&nbsp;
![](https://img.shields.io/badge/2.47-ff5252?style=flat-square&labelColor=111&label=K%2FD)
&nbsp;
![](https://img.shields.io/badge/68%25-C8A84B?style=flat-square&labelColor=111&label=HS)
&nbsp;
![](https://img.shields.io/badge/63%25-4caf8a?style=flat-square&labelColor=111&label=WIN%20RATE)
&nbsp;
![](https://img.shields.io/badge/4200%2B-5b8dee?style=flat-square&labelColor=111&label=HOURS)

</div>

<br/>

---

<!-- ════════════════════════════════════════════════════════════════ -->
<!--   PLAYER INFO                                                   -->
<!-- ════════════════════════════════════════════════════════════════ -->

<img align="right" src="https://media2.giphy.com/media/TgvOsOZ91BCdp2Mivs/200.gif" width="280" alt="CS2 gameplay"/>

```
ALIAS      :  YourGamertag
NAME       :  Your Name
LOCATION   :  Indonesia  🇮🇩
ROLE       :  Full-Stack Developer
PLAYSTYLE  :  Entry Fragger  ×  Code Architect

PRIMARY    :  TypeScript  ·  React  ·  Node.js
SECONDARY  :  Python  ·  Go
UTILITY    :  Docker  ·  PostgreSQL  ·  Redis
AWP        :  Linux  ·  Bash  ·  Git

STATUS     :  🟢 Online — Searching ranked match
QUOTE      :  "Rush B. Don't stop. Commit to prod."
```

<br clear="right"/>

---

<!-- ════════════════════════════════════════════════════════════════ -->
<!--   WEAPON LOADOUT — TECH STACK                                   -->
<!-- ════════════════════════════════════════════════════════════════ -->

### Weapon Loadout

<table>
<tr>
<td valign="top" width="25%">

**Rifles — Primary**

![TypeScript](https://img.shields.io/badge/TypeScript-141414?style=flat-square&logo=typescript&logoColor=3178C6)
![JavaScript](https://img.shields.io/badge/JavaScript-141414?style=flat-square&logo=javascript&logoColor=F7DF1E)
![Python](https://img.shields.io/badge/Python-141414?style=flat-square&logo=python&logoColor=3776AB)
![Go](https://img.shields.io/badge/Go-141414?style=flat-square&logo=go&logoColor=00ADD8)

</td>
<td valign="top" width="25%">

**Pistols — Frontend**

![React](https://img.shields.io/badge/React-141414?style=flat-square&logo=react&logoColor=61DAFB)
![Next.js](https://img.shields.io/badge/Next.js-141414?style=flat-square&logo=nextdotjs&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind-141414?style=flat-square&logo=tailwind-css&logoColor=38B2AC)
![Vite](https://img.shields.io/badge/Vite-141414?style=flat-square&logo=vite&logoColor=646CFF)

</td>
<td valign="top" width="25%">

**Grenades — Backend**

![Node.js](https://img.shields.io/badge/Node.js-141414?style=flat-square&logo=nodedotjs&logoColor=339933)
![Express](https://img.shields.io/badge/Express-141414?style=flat-square&logo=express&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-141414?style=flat-square&logo=prisma&logoColor=white)
![GraphQL](https://img.shields.io/badge/GraphQL-141414?style=flat-square&logo=graphql&logoColor=E10098)

</td>
<td valign="top" width="25%">

**AWP — Infrastructure**

![Docker](https://img.shields.io/badge/Docker-141414?style=flat-square&logo=docker&logoColor=2496ED)
![PostgreSQL](https://img.shields.io/badge/Postgres-141414?style=flat-square&logo=postgresql&logoColor=4169E1)
![Redis](https://img.shields.io/badge/Redis-141414?style=flat-square&logo=redis&logoColor=DC382D)
![Linux](https://img.shields.io/badge/Linux-141414?style=flat-square&logo=linux&logoColor=FCC624)

</td>
</tr>
</table>

---

<!-- ════════════════════════════════════════════════════════════════ -->
<!--   GITHUB STATS                                                  -->
<!-- ════════════════════════════════════════════════════════════════ -->

### End-of-Round Scoreboard

<div align="center">

<img src="https://media1.giphy.com/media/1eqRJ7Ww2TTNtFbz3k/200.gif" width="56" alt="CS2 pro play"/>

<br/><br/>

<img height="170" src="https://github-readme-stats.vercel.app/api?username=YOURUSERNAME&show_icons=true&bg_color=0d0d0d&border_color=C8A84B&title_color=C8A84B&icon_color=C8A84B&text_color=cccccc&ring_color=C8A84B&include_all_commits=true&count_private=true"/>
&nbsp;
<img height="170" src="https://github-readme-stats.vercel.app/api/top-langs/?username=YOURUSERNAME&layout=compact&langs_count=6&bg_color=0d0d0d&border_color=C8A84B&title_color=C8A84B&text_color=cccccc"/>

<br/><br/>

<img src="https://github-readme-streak-stats.herokuapp.com/?user=YOURUSERNAME&background=0d0d0d&border=C8A84B&stroke=C8A84B&ring=C8A84B&fire=ff5252&currStreakLabel=C8A84B&sideLabels=888888&dates=555555&currStreakNum=ffffff&sideNums=cccccc"/>

</div>

---

<!-- ════════════════════════════════════════════════════════════════ -->
<!--   ACTIVITY GRAPH                                                -->
<!-- ════════════════════════════════════════════════════════════════ -->

### Radar — Commit Activity

<div align="center">
<img src="https://github-readme-activity-graph.vercel.app/graph?username=YOURUSERNAME&bg_color=0d0d0d&color=C8A84B&line=C8A84B&point=ffffff&area=true&area_color=C8A84B&border_color=C8A84B" width="95%"/>
</div>

---

<!-- ════════════════════════════════════════════════════════════════ -->
<!--   SNAKE                                                         -->
<!-- ════════════════════════════════════════════════════════════════ -->

### Contribution Snake

<div align="center">
<img src="https://raw.githubusercontent.com/YOURUSERNAME/YOURUSERNAME/output/github-contribution-grid-snake-dark.svg" width="95%"/>
</div>

<details>
<summary><sub>Enable the snake →</sub></summary>
Add <a href="https://github.com/platane/snk">platane/snk</a> as a GitHub Action, then push to trigger.
</details>

---

<!-- ════════════════════════════════════════════════════════════════ -->
<!--   ACTIVE OPS / PROJECTS                                        -->
<!-- ════════════════════════════════════════════════════════════════ -->

### Active Operations

<table>
<tr>
<td width="50%" valign="top">

#### 🔴 &nbsp;`de_projectone`
> Real-time fullstack web app — T-side push

`Next.js` &nbsp;·&nbsp; `Socket.io` &nbsp;·&nbsp; `PostgreSQL` &nbsp;·&nbsp; `Docker`

![](https://img.shields.io/badge/BOMB%20PLANTED-TICKING-ff5252?style=flat-square&labelColor=1c1c1c)
&nbsp;[![](https://img.shields.io/badge/REPO-C8A84B?style=flat-square&logo=github&logoColor=black)](https://github.com/YOURUSERNAME/repo-one)

</td>
<td width="50%" valign="top">

#### 🔵 &nbsp;`de_projecttwo`
> API gateway — auth, rate limiting, monitoring

`Node.js` &nbsp;·&nbsp; `Redis` &nbsp;·&nbsp; `JWT` &nbsp;·&nbsp; `Express`

![](https://img.shields.io/badge/BOMB%20DEFUSED-SECURED-4caf8a?style=flat-square&labelColor=1c1c1c)
&nbsp;[![](https://img.shields.io/badge/REPO-C8A84B?style=flat-square&logo=github&logoColor=black)](https://github.com/YOURUSERNAME/repo-two)

</td>
</tr>
<tr>
<td width="50%" valign="top">

#### 🟡 &nbsp;`cs_projectthree`
> Mobile app — offline-first architecture

`React Native` &nbsp;·&nbsp; `SQLite` &nbsp;·&nbsp; `Zustand`

![](https://img.shields.io/badge/STATUS-IN%20PROGRESS-C8A84B?style=flat-square&labelColor=1c1c1c)
&nbsp;[![](https://img.shields.io/badge/REPO-C8A84B?style=flat-square&logo=github&logoColor=black)](https://github.com/YOURUSERNAME/repo-three)

</td>
<td width="50%" valign="top">

#### ⚪ &nbsp;`aim_projectfour`
> CLI tool — developer productivity automation

`Python` &nbsp;·&nbsp; `Click` &nbsp;·&nbsp; `Rich` &nbsp;·&nbsp; `Typer`

![](https://img.shields.io/badge/STATUS-RELEASED%20✓-4caf8a?style=flat-square&labelColor=1c1c1c)
&nbsp;[![](https://img.shields.io/badge/REPO-C8A84B?style=flat-square&logo=github&logoColor=black)](https://github.com/YOURUSERNAME/repo-four)

</td>
</tr>
</table>

---

<!-- ════════════════════════════════════════════════════════════════ -->
<!--   TROPHIES                                                      -->
<!-- ════════════════════════════════════════════════════════════════ -->

### Trophy Case

<div align="center">
<img src="https://github-profile-trophy.vercel.app/?username=YOURUSERNAME&theme=darkhub&no-frame=true&no-bg=true&column=7&margin-w=8"/>
</div>

---

<!-- ════════════════════════════════════════════════════════════════ -->
<!--   CONTACT                                                       -->
<!-- ════════════════════════════════════════════════════════════════ -->

### Team Comms

<div align="center">

<img src="https://media2.giphy.com/media/M6wjoObGUeWeiDbk0W/200.gif" width="120" alt="CS2 ENCE"/>

<br/><br/>

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/YOURLINKEDIN)
&nbsp;
[![X / Twitter](https://img.shields.io/badge/X-000000?style=for-the-badge&logo=x&logoColor=white)](https://twitter.com/YOURTWITTER)
&nbsp;
[![Portfolio](https://img.shields.io/badge/Portfolio-C8A84B?style=for-the-badge&logo=About.me&logoColor=black)](https://yourwebsite.com)
&nbsp;
[![Gmail](https://img.shields.io/badge/Gmail-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:your@email.com)
&nbsp;
[![Discord](https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white)](https://discord.gg/YOURDISCORD)

<br/><br/>

![](https://komarev.com/ghpvc/?username=YOURUSERNAME&color=C8A84B&style=flat-square&label=SPECTATORS)

<br/>

<img src="https://media1.giphy.com/media/BoWWC336ETocBKGAD5/giphy.gif" width="380" alt="CS2 BLAST Premier"/>

<br/>

> _★ &nbsp; GG WP — Thanks for spectating. See you next match. &nbsp; ★_

</div>

<br/>

---

<div align="center">
<sub>
Counter-Strike 2 · de_github.info · Bomb has been planted
</sub>
</div>
