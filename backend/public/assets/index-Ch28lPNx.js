(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();function a(){return fetch("/apiv1/teachers").then(t=>{if(!t.ok)throw new Error("Network response was not ok: "+t.statusText);return t.json()}).then(t=>{console.log(t)}).catch(t=>{console.error("There was a problem with the fetch operation:",t)}),"<h1>TEACHERS PAGE</h1>"}function s({name:t,description:o,href:n,component:c}){return`
  <a href=${n}
  <h1>${t}</h1>
  <h2>${o}</h2>  
  </a>
  `}function u(){return console.log("app renders"),`
    <div class="main">
      <h1>Расписание занятий</h1>
      <h2>Выберите категорию для просмотра</h2>
      <div class="mainCardsContainer">
        ${s({name:"Преподаватели",description:"Расписание по преподавателям",href:"/teachers",component:a})}
        ${s({name:"Группы",description:"Расписание по группам",href:"/groups"})}
      </div>
    </div>
  `}const f=document.querySelector("#app");f.innerHTML=u();document.addEventListener("click",function(t){const o={"/teachers":a},n=t.target.closest("a");if(n){t.preventDefault();const c=new URL(n.href),e=document.querySelector("#app");e.innerHTML=o[c.pathname]()}});
