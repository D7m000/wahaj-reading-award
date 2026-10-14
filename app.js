(() => {
  const tracks = window.WahajAwardData.pageTracks;
  const $ = (s) => document.querySelector(s);
  const icon = (n) => window.WahajIcons?.render(n) || "";
  // Keep the section bar attached to the actual header, including menu/font resizing.
  const header = $("header[data-header]"),
    sectionNav = $(".award-section-nav");

  function syncStickyHeights() {
    document.documentElement.style.setProperty(
      "--award-header-height",
      `${header.getBoundingClientRect().height}px`,
    );
    document.documentElement.style.setProperty(
      "--award-section-nav-height",
      `${sectionNav.getBoundingClientRect().height}px`,
    );
  }

  syncStickyHeights();
  if ("ResizeObserver" in window) {
    const stickyResize = new ResizeObserver(syncStickyHeights);
    stickyResize.observe(header);
    stickyResize.observe(sectionNav);
  }
  window.addEventListener("resize", syncStickyHeights);
  document.fonts?.ready.then(syncStickyHeights);
  // Scroll only the tab strip; never move the document to reveal an active tab.
  let tabVisibilityFrame = 0;

  function keepMobileTabVisible() {
    if (!window.matchMedia("(max-width:767px)").matches) return;
    cancelAnimationFrame(tabVisibilityFrame);
    tabVisibilityFrame = requestAnimationFrame(() => {
      const tab = sectionNav.querySelector("a.current");
      if (!tab) return;
      const strip = sectionNav.firstElementChild,
        bounds = strip.getBoundingClientRect(),
        item = tab.getBoundingClientRect();
      const offset =
        item.left < bounds.left
          ? item.left - bounds.left
          : item.right > bounds.right
            ? item.right - bounds.right
            : 0;
      if (offset) strip.scrollBy({ left: offset, behavior: "auto" });
    });
  }

  const tabStateObserver = new MutationObserver(keepMobileTabVisible);
  sectionNav
    .querySelectorAll("a")
    .forEach((tab) =>
      tabStateObserver.observe(tab, { attributes: true, attributeFilter: ["class"] }),
    );
  window.addEventListener("resize", keepMobileTabVisible);
  document.fonts?.ready.then(keepMobileTabVisible);
  document.querySelectorAll("[data-icon]").forEach((e) => (e.innerHTML = icon(e.dataset.icon)));
  for (const sel of [$("#criteria-track")])
    sel.innerHTML = tracks.map((t) => `<option value="${t.id}">${t.title}</option>`).join("");

  function criteria(id) {
    const t = tracks.find((t) => t.id === id);
    $("#criteria-track").value = id;
    $("#criteria-title").textContent = t.title;
    $("#evidence-text").textContent = t.evidence;
    $("#criteria-rows").innerHTML = t.criteria
      .map(
        ([name, weight]) =>
          `<div class="award-criterion award-reveal"><div><span>${name}</span><b>${weight}%</b></div><div class="award-bar"><span style="width:${weight}%"></span></div></div>`,
      )
      .join("");
  }

  function domain(name) {
    document
      .querySelectorAll("[data-domain]")
      .forEach((b) => b.setAttribute("aria-selected", String(b.dataset.domain === name)));
    $("#track-cards").innerHTML = tracks
      .filter((t) => t.domain === name)
      .map(
        (t, i) =>
          `<article class="award-track-card award-reveal"><span class="award-track-number">0${i + 1}</span><div class="award-track-icon">${icon(t.icon)}</div><h3>${t.title}</h3><p>${t.description}</p><span class="award-card-badge">${t.badge}</span><button class="award-text-link" data-criteria="${t.id}">معايير هذا المسار <span class="material-symbols-outlined">arrow_back</span></button></article>`,
      )
      .join("");
    criteria(tracks.find((t) => t.domain === name).id);
    window.WahajIcons?.replaceAll();
  }

  domain("individual");
  document
    .querySelectorAll("[data-domain]")
    .forEach((b) => b.addEventListener("click", () => domain(b.dataset.domain)));
  $("#criteria-track").addEventListener("change", (e) => criteria(e.target.value));
  $("#track-cards").addEventListener("click", (e) => {
    const b = e.target.closest("[data-criteria]");
    if (b) {
      criteria(b.dataset.criteria);
      $("#criteria").scrollIntoView({ behavior: "smooth" });
    }
  });
  document.querySelectorAll(".nav-item>.nav-trigger").forEach((b) =>
    b.addEventListener("click", () => {
      const p = b.parentElement;
      const open = p.classList.contains("open");
      document.querySelectorAll(".nav-item").forEach((e) => {
        e.classList.remove("open");
        e.querySelector("button")?.setAttribute("aria-expanded", "false");
      });
      p.classList.toggle("open", !open);
      b.setAttribute("aria-expanded", String(!open));
    }),
  );
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".nav-item"))
      document.querySelectorAll(".nav-item").forEach((e) => {
        e.classList.remove("open");
        e.querySelector("button")?.setAttribute("aria-expanded", "false");
      });
  });
  $("#mobile-toggle")?.addEventListener("click", () => {
    const m = $("#mobile-menu");
    m.classList.toggle("hidden");
    $("#mobile-toggle").setAttribute("aria-expanded", String(!m.classList.contains("hidden")));
  });
  document.querySelectorAll(".m-acc__btn").forEach((b) =>
    b.addEventListener("click", () => {
      const on = b.getAttribute("aria-expanded") !== "true";
      b.setAttribute("aria-expanded", String(on));
      b.parentElement.classList.toggle("is-open", on);
      b.nextElementSibling.style.display = on ? "block" : "none";
    }),
  );
  document
    .querySelectorAll(".award-dialog-close")
    .forEach((b) => b.addEventListener("click", () => b.closest("dialog").close()));
  document.querySelectorAll("dialog").forEach((d) =>
    d.addEventListener("click", (e) => {
      if (e.target === d) {
        const r = d.getBoundingClientRect();
        if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom)
          d.close();
      }
    }),
  );
  document.querySelectorAll("[data-apply]").forEach((b) =>
    b.addEventListener("click", () => {
      window.WahajParticipation?.selectTrack($("#criteria-track").value);
      $("#participation").scrollIntoView({ behavior: "smooth" });
    }),
  );
  const sections = [
    ["عن الجائزة والرؤية والرسالة", "about"],
    ["مجالات ومسارات الجائزة للأفراد والمنظمات", "tracks"],
    ["معايير التقييم والأوزان والشواهد", "criteria"],
    ["رحلة المشاركة والتقديم والجوائز والمواعيد", "journey"],
    ["الأسئلة الشائعة والشروط", "faq"],
    ["نموذج المشاركة والتقديم", "participation"],
  ];

  function search() {
    const term = $("#search-input").value.trim();
    $("#search-results").innerHTML =
      sections
        .filter(([n]) => !term || n.includes(term))
        .map(([name, id]) => `<a href="#${id}">${name}</a>`)
        .join("") || "<p>لا توجد نتائج جرّب «المسارات» أو «الشروط»</p>";
  }

  document.querySelectorAll("[data-search-open]").forEach((b) =>
    b.addEventListener("click", () => {
      $("#award-search").showModal();
      search();
      $("#search-input").focus();
    }),
  );
  $("#search-input").addEventListener("input", search);
  $("#search-results").addEventListener("click", (e) => {
    if (e.target.closest("a")) $("#award-search").close();
  });
  $(".award-top").onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape")
      document.querySelectorAll(".nav-item.open").forEach((n) => {
        n.classList.remove("open");
        n.querySelector("button")?.setAttribute("aria-expanded", "false");
      });
  });
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          document
            .querySelectorAll(".award-section-nav a")
            .forEach((a) =>
              a.classList.toggle("current", a.getAttribute("href") === "#" + e.target.id),
            );
        }
      });
    },
    { rootMargin: "-150px 0px -60% 0px" },
  );
  document.querySelectorAll("main section[id]").forEach((s) => observer.observe(s));

  document.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      $("#award-search").showModal();
      search();
      $("#search-input").focus();
    }
  });

  if (
    "IntersectionObserver" in window &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    const reveal = new IntersectionObserver(
      (entries) => {
        for (const e of entries)
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            reveal.unobserve(e.target);
          }
      },
      { threshold: 0.08, rootMargin: "0px 0px -30px 0px" },
    );
    document
      .querySelectorAll(
        ".award-section .award-heading,.award-about-intro,.book-spread,.award-values-strip,.award-steps article,.award-cycle,.award-faq-layout>div,.award-final .award-container",
      )
      .forEach((e, i) => {
        e.classList.add("award-scroll-reveal");
        e.style.setProperty("--reveal-delay", `${(i % 2) * 70}ms`);
        reveal.observe(e);
      });
  }
})();
