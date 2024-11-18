import{a as h,i as a,S as y}from"./assets/vendor-D73Uttp0.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const f of s.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&i(f)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();async function p(r,t=1){return h.defaults.baseURL="https://pixabay.com/api/",(await h.get("?",{params:{key:"47110078-1dfbe4a00d7fe250476d6992f",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15}})).data}function g(r){const t=document.querySelector(".gallery"),o=r.map(i=>`<li class="gallery-item">
        <div class="img-div">
      <a class="gallery-link" href="${i.largeImageURL}">
        <img src="${i.webformatURL}"
        alt="${i.tags}"/>
        </a>
        </div>
        <div class="descr-list">
        <div class="descr-item">
        <b class="info">Likes</b>
        <span class="value">${i.likes}</span>
        </div>
        <div class="descr-item">
        <b class="info">Views</b>
        <span class="value">${i.views}</span>
        </div>
        <div class="descr-item">
        <b class="info">Comments</b>
        <span class="value">${i.comments}</span>
        </div>
        <div class="descr-item">
        <b class="info">Downloads</b>
        <span class="value">${i.downloads}</span>
        </div>
        </div>
        </li>`).join("");t.insertAdjacentHTML("beforeend",o)}function v(){const r=document.querySelector(".gallery");r.innerHTML=""}const m=document.querySelector(".search-form"),l=document.querySelector(".newimg-btn"),c=document.querySelector(".loader");document.querySelector(".gallery");let d=null,n=1,u="";c.hidden=!0;l.hidden=!0;m.addEventListener("submit",b);l.addEventListener("click",w);async function b(r){if(r.preventDefault(),u=r.target.elements.image.value.trim(),n=1,!u){a.warning({message:"Warning! The form is empty, please fill searching form.",position:"topRight"}),m.reset();return}v(),m.reset(),l.hidden=!0,c.hidden=!1;try{const t=await p(u,n);if(t.hits.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}g(t.hits),t.hits.length===15&&(l.hidden=!1),d?d.refresh():d=new y(".gallery-link",{captionsData:"alt",captionDelay:250})}catch{a.error({message:"Error!",position:"topRight"})}finally{c.hidden=!0}}async function w(){n+=1,c.hidden=!1;try{const r=await p(u,n),t=Math.ceil(r.totalHits/15);g(r.hits),d.refresh();const{height:o}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:o*2,behavior:"smooth"}),n===t&&(a.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),l.hidden=!0)}catch{a.error({message:"Error!",position:"topRight"})}finally{c.hidden=!0}}
//# sourceMappingURL=index.js.map
