!function(e){var t={};function n(c){if(t[c])return t[c].exports;var o=t[c]={i:c,l:!1,exports:{}};return e[c].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,c){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(n.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(c,o,function(t){return e[t]}.bind(null,o));return c},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var c=e=>{const t=document.querySelector(".goods");e.goods.forEach(e=>{const n=document.createElement("div");n.className="col-12 col-md-6 col-lg-4 col-xl-3",n.innerHTML=`                \n\t\t\t\t<div class="card" data-category="${e.category}">\n\t\t\t\t\t${e.sale?'<div class="card-sale">🔥Hot Sale🔥</div>':""}\n\t\t\t\t\t<div class="card-img-wrapper">\n\t\t\t\t\t\t<span class="card-img-top"\n\t\t\t\t\t\t\tstyle="background-image: url('${e.img}')"></span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="card-body justify-content-between">\n\t\t\t\t\t\t<div class="card-price" style="${e.sale?"color:red;":""}">${e.price} ₽</div>\n\t\t\t\t\t\t<h5 class="card-title">${e.title}</h5>\n\t\t\t\t\t\t<button class="btn btn-primary">В корзину</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\t\t\t\t\n        `,t.appendChild(n)})};var o=()=>{const e=document.querySelectorAll(".goods .card"),t=document.getElementById("discount-checkbox"),n=document.getElementById("min"),c=document.getElementById("max"),o=document.querySelector(".catalog-list li.active");e.forEach(e=>{const r=e.querySelector(".card-price"),l=parseFloat(r.textContent),a=e.querySelector(".card-sale");e.parentNode.style.display="",n.value&&l<n.value||c.value&&l>c.value?e.parentNode.style.display="none":t.checked&&!a?e.parentNode.style.display="none":o&&e.dataset.category!==o.textContent&&(e.parentNode.style.display="none")})};var r=function(){const e=document.querySelectorAll(".goods .card"),t=document.querySelector(".catalog-list"),n=document.querySelector(".catalog-button"),c=document.querySelector(".catalog"),r=document.querySelector(".filter-title h5"),l=new Set;e.forEach(e=>{l.add(e.dataset.category)}),l.forEach(e=>{const n=document.createElement("li");n.textContent=e,t.appendChild(n)});const a=t.querySelectorAll("li");n.addEventListener("click",e=>{c.style.display?c.style.display="":c.style.display="block","LI"===e.target.tagName&&(a.forEach(t=>{t===e.target?t.classList.add("active"):t.classList.remove("active")}),o(),r.textContent=e.target.textContent)})};var l=()=>{const e=document.querySelector("#cart"),t=document.querySelector(".cart"),n=document.querySelector(".cart-close");e.addEventListener("click",()=>{t.style.display="flex",document.body.style.overflow="hidden"}),n.addEventListener("click",()=>{t.style.display="",document.body.style.overflow=""})};var a=()=>{const e=document.querySelectorAll(".goods .card"),t=document.querySelector(".cart-wrapper"),n=document.getElementById("cart-empty"),c=document.querySelector(".counter");function o(){const e=t.querySelectorAll(".card"),o=t.querySelectorAll(".card-price"),r=document.querySelector(".cart-total span");let l=0;c.textContent=e.length,o.forEach(e=>{let t=parseFloat(e.textContent);l+=t}),r.textContent=l,0!==e.length?n.remove():t.appendChild(n)}e.forEach(e=>{e.querySelector("button").addEventListener("click",()=>{const n=e.cloneNode(!0);t.appendChild(n),o();const c=n.querySelector(".btn");c.textContent="Удалить из корзины",c.addEventListener("click",()=>{n.remove(),o()})})})};var d=()=>{const e=document.getElementById("discount-checkbox"),t=document.getElementById("min"),n=document.getElementById("max");e.addEventListener("click",o),t.addEventListener("change",o),n.addEventListener("change",o)};var s=()=>{const e=document.querySelector(".search-wrapper_input"),t=document.querySelector(".search-btn"),n=document.querySelectorAll(".goods .card"),c=()=>{const t=new RegExp(e.value.trim(),"i");n.forEach(e=>{const n=e.querySelector(".card-title");t.test(n.textContent)?e.parentNode.style.display="":e.parentNode.style.display="none"}),e.value=""};t.addEventListener("click",c),e.addEventListener("change",c)};(()=>{const e=document.querySelector(".goods");return fetch("../db/db.json").then(e=>{if(e.ok)return e.json();throw new Error("Данные не были получены, ошибка: "+e.status)}).then(e=>e).catch(t=>{console.warn(t),e.innerHTML='<div style = "color:red; font-size:30px"> Упс, что-то пошло не так! </div>'})})().then(e=>{c(e),r(),document.querySelectorAll(".filter-check_checkbox").forEach(e=>{e.addEventListener("change",(function(){this.checked?this.nextElementSibling.classList.add("checked"):this.nextElementSibling.classList.remove("checked")}))}),l(),a(),d(),s()})}]);