/* ============================================================
   Free Knowledge Map — app
   ============================================================ */

(function () {
  "use strict";

  const state = { track: "all", tags: new Set(), q: "" };

  // ---------- inline SVG icon system (stroke-based, no emoji) ----------
  const svg = inner => `<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${inner}</svg>`;

  const ICONS = {
    map: svg(`<polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/>`),
    search: svg(`<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>`),
    moon: svg(`<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>`),
    sun: svg(`<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>`),
    compass: svg(`<circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>`),
    alert: svg(`<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>`),
    slash: svg(`<circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/>`),
    ext: svg(`<line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>`),
    up: svg(`<line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/>`),
    globe: svg(`<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>`),
    check: svg(`<polyline points="20 6 9 17 4 12"/>`),
    layers: svg(`<polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>`),
    book: svg(`<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>`),
    link: svg(`<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>`),
    sliders: svg(`<line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/>`),
    target: svg(`<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>`),
    briefcase: svg(`<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>`),
    trend: svg(`<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>`),
    cpu: svg(`<rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/>`),
    spark: svg(`<path d="M12 2l1.9 5.7 5.7 1.9-5.7 1.9L12 17.2l-1.9-5.7L4.4 9.6l5.7-1.9z"/><path d="M19 15l.9 2.6 2.6.9-2.6.9L19 22l-.9-2.6-2.6-.9 2.6-.9z"/>`),
    database: svg(`<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>`),
    cap: svg(`<path d="M22 10L12 5 2 10l10 5 10-5z"/><path d="M6 12.5V17c0 1.66 2.69 3 6 3s6-1.34 6-3v-4.5"/>`),
    play: svg(`<circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/>`),
    file: svg(`<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>`),
    chart: svg(`<line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/>`),
    edit: svg(`<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4z"/>`),
    folder: svg(`<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>`),
    tool: svg(`<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>`),
    landmark: svg(`<line x1="3" y1="22" x2="21" y2="22"/><line x1="6" y1="18" x2="6" y2="11"/><line x1="10" y1="18" x2="10" y2="11"/><line x1="14" y1="18" x2="14" y2="11"/><line x1="18" y1="18" x2="18" y2="11"/><polygon points="12 2 20 7 4 7"/>`),
    flask: svg(`<path d="M10 2v7.5L4.6 18a2 2 0 0 0 1.7 3h11.4a2 2 0 0 0 1.7-3L14 9.5V2"/><line x1="8" y1="2" x2="16" y2="2"/><line x1="7" y1="15" x2="17" y2="15"/>`),
    calc: svg(`<rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" y1="6" x2="16" y2="6"/><line x1="8" y1="10" x2="8" y2="10.01"/><line x1="12" y1="10" x2="12" y2="10.01"/><line x1="16" y1="10" x2="16" y2="10.01"/><line x1="8" y1="14" x2="8" y2="14.01"/><line x1="12" y1="14" x2="12" y2="14.01"/><line x1="16" y1="14" x2="16" y2="14.01"/><line x1="8" y1="18" x2="8" y2="18.01"/><line x1="12" y1="18" x2="12" y2="18.01"/><line x1="16" y1="18" x2="16" y2="18.01"/>`),
    credit: svg(`<rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/>`),
    bolt: svg(`<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>`),
    list: svg(`<line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/>`),
    info: svg(`<circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>`)
  };
  const icon = k => ICONS[k] || ICONS.link;

  const TYPE_ICON = {
    course: "cap", videos: "play", book: "book", paper: "file",
    data: "chart", notes: "edit", docs: "folder", workshop: "tool"
  };
  const TAG_ORDER = ["core", "optional", "reference", "specialized", "recommended", "advanced"];
  const LS_CHECK = "km-check-v1";
  const LS_THEME = "km-theme";

  // ---------- flatten items with track info ----------
  const sections = KM.sections;
  sections.forEach(sec => {
    sec._count = 0;
    sec.groups.forEach(g => g.items.forEach(it => {
      it._track = sec.id;
      if (it.urls || it.url) sec._count++;
    }));
  });
  const totalItems = sections.reduce((a, s) => a + s._count, 0);

  const esc = s => String(s ?? "").replace(/[&<>"']/g,
    c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  const itemText = it => [
    it.title, it.author, it.provider, it.desc, it.note, it.type, it.role,
    it.tags ? it.tags.join(" ") : "", (it.urls || []).map(u => u.l).join(" ")
  ].join(" ").toLowerCase();

  const matches = it => {
    if (state.q && !itemText(it).includes(state.q)) return false;
    if (state.tags.size) {
      const tags = it.tags || [];
      if (!tags.some(t => state.tags.has(t))) return false;
    }
    return true;
  };

  // ---------- render: hero / meta ----------
  document.getElementById("tagline").textContent = KM.meta.tagline;

  // attribution — original list source
  const SRC = KM.meta.source;
  if (SRC) {
    document.getElementById("attribution").innerHTML =
      `${icon("book")}<span><b>แหล่งที่มาของลิสต์:</b> รวบรวมและคัดสกรีนโดย${esc(SRC.platform)} ` +
      `<a href="${esc(SRC.url)}" target="_blank" rel="noopener"><b>${esc(SRC.page)}</b> ${icon("ext")}</a>` +
      `<span class="attr-note">${esc(SRC.note)}</span></span>`;
  }

  const chips = [
    `${icon("book")} <span><b>${totalItems}</b> รายการ (ไม่จำเป็นต้องเรียนหมด)</span>`,
    `${icon("sliders")} <span>${esc(KM.meta.level)}</span>`,
    `${icon("link")} <span>Last link check: <b>${esc(KM.meta.lastCheck)}</b>${KM.meta.recheck ? ` · re-check ${esc(KM.meta.recheck)}` : ""}</span>`,
    `${icon("target")} <span>${esc(KM.meta.note)}</span>`
  ];
  document.getElementById("metachips").innerHTML =
    chips.map(c => `<span class="metachip">${c}</span>`).join("") +
    `<span class="metachip">${icon("check")} <span>${esc(KM.meta.selectionNote)}</span></span>`;

  document.getElementById("access").innerHTML =
    `<h3 style="grid-column:1/-1;margin:0;font-size:1rem">${icon("info")} วิธีเข้าถึง material ฟรี</h3>` +
    KM.access.map(a => `
      <div class="access-card">
        <a href="${esc(a.url)}" target="_blank" rel="noopener">${esc(a.name)} ${icon("ext")}</a>
        <p>${esc(a.note)}</p>
      </div>`).join("");

  // ---------- render: sidebar nav ----------
  function renderNav() {
    const nav = document.getElementById("nav");
    let html = `<a href="#" data-track="all" class="${state.track === "all" ? "active" : ""}">${icon("globe")} <span>ทั้งหมด</span> <span class="cnt">${totalItems}</span></a>`;
    sections.forEach(sec => {
      html += `<a href="#" data-track="${sec.id}" class="${state.track === sec.id ? "active" : ""}">
        <span class="navtrack"><span class="nav-label">${icon(sec.icon)} ${esc(sec.name)}</span></span>
        <span class="cnt">${sec._count}</span></a>`;
    });
    nav.innerHTML = html;
    nav.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", e => {
        e.preventDefault();
        state.track = a.dataset.track;
        render();
        if (window.innerWidth <= 1000) window.scrollTo({ top: 0, behavior: "smooth" });
      });
    });
  }

  // ---------- render: tag filters ----------
  function renderTagFilters() {
    const box = document.getElementById("tagFilters");
    box.innerHTML = TAG_ORDER.map(t => {
      const m = KM.tagMeta[t];
      const on = state.tags.has(t);
      return `<button class="tagchip ${on ? "on" : ""}" data-tag="${t}" title="${esc(m.hint)}">${m.label}</button>`;
    }).join("");
    box.querySelectorAll(".tagchip").forEach(b => {
      b.addEventListener("click", () => {
        const t = b.dataset.tag;
        state.tags.has(t) ? state.tags.delete(t) : state.tags.add(t);
        render();
      });
    });
  }

  // ---------- render: cards ----------
  function cardHTML(it, accent) {
    const main = it.urls ? it.urls[0] : null;
    const links = it.urls
      ? it.urls.map((u, i) =>
          `<a href="${esc(u.u)}" target="_blank" rel="noopener" class="${i === 0 ? "primary" : ""}">${esc(u.l)} ${icon("ext")}</a>`).join("")
      : `<a href="${esc(it.url)}" target="_blank" rel="noopener" class="primary">เปิด ${icon("ext")}</a>`;
    const badges = [
      ...(it.tags || []).map(t => `<span class="badge ${t}">${KM.tagMeta[t].label}</span>`),
      it.role ? `<span class="badge role">${esc(it.role)}</span>` : "",
      it.provider ? `<span class="badge provider">${esc(it.provider)}</span>` : ""
    ].join("");
    return `<article class="card" style="--track:${accent}">
      <div class="card-top">
        <div class="card-title">${main ? `<a href="${esc(main.u)}" target="_blank" rel="noopener">${esc(it.title)}</a>` : `<a href="${esc(it.url)}" target="_blank" rel="noopener">${esc(it.title)}</a>`}</div>
        <span class="typechip">${icon(TYPE_ICON[it.type] || "link")}<span>${esc(it.type)}</span></span>
      </div>
      ${it.author ? `<div class="card-author">โดย ${esc(it.author)}</div>` : ""}
      <div class="badges">${badges}</div>
      ${it.desc ? `<p class="card-desc">${esc(it.desc)}</p>` : ""}
      ${it.note ? `<p class="card-note">${esc(it.note)}</p>` : ""}
      <div class="card-links">${links}</div>
    </article>`;
  }

  function quickHTML(it, accent) {
    return `<a href="${esc(it.url)}" target="_blank" rel="noopener" style="--track:${accent}">
      <span>${esc(it.title)}</span><span class="go">เปิด ${icon("ext")}</span></a>`;
  }

  function render() {
    renderNav();
    renderTagFilters();
    const root = document.getElementById("content");
    let shown = 0;
    let html = "";

    sections.forEach(sec => {
      if (state.track !== "all" && state.track !== sec.id) return;

      let secHTML = "";
      let secShown = 0;
      sec.groups.forEach(g => {
        const items = g.items.filter(matches);
        if (!items.length) return;
        secShown += items.length;
        secHTML += `<div class="group">
          <div class="group-h"><h3>${esc(g.g)}</h3><span class="gcount">${items.length}</span></div>
          ${g.intro ? `<p class="group-intro">${esc(g.intro)}</p>` : ""}
          ${sec.quick
            ? `<div class="quick">${items.map(it => quickHTML(it, sec.accent)).join("")}</div>`
            : `<div class="cards">${items.map(it => cardHTML(it, sec.accent)).join("")}</div>`}
          ${g.outro ? `<p class="group-outro">${esc(g.outro)}</p>` : ""}
        </div>`;
      });

      if (!secShown) return;
      shown += secShown;
      html += `<section class="section" id="sec-${sec.id}">
        <div class="section-head" style="border-bottom-color:${sec.accent}55">
          <span class="icon">${icon(sec.icon)}</span>
          <h2 class="section-title">${["A", "B", "C", "D"].includes(sec.id) ? `<span class="trackid">${sec.id} ·</span> ` : ""}${esc(sec.name)}</h2>
          <span class="gcount">${secShown} รายการ</span>
        </div>
        ${sec.th ? `<p class="section-th">${esc(sec.th)}</p>` : ""}
        ${sec.intro ? `<p class="section-intro">${esc(sec.intro)}</p>` : ""}
        ${secHTML}
      </section>`;
    });

    root.innerHTML = html || `<p class="empty">ไม่พบรายการที่ตรงกับตัวกรอง／คำค้น — ลองล้างตัวกรองดูครับ</p>`;

    // toggle special panels visibility per track filter
    const showPanels = state.track === "all";
    for (const id of ["indexPanel", "pathsPanel", "methodPanel", "notCoveredPanel"]) {
      document.getElementById(id).style.display = showPanels ? "" : "none";
    }

    document.getElementById("stats").textContent = `แสดง ${shown} / ${totalItems} รายการ`;
  }

  // ---------- render: index (ทุกรายการ + ผู้สอน/เจ้าของคอร์ส) ----------
  function renderIndex() {
    const host = u => { try { return new URL(u).hostname.replace(/^www\./, ""); } catch (e) { return ""; } };
    const rows = [];
    sections.forEach(sec => sec.groups.forEach(g => g.items.forEach(it => {
      if (it.urls || it.url) rows.push({ sec, g, it });
    })));
    document.getElementById("indexTable").innerHTML = `
      <div class="index-scroll">
      <table class="index-table">
        <thead><tr>
          <th>#</th><th>รายการ</th><th>ผู้สอน / ผู้แต่ง</th><th>สถาบัน / แหล่งเผยแพร่</th><th>ประเภท</th><th>หมวด</th>
        </tr></thead>
        <tbody>
        ${rows.map((r, i) => {
          const it = r.it;
          const url = it.urls ? it.urls[0].u : it.url;
          const owner = it.author ? `<b>${esc(it.author)}</b>` : `<span class="dim">—</span>`;
          const prov = it.provider ? esc(it.provider) : (esc(host(url)) || `<span class="dim">—</span>`);
          const isTrack = ["A", "B", "C", "D"].includes(r.sec.id);
          return `<tr>
            <td class="dim idx-num">${i + 1}</td>
            <td class="idx-title"><a href="${esc(url)}" target="_blank" rel="noopener">${esc(it.title)}</a></td>
            <td class="idx-owner">${owner}</td>
            <td class="idx-prov">${prov}</td>
            <td class="dim">${esc(it.type || "data")}</td>
            <td class="dim idx-cat">${isTrack ? `<span class="idx-track" style="--track:${r.sec.accent}">${r.sec.id}</span> ` : ""}${esc(r.g.g)}</td>
          </tr>`;
        }).join("")}
        </tbody>
      </table></div>`;
  }

  // ---------- render: paths ----------
  document.getElementById("paths").innerHTML = KM.paths.map(p => `
    <div class="path">
      <h3><span class="path-ic">${icon(p.icon)}</span> ${esc(p.title)}</h3>
      <ol>${p.steps.map(s => `<li>${esc(s)}</li>`).join("")}</ol>
      ${p.note ? `<p class="path-note">${esc(p.note)}</p>` : ""}
    </div>`).join("");

  // ---------- render: methodology ----------
  const M = KM.method;
  document.getElementById("methodTitle").textContent = M.title;
  document.getElementById("methodLead").textContent = M.lead;
  document.getElementById("asked").innerHTML = M.asked.map(s => `<li>${esc(s)}</li>`).join("");
  document.getElementById("facts").innerHTML = M.facts.map(s => `<li>${esc(s)}</li>`).join("");
  document.getElementById("checklistTitle").textContent = M.checklistTitle;
  document.getElementById("checklist").innerHTML = M.checklist.map((s, i) =>
    `<li><label><input type="checkbox" data-i="${i}"><span>${esc(s)}</span></label></li>`).join("");
  document.getElementById("principles").innerHTML =
    M.principles.map(s => `<div class="principle">${esc(s)}</div>`).join("");

  // checklist persistence + progress
  const saved = JSON.parse(localStorage.getItem(LS_CHECK) || "[]");
  const boxes = document.querySelectorAll("#checklist input");
  boxes.forEach(b => { b.checked = !!saved[+b.dataset.i]; });
  function updateProgress() {
    const done = [...boxes].filter(b => b.checked).length;
    const pct = Math.round(done / boxes.length * 100);
    document.getElementById("progressBar").style.width = pct + "%";
    document.getElementById("progressLabel").textContent = `ผ่านการตรวจแล้ว ${done}/${boxes.length} (${pct}%) — เก็บสถานะไว้ในเครื่องอัตโนมัติ`;
  }
  boxes.forEach(b => b.addEventListener("change", () => {
    const arr = JSON.parse(localStorage.getItem(LS_CHECK) || "[]");
    arr[+b.dataset.i] = b.checked;
    localStorage.setItem(LS_CHECK, JSON.stringify(arr));
    updateProgress();
  }));
  updateProgress();

  // ---------- not covered ----------
  document.getElementById("notCoveredTitle").textContent = KM.notCoveredTitle;
  document.getElementById("notCovered").innerHTML =
    KM.notCovered.map(s => `<li>${icon("slash")} ${esc(s)}</li>`).join("");
  document.getElementById("notCoveredNote").textContent = KM.notCoveredNote;

  // ---------- footer ----------
  document.getElementById("footCopyright").innerHTML =
    `${icon("alert")} ${esc(KM.footer.copyright)}`;
  document.getElementById("footDisclaimer").textContent = KM.footer.disclaimer;
  if (SRC) {
    document.getElementById("footSource").innerHTML =
      `ลิสต์ต้นฉบับ: ${esc(SRC.platform)} <a href="${esc(SRC.url)}" target="_blank" rel="noopener">${esc(SRC.page)}</a>`;
  }
  document.getElementById("footMeta").textContent =
    `Free Knowledge Map — material ส่วนใหญ่เป็นของ MIT, Stanford, Yale, NYU, Columbia, Berkeley, Caltech และงานที่อาจารย์/นักวิจัย/practitioner เปิดให้เรียนฟรีเอง · ระดับ material: undergraduate → PhD/research · Last link check: ${KM.meta.lastCheck}`;

  // ---------- search ----------
  const qEl = document.getElementById("q");
  const setPlaceholder = () => {
    qEl.placeholder = window.innerWidth <= 640
      ? "ค้นหาคอร์ส / หนังสือ / ผู้แต่ง…"
      : "ค้นหาคอร์ส / หนังสือ / ผู้แต่ง / สถาบัน… (กด / เพื่อโฟกัส)";
  };
  setPlaceholder();
  window.addEventListener("resize", setPlaceholder);
  let debounce;
  qEl.addEventListener("input", e => {
    clearTimeout(debounce);
    debounce = setTimeout(() => {
      state.q = e.target.value.trim().toLowerCase();
      render();
    }, 120);
  });
  document.addEventListener("keydown", e => {
    if (e.key === "/" && document.activeElement.tagName !== "INPUT") {
      e.preventDefault();
      document.getElementById("q").focus();
    }
  });

  document.getElementById("clearBtn").addEventListener("click", () => {
    state.tags.clear(); state.track = "all"; state.q = "";
    document.getElementById("q").value = "";
    render();
  });

  // ---------- theme ----------
  const themeBtn = document.getElementById("themeBtn");
  function setTheme(t) {
    document.documentElement.dataset.theme = t;
    themeBtn.innerHTML = t === "dark" ? icon("moon") : icon("sun");
    themeBtn.title = t === "dark" ? "สลับเป็นโหมดสว่าง" : "สลับเป็นโหมดมืด";
    localStorage.setItem(LS_THEME, t);
  }
  setTheme(localStorage.getItem(LS_THEME) || "dark");
  themeBtn.addEventListener("click", () =>
    setTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark"));

  // ---------- back to top ----------
  const totop = document.getElementById("totop");
  window.addEventListener("scroll", () =>
    totop.classList.toggle("show", window.scrollY > 600), { passive: true });

  // ---------- expose for debugging ----------
  window.__km = { state, render, totalItems };

  renderIndex();
  render();
})();
