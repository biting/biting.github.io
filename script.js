(() => {
  const isArchive = document.body.dataset.page === "archive";
  const state = {
    lang: localStorage.getItem("site_lang") === "zh" ? "zh" : "en",
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
    $("#interests-list").innerHTML = SITE_DATA.directions[state.lang].map(d => `<article class="direction-card"><h3>${d.title}</h3><p>${d.desc}</p></article>`).join("");
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

  const escapeHTML=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  function bibText(p){return String(p.bibtex||'').replace(/\\n/g,'\n')}
  function publicationCard(pub){
    const t=SITE_DATA.ui[state.lang].pub;
    const authors=escapeHTML(pub.authors).replace(/&lt;strong&gt;([\s\S]*?)&lt;\/strong&gt;/g,'<strong>$1</strong>');
    const link=(url,label)=>/^https?:\/\//.test(url||'')?`<a class="pub-btn" href="${escapeHTML(url)}" target="_blank" rel="noopener noreferrer">${label} ↗</a>`:'';
    return `<article class="pub-card"><div class="pub-top-row"><span class="venue-badge">${escapeHTML(pub.badge)} · ${pub.year}${pub.type==='preprint'?' · '+t.preprint:''}</span><h3 class="pub-title">${escapeHTML(pub.title)}</h3></div><p class="pub-authors">${authors}</p><p class="pub-venue">${escapeHTML(pub.venue)}</p><div class="pub-actions">${link(pub.paperUrl,t.paper)}${link(pub.codeUrl,t.code)}<button class="pub-btn bibtex-toggle" type="button" data-id="${pub.id}" aria-expanded="false">BibTeX</button></div><div class="bibtex-box" id="bib-${pub.id}"><div class="bibtex-header"><span>BibTeX</span><button class="pub-btn bibtex-copy" type="button" data-id="${pub.id}">${t.copy}</button></div><pre class="bibtex-code">${escapeHTML(bibText(pub))}</pre></div></article>`;
  }
  function renderPublications(){
    const box=$('#publications-container'),zh=state.lang==='zh';
    if(!isArchive){box.innerHTML=SITE_DATA.selectedPublications.map((ids,i)=>`<section class="selected-group"><h3>${SITE_DATA.directions[state.lang][i].title}</h3>${ids.map(id=>SITE_DATA.publications.find(p=>p.id===id)).filter(Boolean).map(publicationCard).join('')}<a class="topic-link" href="publications.html?area=${['media','agents','networks','security'][i]}">${zh?'查看该领域全部发表':'View all in this area'} ↗</a></section>`).join('');return;}
    const q=state.pubQuery.trim().toLowerCase(),y=$('#pub-year').value,a=$('#pub-area').value;
    const pubs=SITE_DATA.publications.filter(p=>(state.pubFilter==='all'||p.type===state.pubFilter)&&(!y||String(p.year)===y)&&(!a||(SITE_DATA.publicationAreas[p.id]||'other')===a)&&(!q||`${p.title} ${p.authors} ${p.venue} ${p.year}`.toLowerCase().includes(q)));
    $('#result-count').textContent=zh?`显示 ${pubs.length} / ${SITE_DATA.publications.length} 条记录`:`Showing ${pubs.length} of ${SITE_DATA.publications.length} records`;
    const years=[...new Set(pubs.map(p=>p.year))].sort((a,b)=>b-a);
    box.innerHTML=years.map(y=>`<section class="pub-year-group"><h2 class="pub-year-heading">${y}</h2>${pubs.filter(p=>p.year===y).map(publicationCard).join('')}</section>`).join('')||SITE_DATA.ui[state.lang].pub.empty;
  }
  function renderExtra(){
    const zh=state.lang==='zh';
    if(isArchive){
      document.querySelector('[data-i18n="sections.publications"]').textContent=zh?'全部发表':'All Publications';
      $('#pub-note').textContent=zh?'全部记录来自所提供的data.js，包含预印本与书籍章节。':'All records from the supplied data.js, including preprints and book chapters.';
      const opts={'pub-year':[...new Set(SITE_DATA.publications.map(p=>p.year))].sort((a,b)=>b-a).map(y=>[y,y]),'pub-area':[...['media','agents','networks','security'].map((k,i)=>[k,SITE_DATA.directions[state.lang][i].title]),['other',zh?'其他':'Other']]};
      for(const [id,items] of Object.entries(opts)){const el=$('#'+id),v=el.value;el.innerHTML=`<option value="">${zh?'全部':'All'}</option>`+items.map(([v,n])=>`<option value="${v}">${n}</option>`).join('');el.value=v;}
      $('#filter-reset').textContent=zh?'重置':'Reset';return;
    }
    $('#profile-tagline').textContent=SITE_DATA.profile[state.lang].tagline;
    $('#all-publications-link').textContent=zh?'全部发表 ↗':'All Publications ↗';
    const values=[ [zh?'所在城市':'Location',zh?'中国 · 武汉':'Wuhan, China'],[zh?'研究方向':'Research focus',zh?'多体感媒体 · 多智能体通信':'Multi-sensory media · Multi-agent communications'],[zh?'学术编委':'Editorial service',zh?'IEEE Transactions on Broadcasting 副主编；China Communications、Telecommunications Science 青年编委':'Associate Editor, IEEE Transactions on Broadcasting; Young Editorial Board Member, China Communications and Telecommunications Science'] ];
    $('#profile-facts').innerHTML=values.map(([k,v])=>`<div><dt>${k}</dt><dd>${v}</dd></div>`).join('');
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
    if (!isArchive) { renderProfile(); renderAbout(); renderNews(); renderService(); }
    renderPublications();
    
    
    renderExtra();
    if(isArchive)renderPublications();
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

    $("#copy-email-btn")?.addEventListener("click", async () => {
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
        if (box) { box.classList.toggle("open"); toggleBtn.setAttribute("aria-expanded", String(box.classList.contains("open"))); }
        return;
      }
      const copyBtn = e.target.closest(".bibtex-copy");
      if (copyBtn) {
        const pub = SITE_DATA.publications.find((p) => p.id === copyBtn.dataset.id);
        if (!pub) return;
        try {
          await navigator.clipboard.writeText(bibText(pub));
          showToast(SITE_DATA.ui[state.lang].toast.bibtexCopied);
        } catch {
          showToast("Copy failed");
        }
      }
    });
  }

  if(isArchive){
    for(const id of ['pub-year','pub-area'])$('#'+id).addEventListener('change',renderPublications);
    $('#filter-reset').addEventListener('click',()=>{state.pubFilter='all';state.pubQuery='';$('#pub-search').value='';$('#pub-year').value='';$('#pub-area').value='';$$('.filter-btn').forEach(b=>b.classList.toggle('active',b.dataset.filter==='all'));renderPublications();});
  }else{
    $('#copy-ieee-email-btn').addEventListener('click',async()=>{try{await navigator.clipboard.writeText('ting.bi@ieee.org');showToast(SITE_DATA.ui[state.lang].toast.emailCopied)}catch{showToast('ting.bi@ieee.org')}});
  }
  applyTheme(state.theme);
  renderAll();
  bindEvents();
  if(isArchive){const a=new URLSearchParams(location.search).get('area');if(a&&[...$('#pub-area').options].some(o=>o.value===a)){$('#pub-area').value=a;renderPublications();}}
})();
