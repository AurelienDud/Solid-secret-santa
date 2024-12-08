(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerPolicy&&(l.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?l.credentials="include":r.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(r){if(r.ep)return;r.ep=!0;const l=n(r);fetch(r.href,l)}})();const me=(e,t)=>e===t,N=Symbol("solid-proxy"),ne=typeof Proxy=="function",T={equals:me};let se=ce;const C=1,k=2,re={owned:null,cleanups:null,context:null,owner:null};var h=null;let H=null,we=null,d=null,y=null,v=null,I=0;function be(e,t){const n=d,s=h,r=e.length===0,l=t===void 0?s:t,o=r?re:{owned:null,cleanups:null,context:l?l.context:null,owner:l},i=r?e:()=>e(()=>L(()=>S(o)));h=o,d=null;try{return x(i,!0)}finally{d=n,h=s}}function A(e,t){t=t?Object.assign({},T,t):T;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},s=r=>(typeof r=="function"&&(r=r(n.value)),oe(n,r));return[le.bind(n),s]}function $(e,t,n){const s=X(e,t,!1,C);_(s)}function ie(e,t,n){se=Pe;const s=X(e,t,!1,C);s.user=!0,v?v.push(s):_(s)}function b(e,t,n){n=n?Object.assign({},T,n):T;const s=X(e,t,!0,0);return s.observers=null,s.observerSlots=null,s.comparator=n.equals||void 0,_(s),le.bind(s)}function j(e){return x(e,!1)}function L(e){if(d===null)return e();const t=d;d=null;try{return e()}finally{d=t}}function pe(e){ie(()=>L(e))}function ve(e){return h===null||(h.cleanups===null?h.cleanups=[e]:h.cleanups.push(e)),e}function $e(e){const t=b(e),n=b(()=>V(t()));return n.toArray=()=>{const s=n();return Array.isArray(s)?s:s!=null?[s]:[]},n}function le(){if(this.sources&&this.state)if(this.state===C)_(this);else{const e=y;y=null,x(()=>M(this),!1),y=e}if(d){const e=this.observers?this.observers.length:0;d.sources?(d.sources.push(this),d.sourceSlots.push(e)):(d.sources=[this],d.sourceSlots=[e]),this.observers?(this.observers.push(d),this.observerSlots.push(d.sources.length-1)):(this.observers=[d],this.observerSlots=[d.sources.length-1])}return this.value}function oe(e,t,n){let s=e.value;return(!e.comparator||!e.comparator(s,t))&&(e.value=t,e.observers&&e.observers.length&&x(()=>{for(let r=0;r<e.observers.length;r+=1){const l=e.observers[r],o=H&&H.running;o&&H.disposed.has(l),(o?!l.tState:!l.state)&&(l.pure?y.push(l):v.push(l),l.observers&&ue(l)),o||(l.state=C)}if(y.length>1e6)throw y=[],new Error},!1)),t}function _(e){if(!e.fn)return;S(e);const t=I;Ae(e,e.value,t)}function Ae(e,t,n){let s;const r=h,l=d;d=h=e;try{s=e.fn(t)}catch(o){return e.pure&&(e.state=C,e.owned&&e.owned.forEach(S),e.owned=null),e.updatedAt=n+1,fe(o)}finally{d=l,h=r}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?oe(e,s):e.value=s,e.updatedAt=n)}function X(e,t,n,s=C,r){const l={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:h,context:h?h.context:null,pure:n};return h===null||h!==re&&(h.owned?h.owned.push(l):h.owned=[l]),l}function R(e){if(e.state===0)return;if(e.state===k)return M(e);if(e.suspense&&L(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<I);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===C)_(e);else if(e.state===k){const s=y;y=null,x(()=>M(e,t[0]),!1),y=s}}function x(e,t){if(y)return e();let n=!1;t||(y=[]),v?n=!0:v=[],I++;try{const s=e();return Ce(n),s}catch(s){n||(v=null),y=null,fe(s)}}function Ce(e){if(y&&(ce(y),y=null),e)return;const t=v;v=null,t.length&&x(()=>se(t),!1)}function ce(e){for(let t=0;t<e.length;t++)R(e[t])}function Pe(e){let t,n=0;for(t=0;t<e.length;t++){const s=e[t];s.user?e[n++]=s:R(s)}for(t=0;t<n;t++)R(e[t])}function M(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const s=e.sources[n];if(s.sources){const r=s.state;r===C?s!==t&&(!s.updatedAt||s.updatedAt<I)&&R(s):r===k&&M(s,t)}}}function ue(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=k,n.pure?y.push(n):v.push(n),n.observers&&ue(n))}}function S(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),s=e.sourceSlots.pop(),r=n.observers;if(r&&r.length){const l=r.pop(),o=n.observerSlots.pop();s<r.length&&(l.sourceSlots[o]=s,r[s]=l,n.observerSlots[s]=o)}}if(e.tOwned){for(t=e.tOwned.length-1;t>=0;t--)S(e.tOwned[t]);delete e.tOwned}if(e.owned){for(t=e.owned.length-1;t>=0;t--)S(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function xe(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function fe(e,t=h){throw xe(e)}function V(e){if(typeof e=="function"&&!e.length)return V(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const s=V(e[n]);Array.isArray(s)?t.push.apply(t,s):t.push(s)}return t}return e}function m(e,t){return L(()=>e(t||{}))}function O(){return!0}const Z={get(e,t,n){return t===N?n:e.get(t)},has(e,t){return t===N?!0:e.has(t)},set:O,deleteProperty:O,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:O,deleteProperty:O}},ownKeys(e){return e.keys()}};function U(e){return(e=typeof e=="function"?e():e)?e:{}}function Se(){for(let e=0,t=this.length;e<t;++e){const n=this[e]();if(n!==void 0)return n}}function Q(...e){let t=!1;for(let o=0;o<e.length;o++){const i=e[o];t=t||!!i&&N in i,e[o]=typeof i=="function"?(t=!0,b(i)):i}if(ne&&t)return new Proxy({get(o){for(let i=e.length-1;i>=0;i--){const c=U(e[i])[o];if(c!==void 0)return c}},has(o){for(let i=e.length-1;i>=0;i--)if(o in U(e[i]))return!0;return!1},keys(){const o=[];for(let i=0;i<e.length;i++)o.push(...Object.keys(U(e[i])));return[...new Set(o)]}},Z);const n={},s=Object.create(null);for(let o=e.length-1;o>=0;o--){const i=e[o];if(!i)continue;const c=Object.getOwnPropertyNames(i);for(let u=c.length-1;u>=0;u--){const a=c[u];if(a==="__proto__"||a==="constructor")continue;const f=Object.getOwnPropertyDescriptor(i,a);if(!s[a])s[a]=f.get?{enumerable:!0,configurable:!0,get:Se.bind(n[a]=[f.get.bind(i)])}:f.value!==void 0?f:void 0;else{const w=n[a];w&&(f.get?w.push(f.get.bind(i)):f.value!==void 0&&w.push(()=>f.value))}}}const r={},l=Object.keys(s);for(let o=l.length-1;o>=0;o--){const i=l[o],c=s[i];c&&c.get?Object.defineProperty(r,i,c):r[i]=c?c.value:void 0}return r}function Le(e,...t){if(ne&&N in e){const r=new Set(t.length>1?t.flat():t[0]),l=t.map(o=>new Proxy({get(i){return o.includes(i)?e[i]:void 0},has(i){return o.includes(i)&&i in e},keys(){return o.filter(i=>i in e)}},Z));return l.push(new Proxy({get(o){return r.has(o)?void 0:e[o]},has(o){return r.has(o)?!1:o in e},keys(){return Object.keys(e).filter(o=>!r.has(o))}},Z)),l}const n={},s=t.map(()=>({}));for(const r of Object.getOwnPropertyNames(e)){const l=Object.getOwnPropertyDescriptor(e,r),o=!l.get&&!l.set&&l.enumerable&&l.writable&&l.configurable;let i=!1,c=0;for(const u of t)u.includes(r)&&(i=!0,o?s[c][r]=l.value:Object.defineProperty(s[c],r,l)),++c;i||(o?n[r]=l.value:Object.defineProperty(n,r,l))}return[...s,n]}const _e=new Set(["innerHTML","textContent","innerText","children"]),Ee=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),Oe=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),Ne={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function Te(e,t,n){let s=n.length,r=t.length,l=s,o=0,i=0,c=t[r-1].nextSibling,u=null;for(;o<r||i<l;){if(t[o]===n[i]){o++,i++;continue}for(;t[r-1]===n[l-1];)r--,l--;if(r===o){const a=l<s?i?n[i-1].nextSibling:n[l-i]:c;for(;i<l;)e.insertBefore(n[i++],a)}else if(l===i)for(;o<r;)(!u||!u.has(t[o]))&&t[o].remove(),o++;else if(t[o]===n[l-1]&&n[i]===t[r-1]){const a=t[--r].nextSibling;e.insertBefore(n[i++],t[o++].nextSibling),e.insertBefore(n[--l],a),t[r]=n[l]}else{if(!u){u=new Map;let f=i;for(;f<l;)u.set(n[f],f++)}const a=u.get(t[o]);if(a!=null)if(i<a&&a<l){let f=o,w=1,E;for(;++f<r&&f<l&&!((E=u.get(t[f]))==null||E!==a+w);)w++;if(w>a-i){const ye=t[o];for(;i<a;)e.insertBefore(n[i++],ye)}else e.replaceChild(n[i++],t[o++])}else o++;else t[o++].remove()}}}const W="_$DX_DELEGATE";function ke(e,t,n,s={}){let r;return be(l=>{r=l,t===document?e():g(t,e(),t.firstChild?null:void 0,n)},s.owner),()=>{r(),t.textContent=""}}function p(e,t,n){let s;const r=()=>{const o=document.createElement("template");return o.innerHTML=e,o.content.firstChild},l=()=>(s||(s=r())).cloneNode(!0);return l.cloneNode=l,l}function B(e,t=window.document){const n=t[W]||(t[W]=new Set);for(let s=0,r=e.length;s<r;s++){const l=e[s];n.has(l)||(n.add(l),t.addEventListener(l,He))}}function K(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function je(e,t,n,s){s==null?e.removeAttributeNS(t,n):e.setAttributeNS(t,n,s)}function Re(e,t,n){n?e.setAttribute(t,""):e.removeAttribute(t)}function Y(e,t){t==null?e.removeAttribute("class"):e.className=t}function ae(e,t,n,s){if(s)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const r=n[0];e.addEventListener(t,n[0]=l=>r.call(e,n[1],l))}else e.addEventListener(t,n,typeof n!="function"&&n)}function Me(e,t,n={}){const s=Object.keys(t||{}),r=Object.keys(n);let l,o;for(l=0,o=r.length;l<o;l++){const i=r[l];!i||i==="undefined"||t[i]||(J(e,i,!1),delete n[i])}for(l=0,o=s.length;l<o;l++){const i=s[l],c=!!t[i];!i||i==="undefined"||n[i]===c||!c||(J(e,i,!0),n[i]=c)}return n}function De(e,t,n){if(!t)return n?K(e,"style"):t;const s=e.style;if(typeof t=="string")return s.cssText=t;typeof n=="string"&&(s.cssText=n=void 0),n||(n={}),t||(t={});let r,l;for(l in n)t[l]==null&&s.removeProperty(l),delete n[l];for(l in t)r=t[l],r!==n[l]&&(s.setProperty(l,r),n[l]=r);return n}function Ie(e,t={},n,s){const r={};return $(()=>typeof t.ref=="function"&&de(t.ref,e)),$(()=>Be(e,t,n,!0,r,!0)),r}function de(e,t,n){return L(()=>e(t,n))}function g(e,t,n,s){if(n!==void 0&&!s&&(s=[]),typeof t!="function")return D(e,t,s,n);$(r=>D(e,t(),r,n),s)}function Be(e,t,n,s,r={},l=!1){t||(t={});for(const o in r)if(!(o in t)){if(o==="children")continue;r[o]=z(e,o,null,r[o],n,l,t)}for(const o in t){if(o==="children")continue;const i=t[o];r[o]=z(e,o,i,r[o],n,l,t)}}function Fe(e){return e.toLowerCase().replace(/-([a-z])/g,(t,n)=>n.toUpperCase())}function J(e,t,n){const s=t.trim().split(/\s+/);for(let r=0,l=s.length;r<l;r++)e.classList.toggle(s[r],n)}function z(e,t,n,s,r,l,o){let i,c,u,a;if(t==="style")return De(e,n,s);if(t==="classList")return Me(e,n,s);if(n===s)return s;if(t==="ref")l||n(e);else if(t.slice(0,3)==="on:"){const f=t.slice(3);s&&e.removeEventListener(f,s,typeof s!="function"&&s),n&&e.addEventListener(f,n,typeof n!="function"&&n)}else if(t.slice(0,10)==="oncapture:"){const f=t.slice(10);s&&e.removeEventListener(f,s,!0),n&&e.addEventListener(f,n,!0)}else if(t.slice(0,2)==="on"){const f=t.slice(2).toLowerCase(),w=Oe.has(f);if(!w&&s){const E=Array.isArray(s)?s[0]:s;e.removeEventListener(f,E)}(w||n)&&(ae(e,f,n,w),w&&B([f]))}else if(t.slice(0,5)==="attr:")K(e,t.slice(5),n);else if(t.slice(0,5)==="bool:")Re(e,t.slice(5),n);else if((a=t.slice(0,5)==="prop:")||(u=_e.has(t))||!r||(i=e.nodeName.includes("-")||"is"in o))a&&(t=t.slice(5),c=!0),t==="class"||t==="className"?Y(e,n):i&&!c&&!u?e[Fe(t)]=n:e[t]=n;else{const f=t.indexOf(":")>-1&&Ne[t.split(":")[0]];f?je(e,f,t,n):K(e,Ee[t]||t,n)}return n}function He(e){let t=e.target;const n=`$$${e.type}`,s=e.target,r=e.currentTarget,l=c=>Object.defineProperty(e,"target",{configurable:!0,value:c}),o=()=>{const c=t[n];if(c&&!t.disabled){const u=t[`${n}Data`];if(u!==void 0?c.call(t,u,e):c.call(t,e),e.cancelBubble)return}return t.host&&typeof t.host!="string"&&!t.host._$host&&t.contains(e.target)&&l(t.host),!0},i=()=>{for(;o()&&(t=t._$host||t.parentNode||t.host););};if(Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return t||document}}),e.composedPath){const c=e.composedPath();l(c[0]);for(let u=0;u<c.length-2&&(t=c[u],!!o());u++){if(t._$host){t=t._$host,i();break}if(t.parentNode===r)break}}else i();l(s)}function D(e,t,n,s,r){for(;typeof n=="function";)n=n();if(t===n)return n;const l=typeof t,o=s!==void 0;if(e=o&&n[0]&&n[0].parentNode||e,l==="string"||l==="number"){if(l==="number"&&(t=t.toString(),t===n))return n;if(o){let i=n[0];i&&i.nodeType===3?i.data!==t&&(i.data=t):i=document.createTextNode(t),n=P(e,n,s,i)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||l==="boolean")n=P(e,n,s);else{if(l==="function")return $(()=>{let i=t();for(;typeof i=="function";)i=i();n=D(e,i,n,s)}),()=>n;if(Array.isArray(t)){const i=[],c=n&&Array.isArray(n);if(G(i,t,n,r))return $(()=>n=D(e,i,n,s,!0)),()=>n;if(i.length===0){if(n=P(e,n,s),o)return n}else c?n.length===0?ee(e,i,s):Te(e,n,i):(n&&P(e),ee(e,i));n=i}else if(t.nodeType){if(Array.isArray(n)){if(o)return n=P(e,n,s,t);P(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function G(e,t,n,s){let r=!1;for(let l=0,o=t.length;l<o;l++){let i=t[l],c=n&&n[e.length],u;if(!(i==null||i===!0||i===!1))if((u=typeof i)=="object"&&i.nodeType)e.push(i);else if(Array.isArray(i))r=G(e,i,c)||r;else if(u==="function")if(s){for(;typeof i=="function";)i=i();r=G(e,Array.isArray(i)?i:[i],Array.isArray(c)?c:[c])||r}else e.push(i),r=!0;else{const a=String(i);c&&c.nodeType===3&&c.data===a?e.push(c):e.push(document.createTextNode(a))}}return r}function ee(e,t,n=null){for(let s=0,r=t.length;s<r;s++)e.insertBefore(t[s],n)}function P(e,t,n,s){if(n===void 0)return e.textContent="";const r=s||document.createTextNode("");if(t.length){let l=!1;for(let o=t.length-1;o>=0;o--){const i=t[o];if(r!==i){const c=i.parentNode===e;!l&&!o?c?e.replaceChild(r,i):e.insertBefore(r,n):c&&i.remove()}else l=!0}}else e.insertBefore(r,n);return[r]}const Ue=!1,he=2;function Ve(e){const t=[...e];for(let n=t.length-1;n>0;n--){const s=Math.floor(Math.random()*(n+1));[t[n],t[s]]=[t[s],t[n]]}return t}const ge=e=>{if(!Array.isArray(e)||e.length<he)throw new Error("La liste des players doit contenir au moins deux personnes.");const t=[...e],n=Ve([...e]),s={};for(let r=0;r<t.length;r++){if(t[r]===n[r])return ge(e);s[t[r]]=n[r]}return s};var Ze=p("<button type=button>");const F=e=>{const t=$e(()=>e.children),n=()=>{let s=["button"];return e.fluid&&s.push("button--fluid"),e.class&&s.push(e.class),s.join(" ")};return(()=>{var s=Ze();return ae(s,"click",e.onClick,!0),g(s,t),$(r=>{var l=n(),o=e.disabled;return l!==r.e&&Y(s,r.e=l),o!==r.t&&(s.disabled=r.t=o),r},{e:void 0,t:void 0}),s})()};B(["click"]);var Ke=p("<svg stroke-width=0>");function q(e,t){const n=Q(e.a,t),[s,r]=Le(n,["src"]),[l,o]=A(""),i=b(()=>t.title?`${e.c}<title>${t.title}</title>`:e.c);return ie(()=>o(i())),ve(()=>{o("")}),(()=>{var c=Ke();return Ie(c,Q({get stroke(){return e.a?.stroke},get color(){return t.color||"currentColor"},get fill(){return t.color||"currentColor"},get style(){return{...t.style,overflow:"visible"}}},r,{get height(){return t.size||"1em"},get width(){return t.size||"1em"},xmlns:"http://www.w3.org/2000/svg",get innerHTML(){return l()}}),!0),g(c,()=>Ue),c})()}function Ge(e){return q({a:{viewBox:"0 0 24 24"},c:'<path d="M17.28 9.28a.75.75 0 0 0-1.06-1.06l-5.97 5.97-2.47-2.47a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l6.5-6.5Z"/><path d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1ZM2.5 12a9.5 9.5 0 0 0 9.5 9.5 9.5 9.5 0 0 0 9.5-9.5A9.5 9.5 0 0 0 12 2.5 9.5 9.5 0 0 0 2.5 12Z"/>'},e)}function Xe(e){return q({a:{viewBox:"0 0 16 16"},c:'<path d="M.989 8 .064 2.68a1.342 1.342 0 0 1 1.85-1.462l13.402 5.744a1.13 1.13 0 0 1 0 2.076L1.913 14.782a1.343 1.343 0 0 1-1.85-1.463L.99 8Zm.603-5.288L2.38 7.25h4.87a.75.75 0 0 1 0 1.5H2.38l-.788 4.538L13.929 8Z"/>'},e)}function Ye(e){return q({a:{viewBox:"0 0 16 16"},c:'<path d="M11 1.75V3h2.25a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1 0-1.5H5V1.75C5 .784 5.784 0 6.75 0h2.5C10.216 0 11 .784 11 1.75ZM4.496 6.675l.66 6.6a.25.25 0 0 0 .249.225h5.19a.25.25 0 0 0 .249-.225l.66-6.6a.75.75 0 0 1 1.492.149l-.66 6.6A1.748 1.748 0 0 1 10.595 15h-5.19a1.75 1.75 0 0 1-1.741-1.575l-.66-6.6a.75.75 0 1 1 1.492-.15ZM6.5 1.75V3h3V1.75a.25.25 0 0 0-.25-.25h-2.5a.25.25 0 0 0-.25.25Z"/>'},e)}var qe=p("<div class=drawListItem><div class=drawListItem-content></div><div class=drawListItem-aside>");const Qe=e=>(()=>{var t=qe(),n=t.firstChild,s=n.nextSibling;return g(n,()=>e.player.name),g(s,(()=>{var r=b(()=>!!e.hasRevealed);return()=>r()?m(Ge,{title:"Tirage révélé"}):m(F,{onClick:()=>e.onReveal(),get disabled(){return!e.canReveal},children:"Révéler"})})()),t})();var We=p("<div class=drawResultModal><div class=drawResultModal-content><p>Tu dois faire un cadeau à ");const Je=e=>b(()=>b(()=>!!e.open)()?(()=>{var t=We(),n=t.firstChild,s=n.firstChild;return s.firstChild,g(s,()=>e.pairedPlayerName,null),g(n,m(F,{onClick:()=>e.onHide(),fluid:!0,children:"Cacher définitivement"}),null),t})():null);var ze=p("<div>");const et=e=>{const[t,n]=A([]),[s,r]=A(),l=o=>j(()=>{r(void 0),n([...t(),o])});return(()=>{var o=ze();return g(o,()=>e.players.map(i=>m(Qe,{get canReveal(){return s()===void 0},onReveal:()=>r(i.name),player:i,get hasRevealed(){return t().includes(i.name)},get isRevealing(){return s()===i.name}})),null),g(o,m(Je,{get open(){return b(()=>!t().includes(s()))()&&s()!==void 0},onHide:()=>l(s()),get pairedPlayerName(){return e.draw[s()]}}),null),g(o,(()=>{var i=b(()=>t().length===e.players.length);return()=>i()?m(F,{get onClick(){return e.onReset},children:"Recommencer le tirage "}):null})(),null),o})()};var tt=p('<div class=playerForm><input class=playerForm-input type=text placeholder="Nom du participant"><button class=playerForm-button>');const te=e=>!!e&&e.length>=2,nt=e=>{let t;const[n,s]=A(""),r=o=>{o.preventDefault(),s(o.currentTarget.value)},l=()=>{j(()=>{if(te(n())){const o={name:n()};e.onSubmit(o),s("")}})};return pe(()=>{t.addEventListener("keydown",o=>{o.key==="Enter"&&l()})}),(()=>{var o=tt(),i=o.firstChild,c=i.nextSibling,u=t;return typeof u=="function"?de(u,o):t=o,i.$$input=r,c.$$click=l,g(c,m(Xe,{})),$(()=>c.disabled=!te(n())),$(()=>i.value=n()),o})()};B(["input","click"]);var st=p("<div><div class=playersListItem-value></div><button class=playersListItem-button type=button>");const rt=e=>(()=>{var t=st(),n=t.firstChild,s=n.nextSibling;return g(n,()=>e.player.name),s.$$click=()=>e.onDelete(e.player),g(s,m(Ye,{})),$(()=>Y(t,`playersListItem ${e.class}`)),t})();B(["click"]);var it=p("<div class=playersList>");const lt=e=>{const[t,n]=A([]),s=i=>{n([...t(),i])},r=i=>{const c=t().findIndex(a=>a.name===i.name),u=[...t()];u.splice(c,1),n(u)},l=()=>{n([])},o=()=>{e.onClose(t()),l()};return(()=>{var i=it();return g(i,m(nt,{onSubmit:s}),null),g(i,()=>t().map(c=>m(rt,{class:"playersList-item",player:c,onDelete:r})),null),g(i,m(F,{class:"playersList-button",onClick:o,get disabled(){return t().length<he},fluid:!0,children:"Faire le tirage"}),null),i})()};var ot=p("<div>");const ct=()=>{const[e,t]=A(),[n,s]=A(),[r,l]=A(!0),o=c=>{j(()=>{l(!1),t(c),s(ge(c.map(({name:u})=>u)))})},i=()=>j(()=>{t(void 0),s(void 0),l(!0)});return(()=>{var c=ot();return c.style.setProperty("width","600px"),c.style.setProperty("max-width","90vw"),g(c,(()=>{var u=b(()=>!!r());return()=>u()?m(lt,{onClose:o}):null})(),null),g(c,(()=>{var u=b(()=>!!(!r()&&n()&&e()));return()=>u()?m(et,{get draw(){return n()},get players(){return e()},onReset:i}):null})(),null),c})()};var ut=p("<div class=app><div class=app-main></div><div class=app-footer>2024 - Made by AurelienDud");const ft=()=>(()=>{var e=ut(),t=e.firstChild;return g(t,m(ct,{})),e})(),at=document.getElementById("root");ke(()=>m(ft,{}),at);
