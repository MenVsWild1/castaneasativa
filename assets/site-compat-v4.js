(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function s(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(n){if(n.ep)return;n.ep=!0;const r=s(n);fetch(n.href,r)}})();const p=".",k=e=>`./images/${encodeURIComponent(e)}.webp`;async function C(){const e=await fetch(`${p}/content.json`,{cache:"no-store"});if(!e.ok)throw new Error(`content HTTP ${e.status}`);return e.json()}async function T(){const e=await fetch(`${p}/reviews.json`);if(!e.ok)throw new Error(`Не удалось загрузить отзывы (HTTP ${e.status})`);return e.json()}async function j(e){const t=await fetch(`${p}/reviews.json`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(!t.ok){const s=await t.json().catch(()=>({}));throw new Error(s.error||`HTTP ${t.status}`)}return t.json()}function N(e){return;try{const t=JSON.stringify({tab:e});navigator.sendBeacon?navigator.sendBeacon(`${p}/track`,new Blob([t],{type:"application/json"})):fetch(`${p}/track`,{method:"POST",headers:{"Content-Type":"application/json"},body:t,keepalive:!0})}catch{}}let f={};const u=()=>f["site.vk"]||"https://vk.com/castanea_sativa";function i(e){return String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}const a=e=>i(f[e]??""),l=e=>i(f[e]??"").replace(/\n/g,"<br>");function d(e,t){return`<img src="${k(e)}" alt="${i(t)}" loading="eager"
    onerror="this.onerror=null;this.src='./images/${e}.jpg'" />`}const q=[{id:"home",label:"Главная"},{id:"about",label:"Что такое тизан"},{id:"harvest",label:"Сбор и производство"},{id:"brew",label:"Как заваривать"},{id:"horeca",label:"Сотрудничество"},{id:"reviews",label:"Отзывы"},{id:"contacts",label:"Контакты"}],v={home:"hero-forest",about:"about-cup",harvest:"harvest",brew:"brew",horeca:"horeca",reviews:"hero-forest",contacts:"hero-forest"};function A(e){switch(e){case"home":return`
        <div class="split hero-split">
          <div class="split-text">
            <span class="eyebrow">${a("home.eyebrow")}</span>
            <h1 class="title">${a("home.title")}</h1>
            <p class="tagline">${a("home.tagline")}</p>
            <p class="lead">${l("home.lead")}</p>
            <div class="cta-row">
              <a class="btn btn-primary" href="${u()}" target="_blank" rel="noopener">${a("home.cta")}</a>
              <button class="btn btn-ghost" data-goto="about">Узнать больше</button>
            </div>
            <p class="fineprint">${a("home.fineprint")}</p>
          </div>
          <figure class="split-media">${d("about-cup","Чашка тизана Castanea Sativa")}</figure>
        </div>`;case"about":return`
        <span class="eyebrow">О напитке</span>
        <h2>${a("about.title")}</h2>
        <div class="split">
          <div class="split-text">
            <p>${l("about.p1")}</p>
            <p>${l("about.p2")}</p>
            <p class="accent">${a("about.accent")}</p>
          </div>
          <figure class="split-media">${d("harvest","Сушёные соцветия каштана")}</figure>
        </div>`;case"harvest":return`
        <span class="eyebrow">Происхождение</span>
        <h2>${a("harvest.title")}</h2>
        <div class="split">
          <figure class="split-media">${d("hands","Соцветия каштана, собранные вручную")}</figure>
          <div class="split-text">
            <ul class="facts">
              <li>${m("harvest.fact1")}</li>
              <li>${m("harvest.fact2")}</li>
              <li>${m("harvest.fact3")}</li>
              <li>${m("harvest.fact4")}</li>
            </ul>
            <p class="accent">${a("harvest.accent")}</p>
          </div>
        </div>`;case"brew":return`
        <span class="eyebrow">Ритуал</span>
        <h2>${a("brew.title")}</h2>
        <div class="split">
          <div class="split-text">
            <ol class="steps">
              <li><span class="num">${a("brew.step1num")}</span> ${a("brew.step1text")}</li>
              <li><span class="num">${a("brew.step2num")}</span> ${a("brew.step2text")}</li>
              <li><span class="num">${a("brew.step3num")}</span> ${a("brew.step3text")}</li>
              <li><span class="num">${a("brew.step4num")}</span> ${a("brew.step4text")}</li>
            </ol>
            <p class="accent">${a("brew.accent")}</p>
          </div>
          <figure class="split-media">${d("brew","Заваренный тизан Castanea Sativa")}</figure>
        </div>`;case"horeca":return`
        <span class="eyebrow">HoReCa</span>
        <h2>${a("horeca.title")}</h2>
        <div class="split">
          <figure class="split-media">${d("horeca","Тизан в атмосфере кафе")}</figure>
          <div class="split-text">
            <p>${l("horeca.p1")}</p>
            <p>${l("horeca.p2")}</p>
            <a class="btn btn-primary" href="${u()}" target="_blank" rel="noopener">${a("horeca.cta")}</a>
          </div>
        </div>`;case"reviews":return`
        <span class="eyebrow">Впечатления</span>
        <h2>${a("reviews.title")}</h2>
        <p class="reviews-intro">${l("reviews.intro")}</p>

        <form class="review-form" id="review-form" autocomplete="off">
          <div class="rf-row">
            <input class="rf-input" name="author" maxlength="60" placeholder="Ваше имя" required />
            <input class="rf-input" name="role" maxlength="60" placeholder="Город или статус (необязательно)" />
          </div>
          <div class="rf-stars" id="rf-stars" role="radiogroup" aria-label="Оценка">
            ${[1,2,3,4,5].map(t=>`<button type="button" class="rf-star" data-val="${t}" aria-label="${t} из 5">★</button>`).join("")}
            <input type="hidden" name="rating" value="" />
          </div>
          <textarea class="rf-input rf-text" name="text" maxlength="1000" rows="3"
            placeholder="Аромат, вкус, впечатления…" required></textarea>
          <div class="rf-actions">
            <button class="btn btn-primary" type="submit">Оставить отзыв</button>
            <span class="rf-status" id="rf-status" role="status"></span>
          </div>
        </form>

        <div class="reviews-grid" id="reviews-list"></div>
        <p class="reviews-empty" id="reviews-empty"></p>`;case"contacts":return`
        <figure class="contact-photo"><img src="./images/contacts-photo.webp" alt="Castanea Sativa" onerror="this.onerror=null;this.src='./images/contacts-photo.jpg'"></figure>
        <span class="eyebrow">Связь и заказ</span>
        <h2>${a("contacts.title")}</h2>
        <p class="lead">${l("contacts.lead")}</p>
        <p class="subscribe">${l("contacts.subscribe")}</p>
        <div class="cta-row">
          <a class="btn btn-primary btn-lg" href="${u()}" target="_blank" rel="noopener">${a("contacts.cta")}</a>
        </div>
        <p class="fineprint">${i(u().replace("https://",""))}</p>`;default:return""}}function m(e){const t=String(f[e]??""),s=t.match(/^(.*?[.!?])\s+(.*)$/s);return s?`<strong>${i(s[1])}</strong> ${i(s[2])}`:i(t)}function O(){const e=document.querySelector("#app");e.innerHTML=`
    <header class="site-header">
      <button class="brand" data-goto="home" aria-label="На главную">
        <span class="brand-mark">❦</span>
        <span class="brand-name">${a("brand.name")}</span>
      </button>
      <nav class="tabs" id="tabs">
        ${q.map(t=>`<button class="tab" data-tab="${t.id}">${t.label}</button>`).join("")}
      </nav>
      <a class="vk-pill" href="${u()}" target="_blank" rel="noopener">ВК-сообщество</a>
    </header>

    <main class="stage">
      ${q.map(t=>`<section class="panel" id="panel-${t.id}" role="tabpanel">
          <div class="card">${A(t.id)}</div>
        </section>`).join("")}
    </main>

    <footer class="site-footer">
      <span>${a("footer.text")}</span>
      <a href="${u()}" target="_blank" rel="noopener">Подписаться в ВК →</a>
    </footer>
  `,P(),b("home")}function b(e){document.querySelectorAll(".tab").forEach(s=>s.classList.toggle("is-active",s.dataset.tab===e)),document.querySelectorAll(".panel").forEach(s=>s.classList.toggle("is-active",s.id===`panel-${e}`));const t=document.querySelector(".bg");t&&v[e]&&(t.style.backgroundImage=`url("${k(v[e])}"), url("./images/${v[e]}.webp")`),e==="reviews"&&H(),N(e),window.scrollTo({top:0,behavior:"smooth"})}function P(){document.querySelectorAll("[data-tab]").forEach(e=>e.addEventListener("click",()=>b(e.dataset.tab))),document.querySelectorAll("[data-goto]").forEach(e=>e.addEventListener("click",()=>b(e.dataset.goto))),R()}function _(e){return e?`<span class="r-stars" aria-label="Оценка ${e} из 5">${"★".repeat(e)}${"☆".repeat(5-e)}</span>`:""}function B(e){if(!e)return"";try{return new Intl.DateTimeFormat("ru-RU",{day:"numeric",month:"long",year:"numeric"}).format(new Date(e))}catch{return""}}function E(e){const t=e.role?`<span class="r-role">${i(e.role)}</span>`:"",s=e.created_at?`<span class="r-date">${B(e.created_at)}</span>`:"";return`
    <blockquote class="review">
      ${_(e.rating)}
      <p>«${i(e.text)}»</p>
      <footer><span class="r-author">${i(e.author)}</span>${t}${s}</footer>
    </blockquote>`}let L=!1;async function H(e=!1){if(L&&!e)return;const t=document.querySelector("#reviews-list"),s=document.querySelector("#reviews-empty");if(!(!t||!s)){s.textContent="Загружаем отзывы…";try{const o=await T();L=!0,t.innerHTML=o.map(E).join(""),s.textContent=o.length?"":"Пока опубликованных отзывов нет."}catch(o){s.textContent=`Не удалось загрузить отзывы. ${o.message}`}}}function R(){const e=document.querySelector("#review-form");if(!e)return;e.innerHTML='<p>Чтобы поделиться впечатлениями, напишите в <a href="https://vk.com/castanea_sativa" target="_blank" rel="noopener">наше сообщество ВКонтакте</a>.</p>';return;const t=e.querySelector("#rf-status"),s=e.querySelector('input[name="rating"]'),o=[...e.querySelectorAll(".rf-star")],n=r=>o.forEach(c=>c.classList.toggle("is-on",Number(c.dataset.val)<=r));o.forEach(r=>{r.addEventListener("mouseenter",()=>n(Number(r.dataset.val))),r.addEventListener("click",()=>{s.value=r.dataset.val,n(Number(r.dataset.val))})}),e.querySelector("#rf-stars").addEventListener("mouseleave",()=>n(Number(s.value)||0)),e.addEventListener("submit",async r=>{var y,S,x;r.preventDefault();const c=new FormData(e),$=(y=c.get("author"))==null?void 0:y.toString().trim(),g=(S=c.get("text"))==null?void 0:S.toString().trim();if(!$||!g)return;const w=e.querySelector('button[type="submit"]');w.disabled=!0,t.textContent="Отправляем…",t.className="rf-status";try{const h=await j({author:$,role:((x=c.get("role"))==null?void 0:x.toString())||null,rating:Number(c.get("rating"))||null,text:g});document.querySelector("#reviews-list").insertAdjacentHTML("afterbegin",E(h)),document.querySelector("#reviews-empty").textContent="",e.reset(),s.value="",n(0),t.textContent="Спасибо! Ваш отзыв опубликован.",t.className="rf-status is-ok"}catch(h){t.textContent=`Не получилось отправить: ${h.message}`,t.className="rf-status is-error"}finally{w.disabled=!1}})}async function I(){let e={};try{((await fetch("./site-content.json",{cache:"no-store"}).then(o=>o.json())).fields||[]).forEach(o=>e[o.key]=o.value)}catch{e={"brand.name":"Castanea Sativa","home.title":"Castanea Sativa"}}let t={};try{t=await C()}catch{}f={...e,...t},O()}I();
