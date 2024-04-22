import{S as f,i as l}from"./assets/vendor-0fc460d7.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(r){if(r.ep)return;r.ep=!0;const t=o(r);fetch(r.href,t)}})();function g(n){const s="https://pixabay.com/api/",o=new URLSearchParams({key:"43096972-1afb589163252f275da428b1d",q:n,image_type:"photo",orientation:"horizontal",safesearch:"true"}),i=`${s}?${o}`;return fetch(i).then(r=>r.json()).catch(r=>{throw console.error("Error occurred while fetching images:",r),r})}const d=new f(".gallery-link",{captionsData:"alt"});function p(n){const s=document.querySelector(".gallery"),o=n.map(({webformatURL:i,largeImageURL:r,tags:t,likes:a,views:m,comments:u,downloads:h})=>`<li class="list-item">
          <a class="gallery-link" href="${r}">
            <img src="${i}" alt="${t}" class="gallery-image">
          </a>
          <ul class="information-list">
            <li class="item-information-container">
              <h2 class="main-info">Likes </h2>
              <p class="info">${a}</p>
            </li>
            <li class="item-information-container">
              <h2 class="main-info"> Views</h2>
              <p class="info">${m}</p>
            </li>
            <li class="item-information-container">
              <h2 class="main-info">Comments </h2>
              <p class="info">${u}</p>
            </li>
            <li class="item-information-container">
              <h2 class="main-info">Downloads </h2>
              <p class="info">${h}</p>
            </li>
          </ul>
        </li>`).join("");s.insertAdjacentHTML("beforeend",o),d.refresh()}const y=document.querySelector(".search-form"),b=document.querySelector(".list"),c=document.querySelector(".loading");y.addEventListener("submit",L);function L(n){n.preventDefault(),c.classList.add("loader");const s=n.target.elements.search.value.trim();if(s===""){l.error({backgroundColor:"lightred",icon:!1,progressBar:!1,close:!1,position:"topRight",message:"Please, fill the field!"});return}g(s).then(o=>{o.hits&&o.hits.length===0&&l.error({backgroundColor:"red",progressBar:!1,close:!1,position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});const i=p(o.hits);b.innerHTML=i,new f(".gallery-link",{captionsData:"alt"}).refresh()}).catch(o=>{console.error("Error occurred while fetching images:",o),l.error({backgroundColor:"red",icon:!1,progressBar:!1,close:!1,position:"topRight",message:"Sorry, an error occurred while fetching images. Please try again!"})}).finally(()=>c.classList.remove("loader")),e.target.reset()}
//# sourceMappingURL=commonHelpers.js.map
