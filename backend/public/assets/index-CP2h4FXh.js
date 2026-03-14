(function () { const t = document.createElement('link').relList; if (t && t.supports && t.supports('modulepreload')) return; for (const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e); new MutationObserver((e) => { for (const o of e) if (o.type === 'childList') for (const a of o.addedNodes)a.tagName === 'LINK' && a.rel === 'modulepreload' && r(a) }).observe(document, { childList: !0, subtree: !0 }); function s(e) { const o = {}; return e.integrity && (o.integrity = e.integrity), e.referrerPolicy && (o.referrerPolicy = e.referrerPolicy), e.crossOrigin === 'use-credentials' ? o.credentials = 'include' : e.crossOrigin === 'anonymous' ? o.credentials = 'omit' : o.credentials = 'same-origin', o } function r(e) { if (e.ep) return; e.ep = !0; const o = s(e); fetch(e.href, o) } })(); function c({ name: n, description: t, href: s, component: r }) {
  return `
  <a href=${s}
  <h1>${n}</h1>
  <h2>${t}</h2>  
  </a>
  `
} function u(n) {
  return `<a href=${`/teachers/${n.id}/lessons`}>
    <h5 class="teacherName">${n.name}</h5>
  </a>`
} async function d() {
  async function n() {
    try { const r = await fetch('/apiv1/teachers'); if (!r.ok) throw new Error(`HTTP error! status: ${r.status}`); return await r.json() }
    catch (r) { console.error('Fetch error:', r) }
  } const t = await n(); return console.log(123, t), `<h1>${t.map(r => u(r)).join(`
`)}</h1>`
} function i() {
  return `
    <div class="main">
      <h1>Расписание занятий</h1>
      <h2>Выберите категорию для просмотра</h2>
      <div class="mainCardsContainer">
        ${c({ name: 'Преподаватели', description: 'Расписание по преподавателям', href: 'teachers' })}
        ${c({ name: 'Группы', description: 'Расписание по группам', href: 'groups' })}
      </div>
    </div>
  `
} const l = document.querySelector('#app'); l.innerHTML = i(); function f(n = 0) { const t = new Date(), s = t.getDay(), r = s === 0 ? 6 : s - 1; t.setDate(t.getDate() - r + n * 7); const e = t.getFullYear(), o = String(t.getMonth() + 1).padStart(2, '0'), a = String(t.getDate()).padStart(2, '0'); return `${e}-${o}-${a}` } async function p() {
  const n = new URL(window.location.href).pathname.split('/')[2], t = f(); async function s() {
    try { const e = await fetch(`/apiv1/teachers/lessons?teacher=${n}&date=${t}`); if (!e.ok) throw new Error(`HTTP error! status: ${e.status}`); return await e.json() }
    catch (e) { console.error('Fetch error:', e) }
  } const r = await s(); return console.log('lessons ', r), '<h1>Страница с расписанием</h1>'
} const h = { teachers: d, lessons: p, publications: i }; document.addEventListener('click', async (n) => { const t = n.target.closest('a'); if (t) { n.preventDefault(); const s = new URL(t.href); history.pushState(void 0, void 0, s); const r = document.querySelector('#app'); r.innerHTML = await h[s.pathname.split('/').at(-1)]() } }); window.addEventListener('popstate', async () => { const n = new URL(window.location.href), t = document.querySelector('#app'); t.innerHTML = await h[n.pathname.split('/')[1]]() })
