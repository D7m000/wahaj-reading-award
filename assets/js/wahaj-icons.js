/* ============================================================
   Wahaj — Hand-drawn Icon System (Official v1.0 · 2026)
   63 icons from the Wahaj brand identity.
   Style: single 2.4px stroke · rounded caps · warm hand-drawn feel
   Colors: #92418F purple primary · #ffcc05 gold sparkle · #34C2EE cyan dot
   ============================================================ */
(function () {
  "use strict";
  // هوية موحّدة: كل الرسوم اليدوية أحادية اللون تتبع لون النص (currentColor)،
  // فتصير خمرية على الخلفيات الفاتحة وبيضاء على الداكنة — منسجمةً مع النقوش.
  const P = "currentColor",
    G = "currentColor",
    C = "currentColor";
  const WJ_MAROON = "#B03269";
  const spark = (x, y, s, color) =>
    `<path d="M${x} ${y - s} L${x + s * 0.35} ${y - s * 0.35} L${x + s} ${y} L${x + s * 0.35} ${y + s * 0.35} L${x} ${y + s} L${x - s * 0.35} ${y + s * 0.35} L${x - s} ${y} L${x - s * 0.35} ${y - s * 0.35} Z" fill="${color}" stroke="none"/>`;
  const dot = (x, y, r, color) =>
    `<circle cx="${x}" cy="${y}" r="${r}" fill="${color}" stroke="none"/>`;

  // The official Wahaj icon library (63 icons)
  const ICON = {
    // ---- main sections ----
    home: {
      p: `<path d="M9 23.5 L24 11 L39 23.5"/><path d="M13 21.5 V36.5 a1.5 1.5 0 0 0 1.5 1.5 H33.5 a1.5 1.5 0 0 0 1.5 -1.5 V21.5"/><path d="M20.5 38 V30 a3.5 3.5 0 0 1 7 0 V38"/>`,
      a: spark(33, 15, 3.2, G),
    },
    about: {
      p: `<circle cx="24" cy="20" r="8.5"/><path d="M18.5 27.5 L16.5 38 L24 33.5 L31.5 38 L29.5 27.5"/>`,
      a: spark(24, 20, 3, G),
    },
    paths: {
      p: `<path d="M14 33 V26.5 a5.5 5.5 0 0 1 5.5 -5.5 H28.5 a5.5 5.5 0 0 0 5.5 -5.5 V10.5"/><circle cx="14" cy="37" r="3" fill="currentColor" stroke="none"/><circle cx="34" cy="10.5" r="3.4"/>`,
      a: "",
    },
    products: {
      p: `<path d="M11 18 h26 v5 h-26 Z"/><path d="M13 23 v14 a1.5 1.5 0 0 0 1.5 1.5 h19 a1.5 1.5 0 0 0 1.5 -1.5 v-14"/><path d="M24 18 V38.5"/><path d="M24 18 c-1.4 -4.2 -7.5 -4.2 -7.5 -1 c0 2.4 4.6 1 7.5 1 c2.9 0 8.5 1.4 8.5 -1 c0 -3.2 -6.1 -3.2 -8.5 1"/>`,
      a: dot(24, 20.5, 1.6, G),
    },
    media: {
      p: `<path d="M12.5 21 L31 13.5 V34 L12.5 27 Z"/><path d="M12.5 21 H10 a1.5 1.5 0 0 0 -1.5 1.5 V26 a1.5 1.5 0 0 0 1.5 1.5 H12.5"/><path d="M17 28.5 V33 a2.2 2.2 0 0 0 4.4 0 V30"/>`,
      a: `<path d="M35 18 a8 8 0 0 1 0 12" stroke="${C}"/>`,
    },
    governance: {
      p: `<path d="M24 13 V35"/><path d="M16.5 35 H31.5"/><path d="M13 18 H35"/><path d="M13 18 L9 27 H17 Z"/><path d="M35 18 L31 27 H39 Z"/>`,
      a: dot(24, 13, 2.3, G),
    },
    satisfaction: {
      p: `<circle cx="23" cy="25" r="12.5"/><path d="M18 29 q5 4 10 0"/><path d="M19.5 22.5 h0.01"/><path d="M27 22.5 h0.01"/>`,
      a: spark(35, 13, 3, G),
    },
    contact: {
      p: `<path d="M11 16 a3 3 0 0 1 3 -3 H34 a3 3 0 0 1 3 3 V27 a3 3 0 0 1 -3 3 H21 L14 36.5 V30 a3 3 0 0 1 -3 -3 Z"/>`,
      a: dot(18, 21.5, 1.5, C) + dot(24, 21.5, 1.5, G) + dot(30, 21.5, 1.5, C),
    },
    start: {
      p: `<path d="M24 9 C30 13.5 31 22 27.5 28 H20.5 C17 22 18 13.5 24 9 Z"/><circle cx="24" cy="19" r="3"/><path d="M20.5 28 L16.5 33 L20.5 31.5"/><path d="M27.5 28 L31.5 33 L27.5 31.5"/>`,
      a: `<path d="M21.5 33 L24 39 L26.5 33" stroke="${G}"/>`,
    },
    // ---- home submenu ----
    challenge: {
      p: `<path d="M17 12 H31 V18 a7 7 0 0 1 -14 0 Z"/><path d="M17 14 H13.5 a3.2 3.2 0 0 0 6 1.5"/><path d="M31 14 H34.5 a3.2 3.2 0 0 1 -6 1.5"/><path d="M24 25 V30"/><path d="M19 38 H29"/><path d="M21.5 38 V34 H26.5 V38"/>`,
      a: spark(24, 15, 2.6, G),
    },
    introVideo: {
      p: `<rect x="9" y="13" width="30" height="22" rx="4"/><path d="M21 20.5 L29 24 L21 27.5 Z"/>`,
      a: `<path d="M21 20.5 L29 24 L21 27.5 Z" fill="${C}" stroke="none"/>`,
    },
    news: {
      p: `<path d="M11 15 H32 V36 a2 2 0 0 1 -2 2 H13 a2 2 0 0 1 -2 -2 Z"/><path d="M32 19 H36 V35 a2 2 0 0 1 -4 0"/><path d="M15 20 H22 V26 H15 Z"/><path d="M26 20 H28 M26 24 H28"/><path d="M15 30 H28 M15 33.5 H24"/>`,
      a: `<path d="M15 20 H22 V26 H15 Z" fill="${G}" fill-opacity="0.25" stroke="${P}"/>`,
    },
    calendar: {
      p: `<rect x="9.5" y="14" width="29" height="24.5" rx="3"/><path d="M9.5 21.5 H38.5"/><path d="M17 10.5 V17"/><path d="M31 10.5 V17"/><path d="M16 28 h4 M23 28 h4 M30 28 h2"/>`,
      a: dot(31.5, 28, 2.4, G),
    },
    partners: {
      p: `<circle cx="19" cy="24" r="8"/><circle cx="29" cy="24" r="8"/>`,
      a: spark(24, 24, 3, G),
    },
    // ---- about wahaj ----
    story: {
      p: `<path d="M24 15.5 C20 12.5 14.5 12 10 14 V35 C14.5 33 20 33.5 24 36.5"/><path d="M24 15.5 C28 12.5 33.5 12 38 14 V35 C33.5 33 28 33.5 24 36.5"/><path d="M24 15.5 V36.5"/>`,
      a: spark(31, 10, 2.8, G),
    },
    vision: {
      p: `<path d="M9 24 C14 17 34 17 39 24 C34 31 14 31 9 24 Z"/><circle cx="24" cy="24" r="4.5"/>`,
      a: spark(34, 14, 2.8, C),
    },
    mission: {
      p: `<path d="M38 11 L9.5 22 L21 26 L25 37.5 Z"/><path d="M38 11 L21 26"/>`,
      a: dot(21, 26, 1.6, G),
    },
    goals: {
      p: `<circle cx="22" cy="26" r="12"/><circle cx="22" cy="26" r="6"/><circle cx="22" cy="26" r="1.3" fill="${P}" stroke="none"/>`,
      a: `<path d="M22 26 L36 12" stroke="${C}"/><path d="M31 12 H36.5 V17.5" stroke="${C}"/>`,
    },
    rocket: {
      p: `<path d="M24 6 C28.5 10.5 31 17 31 24 V30 a2 2 0 0 1 -2 2 H19 a2 2 0 0 1 -2 -2 V24 C17 17 19.5 10.5 24 6 Z"/><circle cx="24" cy="18" r="3.2"/><path d="M17 27 L11.5 32.5 V26.5 M31 27 L36.5 32.5 V26.5"/>`,
      a: `<path d="M20.5 32 C20.5 36 24 40.5 24 40.5 C24 40.5 27.5 36 27.5 32" stroke="${G}"/>`,
    },
    bulb: {
      p: `<path d="M24 8 a9 9 0 0 1 5.5 16.2 c-1.4 1.1 -2 2.3 -2.2 3.8 H20.7 c-0.2 -1.5 -0.8 -2.7 -2.2 -3.8 A9 9 0 0 1 24 8 Z"/><path d="M20.5 31 H27.5 M21.5 34.5 H26.5"/><path d="M21 20 L24 23.5 L27 20"/>`,
      a: `<path d="M24 3.5 V6 M11 11 L12.8 12.8 M37 11 L35.2 12.8" stroke="${G}"/>`,
    },
    up: { p: `<path d="M24 35 V14 M15 23 L24 14 L33 23"/>`, a: "" },
    trendup: {
      p: `<path d="M9 32 L19 22 L26 29 L39 15"/><path d="M32 15 H39 V22"/>`,
      a: `<path d="M39 15 H32 M39 15 V22" stroke="${G}"/>`,
    },
    thumbup: {
      p: `<path d="M8.5 22 H13.5 V37.5 H8.5 Z"/><path d="M13.5 22 L19.5 9.5 C21 6.5 25 8 24.3 11.5 L23 19 H33.5 C36 19 37.3 21.3 36.2 23.6 L32.6 34.5 C32 36.4 30.3 37.5 28.3 37.5 H13.5 Z"/>`,
      a: "",
    },
    thumbdown: {
      p: `<path d="M8.5 26 H13.5 V10.5 H8.5 Z"/><path d="M13.5 26 L19.5 38.5 C21 41.5 25 40 24.3 36.5 L23 29 H33.5 C36 29 37.3 26.7 36.2 24.4 L32.6 13.5 C32 11.6 30.3 10.5 28.3 10.5 H13.5 Z"/>`,
      a: "",
    },
    drop: {
      p: `<path d="M24 7 C24 7 33.5 19 33.5 27.5 a9.5 9.5 0 0 1 -19 0 C14.5 19 24 7 24 7 Z"/>`,
      a: `<path d="M19.5 27.5 a4.5 4.5 0 0 0 2.5 4" stroke="${C}"/>`,
    },
    flag: {
      p: `<path d="M13.5 8 V40"/><path d="M13.5 10 H33 L28.5 16 L33 22 H13.5"/>`,
      a: `<path d="M13.5 10 H33 L28.5 16 L33 22 H13.5" fill="${G}" fill-opacity="0.18" stroke="none"/>`,
    },
    certificate: {
      p: `<rect x="11" y="11" width="21" height="27" rx="2"/><path d="M15 18 H28 M15 23 H28 M15 28 H23"/><circle cx="31" cy="31" r="5"/><path d="M28.5 34.5 L27 40 L31 37.5 L35 40 L33.5 34.5"/>`,
      a: dot(31, 31, 1.6, G),
    },
    orgchart: {
      p: `<rect x="20" y="9" width="8" height="6.5" rx="1.5"/><rect x="9.5" y="32.5" width="8" height="6.5" rx="1.5"/><rect x="20" y="32.5" width="8" height="6.5" rx="1.5"/><rect x="30.5" y="32.5" width="8" height="6.5" rx="1.5"/><path d="M24 15.5 V23 M13.5 32.5 V27 H34.5 V32.5 M24 27 V23"/>`,
      a: dot(24, 12.3, 1.5, G),
    },
    // ---- masarat ----
    takween: {
      p: `<path d="M24 38 V21"/><path d="M24 27 C24 21 18 18 12.5 19 C12.5 25 18 28 24 28"/><path d="M24 23 C24 17 30 14.5 35.5 15.5 C35.5 21.5 30 24 24 24"/><path d="M15 38 H33"/>`,
      a: spark(24, 12, 3, G),
    },
    tamkeen: {
      p: `<circle cx="24" cy="16" r="3.6"/><path d="M24 20 V31"/><path d="M24 23.5 L16.5 30 M24 23.5 L31.5 30"/><path d="M24 31 L19 39 M24 31 L29 39"/>`,
      a: spark(24, 9, 3, G),
    },
    // ---- products ----
    articles: {
      p: `<path d="M14 10 H28 L34 16 V37.5 a1.5 1.5 0 0 1 -1.5 1.5 H14 a1.5 1.5 0 0 1 -1.5 -1.5 V11.5 A1.5 1.5 0 0 1 14 10Z"/><path d="M28 10 V16 H34"/><path d="M18 23 H29 M18 28 H29 M18 32.5 H24"/>`,
      a: `<path d="M18 23 H29" stroke="${G}"/>`,
    },
    library: {
      p: `<path d="M13 16.5 h5.5 v22 h-5.5 Z"/><path d="M19.5 16.5 h5.5 v22 h-5.5 Z"/><path d="M26.5 18 l5.2 1 -3.4 21 -5.2 -1 Z"/><path d="M14.5 21 h2.5 M21 21 h2.5"/>`,
      a: `<path d="M14.5 21 h2.5" stroke="${G}"/>`,
    },
    chapters: {
      p: `<path d="M11 16 a2 2 0 0 1 2 -2 H19.5 l3 4 H35 a2 2 0 0 1 2 2 V35 a2 2 0 0 1 -2 2 H13 a2 2 0 0 1 -2 -2 Z"/>`,
      a: `<path d="M26 14 V19 a1 1 0 0 0 1.6 0.8 L29.5 18.5 L31.4 19.8 a1 1 0 0 0 1.6 -0.8 V13" fill="${G}" fill-opacity="0.9" stroke="${P}"/>`,
    },
    guides: {
      p: `<path d="M13 14 a2 2 0 0 1 2 -2 H33 a2 2 0 0 1 2 2 V38 H15 a2 2 0 0 1 -2 -2 Z"/><path d="M15 34 H35"/><path d="M24 18.5 L27.5 24 L24 29.5 L20.5 24 Z"/>`,
      a: dot(24, 24, 1.6, C),
    },
    // ---- media center ----
    photos: {
      p: `<path d="M14 18 V14 H34 V18"/><rect x="11" y="18" width="26" height="20" rx="2.5"/><path d="M14 33 L21 26 L26 31 L30 28 L34 32"/>`,
      a: dot(18, 24, 2.4, G),
    },
    video: {
      p: `<rect x="10" y="13" width="28" height="22" rx="2.5"/><path d="M16 13 V35 M32 13 V35"/><path d="M11 18.5 H16 M11 24 H16 M11 29.5 H16 M32 18.5 H37 M32 24 H37 M32 29.5 H37"/>`,
      a: `<path d="M21.5 19 L28 24 L21.5 29 Z" fill="${C}" stroke="none"/>`,
    },
    reports: {
      p: `<path d="M14 10 H28 L34 16 V37.5 a1.5 1.5 0 0 1 -1.5 1.5 H14 a1.5 1.5 0 0 1 -1.5 -1.5 V11.5 A1.5 1.5 0 0 1 14 10Z"/><path d="M28 10 V16 H34"/><path d="M18 33 V27 M24 33 V22 M30 33 V29"/>`,
      a: `<path d="M24 33 V22" stroke="${G}"/>`,
    },
    // ---- governance / other ----
    policies: {
      p: `<path d="M14 10 H28 L34 16 V31"/><path d="M28 10 V16 H34"/><path d="M14 10 a1.5 1.5 0 0 0 -1.5 1.5 V37.5 A1.5 1.5 0 0 0 14 39 H22"/><path d="M18 23 H30 M18 28 H24"/><circle cx="30" cy="33" r="5.5"/><path d="M27.5 33 L29.5 35 L32.5 31.5"/>`,
      a: `<path d="M27.5 33 L29.5 35 L32.5 31.5" stroke="${G}"/>`,
    },
    contactCard: {
      p: `<rect x="9" y="14" width="30" height="20" rx="3"/><circle cx="17" cy="22" r="3.5"/><path d="M12 30 c1 -3.5 9 -3.5 10 0"/><path d="M26 20 H34 M26 24 H34 M26 28 H31"/>`,
      a: `<path d="M26 20 H34" stroke="${G}"/>`,
    },
    // ---- UI / system ----
    search: { p: `<circle cx="22" cy="22" r="9.5"/><path d="M29 29 L37.5 37.5"/>`, a: "" },
    menu: { p: `<path d="M11 16 H37 M11 24 H37 M11 32 H37"/>`, a: "" },
    close: { p: `<path d="M14.5 14.5 L33.5 33.5 M33.5 14.5 L14.5 33.5"/>`, a: "" },
    chev: { p: `<path d="M14 19.5 L24 29.5 L34 19.5"/>`, a: "" },
    back: { p: `<path d="M33 24 H13 M21 16 L13 24 L21 32"/>`, a: "" },
    user: {
      p: `<circle cx="24" cy="18" r="6"/><path d="M12.5 37 c1.5 -8 7 -11 11.5 -11 s10 3 11.5 11"/>`,
      a: "",
    },
    bell: {
      p: `<path d="M24 11 a9 9 0 0 0 -9 9 c0 7 -3 8.5 -3.5 10.5 H36.5 c-0.5 -2 -3.5 -3.5 -3.5 -10.5 a9 9 0 0 0 -9 -9Z"/><path d="M20.5 34 a3.5 3.5 0 0 0 7 0"/>`,
      a: dot(32, 15, 2.6, G),
    },
    cart: {
      p: `<path d="M10 12 H14.5 L18 30 H33 L36 17.5 H16.5"/><circle cx="20" cy="35" r="2.3"/><circle cx="31.5" cy="35" r="2.3"/>`,
      a: "",
    },
    store: {
      p: `<path d="M12 18 L14 12 H34 L36 18"/><path d="M12 18 a3 3 0 0 0 6 0 a3 3 0 0 0 6 0 a3 3 0 0 0 6 0 a3 3 0 0 0 6 0"/><path d="M14.5 22 V37 H33.5 V22"/><path d="M21 37 V29 h6 v8"/>`,
      a: "",
    },
    bookmark: { p: `<path d="M16 11.5 H32 V38 L24 31 L16 38 Z"/>`, a: "" },
    heart: {
      p: `<path d="M24 36 C9 26.5 12.5 15 20 15 C23.5 15 24 18.5 24 18.5 C24 18.5 24.5 15 28 15 C35.5 15 39 26.5 24 36Z"/>`,
      a: "",
    },
    share: {
      p: `<circle cx="32" cy="14" r="4"/><circle cx="16" cy="24" r="4"/><circle cx="32" cy="34" r="4"/><path d="M28.5 16 L19.5 22 M19.5 26 L28.5 32"/>`,
      a: "",
    },
    download: { p: `<path d="M24 11 V29 M16.5 22 L24 30 L31.5 22 M13 36 H35"/>`, a: "" },
    filter: { p: `<path d="M11 14 H37 L28 25 V36 L20 32 V25 Z"/>`, a: "" },
    settings: {
      p: `<circle cx="24" cy="24" r="6"/><path d="M24 9 V13 M24 35 V39 M9 24 H13 M35 24 H39 M13.4 13.4 L16.2 16.2 M31.8 31.8 L34.6 34.6 M34.6 13.4 L31.8 16.2 M16.2 31.8 L13.4 34.6"/>`,
      a: "",
    },
    play: {
      p: `<circle cx="24" cy="24" r="13"/><path d="M21 18 L31 24 L21 30 Z"/>`,
      a: `<path d="M21 18 L31 24 L21 30 Z" fill="${G}" stroke="none"/>`,
    },
    clock: { p: `<circle cx="24" cy="24" r="13"/><path d="M24 16.5 V24 L29.5 27"/>`, a: "" },
    location: {
      p: `<path d="M24 39 C16 30 14 24 14 19 a10 10 0 0 1 20 0 C34 24 32 30 24 39Z"/><circle cx="24" cy="19" r="4"/>`,
      a: dot(24, 19, 1.4, G),
    },
    phone: {
      p: `<path d="M16 11 c-3.2 0 -5 2.2 -4.2 6 c2 9.5 9.7 17.2 19.2 19.2 c3.8 0.8 6 -1 6 -4.2 l-0.6 -4.4 -6 -2.2 -3 3.2 c-4.2 -2.2 -7.4 -5.4 -9.4 -9.4 l3.2 -3 -2.2 -6Z"/>`,
      a: "",
    },
    mail: {
      p: `<rect x="9.5" y="14.5" width="29" height="19" rx="3"/><path d="M10.5 16.5 L24 26.5 L37.5 16.5"/>`,
      a: "",
    },
    language: {
      p: `<circle cx="24" cy="24" r="13"/><path d="M11 24 H37 M24 11 C29 17 29 31 24 37 C19 31 19 17 24 11"/>`,
      a: "",
    },
    check: { p: `<path d="M13 25 L21 33 L35 16"/>`, a: "" },
    info: { p: `<circle cx="24" cy="24" r="13"/><path d="M24 23 V31"/>`, a: dot(24, 17.5, 1.5, P) },
    plus: { p: `<path d="M24 13 V35 M13 24 H35"/>`, a: "" },
    grid: {
      p: `<rect x="11.5" y="11.5" width="10" height="10" rx="2"/><rect x="26.5" y="11.5" width="10" height="10" rx="2"/><rect x="11.5" y="26.5" width="10" height="10" rx="2"/><rect x="26.5" y="26.5" width="10" height="10" rx="2"/>`,
      a: "",
    },
    star: {
      p: `<path d="M24 9 L28.5 18.5 L39 20 L31.5 27.5 L33.3 38 L24 33 L14.7 38 L16.5 27.5 L9 20 L19.5 18.5 Z"/>`,
      a: "",
    },
    // ---- social ----
    x: {
      p: `<path d="M14 13 L23 23.5 L14 35 M14 13 L35 35 M34 13 L25 23.5 M34 35 L24.5 24.5"/>`,
      a: "",
      social: true,
    },
    instagram: {
      p: `<rect x="12" y="12" width="24" height="24" rx="7"/><circle cx="24" cy="24" r="6"/>`,
      a: dot(31, 17, 1.7, P),
      social: true,
    },
    youtube: {
      p: `<rect x="9" y="15" width="30" height="18" rx="5.5"/><path d="M21 20 L29.5 24 L21 28 Z"/>`,
      a: `<path d="M21 20 L29.5 24 L21 28 Z" fill="${P}" stroke="none"/>`,
      social: true,
    },
    linkedin: {
      p: `<rect x="11" y="11" width="26" height="26" rx="4"/><path d="M18 22 V30 M18 17.5 v0.01"/><path d="M24 30 V23 M24 26 a3.5 3.5 0 0 1 7 0 V30"/>`,
      a: dot(18, 17.5, 1.4, P),
      social: true,
    },
    snapchat: {
      p: `<path d="M24 11 c5.5 0 7.5 4 7.5 8.5 c0 3 1.5 3.5 3 4.5 c1.5 1 -0.5 2.8 -3 2.8 c-0.8 2 -2 3.2 -7.5 3.2 s-6.7 -1.2 -7.5 -3.2 c-2.5 0 -4.5 -1.8 -3 -2.8 c1.5 -1 3 -1.5 3 -4.5 c0 -4.5 2 -8.5 7.5 -8.5Z"/>`,
      a: "",
      social: true,
    },
    tiktok: {
      p: `<path d="M22.5 12 V29.5 a5 5 0 1 1 -4.5 -5"/><path d="M22.5 12 c0.8 5 4 7.5 8.5 7.5 V24 c-3.5 0 -6.5 -1.2 -8.5 -3"/>`,
      a: "",
      social: true,
    },
    // ---- expansion pack v2 (2026) · close all Material leaks with hand-drawn brand icons ----
    group: {
      p: `<circle cx="24" cy="15" r="5.2"/><path d="M14.5 34 c0 -6 4.5 -9.5 9.5 -9.5 s9.5 3.5 9.5 9.5"/><circle cx="11" cy="20.5" r="3.8"/><path d="M4.5 32.5 c0 -4.3 2.9 -6.8 6.5 -6.8"/><circle cx="37" cy="20.5" r="3.8"/><path d="M43.5 32.5 c0 -4.3 -2.9 -6.8 -6.5 -6.8"/>`,
      a: "",
    },
    quote: {
      p: `<path d="M20 18.5 a5.5 5.5 0 1 0 4.5 5.4 c0 4.5 -2 7.8 -5.5 9.6 M34 18.5 a5.5 5.5 0 1 0 4.5 5.4 c0 4.5 -2 7.8 -5.5 9.6"/>`,
      a: "",
    },
    wave: {
      p: `<path d="M18.5 16.6 a1.9 1.9 0 0 1 3.8 0 V22 M22.3 15.5 a1.9 1.9 0 0 1 3.8 0 V22 M26.1 17.4 a1.9 1.9 0 0 1 3.8 0 V25 c0 5.6 -3.6 9.6 -9 10.6 c-3.6 0.6 -6.2 -1 -7.7 -4.1 L11 27 a2 2 0 0 1 3.5 -2 L16 27 V19 a1.9 1.9 0 0 1 3.8 0"/>`,
      a: `<path d="M31 12.5 a6 6 0 0 1 4.2 4.2" stroke="${G}"/><path d="M35 11 a9 9 0 0 1 0 0" stroke="${C}"/>`,
    },
    glow: {
      p: `<path d="M35 8.6 L36.1 12 L39.4 13 L36.1 14 L35 17.4 L33.9 14 L30.6 13 L33.9 12 Z"/><path d="M24 9.5 V13 M24 35 V38.5 M9.5 24 H13 M35 24 H38.5 M14.5 14.5 L17 17 M31 31 L33.5 33.5 M33.5 14.5 L31 17 M17 31 L14.5 33.5"/>`,
      a: `<path d="M22 17 L24.1 24 L31 26.1 L24.1 28.2 L22 35 L19.9 28.2 L13 26.1 L19.9 24 Z" fill="${G}" stroke="none"/>`,
    },
    register: {
      p: `<rect x="12" y="12.5" width="24" height="27" rx="3"/><path d="M18 12.5 V10.5 a2 2 0 0 1 2 -2 H28 a2 2 0 0 1 2 2 V12.5"/><path d="M17 23 h10 M17 29 h10 M17 34.5 h5"/>`,
      a: `<path d="M27.5 32.5 L30.5 35.5 L37 28.5" stroke="${G}"/>`,
    },
    volunteer: {
      p: `<path d="M23 12.5 c-2.1 -2.7 -6.4 -1.5 -6.4 2.1 c0 2.8 4 5.4 6.4 6.8 c2.4 -1.4 6.4 -4 6.4 -6.8 c0 -3.6 -4.3 -4.8 -6.4 -2.1Z"/><path d="M11.5 26 a2.3 2.3 0 0 0 -3.3 3.2 l5.7 5.6 c1.8 1.7 4.1 2.7 6.6 2.7 H30 a2.3 2.3 0 0 0 0 -4.6 h-5.5"/>`,
      a: "",
    },
    building: {
      p: `<path d="M11 39 H37 M14.5 39 V15 a1.5 1.5 0 0 1 1.5 -1.5 H32 a1.5 1.5 0 0 1 1.5 1.5 V39"/><path d="M19 20 h3 M26 20 h3 M19 26 h3 M26 26 h3 M19 32 h3 M26 32 h3"/><path d="M24 13.5 V9 L29 11 L24 12.6"/>`,
      a: `<path d="M24 9 L29 11 L24 12.6 Z" fill="${G}" stroke="none"/>`,
    },
    mind: {
      p: `<path d="M16.5 30.5 a8.5 8.5 0 1 1 15 -3.5 a6 6 0 0 1 -6 8 H20 a5 5 0 0 1 -3.5 -4.5Z"/><circle cx="14.5" cy="34.5" r="1.7"/><circle cx="11" cy="38" r="1.1"/>`,
      a: spark(23.5, 25, 3.2, G),
    },
    payment: {
      p: `<rect x="9" y="14" width="30" height="20" rx="3.5"/><path d="M9 21 H39"/><path d="M14 28.5 h7 M27 28.5 h5"/>`,
      a: `<path d="M9 21 H39" stroke="${G}"/>`,
    },
    pen: {
      p: `<path d="M13.5 34 L30 17.5 a3 3 0 0 1 4.2 4.2 L17.7 38.2 L11.5 40.2 Z"/><path d="M27 20.5 L31.2 24.7"/>`,
      a: `<path d="M11.5 40.2 L13.5 34" stroke="${G}"/>`,
    },
    tools: {
      p: `<path d="M31.5 13.5 a5.5 5.5 0 0 0 -6.8 6.8 L13.3 31.7 a3.2 3.2 0 0 0 4.5 4.5 L29.2 24.8 a5.5 5.5 0 0 0 6.8 -6.8 l-3.4 3.4 a2.4 2.4 0 0 1 -3.4 -3.4 Z"/>`,
      a: dot(16.5, 33, 1.6, G),
    },
    chart: {
      p: `<path d="M11 10 V37 H38"/><rect x="15.5" y="26" width="5" height="11" rx="1"/><rect x="23" y="18" width="5" height="19" rx="1"/><rect x="30.5" y="22" width="5" height="15" rx="1"/>`,
      a: dot(25.5, 18, 2.1, G),
    },
    meditate: {
      p: `<circle cx="24" cy="14" r="4"/><path d="M18.5 35 h11 c1.1 0 1.6 -1.1 0.6 -2.1 c-2.1 -2.1 -4.6 -3.1 -6.1 -3.1 s-4 1 -6.1 3.1 c-1 1 -0.5 2.1 0.6 2.1Z"/><path d="M18.5 35 c-3.2 -2 -5.2 -4 -4.2 -6 c1 -1.5 4 -1 7 1.2 M29.5 35 c3.2 -2 5.2 -4 4.2 -6 c-1 -1.5 -4 -1 -7 1.2"/>`,
      a: spark(24, 9.5, 2.6, G),
    },
    megaphone: {
      p: `<path d="M11 22 v6 a2 2 0 0 0 2 2 h2.5 l2 6.5 h4 l-2 -6.5 L34 36 V16 L17.5 22 Z"/><path d="M14 22 v8"/>`,
      a: `<path d="M37 21 a6 6 0 0 1 0 8" stroke="${C}"/>`,
    },
    palette: {
      p: `<path d="M24 11 c-8 0 -14 5.6 -14 12.6 c0 6 4.2 9.4 8 9.4 c2 0 3.1 -1.2 3.1 -2.8 c0 -1.5 -1 -2.2 -1 -3.7 c0 -1.5 1.2 -2.8 2.9 -2.8 H27 c5 0 9 -3.5 9 -8 C36 15.6 31 11 24 11Z"/>`,
      a: dot(17, 20.5, 1.9, C) + dot(24, 16.5, 1.9, G) + dot(30.5, 20.5, 1.9, P),
    },
    hub: {
      p: `<circle cx="24" cy="24" r="4"/><circle cx="24" cy="11.5" r="3"/><circle cx="24" cy="36.5" r="3"/><circle cx="12.5" cy="18" r="3"/><circle cx="35.5" cy="18" r="3"/><path d="M24 20 V14.5 M24 28 V33.5 M20.6 22 L15.4 19 M27.4 22 L32.6 19"/>`,
      a: dot(24, 24, 1.3, G),
    },
    coffee: {
      p: `<path d="M11.5 18 H32 V28 a6 6 0 0 1 -6 6 H17.5 a6 6 0 0 1 -6 -6 Z"/><path d="M32 20.5 h3 a3.2 3.2 0 0 1 0 6.4 h-3"/>`,
      a: `<path d="M17 11 c-1 1.5 -1 2.5 0 4 M23 11 c-1 1.5 -1 2.5 0 4" stroke="${C}"/>`,
    },
    tree: {
      p: `<path d="M24 8.5 L15 20.5 H20 L13 30 H35 L28 20.5 H33 Z"/><path d="M24 30 V38.5 M20 38.5 H28"/>`,
      a: dot(24, 13, 1.9, G),
    },
    devices: {
      p: `<rect x="8.5" y="14" width="23" height="15.5" rx="2"/><path d="M6.5 33.5 H29 M11 29.5 h16.5"/><rect x="30.5" y="21.5" width="9" height="17" rx="2.2"/><path d="M33.5 35.5 h3"/>`,
      a: "",
    },
    seat: {
      p: `<path d="M15 20 v-3 a2 2 0 0 1 2 -2 h14 a2 2 0 0 1 2 2 v3 M12.5 20 h23 v6.5 h-23Z M16 26.5 v10 M32 26.5 v10"/>`,
      a: "",
    },
    transit: {
      p: `<rect x="12" y="11" width="24" height="22" rx="4"/><path d="M12 24 H36 M18 33 v3.5 M30 33 v3.5 M17 16 h14"/><circle cx="18" cy="28.5" r="1.4"/><circle cx="30" cy="28.5" r="1.4"/>`,
      a: dot(31, 14, 1.6, G),
    },
    speaker: {
      p: `<circle cx="20" cy="17.5" r="5.4"/><path d="M9 35.5 c0 -6.5 4.7 -10.5 11 -10.5 c2.6 0 4.9 0.7 6.8 1.9"/><path d="M30.5 18.5 a5 5 0 0 1 0 8"/>`,
      a: `<path d="M34.5 15.5 a9 9 0 0 1 0 14" stroke="${C}"/>`,
    },
    fire: {
      p: `<path d="M24 38 c-6 0 -10.5 -4 -10.5 -9.7 c0 -6.2 4.2 -8.3 5.2 -12.3 c1 4 3.2 5.2 4.2 7.2 c1.2 -3 0.6 -6.2 -1 -9.2 c5.5 1 12.1 6 12.1 14.3 c0 5.7 -4 9.7 -10 9.7Z"/>`,
      a: `<path d="M24 37 c-2.4 0 -4.2 -1.9 -4.2 -4.2 c0 -2.7 1.9 -3.3 2.4 -5.6 c1 1.9 3.3 2.5 3.3 5.2 c0 2.4 -0.9 4.6 -1.5 4.6Z" fill="${G}" stroke="none"/>`,
    },
    // ---- alias for satisfaction (avoid duplicate key in object literal) ----
  };

  // Render one icon as inline SVG string
  function renderIcon(name, opts = {}) {
    const d = ICON[name];
    if (!d) return "";
    const size = opts.size || 24;
    const stroke = opts.stroke || (d.social ? 2.2 : 2.4);
    const color = opts.color || "currentColor";
    return `<svg class="wj-icon" viewBox="0 0 48 48" width="${size}" height="${size}" fill="none" stroke="${color}" stroke-width="${stroke}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d.p}${d.a || ""}</svg>`;
  }

  // Mapping from Material Symbols Outlined names to Wahaj icon names
  const MAP = {
    // sections
    home: "home",
    house: "home",
    info: "about",
    person: "about",
    route: "paths",
    flag_2: "paths",
    inventory_2: "products",
    shopping_bag: "products",
    newspaper: "news",
    news: "news",
    gavel: "governance",
    balance: "governance",
    star_rate: "satisfaction",
    star: "star",
    mail: "mail",
    email: "mail",
    // home submenu
    quiz: "challenge",
    video_library: "video",
    play_circle: "play",
    videocam: "video",
    play_arrow: "play",
    calendar_today: "calendar",
    event: "calendar",
    calendar_month: "calendar",
    handshake: "partners",
    groups: "partners",
    // about
    auto_stories: "story",
    book_2: "story",
    visibility: "vision",
    remove_red_eye: "vision",
    rocket_launch: "rocket",
    send: "mission",
    flag: "flag",
    account_tree: "orgchart",
    verified: "certificate",
    verified_user: "certificate",
    card_membership: "certificate",
    // products
    article: "articles",
    description: "reports",
    local_library: "library",
    menu_book: "chapters",
    bookmarks: "bookmark",
    explore: "guides",
    // media
    photo_library: "photos",
    photo_camera: "photos",
    image: "photos",
    assessment: "reports",
    // UI
    search: "search",
    menu: "menu",
    close: "close",
    cancel: "close",
    arrow_back: "back",
    arrow_forward: "back",
    chevron_right: "back",
    chevron_left: "back",
    expand_more: "chev",
    expand_less: "chev",
    keyboard_arrow_down: "chev",
    keyboard_arrow_up: "chev",
    arrow_drop_down: "chev",
    person_outline: "user",
    account_circle: "user",
    notifications: "bell",
    shopping_cart: "cart",
    storefront: "store",
    bookmark: "bookmark",
    bookmark_border: "bookmark",
    favorite: "heart",
    favorite_border: "heart",
    share: "share",
    ios_share: "share",
    download: "download",
    file_download: "download",
    filter_alt: "filter",
    filter_list: "filter",
    settings: "settings",
    tune: "settings",
    schedule: "clock",
    access_time: "clock",
    timer: "clock",
    location_on: "location",
    place: "location",
    map: "location",
    phone: "phone",
    call: "phone",
    language: "language",
    translate: "language",
    public: "language",
    check: "check",
    done: "check",
    check_circle: "check",
    add: "plus",
    grid_view: "grid",
    dashboard: "grid",
    // social
    brand_x: "x",
    // initiatives (graceful fallbacks)
    eco: "takween", // عروبة (formation)
    chat: "contact",
    forum: "contact",
    message: "contact",
    diamond: "star",
    water_drop: "drop",
    edit_note: "articles",
    edit: "articles",
    history_edu: "story",
    school: "story",
    trending_up: "trendup",
    show_chart: "trendup",
    workspace_premium: "certificate",
    diversity_3: "partners",
    family_restroom: "partners",
    apartment: "governance",
    rule: "policies",
    description: "reports",
    arrow_upward: "up", // back-to-top
    "brand-x": "x",
    // ---- expansion pack v2 mappings (close all Material leaks) ----
    group: "group",
    groups: "group",
    diversity_1: "group",
    diversity_2: "group",
    format_quote: "quote",
    waving_hand: "wave",
    emoji_people: "wave",
    back_hand: "wave",
    auto_awesome: "glow",
    auto_awesome_motion: "glow",
    tips_and_updates: "glow",
    app_registration: "register",
    how_to_reg: "register",
    assignment: "register",
    assignment_turned_in: "register",
    ballot: "register",
    volunteer_activism: "volunteer",
    corporate_fare: "building",
    foundation: "building",
    apartment: "building",
    domain: "building",
    psychology: "mind",
    neurology: "mind",
    cognition: "mind",
    payments: "payment",
    payment: "payment",
    credit_card: "payment",
    account_balance_wallet: "payment",
    savings: "payment",
    account_balance: "governance",
    draw: "pen",
    stylus_note: "pen",
    design_services: "pen",
    edit_document: "pen",
    gesture: "pen",
    build: "tools",
    construction: "tools",
    handyman: "tools",
    build_circle: "tools",
    analytics: "chart",
    bar_chart: "chart",
    insights: "chart",
    monitoring: "chart",
    query_stats: "chart",
    leaderboard: "chart",
    self_improvement: "meditate",
    spa: "meditate",
    campaign: "megaphone",
    palette: "palette",
    brush: "palette",
    format_paint: "palette",
    color_lens: "palette",
    hub: "hub",
    device_hub: "hub",
    share_location: "hub",
    local_cafe: "coffee",
    coffee: "coffee",
    restaurant: "coffee",
    park: "tree",
    nature: "tree",
    forest: "tree",
    yard: "tree",
    devices: "devices",
    devices_other: "devices",
    computer: "devices",
    laptop: "devices",
    smart_display: "devices",
    event_seat: "seat",
    chair: "seat",
    weekend: "seat",
    directions_transit: "transit",
    directions_bus: "transit",
    train: "transit",
    commute: "transit",
    tram: "transit",
    record_voice_over: "speaker",
    support_agent: "speaker",
    voice_chat: "speaker",
    interpreter_mode: "speaker",
    lightbulb: "bulb",
    emoji_objects: "bulb",
    lightbulb_circle: "bulb",
    tips: "bulb",
    movie: "video",
    movie_creation: "video",
    theaters: "video",
    smart_display_2: "video",
    library_books: "library",
    auto_stories_2: "library",
    import_contacts: "library",
    notifications_active: "bell",
    notifications: "bell",
    notification_important: "bell",
    contact_mail: "mail",
    mark_email_read: "mail",
    mark_email_unread: "mail",
    outgoing_mail: "mail",
    drafts: "mail",
    badge: "certificate",
    military_tech: "certificate",
    workspace_premium_2: "certificate",
    policy: "policies",
    fact_check: "policies",
    shield_lock: "policies",
    shield: "policies",
    gpp_good: "policies",
    verified_user_2: "policies",
    privacy_tip: "policies",
    event_available: "calendar",
    event_note: "calendar",
    date_range: "calendar",
    today: "calendar",
    sentiment_very_satisfied: "satisfaction",
    sentiment_satisfied: "satisfaction",
    mood: "satisfaction",
    thumb_up: "thumbup",
    reviews: "satisfaction",
    recommend: "satisfaction",
    sentiment_satisfied_alt: "satisfaction",
    thumb_down: "thumbdown",
    sentiment_dissatisfied: "thumbdown",
    help: "info",
    help_outline: "info",
    contact_support: "info",
    quiz_2: "info",
    live_help: "info",
    supervisor_account: "user",
    manage_accounts: "user",
    admin_panel_settings: "user",
    account_circle_2: "user",
    topic: "chapters",
    folder: "chapters",
    folder_open: "chapters",
    source: "chapters",
    database: "grid",
    storage: "grid",
    dataset: "grid",
    table_chart: "grid",
    format_list_bulleted: "menu",
    list: "menu",
    checklist: "menu",
    format_list_numbered: "menu",
    publish: "mission",
    rocket: "rocket",
    outbound: "mission",
    upgrade: "mission",
    local_fire_department: "fire",
    whatshot: "fire",
    bolt: "fire",
    mode_heat: "fire",
    picture_as_pdf: "reports",
    summarize: "articles",
    approval: "certificate",
    receipt_long: "reports",
    request_quote: "payment",
    receipt: "reports",
    psychology_alt: "mind",
    lab_profile: "articles",
    science: "mind",
    biotech: "mind",
    experiment: "glow",
  };

  /* رسوم وهج المنقوشة: تحلّ محلّ الأيقونات الكبيرة (≥40px) فقط —
     رسوم تفصيلية تتألّق في المواضع البارزة على خلفية فاتحة، وتبقى
     بلونها الخمري كما هي هويتها. الصغيرة تبقى بسيطة. */
  function engraveLarge() {
    var spans = document.querySelectorAll(".material-symbols-outlined");
    Array.prototype.forEach.call(spans, function (el) {
      var name = (el.textContent || "").trim().toLowerCase();
      if (!/^[a-z_]+$/.test(name)) return;
      var fs = parseFloat(getComputedStyle(el).fontSize) || 0;
      if (fs < 40) return;
      var s = Math.round(fs * 1.5);
      var img = document.createElement("img");
      img.src = "assets/img/icons/" + name + ".png";
      img.alt = "";
      img.setAttribute("aria-hidden", "true");
      img.className = "wj-eng";
      img.style.width = s + "px";
      img.style.height = s + "px";
      img.loading = "lazy";
      // إن غاب الملف، أعِد أيقونة نصّية بسيطة
      img.onerror = function () {
        var sp = document.createElement("span");
        sp.className = "material-symbols-outlined";
        sp.textContent = name;
        img.replaceWith(sp);
      };
      el.replaceWith(img);
    });
  }

  /* مجموعة النقوش الخمرية المتوفّرة (104 أيقونة بأسماء Material). */
  var ENGRAVED = {};
  "account_balance account_tree analytics app_registration arrow_back arrow_forward arrow_upward article assessment auto_awesome auto_stories badge balance bar_chart build calendar_month call campaign check_circle check chevron_left close construction contact_mail contact_support corporate_fare description design_services devices directions_transit download edit_note emoji_objects emoji_people event_available event event_seat expand_more explore fact_check flag format_list_bulleted format_quote forum foundation gavel group groups handshake help history_edu home how_to_reg hub library_books lightbulb local_cafe local_fire_department local_library location_on lock_clock mail mark_email_read menu_book menu newspaper notifications_active palette park payments person photo_camera photo_library picture_as_pdf play_arrow play_circle policy psychology public reviews rocket_launch route schedule school search send sentiment_satisfied sentiment_very_satisfied shield_lock star storefront supervisor_account support_agent thumb_down thumb_up trending_up verified verified_user videocam visibility volunteer_activism water_drop waving_hand workspace_premium"
    .split(" ")
    .forEach(function (n) {
      ENGRAVED[n] = 1;
    });

  /* أيقونات تحكّم/تنقّل لا تُعامَل كبلاطات مميّزة أبدًا (أزرار عائمة، تشغيل فيديو، أسهم…). */
  var TILE_SKIP = {};
  "arrow_upward arrow_back arrow_forward expand_more chevron_left close menu search play_arrow play_circle"
    .split(" ")
    .forEach(function (n) {
      TILE_SKIP[n] = 1;
    });

  /* إضاءة خلفية العنصر: نمشي صعودًا لأوّل خلفية معتمة.
     التدرّجات (أزرار/بلاطات ملوّنة) تُعدّ سطحًا داكنًا فتبقى الأيقونة بيضاء. */
  function bgLum(el) {
    var n = el;
    for (var i = 0; i < 8 && n && n.nodeType === 1; i++) {
      var cs = getComputedStyle(n);
      if (cs.backgroundImage && cs.backgroundImage.indexOf("gradient") !== -1) return 0;
      var m = (cs.backgroundColor || "").match(/rgba?\(([^)]+)\)/);
      if (m) {
        var v = m[1].split(",").map(function (x) {
          return parseFloat(x);
        });
        var a = v.length > 3 ? v[3] : 1;
        if (a > 0.15) return (0.2126 * v[0] + 0.7152 * v[1] + 0.0722 * v[2]) / 255;
      }
      n = n.parentElement;
    }
    return 1; // خلفية الصفحة فاتحة
  }

  /* بلاطات الأيقونات: حاوية مربّعة (≈48–128px) تحمل أيقونة واحدة.
     نُضيئها فاتحةً (‎.wj-eng-tile‎) ونضع النقش الخمري بداخلها فيتألّق —
     بدل التدرّج البنفسجي حيث كان النقش يطين. الصغيرة الخطّية تبقى رسمًا يدويًا. */
  function engraveTiles() {
    var spans = document.querySelectorAll(".material-symbols-outlined");
    var _dbg = [];
    Array.prototype.forEach.call(spans, function (el) {
      var name = (el.textContent || "").trim().toLowerCase();
      if (!/^[a-z_]+$/.test(name) || !ENGRAVED[name] || TILE_SKIP[name]) return;
      var parent = el.parentElement;
      if (!parent) return;
      if (getComputedStyle(parent).position === "fixed") return; // أزرار عائمة (العودة للأعلى)
      // حاويات معلَّمة صراحةً: تُترك للمعالجة العادية (نقش أبيض على الخلفيات الداكنة)
      if (parent.closest(".wj-no-tile") || parent.closest(".wj-plain")) return;
      var pr = parent.getBoundingClientRect();
      var w = pr.width,
        h = pr.height;
      if (window.__WJDBG) _dbg.push(name + ":" + Math.round(w) + "x" + Math.round(h));
      var isTile = w >= 48 && w <= 128 && h >= 48 && h <= 128 && Math.abs(w - h) <= 22;
      if (!isTile) return;
      parent.classList.add("wj-eng-tile");
      var s = Math.round(Math.min(w, h) * 0.72);
      var img = document.createElement("img");
      img.src = "assets/img/icons/" + name + ".png";
      img.alt = "";
      img.setAttribute("aria-hidden", "true");
      img.className = "wj-eng";
      img.style.width = s + "px";
      img.style.height = s + "px";
      img.loading = "lazy";
      el.replaceWith(img);
    });
    if (window.__WJDBG)
      console.log("WJTILES total=" + spans.length + " cand=" + JSON.stringify(_dbg));
  }

  /* أيقونات القوائم والبطاقات (wj-bicon): تُستبدل بالنقش المحفور حسب التسمية المجاورة */
  var BICON = {
    "حكايتنا": "history_edu",
    "الرؤية والرسالة": "explore",
    "أهدافنا": "flag",
    "مقالات وهج": "article",
    "مكتبة وهج": "local_library",
    "فصول وهج": "menu_book",
    "الأدلة الإثرائية": "explore",
    "الشباب": "school",
    "الأسر": "home",
    "الأندية القرائية": "groups",
    "الجهات": "handshake",
  };

  function engraveBicons() {
    var imgs = document.querySelectorAll("img.wj-bicon, img.wj-bicon-lg");
    Array.prototype.forEach.call(imgs, function (img) {
      // صورة اختارها الفريق من اللوحة («صور القوائم المنسدلة») — لا تُستبدل بالنقش
      if (img.hasAttribute("data-mi-custom")) return;
      var scope = img.closest("a, div.group, div");
      var lbl = scope && scope.querySelector(".wj-name, .name, h3");
      var name = lbl && BICON[(lbl.textContent || "").trim()];
      if (!name) return;
      img.src = "assets/img/icons/" + name + ".png";
    });
  }

  // Replace ALL material-symbols-outlined spans with Wahaj icons
  function replaceAll() {
    engraveBicons();
    engraveLarge();
    engraveTiles();
    const symbols = document.querySelectorAll(".material-symbols-outlined");
    symbols.forEach((el) => {
      // عناصر تريد أيقونة خطّية نظيفة كما هي — بلا نقش ولا استبدال
      if (el.closest(".wj-plain")) return;
      const name = (el.textContent || "").trim().toLowerCase();
      const engraved = /^[a-z_]+$/.test(name) && !!ENGRAVED[name];
      const wjName = MAP[name];
      if (!engraved && (!wjName || !ICON[wjName])) return; // لا نقش ولا رسم — تُترك
      // Determine size from parent or inline style
      let size = 24;
      const styleSize = el.style.fontSize || "";
      const computedSize = parseFloat(getComputedStyle(el).fontSize);
      if (styleSize) {
        size = parseFloat(styleSize) || size;
      } else if (computedSize) {
        size = computedSize;
      }
      // حضور أقوى للهوية: تكبير طفيف موحّد + حدّ أدنى يُبقي النقش مقروءًا
      size = Math.max(engraved ? 20 : 0, Math.round(size * 1.15));
      // Determine color from parent text color
      const cs = getComputedStyle(el);
      const lum = bgLum(el);
      const wrapper = document.createElement("span");
      wrapper.className = el.className;
      wrapper.setAttribute("data-wj-icon", engraved ? name : wjName);
      // هوية خمرية على الخلفيات الفاتحة؛ تُترك ترث (أبيض) على الداكنة
      if (lum >= 0.62) wrapper.style.color = WJ_MAROON;
      if (cs.display === "block") {
        // أيقونة سطر مستقل: تبقى كتلة كاملة العرض وتحاذي كما كان نصها (وسط/يسار/يمين/بداية)
        wrapper.style.display = "flex";
        wrapper.style.alignItems = "center";
        wrapper.style.height = size + "px";
        wrapper.style.justifyContent =
          { left: "left", right: "right", center: "center" }[cs.textAlign] || "start";
      } else {
        wrapper.style.display = "inline-flex";
        wrapper.style.alignItems = "center";
        wrapper.style.justifyContent = "center";
        wrapper.style.width = size + "px";
        wrapper.style.height = size + "px";
        wrapper.style.verticalAlign = "middle";
      }
      wrapper.style.lineHeight = "1";
      if (engraved) {
        /* الهوية المحفورة في كل موضع — وعلى الداكن تُقلب بيضاء لتبقى ظاهرة */
        const img = document.createElement("img");
        img.src = "assets/img/icons/" + name + ".png";
        img.alt = "";
        img.setAttribute("aria-hidden", "true");
        img.className = "wj-eng";
        img.style.width = size + "px";
        img.style.height = size + "px";
        img.loading = "lazy";
        if (lum < 0.62) img.style.filter = "brightness(0) invert(1)";
        img.onerror = function () {
          wrapper.innerHTML = wjName && ICON[wjName] ? renderIcon(wjName, { size: size }) : "";
        };
        wrapper.appendChild(img);
      } else {
        wrapper.innerHTML = renderIcon(wjName, { size: size });
      }
      el.replaceWith(wrapper);
    });
  }

  // Run on DOM ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", replaceAll);
  } else {
    replaceAll();
  }

  // Expose for manual use
  window.WahajIcons = { ICON, render: renderIcon, replaceAll };
})();
