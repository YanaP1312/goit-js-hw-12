import{a as m,i as o,S as y}from"./assets/vendor-D73Uttp0.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const f of i.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function a(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(e){if(e.ep)return;e.ep=!0;const i=a(e);fetch(e.href,i)}})();async function p(r,t=1){return m.defaults.baseURL="https://pixabay.com/api/",(await m.get("?",{params:{key:"47110078-1dfbe4a00d7fe250476d6992f",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15}})).data}function g(r){const t=document.querySelector(".gallery"),a=r.map(s=>`<li class="gallery-item">
        <div class="img-div">
      <a class="gallery-link" href="${s.largeImageURL}">
        <img src="${s.webformatURL}"
        alt="${s.tags}"/>
        </a>
        </div>
        <div class="descr-list">
        <div class="descr-item">
        <b class="info">Likes</b>
        <span class="value">${s.likes}</span>
        </div>
        <div class="descr-item">
        <b class="info">Views</b>
        <span class="value">${s.views}</span>
        </div>
        <div class="descr-item">
        <b class="info">Comments</b>
        <span class="value">${s.comments}</span>
        </div>
        <div class="descr-item">
        <b class="info">Downloads</b>
        <span class="value">${s.downloads}</span>
        </div>
        </div>
        </li>`).join("");t.insertAdjacentHTML("beforeend",a)}function v(){const r=document.querySelector(".gallery");r.innerHTML=""}const h=document.querySelector(".search-form"),l=document.querySelector(".newimg-btn"),c=document.querySelector(".loader"),b=document.querySelector(".gallery");let d=null,n=1,u="";c.hidden=!0;l.hidden=!0;h.addEventListener("submit",w);l.addEventListener("click",L);async function w(r){if(r.preventDefault(),u=r.target.elements.image.value.trim(),n=1,!u){o.warning({message:"Warning! The form is empty, please fill searching form.",position:"topRight"}),h.reset();return}v(),h.reset(),l.hidden=!0,c.hidden=!1;try{const t=await p(u,n);if(t.hits.length===0){o.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}g(t.hits),t.hits.length===15&&(l.hidden=!1),d?d.refresh():d=new y(".gallery-link",{captionsData:"alt",captionDelay:250})}catch{o.error({message:"Error!",position:"topRight"})}finally{c.hidden=!0}}async function L(){n+=1,c.hidden=!1;try{const r=await p(u,n),t=Math.ceil(r.totalHits/15);g(r.hits),d.refresh();const a=b.firstElementChild;if(a){const{height:s}=a.getBoundingClientRect();window.scrollBy({top:s*2,behavior:"smooth"})}n===t&&(o.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),l.hidden=!0)}catch{o.error({message:"Error!",position:"topRight"})}finally{c.hidden=!0}}
//# sourceMappingURL=index.js.map
