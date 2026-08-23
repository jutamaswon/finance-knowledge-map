/* ============================================================
   Free Knowledge Map — app
   ============================================================ */

(function () {
  "use strict";

  const state = { track: "all", tags: new Set(), q: "" };
  const TYPE_ICON = {
    course: "🎓", videos: "🎬", book: "📕", paper: "📄",
    data: "📊", notes: "📝", docs: "📋", workshop: "🛠️"
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

  const chips = [
    `📚 <b>${totalItems}</b> รายการ (ไม่จำเป็นต้องเรียนหมด)`,
    `🎚️ ${KM.meta.level}`,
    `🔗 Last link check: <b>${KM.meta.lastCheck}</b>${KM.meta.recheck ? ` · re-check ${KM.meta.recheck}` : ""}`,
    `🎯 ${KM.meta.note}`
  ];
  document.getElementById("metachips").innerHTML =
    chips.map(c => `<span class="metachip">${c}</span>`).join("") +
    `<span class="metachip">✔️ ${KM.meta.selectionNote}</span>`;

  document.getElementById("access").innerHTML =
    `<h3 style="grid-column:1/-1;margin:0;font-size:1rem">💦 วิธีเข้าถึง material ฟรี</h3>` +
    KM.access.map(a => `
      <div class="access-card">
        <a href="${esc(a.url)}" target="_blank" rel="noopener">${esc(a.name)} ↗</a>
        <p>${esc(a.note)}</p>
      </div>`).join("");

  // ---------- render: sidebar nav ----------
  function renderNav() {
    const nav = document.getElementById("nav");
    let html = `<a href="#" data-track="all" class="${state.track === "all" ? "active" : ""}">🌐 ทั้งหมด <span class="cnt">${totalItems}</span></a>`;
    sections.forEach(sec => {
      html += `<a href="#" data-track="${sec.id}" class="${state.track === sec.id ? "active" : ""}">
        <span class="navtrack"><span>${sec.icon} ${esc(sec.id === "F" || sec.id === "DATA" ? sec.name : sec.name.split(" — ")[0])}</span></span>
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
          `<a href="${esc(u.u)}" target="_blank" rel="noopener" class="${i === 0 ? "primary" : ""}">${esc(u.l)} ↗</a>`).join("")
      : `<a href="${esc(it.url)}" target="_blank" rel="noopener" class="primary">เปิด ↗</a>`;
    const badges = [
      ...(it.tags || []).map(t => `<span class="badge ${t}">${KM.tagMeta[t].label}</span>`),
      it.role ? `<span class="badge role">${esc(it.role)}</span>` : "",
      it.provider ? `<span class="badge provider">${esc(it.provider)}</span>` : ""
    ].join("");
    return `<article class="card" style="--track:${accent}">
      <div class="card-top">
        <div class="card-title">${main ? `<a href="${esc(main.u)}" target="_blank" rel="noopener">${esc(it.title)}</a>` : `<a href="${esc(it.url)}" target="_blank" rel="noopener">${esc(it.title)}</a>`}</div>
        <span class="typechip">${TYPE_ICON[it.type] || "🔗"} ${esc(it.type)}</span>
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
      <span>${esc(it.title)}</span><span class="go">เปิด ↗</span></a>`;
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
          <span class="icon">${sec.icon}</span>
          <h2 class="section-title">${sec.id !== "F" && sec.id !== "DATA" ? `<span class="trackid">${sec.id} ·</span> ` : ""}${esc(sec.name.replace(/^Track [A-D] — /, ""))}</h2>
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
    for (const id of ["pathsPanel", "methodPanel", "notCoveredPanel"]) {
      document.getElementById(id).style.display = showPanels ? "" : "none";
    }

    document.getElementById("stats").textContent = `แสดง ${shown} / ${totalItems} รายการ`;
  }

  // ---------- render: paths ----------
  document.getElementById("paths").innerHTML = KM.paths.map(p => `
    <div class="path">
      <h3>${p.icon} ${esc(p.title)}</h3>
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
    KM.notCovered.map(s => `<li>🚧 ${esc(s)}</li>`).join("");
  document.getElementById("notCoveredNote").textContent = KM.notCoveredNote;

  // ---------- footer ----------
  document.getElementById("footCopyright").textContent = "⚠️ " + KM.footer.copyright;
  document.getElementById("footDisclaimer").textContent = KM.footer.disclaimer;
  document.getElementById("footMeta").textContent =
    `Free Knowledge Map — material ส่วนใหญ่เป็นของ MIT, Stanford, Yale, NYU, Columbia, Berkeley, Caltech และงานที่อาจารย์/นักวิจัย/practitioner เปิดให้เรียนฟรีเอง · ระดับ material: undergraduate → PhD/research · Last link check: ${KM.meta.lastCheck}`;

  // ---------- search ----------
  let debounce;
  document.getElementById("q").addEventListener("input", e => {
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
    themeBtn.textContent = t === "dark" ? "🌙" : "☀️";
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

  render();
})();
