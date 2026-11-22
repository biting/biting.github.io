(() => {
  const state = {
    lang: localStorage.getItem("site_lang") || "en",
    theme: localStorage.getItem("site_theme") || "light",
    pubFilter: "all",
    pubQuery: ""
  };

  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => Array.from(document.querySelectorAll(sel));

  function showToast(msg) {
    const toast = $("#toast");
    toast.textContent = msg;
    toast.classList.add("show");
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => toast.classList.remove("show"), 2200);
  }

  function applyTheme(theme) {
    state.theme = theme;
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("site_theme", theme);
  }

  function getNested(obj, path) {
    return path.split(".").reduce((acc, key) => (acc ? acc[key] : ""), obj);
  }

  function renderI18n() {
    const t = SITE_DATA.ui[state.lang];
    document.documentElement.lang = state.lang === "zh" ? "zh-CN" : "en";
    document.title = t.pageTitle;
    $("#lang-toggle").textContent = t.langBtn;
    $("#pub-search").placeholder = t.pub.searchPlaceholder;
    $("#pub-note").innerHTML = t.pub.note;
    $("#footer-copy").textContent = t.footer.copy;
    $("#footer-updated").textContent = t.footer.updated;
    $$("[data-i18n]").forEach((el) => {
      const val = getNested(t, el.getAttribute("data-i18n"));
      if (val) el.textContent = val;
    });
  }

  function renderProfile() {
    const p = SITE_DATA.profile[state.lang];
    $("#nav-brand").textContent = p.name;
    $("#profile-name").textContent = p.name;
    $("#profile-name-secondary").textContent = p.secondaryName;
    $("#profile-role").textContent = p.role;
    $("#profile-affil").textContent = p.affiliation;
    $("#profile-office").textContent = p.office;
    $("#profile-email-display").textContent = `${SITE_DATA.emailUser} [AT] ${SITE_DATA.emailDomain}`;
    $("#profile-links").innerHTML = SITE_DATA.profile.links
      .map((link) => `<a class="social-link" href="${link.url}" target="_blank" rel="noopener noreferrer">${link.label} ↗</a>`)
      .join("");
  }

  function renderAbout() {
    $("#about-content").innerHTML = SITE_DATA.about[state.lang].map((para) => `<p>${para}</p>`).join("");
    $("#recruiting-banner").innerHTML = SITE_DATA.recruiting[state.lang];
    $("#interests-list").innerHTML = SITE_DATA.interests[state.lang].map((item) => `<span class="tag-pill">${item}</span>`).join("");
  }

  function renderNews() {
    $("#news-list").innerHTML = SITE_DATA.news
      .map((item) => {
        const dateLabel = item.pinned
          ? `<span class="news-badge-pinned">${item.date[state.lang]}</span>`
          : `<span class="news-date">${item.date[state.lang]}</span>`;
        return `<li class="news-item"><div>${dateLabel}</div><div class="news-text">${item.text[state.lang]}</div></li>`;
      })
      .join("");
  }

  function renderPublications() {
    const t = SITE_DATA.ui[state.lang].pub;
    const container = $("#publications-container");
    const q = state.pubQuery.trim().toLowerCase();
    const filtered = SITE_DATA.publications.filter((pub) => {
      const matchType = state.pubFilter === "all" || pub.type === state.pubFilter;
      const haystack = `${pub.title} ${pub.authors} ${pub.venue} ${pub.badge} ${pub.year}`.toLowerCase();
      return matchType && (!q || haystack.includes(q));
    });

    if (filtered.length === 0) {
      container.innerHTML = `<p class="section-note" style="margin-top:16px;">${t.empty}</p>`;
      return;
    }

    const years = [...new Set(filtered.map((p) => p.year))].sort((a, b) => b - a);
    container.innerHTML = years
      .map((year) => {
        const cards = filtered
          .filter((p) => p.year === year)
          .map((pub) => {
            const paperBtn = pub.paperUrl ? `<a class="pub-btn" href="${pub.paperUrl}" target="_blank" rel="noopener noreferrer">${t.paper} ↗</a>` : "";
            const codeBtn = pub.codeUrl ? `<a class="pub-btn" href="${pub.codeUrl}" target="_blank" rel="noopener noreferrer">${t.code} ↗</a>` : "";
            return `
              <article class="pub-card">
                <div class="pub-top-row">
                  <span class="venue-badge">${pub.badge}</span>
                  <h3 class="pub-title">${pub.title}</h3>
                </div>
                <p class="pub-authors">${pub.authors}</p>
                <p class="pub-venue">${pub.venue}</p>
                <div class="pub-actions">
                  ${paperBtn}${codeBtn}
                  <button class="pub-btn bibtex-toggle" type="button" data-id="${pub.id}">${t.bibtex}</button>
                </div>
                <div class="bibtex-box" id="bib-${pub.id}">
                  <div class="bibtex-header">
                    <span>BibTeX</span>
                    <button class="pub-btn bibtex-copy" type="button" data-id="${pub.id}">${t.copy}</button>
                  </div>
                  <pre class="bibtex-code">${pub.bibtex}</pre>
                </div>
              </article>
            `;
          })
          .join("");
        return `<div class="pub-year-group"><h3 class="pub-year-heading">${year}</h3>${cards}</div>`;
      })
      .join("");
  }

  function renderTimeline(listId, items) {
    $(listId).innerHTML = items
      .map((item) => `<div class="timeline-item"><div class="timeline-period">${item.period}</div><h3 class="timeline-role">${item.role}</h3><p class="timeline-org">${item.org}</p></div>`)
      .join("");
  }

  function renderService() {
    $("#service-list").innerHTML = SITE_DATA.service[state.lang]
      .map((s) => `<div class="service-card"><h3>${s.title}</h3><p>${s.content}</p></div>`)
      .join("");
  }

  function renderAll() {
    renderI18n();
    renderProfile();
    renderAbout();
    renderNews();
    renderPublications();
    renderTimeline("#experience-list", SITE_DATA.experience[state.lang]);
    renderTimeline("#education-list", SITE_DATA.education[state.lang]);
    renderService();
  }

  function bindEvents() {
    $("#lang-toggle").addEventListener("click", () => {
      state.lang = state.lang === "en" ? "zh" : "en";
      localStorage.setItem("site_lang", state.lang);
      renderAll();
    });
    $("#theme-toggle").addEventListener("click", () => applyTheme(state.theme === "light" ? "dark" : "light"));
    $("#menu-toggle").addEventListener("click", () => $("#nav-links").classList.toggle("open"));
    $$("#nav-links a").forEach((a) => a.addEventListener("click", () => $("#nav-links").classList.remove("open")));

    $("#copy-email-btn").addEventListener("click", async () => {
      const email = `${SITE_DATA.emailUser}@${SITE_DATA.emailDomain}`;
      try {
        await navigator.clipboard.writeText(email);
        showToast(SITE_DATA.ui[state.lang].toast.emailCopied);
      } catch {
        showToast(email);
      }
    });

    $("#pub-filter-group").addEventListener("click", (e) => {
      const btn = e.target.closest(".filter-btn");
      if (!btn) return;
      $$(".filter-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      state.pubFilter = btn.dataset.filter;
      renderPublications();
    });

    $("#pub-search").addEventListener("input", (e) => {
      state.pubQuery = e.target.value;
      renderPublications();
    });

    $("#publications-container").addEventListener("click", async (e) => {
      const toggleBtn = e.target.closest(".bibtex-toggle");
      if (toggleBtn) {
        const box = $(`#bib-${toggleBtn.dataset.id}`);
        if (box) box.classList.toggle("open");
        return;
      }
      const copyBtn = e.target.closest(".bibtex-copy");
      if (copyBtn) {
        const pub = SITE_DATA.publications.find((p) => p.id === copyBtn.dataset.id);
        if (!pub) return;
        try {
          await navigator.clipboard.writeText(pub.bibtex);
          showToast(SITE_DATA.ui[state.lang].toast.bibtexCopied);
        } catch {
          showToast("Copy failed");
        }
      }
    });
  }

  applyTheme(state.theme);
  renderAll();
  bindEvents();
})();
