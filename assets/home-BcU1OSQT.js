import{h as gt,q as tu,s as tf,i as Ao,x as nu,y as Qt,z as nf,c as rf,A as sf,B as iu,_ as wo,a as Gr,k as Us,w as ll,g as Ni,o as fr,e as Xn,F as af,r as of,t as lf,C as cf,d as uf,D as df,b as ff}from"./index-BuT__qfH.js";function cl(i){return i!==null&&typeof i=="object"&&"constructor"in i&&i.constructor===Object}function Co(i={},e={}){const t=["__proto__","constructor","prototype"];Object.keys(e).filter(n=>t.indexOf(n)<0).forEach(n=>{typeof i[n]>"u"?i[n]=e[n]:cl(e[n])&&cl(i[n])&&Object.keys(e[n]).length>0&&Co(i[n],e[n])})}const ru={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function xn(){const i=typeof document<"u"?document:{};return Co(i,ru),i}const hf={document:ru,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(i){return typeof setTimeout>"u"?(i(),null):setTimeout(i,0)},cancelAnimationFrame(i){typeof setTimeout>"u"||clearTimeout(i)}};function Pt(){const i=typeof window<"u"?window:{};return Co(i,hf),i}function pf(i=""){return i.trim().split(" ").filter(e=>!!e.trim())}function mf(i){const e=i;Object.keys(e).forEach(t=>{try{e[t]=null}catch{}try{delete e[t]}catch{}})}function su(i,e=0){return setTimeout(i,e)}function Os(){return Date.now()}function gf(i){const e=Pt();let t;return e.getComputedStyle&&(t=e.getComputedStyle(i,null)),!t&&i.currentStyle&&(t=i.currentStyle),t||(t=i.style),t}function _f(i,e="x"){const t=Pt();let n,r,s;const a=gf(i);return t.WebKitCSSMatrix?(r=a.transform||a.webkitTransform,r.split(",").length>6&&(r=r.split(", ").map(o=>o.replace(",",".")).join(", ")),s=new t.WebKitCSSMatrix(r==="none"?"":r)):(s=a.MozTransform||a.OTransform||a.MsTransform||a.msTransform||a.transform||a.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),n=s.toString().split(",")),e==="x"&&(t.WebKitCSSMatrix?r=s.m41:n.length===16?r=parseFloat(n[12]):r=parseFloat(n[4])),e==="y"&&(t.WebKitCSSMatrix?r=s.m42:n.length===16?r=parseFloat(n[13]):r=parseFloat(n[5])),r||0}function rs(i){return typeof i=="object"&&i!==null&&i.constructor&&Object.prototype.toString.call(i).slice(8,-1)==="Object"}function vf(i){return typeof window<"u"&&typeof window.HTMLElement<"u"?i instanceof HTMLElement:i&&(i.nodeType===1||i.nodeType===11)}function Vt(...i){const e=Object(i[0]),t=["__proto__","constructor","prototype"];for(let n=1;n<i.length;n+=1){const r=i[n];if(r!=null&&!vf(r)){const s=Object.keys(Object(r)).filter(a=>t.indexOf(a)<0);for(let a=0,o=s.length;a<o;a+=1){const l=s[a],c=Object.getOwnPropertyDescriptor(r,l);c!==void 0&&c.enumerable&&(rs(e[l])&&rs(r[l])?r[l].__swiper__?e[l]=r[l]:Vt(e[l],r[l]):!rs(e[l])&&rs(r[l])?(e[l]={},r[l].__swiper__?e[l]=r[l]:Vt(e[l],r[l])):e[l]=r[l])}}}return e}function ss(i,e,t){i.style.setProperty(e,t)}function au({swiper:i,targetPosition:e,side:t}){const n=Pt(),r=-i.translate;let s=null,a;const o=i.params.speed;i.wrapperEl.style.scrollSnapType="none",n.cancelAnimationFrame(i.cssModeFrameID);const l=e>r?"next":"prev",c=(d,p)=>l==="next"&&d>=p||l==="prev"&&d<=p,u=()=>{a=new Date().getTime(),s===null&&(s=a);const d=Math.max(Math.min((a-s)/o,1),0),p=.5-Math.cos(d*Math.PI)/2;let h=r+p*(e-r);if(c(h,e)&&(h=e),i.wrapperEl.scrollTo({[t]:h}),c(h,e)){i.wrapperEl.style.overflow="hidden",i.wrapperEl.style.scrollSnapType="",setTimeout(()=>{i.wrapperEl.style.overflow="",i.wrapperEl.scrollTo({[t]:h})}),n.cancelAnimationFrame(i.cssModeFrameID);return}i.cssModeFrameID=n.requestAnimationFrame(u)};u()}function ou(i){return i.querySelector(".swiper-slide-transform")||i.shadowRoot&&i.shadowRoot.querySelector(".swiper-slide-transform")||i}function _n(i,e=""){const t=Pt(),n=[...i.children];return t.HTMLSlotElement&&i instanceof HTMLSlotElement&&n.push(...i.assignedElements()),e?n.filter(r=>r.matches(e)):n}function xf(i,e){const t=[e];for(;t.length>0;){const n=t.shift();if(i===n)return!0;t.push(...n.children,...n.shadowRoot?n.shadowRoot.children:[],...n.assignedElements?n.assignedElements():[])}}function Sf(i,e){const t=Pt();let n=e.contains(i);return!n&&t.HTMLSlotElement&&e instanceof HTMLSlotElement&&(n=[...e.assignedElements()].includes(i),n||(n=xf(i,e))),n}function Ns(i){try{console.warn(i);return}catch{}}function Fs(i,e=[]){const t=document.createElement(i);return t.classList.add(...Array.isArray(e)?e:pf(e)),t}function Mf(i,e){const t=[];for(;i.previousElementSibling;){const n=i.previousElementSibling;e?n.matches(e)&&t.push(n):t.push(n),i=n}return t}function yf(i,e){const t=[];for(;i.nextElementSibling;){const n=i.nextElementSibling;e?n.matches(e)&&t.push(n):t.push(n),i=n}return t}function qn(i,e){return Pt().getComputedStyle(i,null).getPropertyValue(e)}function Bs(i){let e=i,t;if(e){for(t=0;(e=e.previousSibling)!==null;)e.nodeType===1&&(t+=1);return t}}function lu(i,e){const t=[];let n=i.parentElement;for(;n;)e?n.matches(e)&&t.push(n):t.push(n),n=n.parentElement;return t}function Ef(i,e){function t(n){n.target===i&&(e.call(i,n),i.removeEventListener("transitionend",t))}e&&i.addEventListener("transitionend",t)}function Za(i,e,t){const n=Pt();return i[e==="width"?"offsetWidth":"offsetHeight"]+parseFloat(n.getComputedStyle(i,null).getPropertyValue(e==="width"?"margin-right":"margin-top"))+parseFloat(n.getComputedStyle(i,null).getPropertyValue(e==="width"?"margin-left":"margin-bottom"))}function ht(i){return(Array.isArray(i)?i:[i]).filter(e=>!!e)}function kr(i,e=""){typeof trustedTypes<"u"?i.innerHTML=trustedTypes.createPolicy("html",{createHTML:t=>t}).createHTML(e):i.innerHTML=e}let sa;function Tf(){const i=Pt(),e=xn();return{smoothScroll:e.documentElement&&e.documentElement.style&&"scrollBehavior"in e.documentElement.style,touch:!!("ontouchstart"in i||i.DocumentTouch&&e instanceof i.DocumentTouch)}}function cu(){return sa||(sa=Tf()),sa}let aa;function bf({userAgent:i}={}){const e=cu(),t=Pt(),n=t.navigator.platform,r=i||t.navigator.userAgent,s={ios:!1,android:!1},a=t.screen.width,o=t.screen.height,l=r.match(/(Android);?[\s\/]+([\d.]+)?/);let c=r.match(/(iPad)(?!\1).*OS\s([\d_]+)/);const u=r.match(/(iPod)(.*OS\s([\d_]+))?/),d=!c&&r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),p=n==="Win32";let h=n==="MacIntel";const _=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!c&&h&&e.touch&&_.indexOf(`${a}x${o}`)>=0&&(c=r.match(/(Version)\/([\d.]+)/),c||(c=[0,1,"13_0_0"]),h=!1),l&&!p&&(s.os="android",s.android=!0),(c||d||u)&&(s.os="ios",s.ios=!0),s}function uu(i={}){return aa||(aa=bf(i)),aa}let oa;function Af(){const i=Pt(),e=uu();let t=!1;function n(){const o=i.navigator.userAgent.toLowerCase();return o.indexOf("safari")>=0&&o.indexOf("chrome")<0&&o.indexOf("android")<0}if(n()){const o=String(i.navigator.userAgent);if(o.includes("Version/")){const[l,c]=o.split("Version/")[1].split(" ")[0].split(".").map(u=>Number(u));t=l<16||l===16&&c<2}}const r=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(i.navigator.userAgent),s=n(),a=s||r&&e.ios;return{isSafari:t||s,needPerspectiveFix:t,need3dFix:a,isWebView:r}}function du(){return oa||(oa=Af()),oa}function wf({swiper:i,on:e,emit:t}){const n=Pt();let r=null,s=null;const a=()=>{!i||i.destroyed||!i.initialized||(t("beforeResize"),t("resize"))},o=()=>{!i||i.destroyed||!i.initialized||(r=new ResizeObserver(u=>{s=n.requestAnimationFrame(()=>{const{width:d,height:p}=i;let h=d,_=p;u.forEach(({contentBoxSize:g,contentRect:m,target:f})=>{f&&f!==i.el||(h=m?m.width:(g[0]||g).inlineSize,_=m?m.height:(g[0]||g).blockSize)}),(h!==d||_!==p)&&a()})}),r.observe(i.el))},l=()=>{s&&n.cancelAnimationFrame(s),r&&r.unobserve&&i.el&&(r.unobserve(i.el),r=null)},c=()=>{!i||i.destroyed||!i.initialized||t("orientationchange")};e("init",()=>{if(i.params.resizeObserver&&typeof n.ResizeObserver<"u"){o();return}n.addEventListener("resize",a),n.addEventListener("orientationchange",c)}),e("destroy",()=>{l(),n.removeEventListener("resize",a),n.removeEventListener("orientationchange",c)})}function Cf({swiper:i,extendParams:e,on:t,emit:n}){const r=[],s=Pt(),a=(c,u={})=>{const d=s.MutationObserver||s.WebkitMutationObserver,p=new d(h=>{if(i.__preventObserver__)return;if(h.length===1){n("observerUpdate",h[0]);return}const _=function(){n("observerUpdate",h[0])};s.requestAnimationFrame?s.requestAnimationFrame(_):s.setTimeout(_,0)});p.observe(c,{attributes:typeof u.attributes>"u"?!0:u.attributes,childList:i.isElement||(typeof u.childList>"u"?!0:u).childList,characterData:typeof u.characterData>"u"?!0:u.characterData}),r.push(p)},o=()=>{if(i.params.observer){if(i.params.observeParents){const c=lu(i.hostEl);for(let u=0;u<c.length;u+=1)a(c[u])}a(i.hostEl,{childList:i.params.observeSlideChildren}),a(i.wrapperEl,{attributes:!1})}},l=()=>{r.forEach(c=>{c.disconnect()}),r.splice(0,r.length)};e({observer:!1,observeParents:!1,observeSlideChildren:!1}),t("init",o),t("destroy",l)}var Rf={on(i,e,t){const n=this;if(!n.eventsListeners||n.destroyed||typeof e!="function")return n;const r=t?"unshift":"push";return i.split(" ").forEach(s=>{n.eventsListeners[s]||(n.eventsListeners[s]=[]),n.eventsListeners[s][r](e)}),n},once(i,e,t){const n=this;if(!n.eventsListeners||n.destroyed||typeof e!="function")return n;function r(...s){n.off(i,r),r.__emitterProxy&&delete r.__emitterProxy,e.apply(n,s)}return r.__emitterProxy=e,n.on(i,r,t)},onAny(i,e){const t=this;if(!t.eventsListeners||t.destroyed||typeof i!="function")return t;const n=e?"unshift":"push";return t.eventsAnyListeners.indexOf(i)<0&&t.eventsAnyListeners[n](i),t},offAny(i){const e=this;if(!e.eventsListeners||e.destroyed||!e.eventsAnyListeners)return e;const t=e.eventsAnyListeners.indexOf(i);return t>=0&&e.eventsAnyListeners.splice(t,1),e},off(i,e){const t=this;return!t.eventsListeners||t.destroyed||!t.eventsListeners||i.split(" ").forEach(n=>{typeof e>"u"?t.eventsListeners[n]=[]:t.eventsListeners[n]&&t.eventsListeners[n].forEach((r,s)=>{(r===e||r.__emitterProxy&&r.__emitterProxy===e)&&t.eventsListeners[n].splice(s,1)})}),t},emit(...i){const e=this;if(!e.eventsListeners||e.destroyed||!e.eventsListeners)return e;let t,n,r;return typeof i[0]=="string"||Array.isArray(i[0])?(t=i[0],n=i.slice(1,i.length),r=e):(t=i[0].events,n=i[0].data,r=i[0].context||e),n.unshift(r),(Array.isArray(t)?t:t.split(" ")).forEach(a=>{e.eventsAnyListeners&&e.eventsAnyListeners.length&&e.eventsAnyListeners.forEach(o=>{o.apply(r,[a,...n])}),e.eventsListeners&&e.eventsListeners[a]&&e.eventsListeners[a].forEach(o=>{o.apply(r,n)})}),e}};function Pf(){const i=this;let e,t;const n=i.el;typeof i.params.width<"u"&&i.params.width!==null?e=i.params.width:e=n.clientWidth,typeof i.params.height<"u"&&i.params.height!==null?t=i.params.height:t=n.clientHeight,!(e===0&&i.isHorizontal()||t===0&&i.isVertical())&&(e=e-parseInt(qn(n,"padding-left")||0,10)-parseInt(qn(n,"padding-right")||0,10),t=t-parseInt(qn(n,"padding-top")||0,10)-parseInt(qn(n,"padding-bottom")||0,10),Number.isNaN(e)&&(e=0),Number.isNaN(t)&&(t=0),Object.assign(i,{width:e,height:t,size:i.isHorizontal()?e:t}))}function Lf(){const i=this;function e(T,D){return parseFloat(T.getPropertyValue(i.getDirectionLabel(D))||0)}const t=i.params,{wrapperEl:n,slidesEl:r,rtlTranslate:s,wrongRTL:a}=i,o=i.virtual&&t.virtual.enabled,l=o?i.virtual.slides.length:i.slides.length,c=_n(r,`.${i.params.slideClass}, swiper-slide`),u=o?i.virtual.slides.length:c.length;let d=[];const p=[],h=[];let _=t.slidesOffsetBefore;typeof _=="function"&&(_=t.slidesOffsetBefore.call(i));let g=t.slidesOffsetAfter;typeof g=="function"&&(g=t.slidesOffsetAfter.call(i));const m=i.snapGrid.length,f=i.slidesGrid.length,x=i.size-_-g;let v=t.spaceBetween,y=-_,M=0,w=0;if(typeof x>"u")return;typeof v=="string"&&v.indexOf("%")>=0?v=parseFloat(v.replace("%",""))/100*x:typeof v=="string"&&(v=parseFloat(v)),i.virtualSize=-v-_-g,c.forEach(T=>{s?T.style.marginLeft="":T.style.marginRight="",T.style.marginBottom="",T.style.marginTop=""}),t.centeredSlides&&t.cssMode&&(ss(n,"--swiper-centered-offset-before",""),ss(n,"--swiper-centered-offset-after",""));const E=t.grid&&t.grid.rows>1&&i.grid;E?i.grid.initSlides(c):i.grid&&i.grid.unsetSlides();let b;const S=t.slidesPerView==="auto"&&t.breakpoints&&Object.keys(t.breakpoints).filter(T=>typeof t.breakpoints[T].slidesPerView<"u").length>0;for(let T=0;T<u;T+=1){b=0;const D=c[T];if(!(D&&(E&&i.grid.updateSlide(T,D,c),qn(D,"display")==="none"))){if(o&&t.slidesPerView==="auto")t.virtual.slidesPerViewAutoSlideSize&&(b=t.virtual.slidesPerViewAutoSlideSize),b&&D&&(t.roundLengths&&(b=Math.floor(b)),D.style[i.getDirectionLabel("width")]=`${b}px`);else if(t.slidesPerView==="auto"){S&&(D.style[i.getDirectionLabel("width")]="");const B=getComputedStyle(D),L=D.style.transform,U=D.style.webkitTransform;if(L&&(D.style.transform="none"),U&&(D.style.webkitTransform="none"),t.roundLengths)b=i.isHorizontal()?Za(D,"width"):Za(D,"height");else{const F=e(B,"width"),J=e(B,"padding-left"),O=e(B,"padding-right"),N=e(B,"margin-left"),Y=e(B,"margin-right"),K=B.getPropertyValue("box-sizing");if(K&&K==="border-box")b=F+N+Y;else{const{clientWidth:z,offsetWidth:Z}=D;b=F+J+O+N+Y+(Z-z)}}L&&(D.style.transform=L),U&&(D.style.webkitTransform=U),t.roundLengths&&(b=Math.floor(b))}else b=(x-(t.slidesPerView-1)*v)/t.slidesPerView,t.roundLengths&&(b=Math.floor(b)),D&&(D.style[i.getDirectionLabel("width")]=`${b}px`);D&&(D.swiperSlideSize=b),h.push(b),t.centeredSlides?(y=y+b/2+M/2+v,M===0&&T!==0&&(y=y-x/2-v),T===0&&(y=y-x/2-v),Math.abs(y)<1/1e3&&(y=0),t.roundLengths&&(y=Math.floor(y)),w%t.slidesPerGroup===0&&d.push(y),p.push(y)):(t.roundLengths&&(y=Math.floor(y)),(w-Math.min(i.params.slidesPerGroupSkip,w))%i.params.slidesPerGroup===0&&d.push(y),p.push(y),y=y+b+v),i.virtualSize+=b+v,M=b,w+=1}}if(i.virtualSize=Math.max(i.virtualSize,x)+g,s&&a&&(t.effect==="slide"||t.effect==="coverflow")&&(n.style.width=`${i.virtualSize+v}px`),t.setWrapperSize&&(n.style[i.getDirectionLabel("width")]=`${i.virtualSize+v}px`),E&&i.grid.updateWrapperSize(b,d),!t.centeredSlides){const T=[];for(let D=0;D<d.length;D+=1){let B=d[D];t.roundLengths&&(B=Math.floor(B)),d[D]<=i.virtualSize-x&&T.push(B)}d=T,Math.floor(i.virtualSize-x)-Math.floor(d[d.length-1])>1&&d.push(i.virtualSize-x)}if(o&&t.loop){const T=h[0]+v;if(t.slidesPerGroup>1){const D=Math.ceil((i.virtual.slidesBefore+i.virtual.slidesAfter)/t.slidesPerGroup),B=T*t.slidesPerGroup;for(let L=0;L<D;L+=1)d.push(d[d.length-1]+B)}for(let D=0;D<i.virtual.slidesBefore+i.virtual.slidesAfter;D+=1)t.slidesPerGroup===1&&d.push(d[d.length-1]+T),p.push(p[p.length-1]+T),i.virtualSize+=T}if(d.length===0&&(d=[0]),v!==0){const T=i.isHorizontal()&&s?"marginLeft":i.getDirectionLabel("marginRight");c.filter((D,B)=>!t.cssMode||t.loop?!0:B!==c.length-1).forEach(D=>{D.style[T]=`${v}px`})}if(t.centeredSlides&&t.centeredSlidesBounds){let T=0;h.forEach(B=>{T+=B+(v||0)}),T-=v;const D=T>x?T-x:0;d=d.map(B=>B<=0?-_:B>D?D+g:B)}if(t.centerInsufficientSlides){let T=0;h.forEach(B=>{T+=B+(v||0)}),T-=v;const D=(_||0)+(g||0);if(T+D<x){const B=(x-T-D)/2;d.forEach((L,U)=>{d[U]=L-B}),p.forEach((L,U)=>{p[U]=L+B})}}if(Object.assign(i,{slides:c,snapGrid:d,slidesGrid:p,slidesSizesGrid:h}),t.centeredSlides&&t.cssMode&&!t.centeredSlidesBounds){ss(n,"--swiper-centered-offset-before",`${-d[0]}px`),ss(n,"--swiper-centered-offset-after",`${i.size/2-h[h.length-1]/2}px`);const T=-i.snapGrid[0],D=-i.slidesGrid[0];i.snapGrid=i.snapGrid.map(B=>B+T),i.slidesGrid=i.slidesGrid.map(B=>B+D)}if(u!==l&&i.emit("slidesLengthChange"),d.length!==m&&(i.params.watchOverflow&&i.checkOverflow(),i.emit("snapGridLengthChange")),p.length!==f&&i.emit("slidesGridLengthChange"),t.watchSlidesProgress&&i.updateSlidesOffset(),i.emit("slidesUpdated"),!o&&!t.cssMode&&(t.effect==="slide"||t.effect==="fade")){const T=`${t.containerModifierClass}backface-hidden`,D=i.el.classList.contains(T);u<=t.maxBackfaceHiddenSlides?D||i.el.classList.add(T):D&&i.el.classList.remove(T)}}function Df(i){const e=this,t=[],n=e.virtual&&e.params.virtual.enabled;let r=0,s;typeof i=="number"?e.setTransition(i):i===!0&&e.setTransition(e.params.speed);const a=o=>n?e.slides[e.getSlideIndexByData(o)]:e.slides[o];if(e.params.slidesPerView!=="auto"&&e.params.slidesPerView>1)if(e.params.centeredSlides)(e.visibleSlides||[]).forEach(o=>{t.push(o)});else for(s=0;s<Math.ceil(e.params.slidesPerView);s+=1){const o=e.activeIndex+s;if(o>e.slides.length&&!n)break;t.push(a(o))}else t.push(a(e.activeIndex));for(s=0;s<t.length;s+=1)if(typeof t[s]<"u"){const o=t[s].offsetHeight;r=o>r?o:r}(r||r===0)&&(e.wrapperEl.style.height=`${r}px`)}function If(){const i=this,e=i.slides,t=i.isElement?i.isHorizontal()?i.wrapperEl.offsetLeft:i.wrapperEl.offsetTop:0;for(let n=0;n<e.length;n+=1)e[n].swiperSlideOffset=(i.isHorizontal()?e[n].offsetLeft:e[n].offsetTop)-t-i.cssOverflowAdjustment()}const ul=(i,e,t)=>{e&&!i.classList.contains(t)?i.classList.add(t):!e&&i.classList.contains(t)&&i.classList.remove(t)};function Uf(i=this&&this.translate||0){const e=this,t=e.params,{slides:n,rtlTranslate:r,snapGrid:s}=e;if(n.length===0)return;typeof n[0].swiperSlideOffset>"u"&&e.updateSlidesOffset();let a=-i;r&&(a=i),e.visibleSlidesIndexes=[],e.visibleSlides=[];let o=t.spaceBetween;typeof o=="string"&&o.indexOf("%")>=0?o=parseFloat(o.replace("%",""))/100*e.size:typeof o=="string"&&(o=parseFloat(o));for(let l=0;l<n.length;l+=1){const c=n[l];let u=c.swiperSlideOffset;t.cssMode&&t.centeredSlides&&(u-=n[0].swiperSlideOffset);const d=(a+(t.centeredSlides?e.minTranslate():0)-u)/(c.swiperSlideSize+o),p=(a-s[0]+(t.centeredSlides?e.minTranslate():0)-u)/(c.swiperSlideSize+o),h=-(a-u),_=h+e.slidesSizesGrid[l],g=h>=0&&h<=e.size-e.slidesSizesGrid[l],m=h>=0&&h<e.size-1||_>1&&_<=e.size||h<=0&&_>=e.size;m&&(e.visibleSlides.push(c),e.visibleSlidesIndexes.push(l)),ul(c,m,t.slideVisibleClass),ul(c,g,t.slideFullyVisibleClass),c.progress=r?-d:d,c.originalProgress=r?-p:p}}function Of(i){const e=this;if(typeof i>"u"){const u=e.rtlTranslate?-1:1;i=e&&e.translate&&e.translate*u||0}const t=e.params,n=e.maxTranslate()-e.minTranslate();let{progress:r,isBeginning:s,isEnd:a,progressLoop:o}=e;const l=s,c=a;if(n===0)r=0,s=!0,a=!0;else{r=(i-e.minTranslate())/n;const u=Math.abs(i-e.minTranslate())<1,d=Math.abs(i-e.maxTranslate())<1;s=u||r<=0,a=d||r>=1,u&&(r=0),d&&(r=1)}if(t.loop){const u=e.getSlideIndexByData(0),d=e.getSlideIndexByData(e.slides.length-1),p=e.slidesGrid[u],h=e.slidesGrid[d],_=e.slidesGrid[e.slidesGrid.length-1],g=Math.abs(i);g>=p?o=(g-p)/_:o=(g+_-h)/_,o>1&&(o-=1)}Object.assign(e,{progress:r,progressLoop:o,isBeginning:s,isEnd:a}),(t.watchSlidesProgress||t.centeredSlides&&t.autoHeight)&&e.updateSlidesProgress(i),s&&!l&&e.emit("reachBeginning toEdge"),a&&!c&&e.emit("reachEnd toEdge"),(l&&!s||c&&!a)&&e.emit("fromEdge"),e.emit("progress",r)}const la=(i,e,t)=>{e&&!i.classList.contains(t)?i.classList.add(t):!e&&i.classList.contains(t)&&i.classList.remove(t)};function Nf(){const i=this,{slides:e,params:t,slidesEl:n,activeIndex:r}=i,s=i.virtual&&t.virtual.enabled,a=i.grid&&t.grid&&t.grid.rows>1,o=d=>_n(n,`.${t.slideClass}${d}, swiper-slide${d}`)[0];let l,c,u;if(s)if(t.loop){let d=r-i.virtual.slidesBefore;d<0&&(d=i.virtual.slides.length+d),d>=i.virtual.slides.length&&(d-=i.virtual.slides.length),l=o(`[data-swiper-slide-index="${d}"]`)}else l=o(`[data-swiper-slide-index="${r}"]`);else a?(l=e.find(d=>d.column===r),u=e.find(d=>d.column===r+1),c=e.find(d=>d.column===r-1)):l=e[r];l&&(a||(u=yf(l,`.${t.slideClass}, swiper-slide`)[0],t.loop&&!u&&(u=e[0]),c=Mf(l,`.${t.slideClass}, swiper-slide`)[0],t.loop&&!c===0&&(c=e[e.length-1]))),e.forEach(d=>{la(d,d===l,t.slideActiveClass),la(d,d===u,t.slideNextClass),la(d,d===c,t.slidePrevClass)}),i.emitSlidesClasses()}const Cs=(i,e)=>{if(!i||i.destroyed||!i.params)return;const t=()=>i.isElement?"swiper-slide":`.${i.params.slideClass}`,n=e.closest(t());if(n){let r=n.querySelector(`.${i.params.lazyPreloaderClass}`);!r&&i.isElement&&(n.shadowRoot?r=n.shadowRoot.querySelector(`.${i.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{n.shadowRoot&&(r=n.shadowRoot.querySelector(`.${i.params.lazyPreloaderClass}`),r&&r.remove())})),r&&r.remove()}},ca=(i,e)=>{if(!i.slides[e])return;const t=i.slides[e].querySelector('[loading="lazy"]');t&&t.removeAttribute("loading")},Ja=i=>{if(!i||i.destroyed||!i.params)return;let e=i.params.lazyPreloadPrevNext;const t=i.slides.length;if(!t||!e||e<0)return;e=Math.min(e,t);const n=i.params.slidesPerView==="auto"?i.slidesPerViewDynamic():Math.ceil(i.params.slidesPerView),r=i.activeIndex;if(i.params.grid&&i.params.grid.rows>1){const a=r,o=[a-e];o.push(...Array.from({length:e}).map((l,c)=>a+n+c)),i.slides.forEach((l,c)=>{o.includes(l.column)&&ca(i,c)});return}const s=r+n-1;if(i.params.rewind||i.params.loop)for(let a=r-e;a<=s+e;a+=1){const o=(a%t+t)%t;(o<r||o>s)&&ca(i,o)}else for(let a=Math.max(r-e,0);a<=Math.min(s+e,t-1);a+=1)a!==r&&(a>s||a<r)&&ca(i,a)};function Ff(i){const{slidesGrid:e,params:t}=i,n=i.rtlTranslate?i.translate:-i.translate;let r;for(let s=0;s<e.length;s+=1)typeof e[s+1]<"u"?n>=e[s]&&n<e[s+1]-(e[s+1]-e[s])/2?r=s:n>=e[s]&&n<e[s+1]&&(r=s+1):n>=e[s]&&(r=s);return t.normalizeSlideIndex&&(r<0||typeof r>"u")&&(r=0),r}function Bf(i){const e=this,t=e.rtlTranslate?e.translate:-e.translate,{snapGrid:n,params:r,activeIndex:s,realIndex:a,snapIndex:o}=e;let l=i,c;const u=h=>{let _=h-e.virtual.slidesBefore;return _<0&&(_=e.virtual.slides.length+_),_>=e.virtual.slides.length&&(_-=e.virtual.slides.length),_};if(typeof l>"u"&&(l=Ff(e)),n.indexOf(t)>=0)c=n.indexOf(t);else{const h=Math.min(r.slidesPerGroupSkip,l);c=h+Math.floor((l-h)/r.slidesPerGroup)}if(c>=n.length&&(c=n.length-1),l===s&&!e.params.loop){c!==o&&(e.snapIndex=c,e.emit("snapIndexChange"));return}if(l===s&&e.params.loop&&e.virtual&&e.params.virtual.enabled){e.realIndex=u(l);return}const d=e.grid&&r.grid&&r.grid.rows>1;let p;if(e.virtual&&r.virtual.enabled&&r.loop)p=u(l);else if(d){const h=e.slides.find(g=>g.column===l);let _=parseInt(h.getAttribute("data-swiper-slide-index"),10);Number.isNaN(_)&&(_=Math.max(e.slides.indexOf(h),0)),p=Math.floor(_/r.grid.rows)}else if(e.slides[l]){const h=e.slides[l].getAttribute("data-swiper-slide-index");h?p=parseInt(h,10):p=l}else p=l;Object.assign(e,{previousSnapIndex:o,snapIndex:c,previousRealIndex:a,realIndex:p,previousIndex:s,activeIndex:l}),e.initialized&&Ja(e),e.emit("activeIndexChange"),e.emit("snapIndexChange"),(e.initialized||e.params.runCallbacksOnInit)&&(a!==p&&e.emit("realIndexChange"),e.emit("slideChange"))}function zf(i,e){const t=this,n=t.params;let r=i.closest(`.${n.slideClass}, swiper-slide`);!r&&t.isElement&&e&&e.length>1&&e.includes(i)&&[...e.slice(e.indexOf(i)+1,e.length)].forEach(o=>{!r&&o.matches&&o.matches(`.${n.slideClass}, swiper-slide`)&&(r=o)});let s=!1,a;if(r){for(let o=0;o<t.slides.length;o+=1)if(t.slides[o]===r){s=!0,a=o;break}}if(r&&s)t.clickedSlide=r,t.virtual&&t.params.virtual.enabled?t.clickedIndex=parseInt(r.getAttribute("data-swiper-slide-index"),10):t.clickedIndex=a;else{t.clickedSlide=void 0,t.clickedIndex=void 0;return}n.slideToClickedSlide&&t.clickedIndex!==void 0&&t.clickedIndex!==t.activeIndex&&t.slideToClickedSlide()}var Gf={updateSize:Pf,updateSlides:Lf,updateAutoHeight:Df,updateSlidesOffset:If,updateSlidesProgress:Uf,updateProgress:Of,updateSlidesClasses:Nf,updateActiveIndex:Bf,updateClickedSlide:zf};function kf(i=this.isHorizontal()?"x":"y"){const e=this,{params:t,rtlTranslate:n,translate:r,wrapperEl:s}=e;if(t.virtualTranslate)return n?-r:r;if(t.cssMode)return r;let a=_f(s,i);return a+=e.cssOverflowAdjustment(),n&&(a=-a),a||0}function Hf(i,e){const t=this,{rtlTranslate:n,params:r,wrapperEl:s,progress:a}=t;let o=0,l=0;const c=0;t.isHorizontal()?o=n?-i:i:l=i,r.roundLengths&&(o=Math.floor(o),l=Math.floor(l)),t.previousTranslate=t.translate,t.translate=t.isHorizontal()?o:l,r.cssMode?s[t.isHorizontal()?"scrollLeft":"scrollTop"]=t.isHorizontal()?-o:-l:r.virtualTranslate||(t.isHorizontal()?o-=t.cssOverflowAdjustment():l-=t.cssOverflowAdjustment(),s.style.transform=`translate3d(${o}px, ${l}px, ${c}px)`);let u;const d=t.maxTranslate()-t.minTranslate();d===0?u=0:u=(i-t.minTranslate())/d,u!==a&&t.updateProgress(i),t.emit("setTranslate",t.translate,e)}function Vf(){return-this.snapGrid[0]}function Wf(){return-this.snapGrid[this.snapGrid.length-1]}function Xf(i=0,e=this.params.speed,t=!0,n=!0,r){const s=this,{params:a,wrapperEl:o}=s;if(s.animating&&a.preventInteractionOnTransition)return!1;const l=s.minTranslate(),c=s.maxTranslate();let u;if(n&&i>l?u=l:n&&i<c?u=c:u=i,s.updateProgress(u),a.cssMode){const d=s.isHorizontal();if(e===0)o[d?"scrollLeft":"scrollTop"]=-u;else{if(!s.support.smoothScroll)return au({swiper:s,targetPosition:-u,side:d?"left":"top"}),!0;o.scrollTo({[d?"left":"top"]:-u,behavior:"smooth"})}return!0}return e===0?(s.setTransition(0),s.setTranslate(u),t&&(s.emit("beforeTransitionStart",e,r),s.emit("transitionEnd"))):(s.setTransition(e),s.setTranslate(u),t&&(s.emit("beforeTransitionStart",e,r),s.emit("transitionStart")),s.animating||(s.animating=!0,s.onTranslateToWrapperTransitionEnd||(s.onTranslateToWrapperTransitionEnd=function(p){!s||s.destroyed||p.target===this&&(s.wrapperEl.removeEventListener("transitionend",s.onTranslateToWrapperTransitionEnd),s.onTranslateToWrapperTransitionEnd=null,delete s.onTranslateToWrapperTransitionEnd,s.animating=!1,t&&s.emit("transitionEnd"))}),s.wrapperEl.addEventListener("transitionend",s.onTranslateToWrapperTransitionEnd))),!0}var qf={getTranslate:kf,setTranslate:Hf,minTranslate:Vf,maxTranslate:Wf,translateTo:Xf};function Yf(i,e){const t=this;t.params.cssMode||(t.wrapperEl.style.transitionDuration=`${i}ms`,t.wrapperEl.style.transitionDelay=i===0?"0ms":""),t.emit("setTransition",i,e)}function fu({swiper:i,runCallbacks:e,direction:t,step:n}){const{activeIndex:r,previousIndex:s}=i;let a=t;a||(r>s?a="next":r<s?a="prev":a="reset"),i.emit(`transition${n}`),e&&a==="reset"?i.emit(`slideResetTransition${n}`):e&&r!==s&&(i.emit(`slideChangeTransition${n}`),a==="next"?i.emit(`slideNextTransition${n}`):i.emit(`slidePrevTransition${n}`))}function jf(i=!0,e){const t=this,{params:n}=t;n.cssMode||(n.autoHeight&&t.updateAutoHeight(),fu({swiper:t,runCallbacks:i,direction:e,step:"Start"}))}function $f(i=!0,e){const t=this,{params:n}=t;t.animating=!1,!n.cssMode&&(t.setTransition(0),fu({swiper:t,runCallbacks:i,direction:e,step:"End"}))}var Kf={setTransition:Yf,transitionStart:jf,transitionEnd:$f};function Zf(i=0,e,t=!0,n,r){typeof i=="string"&&(i=parseInt(i,10));const s=this;let a=i;a<0&&(a=0);const{params:o,snapGrid:l,slidesGrid:c,previousIndex:u,activeIndex:d,rtlTranslate:p,wrapperEl:h,enabled:_}=s;if(!_&&!n&&!r||s.destroyed||s.animating&&o.preventInteractionOnTransition)return!1;typeof e>"u"&&(e=s.params.speed);const g=Math.min(s.params.slidesPerGroupSkip,a);let m=g+Math.floor((a-g)/s.params.slidesPerGroup);m>=l.length&&(m=l.length-1);const f=-l[m];if(o.normalizeSlideIndex)for(let E=0;E<c.length;E+=1){const b=-Math.floor(f*100),S=Math.floor(c[E]*100),T=Math.floor(c[E+1]*100);typeof c[E+1]<"u"?b>=S&&b<T-(T-S)/2?a=E:b>=S&&b<T&&(a=E+1):b>=S&&(a=E)}if(s.initialized&&a!==d&&(!s.allowSlideNext&&(p?f>s.translate&&f>s.minTranslate():f<s.translate&&f<s.minTranslate())||!s.allowSlidePrev&&f>s.translate&&f>s.maxTranslate()&&(d||0)!==a))return!1;a!==(u||0)&&t&&s.emit("beforeSlideChangeStart"),s.updateProgress(f);let x;a>d?x="next":a<d?x="prev":x="reset";const v=s.virtual&&s.params.virtual.enabled;if(!(v&&r)&&(p&&-f===s.translate||!p&&f===s.translate))return s.updateActiveIndex(a),o.autoHeight&&s.updateAutoHeight(),s.updateSlidesClasses(),o.effect!=="slide"&&s.setTranslate(f),x!=="reset"&&(s.transitionStart(t,x),s.transitionEnd(t,x)),!1;if(o.cssMode){const E=s.isHorizontal(),b=p?f:-f;if(e===0)v&&(s.wrapperEl.style.scrollSnapType="none",s._immediateVirtual=!0),v&&!s._cssModeVirtualInitialSet&&s.params.initialSlide>0?(s._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{h[E?"scrollLeft":"scrollTop"]=b})):h[E?"scrollLeft":"scrollTop"]=b,v&&requestAnimationFrame(()=>{s.wrapperEl.style.scrollSnapType="",s._immediateVirtual=!1});else{if(!s.support.smoothScroll)return au({swiper:s,targetPosition:b,side:E?"left":"top"}),!0;h.scrollTo({[E?"left":"top"]:b,behavior:"smooth"})}return!0}const w=du().isSafari;return v&&!r&&w&&s.isElement&&s.virtual.update(!1,!1,a),s.setTransition(e),s.setTranslate(f),s.updateActiveIndex(a),s.updateSlidesClasses(),s.emit("beforeTransitionStart",e,n),s.transitionStart(t,x),e===0?s.transitionEnd(t,x):s.animating||(s.animating=!0,s.onSlideToWrapperTransitionEnd||(s.onSlideToWrapperTransitionEnd=function(b){!s||s.destroyed||b.target===this&&(s.wrapperEl.removeEventListener("transitionend",s.onSlideToWrapperTransitionEnd),s.onSlideToWrapperTransitionEnd=null,delete s.onSlideToWrapperTransitionEnd,s.transitionEnd(t,x))}),s.wrapperEl.addEventListener("transitionend",s.onSlideToWrapperTransitionEnd)),!0}function Jf(i=0,e,t=!0,n){typeof i=="string"&&(i=parseInt(i,10));const r=this;if(r.destroyed)return;typeof e>"u"&&(e=r.params.speed);const s=r.grid&&r.params.grid&&r.params.grid.rows>1;let a=i;if(r.params.loop)if(r.virtual&&r.params.virtual.enabled)a=a+r.virtual.slidesBefore;else{let o;if(s){const g=a*r.params.grid.rows;o=r.slides.find(m=>m.getAttribute("data-swiper-slide-index")*1===g).column}else o=r.getSlideIndexByData(a);const l=s?Math.ceil(r.slides.length/r.params.grid.rows):r.slides.length,{centeredSlides:c,slidesOffsetBefore:u,slidesOffsetAfter:d}=r.params,p=c||!!u||!!d;let h=r.params.slidesPerView;h==="auto"?h=r.slidesPerViewDynamic():(h=Math.ceil(parseFloat(r.params.slidesPerView,10)),p&&h%2===0&&(h=h+1));let _=l-o<h;if(p&&(_=_||o<Math.ceil(h/2)),n&&p&&r.params.slidesPerView!=="auto"&&!s&&(_=!1),_){const g=p?o<r.activeIndex?"prev":"next":o-r.activeIndex-1<r.params.slidesPerView?"next":"prev";r.loopFix({direction:g,slideTo:!0,activeSlideIndex:g==="next"?o+1:o-l+1,slideRealIndex:g==="next"?r.realIndex:void 0})}if(s){const g=a*r.params.grid.rows;a=r.slides.find(m=>m.getAttribute("data-swiper-slide-index")*1===g).column}else a=r.getSlideIndexByData(a)}return requestAnimationFrame(()=>{r.slideTo(a,e,t,n)}),r}function Qf(i,e=!0,t){const n=this,{enabled:r,params:s,animating:a}=n;if(!r||n.destroyed)return n;typeof i>"u"&&(i=n.params.speed);let o=s.slidesPerGroup;s.slidesPerView==="auto"&&s.slidesPerGroup===1&&s.slidesPerGroupAuto&&(o=Math.max(n.slidesPerViewDynamic("current",!0),1));const l=n.activeIndex<s.slidesPerGroupSkip?1:o,c=n.virtual&&s.virtual.enabled;if(s.loop){if(a&&!c&&s.loopPreventsSliding)return!1;if(n.loopFix({direction:"next"}),n._clientLeft=n.wrapperEl.clientLeft,n.activeIndex===n.slides.length-1&&s.cssMode)return requestAnimationFrame(()=>{n.slideTo(n.activeIndex+l,i,e,t)}),!0}return s.rewind&&n.isEnd?n.slideTo(0,i,e,t):n.slideTo(n.activeIndex+l,i,e,t)}function eh(i,e=!0,t){const n=this,{params:r,snapGrid:s,slidesGrid:a,rtlTranslate:o,enabled:l,animating:c}=n;if(!l||n.destroyed)return n;typeof i>"u"&&(i=n.params.speed);const u=n.virtual&&r.virtual.enabled;if(r.loop){if(c&&!u&&r.loopPreventsSliding)return!1;n.loopFix({direction:"prev"}),n._clientLeft=n.wrapperEl.clientLeft}const d=o?n.translate:-n.translate;function p(x){return x<0?-Math.floor(Math.abs(x)):Math.floor(x)}const h=p(d),_=s.map(x=>p(x)),g=r.freeMode&&r.freeMode.enabled;let m=s[_.indexOf(h)-1];if(typeof m>"u"&&(r.cssMode||g)){let x;s.forEach((v,y)=>{h>=v&&(x=y)}),typeof x<"u"&&(m=g?s[x]:s[x>0?x-1:x])}let f=0;if(typeof m<"u"&&(f=a.indexOf(m),f<0&&(f=n.activeIndex-1),r.slidesPerView==="auto"&&r.slidesPerGroup===1&&r.slidesPerGroupAuto&&(f=f-n.slidesPerViewDynamic("previous",!0)+1,f=Math.max(f,0))),r.rewind&&n.isBeginning){const x=n.params.virtual&&n.params.virtual.enabled&&n.virtual?n.virtual.slides.length-1:n.slides.length-1;return n.slideTo(x,i,e,t)}else if(r.loop&&n.activeIndex===0&&r.cssMode)return requestAnimationFrame(()=>{n.slideTo(f,i,e,t)}),!0;return n.slideTo(f,i,e,t)}function th(i,e=!0,t){const n=this;if(!n.destroyed)return typeof i>"u"&&(i=n.params.speed),n.slideTo(n.activeIndex,i,e,t)}function nh(i,e=!0,t,n=.5){const r=this;if(r.destroyed)return;typeof i>"u"&&(i=r.params.speed);let s=r.activeIndex;const a=Math.min(r.params.slidesPerGroupSkip,s),o=a+Math.floor((s-a)/r.params.slidesPerGroup),l=r.rtlTranslate?r.translate:-r.translate;if(l>=r.snapGrid[o]){const c=r.snapGrid[o],u=r.snapGrid[o+1];l-c>(u-c)*n&&(s+=r.params.slidesPerGroup)}else{const c=r.snapGrid[o-1],u=r.snapGrid[o];l-c<=(u-c)*n&&(s-=r.params.slidesPerGroup)}return s=Math.max(s,0),s=Math.min(s,r.slidesGrid.length-1),r.slideTo(s,i,e,t)}function ih(){const i=this;if(i.destroyed)return;const{params:e,slidesEl:t}=i,n=e.slidesPerView==="auto"?i.slidesPerViewDynamic():e.slidesPerView;let r=i.getSlideIndexWhenGrid(i.clickedIndex),s;const a=i.isElement?"swiper-slide":`.${e.slideClass}`,o=i.grid&&i.params.grid&&i.params.grid.rows>1;if(e.loop){if(i.animating)return;s=parseInt(i.clickedSlide.getAttribute("data-swiper-slide-index"),10),e.centeredSlides?i.slideToLoop(s):r>(o?(i.slides.length-n)/2-(i.params.grid.rows-1):i.slides.length-n)?(i.loopFix(),r=i.getSlideIndex(_n(t,`${a}[data-swiper-slide-index="${s}"]`)[0]),su(()=>{i.slideTo(r)})):i.slideTo(r)}else i.slideTo(r)}var rh={slideTo:Zf,slideToLoop:Jf,slideNext:Qf,slidePrev:eh,slideReset:th,slideToClosest:nh,slideToClickedSlide:ih};function sh(i,e){const t=this,{params:n,slidesEl:r}=t;if(!n.loop||t.virtual&&t.params.virtual.enabled)return;const s=()=>{_n(r,`.${n.slideClass}, swiper-slide`).forEach((_,g)=>{_.setAttribute("data-swiper-slide-index",g)})},a=()=>{const h=_n(r,`.${n.slideBlankClass}`);h.forEach(_=>{_.remove()}),h.length>0&&(t.recalcSlides(),t.updateSlides())},o=t.grid&&n.grid&&n.grid.rows>1;n.loopAddBlankSlides&&(n.slidesPerGroup>1||o)&&a();const l=n.slidesPerGroup*(o?n.grid.rows:1),c=t.slides.length%l!==0,u=o&&t.slides.length%n.grid.rows!==0,d=h=>{for(let _=0;_<h;_+=1){const g=t.isElement?Fs("swiper-slide",[n.slideBlankClass]):Fs("div",[n.slideClass,n.slideBlankClass]);t.slidesEl.append(g)}};if(c){if(n.loopAddBlankSlides){const h=l-t.slides.length%l;d(h),t.recalcSlides(),t.updateSlides()}else Ns("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");s()}else if(u){if(n.loopAddBlankSlides){const h=n.grid.rows-t.slides.length%n.grid.rows;d(h),t.recalcSlides(),t.updateSlides()}else Ns("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");s()}else s();const p=n.centeredSlides||!!n.slidesOffsetBefore||!!n.slidesOffsetAfter;t.loopFix({slideRealIndex:i,direction:p?void 0:"next",initial:e})}function ah({slideRealIndex:i,slideTo:e=!0,direction:t,setTranslate:n,activeSlideIndex:r,initial:s,byController:a,byMousewheel:o}={}){const l=this;if(!l.params.loop)return;l.emit("beforeLoopFix");const{slides:c,allowSlidePrev:u,allowSlideNext:d,slidesEl:p,params:h}=l,{centeredSlides:_,slidesOffsetBefore:g,slidesOffsetAfter:m,initialSlide:f}=h,x=_||!!g||!!m;if(l.allowSlidePrev=!0,l.allowSlideNext=!0,l.virtual&&h.virtual.enabled){e&&(!x&&l.snapIndex===0?l.slideTo(l.virtual.slides.length,0,!1,!0):x&&l.snapIndex<h.slidesPerView?l.slideTo(l.virtual.slides.length+l.snapIndex,0,!1,!0):l.snapIndex===l.snapGrid.length-1&&l.slideTo(l.virtual.slidesBefore,0,!1,!0)),l.allowSlidePrev=u,l.allowSlideNext=d,l.emit("loopFix");return}let v=h.slidesPerView;v==="auto"?v=l.slidesPerViewDynamic():(v=Math.ceil(parseFloat(h.slidesPerView,10)),x&&v%2===0&&(v=v+1));const y=h.slidesPerGroupAuto?v:h.slidesPerGroup;let M=x?Math.max(y,Math.ceil(v/2)):y;M%y!==0&&(M+=y-M%y),M+=h.loopAdditionalSlides,l.loopedSlides=M;const w=l.grid&&h.grid&&h.grid.rows>1;c.length<v+M||l.params.effect==="cards"&&c.length<v+M*2?Ns("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):w&&h.grid.fill==="row"&&Ns("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const E=[],b=[],S=w?Math.ceil(c.length/h.grid.rows):c.length,T=s&&S-f<v&&!x;let D=T?f:l.activeIndex;typeof r>"u"?r=l.getSlideIndex(c.find(N=>N.classList.contains(h.slideActiveClass))):D=r;const B=t==="next"||!t,L=t==="prev"||!t;let U=0,F=0;const O=(w?c[r].column:r)+(x&&typeof n>"u"?-v/2+.5:0);if(O<M){U=Math.max(M-O,y);for(let N=0;N<M-O;N+=1){const Y=N-Math.floor(N/S)*S;if(w){const K=S-Y-1;for(let z=c.length-1;z>=0;z-=1)c[z].column===K&&E.push(z)}else E.push(S-Y-1)}}else if(O+v>S-M){F=Math.max(O-(S-M*2),y),T&&(F=Math.max(F,v-S+f+1));for(let N=0;N<F;N+=1){const Y=N-Math.floor(N/S)*S;w?c.forEach((K,z)=>{K.column===Y&&b.push(z)}):b.push(Y)}}if(l.__preventObserver__=!0,requestAnimationFrame(()=>{l.__preventObserver__=!1}),l.params.effect==="cards"&&c.length<v+M*2&&(b.includes(r)&&b.splice(b.indexOf(r),1),E.includes(r)&&E.splice(E.indexOf(r),1)),L&&E.forEach(N=>{c[N].swiperLoopMoveDOM=!0,p.prepend(c[N]),c[N].swiperLoopMoveDOM=!1}),B&&b.forEach(N=>{c[N].swiperLoopMoveDOM=!0,p.append(c[N]),c[N].swiperLoopMoveDOM=!1}),l.recalcSlides(),h.slidesPerView==="auto"?l.updateSlides():w&&(E.length>0&&L||b.length>0&&B)&&l.slides.forEach((N,Y)=>{l.grid.updateSlide(Y,N,l.slides)}),h.watchSlidesProgress&&l.updateSlidesOffset(),e){if(E.length>0&&L){if(typeof i>"u"){const N=l.slidesGrid[D],K=l.slidesGrid[D+U]-N;o?l.setTranslate(l.translate-K):(l.slideTo(D+Math.ceil(U),0,!1,!0),n&&(l.touchEventsData.startTranslate=l.touchEventsData.startTranslate-K,l.touchEventsData.currentTranslate=l.touchEventsData.currentTranslate-K))}else if(n){const N=w?E.length/h.grid.rows:E.length;l.slideTo(l.activeIndex+N,0,!1,!0),l.touchEventsData.currentTranslate=l.translate}}else if(b.length>0&&B)if(typeof i>"u"){const N=l.slidesGrid[D],K=l.slidesGrid[D-F]-N;o?l.setTranslate(l.translate-K):(l.slideTo(D-F,0,!1,!0),n&&(l.touchEventsData.startTranslate=l.touchEventsData.startTranslate-K,l.touchEventsData.currentTranslate=l.touchEventsData.currentTranslate-K))}else{const N=w?b.length/h.grid.rows:b.length;l.slideTo(l.activeIndex-N,0,!1,!0)}}if(l.allowSlidePrev=u,l.allowSlideNext=d,l.controller&&l.controller.control&&!a){const N={slideRealIndex:i,direction:t,setTranslate:n,activeSlideIndex:r,byController:!0};Array.isArray(l.controller.control)?l.controller.control.forEach(Y=>{!Y.destroyed&&Y.params.loop&&Y.loopFix({...N,slideTo:Y.params.slidesPerView===h.slidesPerView?e:!1})}):l.controller.control instanceof l.constructor&&l.controller.control.params.loop&&l.controller.control.loopFix({...N,slideTo:l.controller.control.params.slidesPerView===h.slidesPerView?e:!1})}l.emit("loopFix")}function oh(){const i=this,{params:e,slidesEl:t}=i;if(!e.loop||!t||i.virtual&&i.params.virtual.enabled)return;i.recalcSlides();const n=[];i.slides.forEach(r=>{const s=typeof r.swiperSlideIndex>"u"?r.getAttribute("data-swiper-slide-index")*1:r.swiperSlideIndex;n[s]=r}),i.slides.forEach(r=>{r.removeAttribute("data-swiper-slide-index")}),n.forEach(r=>{t.append(r)}),i.recalcSlides(),i.slideTo(i.realIndex,0)}var lh={loopCreate:sh,loopFix:ah,loopDestroy:oh};function ch(i){const e=this;if(!e.params.simulateTouch||e.params.watchOverflow&&e.isLocked||e.params.cssMode)return;const t=e.params.touchEventsTarget==="container"?e.el:e.wrapperEl;e.isElement&&(e.__preventObserver__=!0),t.style.cursor="move",t.style.cursor=i?"grabbing":"grab",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1})}function uh(){const i=this;i.params.watchOverflow&&i.isLocked||i.params.cssMode||(i.isElement&&(i.__preventObserver__=!0),i[i.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",i.isElement&&requestAnimationFrame(()=>{i.__preventObserver__=!1}))}var dh={setGrabCursor:ch,unsetGrabCursor:uh};function fh(i,e=this){function t(n){if(!n||n===xn()||n===Pt())return null;n.assignedSlot&&(n=n.assignedSlot);const r=n.closest(i);return!r&&!n.getRootNode?null:r||t(n.getRootNode().host)}return t(e)}function dl(i,e,t){const n=Pt(),{params:r}=i,s=r.edgeSwipeDetection,a=r.edgeSwipeThreshold;return s&&(t<=a||t>=n.innerWidth-a)?s==="prevent"?(e.preventDefault(),!0):!1:!0}function hh(i){const e=this,t=xn();let n=i;n.originalEvent&&(n=n.originalEvent);const r=e.touchEventsData;if(n.type==="pointerdown"){if(r.pointerId!==null&&r.pointerId!==n.pointerId)return;r.pointerId=n.pointerId}else n.type==="touchstart"&&n.targetTouches.length===1&&(r.touchId=n.targetTouches[0].identifier);if(n.type==="touchstart"){dl(e,n,n.targetTouches[0].pageX);return}const{params:s,touches:a,enabled:o}=e;if(!o||!s.simulateTouch&&n.pointerType==="mouse"||e.animating&&s.preventInteractionOnTransition)return;!e.animating&&s.cssMode&&s.loop&&e.loopFix();let l=n.target;if(s.touchEventsTarget==="wrapper"&&!Sf(l,e.wrapperEl)||"which"in n&&n.which===3||"button"in n&&n.button>0||r.isTouched&&r.isMoved)return;const c=!!s.noSwipingClass&&s.noSwipingClass!=="",u=n.composedPath?n.composedPath():n.path;c&&n.target&&n.target.shadowRoot&&u&&(l=u[0]);const d=s.noSwipingSelector?s.noSwipingSelector:`.${s.noSwipingClass}`,p=!!(n.target&&n.target.shadowRoot);if(s.noSwiping&&(p?fh(d,l):l.closest(d))){e.allowClick=!0;return}if(s.swipeHandler&&!l.closest(s.swipeHandler))return;a.currentX=n.pageX,a.currentY=n.pageY;const h=a.currentX,_=a.currentY;if(!dl(e,n,h))return;Object.assign(r,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),a.startX=h,a.startY=_,r.touchStartTime=Os(),e.allowClick=!0,e.updateSize(),e.swipeDirection=void 0,s.threshold>0&&(r.allowThresholdMove=!1);let g=!0;l.matches(r.focusableElements)&&(g=!1,l.nodeName==="SELECT"&&(r.isTouched=!1)),t.activeElement&&t.activeElement.matches(r.focusableElements)&&t.activeElement!==l&&(n.pointerType==="mouse"||n.pointerType!=="mouse"&&!l.matches(r.focusableElements))&&t.activeElement.blur();const m=g&&e.allowTouchMove&&s.touchStartPreventDefault;(s.touchStartForcePreventDefault||m)&&!l.isContentEditable&&n.preventDefault(),s.freeMode&&s.freeMode.enabled&&e.freeMode&&e.animating&&!s.cssMode&&e.freeMode.onTouchStart(),e.emit("touchStart",n)}function ph(i){const e=xn(),t=this,n=t.touchEventsData,{params:r,touches:s,rtlTranslate:a,enabled:o}=t;if(!o||!r.simulateTouch&&i.pointerType==="mouse")return;let l=i;if(l.originalEvent&&(l=l.originalEvent),l.type==="pointermove"&&(n.touchId!==null||l.pointerId!==n.pointerId))return;let c;if(l.type==="touchmove"){if(c=[...l.changedTouches].find(M=>M.identifier===n.touchId),!c||c.identifier!==n.touchId)return}else c=l;if(!n.isTouched){n.startMoving&&n.isScrolling&&t.emit("touchMoveOpposite",l);return}const u=c.pageX,d=c.pageY;if(l.preventedByNestedSwiper){s.startX=u,s.startY=d;return}if(!t.allowTouchMove){l.target.matches(n.focusableElements)||(t.allowClick=!1),n.isTouched&&(Object.assign(s,{startX:u,startY:d,currentX:u,currentY:d}),n.touchStartTime=Os());return}if(r.touchReleaseOnEdges&&!r.loop)if(t.isVertical()){if(d<s.startY&&t.translate<=t.maxTranslate()||d>s.startY&&t.translate>=t.minTranslate()){n.isTouched=!1,n.isMoved=!1;return}}else{if(a&&(u>s.startX&&-t.translate<=t.maxTranslate()||u<s.startX&&-t.translate>=t.minTranslate()))return;if(!a&&(u<s.startX&&t.translate<=t.maxTranslate()||u>s.startX&&t.translate>=t.minTranslate()))return}if(e.activeElement&&e.activeElement.matches(n.focusableElements)&&e.activeElement!==l.target&&l.pointerType!=="mouse"&&e.activeElement.blur(),e.activeElement&&l.target===e.activeElement&&l.target.matches(n.focusableElements)){n.isMoved=!0,t.allowClick=!1;return}n.allowTouchCallbacks&&t.emit("touchMove",l),s.previousX=s.currentX,s.previousY=s.currentY,s.currentX=u,s.currentY=d;const p=s.currentX-s.startX,h=s.currentY-s.startY;if(t.params.threshold&&Math.sqrt(p**2+h**2)<t.params.threshold)return;if(typeof n.isScrolling>"u"){let M;t.isHorizontal()&&s.currentY===s.startY||t.isVertical()&&s.currentX===s.startX?n.isScrolling=!1:p*p+h*h>=25&&(M=Math.atan2(Math.abs(h),Math.abs(p))*180/Math.PI,n.isScrolling=t.isHorizontal()?M>r.touchAngle:90-M>r.touchAngle)}if(n.isScrolling&&t.emit("touchMoveOpposite",l),typeof n.startMoving>"u"&&(s.currentX!==s.startX||s.currentY!==s.startY)&&(n.startMoving=!0),n.isScrolling||l.type==="touchmove"&&n.preventTouchMoveFromPointerMove){n.isTouched=!1;return}if(!n.startMoving)return;t.allowClick=!1,!r.cssMode&&l.cancelable&&l.preventDefault(),r.touchMoveStopPropagation&&!r.nested&&l.stopPropagation();let _=t.isHorizontal()?p:h,g=t.isHorizontal()?s.currentX-s.previousX:s.currentY-s.previousY;r.oneWayMovement&&(_=Math.abs(_)*(a?1:-1),g=Math.abs(g)*(a?1:-1)),s.diff=_,_*=r.touchRatio,a&&(_=-_,g=-g);const m=t.touchesDirection;t.swipeDirection=_>0?"prev":"next",t.touchesDirection=g>0?"prev":"next";const f=t.params.loop&&!r.cssMode,x=t.touchesDirection==="next"&&t.allowSlideNext||t.touchesDirection==="prev"&&t.allowSlidePrev;if(!n.isMoved){if(f&&x&&t.loopFix({direction:t.swipeDirection}),n.startTranslate=t.getTranslate(),t.setTransition(0),t.animating){const M=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});t.wrapperEl.dispatchEvent(M)}n.allowMomentumBounce=!1,r.grabCursor&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!0),t.emit("sliderFirstMove",l)}if(new Date().getTime(),r._loopSwapReset!==!1&&n.isMoved&&n.allowThresholdMove&&m!==t.touchesDirection&&f&&x&&Math.abs(_)>=1){Object.assign(s,{startX:u,startY:d,currentX:u,currentY:d,startTranslate:n.currentTranslate}),n.loopSwapReset=!0,n.startTranslate=n.currentTranslate;return}t.emit("sliderMove",l),n.isMoved=!0,n.currentTranslate=_+n.startTranslate;let v=!0,y=r.resistanceRatio;if(r.touchReleaseOnEdges&&(y=0),_>0?(f&&x&&n.allowThresholdMove&&n.currentTranslate>(r.centeredSlides?t.minTranslate()-t.slidesSizesGrid[t.activeIndex+1]-(r.slidesPerView!=="auto"&&t.slides.length-r.slidesPerView>=2?t.slidesSizesGrid[t.activeIndex+1]+t.params.spaceBetween:0)-t.params.spaceBetween:t.minTranslate())&&t.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),n.currentTranslate>t.minTranslate()&&(v=!1,r.resistance&&(n.currentTranslate=t.minTranslate()-1+(-t.minTranslate()+n.startTranslate+_)**y))):_<0&&(f&&x&&n.allowThresholdMove&&n.currentTranslate<(r.centeredSlides?t.maxTranslate()+t.slidesSizesGrid[t.slidesSizesGrid.length-1]+t.params.spaceBetween+(r.slidesPerView!=="auto"&&t.slides.length-r.slidesPerView>=2?t.slidesSizesGrid[t.slidesSizesGrid.length-1]+t.params.spaceBetween:0):t.maxTranslate())&&t.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:t.slides.length-(r.slidesPerView==="auto"?t.slidesPerViewDynamic():Math.ceil(parseFloat(r.slidesPerView,10)))}),n.currentTranslate<t.maxTranslate()&&(v=!1,r.resistance&&(n.currentTranslate=t.maxTranslate()+1-(t.maxTranslate()-n.startTranslate-_)**y))),v&&(l.preventedByNestedSwiper=!0),!t.allowSlideNext&&t.swipeDirection==="next"&&n.currentTranslate<n.startTranslate&&(n.currentTranslate=n.startTranslate),!t.allowSlidePrev&&t.swipeDirection==="prev"&&n.currentTranslate>n.startTranslate&&(n.currentTranslate=n.startTranslate),!t.allowSlidePrev&&!t.allowSlideNext&&(n.currentTranslate=n.startTranslate),r.threshold>0)if(Math.abs(_)>r.threshold||n.allowThresholdMove){if(!n.allowThresholdMove){n.allowThresholdMove=!0,s.startX=s.currentX,s.startY=s.currentY,n.currentTranslate=n.startTranslate,s.diff=t.isHorizontal()?s.currentX-s.startX:s.currentY-s.startY;return}}else{n.currentTranslate=n.startTranslate;return}!r.followFinger||r.cssMode||((r.freeMode&&r.freeMode.enabled&&t.freeMode||r.watchSlidesProgress)&&(t.updateActiveIndex(),t.updateSlidesClasses()),r.freeMode&&r.freeMode.enabled&&t.freeMode&&t.freeMode.onTouchMove(),t.updateProgress(n.currentTranslate),t.setTranslate(n.currentTranslate))}function mh(i){const e=this,t=e.touchEventsData;let n=i;n.originalEvent&&(n=n.originalEvent);let r;if(n.type==="touchend"||n.type==="touchcancel"){if(r=[...n.changedTouches].find(M=>M.identifier===t.touchId),!r||r.identifier!==t.touchId)return}else{if(t.touchId!==null||n.pointerId!==t.pointerId)return;r=n}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(n.type)&&!(["pointercancel","contextmenu"].includes(n.type)&&(e.browser.isSafari||e.browser.isWebView)))return;t.pointerId=null,t.touchId=null;const{params:a,touches:o,rtlTranslate:l,slidesGrid:c,enabled:u}=e;if(!u||!a.simulateTouch&&n.pointerType==="mouse")return;if(t.allowTouchCallbacks&&e.emit("touchEnd",n),t.allowTouchCallbacks=!1,!t.isTouched){t.isMoved&&a.grabCursor&&e.setGrabCursor(!1),t.isMoved=!1,t.startMoving=!1;return}a.grabCursor&&t.isMoved&&t.isTouched&&(e.allowSlideNext===!0||e.allowSlidePrev===!0)&&e.setGrabCursor(!1);const d=Os(),p=d-t.touchStartTime;if(e.allowClick){const M=n.path||n.composedPath&&n.composedPath();e.updateClickedSlide(M&&M[0]||n.target,M),e.emit("tap click",n),p<300&&d-t.lastClickTime<300&&e.emit("doubleTap doubleClick",n)}if(t.lastClickTime=Os(),su(()=>{e.destroyed||(e.allowClick=!0)}),!t.isTouched||!t.isMoved||!e.swipeDirection||o.diff===0&&!t.loopSwapReset||t.currentTranslate===t.startTranslate&&!t.loopSwapReset){t.isTouched=!1,t.isMoved=!1,t.startMoving=!1;return}t.isTouched=!1,t.isMoved=!1,t.startMoving=!1;let h;if(a.followFinger?h=l?e.translate:-e.translate:h=-t.currentTranslate,a.cssMode)return;if(a.freeMode&&a.freeMode.enabled){e.freeMode.onTouchEnd({currentPos:h});return}const _=h>=-e.maxTranslate()&&!e.params.loop;let g=0,m=e.slidesSizesGrid[0];for(let M=0;M<c.length;M+=M<a.slidesPerGroupSkip?1:a.slidesPerGroup){const w=M<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;typeof c[M+w]<"u"?(_||h>=c[M]&&h<c[M+w])&&(g=M,m=c[M+w]-c[M]):(_||h>=c[M])&&(g=M,m=c[c.length-1]-c[c.length-2])}let f=null,x=null;a.rewind&&(e.isBeginning?x=a.virtual&&a.virtual.enabled&&e.virtual?e.virtual.slides.length-1:e.slides.length-1:e.isEnd&&(f=0));const v=(h-c[g])/m,y=g<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;if(p>a.longSwipesMs){if(!a.longSwipes){e.slideTo(e.activeIndex);return}e.swipeDirection==="next"&&(v>=a.longSwipesRatio?e.slideTo(a.rewind&&e.isEnd?f:g+y):e.slideTo(g)),e.swipeDirection==="prev"&&(v>1-a.longSwipesRatio?e.slideTo(g+y):x!==null&&v<0&&Math.abs(v)>a.longSwipesRatio?e.slideTo(x):e.slideTo(g))}else{if(!a.shortSwipes){e.slideTo(e.activeIndex);return}e.navigation&&(n.target===e.navigation.nextEl||n.target===e.navigation.prevEl)?n.target===e.navigation.nextEl?e.slideTo(g+y):e.slideTo(g):(e.swipeDirection==="next"&&e.slideTo(f!==null?f:g+y),e.swipeDirection==="prev"&&e.slideTo(x!==null?x:g))}}function fl(){const i=this,{params:e,el:t}=i;if(t&&t.offsetWidth===0)return;e.breakpoints&&i.setBreakpoint();const{allowSlideNext:n,allowSlidePrev:r,snapGrid:s}=i,a=i.virtual&&i.params.virtual.enabled;i.allowSlideNext=!0,i.allowSlidePrev=!0,i.updateSize(),i.updateSlides(),i.updateSlidesClasses();const o=a&&e.loop;(e.slidesPerView==="auto"||e.slidesPerView>1)&&i.isEnd&&!i.isBeginning&&!i.params.centeredSlides&&!o?i.slideTo(i.slides.length-1,0,!1,!0):i.params.loop&&!a?i.slideToLoop(i.realIndex,0,!1,!0):i.slideTo(i.activeIndex,0,!1,!0),i.autoplay&&i.autoplay.running&&i.autoplay.paused&&(clearTimeout(i.autoplay.resizeTimeout),i.autoplay.resizeTimeout=setTimeout(()=>{i.autoplay&&i.autoplay.running&&i.autoplay.paused&&i.autoplay.resume()},500)),i.allowSlidePrev=r,i.allowSlideNext=n,i.params.watchOverflow&&s!==i.snapGrid&&i.checkOverflow()}function gh(i){const e=this;e.enabled&&(e.allowClick||(e.params.preventClicks&&i.preventDefault(),e.params.preventClicksPropagation&&e.animating&&(i.stopPropagation(),i.stopImmediatePropagation())))}function _h(){const i=this,{wrapperEl:e,rtlTranslate:t,enabled:n}=i;if(!n)return;i.previousTranslate=i.translate,i.isHorizontal()?i.translate=-e.scrollLeft:i.translate=-e.scrollTop,i.translate===0&&(i.translate=0),i.updateActiveIndex(),i.updateSlidesClasses();let r;const s=i.maxTranslate()-i.minTranslate();s===0?r=0:r=(i.translate-i.minTranslate())/s,r!==i.progress&&i.updateProgress(t?-i.translate:i.translate),i.emit("setTranslate",i.translate,!1)}function vh(i){const e=this;Cs(e,i.target),!(e.params.cssMode||e.params.slidesPerView!=="auto"&&!e.params.autoHeight)&&e.update()}function xh(){const i=this;i.documentTouchHandlerProceeded||(i.documentTouchHandlerProceeded=!0,i.params.touchReleaseOnEdges&&(i.el.style.touchAction="auto"))}const hu=(i,e)=>{const t=xn(),{params:n,el:r,wrapperEl:s,device:a}=i,o=!!n.nested,l=e==="on"?"addEventListener":"removeEventListener",c=e;!r||typeof r=="string"||(t[l]("touchstart",i.onDocumentTouchStart,{passive:!1,capture:o}),r[l]("touchstart",i.onTouchStart,{passive:!1}),r[l]("pointerdown",i.onTouchStart,{passive:!1}),t[l]("touchmove",i.onTouchMove,{passive:!1,capture:o}),t[l]("pointermove",i.onTouchMove,{passive:!1,capture:o}),t[l]("touchend",i.onTouchEnd,{passive:!0}),t[l]("pointerup",i.onTouchEnd,{passive:!0}),t[l]("pointercancel",i.onTouchEnd,{passive:!0}),t[l]("touchcancel",i.onTouchEnd,{passive:!0}),t[l]("pointerout",i.onTouchEnd,{passive:!0}),t[l]("pointerleave",i.onTouchEnd,{passive:!0}),t[l]("contextmenu",i.onTouchEnd,{passive:!0}),(n.preventClicks||n.preventClicksPropagation)&&r[l]("click",i.onClick,!0),n.cssMode&&s[l]("scroll",i.onScroll),n.updateOnWindowResize?i[c](a.ios||a.android?"resize orientationchange observerUpdate":"resize observerUpdate",fl,!0):i[c]("observerUpdate",fl,!0),r[l]("load",i.onLoad,{capture:!0}))};function Sh(){const i=this,{params:e}=i;i.onTouchStart=hh.bind(i),i.onTouchMove=ph.bind(i),i.onTouchEnd=mh.bind(i),i.onDocumentTouchStart=xh.bind(i),e.cssMode&&(i.onScroll=_h.bind(i)),i.onClick=gh.bind(i),i.onLoad=vh.bind(i),hu(i,"on")}function Mh(){hu(this,"off")}var yh={attachEvents:Sh,detachEvents:Mh};const hl=(i,e)=>i.grid&&e.grid&&e.grid.rows>1;function Eh(){const i=this,{realIndex:e,initialized:t,params:n,el:r}=i,s=n.breakpoints;if(!s||s&&Object.keys(s).length===0)return;const a=xn(),o=n.breakpointsBase==="window"||!n.breakpointsBase?n.breakpointsBase:"container",l=["window","container"].includes(n.breakpointsBase)||!n.breakpointsBase?i.el:a.querySelector(n.breakpointsBase),c=i.getBreakpoint(s,o,l);if(!c||i.currentBreakpoint===c)return;const d=(c in s?s[c]:void 0)||i.originalParams,p=hl(i,n),h=hl(i,d),_=i.params.grabCursor,g=d.grabCursor,m=n.enabled;p&&!h?(r.classList.remove(`${n.containerModifierClass}grid`,`${n.containerModifierClass}grid-column`),i.emitContainerClasses()):!p&&h&&(r.classList.add(`${n.containerModifierClass}grid`),(d.grid.fill&&d.grid.fill==="column"||!d.grid.fill&&n.grid.fill==="column")&&r.classList.add(`${n.containerModifierClass}grid-column`),i.emitContainerClasses()),_&&!g?i.unsetGrabCursor():!_&&g&&i.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(w=>{if(typeof d[w]>"u")return;const E=n[w]&&n[w].enabled,b=d[w]&&d[w].enabled;E&&!b&&i[w].disable(),!E&&b&&i[w].enable()});const f=d.direction&&d.direction!==n.direction,x=n.loop&&(d.slidesPerView!==n.slidesPerView||f),v=n.loop;f&&t&&i.changeDirection(),Vt(i.params,d);const y=i.params.enabled,M=i.params.loop;Object.assign(i,{allowTouchMove:i.params.allowTouchMove,allowSlideNext:i.params.allowSlideNext,allowSlidePrev:i.params.allowSlidePrev}),m&&!y?i.disable():!m&&y&&i.enable(),i.currentBreakpoint=c,i.emit("_beforeBreakpoint",d),t&&(x?(i.loopDestroy(),i.loopCreate(e),i.updateSlides()):!v&&M?(i.loopCreate(e),i.updateSlides()):v&&!M&&i.loopDestroy()),i.emit("breakpoint",d)}function Th(i,e="window",t){if(!i||e==="container"&&!t)return;let n=!1;const r=Pt(),s=e==="window"?r.innerHeight:t.clientHeight,a=Object.keys(i).map(o=>{if(typeof o=="string"&&o.indexOf("@")===0){const l=parseFloat(o.substr(1));return{value:s*l,point:o}}return{value:o,point:o}});a.sort((o,l)=>parseInt(o.value,10)-parseInt(l.value,10));for(let o=0;o<a.length;o+=1){const{point:l,value:c}=a[o];e==="window"?r.matchMedia(`(min-width: ${c}px)`).matches&&(n=l):c<=t.clientWidth&&(n=l)}return n||"max"}var bh={setBreakpoint:Eh,getBreakpoint:Th};function Ah(i,e){const t=[];return i.forEach(n=>{typeof n=="object"?Object.keys(n).forEach(r=>{n[r]&&t.push(e+r)}):typeof n=="string"&&t.push(e+n)}),t}function wh(){const i=this,{classNames:e,params:t,rtl:n,el:r,device:s}=i,a=Ah(["initialized",t.direction,{"free-mode":i.params.freeMode&&t.freeMode.enabled},{autoheight:t.autoHeight},{rtl:n},{grid:t.grid&&t.grid.rows>1},{"grid-column":t.grid&&t.grid.rows>1&&t.grid.fill==="column"},{android:s.android},{ios:s.ios},{"css-mode":t.cssMode},{centered:t.cssMode&&t.centeredSlides},{"watch-progress":t.watchSlidesProgress}],t.containerModifierClass);e.push(...a),r.classList.add(...e),i.emitContainerClasses()}function Ch(){const i=this,{el:e,classNames:t}=i;!e||typeof e=="string"||(e.classList.remove(...t),i.emitContainerClasses())}var Rh={addClasses:wh,removeClasses:Ch};function Ph(){const i=this,{isLocked:e,params:t}=i,{slidesOffsetBefore:n}=t;if(n){const r=i.slides.length-1,s=i.slidesGrid[r]+i.slidesSizesGrid[r]+n*2;i.isLocked=i.size>s}else i.isLocked=i.snapGrid.length===1;t.allowSlideNext===!0&&(i.allowSlideNext=!i.isLocked),t.allowSlidePrev===!0&&(i.allowSlidePrev=!i.isLocked),e&&e!==i.isLocked&&(i.isEnd=!1),e!==i.isLocked&&i.emit(i.isLocked?"lock":"unlock")}var Lh={checkOverflow:Ph},Qa={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function Dh(i,e){return function(n={}){const r=Object.keys(n)[0],s=n[r];if(typeof s!="object"||s===null){Vt(e,n);return}if(i[r]===!0&&(i[r]={enabled:!0}),r==="navigation"&&i[r]&&i[r].enabled&&!i[r].prevEl&&!i[r].nextEl&&(i[r].auto=!0),["pagination","scrollbar"].indexOf(r)>=0&&i[r]&&i[r].enabled&&!i[r].el&&(i[r].auto=!0),!(r in i&&"enabled"in s)){Vt(e,n);return}typeof i[r]=="object"&&!("enabled"in i[r])&&(i[r].enabled=!0),i[r]||(i[r]={enabled:!1}),Vt(e,n)}}const ua={eventsEmitter:Rf,update:Gf,translate:qf,transition:Kf,slide:rh,loop:lh,grabCursor:dh,events:yh,breakpoints:bh,checkOverflow:Lh,classes:Rh},da={};let Ro=class Pn{constructor(...e){let t,n;e.length===1&&e[0].constructor&&Object.prototype.toString.call(e[0]).slice(8,-1)==="Object"?n=e[0]:[t,n]=e,n||(n={}),n=Vt({},n),t&&!n.el&&(n.el=t);const r=xn();if(n.el&&typeof n.el=="string"&&r.querySelectorAll(n.el).length>1){const l=[];return r.querySelectorAll(n.el).forEach(c=>{const u=Vt({},n,{el:c});l.push(new Pn(u))}),l}const s=this;s.__swiper__=!0,s.support=cu(),s.device=uu({userAgent:n.userAgent}),s.browser=du(),s.eventsListeners={},s.eventsAnyListeners=[],s.modules=[...s.__modules__],n.modules&&Array.isArray(n.modules)&&s.modules.push(...n.modules);const a={};s.modules.forEach(l=>{l({params:n,swiper:s,extendParams:Dh(n,a),on:s.on.bind(s),once:s.once.bind(s),off:s.off.bind(s),emit:s.emit.bind(s)})});const o=Vt({},Qa,a);return s.params=Vt({},o,da,n),s.originalParams=Vt({},s.params),s.passedParams=Vt({},n),s.params&&s.params.on&&Object.keys(s.params.on).forEach(l=>{s.on(l,s.params.on[l])}),s.params&&s.params.onAny&&s.onAny(s.params.onAny),Object.assign(s,{enabled:s.params.enabled,el:t,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return s.params.direction==="horizontal"},isVertical(){return s.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:s.params.allowSlideNext,allowSlidePrev:s.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:s.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:s.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),s.emit("_swiper"),s.params.init&&s.init(),s}getDirectionLabel(e){return this.isHorizontal()?e:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[e]}getSlideIndex(e){const{slidesEl:t,params:n}=this,r=_n(t,`.${n.slideClass}, swiper-slide`),s=Bs(r[0]);return Bs(e)-s}getSlideIndexByData(e){return this.getSlideIndex(this.slides.find(t=>t.getAttribute("data-swiper-slide-index")*1===e))}getSlideIndexWhenGrid(e){return this.grid&&this.params.grid&&this.params.grid.rows>1&&(this.params.grid.fill==="column"?e=Math.floor(e/this.params.grid.rows):this.params.grid.fill==="row"&&(e=e%Math.ceil(this.slides.length/this.params.grid.rows))),e}recalcSlides(){const e=this,{slidesEl:t,params:n}=e;e.slides=_n(t,`.${n.slideClass}, swiper-slide`)}enable(){const e=this;e.enabled||(e.enabled=!0,e.params.grabCursor&&e.setGrabCursor(),e.emit("enable"))}disable(){const e=this;e.enabled&&(e.enabled=!1,e.params.grabCursor&&e.unsetGrabCursor(),e.emit("disable"))}setProgress(e,t){const n=this;e=Math.min(Math.max(e,0),1);const r=n.minTranslate(),a=(n.maxTranslate()-r)*e+r;n.translateTo(a,typeof t>"u"?0:t),n.updateActiveIndex(),n.updateSlidesClasses()}emitContainerClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=e.el.className.split(" ").filter(n=>n.indexOf("swiper")===0||n.indexOf(e.params.containerModifierClass)===0);e.emit("_containerClasses",t.join(" "))}getSlideClasses(e){const t=this;return t.destroyed?"":e.className.split(" ").filter(n=>n.indexOf("swiper-slide")===0||n.indexOf(t.params.slideClass)===0).join(" ")}emitSlidesClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=[];e.slides.forEach(n=>{const r=e.getSlideClasses(n);t.push({slideEl:n,classNames:r}),e.emit("_slideClass",n,r)}),e.emit("_slideClasses",t)}slidesPerViewDynamic(e="current",t=!1){const n=this,{params:r,slides:s,slidesGrid:a,slidesSizesGrid:o,size:l,activeIndex:c}=n;let u=1;if(typeof r.slidesPerView=="number")return r.slidesPerView;if(r.centeredSlides){let d=s[c]?Math.ceil(s[c].swiperSlideSize):0,p;for(let h=c+1;h<s.length;h+=1)s[h]&&!p&&(d+=Math.ceil(s[h].swiperSlideSize),u+=1,d>l&&(p=!0));for(let h=c-1;h>=0;h-=1)s[h]&&!p&&(d+=s[h].swiperSlideSize,u+=1,d>l&&(p=!0))}else if(e==="current")for(let d=c+1;d<s.length;d+=1)(t?a[d]+o[d]-a[c]<l:a[d]-a[c]<l)&&(u+=1);else for(let d=c-1;d>=0;d-=1)a[c]-a[d]<l&&(u+=1);return u}update(){const e=this;if(!e||e.destroyed)return;const{snapGrid:t,params:n}=e;n.breakpoints&&e.setBreakpoint(),[...e.el.querySelectorAll('[loading="lazy"]')].forEach(a=>{a.complete&&Cs(e,a)}),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses();function r(){const a=e.rtlTranslate?e.translate*-1:e.translate,o=Math.min(Math.max(a,e.maxTranslate()),e.minTranslate());e.setTranslate(o),e.updateActiveIndex(),e.updateSlidesClasses()}let s;if(n.freeMode&&n.freeMode.enabled&&!n.cssMode)r(),n.autoHeight&&e.updateAutoHeight();else{if((n.slidesPerView==="auto"||n.slidesPerView>1)&&e.isEnd&&!n.centeredSlides){const a=e.virtual&&n.virtual.enabled?e.virtual.slides:e.slides;s=e.slideTo(a.length-1,0,!1,!0)}else s=e.slideTo(e.activeIndex,0,!1,!0);s||r()}n.watchOverflow&&t!==e.snapGrid&&e.checkOverflow(),e.emit("update")}changeDirection(e,t=!0){const n=this,r=n.params.direction;return e||(e=r==="horizontal"?"vertical":"horizontal"),e===r||e!=="horizontal"&&e!=="vertical"||(n.el.classList.remove(`${n.params.containerModifierClass}${r}`),n.el.classList.add(`${n.params.containerModifierClass}${e}`),n.emitContainerClasses(),n.params.direction=e,n.slides.forEach(s=>{e==="vertical"?s.style.width="":s.style.height=""}),n.emit("changeDirection"),t&&n.update()),n}changeLanguageDirection(e){const t=this;t.rtl&&e==="rtl"||!t.rtl&&e==="ltr"||(t.rtl=e==="rtl",t.rtlTranslate=t.params.direction==="horizontal"&&t.rtl,t.rtl?(t.el.classList.add(`${t.params.containerModifierClass}rtl`),t.el.dir="rtl"):(t.el.classList.remove(`${t.params.containerModifierClass}rtl`),t.el.dir="ltr"),t.update())}mount(e){const t=this;if(t.mounted)return!0;let n=e||t.params.el;if(typeof n=="string"&&(n=document.querySelector(n)),!n)return!1;n.swiper=t,n.parentNode&&n.parentNode.host&&n.parentNode.host.nodeName===t.params.swiperElementNodeName.toUpperCase()&&(t.isElement=!0);const r=()=>`.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;let a=n&&n.shadowRoot&&n.shadowRoot.querySelector?n.shadowRoot.querySelector(r()):_n(n,r())[0];return!a&&t.params.createElements&&(a=Fs("div",t.params.wrapperClass),n.append(a),_n(n,`.${t.params.slideClass}`).forEach(o=>{a.append(o)})),Object.assign(t,{el:n,wrapperEl:a,slidesEl:t.isElement&&!n.parentNode.host.slideSlots?n.parentNode.host:a,hostEl:t.isElement?n.parentNode.host:n,mounted:!0,rtl:n.dir.toLowerCase()==="rtl"||qn(n,"direction")==="rtl",rtlTranslate:t.params.direction==="horizontal"&&(n.dir.toLowerCase()==="rtl"||qn(n,"direction")==="rtl"),wrongRTL:qn(a,"display")==="-webkit-box"}),!0}init(e){const t=this;if(t.initialized||t.mount(e)===!1)return t;t.emit("beforeInit"),t.params.breakpoints&&t.setBreakpoint(),t.addClasses(),t.updateSize(),t.updateSlides(),t.params.watchOverflow&&t.checkOverflow(),t.params.grabCursor&&t.enabled&&t.setGrabCursor(),t.params.loop&&t.virtual&&t.params.virtual.enabled?t.slideTo(t.params.initialSlide+t.virtual.slidesBefore,0,t.params.runCallbacksOnInit,!1,!0):t.slideTo(t.params.initialSlide,0,t.params.runCallbacksOnInit,!1,!0),t.params.loop&&t.loopCreate(void 0,!0),t.attachEvents();const r=[...t.el.querySelectorAll('[loading="lazy"]')];return t.isElement&&r.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),r.forEach(s=>{s.complete?Cs(t,s):s.addEventListener("load",a=>{Cs(t,a.target)})}),Ja(t),t.initialized=!0,Ja(t),t.emit("init"),t.emit("afterInit"),t}destroy(e=!0,t=!0){const n=this,{params:r,el:s,wrapperEl:a,slides:o}=n;return typeof n.params>"u"||n.destroyed||(n.emit("beforeDestroy"),n.initialized=!1,n.detachEvents(),r.loop&&n.loopDestroy(),t&&(n.removeClasses(),s&&typeof s!="string"&&s.removeAttribute("style"),a&&a.removeAttribute("style"),o&&o.length&&o.forEach(l=>{l.classList.remove(r.slideVisibleClass,r.slideFullyVisibleClass,r.slideActiveClass,r.slideNextClass,r.slidePrevClass),l.removeAttribute("style"),l.removeAttribute("data-swiper-slide-index")})),n.emit("destroy"),Object.keys(n.eventsListeners).forEach(l=>{n.off(l)}),e!==!1&&(n.el&&typeof n.el!="string"&&(n.el.swiper=null),mf(n)),n.destroyed=!0),null}static extendDefaults(e){Vt(da,e)}static get extendedDefaults(){return da}static get defaults(){return Qa}static installModule(e){Pn.prototype.__modules__||(Pn.prototype.__modules__=[]);const t=Pn.prototype.__modules__;typeof e=="function"&&t.indexOf(e)<0&&t.push(e)}static use(e){return Array.isArray(e)?(e.forEach(t=>Pn.installModule(t)),Pn):(Pn.installModule(e),Pn)}};Object.keys(ua).forEach(i=>{Object.keys(ua[i]).forEach(e=>{Ro.prototype[e]=ua[i][e]})});Ro.use([wf,Cf]);const pu=["eventsPrefix","injectStyles","injectStylesUrls","modules","init","_direction","oneWayMovement","swiperElementNodeName","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","breakpointsBase","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_loop","loopAdditionalSlides","loopAddBlankSlides","loopPreventsSliding","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideActiveClass","slideVisibleClass","slideFullyVisibleClass","slideNextClass","slidePrevClass","slideBlankClass","wrapperClass","lazyPreloaderClass","lazyPreloadPrevNext","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom","control"];function Ci(i){return typeof i=="object"&&i!==null&&i.constructor&&Object.prototype.toString.call(i).slice(8,-1)==="Object"&&!i.__swiper__}function ar(i,e){const t=["__proto__","constructor","prototype"];Object.keys(e).filter(n=>t.indexOf(n)<0).forEach(n=>{typeof i[n]>"u"?i[n]=e[n]:Ci(e[n])&&Ci(i[n])&&Object.keys(e[n]).length>0?e[n].__swiper__?i[n]=e[n]:ar(i[n],e[n]):i[n]=e[n]})}function mu(i={}){return i.navigation&&typeof i.navigation.nextEl>"u"&&typeof i.navigation.prevEl>"u"}function gu(i={}){return i.pagination&&typeof i.pagination.el>"u"}function _u(i={}){return i.scrollbar&&typeof i.scrollbar.el>"u"}function vu(i=""){const e=i.split(" ").map(n=>n.trim()).filter(n=>!!n),t=[];return e.forEach(n=>{t.indexOf(n)<0&&t.push(n)}),t.join(" ")}function Ih(i=""){return i?i.includes("swiper-wrapper")?i:`swiper-wrapper ${i}`:"swiper-wrapper"}function Uh({swiper:i,slides:e,passedParams:t,changedParams:n,nextEl:r,prevEl:s,scrollbarEl:a,paginationEl:o}){const l=n.filter(b=>b!=="children"&&b!=="direction"&&b!=="wrapperClass"),{params:c,pagination:u,navigation:d,scrollbar:p,virtual:h,thumbs:_}=i;let g,m,f,x,v,y,M,w;n.includes("thumbs")&&t.thumbs&&t.thumbs.swiper&&!t.thumbs.swiper.destroyed&&c.thumbs&&(!c.thumbs.swiper||c.thumbs.swiper.destroyed)&&(g=!0),n.includes("controller")&&t.controller&&t.controller.control&&c.controller&&!c.controller.control&&(m=!0),n.includes("pagination")&&t.pagination&&(t.pagination.el||o)&&(c.pagination||c.pagination===!1)&&u&&!u.el&&(f=!0),n.includes("scrollbar")&&t.scrollbar&&(t.scrollbar.el||a)&&(c.scrollbar||c.scrollbar===!1)&&p&&!p.el&&(x=!0),n.includes("navigation")&&t.navigation&&(t.navigation.prevEl||s)&&(t.navigation.nextEl||r)&&(c.navigation||c.navigation===!1)&&d&&!d.prevEl&&!d.nextEl&&(v=!0);const E=b=>{i[b]&&(i[b].destroy(),b==="navigation"?(i.isElement&&(i[b].prevEl.remove(),i[b].nextEl.remove()),c[b].prevEl=void 0,c[b].nextEl=void 0,i[b].prevEl=void 0,i[b].nextEl=void 0):(i.isElement&&i[b].el.remove(),c[b].el=void 0,i[b].el=void 0))};n.includes("loop")&&i.isElement&&(c.loop&&!t.loop?y=!0:!c.loop&&t.loop?M=!0:w=!0),l.forEach(b=>{if(Ci(c[b])&&Ci(t[b]))Object.assign(c[b],t[b]),(b==="navigation"||b==="pagination"||b==="scrollbar")&&"enabled"in t[b]&&!t[b].enabled&&E(b);else{const S=t[b];(S===!0||S===!1)&&(b==="navigation"||b==="pagination"||b==="scrollbar")?S===!1&&E(b):c[b]=t[b]}}),l.includes("controller")&&!m&&i.controller&&i.controller.control&&c.controller&&c.controller.control&&(i.controller.control=c.controller.control),n.includes("children")&&e&&h&&c.virtual.enabled?(h.slides=e,h.update(!0)):n.includes("virtual")&&h&&c.virtual.enabled&&(e&&(h.slides=e),h.update(!0)),n.includes("children")&&e&&c.loop&&(w=!0),g&&_.init()&&_.update(!0),m&&(i.controller.control=c.controller.control),f&&(i.isElement&&(!o||typeof o=="string")&&(o=document.createElement("div"),o.classList.add("swiper-pagination"),o.part.add("pagination"),i.el.appendChild(o)),o&&(c.pagination.el=o),u.init(),u.render(),u.update()),x&&(i.isElement&&(!a||typeof a=="string")&&(a=document.createElement("div"),a.classList.add("swiper-scrollbar"),a.part.add("scrollbar"),i.el.appendChild(a)),a&&(c.scrollbar.el=a),p.init(),p.updateSize(),p.setTranslate()),v&&(i.isElement&&((!r||typeof r=="string")&&(r=document.createElement("div"),r.classList.add("swiper-button-next"),kr(r,i.navigation.arrowSvg),r.part.add("button-next"),i.el.appendChild(r)),(!s||typeof s=="string")&&(s=document.createElement("div"),s.classList.add("swiper-button-prev"),kr(s,i.navigation.arrowSvg),s.part.add("button-prev"),i.el.appendChild(s))),r&&(c.navigation.nextEl=r),s&&(c.navigation.prevEl=s),d.init(),d.update()),n.includes("allowSlideNext")&&(i.allowSlideNext=t.allowSlideNext),n.includes("allowSlidePrev")&&(i.allowSlidePrev=t.allowSlidePrev),n.includes("direction")&&i.changeDirection(t.direction,!1),(y||w)&&i.loopDestroy(),(M||w)&&i.loopCreate(),i.update()}function pl(i={},e=!0){const t={on:{}},n={},r={};ar(t,Qa),t._emitClasses=!0,t.init=!1;const s={},a=pu.map(l=>l.replace(/_/,"")),o=Object.assign({},i);return Object.keys(o).forEach(l=>{typeof i[l]>"u"||(a.indexOf(l)>=0?Ci(i[l])?(t[l]={},r[l]={},ar(t[l],i[l]),ar(r[l],i[l])):(t[l]=i[l],r[l]=i[l]):l.search(/on[A-Z]/)===0&&typeof i[l]=="function"?e?n[`${l[2].toLowerCase()}${l.substr(3)}`]=i[l]:t.on[`${l[2].toLowerCase()}${l.substr(3)}`]=i[l]:s[l]=i[l])}),["navigation","pagination","scrollbar"].forEach(l=>{t[l]===!0&&(t[l]={}),t[l]===!1&&delete t[l]}),{params:t,passedParams:r,rest:s,events:n}}function Oh({el:i,nextEl:e,prevEl:t,paginationEl:n,scrollbarEl:r,swiper:s},a){mu(a)&&e&&t&&(s.params.navigation.nextEl=e,s.originalParams.navigation.nextEl=e,s.params.navigation.prevEl=t,s.originalParams.navigation.prevEl=t),gu(a)&&n&&(s.params.pagination.el=n,s.originalParams.pagination.el=n),_u(a)&&r&&(s.params.scrollbar.el=r,s.originalParams.scrollbar.el=r),s.init(i)}function Nh(i,e,t,n,r){const s=[];if(!e)return s;const a=l=>{s.indexOf(l)<0&&s.push(l)};if(t&&n){const l=n.map(r),c=t.map(r);l.join("")!==c.join("")&&a("children"),n.length!==t.length&&a("children")}return pu.filter(l=>l[0]==="_").map(l=>l.replace(/_/,"")).forEach(l=>{if(l in i&&l in e)if(Ci(i[l])&&Ci(e[l])){const c=Object.keys(i[l]),u=Object.keys(e[l]);c.length!==u.length?a(l):(c.forEach(d=>{i[l][d]!==e[l][d]&&a(l)}),u.forEach(d=>{i[l][d]!==e[l][d]&&a(l)}))}else i[l]!==e[l]&&a(l)}),s}const Fh=i=>{!i||i.destroyed||!i.params.virtual||i.params.virtual&&!i.params.virtual.enabled||(i.updateSlides(),i.updateProgress(),i.updateSlidesClasses(),i.emit("_virtualUpdated"),i.parallax&&i.params.parallax&&i.params.parallax.enabled&&i.parallax.setTranslate())};function fa(i={},e,t){const n=[],r={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]},s=(a,o)=>{Array.isArray(a)&&a.forEach(l=>{const c=typeof l.type=="symbol";o==="default"&&(o="container-end"),c&&l.children?s(l.children,o):l.type&&(l.type.name==="SwiperSlide"||l.type.name==="AsyncComponentWrapper")||l.componentOptions&&l.componentOptions.tag==="SwiperSlide"?n.push(l):r[o]&&r[o].push(l)})};return Object.keys(i).forEach(a=>{if(typeof i[a]!="function")return;const o=i[a]();s(o,a)}),t.value=e.value,e.value=n,{slides:n,slots:r}}function Bh(i,e,t){if(!t)return null;const n=u=>{let d=u;return u<0?d=e.length+u:d>=e.length&&(d=d-e.length),d},r=i.value.isHorizontal()?{[i.value.rtlTranslate?"right":"left"]:`${t.offset}px`}:{top:`${t.offset}px`},{from:s,to:a}=t,o=i.value.params.loop?-e.length:0,l=i.value.params.loop?e.length*2:e.length,c=[];for(let u=o;u<l;u+=1)u>=s&&u<=a&&c.length<e.length&&c.push(e[n(u)]);return c.map(u=>{if(u.props||(u.props={}),u.props.style||(u.props.style={}),u.props.swiperRef=i,u.props.style=r,u.type)return Qt(u.type,{...u.props},u.children);if(u.componentOptions)return Qt(u.componentOptions.Ctor,{...u.props},u.componentOptions.children)})}const zh={name:"Swiper",props:{tag:{type:String,default:"div"},wrapperTag:{type:String,default:"div"},modules:{type:Array,default:void 0},init:{type:Boolean,default:void 0},direction:{type:String,default:void 0},oneWayMovement:{type:Boolean,default:void 0},swiperElementNodeName:{type:String,default:"SWIPER-CONTAINER"},touchEventsTarget:{type:String,default:void 0},initialSlide:{type:Number,default:void 0},speed:{type:Number,default:void 0},cssMode:{type:Boolean,default:void 0},updateOnWindowResize:{type:Boolean,default:void 0},resizeObserver:{type:Boolean,default:void 0},nested:{type:Boolean,default:void 0},focusableElements:{type:String,default:void 0},width:{type:Number,default:void 0},height:{type:Number,default:void 0},preventInteractionOnTransition:{type:Boolean,default:void 0},userAgent:{type:String,default:void 0},url:{type:String,default:void 0},edgeSwipeDetection:{type:[Boolean,String],default:void 0},edgeSwipeThreshold:{type:Number,default:void 0},autoHeight:{type:Boolean,default:void 0},setWrapperSize:{type:Boolean,default:void 0},virtualTranslate:{type:Boolean,default:void 0},effect:{type:String,default:void 0},breakpoints:{type:Object,default:void 0},breakpointsBase:{type:String,default:void 0},spaceBetween:{type:[Number,String],default:void 0},slidesPerView:{type:[Number,String],default:void 0},maxBackfaceHiddenSlides:{type:Number,default:void 0},slidesPerGroup:{type:Number,default:void 0},slidesPerGroupSkip:{type:Number,default:void 0},slidesPerGroupAuto:{type:Boolean,default:void 0},centeredSlides:{type:Boolean,default:void 0},centeredSlidesBounds:{type:Boolean,default:void 0},slidesOffsetBefore:{type:Number,default:void 0},slidesOffsetAfter:{type:Number,default:void 0},normalizeSlideIndex:{type:Boolean,default:void 0},centerInsufficientSlides:{type:Boolean,default:void 0},watchOverflow:{type:Boolean,default:void 0},roundLengths:{type:Boolean,default:void 0},touchRatio:{type:Number,default:void 0},touchAngle:{type:Number,default:void 0},simulateTouch:{type:Boolean,default:void 0},shortSwipes:{type:Boolean,default:void 0},longSwipes:{type:Boolean,default:void 0},longSwipesRatio:{type:Number,default:void 0},longSwipesMs:{type:Number,default:void 0},followFinger:{type:Boolean,default:void 0},allowTouchMove:{type:Boolean,default:void 0},threshold:{type:Number,default:void 0},touchMoveStopPropagation:{type:Boolean,default:void 0},touchStartPreventDefault:{type:Boolean,default:void 0},touchStartForcePreventDefault:{type:Boolean,default:void 0},touchReleaseOnEdges:{type:Boolean,default:void 0},uniqueNavElements:{type:Boolean,default:void 0},resistance:{type:Boolean,default:void 0},resistanceRatio:{type:Number,default:void 0},watchSlidesProgress:{type:Boolean,default:void 0},grabCursor:{type:Boolean,default:void 0},preventClicks:{type:Boolean,default:void 0},preventClicksPropagation:{type:Boolean,default:void 0},slideToClickedSlide:{type:Boolean,default:void 0},loop:{type:Boolean,default:void 0},loopedSlides:{type:Number,default:void 0},loopPreventsSliding:{type:Boolean,default:void 0},loopAdditionalSlides:{type:Number,default:void 0},loopAddBlankSlides:{type:Boolean,default:void 0},rewind:{type:Boolean,default:void 0},allowSlidePrev:{type:Boolean,default:void 0},allowSlideNext:{type:Boolean,default:void 0},swipeHandler:{type:Boolean,default:void 0},noSwiping:{type:Boolean,default:void 0},noSwipingClass:{type:String,default:void 0},noSwipingSelector:{type:String,default:void 0},passiveListeners:{type:Boolean,default:void 0},containerModifierClass:{type:String,default:void 0},slideClass:{type:String,default:void 0},slideActiveClass:{type:String,default:void 0},slideVisibleClass:{type:String,default:void 0},slideFullyVisibleClass:{type:String,default:void 0},slideBlankClass:{type:String,default:void 0},slideNextClass:{type:String,default:void 0},slidePrevClass:{type:String,default:void 0},wrapperClass:{type:String,default:void 0},lazyPreloaderClass:{type:String,default:void 0},lazyPreloadPrevNext:{type:Number,default:void 0},runCallbacksOnInit:{type:Boolean,default:void 0},observer:{type:Boolean,default:void 0},observeParents:{type:Boolean,default:void 0},observeSlideChildren:{type:Boolean,default:void 0},a11y:{type:[Boolean,Object],default:void 0},autoplay:{type:[Boolean,Object],default:void 0},controller:{type:Object,default:void 0},coverflowEffect:{type:Object,default:void 0},cubeEffect:{type:Object,default:void 0},fadeEffect:{type:Object,default:void 0},flipEffect:{type:Object,default:void 0},creativeEffect:{type:Object,default:void 0},cardsEffect:{type:Object,default:void 0},hashNavigation:{type:[Boolean,Object],default:void 0},history:{type:[Boolean,Object],default:void 0},keyboard:{type:[Boolean,Object],default:void 0},mousewheel:{type:[Boolean,Object],default:void 0},navigation:{type:[Boolean,Object],default:void 0},pagination:{type:[Boolean,Object],default:void 0},parallax:{type:[Boolean,Object],default:void 0},scrollbar:{type:[Boolean,Object],default:void 0},thumbs:{type:Object,default:void 0},virtual:{type:[Boolean,Object],default:void 0},zoom:{type:[Boolean,Object],default:void 0},grid:{type:[Object],default:void 0},freeMode:{type:[Boolean,Object],default:void 0},enabled:{type:Boolean,default:void 0}},emits:["_beforeBreakpoint","_containerClasses","_slideClass","_slideClasses","_swiper","_freeModeNoMomentumRelease","_virtualUpdated","activeIndexChange","afterInit","autoplay","autoplayStart","autoplayStop","autoplayPause","autoplayResume","autoplayTimeLeft","beforeDestroy","beforeInit","beforeLoopFix","beforeResize","beforeSlideChangeStart","beforeTransitionStart","breakpoint","changeDirection","click","disable","doubleTap","doubleClick","destroy","enable","fromEdge","hashChange","hashSet","init","keyPress","lock","loopFix","momentumBounce","navigationHide","navigationShow","navigationPrev","navigationNext","observerUpdate","orientationchange","paginationHide","paginationRender","paginationShow","paginationUpdate","progress","reachBeginning","reachEnd","realIndexChange","resize","scroll","scrollbarDragEnd","scrollbarDragMove","scrollbarDragStart","setTransition","setTranslate","slidesUpdated","slideChange","slideChangeTransitionEnd","slideChangeTransitionStart","slideNextTransitionEnd","slideNextTransitionStart","slidePrevTransitionEnd","slidePrevTransitionStart","slideResetTransitionStart","slideResetTransitionEnd","sliderMove","sliderFirstMove","slidesLengthChange","slidesGridLengthChange","snapGridLengthChange","snapIndexChange","swiper","tap","toEdge","touchEnd","touchMove","touchMoveOpposite","touchStart","transitionEnd","transitionStart","unlock","update","virtualUpdate","zoomChange"],setup(i,{slots:e,emit:t}){const{tag:n,wrapperTag:r}=i,s=gt("swiper"),a=gt(null),o=gt(!1),l=gt(!1),c=gt(null),u=gt(null),d=gt(null),p={value:[]},h={value:[]},_=gt(null),g=gt(null),m=gt(null),f=gt(null),{params:x,passedParams:v}=pl(i,!1);fa(e,p,h),d.value=v,h.value=p.value;const y=()=>{fa(e,p,h),o.value=!0};x.onAny=(E,...b)=>{t(E,...b)},Object.assign(x.on,{_beforeBreakpoint:y,_containerClasses(E,b){s.value=b}});const M={...x};if(delete M.wrapperClass,u.value=new Ro(M),u.value.virtual&&u.value.params.virtual.enabled){u.value.virtual.slides=p.value;const E={cache:!1,slides:p.value,renderExternal:b=>{a.value=b},renderExternalUpdate:!1};ar(u.value.params.virtual,E),ar(u.value.originalParams.virtual,E)}tu(()=>{!l.value&&u.value&&(u.value.emitSlidesClasses(),l.value=!0);const{passedParams:E}=pl(i,!1),b=Nh(E,d.value,p.value,h.value,S=>S.props&&S.props.key);d.value=E,(b.length||o.value)&&u.value&&!u.value.destroyed&&Uh({swiper:u.value,slides:p.value,passedParams:E,changedParams:b,nextEl:_.value,prevEl:g.value,scrollbarEl:f.value,paginationEl:m.value}),o.value=!1}),iu("swiper",u),tf(a,()=>{sf(()=>{Fh(u.value)})}),Ao(()=>{c.value&&(Oh({el:c.value,nextEl:_.value,prevEl:g.value,paginationEl:m.value,scrollbarEl:f.value,swiper:u.value},x),t("swiper",u.value))}),nu(()=>{u.value&&!u.value.destroyed&&u.value.destroy(!0,!1)});function w(E){return x.virtual?Bh(u,E,a.value):(E.forEach((b,S)=>{b.props||(b.props={}),b.props.swiperRef=u,b.props.swiperSlideIndex=S}),E)}return()=>{const{slides:E,slots:b}=fa(e,p,h);return Qt(n,{ref:c,class:vu(s.value)},[b["container-start"],Qt(r,{class:Ih(x.wrapperClass)},[b["wrapper-start"],w(E),b["wrapper-end"]]),mu(i)&&[Qt("div",{ref:g,class:"swiper-button-prev"}),Qt("div",{ref:_,class:"swiper-button-next"})],_u(i)&&Qt("div",{ref:f,class:"swiper-scrollbar"}),gu(i)&&Qt("div",{ref:m,class:"swiper-pagination"}),b["container-end"]])}}},Gh={name:"SwiperSlide",props:{tag:{type:String,default:"div"},swiperRef:{type:Object,required:!1},swiperSlideIndex:{type:Number,default:void 0,required:!1},zoom:{type:Boolean,default:void 0,required:!1},lazy:{type:Boolean,default:!1,required:!1},virtualIndex:{type:[String,Number],default:void 0}},setup(i,{slots:e}){let t=!1;const{swiperRef:n}=i,r=gt(null),s=gt("swiper-slide"),a=gt(!1);function o(u,d,p){d===r.value&&(s.value=p)}Ao(()=>{!n||!n.value||(n.value.on("_slideClass",o),t=!0)}),nf(()=>{t||!n||!n.value||(n.value.on("_slideClass",o),t=!0)}),tu(()=>{!r.value||!n||!n.value||(typeof i.swiperSlideIndex<"u"&&(r.value.swiperSlideIndex=i.swiperSlideIndex),n.value.destroyed&&s.value!=="swiper-slide"&&(s.value="swiper-slide"))}),nu(()=>{!n||!n.value||n.value.off("_slideClass",o)});const l=rf(()=>({isActive:s.value.indexOf("swiper-slide-active")>=0,isVisible:s.value.indexOf("swiper-slide-visible")>=0,isPrev:s.value.indexOf("swiper-slide-prev")>=0,isNext:s.value.indexOf("swiper-slide-next")>=0}));iu("swiperSlide",l);const c=()=>{a.value=!0};return()=>Qt(i.tag,{class:vu(`${s.value}`),ref:r,"data-swiper-slide-index":typeof i.virtualIndex>"u"&&n&&n.value&&n.value.params.loop?i.swiperSlideIndex:i.virtualIndex,onLoadCapture:c},i.zoom?Qt("div",{class:"swiper-zoom-container","data-swiper-zoom":typeof i.zoom=="number"?i.zoom:void 0},[e.default&&e.default(l.value),i.lazy&&!a.value&&Qt("div",{class:"swiper-lazy-preloader"})]):[e.default&&e.default(l.value),i.lazy&&!a.value&&Qt("div",{class:"swiper-lazy-preloader"})])}};function xu(i,e,t,n){return i.params.createElements&&Object.keys(n).forEach(r=>{if(!t[r]&&t.auto===!0){let s=_n(i.el,`.${n[r]}`)[0];s||(s=Fs("div",n[r]),s.className=n[r],i.el.append(s)),t[r]=s,e[r]=s}}),t}const ml='<svg class="swiper-navigation-icon" width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.38296 20.0762C0.111788 19.805 0.111788 19.3654 0.38296 19.0942L9.19758 10.2796L0.38296 1.46497C0.111788 1.19379 0.111788 0.754138 0.38296 0.482966C0.654131 0.211794 1.09379 0.211794 1.36496 0.482966L10.4341 9.55214C10.8359 9.9539 10.8359 10.6053 10.4341 11.007L1.36496 20.0762C1.09379 20.3474 0.654131 20.3474 0.38296 20.0762Z" fill="currentColor"/></svg>';function kh({swiper:i,extendParams:e,on:t,emit:n}){e({navigation:{nextEl:null,prevEl:null,addIcons:!0,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),i.navigation={nextEl:null,prevEl:null,arrowSvg:ml};function r(h){let _;return h&&typeof h=="string"&&i.isElement&&(_=i.el.querySelector(h)||i.hostEl.querySelector(h),_)?_:(h&&(typeof h=="string"&&(_=[...document.querySelectorAll(h)]),i.params.uniqueNavElements&&typeof h=="string"&&_&&_.length>1&&i.el.querySelectorAll(h).length===1?_=i.el.querySelector(h):_&&_.length===1&&(_=_[0])),h&&!_?h:_)}function s(h,_){const g=i.params.navigation;h=ht(h),h.forEach(m=>{m&&(m.classList[_?"add":"remove"](...g.disabledClass.split(" ")),m.tagName==="BUTTON"&&(m.disabled=_),i.params.watchOverflow&&i.enabled&&m.classList[i.isLocked?"add":"remove"](g.lockClass))})}function a(){const{nextEl:h,prevEl:_}=i.navigation;if(i.params.loop){s(_,!1),s(h,!1);return}s(_,i.isBeginning&&!i.params.rewind),s(h,i.isEnd&&!i.params.rewind)}function o(h){h.preventDefault(),!(i.isBeginning&&!i.params.loop&&!i.params.rewind)&&(i.slidePrev(),n("navigationPrev"))}function l(h){h.preventDefault(),!(i.isEnd&&!i.params.loop&&!i.params.rewind)&&(i.slideNext(),n("navigationNext"))}function c(){const h=i.params.navigation;if(i.params.navigation=xu(i,i.originalParams.navigation,i.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(h.nextEl||h.prevEl))return;let _=r(h.nextEl),g=r(h.prevEl);Object.assign(i.navigation,{nextEl:_,prevEl:g}),_=ht(_),g=ht(g);const m=(f,x)=>{if(f){if(h.addIcons&&f.matches(".swiper-button-next,.swiper-button-prev")&&!f.querySelector("svg")){const v=document.createElement("div");kr(v,ml),f.appendChild(v.querySelector("svg")),v.remove()}f.addEventListener("click",x==="next"?l:o)}!i.enabled&&f&&f.classList.add(...h.lockClass.split(" "))};_.forEach(f=>m(f,"next")),g.forEach(f=>m(f,"prev"))}function u(){let{nextEl:h,prevEl:_}=i.navigation;h=ht(h),_=ht(_);const g=(m,f)=>{m.removeEventListener("click",f==="next"?l:o),m.classList.remove(...i.params.navigation.disabledClass.split(" "))};h.forEach(m=>g(m,"next")),_.forEach(m=>g(m,"prev"))}t("init",()=>{i.params.navigation.enabled===!1?p():(c(),a())}),t("toEdge fromEdge lock unlock",()=>{a()}),t("destroy",()=>{u()}),t("enable disable",()=>{let{nextEl:h,prevEl:_}=i.navigation;if(h=ht(h),_=ht(_),i.enabled){a();return}[...h,..._].filter(g=>!!g).forEach(g=>g.classList.add(i.params.navigation.lockClass))}),t("click",(h,_)=>{let{nextEl:g,prevEl:m}=i.navigation;g=ht(g),m=ht(m);const f=_.target;let x=m.includes(f)||g.includes(f);if(i.isElement&&!x){const v=_.path||_.composedPath&&_.composedPath();v&&(x=v.find(y=>g.includes(y)||m.includes(y)))}if(i.params.navigation.hideOnClick&&!x){if(i.pagination&&i.params.pagination&&i.params.pagination.clickable&&(i.pagination.el===f||i.pagination.el.contains(f)))return;let v;g.length?v=g[0].classList.contains(i.params.navigation.hiddenClass):m.length&&(v=m[0].classList.contains(i.params.navigation.hiddenClass)),n(v===!0?"navigationShow":"navigationHide"),[...g,...m].filter(y=>!!y).forEach(y=>y.classList.toggle(i.params.navigation.hiddenClass))}});const d=()=>{i.el.classList.remove(...i.params.navigation.navigationDisabledClass.split(" ")),c(),a()},p=()=>{i.el.classList.add(...i.params.navigation.navigationDisabledClass.split(" ")),u()};Object.assign(i.navigation,{enable:d,disable:p,update:a,init:c,destroy:u})}function br(i=""){return`.${i.trim().replace(/([\.:!+\/()[\]])/g,"\\$1").replace(/ /g,".")}`}function Hh({swiper:i,extendParams:e,on:t,emit:n}){const r="swiper-pagination";e({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:f=>f,formatFractionTotal:f=>f,bulletClass:`${r}-bullet`,bulletActiveClass:`${r}-bullet-active`,modifierClass:`${r}-`,currentClass:`${r}-current`,totalClass:`${r}-total`,hiddenClass:`${r}-hidden`,progressbarFillClass:`${r}-progressbar-fill`,progressbarOppositeClass:`${r}-progressbar-opposite`,clickableClass:`${r}-clickable`,lockClass:`${r}-lock`,horizontalClass:`${r}-horizontal`,verticalClass:`${r}-vertical`,paginationDisabledClass:`${r}-disabled`}}),i.pagination={el:null,bullets:[]};let s,a=0;function o(){return!i.params.pagination.el||!i.pagination.el||Array.isArray(i.pagination.el)&&i.pagination.el.length===0}function l(f,x){const{bulletActiveClass:v}=i.params.pagination;f&&(f=f[`${x==="prev"?"previous":"next"}ElementSibling`],f&&(f.classList.add(`${v}-${x}`),f=f[`${x==="prev"?"previous":"next"}ElementSibling`],f&&f.classList.add(`${v}-${x}-${x}`)))}function c(f,x,v){if(f=f%v,x=x%v,x===f+1)return"next";if(x===f-1)return"previous"}function u(f){const x=f.target.closest(br(i.params.pagination.bulletClass));if(!x)return;f.preventDefault();const v=Bs(x)*i.params.slidesPerGroup;if(i.params.loop){if(i.realIndex===v)return;const y=c(i.realIndex,v,i.slides.length);y==="next"?i.slideNext():y==="previous"?i.slidePrev():i.slideToLoop(v)}else i.slideTo(v)}function d(){const f=i.rtl,x=i.params.pagination;if(o())return;let v=i.pagination.el;v=ht(v);let y,M;const w=i.virtual&&i.params.virtual.enabled?i.virtual.slides.length:i.slides.length,E=i.params.loop?Math.ceil(w/i.params.slidesPerGroup):i.snapGrid.length;if(i.params.loop?(M=i.previousRealIndex||0,y=i.params.slidesPerGroup>1?Math.floor(i.realIndex/i.params.slidesPerGroup):i.realIndex):typeof i.snapIndex<"u"?(y=i.snapIndex,M=i.previousSnapIndex):(M=i.previousIndex||0,y=i.activeIndex||0),x.type==="bullets"&&i.pagination.bullets&&i.pagination.bullets.length>0){const b=i.pagination.bullets;let S,T,D;if(x.dynamicBullets&&(s=Za(b[0],i.isHorizontal()?"width":"height"),v.forEach(B=>{B.style[i.isHorizontal()?"width":"height"]=`${s*(x.dynamicMainBullets+4)}px`}),x.dynamicMainBullets>1&&M!==void 0&&(a+=y-(M||0),a>x.dynamicMainBullets-1?a=x.dynamicMainBullets-1:a<0&&(a=0)),S=Math.max(y-a,0),T=S+(Math.min(b.length,x.dynamicMainBullets)-1),D=(T+S)/2),b.forEach(B=>{const L=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(U=>`${x.bulletActiveClass}${U}`)].map(U=>typeof U=="string"&&U.includes(" ")?U.split(" "):U).flat();B.classList.remove(...L)}),v.length>1)b.forEach(B=>{const L=Bs(B);L===y?B.classList.add(...x.bulletActiveClass.split(" ")):i.isElement&&B.setAttribute("part","bullet"),x.dynamicBullets&&(L>=S&&L<=T&&B.classList.add(...`${x.bulletActiveClass}-main`.split(" ")),L===S&&l(B,"prev"),L===T&&l(B,"next"))});else{const B=b[y];if(B&&B.classList.add(...x.bulletActiveClass.split(" ")),i.isElement&&b.forEach((L,U)=>{L.setAttribute("part",U===y?"bullet-active":"bullet")}),x.dynamicBullets){const L=b[S],U=b[T];for(let F=S;F<=T;F+=1)b[F]&&b[F].classList.add(...`${x.bulletActiveClass}-main`.split(" "));l(L,"prev"),l(U,"next")}}if(x.dynamicBullets){const B=Math.min(b.length,x.dynamicMainBullets+4),L=(s*B-s)/2-D*s,U=f?"right":"left";b.forEach(F=>{F.style[i.isHorizontal()?U:"top"]=`${L}px`})}}v.forEach((b,S)=>{if(x.type==="fraction"&&(b.querySelectorAll(br(x.currentClass)).forEach(T=>{T.textContent=x.formatFractionCurrent(y+1)}),b.querySelectorAll(br(x.totalClass)).forEach(T=>{T.textContent=x.formatFractionTotal(E)})),x.type==="progressbar"){let T;x.progressbarOpposite?T=i.isHorizontal()?"vertical":"horizontal":T=i.isHorizontal()?"horizontal":"vertical";const D=(y+1)/E;let B=1,L=1;T==="horizontal"?B=D:L=D,b.querySelectorAll(br(x.progressbarFillClass)).forEach(U=>{U.style.transform=`translate3d(0,0,0) scaleX(${B}) scaleY(${L})`,U.style.transitionDuration=`${i.params.speed}ms`})}x.type==="custom"&&x.renderCustom?(kr(b,x.renderCustom(i,y+1,E)),S===0&&n("paginationRender",b)):(S===0&&n("paginationRender",b),n("paginationUpdate",b)),i.params.watchOverflow&&i.enabled&&b.classList[i.isLocked?"add":"remove"](x.lockClass)})}function p(){const f=i.params.pagination;if(o())return;const x=i.virtual&&i.params.virtual.enabled?i.virtual.slides.length:i.grid&&i.params.grid.rows>1?i.slides.length/Math.ceil(i.params.grid.rows):i.slides.length;let v=i.pagination.el;v=ht(v);let y="";if(f.type==="bullets"){let M=i.params.loop?Math.ceil(x/i.params.slidesPerGroup):i.snapGrid.length;i.params.freeMode&&i.params.freeMode.enabled&&M>x&&(M=x);for(let w=0;w<M;w+=1)f.renderBullet?y+=f.renderBullet.call(i,w,f.bulletClass):y+=`<${f.bulletElement} ${i.isElement?'part="bullet"':""} class="${f.bulletClass}"></${f.bulletElement}>`}f.type==="fraction"&&(f.renderFraction?y=f.renderFraction.call(i,f.currentClass,f.totalClass):y=`<span class="${f.currentClass}"></span> / <span class="${f.totalClass}"></span>`),f.type==="progressbar"&&(f.renderProgressbar?y=f.renderProgressbar.call(i,f.progressbarFillClass):y=`<span class="${f.progressbarFillClass}"></span>`),i.pagination.bullets=[],v.forEach(M=>{f.type!=="custom"&&kr(M,y||""),f.type==="bullets"&&i.pagination.bullets.push(...M.querySelectorAll(br(f.bulletClass)))}),f.type!=="custom"&&n("paginationRender",v[0])}function h(){i.params.pagination=xu(i,i.originalParams.pagination,i.params.pagination,{el:"swiper-pagination"});const f=i.params.pagination;if(!f.el)return;let x;typeof f.el=="string"&&i.isElement&&(x=i.el.querySelector(f.el)),!x&&typeof f.el=="string"&&(x=[...document.querySelectorAll(f.el)]),x||(x=f.el),!(!x||x.length===0)&&(i.params.uniqueNavElements&&typeof f.el=="string"&&Array.isArray(x)&&x.length>1&&(x=[...i.el.querySelectorAll(f.el)],x.length>1&&(x=x.find(v=>lu(v,".swiper")[0]===i.el))),Array.isArray(x)&&x.length===1&&(x=x[0]),Object.assign(i.pagination,{el:x}),x=ht(x),x.forEach(v=>{f.type==="bullets"&&f.clickable&&v.classList.add(...(f.clickableClass||"").split(" ")),v.classList.add(f.modifierClass+f.type),v.classList.add(i.isHorizontal()?f.horizontalClass:f.verticalClass),f.type==="bullets"&&f.dynamicBullets&&(v.classList.add(`${f.modifierClass}${f.type}-dynamic`),a=0,f.dynamicMainBullets<1&&(f.dynamicMainBullets=1)),f.type==="progressbar"&&f.progressbarOpposite&&v.classList.add(f.progressbarOppositeClass),f.clickable&&v.addEventListener("click",u),i.enabled||v.classList.add(f.lockClass)}))}function _(){const f=i.params.pagination;if(o())return;let x=i.pagination.el;x&&(x=ht(x),x.forEach(v=>{v.classList.remove(f.hiddenClass),v.classList.remove(f.modifierClass+f.type),v.classList.remove(i.isHorizontal()?f.horizontalClass:f.verticalClass),f.clickable&&(v.classList.remove(...(f.clickableClass||"").split(" ")),v.removeEventListener("click",u))})),i.pagination.bullets&&i.pagination.bullets.forEach(v=>v.classList.remove(...f.bulletActiveClass.split(" ")))}t("changeDirection",()=>{if(!i.pagination||!i.pagination.el)return;const f=i.params.pagination;let{el:x}=i.pagination;x=ht(x),x.forEach(v=>{v.classList.remove(f.horizontalClass,f.verticalClass),v.classList.add(i.isHorizontal()?f.horizontalClass:f.verticalClass)})}),t("init",()=>{i.params.pagination.enabled===!1?m():(h(),p(),d())}),t("activeIndexChange",()=>{typeof i.snapIndex>"u"&&d()}),t("snapIndexChange",()=>{d()}),t("snapGridLengthChange",()=>{p(),d()}),t("destroy",()=>{_()}),t("enable disable",()=>{let{el:f}=i.pagination;f&&(f=ht(f),f.forEach(x=>x.classList[i.enabled?"remove":"add"](i.params.pagination.lockClass)))}),t("lock unlock",()=>{d()}),t("click",(f,x)=>{const v=x.target,y=ht(i.pagination.el);if(i.params.pagination.el&&i.params.pagination.hideOnClick&&y&&y.length>0&&!v.classList.contains(i.params.pagination.bulletClass)){if(i.navigation&&(i.navigation.nextEl&&v===i.navigation.nextEl||i.navigation.prevEl&&v===i.navigation.prevEl))return;const M=y[0].classList.contains(i.params.pagination.hiddenClass);n(M===!0?"paginationShow":"paginationHide"),y.forEach(w=>w.classList.toggle(i.params.pagination.hiddenClass))}});const g=()=>{i.el.classList.remove(i.params.pagination.paginationDisabledClass);let{el:f}=i.pagination;f&&(f=ht(f),f.forEach(x=>x.classList.remove(i.params.pagination.paginationDisabledClass))),h(),p(),d()},m=()=>{i.el.classList.add(i.params.pagination.paginationDisabledClass);let{el:f}=i.pagination;f&&(f=ht(f),f.forEach(x=>x.classList.add(i.params.pagination.paginationDisabledClass))),_()};Object.assign(i.pagination,{enable:g,disable:m,render:p,update:d,init:h,destroy:_})}function Vh({swiper:i,extendParams:e,on:t,emit:n,params:r}){i.autoplay={running:!1,paused:!1,timeLeft:0},e({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let s,a,o=r&&r.autoplay?r.autoplay.delay:3e3,l=r&&r.autoplay?r.autoplay.delay:3e3,c,u=new Date().getTime(),d,p,h,_,g,m,f;function x(O){!i||i.destroyed||!i.wrapperEl||O.target===i.wrapperEl&&(i.wrapperEl.removeEventListener("transitionend",x),!(f||O.detail&&O.detail.bySwiperTouchMove)&&S())}const v=()=>{if(i.destroyed||!i.autoplay.running)return;i.autoplay.paused?d=!0:d&&(l=c,d=!1);const O=i.autoplay.paused?c:u+l-new Date().getTime();i.autoplay.timeLeft=O,n("autoplayTimeLeft",O,O/o),a=requestAnimationFrame(()=>{v()})},y=()=>{let O;return i.virtual&&i.params.virtual.enabled?O=i.slides.find(Y=>Y.classList.contains("swiper-slide-active")):O=i.slides[i.activeIndex],O?parseInt(O.getAttribute("data-swiper-autoplay"),10):void 0},M=O=>{if(i.destroyed||!i.autoplay.running)return;cancelAnimationFrame(a),v();let N=typeof O>"u"?i.params.autoplay.delay:O;o=i.params.autoplay.delay,l=i.params.autoplay.delay;const Y=y();!Number.isNaN(Y)&&Y>0&&typeof O>"u"&&(N=Y,o=Y,l=Y),c=N;const K=i.params.speed,z=()=>{!i||i.destroyed||(i.params.autoplay.reverseDirection?!i.isBeginning||i.params.loop||i.params.rewind?(i.slidePrev(K,!0,!0),n("autoplay")):i.params.autoplay.stopOnLastSlide||(i.slideTo(i.slides.length-1,K,!0,!0),n("autoplay")):!i.isEnd||i.params.loop||i.params.rewind?(i.slideNext(K,!0,!0),n("autoplay")):i.params.autoplay.stopOnLastSlide||(i.slideTo(0,K,!0,!0),n("autoplay")),i.params.cssMode&&(u=new Date().getTime(),requestAnimationFrame(()=>{M()})))};return N>0?(clearTimeout(s),s=setTimeout(()=>{z()},N)):requestAnimationFrame(()=>{z()}),N},w=()=>{u=new Date().getTime(),i.autoplay.running=!0,M(),n("autoplayStart")},E=()=>{i.autoplay.running=!1,clearTimeout(s),cancelAnimationFrame(a),n("autoplayStop")},b=(O,N)=>{if(i.destroyed||!i.autoplay.running)return;clearTimeout(s),O||(m=!0);const Y=()=>{n("autoplayPause"),i.params.autoplay.waitForTransition?i.wrapperEl.addEventListener("transitionend",x):S()};if(i.autoplay.paused=!0,N){g&&(c=i.params.autoplay.delay),g=!1,Y();return}c=(c||i.params.autoplay.delay)-(new Date().getTime()-u),!(i.isEnd&&c<0&&!i.params.loop)&&(c<0&&(c=0),Y())},S=()=>{i.isEnd&&c<0&&!i.params.loop||i.destroyed||!i.autoplay.running||(u=new Date().getTime(),m?(m=!1,M(c)):M(),i.autoplay.paused=!1,n("autoplayResume"))},T=()=>{if(i.destroyed||!i.autoplay.running)return;const O=xn();O.visibilityState==="hidden"&&(m=!0,b(!0)),O.visibilityState==="visible"&&S()},D=O=>{O.pointerType==="mouse"&&(m=!0,f=!0,!(i.animating||i.autoplay.paused)&&b(!0))},B=O=>{O.pointerType==="mouse"&&(f=!1,i.autoplay.paused&&S())},L=()=>{i.params.autoplay.pauseOnMouseEnter&&(i.el.addEventListener("pointerenter",D),i.el.addEventListener("pointerleave",B))},U=()=>{i.el&&typeof i.el!="string"&&(i.el.removeEventListener("pointerenter",D),i.el.removeEventListener("pointerleave",B))},F=()=>{xn().addEventListener("visibilitychange",T)},J=()=>{xn().removeEventListener("visibilitychange",T)};t("init",()=>{i.params.autoplay.enabled&&(L(),F(),w())}),t("destroy",()=>{U(),J(),i.autoplay.running&&E()}),t("_freeModeStaticRelease",()=>{(h||m)&&S()}),t("_freeModeNoMomentumRelease",()=>{i.params.autoplay.disableOnInteraction?E():b(!0,!0)}),t("beforeTransitionStart",(O,N,Y)=>{i.destroyed||!i.autoplay.running||(Y||!i.params.autoplay.disableOnInteraction?b(!0,!0):E())}),t("sliderFirstMove",()=>{if(!(i.destroyed||!i.autoplay.running)){if(i.params.autoplay.disableOnInteraction){E();return}p=!0,h=!1,m=!1,_=setTimeout(()=>{m=!0,h=!0,b(!0)},200)}}),t("touchEnd",()=>{if(!(i.destroyed||!i.autoplay.running||!p)){if(clearTimeout(_),clearTimeout(s),i.params.autoplay.disableOnInteraction){h=!1,p=!1;return}h&&i.params.cssMode&&S(),h=!1,p=!1}}),t("slideChange",()=>{i.destroyed||!i.autoplay.running||(g=!0)}),Object.assign(i.autoplay,{start:w,stop:E,pause:b,resume:S})}function Wh(i){const{effect:e,swiper:t,on:n,setTranslate:r,setTransition:s,overwriteParams:a,perspective:o,recreateShadows:l,getEffectParams:c}=i;n("beforeInit",()=>{if(t.params.effect!==e)return;t.classNames.push(`${t.params.containerModifierClass}${e}`),o&&o()&&t.classNames.push(`${t.params.containerModifierClass}3d`);const d=a?a():{};Object.assign(t.params,d),Object.assign(t.originalParams,d)}),n("setTranslate _virtualUpdated",()=>{t.params.effect===e&&r()}),n("setTransition",(d,p)=>{t.params.effect===e&&s(p)}),n("transitionEnd",()=>{if(t.params.effect===e&&l){if(!c||!c().slideShadows)return;t.slides.forEach(d=>{d.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(p=>p.remove())}),l()}});let u;n("virtualUpdate",()=>{t.params.effect===e&&(t.slides.length||(u=!0),requestAnimationFrame(()=>{u&&t.slides&&t.slides.length&&(r(),u=!1)}))})}function Xh(i,e){const t=ou(e);return t!==e&&(t.style.backfaceVisibility="hidden",t.style["-webkit-backface-visibility"]="hidden"),t}function qh({swiper:i,duration:e,transformElements:t,allSlides:n}){const{activeIndex:r}=i;if(i.params.virtualTranslate&&e!==0){let s=!1,a;a=t,a.forEach(o=>{Ef(o,()=>{if(s||!i||i.destroyed)return;s=!0,i.animating=!1;const l=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0});i.wrapperEl.dispatchEvent(l)})})}}function Yh({swiper:i,extendParams:e,on:t}){e({fadeEffect:{crossFade:!1}}),Wh({effect:"fade",swiper:i,on:t,setTranslate:()=>{const{slides:s}=i,a=i.params.fadeEffect;for(let o=0;o<s.length;o+=1){const l=i.slides[o];let u=-l.swiperSlideOffset;i.params.virtualTranslate||(u-=i.translate);let d=0;i.isHorizontal()||(d=u,u=0);const p=i.params.fadeEffect.crossFade?Math.max(1-Math.abs(l.progress),0):1+Math.min(Math.max(l.progress,-1),0),h=Xh(a,l);h.style.opacity=p,h.style.transform=`translate3d(${u}px, ${d}px, 0px)`}},setTransition:s=>{const a=i.slides.map(o=>ou(o));a.forEach(o=>{o.style.transitionDuration=`${s}ms`}),qh({swiper:i,duration:s,transformElements:a,allSlides:!0})},overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!i.params.cssMode})})}const jh={class:"video-carousel",style:{"--swiper-pagination-bullet-width":"4.4rem","--swiper-pagination-bullet-height":"0.2rem","--swiper-pagination-bullet-border-radius":"0","--swiper-pagination-bullet-inactive-color":"hsla(0, 0%, 100%, 0.3)"}},$h=["src"],Kh={class:"video-overlay"},Zh={class:"video-title"},Jh={__name:"VideoSection",setup(i){const e=[{src:"https://s.xiaopeng.com/xp-fe/mainsite/2023/home/explore-v2.mp4",title:"科技创新，启航未来"},{src:"https://www.tesla.com/sites/default/files/videos/Plaid-Range-Web-Desktop-8mb.mp4",title:"探索智能，连接世界"},{src:"https://xps02.xiaopeng.com/cms/material/video/2023/04-07/video_20230407174751_66984.mp4",title:"创意视觉，展现无限"}];return(t,n)=>(fr(),Gr("div",jh,[Us(Ni(zh),{modules:[Ni(Vh),Ni(Yh),Ni(kh),Ni(Hh)],autoplay:{delay:8e3,disableOnInteraction:!1},loop:!0,"slides-per-view":1,"space-between":50,pagination:{clickable:!0},effect:"fade",class:"video-swiper"},{default:ll(()=>[(fr(),Gr(af,null,of(e,(r,s)=>Us(Ni(Gh),{key:s},{default:ll(()=>[Xn("video",{class:"video-player",src:r.src,autoplay:"",muted:"",loop:"",playsinline:""},null,8,$h),Xn("div",Kh,[Xn("h1",Zh,lf(r.title),1)])]),_:2},1024)),64)),n[0]||(n[0]=Xn("div",{class:"swiper-pagination"},null,-1))]),_:1},8,["modules"])]))}},Qh=wo(Jh,[["__scopeId","data-v-a54c92a6"]]);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Po="155",Fi={ROTATE:0,DOLLY:1,PAN:2},Bi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ep=0,gl=1,tp=2,Su=1,np=2,Ln=3,ii=0,Dt=1,Un=2,Jn=0,or=1,_l=2,vl=3,xl=4,ip=5,nr=100,rp=101,sp=102,Sl=103,Ml=104,ap=200,op=201,lp=202,cp=203,Mu=204,yu=205,up=206,dp=207,fp=208,hp=209,pp=210,mp=0,gp=1,_p=2,eo=3,vp=4,xp=5,Sp=6,Mp=7,Eu=0,yp=1,Ep=2,Qn=0,Tp=1,bp=2,Ap=3,wp=4,Cp=5,Tu=300,hr=301,pr=302,to=303,no=304,Ys=306,io=1e3,dn=1001,ro=1002,wt=1003,yl=1004,ha=1005,en=1006,Rp=1007,Hr=1008,ei=1009,Pp=1010,Lp=1011,Lo=1012,bu=1013,Yn=1014,jn=1015,Vr=1016,Au=1017,wu=1018,xi=1020,Dp=1021,fn=1023,Ip=1024,Up=1025,Si=1026,mr=1027,Op=1028,Cu=1029,Np=1030,Ru=1031,Pu=1033,pa=33776,ma=33777,ga=33778,_a=33779,El=35840,Tl=35841,bl=35842,Al=35843,Fp=36196,wl=37492,Cl=37496,Rl=37808,Pl=37809,Ll=37810,Dl=37811,Il=37812,Ul=37813,Ol=37814,Nl=37815,Fl=37816,Bl=37817,zl=37818,Gl=37819,kl=37820,Hl=37821,va=36492,Bp=36283,Vl=36284,Wl=36285,Xl=36286,Lu=3e3,Mi=3001,zp=3200,Gp=3201,kp=0,Hp=1,yi="",Le="srgb",Mn="srgb-linear",Du="display-p3",xa=7680,Vp=519,Wp=512,Xp=513,qp=514,Yp=515,jp=516,$p=517,Kp=518,Zp=519,ql=35044,Yl="300 es",so=1035,On=2e3,zs=2001;class Ii{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const St=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Rs=Math.PI/180,ao=180/Math.PI;function Jr(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(St[i&255]+St[i>>8&255]+St[i>>16&255]+St[i>>24&255]+"-"+St[e&255]+St[e>>8&255]+"-"+St[e>>16&15|64]+St[e>>24&255]+"-"+St[t&63|128]+St[t>>8&255]+"-"+St[t>>16&255]+St[t>>24&255]+St[n&255]+St[n>>8&255]+St[n>>16&255]+St[n>>24&255]).toLowerCase()}function Ct(i,e,t){return Math.max(e,Math.min(t,i))}function Jp(i,e){return(i%e+e)%e}function Sa(i,e,t){return(1-t)*i+t*e}function jl(i){return(i&i-1)===0&&i!==0}function oo(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ar(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Lt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Qp={DEG2RAD:Rs};class De{constructor(e=0,t=0){De.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Oe{constructor(e,t,n,r,s,a,o,l,c){Oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c)}set(e,t,n,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],d=n[7],p=n[2],h=n[5],_=n[8],g=r[0],m=r[3],f=r[6],x=r[1],v=r[4],y=r[7],M=r[2],w=r[5],E=r[8];return s[0]=a*g+o*x+l*M,s[3]=a*m+o*v+l*w,s[6]=a*f+o*y+l*E,s[1]=c*g+u*x+d*M,s[4]=c*m+u*v+d*w,s[7]=c*f+u*y+d*E,s[2]=p*g+h*x+_*M,s[5]=p*m+h*v+_*w,s[8]=p*f+h*y+_*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,p=o*l-u*s,h=c*s-a*l,_=t*d+n*p+r*h;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=d*g,e[1]=(r*c-u*n)*g,e[2]=(o*n-r*a)*g,e[3]=p*g,e[4]=(u*t-r*l)*g,e[5]=(r*s-o*t)*g,e[6]=h*g,e[7]=(n*l-c*t)*g,e[8]=(a*t-n*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ma.makeScale(e,t)),this}rotate(e){return this.premultiply(Ma.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ma.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ma=new Oe;function Iu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Wr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}const $l={};function Nr(i){i in $l||($l[i]=!0,console.warn(i))}function lr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ya(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const em=new Oe().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),tm=new Oe().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function nm(i){return i.convertSRGBToLinear().applyMatrix3(tm)}function im(i){return i.applyMatrix3(em).convertLinearToSRGB()}const rm={[Mn]:i=>i,[Le]:i=>i.convertSRGBToLinear(),[Du]:nm},sm={[Mn]:i=>i,[Le]:i=>i.convertLinearToSRGB(),[Du]:im},an={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(i){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!i},get workingColorSpace(){return Mn},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=rm[e],r=sm[t];if(n===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)}};let zi;class Uu{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{zi===void 0&&(zi=Wr("canvas")),zi.width=e.width,zi.height=e.height;const n=zi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=zi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Wr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=lr(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(lr(t[n]/255)*255):t[n]=lr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let am=0;class Ou{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:am++}),this.uuid=Jr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Ea(r[a].image)):s.push(Ea(r[a]))}else s=Ea(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Ea(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Uu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let om=0;class It extends Ii{constructor(e=It.DEFAULT_IMAGE,t=It.DEFAULT_MAPPING,n=dn,r=dn,s=en,a=Hr,o=fn,l=ei,c=It.DEFAULT_ANISOTROPY,u=yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:om++}),this.uuid=Jr(),this.name="",this.source=new Ou(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new De(0,0),this.repeat=new De(1,1),this.center=new De(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Nr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Mi?Le:yi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Tu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case io:e.x=e.x-Math.floor(e.x);break;case dn:e.x=e.x<0?0:1;break;case ro:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case io:e.y=e.y-Math.floor(e.y);break;case dn:e.y=e.y<0?0:1;break;case ro:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Nr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Le?Mi:Lu}set encoding(e){Nr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Mi?Le:yi}}It.DEFAULT_IMAGE=null;It.DEFAULT_MAPPING=Tu;It.DEFAULT_ANISOTROPY=1;class _t{constructor(e=0,t=0,n=0,r=1){_t.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],p=l[1],h=l[5],_=l[9],g=l[2],m=l[6],f=l[10];if(Math.abs(u-p)<.01&&Math.abs(d-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+p)<.1&&Math.abs(d+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+h+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,y=(h+1)/2,M=(f+1)/2,w=(u+p)/4,E=(d+g)/4,b=(_+m)/4;return v>y&&v>M?v<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(v),r=w/n,s=E/n):y>M?y<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),n=w/r,s=b/r):M<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(M),n=E/s,r=b/s),this.set(n,r,s,t),this}let x=Math.sqrt((m-_)*(m-_)+(d-g)*(d-g)+(p-u)*(p-u));return Math.abs(x)<.001&&(x=1),this.x=(m-_)/x,this.y=(d-g)/x,this.z=(p-u)/x,this.w=Math.acos((c+h+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class lm extends Ii{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t);const r={width:e,height:t,depth:1};n.encoding!==void 0&&(Nr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Mi?Le:yi),this.texture=new It(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:en,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Ou(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ri extends lm{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Nu extends It{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=wt,this.minFilter=wt,this.wrapR=dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class cm extends It{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=wt,this.minFilter=wt,this.wrapR=dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Pi{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let l=n[r+0],c=n[r+1],u=n[r+2],d=n[r+3];const p=s[a+0],h=s[a+1],_=s[a+2],g=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(o===1){e[t+0]=p,e[t+1]=h,e[t+2]=_,e[t+3]=g;return}if(d!==g||l!==p||c!==h||u!==_){let m=1-o;const f=l*p+c*h+u*_+d*g,x=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){const M=Math.sqrt(v),w=Math.atan2(M,f*x);m=Math.sin(m*w)/M,o=Math.sin(o*w)/M}const y=o*x;if(l=l*m+p*y,c=c*m+h*y,u=u*m+_*y,d=d*m+g*y,m===1-o){const M=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=M,c*=M,u*=M,d*=M}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],l=n[r+1],c=n[r+2],u=n[r+3],d=s[a],p=s[a+1],h=s[a+2],_=s[a+3];return e[t]=o*_+u*d+l*h-c*p,e[t+1]=l*_+u*p+c*d-o*h,e[t+2]=c*_+u*h+o*p-l*d,e[t+3]=u*_-o*d-l*p-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(r/2),d=o(s/2),p=l(n/2),h=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=p*u*d+c*h*_,this._y=c*h*d-p*u*_,this._z=c*u*_+p*h*d,this._w=c*u*d-p*h*_;break;case"YXZ":this._x=p*u*d+c*h*_,this._y=c*h*d-p*u*_,this._z=c*u*_-p*h*d,this._w=c*u*d+p*h*_;break;case"ZXY":this._x=p*u*d-c*h*_,this._y=c*h*d+p*u*_,this._z=c*u*_+p*h*d,this._w=c*u*d-p*h*_;break;case"ZYX":this._x=p*u*d-c*h*_,this._y=c*h*d+p*u*_,this._z=c*u*_-p*h*d,this._w=c*u*d+p*h*_;break;case"YZX":this._x=p*u*d+c*h*_,this._y=c*h*d+p*u*_,this._z=c*u*_-p*h*d,this._w=c*u*d-p*h*_;break;case"XZY":this._x=p*u*d-c*h*_,this._y=c*h*d-p*u*_,this._z=c*u*_+p*h*d,this._w=c*u*d+p*h*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],p=n+o+d;if(p>0){const h=.5/Math.sqrt(p+1);this._w=.25/h,this._x=(u-l)*h,this._y=(s-c)*h,this._z=(a-r)*h}else if(n>o&&n>d){const h=2*Math.sqrt(1+n-o-d);this._w=(u-l)/h,this._x=.25*h,this._y=(r+a)/h,this._z=(s+c)/h}else if(o>d){const h=2*Math.sqrt(1+o-n-d);this._w=(s-c)/h,this._x=(r+a)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+d-n-o);this._w=(a-r)/h,this._x=(s+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ct(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-r*o,this._w=a*u-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const h=1-t;return this._w=h*a+t*this._w,this._x=h*n+t*this._x,this._y=h*r+t*this._y,this._z=h*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),d=Math.sin((1-t)*u)/c,p=Math.sin(t*u)/c;return this._w=a*d+this._w*p,this._x=n*d+this._x*p,this._y=r*d+this._y*p,this._z=s*d+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(e=0,t=0,n=0){V.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Kl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Kl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=l*t+a*r-o*n,u=l*n+o*t-s*r,d=l*r+s*n-a*t,p=-s*t-a*n-o*r;return this.x=c*l+p*-s+u*-o-d*-a,this.y=u*l+p*-a+d*-s-c*-o,this.z=d*l+p*-o+c*-a-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ta.copy(this).projectOnVector(e),this.sub(Ta)}reflect(e){return this.sub(Ta.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ta=new V,Kl=new Pi;class Qr{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(bn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(bn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=bn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Gi.copy(e.boundingBox),Gi.applyMatrix4(e.matrixWorld),this.union(Gi);else{const r=e.geometry;if(r!==void 0)if(t&&r.attributes!==void 0&&r.attributes.position!==void 0){const s=r.attributes.position;for(let a=0,o=s.count;a<o;a++)bn.fromBufferAttribute(s,a).applyMatrix4(e.matrixWorld),this.expandByPoint(bn)}else r.boundingBox===null&&r.computeBoundingBox(),Gi.copy(r.boundingBox),Gi.applyMatrix4(e.matrixWorld),this.union(Gi)}const n=e.children;for(let r=0,s=n.length;r<s;r++)this.expandByObject(n[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,bn),bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(wr),as.subVectors(this.max,wr),ki.subVectors(e.a,wr),Hi.subVectors(e.b,wr),Vi.subVectors(e.c,wr),Gn.subVectors(Hi,ki),kn.subVectors(Vi,Hi),ci.subVectors(ki,Vi);let t=[0,-Gn.z,Gn.y,0,-kn.z,kn.y,0,-ci.z,ci.y,Gn.z,0,-Gn.x,kn.z,0,-kn.x,ci.z,0,-ci.x,-Gn.y,Gn.x,0,-kn.y,kn.x,0,-ci.y,ci.x,0];return!ba(t,ki,Hi,Vi,as)||(t=[1,0,0,0,1,0,0,0,1],!ba(t,ki,Hi,Vi,as))?!1:(os.crossVectors(Gn,kn),t=[os.x,os.y,os.z],ba(t,ki,Hi,Vi,as))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,bn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(bn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Tn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Tn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Tn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Tn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Tn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Tn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Tn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Tn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Tn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Tn=[new V,new V,new V,new V,new V,new V,new V,new V],bn=new V,Gi=new Qr,ki=new V,Hi=new V,Vi=new V,Gn=new V,kn=new V,ci=new V,wr=new V,as=new V,os=new V,ui=new V;function ba(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){ui.fromArray(i,s);const o=r.x*Math.abs(ui.x)+r.y*Math.abs(ui.y)+r.z*Math.abs(ui.z),l=e.dot(ui),c=t.dot(ui),u=n.dot(ui);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const um=new Qr,Cr=new V,Aa=new V;class Do{constructor(e=new V,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):um.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Cr.subVectors(e,this.center);const t=Cr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Cr,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Aa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Cr.copy(e.center).add(Aa)),this.expandByPoint(Cr.copy(e.center).sub(Aa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const An=new V,wa=new V,ls=new V,Hn=new V,Ca=new V,cs=new V,Ra=new V;class Io{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,An)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=An.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(An.copy(this.origin).addScaledVector(this.direction,t),An.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){wa.copy(e).add(t).multiplyScalar(.5),ls.copy(t).sub(e).normalize(),Hn.copy(this.origin).sub(wa);const s=e.distanceTo(t)*.5,a=-this.direction.dot(ls),o=Hn.dot(this.direction),l=-Hn.dot(ls),c=Hn.lengthSq(),u=Math.abs(1-a*a);let d,p,h,_;if(u>0)if(d=a*l-o,p=a*o-l,_=s*u,d>=0)if(p>=-_)if(p<=_){const g=1/u;d*=g,p*=g,h=d*(d+a*p+2*o)+p*(a*d+p+2*l)+c}else p=s,d=Math.max(0,-(a*p+o)),h=-d*d+p*(p+2*l)+c;else p=-s,d=Math.max(0,-(a*p+o)),h=-d*d+p*(p+2*l)+c;else p<=-_?(d=Math.max(0,-(-a*s+o)),p=d>0?-s:Math.min(Math.max(-s,-l),s),h=-d*d+p*(p+2*l)+c):p<=_?(d=0,p=Math.min(Math.max(-s,-l),s),h=p*(p+2*l)+c):(d=Math.max(0,-(a*s+o)),p=d>0?s:Math.min(Math.max(-s,-l),s),h=-d*d+p*(p+2*l)+c);else p=a>0?-s:s,d=Math.max(0,-(a*p+o)),h=-d*d+p*(p+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(wa).addScaledVector(ls,p),h}intersectSphere(e,t){An.subVectors(e.center,this.origin);const n=An.dot(this.direction),r=An.dot(An)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,p=this.origin;return c>=0?(n=(e.min.x-p.x)*c,r=(e.max.x-p.x)*c):(n=(e.max.x-p.x)*c,r=(e.min.x-p.x)*c),u>=0?(s=(e.min.y-p.y)*u,a=(e.max.y-p.y)*u):(s=(e.max.y-p.y)*u,a=(e.min.y-p.y)*u),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-p.z)*d,l=(e.max.z-p.z)*d):(o=(e.max.z-p.z)*d,l=(e.min.z-p.z)*d),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,An)!==null}intersectTriangle(e,t,n,r,s){Ca.subVectors(t,e),cs.subVectors(n,e),Ra.crossVectors(Ca,cs);let a=this.direction.dot(Ra),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Hn.subVectors(this.origin,e);const l=o*this.direction.dot(cs.crossVectors(Hn,cs));if(l<0)return null;const c=o*this.direction.dot(Ca.cross(Hn));if(c<0||l+c>a)return null;const u=-o*Hn.dot(Ra);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class vt{constructor(e,t,n,r,s,a,o,l,c,u,d,p,h,_,g,m){vt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c,u,d,p,h,_,g,m)}set(e,t,n,r,s,a,o,l,c,u,d,p,h,_,g,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=r,f[1]=s,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=u,f[10]=d,f[14]=p,f[3]=h,f[7]=_,f[11]=g,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new vt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Wi.setFromMatrixColumn(e,0).length(),s=1/Wi.setFromMatrixColumn(e,1).length(),a=1/Wi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const p=a*u,h=a*d,_=o*u,g=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=h+_*c,t[5]=p-g*c,t[9]=-o*l,t[2]=g-p*c,t[6]=_+h*c,t[10]=a*l}else if(e.order==="YXZ"){const p=l*u,h=l*d,_=c*u,g=c*d;t[0]=p+g*o,t[4]=_*o-h,t[8]=a*c,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=h*o-_,t[6]=g+p*o,t[10]=a*l}else if(e.order==="ZXY"){const p=l*u,h=l*d,_=c*u,g=c*d;t[0]=p-g*o,t[4]=-a*d,t[8]=_+h*o,t[1]=h+_*o,t[5]=a*u,t[9]=g-p*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const p=a*u,h=a*d,_=o*u,g=o*d;t[0]=l*u,t[4]=_*c-h,t[8]=p*c+g,t[1]=l*d,t[5]=g*c+p,t[9]=h*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const p=a*l,h=a*c,_=o*l,g=o*c;t[0]=l*u,t[4]=g-p*d,t[8]=_*d+h,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=h*d+_,t[10]=p-g*d}else if(e.order==="XZY"){const p=a*l,h=a*c,_=o*l,g=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=p*d+g,t[5]=a*u,t[9]=h*d-_,t[2]=_*d-h,t[6]=o*u,t[10]=g*d+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(dm,e,fm)}lookAt(e,t,n){const r=this.elements;return kt.subVectors(e,t),kt.lengthSq()===0&&(kt.z=1),kt.normalize(),Vn.crossVectors(n,kt),Vn.lengthSq()===0&&(Math.abs(n.z)===1?kt.x+=1e-4:kt.z+=1e-4,kt.normalize(),Vn.crossVectors(n,kt)),Vn.normalize(),us.crossVectors(kt,Vn),r[0]=Vn.x,r[4]=us.x,r[8]=kt.x,r[1]=Vn.y,r[5]=us.y,r[9]=kt.y,r[2]=Vn.z,r[6]=us.z,r[10]=kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],d=n[5],p=n[9],h=n[13],_=n[2],g=n[6],m=n[10],f=n[14],x=n[3],v=n[7],y=n[11],M=n[15],w=r[0],E=r[4],b=r[8],S=r[12],T=r[1],D=r[5],B=r[9],L=r[13],U=r[2],F=r[6],J=r[10],O=r[14],N=r[3],Y=r[7],K=r[11],z=r[15];return s[0]=a*w+o*T+l*U+c*N,s[4]=a*E+o*D+l*F+c*Y,s[8]=a*b+o*B+l*J+c*K,s[12]=a*S+o*L+l*O+c*z,s[1]=u*w+d*T+p*U+h*N,s[5]=u*E+d*D+p*F+h*Y,s[9]=u*b+d*B+p*J+h*K,s[13]=u*S+d*L+p*O+h*z,s[2]=_*w+g*T+m*U+f*N,s[6]=_*E+g*D+m*F+f*Y,s[10]=_*b+g*B+m*J+f*K,s[14]=_*S+g*L+m*O+f*z,s[3]=x*w+v*T+y*U+M*N,s[7]=x*E+v*D+y*F+M*Y,s[11]=x*b+v*B+y*J+M*K,s[15]=x*S+v*L+y*O+M*z,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],p=e[10],h=e[14],_=e[3],g=e[7],m=e[11],f=e[15];return _*(+s*l*d-r*c*d-s*o*p+n*c*p+r*o*h-n*l*h)+g*(+t*l*h-t*c*p+s*a*p-r*a*h+r*c*u-s*l*u)+m*(+t*c*d-t*o*h-s*a*d+n*a*h+s*o*u-n*c*u)+f*(-r*o*u-t*l*d+t*o*p+r*a*d-n*a*p+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],p=e[10],h=e[11],_=e[12],g=e[13],m=e[14],f=e[15],x=d*m*c-g*p*c+g*l*h-o*m*h-d*l*f+o*p*f,v=_*p*c-u*m*c-_*l*h+a*m*h+u*l*f-a*p*f,y=u*g*c-_*d*c+_*o*h-a*g*h-u*o*f+a*d*f,M=_*d*l-u*g*l-_*o*p+a*g*p+u*o*m-a*d*m,w=t*x+n*v+r*y+s*M;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/w;return e[0]=x*E,e[1]=(g*p*s-d*m*s-g*r*h+n*m*h+d*r*f-n*p*f)*E,e[2]=(o*m*s-g*l*s+g*r*c-n*m*c-o*r*f+n*l*f)*E,e[3]=(d*l*s-o*p*s-d*r*c+n*p*c+o*r*h-n*l*h)*E,e[4]=v*E,e[5]=(u*m*s-_*p*s+_*r*h-t*m*h-u*r*f+t*p*f)*E,e[6]=(_*l*s-a*m*s-_*r*c+t*m*c+a*r*f-t*l*f)*E,e[7]=(a*p*s-u*l*s+u*r*c-t*p*c-a*r*h+t*l*h)*E,e[8]=y*E,e[9]=(_*d*s-u*g*s-_*n*h+t*g*h+u*n*f-t*d*f)*E,e[10]=(a*g*s-_*o*s+_*n*c-t*g*c-a*n*f+t*o*f)*E,e[11]=(u*o*s-a*d*s-u*n*c+t*d*c+a*n*h-t*o*h)*E,e[12]=M*E,e[13]=(u*g*r-_*d*r+_*n*p-t*g*p-u*n*m+t*d*m)*E,e[14]=(_*o*r-a*g*r-_*n*l+t*g*l+a*n*m-t*o*m)*E,e[15]=(a*d*r-u*o*r+u*n*l-t*d*l-a*n*p+t*o*p)*E,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+n,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,d=o+o,p=s*c,h=s*u,_=s*d,g=a*u,m=a*d,f=o*d,x=l*c,v=l*u,y=l*d,M=n.x,w=n.y,E=n.z;return r[0]=(1-(g+f))*M,r[1]=(h+y)*M,r[2]=(_-v)*M,r[3]=0,r[4]=(h-y)*w,r[5]=(1-(p+f))*w,r[6]=(m+x)*w,r[7]=0,r[8]=(_+v)*E,r[9]=(m-x)*E,r[10]=(1-(p+g))*E,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=Wi.set(r[0],r[1],r[2]).length();const a=Wi.set(r[4],r[5],r[6]).length(),o=Wi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],on.copy(this);const c=1/s,u=1/a,d=1/o;return on.elements[0]*=c,on.elements[1]*=c,on.elements[2]*=c,on.elements[4]*=u,on.elements[5]*=u,on.elements[6]*=u,on.elements[8]*=d,on.elements[9]*=d,on.elements[10]*=d,t.setFromRotationMatrix(on),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a,o=On){const l=this.elements,c=2*s/(t-e),u=2*s/(n-r),d=(t+e)/(t-e),p=(n+r)/(n-r);let h,_;if(o===On)h=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===zs)h=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=h,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=On){const l=this.elements,c=1/(t-e),u=1/(n-r),d=1/(a-s),p=(t+e)*c,h=(n+r)*u;let _,g;if(o===On)_=(a+s)*d,g=-2*d;else if(o===zs)_=s*d,g=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-h,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Wi=new V,on=new vt,dm=new V(0,0,0),fm=new V(1,1,1),Vn=new V,us=new V,kt=new V,Zl=new vt,Jl=new Pi;class js{constructor(e=0,t=0,n=0,r=js.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],d=r[2],p=r[6],h=r[10];switch(t){case"XYZ":this._y=Math.asin(Ct(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ct(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ct(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ct(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ct(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-Ct(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Zl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Zl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Jl.setFromEuler(this),this.setFromQuaternion(Jl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}js.DEFAULT_ORDER="XYZ";class Uo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let hm=0;const Ql=new V,Xi=new Pi,wn=new vt,ds=new V,Rr=new V,pm=new V,mm=new Pi,ec=new V(1,0,0),tc=new V(0,1,0),nc=new V(0,0,1),gm={type:"added"},ic={type:"removed"};class Ut extends Ii{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hm++}),this.uuid=Jr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ut.DEFAULT_UP.clone();const e=new V,t=new js,n=new Pi,r=new V(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new vt},normalMatrix:{value:new Oe}}),this.matrix=new vt,this.matrixWorld=new vt,this.matrixAutoUpdate=Ut.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Uo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Xi.setFromAxisAngle(e,t),this.quaternion.multiply(Xi),this}rotateOnWorldAxis(e,t){return Xi.setFromAxisAngle(e,t),this.quaternion.premultiply(Xi),this}rotateX(e){return this.rotateOnAxis(ec,e)}rotateY(e){return this.rotateOnAxis(tc,e)}rotateZ(e){return this.rotateOnAxis(nc,e)}translateOnAxis(e,t){return Ql.copy(e).applyQuaternion(this.quaternion),this.position.add(Ql.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ec,e)}translateY(e){return this.translateOnAxis(tc,e)}translateZ(e){return this.translateOnAxis(nc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(wn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ds.copy(e):ds.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Rr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wn.lookAt(Rr,ds,this.up):wn.lookAt(ds,Rr,this.up),this.quaternion.setFromRotationMatrix(wn),r&&(wn.extractRotation(r.matrixWorld),Xi.setFromRotationMatrix(wn),this.quaternion.premultiply(Xi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(gm)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ic)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(ic)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),wn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),wn.multiply(e.parent.matrixWorld)),e.applyMatrix4(wn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let r=0,s=this.children.length;r<s;r++){const a=this.children[r].getObjectsByProperty(e,t);a.length>0&&(n=n.concat(a))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rr,e,pm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rr,mm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),p=a(e.skeletons),h=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),p.length>0&&(n.skeletons=p),h.length>0&&(n.animations=h),_.length>0&&(n.nodes=_)}return n.object=r,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Ut.DEFAULT_UP=new V(0,1,0);Ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ln=new V,Cn=new V,Pa=new V,Rn=new V,qi=new V,Yi=new V,rc=new V,La=new V,Da=new V,Ia=new V;let fs=!1;class un{constructor(e=new V,t=new V,n=new V){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),ln.subVectors(e,t),r.cross(ln);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){ln.subVectors(r,t),Cn.subVectors(n,t),Pa.subVectors(e,t);const a=ln.dot(ln),o=ln.dot(Cn),l=ln.dot(Pa),c=Cn.dot(Cn),u=Cn.dot(Pa),d=a*c-o*o;if(d===0)return s.set(-2,-1,-1);const p=1/d,h=(c*l-o*u)*p,_=(a*u-o*l)*p;return s.set(1-h-_,_,h)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Rn),Rn.x>=0&&Rn.y>=0&&Rn.x+Rn.y<=1}static getUV(e,t,n,r,s,a,o,l){return fs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),fs=!0),this.getInterpolation(e,t,n,r,s,a,o,l)}static getInterpolation(e,t,n,r,s,a,o,l){return this.getBarycoord(e,t,n,r,Rn),l.setScalar(0),l.addScaledVector(s,Rn.x),l.addScaledVector(a,Rn.y),l.addScaledVector(o,Rn.z),l}static isFrontFacing(e,t,n,r){return ln.subVectors(n,t),Cn.subVectors(e,t),ln.cross(Cn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ln.subVectors(this.c,this.b),Cn.subVectors(this.a,this.b),ln.cross(Cn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return un.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return un.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,s){return fs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),fs=!0),un.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}getInterpolation(e,t,n,r,s){return un.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return un.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return un.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;qi.subVectors(r,n),Yi.subVectors(s,n),La.subVectors(e,n);const l=qi.dot(La),c=Yi.dot(La);if(l<=0&&c<=0)return t.copy(n);Da.subVectors(e,r);const u=qi.dot(Da),d=Yi.dot(Da);if(u>=0&&d<=u)return t.copy(r);const p=l*d-u*c;if(p<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(qi,a);Ia.subVectors(e,s);const h=qi.dot(Ia),_=Yi.dot(Ia);if(_>=0&&h<=_)return t.copy(s);const g=h*c-l*_;if(g<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(n).addScaledVector(Yi,o);const m=u*_-h*d;if(m<=0&&d-u>=0&&h-_>=0)return rc.subVectors(s,r),o=(d-u)/(d-u+(h-_)),t.copy(r).addScaledVector(rc,o);const f=1/(m+g+p);return a=g*f,o=p*f,t.copy(n).addScaledVector(qi,a).addScaledVector(Yi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let _m=0;class $s extends Ii{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_m++}),this.uuid=Jr(),this.name="",this.type="Material",this.blending=or,this.side=ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Mu,this.blendDst=yu,this.blendEquation=nr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=eo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xa,this.stencilZFail=xa,this.stencilZPass=xa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==or&&(n.blending=this.blending),this.side!==ii&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Fu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},cn={h:0,s:0,l:0},hs={h:0,s:0,l:0};function Ua(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Xe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Le){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,an.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=an.workingColorSpace){return this.r=e,this.g=t,this.b=n,an.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=an.workingColorSpace){if(e=Jp(e,1),t=Ct(t,0,1),n=Ct(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Ua(a,s,e+1/3),this.g=Ua(a,s,e),this.b=Ua(a,s,e-1/3)}return an.toWorkingColorSpace(this,r),this}setStyle(e,t=Le){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Le){const n=Fu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=lr(e.r),this.g=lr(e.g),this.b=lr(e.b),this}copyLinearToSRGB(e){return this.r=ya(e.r),this.g=ya(e.g),this.b=ya(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Le){return an.fromWorkingColorSpace(Mt.copy(this),e),Math.round(Ct(Mt.r*255,0,255))*65536+Math.round(Ct(Mt.g*255,0,255))*256+Math.round(Ct(Mt.b*255,0,255))}getHexString(e=Le){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=an.workingColorSpace){an.fromWorkingColorSpace(Mt.copy(this),t);const n=Mt.r,r=Mt.g,s=Mt.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case n:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-n)/d+2;break;case s:l=(n-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=an.workingColorSpace){return an.fromWorkingColorSpace(Mt.copy(this),t),e.r=Mt.r,e.g=Mt.g,e.b=Mt.b,e}getStyle(e=Le){an.fromWorkingColorSpace(Mt.copy(this),e);const t=Mt.r,n=Mt.g,r=Mt.b;return e!==Le?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(cn),cn.h+=e,cn.s+=t,cn.l+=n,this.setHSL(cn.h,cn.s,cn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(cn),e.getHSL(hs);const n=Sa(cn.h,hs.h,t),r=Sa(cn.s,hs.s,t),s=Sa(cn.l,hs.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Mt=new Xe;Xe.NAMES=Fu;class Oo extends $s{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Eu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const rt=new V,ps=new De;class Sn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ql,this.updateRange={offset:0,count:-1},this.gpuType=jn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ps.fromBufferAttribute(this,t),ps.applyMatrix3(e),this.setXY(t,ps.x,ps.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)rt.fromBufferAttribute(this,t),rt.applyMatrix3(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)rt.fromBufferAttribute(this,t),rt.applyMatrix4(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)rt.fromBufferAttribute(this,t),rt.applyNormalMatrix(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)rt.fromBufferAttribute(this,t),rt.transformDirection(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ar(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Lt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ar(t,this.array)),t}setX(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ar(t,this.array)),t}setY(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ar(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ar(t,this.array)),t}setW(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array),r=Lt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array),r=Lt(r,this.array),s=Lt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ql&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Bu extends Sn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class zu extends Sn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ei extends Sn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let vm=0;const Zt=new vt,Oa=new Ut,ji=new V,Ht=new Qr,Pr=new Qr,ft=new V;class Ui extends Ii{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vm++}),this.uuid=Jr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Iu(e)?zu:Bu)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Oe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Zt.makeRotationFromQuaternion(e),this.applyMatrix4(Zt),this}rotateX(e){return Zt.makeRotationX(e),this.applyMatrix4(Zt),this}rotateY(e){return Zt.makeRotationY(e),this.applyMatrix4(Zt),this}rotateZ(e){return Zt.makeRotationZ(e),this.applyMatrix4(Zt),this}translate(e,t,n){return Zt.makeTranslation(e,t,n),this.applyMatrix4(Zt),this}scale(e,t,n){return Zt.makeScale(e,t,n),this.applyMatrix4(Zt),this}lookAt(e){return Oa.lookAt(e),Oa.updateMatrix(),this.applyMatrix4(Oa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ji).negate(),this.translate(ji.x,ji.y,ji.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ei(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Ht.setFromBufferAttribute(s),this.morphTargetsRelative?(ft.addVectors(this.boundingBox.min,Ht.min),this.boundingBox.expandByPoint(ft),ft.addVectors(this.boundingBox.max,Ht.max),this.boundingBox.expandByPoint(ft)):(this.boundingBox.expandByPoint(Ht.min),this.boundingBox.expandByPoint(Ht.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Do);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new V,1/0);return}if(e){const n=this.boundingSphere.center;if(Ht.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Pr.setFromBufferAttribute(o),this.morphTargetsRelative?(ft.addVectors(Ht.min,Pr.min),Ht.expandByPoint(ft),ft.addVectors(Ht.max,Pr.max),Ht.expandByPoint(ft)):(Ht.expandByPoint(Pr.min),Ht.expandByPoint(Pr.max))}Ht.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)ft.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(ft));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)ft.fromBufferAttribute(o,c),l&&(ji.fromBufferAttribute(e,c),ft.add(ji)),r=Math.max(r,n.distanceToSquared(ft))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,s=t.normal.array,a=t.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Sn(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let T=0;T<o;T++)c[T]=new V,u[T]=new V;const d=new V,p=new V,h=new V,_=new De,g=new De,m=new De,f=new V,x=new V;function v(T,D,B){d.fromArray(r,T*3),p.fromArray(r,D*3),h.fromArray(r,B*3),_.fromArray(a,T*2),g.fromArray(a,D*2),m.fromArray(a,B*2),p.sub(d),h.sub(d),g.sub(_),m.sub(_);const L=1/(g.x*m.y-m.x*g.y);isFinite(L)&&(f.copy(p).multiplyScalar(m.y).addScaledVector(h,-g.y).multiplyScalar(L),x.copy(h).multiplyScalar(g.x).addScaledVector(p,-m.x).multiplyScalar(L),c[T].add(f),c[D].add(f),c[B].add(f),u[T].add(x),u[D].add(x),u[B].add(x))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let T=0,D=y.length;T<D;++T){const B=y[T],L=B.start,U=B.count;for(let F=L,J=L+U;F<J;F+=3)v(n[F+0],n[F+1],n[F+2])}const M=new V,w=new V,E=new V,b=new V;function S(T){E.fromArray(s,T*3),b.copy(E);const D=c[T];M.copy(D),M.sub(E.multiplyScalar(E.dot(D))).normalize(),w.crossVectors(b,D);const L=w.dot(u[T])<0?-1:1;l[T*4]=M.x,l[T*4+1]=M.y,l[T*4+2]=M.z,l[T*4+3]=L}for(let T=0,D=y.length;T<D;++T){const B=y[T],L=B.start,U=B.count;for(let F=L,J=L+U;F<J;F+=3)S(n[F+0]),S(n[F+1]),S(n[F+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Sn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,h=n.count;p<h;p++)n.setXYZ(p,0,0,0);const r=new V,s=new V,a=new V,o=new V,l=new V,c=new V,u=new V,d=new V;if(e)for(let p=0,h=e.count;p<h;p+=3){const _=e.getX(p+0),g=e.getX(p+1),m=e.getX(p+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),a.fromBufferAttribute(t,m),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let p=0,h=t.count;p<h;p+=3)r.fromBufferAttribute(t,p+0),s.fromBufferAttribute(t,p+1),a.fromBufferAttribute(t,p+2),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),n.setXYZ(p+0,u.x,u.y,u.z),n.setXYZ(p+1,u.x,u.y,u.z),n.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ft.fromBufferAttribute(e,t),ft.normalize(),e.setXYZ(t,ft.x,ft.y,ft.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,d=o.normalized,p=new c.constructor(l.length*u);let h=0,_=0;for(let g=0,m=l.length;g<m;g++){o.isInterleavedBufferAttribute?h=l[g]*o.data.stride+o.offset:h=l[g]*u;for(let f=0;f<u;f++)p[_++]=c[h++]}return new Sn(p,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ui,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,d=c.length;u<d;u++){const p=c[u],h=e(p,n);l.push(h)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,p=c.length;d<p;d++){const h=c[d];u.push(h.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let p=0,h=d.length;p<h;p++)u.push(d[p].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const sc=new vt,di=new Io,ms=new Do,ac=new V,$i=new V,Ki=new V,Zi=new V,Na=new V,gs=new V,_s=new De,vs=new De,xs=new De,oc=new V,lc=new V,cc=new V,Ss=new V,Ms=new V;class Nn extends Ut{constructor(e=new Ui,t=new Oo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){gs.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],d=s[l];u!==0&&(Na.fromBufferAttribute(d,e),a?gs.addScaledVector(Na,u):gs.addScaledVector(Na.sub(t),u))}t.add(gs)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ms.copy(n.boundingSphere),ms.applyMatrix4(s),di.copy(e.ray).recast(e.near),!(ms.containsPoint(di.origin)===!1&&(di.intersectSphere(ms,ac)===null||di.origin.distanceToSquared(ac)>(e.far-e.near)**2))&&(sc.copy(s).invert(),di.copy(e.ray).applyMatrix4(sc),!(n.boundingBox!==null&&di.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,di)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,p=s.groups,h=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=p.length;_<g;_++){const m=p[_],f=a[m.materialIndex],x=Math.max(m.start,h.start),v=Math.min(o.count,Math.min(m.start+m.count,h.start+h.count));for(let y=x,M=v;y<M;y+=3){const w=o.getX(y),E=o.getX(y+1),b=o.getX(y+2);r=ys(this,f,e,n,c,u,d,w,E,b),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,h.start),g=Math.min(o.count,h.start+h.count);for(let m=_,f=g;m<f;m+=3){const x=o.getX(m),v=o.getX(m+1),y=o.getX(m+2);r=ys(this,a,e,n,c,u,d,x,v,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,g=p.length;_<g;_++){const m=p[_],f=a[m.materialIndex],x=Math.max(m.start,h.start),v=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let y=x,M=v;y<M;y+=3){const w=y,E=y+1,b=y+2;r=ys(this,f,e,n,c,u,d,w,E,b),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,h.start),g=Math.min(l.count,h.start+h.count);for(let m=_,f=g;m<f;m+=3){const x=m,v=m+1,y=m+2;r=ys(this,a,e,n,c,u,d,x,v,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function xm(i,e,t,n,r,s,a,o){let l;if(e.side===Dt?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,e.side===ii,o),l===null)return null;Ms.copy(o),Ms.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Ms);return c<t.near||c>t.far?null:{distance:c,point:Ms.clone(),object:i}}function ys(i,e,t,n,r,s,a,o,l,c){i.getVertexPosition(o,$i),i.getVertexPosition(l,Ki),i.getVertexPosition(c,Zi);const u=xm(i,e,t,n,$i,Ki,Zi,Ss);if(u){r&&(_s.fromBufferAttribute(r,o),vs.fromBufferAttribute(r,l),xs.fromBufferAttribute(r,c),u.uv=un.getInterpolation(Ss,$i,Ki,Zi,_s,vs,xs,new De)),s&&(_s.fromBufferAttribute(s,o),vs.fromBufferAttribute(s,l),xs.fromBufferAttribute(s,c),u.uv1=un.getInterpolation(Ss,$i,Ki,Zi,_s,vs,xs,new De),u.uv2=u.uv1),a&&(oc.fromBufferAttribute(a,o),lc.fromBufferAttribute(a,l),cc.fromBufferAttribute(a,c),u.normal=un.getInterpolation(Ss,$i,Ki,Zi,oc,lc,cc,new V),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new V,materialIndex:0};un.getNormal($i,Ki,Zi,d.normal),u.face=d}return u}class es extends Ui{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],d=[];let p=0,h=0;_("z","y","x",-1,-1,n,t,e,a,s,0),_("z","y","x",1,-1,n,t,-e,a,s,1),_("x","z","y",1,1,e,n,t,r,a,2),_("x","z","y",1,-1,e,n,-t,r,a,3),_("x","y","z",1,-1,e,t,n,r,s,4),_("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Ei(c,3)),this.setAttribute("normal",new Ei(u,3)),this.setAttribute("uv",new Ei(d,2));function _(g,m,f,x,v,y,M,w,E,b,S){const T=y/E,D=M/b,B=y/2,L=M/2,U=w/2,F=E+1,J=b+1;let O=0,N=0;const Y=new V;for(let K=0;K<J;K++){const z=K*D-L;for(let Z=0;Z<F;Z++){const de=Z*T-B;Y[g]=de*x,Y[m]=z*v,Y[f]=U,c.push(Y.x,Y.y,Y.z),Y[g]=0,Y[m]=0,Y[f]=w>0?1:-1,u.push(Y.x,Y.y,Y.z),d.push(Z/E),d.push(1-K/b),O+=1}}for(let K=0;K<b;K++)for(let z=0;z<E;z++){const Z=p+z+F*K,de=p+z+F*(K+1),se=p+(z+1)+F*(K+1),le=p+(z+1)+F*K;l.push(Z,de,le),l.push(de,se,le),N+=6}o.addGroup(h,N,S),h+=N,p+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new es(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function gr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function At(i){const e={};for(let t=0;t<i.length;t++){const n=gr(i[t]);for(const r in n)e[r]=n[r]}return e}function Sm(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Gu(i){return i.getRenderTarget()===null?i.outputColorSpace:Mn}const Mm={clone:gr,merge:At};var ym=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Em=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Li extends $s{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ym,this.fragmentShader=Em,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=gr(e.uniforms),this.uniformsGroups=Sm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class ku extends Ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vt,this.projectionMatrix=new vt,this.projectionMatrixInverse=new vt,this.coordinateSystem=On}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class tn extends ku{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ao*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Rs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ao*2*Math.atan(Math.tan(Rs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Rs*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ji=-90,Qi=1;class Tm extends Ut{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null;const r=new tn(Ji,Qi,e,t);r.layers=this.layers,this.add(r);const s=new tn(Ji,Qi,e,t);s.layers=this.layers,this.add(s);const a=new tn(Ji,Qi,e,t);a.layers=this.layers,this.add(a);const o=new tn(Ji,Qi,e,t);o.layers=this.layers,this.add(o);const l=new tn(Ji,Qi,e,t);l.layers=this.layers,this.add(l);const c=new tn(Ji,Qi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===On)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===zs)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,a,o,l,c]=this.children,u=e.getRenderTarget(),d=e.xr.enabled;e.xr.enabled=!1;const p=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,r),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=p,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.xr.enabled=d,n.texture.needsPMREMUpdate=!0}}class Hu extends It{constructor(e,t,n,r,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:hr,super(e,t,n,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class bm extends Ri{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];t.encoding!==void 0&&(Nr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Mi?Le:yi),this.texture=new Hu(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:en}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new es(5,5,5),s=new Li({name:"CubemapFromEquirect",uniforms:gr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Dt,blending:Jn});s.uniforms.tEquirect.value=t;const a=new Nn(r,s),o=t.minFilter;return t.minFilter===Hr&&(t.minFilter=en),new Tm(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}const Fa=new V,Am=new V,wm=new Oe;class Wn{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Fa.subVectors(n,t).cross(Am.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Fa),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||wm.getNormalMatrix(e),r=this.coplanarPoint(Fa).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const fi=new Do,Es=new V;class Vu{constructor(e=new Wn,t=new Wn,n=new Wn,r=new Wn,s=new Wn,a=new Wn){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=On){const n=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],d=r[6],p=r[7],h=r[8],_=r[9],g=r[10],m=r[11],f=r[12],x=r[13],v=r[14],y=r[15];if(n[0].setComponents(l-s,p-c,m-h,y-f).normalize(),n[1].setComponents(l+s,p+c,m+h,y+f).normalize(),n[2].setComponents(l+a,p+u,m+_,y+x).normalize(),n[3].setComponents(l-a,p-u,m-_,y-x).normalize(),n[4].setComponents(l-o,p-d,m-g,y-v).normalize(),t===On)n[5].setComponents(l+o,p+d,m+g,y+v).normalize();else if(t===zs)n[5].setComponents(o,d,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),fi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),fi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(fi)}intersectsSprite(e){return fi.center.set(0,0,0),fi.radius=.7071067811865476,fi.applyMatrix4(e.matrixWorld),this.intersectsSphere(fi)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Es.x=r.normal.x>0?e.max.x:e.min.x,Es.y=r.normal.y>0?e.max.y:e.min.y,Es.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Es)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Wu(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Cm(i,e){const t=e.isWebGL2,n=new WeakMap;function r(c,u){const d=c.array,p=c.usage,h=i.createBuffer();i.bindBuffer(u,h),i.bufferData(u,d,p),c.onUploadCallback();let _;if(d instanceof Float32Array)_=i.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=i.UNSIGNED_SHORT;else if(d instanceof Int16Array)_=i.SHORT;else if(d instanceof Uint32Array)_=i.UNSIGNED_INT;else if(d instanceof Int32Array)_=i.INT;else if(d instanceof Int8Array)_=i.BYTE;else if(d instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:h,type:_,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,d){const p=u.array,h=u.updateRange;i.bindBuffer(d,c),h.count===-1?i.bufferSubData(d,0,p):(t?i.bufferSubData(d,h.offset*p.BYTES_PER_ELEMENT,p,h.offset,h.count):i.bufferSubData(d,h.offset*p.BYTES_PER_ELEMENT,p.subarray(h.offset,h.offset+h.count)),h.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(i.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const p=n.get(c);(!p||p.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=n.get(c);d===void 0?n.set(c,r(c,u)):d.version<c.version&&(s(d.buffer,c,u),d.version=c.version)}return{get:a,remove:o,update:l}}class Ks extends Ui{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(r),c=o+1,u=l+1,d=e/o,p=t/l,h=[],_=[],g=[],m=[];for(let f=0;f<u;f++){const x=f*p-a;for(let v=0;v<c;v++){const y=v*d-s;_.push(y,-x,0),g.push(0,0,1),m.push(v/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let x=0;x<o;x++){const v=x+c*f,y=x+c*(f+1),M=x+1+c*(f+1),w=x+1+c*f;h.push(v,y,w),h.push(y,M,w)}this.setIndex(h),this.setAttribute("position",new Ei(_,3)),this.setAttribute("normal",new Ei(g,3)),this.setAttribute("uv",new Ei(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ks(e.width,e.height,e.widthSegments,e.heightSegments)}}var Rm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Pm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Lm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Dm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Im=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Um=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Om=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Nm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Fm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Bm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Gm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,km=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Hm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Vm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Xm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ym=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,jm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,$m=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Km=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Zm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Jm=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Qm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,eg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ng=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ig="gl_FragColor = linearToOutputTexel( gl_FragColor );",rg=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ag=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,og=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,lg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ug=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,mg=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,gg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_g=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Sg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Mg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Eg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Tg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,Ag=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,wg=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Cg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Rg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Pg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Lg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Ig=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Ug=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,Og=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ng=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Fg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Gg=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,kg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Hg=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Vg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Wg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,Xg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,qg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$g=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Kg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Zg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Jg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Qg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,e_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,t_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,n_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,i_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,r_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,s_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,a_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,o_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,l_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,c_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,u_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,d_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,f_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,h_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,p_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,m_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,g_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,__=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,v_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,x_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,S_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,M_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,y_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,E_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,T_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,b_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const A_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,w_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,C_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,R_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,P_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,L_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,D_=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,I_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,U_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,O_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,N_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,F_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,B_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,z_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,G_=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,k_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,H_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,V_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,W_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,X_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,q_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Y_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,j_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,K_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Z_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,J_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Q_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ev=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,tv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,nv=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,rv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Pe={alphahash_fragment:Rm,alphahash_pars_fragment:Pm,alphamap_fragment:Lm,alphamap_pars_fragment:Dm,alphatest_fragment:Im,alphatest_pars_fragment:Um,aomap_fragment:Om,aomap_pars_fragment:Nm,begin_vertex:Fm,beginnormal_vertex:Bm,bsdfs:zm,iridescence_fragment:Gm,bumpmap_pars_fragment:km,clipping_planes_fragment:Hm,clipping_planes_pars_fragment:Vm,clipping_planes_pars_vertex:Wm,clipping_planes_vertex:Xm,color_fragment:qm,color_pars_fragment:Ym,color_pars_vertex:jm,color_vertex:$m,common:Km,cube_uv_reflection_fragment:Zm,defaultnormal_vertex:Jm,displacementmap_pars_vertex:Qm,displacementmap_vertex:eg,emissivemap_fragment:tg,emissivemap_pars_fragment:ng,colorspace_fragment:ig,colorspace_pars_fragment:rg,envmap_fragment:sg,envmap_common_pars_fragment:ag,envmap_pars_fragment:og,envmap_pars_vertex:lg,envmap_physical_pars_fragment:Sg,envmap_vertex:cg,fog_vertex:ug,fog_pars_vertex:dg,fog_fragment:fg,fog_pars_fragment:hg,gradientmap_pars_fragment:pg,lightmap_fragment:mg,lightmap_pars_fragment:gg,lights_lambert_fragment:_g,lights_lambert_pars_fragment:vg,lights_pars_begin:xg,lights_toon_fragment:Mg,lights_toon_pars_fragment:yg,lights_phong_fragment:Eg,lights_phong_pars_fragment:Tg,lights_physical_fragment:bg,lights_physical_pars_fragment:Ag,lights_fragment_begin:wg,lights_fragment_maps:Cg,lights_fragment_end:Rg,logdepthbuf_fragment:Pg,logdepthbuf_pars_fragment:Lg,logdepthbuf_pars_vertex:Dg,logdepthbuf_vertex:Ig,map_fragment:Ug,map_pars_fragment:Og,map_particle_fragment:Ng,map_particle_pars_fragment:Fg,metalnessmap_fragment:Bg,metalnessmap_pars_fragment:zg,morphcolor_vertex:Gg,morphnormal_vertex:kg,morphtarget_pars_vertex:Hg,morphtarget_vertex:Vg,normal_fragment_begin:Wg,normal_fragment_maps:Xg,normal_pars_fragment:qg,normal_pars_vertex:Yg,normal_vertex:jg,normalmap_pars_fragment:$g,clearcoat_normal_fragment_begin:Kg,clearcoat_normal_fragment_maps:Zg,clearcoat_pars_fragment:Jg,iridescence_pars_fragment:Qg,opaque_fragment:e_,packing:t_,premultiplied_alpha_fragment:n_,project_vertex:i_,dithering_fragment:r_,dithering_pars_fragment:s_,roughnessmap_fragment:a_,roughnessmap_pars_fragment:o_,shadowmap_pars_fragment:l_,shadowmap_pars_vertex:c_,shadowmap_vertex:u_,shadowmask_pars_fragment:d_,skinbase_vertex:f_,skinning_pars_vertex:h_,skinning_vertex:p_,skinnormal_vertex:m_,specularmap_fragment:g_,specularmap_pars_fragment:__,tonemapping_fragment:v_,tonemapping_pars_fragment:x_,transmission_fragment:S_,transmission_pars_fragment:M_,uv_pars_fragment:y_,uv_pars_vertex:E_,uv_vertex:T_,worldpos_vertex:b_,background_vert:A_,background_frag:w_,backgroundCube_vert:C_,backgroundCube_frag:R_,cube_vert:P_,cube_frag:L_,depth_vert:D_,depth_frag:I_,distanceRGBA_vert:U_,distanceRGBA_frag:O_,equirect_vert:N_,equirect_frag:F_,linedashed_vert:B_,linedashed_frag:z_,meshbasic_vert:G_,meshbasic_frag:k_,meshlambert_vert:H_,meshlambert_frag:V_,meshmatcap_vert:W_,meshmatcap_frag:X_,meshnormal_vert:q_,meshnormal_frag:Y_,meshphong_vert:j_,meshphong_frag:$_,meshphysical_vert:K_,meshphysical_frag:Z_,meshtoon_vert:J_,meshtoon_frag:Q_,points_vert:ev,points_frag:tv,shadow_vert:nv,shadow_frag:iv,sprite_vert:rv,sprite_frag:sv},oe={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new De(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new De(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},mn={basic:{uniforms:At([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Pe.meshbasic_vert,fragmentShader:Pe.meshbasic_frag},lambert:{uniforms:At([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Pe.meshlambert_vert,fragmentShader:Pe.meshlambert_frag},phong:{uniforms:At([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30}}]),vertexShader:Pe.meshphong_vert,fragmentShader:Pe.meshphong_frag},standard:{uniforms:At([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Pe.meshphysical_vert,fragmentShader:Pe.meshphysical_frag},toon:{uniforms:At([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Pe.meshtoon_vert,fragmentShader:Pe.meshtoon_frag},matcap:{uniforms:At([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Pe.meshmatcap_vert,fragmentShader:Pe.meshmatcap_frag},points:{uniforms:At([oe.points,oe.fog]),vertexShader:Pe.points_vert,fragmentShader:Pe.points_frag},dashed:{uniforms:At([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Pe.linedashed_vert,fragmentShader:Pe.linedashed_frag},depth:{uniforms:At([oe.common,oe.displacementmap]),vertexShader:Pe.depth_vert,fragmentShader:Pe.depth_frag},normal:{uniforms:At([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Pe.meshnormal_vert,fragmentShader:Pe.meshnormal_frag},sprite:{uniforms:At([oe.sprite,oe.fog]),vertexShader:Pe.sprite_vert,fragmentShader:Pe.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Pe.background_vert,fragmentShader:Pe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Pe.backgroundCube_vert,fragmentShader:Pe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Pe.cube_vert,fragmentShader:Pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Pe.equirect_vert,fragmentShader:Pe.equirect_frag},distanceRGBA:{uniforms:At([oe.common,oe.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Pe.distanceRGBA_vert,fragmentShader:Pe.distanceRGBA_frag},shadow:{uniforms:At([oe.lights,oe.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:Pe.shadow_vert,fragmentShader:Pe.shadow_frag}};mn.physical={uniforms:At([mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new De(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new De},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new De},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:Pe.meshphysical_vert,fragmentShader:Pe.meshphysical_frag};const Ts={r:0,b:0,g:0};function av(i,e,t,n,r,s,a){const o=new Xe(0);let l=s===!0?0:1,c,u,d=null,p=0,h=null;function _(m,f){let x=!1,v=f.isScene===!0?f.background:null;switch(v&&v.isTexture&&(v=(f.backgroundBlurriness>0?t:e).get(v)),v===null?g(o,l):v&&v.isColor&&(g(v,1),x=!0),i.xr.getEnvironmentBlendMode()){case"opaque":x=!0;break;case"additive":n.buffers.color.setClear(0,0,0,1,a),x=!0;break;case"alpha-blend":n.buffers.color.setClear(0,0,0,0,a),x=!0;break}(i.autoClear||x)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Ys)?(u===void 0&&(u=new Nn(new es(1,1,1),new Li({name:"BackgroundCubeMaterial",uniforms:gr(mn.backgroundCube.uniforms),vertexShader:mn.backgroundCube.vertexShader,fragmentShader:mn.backgroundCube.fragmentShader,side:Dt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,E,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=v.colorSpace!==Le,(d!==v||p!==v.version||h!==i.toneMapping)&&(u.material.needsUpdate=!0,d=v,p=v.version,h=i.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Nn(new Ks(2,2),new Li({name:"BackgroundMaterial",uniforms:gr(mn.background.uniforms),vertexShader:mn.background.vertexShader,fragmentShader:mn.background.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=v.colorSpace!==Le,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||p!==v.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,d=v,p=v.version,h=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function g(m,f){m.getRGB(Ts,Gu(i)),n.buffers.color.setClear(Ts.r,Ts.g,Ts.b,f,a)}return{getClearColor:function(){return o},setClearColor:function(m,f=1){o.set(m),l=f,g(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,g(o,l)},render:_}}function ov(i,e,t,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},l=m(null);let c=l,u=!1;function d(U,F,J,O,N){let Y=!1;if(a){const K=g(O,J,F);c!==K&&(c=K,h(c.object)),Y=f(U,O,J,N),Y&&x(U,O,J,N)}else{const K=F.wireframe===!0;(c.geometry!==O.id||c.program!==J.id||c.wireframe!==K)&&(c.geometry=O.id,c.program=J.id,c.wireframe=K,Y=!0)}N!==null&&t.update(N,i.ELEMENT_ARRAY_BUFFER),(Y||u)&&(u=!1,b(U,F,J,O),N!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(N).buffer))}function p(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function h(U){return n.isWebGL2?i.bindVertexArray(U):s.bindVertexArrayOES(U)}function _(U){return n.isWebGL2?i.deleteVertexArray(U):s.deleteVertexArrayOES(U)}function g(U,F,J){const O=J.wireframe===!0;let N=o[U.id];N===void 0&&(N={},o[U.id]=N);let Y=N[F.id];Y===void 0&&(Y={},N[F.id]=Y);let K=Y[O];return K===void 0&&(K=m(p()),Y[O]=K),K}function m(U){const F=[],J=[],O=[];for(let N=0;N<r;N++)F[N]=0,J[N]=0,O[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:J,attributeDivisors:O,object:U,attributes:{},index:null}}function f(U,F,J,O){const N=c.attributes,Y=F.attributes;let K=0;const z=J.getAttributes();for(const Z in z)if(z[Z].location>=0){const se=N[Z];let le=Y[Z];if(le===void 0&&(Z==="instanceMatrix"&&U.instanceMatrix&&(le=U.instanceMatrix),Z==="instanceColor"&&U.instanceColor&&(le=U.instanceColor)),se===void 0||se.attribute!==le||le&&se.data!==le.data)return!0;K++}return c.attributesNum!==K||c.index!==O}function x(U,F,J,O){const N={},Y=F.attributes;let K=0;const z=J.getAttributes();for(const Z in z)if(z[Z].location>=0){let se=Y[Z];se===void 0&&(Z==="instanceMatrix"&&U.instanceMatrix&&(se=U.instanceMatrix),Z==="instanceColor"&&U.instanceColor&&(se=U.instanceColor));const le={};le.attribute=se,se&&se.data&&(le.data=se.data),N[Z]=le,K++}c.attributes=N,c.attributesNum=K,c.index=O}function v(){const U=c.newAttributes;for(let F=0,J=U.length;F<J;F++)U[F]=0}function y(U){M(U,0)}function M(U,F){const J=c.newAttributes,O=c.enabledAttributes,N=c.attributeDivisors;J[U]=1,O[U]===0&&(i.enableVertexAttribArray(U),O[U]=1),N[U]!==F&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](U,F),N[U]=F)}function w(){const U=c.newAttributes,F=c.enabledAttributes;for(let J=0,O=F.length;J<O;J++)F[J]!==U[J]&&(i.disableVertexAttribArray(J),F[J]=0)}function E(U,F,J,O,N,Y,K){K===!0?i.vertexAttribIPointer(U,F,J,N,Y):i.vertexAttribPointer(U,F,J,O,N,Y)}function b(U,F,J,O){if(n.isWebGL2===!1&&(U.isInstancedMesh||O.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const N=O.attributes,Y=J.getAttributes(),K=F.defaultAttributeValues;for(const z in Y){const Z=Y[z];if(Z.location>=0){let de=N[z];if(de===void 0&&(z==="instanceMatrix"&&U.instanceMatrix&&(de=U.instanceMatrix),z==="instanceColor"&&U.instanceColor&&(de=U.instanceColor)),de!==void 0){const se=de.normalized,le=de.itemSize,ge=t.get(de);if(ge===void 0)continue;const Te=ge.buffer,_e=ge.type,ke=ge.bytesPerElement,mt=n.isWebGL2===!0&&(_e===i.INT||_e===i.UNSIGNED_INT||de.gpuType===bu);if(de.isInterleavedBufferAttribute){const Ce=de.data,H=Ce.stride,ot=de.offset;if(Ce.isInstancedInterleavedBuffer){for(let ve=0;ve<Z.locationSize;ve++)M(Z.location+ve,Ce.meshPerAttribute);U.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=Ce.meshPerAttribute*Ce.count)}else for(let ve=0;ve<Z.locationSize;ve++)y(Z.location+ve);i.bindBuffer(i.ARRAY_BUFFER,Te);for(let ve=0;ve<Z.locationSize;ve++)E(Z.location+ve,le/Z.locationSize,_e,se,H*ke,(ot+le/Z.locationSize*ve)*ke,mt)}else{if(de.isInstancedBufferAttribute){for(let Ce=0;Ce<Z.locationSize;Ce++)M(Z.location+Ce,de.meshPerAttribute);U.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Ce=0;Ce<Z.locationSize;Ce++)y(Z.location+Ce);i.bindBuffer(i.ARRAY_BUFFER,Te);for(let Ce=0;Ce<Z.locationSize;Ce++)E(Z.location+Ce,le/Z.locationSize,_e,se,le*ke,le/Z.locationSize*Ce*ke,mt)}}else if(K!==void 0){const se=K[z];if(se!==void 0)switch(se.length){case 2:i.vertexAttrib2fv(Z.location,se);break;case 3:i.vertexAttrib3fv(Z.location,se);break;case 4:i.vertexAttrib4fv(Z.location,se);break;default:i.vertexAttrib1fv(Z.location,se)}}}}w()}function S(){B();for(const U in o){const F=o[U];for(const J in F){const O=F[J];for(const N in O)_(O[N].object),delete O[N];delete F[J]}delete o[U]}}function T(U){if(o[U.id]===void 0)return;const F=o[U.id];for(const J in F){const O=F[J];for(const N in O)_(O[N].object),delete O[N];delete F[J]}delete o[U.id]}function D(U){for(const F in o){const J=o[F];if(J[U.id]===void 0)continue;const O=J[U.id];for(const N in O)_(O[N].object),delete O[N];delete J[U.id]}}function B(){L(),u=!0,c!==l&&(c=l,h(c.object))}function L(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:B,resetDefaultState:L,dispose:S,releaseStatesOfGeometry:T,releaseStatesOfProgram:D,initAttributes:v,enableAttribute:y,disableUnusedAttributes:w}}function lv(i,e,t,n){const r=n.isWebGL2;let s;function a(c){s=c}function o(c,u){i.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,d){if(d===0)return;let p,h;if(r)p=i,h="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),h="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[h](s,c,u,d),t.update(u,s,d)}this.setMode=a,this.render=o,this.renderInstances=l}function cv(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),f=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=p>0,y=a||e.has("OES_texture_float"),M=v&&y,w=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:p,maxTextureSize:h,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:x,vertexTextures:v,floatFragmentTextures:y,floatVertexTextures:M,maxSamples:w}}function uv(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new Wn,o=new Oe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,p){const h=d.length!==0||p||n!==0||r;return r=p,n=d.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,p){t=u(d,p,0)},this.setState=function(d,p,h){const _=d.clippingPlanes,g=d.clipIntersection,m=d.clipShadows,f=i.get(d);if(!r||_===null||_.length===0||s&&!m)s?u(null):c();else{const x=s?0:n,v=x*4;let y=f.clippingState||null;l.value=y,y=u(_,p,v,h);for(let M=0;M!==v;++M)y[M]=t[M];f.clippingState=y,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,p,h,_){const g=d!==null?d.length:0;let m=null;if(g!==0){if(m=l.value,_!==!0||m===null){const f=h+g*4,x=p.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<f)&&(m=new Float32Array(f));for(let v=0,y=h;v!==g;++v,y+=4)a.copy(d[v]).applyMatrix4(x,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function dv(i){let e=new WeakMap;function t(a,o){return o===to?a.mapping=hr:o===no&&(a.mapping=pr),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===to||o===no)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new bm(l.height/2);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class fv extends ku{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ir=4,uc=[.125,.215,.35,.446,.526,.582],_i=20,Ba=new fv,dc=new Xe;let za=null;const mi=(1+Math.sqrt(5))/2,er=1/mi,fc=[new V(1,1,1),new V(-1,1,1),new V(1,1,-1),new V(-1,1,-1),new V(0,mi,er),new V(0,mi,-er),new V(er,0,mi),new V(-er,0,mi),new V(mi,er,0),new V(-mi,er,0)];class hc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){za=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(za),e.scissorTest=!1,bs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===hr||e.mapping===pr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),za=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:en,minFilter:en,generateMipmaps:!1,type:Vr,format:fn,colorSpace:Mn,depthBuffer:!1},r=pc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=pc(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=hv(s)),this._blurMaterial=pv(s,e,t)}return r}_compileMaterial(e){const t=new Nn(this._lodPlanes[0],e);this._renderer.compile(t,Ba)}_sceneToCubeUV(e,t,n,r){const o=new tn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,p=u.toneMapping;u.getClearColor(dc),u.toneMapping=Qn,u.autoClear=!1;const h=new Oo({name:"PMREM.Background",side:Dt,depthWrite:!1,depthTest:!1}),_=new Nn(new es,h);let g=!1;const m=e.background;m?m.isColor&&(h.color.copy(m),e.background=null,g=!0):(h.color.copy(dc),g=!0);for(let f=0;f<6;f++){const x=f%3;x===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):x===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));const v=this._cubeSize;bs(r,x*v,f>2?v:0,v,v),u.setRenderTarget(r),g&&u.render(_,o),u.render(e,o)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=p,u.autoClear=d,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===hr||e.mapping===pr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=gc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mc());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Nn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;bs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Ba)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=fc[(r-1)%fc.length];this._blur(e,r-1,r,s,a)}t.autoClear=n}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Nn(this._lodPlanes[r],c),p=c.uniforms,h=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*_i-1),g=s/_,m=isFinite(s)?1+Math.floor(u*g):_i;m>_i&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${_i}`);const f=[];let x=0;for(let E=0;E<_i;++E){const b=E/g,S=Math.exp(-b*b/2);f.push(S),E===0?x+=S:E<m&&(x+=2*S)}for(let E=0;E<f.length;E++)f[E]=f[E]/x;p.envMap.value=e.texture,p.samples.value=m,p.weights.value=f,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);const{_lodMax:v}=this;p.dTheta.value=_,p.mipInt.value=v-n;const y=this._sizeLods[r],M=3*y*(r>v-ir?r-v+ir:0),w=4*(this._cubeSize-y);bs(t,M,w,3*y,2*y),l.setRenderTarget(t),l.render(d,Ba)}}function hv(i){const e=[],t=[],n=[];let r=i;const s=i-ir+1+uc.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>i-ir?l=uc[a-i+ir-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,d=1+c,p=[u,u,d,u,d,d,u,u,d,d,u,d],h=6,_=6,g=3,m=2,f=1,x=new Float32Array(g*_*h),v=new Float32Array(m*_*h),y=new Float32Array(f*_*h);for(let w=0;w<h;w++){const E=w%3*2/3-1,b=w>2?0:-1,S=[E,b,0,E+2/3,b,0,E+2/3,b+1,0,E,b,0,E+2/3,b+1,0,E,b+1,0];x.set(S,g*_*w),v.set(p,m*_*w);const T=[w,w,w,w,w,w];y.set(T,f*_*w)}const M=new Ui;M.setAttribute("position",new Sn(x,g)),M.setAttribute("uv",new Sn(v,m)),M.setAttribute("faceIndex",new Sn(y,f)),e.push(M),r>ir&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function pc(i,e,t){const n=new Ri(i,e,t);return n.texture.mapping=Ys,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function bs(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function pv(i,e,t){const n=new Float32Array(_i),r=new V(0,1,0);return new Li({name:"SphericalGaussianBlur",defines:{n:_i,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:No(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function mc(){return new Li({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:No(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function gc(){return new Li({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:No(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function No(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function mv(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===to||l===no,u=l===hr||l===pr;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let d=e.get(o);return t===null&&(t=new hc(i)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),e.set(o,d),d.texture}else{if(e.has(o))return e.get(o).texture;{const d=o.image;if(c&&d&&d.height>0||u&&d&&r(d)){t===null&&(t=new hc(i));const p=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,p),o.addEventListener("dispose",s),p.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function gv(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function _v(i,e,t,n){const r={},s=new WeakMap;function a(d){const p=d.target;p.index!==null&&e.remove(p.index);for(const _ in p.attributes)e.remove(p.attributes[_]);for(const _ in p.morphAttributes){const g=p.morphAttributes[_];for(let m=0,f=g.length;m<f;m++)e.remove(g[m])}p.removeEventListener("dispose",a),delete r[p.id];const h=s.get(p);h&&(e.remove(h),s.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function o(d,p){return r[p.id]===!0||(p.addEventListener("dispose",a),r[p.id]=!0,t.memory.geometries++),p}function l(d){const p=d.attributes;for(const _ in p)e.update(p[_],i.ARRAY_BUFFER);const h=d.morphAttributes;for(const _ in h){const g=h[_];for(let m=0,f=g.length;m<f;m++)e.update(g[m],i.ARRAY_BUFFER)}}function c(d){const p=[],h=d.index,_=d.attributes.position;let g=0;if(h!==null){const x=h.array;g=h.version;for(let v=0,y=x.length;v<y;v+=3){const M=x[v+0],w=x[v+1],E=x[v+2];p.push(M,w,w,E,E,M)}}else if(_!==void 0){const x=_.array;g=_.version;for(let v=0,y=x.length/3-1;v<y;v+=3){const M=v+0,w=v+1,E=v+2;p.push(M,w,w,E,E,M)}}else return;const m=new(Iu(p)?zu:Bu)(p,1);m.version=g;const f=s.get(d);f&&e.remove(f),s.set(d,m)}function u(d){const p=s.get(d);if(p){const h=d.index;h!==null&&p.version<h.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function vv(i,e,t,n){const r=n.isWebGL2;let s;function a(p){s=p}let o,l;function c(p){o=p.type,l=p.bytesPerElement}function u(p,h){i.drawElements(s,h,o,p*l),t.update(h,s,1)}function d(p,h,_){if(_===0)return;let g,m;if(r)g=i,m="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[m](s,h,o,p*l,_),t.update(h,s,_)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=d}function xv(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Sv(i,e){return i[0]-e[0]}function Mv(i,e){return Math.abs(e[1])-Math.abs(i[1])}function yv(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,a=new _t,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,d){const p=c.morphTargetInfluences;if(e.isWebGL2===!0){const h=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=h!==void 0?h.length:0;let g=s.get(u);if(g===void 0||g.count!==_){let U=function(){B.dispose(),s.delete(u),u.removeEventListener("dispose",U)};g!==void 0&&g.texture.dispose();const x=u.morphAttributes.position!==void 0,v=u.morphAttributes.normal!==void 0,y=u.morphAttributes.color!==void 0,M=u.morphAttributes.position||[],w=u.morphAttributes.normal||[],E=u.morphAttributes.color||[];let b=0;x===!0&&(b=1),v===!0&&(b=2),y===!0&&(b=3);let S=u.attributes.position.count*b,T=1;S>e.maxTextureSize&&(T=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const D=new Float32Array(S*T*4*_),B=new Nu(D,S,T,_);B.type=jn,B.needsUpdate=!0;const L=b*4;for(let F=0;F<_;F++){const J=M[F],O=w[F],N=E[F],Y=S*T*4*F;for(let K=0;K<J.count;K++){const z=K*L;x===!0&&(a.fromBufferAttribute(J,K),D[Y+z+0]=a.x,D[Y+z+1]=a.y,D[Y+z+2]=a.z,D[Y+z+3]=0),v===!0&&(a.fromBufferAttribute(O,K),D[Y+z+4]=a.x,D[Y+z+5]=a.y,D[Y+z+6]=a.z,D[Y+z+7]=0),y===!0&&(a.fromBufferAttribute(N,K),D[Y+z+8]=a.x,D[Y+z+9]=a.y,D[Y+z+10]=a.z,D[Y+z+11]=N.itemSize===4?a.w:1)}}g={count:_,texture:B,size:new De(S,T)},s.set(u,g),u.addEventListener("dispose",U)}let m=0;for(let x=0;x<p.length;x++)m+=p[x];const f=u.morphTargetsRelative?1:1-m;d.getUniforms().setValue(i,"morphTargetBaseInfluence",f),d.getUniforms().setValue(i,"morphTargetInfluences",p),d.getUniforms().setValue(i,"morphTargetsTexture",g.texture,t),d.getUniforms().setValue(i,"morphTargetsTextureSize",g.size)}else{const h=p===void 0?0:p.length;let _=n[u.id];if(_===void 0||_.length!==h){_=[];for(let v=0;v<h;v++)_[v]=[v,0];n[u.id]=_}for(let v=0;v<h;v++){const y=_[v];y[0]=v,y[1]=p[v]}_.sort(Mv);for(let v=0;v<8;v++)v<h&&_[v][1]?(o[v][0]=_[v][0],o[v][1]=_[v][1]):(o[v][0]=Number.MAX_SAFE_INTEGER,o[v][1]=0);o.sort(Sv);const g=u.morphAttributes.position,m=u.morphAttributes.normal;let f=0;for(let v=0;v<8;v++){const y=o[v],M=y[0],w=y[1];M!==Number.MAX_SAFE_INTEGER&&w?(g&&u.getAttribute("morphTarget"+v)!==g[M]&&u.setAttribute("morphTarget"+v,g[M]),m&&u.getAttribute("morphNormal"+v)!==m[M]&&u.setAttribute("morphNormal"+v,m[M]),r[v]=w,f+=w):(g&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),m&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),r[v]=0)}const x=u.morphTargetsRelative?1:1-f;d.getUniforms().setValue(i,"morphTargetBaseInfluence",x),d.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:l}}function Ev(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const p=l.skeleton;r.get(p)!==c&&(p.update(),r.set(p,c))}return d}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const Xu=new It,qu=new Nu,Yu=new cm,ju=new Hu,_c=[],vc=[],xc=new Float32Array(16),Sc=new Float32Array(9),Mc=new Float32Array(4);function Er(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=_c[r];if(s===void 0&&(s=new Float32Array(r),_c[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function ct(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function ut(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Zs(i,e){let t=vc[e];t===void 0&&(t=new Int32Array(e),vc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Tv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function bv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ct(t,e))return;i.uniform2fv(this.addr,e),ut(t,e)}}function Av(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ct(t,e))return;i.uniform3fv(this.addr,e),ut(t,e)}}function wv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ct(t,e))return;i.uniform4fv(this.addr,e),ut(t,e)}}function Cv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ct(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),ut(t,e)}else{if(ct(t,n))return;Mc.set(n),i.uniformMatrix2fv(this.addr,!1,Mc),ut(t,n)}}function Rv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ct(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),ut(t,e)}else{if(ct(t,n))return;Sc.set(n),i.uniformMatrix3fv(this.addr,!1,Sc),ut(t,n)}}function Pv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ct(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),ut(t,e)}else{if(ct(t,n))return;xc.set(n),i.uniformMatrix4fv(this.addr,!1,xc),ut(t,n)}}function Lv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Dv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ct(t,e))return;i.uniform2iv(this.addr,e),ut(t,e)}}function Iv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ct(t,e))return;i.uniform3iv(this.addr,e),ut(t,e)}}function Uv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ct(t,e))return;i.uniform4iv(this.addr,e),ut(t,e)}}function Ov(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Nv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ct(t,e))return;i.uniform2uiv(this.addr,e),ut(t,e)}}function Fv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ct(t,e))return;i.uniform3uiv(this.addr,e),ut(t,e)}}function Bv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ct(t,e))return;i.uniform4uiv(this.addr,e),ut(t,e)}}function zv(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2D(e||Xu,r)}function Gv(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Yu,r)}function kv(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||ju,r)}function Hv(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||qu,r)}function Vv(i){switch(i){case 5126:return Tv;case 35664:return bv;case 35665:return Av;case 35666:return wv;case 35674:return Cv;case 35675:return Rv;case 35676:return Pv;case 5124:case 35670:return Lv;case 35667:case 35671:return Dv;case 35668:case 35672:return Iv;case 35669:case 35673:return Uv;case 5125:return Ov;case 36294:return Nv;case 36295:return Fv;case 36296:return Bv;case 35678:case 36198:case 36298:case 36306:case 35682:return zv;case 35679:case 36299:case 36307:return Gv;case 35680:case 36300:case 36308:case 36293:return kv;case 36289:case 36303:case 36311:case 36292:return Hv}}function Wv(i,e){i.uniform1fv(this.addr,e)}function Xv(i,e){const t=Er(e,this.size,2);i.uniform2fv(this.addr,t)}function qv(i,e){const t=Er(e,this.size,3);i.uniform3fv(this.addr,t)}function Yv(i,e){const t=Er(e,this.size,4);i.uniform4fv(this.addr,t)}function jv(i,e){const t=Er(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function $v(i,e){const t=Er(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Kv(i,e){const t=Er(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Zv(i,e){i.uniform1iv(this.addr,e)}function Jv(i,e){i.uniform2iv(this.addr,e)}function Qv(i,e){i.uniform3iv(this.addr,e)}function e0(i,e){i.uniform4iv(this.addr,e)}function t0(i,e){i.uniform1uiv(this.addr,e)}function n0(i,e){i.uniform2uiv(this.addr,e)}function i0(i,e){i.uniform3uiv(this.addr,e)}function r0(i,e){i.uniform4uiv(this.addr,e)}function s0(i,e,t){const n=this.cache,r=e.length,s=Zs(t,r);ct(n,s)||(i.uniform1iv(this.addr,s),ut(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Xu,s[a])}function a0(i,e,t){const n=this.cache,r=e.length,s=Zs(t,r);ct(n,s)||(i.uniform1iv(this.addr,s),ut(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Yu,s[a])}function o0(i,e,t){const n=this.cache,r=e.length,s=Zs(t,r);ct(n,s)||(i.uniform1iv(this.addr,s),ut(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||ju,s[a])}function l0(i,e,t){const n=this.cache,r=e.length,s=Zs(t,r);ct(n,s)||(i.uniform1iv(this.addr,s),ut(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||qu,s[a])}function c0(i){switch(i){case 5126:return Wv;case 35664:return Xv;case 35665:return qv;case 35666:return Yv;case 35674:return jv;case 35675:return $v;case 35676:return Kv;case 5124:case 35670:return Zv;case 35667:case 35671:return Jv;case 35668:case 35672:return Qv;case 35669:case 35673:return e0;case 5125:return t0;case 36294:return n0;case 36295:return i0;case 36296:return r0;case 35678:case 36198:case 36298:case 36306:case 35682:return s0;case 35679:case 36299:case 36307:return a0;case 35680:case 36300:case 36308:case 36293:return o0;case 36289:case 36303:case 36311:case 36292:return l0}}class u0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Vv(t.type)}}class d0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=c0(t.type)}}class f0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const Ga=/(\w+)(\])?(\[|\.)?/g;function yc(i,e){i.seq.push(e),i.map[e.id]=e}function h0(i,e,t){const n=i.name,r=n.length;for(Ga.lastIndex=0;;){const s=Ga.exec(n),a=Ga.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){yc(t,c===void 0?new u0(o,i,e):new d0(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new f0(o),yc(t,d)),t=d}}}class Ps{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);h0(s,a,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function Ec(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}let p0=0;function m0(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function g0(i){switch(i){case Mn:return["Linear","( value )"];case Le:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),["Linear","( value )"]}}function Tc(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+m0(i.getShaderSource(e),a)}else return r}function _0(i,e){const t=g0(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function v0(i,e){let t;switch(e){case Tp:t="Linear";break;case bp:t="Reinhard";break;case Ap:t="OptimizedCineon";break;case wp:t="ACESFilmic";break;case Cp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function x0(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Dr).join(`
`)}function S0(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function M0(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Dr(i){return i!==""}function bc(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ac(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const y0=/^[ \t]*#include +<([\w\d./]+)>/gm;function lo(i){return i.replace(y0,T0)}const E0=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function T0(i,e){let t=Pe[e];if(t===void 0){const n=E0.get(e);if(n!==void 0)t=Pe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return lo(t)}const b0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wc(i){return i.replace(b0,A0)}function A0(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Cc(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function w0(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Su?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===np?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Ln&&(e="SHADOWMAP_TYPE_VSM"),e}function C0(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case hr:case pr:e="ENVMAP_TYPE_CUBE";break;case Ys:e="ENVMAP_TYPE_CUBE_UV";break}return e}function R0(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case pr:e="ENVMAP_MODE_REFRACTION";break}return e}function P0(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Eu:e="ENVMAP_BLENDING_MULTIPLY";break;case yp:e="ENVMAP_BLENDING_MIX";break;case Ep:e="ENVMAP_BLENDING_ADD";break}return e}function L0(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function D0(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=w0(t),c=C0(t),u=R0(t),d=P0(t),p=L0(t),h=t.isWebGL2?"":x0(t),_=S0(s),g=r.createProgram();let m,f,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Dr).join(`
`),m.length>0&&(m+=`
`),f=[h,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Dr).join(`
`),f.length>0&&(f+=`
`)):(m=[Cc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Dr).join(`
`),f=[h,Cc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Qn?"#define TONE_MAPPING":"",t.toneMapping!==Qn?Pe.tonemapping_pars_fragment:"",t.toneMapping!==Qn?v0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Pe.colorspace_pars_fragment,_0("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Dr).join(`
`)),a=lo(a),a=bc(a,t),a=Ac(a,t),o=lo(o),o=bc(o,t),o=Ac(o,t),a=wc(a),o=wc(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===Yl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Yl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const v=x+m+a,y=x+f+o,M=Ec(r,r.VERTEX_SHADER,v),w=Ec(r,r.FRAGMENT_SHADER,y);if(r.attachShader(g,M),r.attachShader(g,w),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g),i.debug.checkShaderErrors){const S=r.getProgramInfoLog(g).trim(),T=r.getShaderInfoLog(M).trim(),D=r.getShaderInfoLog(w).trim();let B=!0,L=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(B=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,g,M,w);else{const U=Tc(r,M,"vertex"),F=Tc(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Program Info Log: `+S+`
`+U+`
`+F)}else S!==""?console.warn("THREE.WebGLProgram: Program Info Log:",S):(T===""||D==="")&&(L=!1);L&&(this.diagnostics={runnable:B,programLog:S,vertexShader:{log:T,prefix:m},fragmentShader:{log:D,prefix:f}})}r.deleteShader(M),r.deleteShader(w);let E;this.getUniforms=function(){return E===void 0&&(E=new Ps(r,g)),E};let b;return this.getAttributes=function(){return b===void 0&&(b=M0(r,g)),b},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=p0++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=M,this.fragmentShader=w,this}let I0=0;class U0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new O0(e),t.set(e,n)),n}}class O0{constructor(e){this.id=I0++,this.code=e,this.usedTimes=0}}function N0(i,e,t,n,r,s,a){const o=new Uo,l=new U0,c=[],u=r.isWebGL2,d=r.logarithmicDepthBuffer,p=r.vertexTextures;let h=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return S===0?"uv":`uv${S}`}function m(S,T,D,B,L){const U=B.fog,F=L.geometry,J=S.isMeshStandardMaterial?B.environment:null,O=(S.isMeshStandardMaterial?t:e).get(S.envMap||J),N=O&&O.mapping===Ys?O.image.height:null,Y=_[S.type];S.precision!==null&&(h=r.getMaxPrecision(S.precision),h!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",h,"instead."));const K=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,z=K!==void 0?K.length:0;let Z=0;F.morphAttributes.position!==void 0&&(Z=1),F.morphAttributes.normal!==void 0&&(Z=2),F.morphAttributes.color!==void 0&&(Z=3);let de,se,le,ge;if(Y){const je=mn[Y];de=je.vertexShader,se=je.fragmentShader}else de=S.vertexShader,se=S.fragmentShader,l.update(S),le=l.getVertexShaderID(S),ge=l.getFragmentShaderID(S);const Te=i.getRenderTarget(),_e=L.isInstancedMesh===!0,ke=!!S.map,mt=!!S.matcap,Ce=!!O,H=!!S.aoMap,ot=!!S.lightMap,ve=!!S.bumpMap,Ae=!!S.normalMap,Me=!!S.displacementMap,qe=!!S.emissiveMap,Ie=!!S.metalnessMap,we=!!S.roughnessMap,Ge=S.anisotropy>0,lt=S.clearcoat>0,dt=S.iridescence>0,R=S.sheen>0,A=S.transmission>0,X=Ge&&!!S.anisotropyMap,ne=lt&&!!S.clearcoatMap,ee=lt&&!!S.clearcoatNormalMap,ie=lt&&!!S.clearcoatRoughnessMap,me=dt&&!!S.iridescenceMap,re=dt&&!!S.iridescenceThicknessMap,q=R&&!!S.sheenColorMap,P=R&&!!S.sheenRoughnessMap,Q=!!S.specularMap,he=!!S.specularColorMap,ae=!!S.specularIntensityMap,fe=A&&!!S.transmissionMap,be=A&&!!S.thicknessMap,Be=!!S.gradientMap,I=!!S.alphaMap,ce=S.alphaTest>0,W=!!S.alphaHash,te=!!S.extensions,ue=!!F.attributes.uv1,Ue=!!F.attributes.uv2,He=!!F.attributes.uv3;let Ye=Qn;return S.toneMapped&&(Te===null||Te.isXRRenderTarget===!0)&&(Ye=i.toneMapping),{isWebGL2:u,shaderID:Y,shaderType:S.type,shaderName:S.name,vertexShader:de,fragmentShader:se,defines:S.defines,customVertexShaderID:le,customFragmentShaderID:ge,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:h,instancing:_e,instancingColor:_e&&L.instanceColor!==null,supportsVertexTextures:p,outputColorSpace:Te===null?i.outputColorSpace:Te.isXRRenderTarget===!0?Te.texture.colorSpace:Mn,map:ke,matcap:mt,envMap:Ce,envMapMode:Ce&&O.mapping,envMapCubeUVHeight:N,aoMap:H,lightMap:ot,bumpMap:ve,normalMap:Ae,displacementMap:p&&Me,emissiveMap:qe,normalMapObjectSpace:Ae&&S.normalMapType===Hp,normalMapTangentSpace:Ae&&S.normalMapType===kp,metalnessMap:Ie,roughnessMap:we,anisotropy:Ge,anisotropyMap:X,clearcoat:lt,clearcoatMap:ne,clearcoatNormalMap:ee,clearcoatRoughnessMap:ie,iridescence:dt,iridescenceMap:me,iridescenceThicknessMap:re,sheen:R,sheenColorMap:q,sheenRoughnessMap:P,specularMap:Q,specularColorMap:he,specularIntensityMap:ae,transmission:A,transmissionMap:fe,thicknessMap:be,gradientMap:Be,opaque:S.transparent===!1&&S.blending===or,alphaMap:I,alphaTest:ce,alphaHash:W,combine:S.combine,mapUv:ke&&g(S.map.channel),aoMapUv:H&&g(S.aoMap.channel),lightMapUv:ot&&g(S.lightMap.channel),bumpMapUv:ve&&g(S.bumpMap.channel),normalMapUv:Ae&&g(S.normalMap.channel),displacementMapUv:Me&&g(S.displacementMap.channel),emissiveMapUv:qe&&g(S.emissiveMap.channel),metalnessMapUv:Ie&&g(S.metalnessMap.channel),roughnessMapUv:we&&g(S.roughnessMap.channel),anisotropyMapUv:X&&g(S.anisotropyMap.channel),clearcoatMapUv:ne&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:ee&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:re&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:q&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:P&&g(S.sheenRoughnessMap.channel),specularMapUv:Q&&g(S.specularMap.channel),specularColorMapUv:he&&g(S.specularColorMap.channel),specularIntensityMapUv:ae&&g(S.specularIntensityMap.channel),transmissionMapUv:fe&&g(S.transmissionMap.channel),thicknessMapUv:be&&g(S.thicknessMap.channel),alphaMapUv:I&&g(S.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(Ae||Ge),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUv1s:ue,vertexUv2s:Ue,vertexUv3s:He,pointsUvs:L.isPoints===!0&&!!F.attributes.uv&&(ke||I),fog:!!U,useFog:S.fog===!0,fogExp2:U&&U.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:L.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:z,morphTextureStride:Z,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ye,useLegacyLights:i._useLegacyLights,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Un,flipSided:S.side===Dt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:te&&S.extensions.derivatives===!0,extensionFragDepth:te&&S.extensions.fragDepth===!0,extensionDrawBuffers:te&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:te&&S.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:S.customProgramCacheKey()}}function f(S){const T=[];if(S.shaderID?T.push(S.shaderID):(T.push(S.customVertexShaderID),T.push(S.customFragmentShaderID)),S.defines!==void 0)for(const D in S.defines)T.push(D),T.push(S.defines[D]);return S.isRawShaderMaterial===!1&&(x(T,S),v(T,S),T.push(i.outputColorSpace)),T.push(S.customProgramCacheKey),T.join()}function x(S,T){S.push(T.precision),S.push(T.outputColorSpace),S.push(T.envMapMode),S.push(T.envMapCubeUVHeight),S.push(T.mapUv),S.push(T.alphaMapUv),S.push(T.lightMapUv),S.push(T.aoMapUv),S.push(T.bumpMapUv),S.push(T.normalMapUv),S.push(T.displacementMapUv),S.push(T.emissiveMapUv),S.push(T.metalnessMapUv),S.push(T.roughnessMapUv),S.push(T.anisotropyMapUv),S.push(T.clearcoatMapUv),S.push(T.clearcoatNormalMapUv),S.push(T.clearcoatRoughnessMapUv),S.push(T.iridescenceMapUv),S.push(T.iridescenceThicknessMapUv),S.push(T.sheenColorMapUv),S.push(T.sheenRoughnessMapUv),S.push(T.specularMapUv),S.push(T.specularColorMapUv),S.push(T.specularIntensityMapUv),S.push(T.transmissionMapUv),S.push(T.thicknessMapUv),S.push(T.combine),S.push(T.fogExp2),S.push(T.sizeAttenuation),S.push(T.morphTargetsCount),S.push(T.morphAttributeCount),S.push(T.numDirLights),S.push(T.numPointLights),S.push(T.numSpotLights),S.push(T.numSpotLightMaps),S.push(T.numHemiLights),S.push(T.numRectAreaLights),S.push(T.numDirLightShadows),S.push(T.numPointLightShadows),S.push(T.numSpotLightShadows),S.push(T.numSpotLightShadowsWithMaps),S.push(T.shadowMapType),S.push(T.toneMapping),S.push(T.numClippingPlanes),S.push(T.numClipIntersection),S.push(T.depthPacking)}function v(S,T){o.disableAll(),T.isWebGL2&&o.enable(0),T.supportsVertexTextures&&o.enable(1),T.instancing&&o.enable(2),T.instancingColor&&o.enable(3),T.matcap&&o.enable(4),T.envMap&&o.enable(5),T.normalMapObjectSpace&&o.enable(6),T.normalMapTangentSpace&&o.enable(7),T.clearcoat&&o.enable(8),T.iridescence&&o.enable(9),T.alphaTest&&o.enable(10),T.vertexColors&&o.enable(11),T.vertexAlphas&&o.enable(12),T.vertexUv1s&&o.enable(13),T.vertexUv2s&&o.enable(14),T.vertexUv3s&&o.enable(15),T.vertexTangents&&o.enable(16),T.anisotropy&&o.enable(17),S.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.skinning&&o.enable(4),T.morphTargets&&o.enable(5),T.morphNormals&&o.enable(6),T.morphColors&&o.enable(7),T.premultipliedAlpha&&o.enable(8),T.shadowMapEnabled&&o.enable(9),T.useLegacyLights&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),S.push(o.mask)}function y(S){const T=_[S.type];let D;if(T){const B=mn[T];D=Mm.clone(B.uniforms)}else D=S.uniforms;return D}function M(S,T){let D;for(let B=0,L=c.length;B<L;B++){const U=c[B];if(U.cacheKey===T){D=U,++D.usedTimes;break}}return D===void 0&&(D=new D0(i,T,S,s),c.push(D)),D}function w(S){if(--S.usedTimes===0){const T=c.indexOf(S);c[T]=c[c.length-1],c.pop(),S.destroy()}}function E(S){l.remove(S)}function b(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:y,acquireProgram:M,releaseProgram:w,releaseShaderCache:E,programs:c,dispose:b}}function F0(){let i=new WeakMap;function e(s){let a=i.get(s);return a===void 0&&(a={},i.set(s,a)),a}function t(s){i.delete(s)}function n(s,a,o){i.get(s)[a]=o}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function B0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Rc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Pc(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(d,p,h,_,g,m){let f=i[e];return f===void 0?(f={id:d.id,object:d,geometry:p,material:h,groupOrder:_,renderOrder:d.renderOrder,z:g,group:m},i[e]=f):(f.id=d.id,f.object=d,f.geometry=p,f.material=h,f.groupOrder=_,f.renderOrder=d.renderOrder,f.z=g,f.group=m),e++,f}function o(d,p,h,_,g,m){const f=a(d,p,h,_,g,m);h.transmission>0?n.push(f):h.transparent===!0?r.push(f):t.push(f)}function l(d,p,h,_,g,m){const f=a(d,p,h,_,g,m);h.transmission>0?n.unshift(f):h.transparent===!0?r.unshift(f):t.unshift(f)}function c(d,p){t.length>1&&t.sort(d||B0),n.length>1&&n.sort(p||Rc),r.length>1&&r.sort(p||Rc)}function u(){for(let d=e,p=i.length;d<p;d++){const h=i[d];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function z0(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new Pc,i.set(n,[a])):r>=s.length?(a=new Pc,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function G0(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new V,color:new Xe};break;case"SpotLight":t={position:new V,direction:new V,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new V,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new V,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":t={color:new Xe,position:new V,halfWidth:new V,halfHeight:new V};break}return i[e.id]=t,t}}}function k0(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let H0=0;function V0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function W0(i,e){const t=new G0,n=k0(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)r.probe.push(new V);const s=new V,a=new vt,o=new vt;function l(u,d){let p=0,h=0,_=0;for(let D=0;D<9;D++)r.probe[D].set(0,0,0);let g=0,m=0,f=0,x=0,v=0,y=0,M=0,w=0,E=0,b=0;u.sort(V0);const S=d===!0?Math.PI:1;for(let D=0,B=u.length;D<B;D++){const L=u[D],U=L.color,F=L.intensity,J=L.distance,O=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)p+=U.r*F*S,h+=U.g*F*S,_+=U.b*F*S;else if(L.isLightProbe)for(let N=0;N<9;N++)r.probe[N].addScaledVector(L.sh.coefficients[N],F);else if(L.isDirectionalLight){const N=t.get(L);if(N.color.copy(L.color).multiplyScalar(L.intensity*S),L.castShadow){const Y=L.shadow,K=n.get(L);K.shadowBias=Y.bias,K.shadowNormalBias=Y.normalBias,K.shadowRadius=Y.radius,K.shadowMapSize=Y.mapSize,r.directionalShadow[g]=K,r.directionalShadowMap[g]=O,r.directionalShadowMatrix[g]=L.shadow.matrix,y++}r.directional[g]=N,g++}else if(L.isSpotLight){const N=t.get(L);N.position.setFromMatrixPosition(L.matrixWorld),N.color.copy(U).multiplyScalar(F*S),N.distance=J,N.coneCos=Math.cos(L.angle),N.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),N.decay=L.decay,r.spot[f]=N;const Y=L.shadow;if(L.map&&(r.spotLightMap[E]=L.map,E++,Y.updateMatrices(L),L.castShadow&&b++),r.spotLightMatrix[f]=Y.matrix,L.castShadow){const K=n.get(L);K.shadowBias=Y.bias,K.shadowNormalBias=Y.normalBias,K.shadowRadius=Y.radius,K.shadowMapSize=Y.mapSize,r.spotShadow[f]=K,r.spotShadowMap[f]=O,w++}f++}else if(L.isRectAreaLight){const N=t.get(L);N.color.copy(U).multiplyScalar(F),N.halfWidth.set(L.width*.5,0,0),N.halfHeight.set(0,L.height*.5,0),r.rectArea[x]=N,x++}else if(L.isPointLight){const N=t.get(L);if(N.color.copy(L.color).multiplyScalar(L.intensity*S),N.distance=L.distance,N.decay=L.decay,L.castShadow){const Y=L.shadow,K=n.get(L);K.shadowBias=Y.bias,K.shadowNormalBias=Y.normalBias,K.shadowRadius=Y.radius,K.shadowMapSize=Y.mapSize,K.shadowCameraNear=Y.camera.near,K.shadowCameraFar=Y.camera.far,r.pointShadow[m]=K,r.pointShadowMap[m]=O,r.pointShadowMatrix[m]=L.shadow.matrix,M++}r.point[m]=N,m++}else if(L.isHemisphereLight){const N=t.get(L);N.skyColor.copy(L.color).multiplyScalar(F*S),N.groundColor.copy(L.groundColor).multiplyScalar(F*S),r.hemi[v]=N,v++}}x>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=oe.LTC_FLOAT_1,r.rectAreaLTC2=oe.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=oe.LTC_HALF_1,r.rectAreaLTC2=oe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=p,r.ambient[1]=h,r.ambient[2]=_;const T=r.hash;(T.directionalLength!==g||T.pointLength!==m||T.spotLength!==f||T.rectAreaLength!==x||T.hemiLength!==v||T.numDirectionalShadows!==y||T.numPointShadows!==M||T.numSpotShadows!==w||T.numSpotMaps!==E)&&(r.directional.length=g,r.spot.length=f,r.rectArea.length=x,r.point.length=m,r.hemi.length=v,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=M,r.pointShadowMap.length=M,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=M,r.spotLightMatrix.length=w+E-b,r.spotLightMap.length=E,r.numSpotLightShadowsWithMaps=b,T.directionalLength=g,T.pointLength=m,T.spotLength=f,T.rectAreaLength=x,T.hemiLength=v,T.numDirectionalShadows=y,T.numPointShadows=M,T.numSpotShadows=w,T.numSpotMaps=E,r.version=H0++)}function c(u,d){let p=0,h=0,_=0,g=0,m=0;const f=d.matrixWorldInverse;for(let x=0,v=u.length;x<v;x++){const y=u[x];if(y.isDirectionalLight){const M=r.directional[p];M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(f),p++}else if(y.isSpotLight){const M=r.spot[_];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(f),M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(f),_++}else if(y.isRectAreaLight){const M=r.rectArea[g];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(f),o.identity(),a.copy(y.matrixWorld),a.premultiply(f),o.extractRotation(a),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const M=r.point[h];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(f),h++}else if(y.isHemisphereLight){const M=r.hemi[m];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(f),m++}}}return{setup:l,setupView:c,state:r}}function Lc(i,e){const t=new W0(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function a(d){n.push(d)}function o(d){r.push(d)}function l(d){t.setup(n,d)}function c(d){t.setupView(n,d)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function X0(i,e){let t=new WeakMap;function n(s,a=0){const o=t.get(s);let l;return o===void 0?(l=new Lc(i,e),t.set(s,[l])):a>=o.length?(l=new Lc(i,e),o.push(l)):l=o[a],l}function r(){t=new WeakMap}return{get:n,dispose:r}}class q0 extends $s{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Y0 extends $s{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const j0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function K0(i,e,t){let n=new Vu;const r=new De,s=new De,a=new _t,o=new q0({depthPacking:Gp}),l=new Y0,c={},u=t.maxTextureSize,d={[ii]:Dt,[Dt]:ii,[Un]:Un},p=new Li({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new De},radius:{value:4}},vertexShader:j0,fragmentShader:$0}),h=p.clone();h.defines.HORIZONTAL_PASS=1;const _=new Ui;_.setAttribute("position",new Sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Nn(_,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Su;let f=this.type;this.render=function(M,w,E){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;const b=i.getRenderTarget(),S=i.getActiveCubeFace(),T=i.getActiveMipmapLevel(),D=i.state;D.setBlending(Jn),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const B=f!==Ln&&this.type===Ln,L=f===Ln&&this.type!==Ln;for(let U=0,F=M.length;U<F;U++){const J=M[U],O=J.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;r.copy(O.mapSize);const N=O.getFrameExtents();if(r.multiply(N),s.copy(O.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/N.x),r.x=s.x*N.x,O.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/N.y),r.y=s.y*N.y,O.mapSize.y=s.y)),O.map===null||B===!0||L===!0){const K=this.type!==Ln?{minFilter:wt,magFilter:wt}:{};O.map!==null&&O.map.dispose(),O.map=new Ri(r.x,r.y,K),O.map.texture.name=J.name+".shadowMap",O.camera.updateProjectionMatrix()}i.setRenderTarget(O.map),i.clear();const Y=O.getViewportCount();for(let K=0;K<Y;K++){const z=O.getViewport(K);a.set(s.x*z.x,s.y*z.y,s.x*z.z,s.y*z.w),D.viewport(a),O.updateMatrices(J,K),n=O.getFrustum(),y(w,E,O.camera,J,this.type)}O.isPointLightShadow!==!0&&this.type===Ln&&x(O,E),O.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(b,S,T)};function x(M,w){const E=e.update(g);p.defines.VSM_SAMPLES!==M.blurSamples&&(p.defines.VSM_SAMPLES=M.blurSamples,h.defines.VSM_SAMPLES=M.blurSamples,p.needsUpdate=!0,h.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new Ri(r.x,r.y)),p.uniforms.shadow_pass.value=M.map.texture,p.uniforms.resolution.value=M.mapSize,p.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(w,null,E,p,g,null),h.uniforms.shadow_pass.value=M.mapPass.texture,h.uniforms.resolution.value=M.mapSize,h.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(w,null,E,h,g,null)}function v(M,w,E,b){let S=null;const T=E.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(T!==void 0)S=T;else if(S=E.isPointLight===!0?l:o,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const D=S.uuid,B=w.uuid;let L=c[D];L===void 0&&(L={},c[D]=L);let U=L[B];U===void 0&&(U=S.clone(),L[B]=U),S=U}if(S.visible=w.visible,S.wireframe=w.wireframe,b===Ln?S.side=w.shadowSide!==null?w.shadowSide:w.side:S.side=w.shadowSide!==null?w.shadowSide:d[w.side],S.alphaMap=w.alphaMap,S.alphaTest=w.alphaTest,S.map=w.map,S.clipShadows=w.clipShadows,S.clippingPlanes=w.clippingPlanes,S.clipIntersection=w.clipIntersection,S.displacementMap=w.displacementMap,S.displacementScale=w.displacementScale,S.displacementBias=w.displacementBias,S.wireframeLinewidth=w.wireframeLinewidth,S.linewidth=w.linewidth,E.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const D=i.properties.get(S);D.light=E}return S}function y(M,w,E,b,S){if(M.visible===!1)return;if(M.layers.test(w.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&S===Ln)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,M.matrixWorld);const B=e.update(M),L=M.material;if(Array.isArray(L)){const U=B.groups;for(let F=0,J=U.length;F<J;F++){const O=U[F],N=L[O.materialIndex];if(N&&N.visible){const Y=v(M,N,b,S);i.renderBufferDirect(E,null,B,Y,M,O)}}}else if(L.visible){const U=v(M,L,b,S);i.renderBufferDirect(E,null,B,U,M,null)}}const D=M.children;for(let B=0,L=D.length;B<L;B++)y(D[B],w,E,b,S)}}function Z0(i,e,t){const n=t.isWebGL2;function r(){let I=!1;const ce=new _t;let W=null;const te=new _t(0,0,0,0);return{setMask:function(ue){W!==ue&&!I&&(i.colorMask(ue,ue,ue,ue),W=ue)},setLocked:function(ue){I=ue},setClear:function(ue,Ue,He,Ye,zn){zn===!0&&(ue*=Ye,Ue*=Ye,He*=Ye),ce.set(ue,Ue,He,Ye),te.equals(ce)===!1&&(i.clearColor(ue,Ue,He,Ye),te.copy(ce))},reset:function(){I=!1,W=null,te.set(-1,0,0,0)}}}function s(){let I=!1,ce=null,W=null,te=null;return{setTest:function(ue){ue?Te(i.DEPTH_TEST):_e(i.DEPTH_TEST)},setMask:function(ue){ce!==ue&&!I&&(i.depthMask(ue),ce=ue)},setFunc:function(ue){if(W!==ue){switch(ue){case mp:i.depthFunc(i.NEVER);break;case gp:i.depthFunc(i.ALWAYS);break;case _p:i.depthFunc(i.LESS);break;case eo:i.depthFunc(i.LEQUAL);break;case vp:i.depthFunc(i.EQUAL);break;case xp:i.depthFunc(i.GEQUAL);break;case Sp:i.depthFunc(i.GREATER);break;case Mp:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}W=ue}},setLocked:function(ue){I=ue},setClear:function(ue){te!==ue&&(i.clearDepth(ue),te=ue)},reset:function(){I=!1,ce=null,W=null,te=null}}}function a(){let I=!1,ce=null,W=null,te=null,ue=null,Ue=null,He=null,Ye=null,zn=null;return{setTest:function(je){I||(je?Te(i.STENCIL_TEST):_e(i.STENCIL_TEST))},setMask:function(je){ce!==je&&!I&&(i.stencilMask(je),ce=je)},setFunc:function(je,hn,Tt){(W!==je||te!==hn||ue!==Tt)&&(i.stencilFunc(je,hn,Tt),W=je,te=hn,ue=Tt)},setOp:function(je,hn,Tt){(Ue!==je||He!==hn||Ye!==Tt)&&(i.stencilOp(je,hn,Tt),Ue=je,He=hn,Ye=Tt)},setLocked:function(je){I=je},setClear:function(je){zn!==je&&(i.clearStencil(je),zn=je)},reset:function(){I=!1,ce=null,W=null,te=null,ue=null,Ue=null,He=null,Ye=null,zn=null}}}const o=new r,l=new s,c=new a,u=new WeakMap,d=new WeakMap;let p={},h={},_=new WeakMap,g=[],m=null,f=!1,x=null,v=null,y=null,M=null,w=null,E=null,b=null,S=!1,T=null,D=null,B=null,L=null,U=null;const F=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,O=0;const N=i.getParameter(i.VERSION);N.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(N)[1]),J=O>=1):N.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),J=O>=2);let Y=null,K={};const z=i.getParameter(i.SCISSOR_BOX),Z=i.getParameter(i.VIEWPORT),de=new _t().fromArray(z),se=new _t().fromArray(Z);function le(I,ce,W,te){const ue=new Uint8Array(4),Ue=i.createTexture();i.bindTexture(I,Ue),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let He=0;He<W;He++)n&&(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)?i.texImage3D(ce,0,i.RGBA,1,1,te,0,i.RGBA,i.UNSIGNED_BYTE,ue):i.texImage2D(ce+He,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ue);return Ue}const ge={};ge[i.TEXTURE_2D]=le(i.TEXTURE_2D,i.TEXTURE_2D,1),ge[i.TEXTURE_CUBE_MAP]=le(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(ge[i.TEXTURE_2D_ARRAY]=le(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ge[i.TEXTURE_3D]=le(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Te(i.DEPTH_TEST),l.setFunc(eo),Me(!1),qe(gl),Te(i.CULL_FACE),ve(Jn);function Te(I){p[I]!==!0&&(i.enable(I),p[I]=!0)}function _e(I){p[I]!==!1&&(i.disable(I),p[I]=!1)}function ke(I,ce){return h[I]!==ce?(i.bindFramebuffer(I,ce),h[I]=ce,n&&(I===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ce),I===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ce)),!0):!1}function mt(I,ce){let W=g,te=!1;if(I)if(W=_.get(ce),W===void 0&&(W=[],_.set(ce,W)),I.isWebGLMultipleRenderTargets){const ue=I.texture;if(W.length!==ue.length||W[0]!==i.COLOR_ATTACHMENT0){for(let Ue=0,He=ue.length;Ue<He;Ue++)W[Ue]=i.COLOR_ATTACHMENT0+Ue;W.length=ue.length,te=!0}}else W[0]!==i.COLOR_ATTACHMENT0&&(W[0]=i.COLOR_ATTACHMENT0,te=!0);else W[0]!==i.BACK&&(W[0]=i.BACK,te=!0);te&&(t.isWebGL2?i.drawBuffers(W):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(W))}function Ce(I){return m!==I?(i.useProgram(I),m=I,!0):!1}const H={[nr]:i.FUNC_ADD,[rp]:i.FUNC_SUBTRACT,[sp]:i.FUNC_REVERSE_SUBTRACT};if(n)H[Sl]=i.MIN,H[Ml]=i.MAX;else{const I=e.get("EXT_blend_minmax");I!==null&&(H[Sl]=I.MIN_EXT,H[Ml]=I.MAX_EXT)}const ot={[ap]:i.ZERO,[op]:i.ONE,[lp]:i.SRC_COLOR,[Mu]:i.SRC_ALPHA,[pp]:i.SRC_ALPHA_SATURATE,[fp]:i.DST_COLOR,[up]:i.DST_ALPHA,[cp]:i.ONE_MINUS_SRC_COLOR,[yu]:i.ONE_MINUS_SRC_ALPHA,[hp]:i.ONE_MINUS_DST_COLOR,[dp]:i.ONE_MINUS_DST_ALPHA};function ve(I,ce,W,te,ue,Ue,He,Ye){if(I===Jn){f===!0&&(_e(i.BLEND),f=!1);return}if(f===!1&&(Te(i.BLEND),f=!0),I!==ip){if(I!==x||Ye!==S){if((v!==nr||w!==nr)&&(i.blendEquation(i.FUNC_ADD),v=nr,w=nr),Ye)switch(I){case or:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case _l:i.blendFunc(i.ONE,i.ONE);break;case vl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case xl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case or:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case _l:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case vl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case xl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}y=null,M=null,E=null,b=null,x=I,S=Ye}return}ue=ue||ce,Ue=Ue||W,He=He||te,(ce!==v||ue!==w)&&(i.blendEquationSeparate(H[ce],H[ue]),v=ce,w=ue),(W!==y||te!==M||Ue!==E||He!==b)&&(i.blendFuncSeparate(ot[W],ot[te],ot[Ue],ot[He]),y=W,M=te,E=Ue,b=He),x=I,S=!1}function Ae(I,ce){I.side===Un?_e(i.CULL_FACE):Te(i.CULL_FACE);let W=I.side===Dt;ce&&(W=!W),Me(W),I.blending===or&&I.transparent===!1?ve(Jn):ve(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.premultipliedAlpha),l.setFunc(I.depthFunc),l.setTest(I.depthTest),l.setMask(I.depthWrite),o.setMask(I.colorWrite);const te=I.stencilWrite;c.setTest(te),te&&(c.setMask(I.stencilWriteMask),c.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),c.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),we(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Te(i.SAMPLE_ALPHA_TO_COVERAGE):_e(i.SAMPLE_ALPHA_TO_COVERAGE)}function Me(I){T!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),T=I)}function qe(I){I!==ep?(Te(i.CULL_FACE),I!==D&&(I===gl?i.cullFace(i.BACK):I===tp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):_e(i.CULL_FACE),D=I}function Ie(I){I!==B&&(J&&i.lineWidth(I),B=I)}function we(I,ce,W){I?(Te(i.POLYGON_OFFSET_FILL),(L!==ce||U!==W)&&(i.polygonOffset(ce,W),L=ce,U=W)):_e(i.POLYGON_OFFSET_FILL)}function Ge(I){I?Te(i.SCISSOR_TEST):_e(i.SCISSOR_TEST)}function lt(I){I===void 0&&(I=i.TEXTURE0+F-1),Y!==I&&(i.activeTexture(I),Y=I)}function dt(I,ce,W){W===void 0&&(Y===null?W=i.TEXTURE0+F-1:W=Y);let te=K[W];te===void 0&&(te={type:void 0,texture:void 0},K[W]=te),(te.type!==I||te.texture!==ce)&&(Y!==W&&(i.activeTexture(W),Y=W),i.bindTexture(I,ce||ge[I]),te.type=I,te.texture=ce)}function R(){const I=K[Y];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function A(){try{i.compressedTexImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function X(){try{i.compressedTexImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ne(){try{i.texSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ee(){try{i.texSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ie(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function me(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function re(){try{i.texStorage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function q(){try{i.texStorage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function P(){try{i.texImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Q(){try{i.texImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function he(I){de.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),de.copy(I))}function ae(I){se.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),se.copy(I))}function fe(I,ce){let W=d.get(ce);W===void 0&&(W=new WeakMap,d.set(ce,W));let te=W.get(I);te===void 0&&(te=i.getUniformBlockIndex(ce,I.name),W.set(I,te))}function be(I,ce){const te=d.get(ce).get(I);u.get(ce)!==te&&(i.uniformBlockBinding(ce,te,I.__bindingPointIndex),u.set(ce,te))}function Be(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),p={},Y=null,K={},h={},_=new WeakMap,g=[],m=null,f=!1,x=null,v=null,y=null,M=null,w=null,E=null,b=null,S=!1,T=null,D=null,B=null,L=null,U=null,de.set(0,0,i.canvas.width,i.canvas.height),se.set(0,0,i.canvas.width,i.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Te,disable:_e,bindFramebuffer:ke,drawBuffers:mt,useProgram:Ce,setBlending:ve,setMaterial:Ae,setFlipSided:Me,setCullFace:qe,setLineWidth:Ie,setPolygonOffset:we,setScissorTest:Ge,activeTexture:lt,bindTexture:dt,unbindTexture:R,compressedTexImage2D:A,compressedTexImage3D:X,texImage2D:P,texImage3D:Q,updateUBOMapping:fe,uniformBlockBinding:be,texStorage2D:re,texStorage3D:q,texSubImage2D:ne,texSubImage3D:ee,compressedTexSubImage2D:ie,compressedTexSubImage3D:me,scissor:he,viewport:ae,reset:Be}}function J0(i,e,t,n,r,s,a){const o=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,d=r.maxSamples,p=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let g;const m=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(R,A){return f?new OffscreenCanvas(R,A):Wr("canvas")}function v(R,A,X,ne){let ee=1;if((R.width>ne||R.height>ne)&&(ee=ne/Math.max(R.width,R.height)),ee<1||A===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const ie=A?oo:Math.floor,me=ie(ee*R.width),re=ie(ee*R.height);g===void 0&&(g=x(me,re));const q=X?x(me,re):g;return q.width=me,q.height=re,q.getContext("2d").drawImage(R,0,0,me,re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+me+"x"+re+")."),q}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function y(R){return jl(R.width)&&jl(R.height)}function M(R){return o?!1:R.wrapS!==dn||R.wrapT!==dn||R.minFilter!==wt&&R.minFilter!==en}function w(R,A){return R.generateMipmaps&&A&&R.minFilter!==wt&&R.minFilter!==en}function E(R){i.generateMipmap(R)}function b(R,A,X,ne,ee=!1){if(o===!1)return A;if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ie=A;return A===i.RED&&(X===i.FLOAT&&(ie=i.R32F),X===i.HALF_FLOAT&&(ie=i.R16F),X===i.UNSIGNED_BYTE&&(ie=i.R8)),A===i.RED_INTEGER&&(X===i.UNSIGNED_BYTE&&(ie=i.R8UI),X===i.UNSIGNED_SHORT&&(ie=i.R16UI),X===i.UNSIGNED_INT&&(ie=i.R32UI),X===i.BYTE&&(ie=i.R8I),X===i.SHORT&&(ie=i.R16I),X===i.INT&&(ie=i.R32I)),A===i.RG&&(X===i.FLOAT&&(ie=i.RG32F),X===i.HALF_FLOAT&&(ie=i.RG16F),X===i.UNSIGNED_BYTE&&(ie=i.RG8)),A===i.RGBA&&(X===i.FLOAT&&(ie=i.RGBA32F),X===i.HALF_FLOAT&&(ie=i.RGBA16F),X===i.UNSIGNED_BYTE&&(ie=ne===Le&&ee===!1?i.SRGB8_ALPHA8:i.RGBA8),X===i.UNSIGNED_SHORT_4_4_4_4&&(ie=i.RGBA4),X===i.UNSIGNED_SHORT_5_5_5_1&&(ie=i.RGB5_A1)),(ie===i.R16F||ie===i.R32F||ie===i.RG16F||ie===i.RG32F||ie===i.RGBA16F||ie===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function S(R,A,X){return w(R,X)===!0||R.isFramebufferTexture&&R.minFilter!==wt&&R.minFilter!==en?Math.log2(Math.max(A.width,A.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?A.mipmaps.length:1}function T(R){return R===wt||R===yl||R===ha?i.NEAREST:i.LINEAR}function D(R){const A=R.target;A.removeEventListener("dispose",D),L(A),A.isVideoTexture&&_.delete(A)}function B(R){const A=R.target;A.removeEventListener("dispose",B),F(A)}function L(R){const A=n.get(R);if(A.__webglInit===void 0)return;const X=R.source,ne=m.get(X);if(ne){const ee=ne[A.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&U(R),Object.keys(ne).length===0&&m.delete(X)}n.remove(R)}function U(R){const A=n.get(R);i.deleteTexture(A.__webglTexture);const X=R.source,ne=m.get(X);delete ne[A.__cacheKey],a.memory.textures--}function F(R){const A=R.texture,X=n.get(R),ne=n.get(A);if(ne.__webglTexture!==void 0&&(i.deleteTexture(ne.__webglTexture),a.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(X.__webglFramebuffer[ee]))for(let ie=0;ie<X.__webglFramebuffer[ee].length;ie++)i.deleteFramebuffer(X.__webglFramebuffer[ee][ie]);else i.deleteFramebuffer(X.__webglFramebuffer[ee]);X.__webglDepthbuffer&&i.deleteRenderbuffer(X.__webglDepthbuffer[ee])}else{if(Array.isArray(X.__webglFramebuffer))for(let ee=0;ee<X.__webglFramebuffer.length;ee++)i.deleteFramebuffer(X.__webglFramebuffer[ee]);else i.deleteFramebuffer(X.__webglFramebuffer);if(X.__webglDepthbuffer&&i.deleteRenderbuffer(X.__webglDepthbuffer),X.__webglMultisampledFramebuffer&&i.deleteFramebuffer(X.__webglMultisampledFramebuffer),X.__webglColorRenderbuffer)for(let ee=0;ee<X.__webglColorRenderbuffer.length;ee++)X.__webglColorRenderbuffer[ee]&&i.deleteRenderbuffer(X.__webglColorRenderbuffer[ee]);X.__webglDepthRenderbuffer&&i.deleteRenderbuffer(X.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let ee=0,ie=A.length;ee<ie;ee++){const me=n.get(A[ee]);me.__webglTexture&&(i.deleteTexture(me.__webglTexture),a.memory.textures--),n.remove(A[ee])}n.remove(A),n.remove(R)}let J=0;function O(){J=0}function N(){const R=J;return R>=l&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+l),J+=1,R}function Y(R){const A=[];return A.push(R.wrapS),A.push(R.wrapT),A.push(R.wrapR||0),A.push(R.magFilter),A.push(R.minFilter),A.push(R.anisotropy),A.push(R.internalFormat),A.push(R.format),A.push(R.type),A.push(R.generateMipmaps),A.push(R.premultiplyAlpha),A.push(R.flipY),A.push(R.unpackAlignment),A.push(R.colorSpace),A.join()}function K(R,A){const X=n.get(R);if(R.isVideoTexture&&lt(R),R.isRenderTargetTexture===!1&&R.version>0&&X.__version!==R.version){const ne=R.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ke(X,R,A);return}}t.bindTexture(i.TEXTURE_2D,X.__webglTexture,i.TEXTURE0+A)}function z(R,A){const X=n.get(R);if(R.version>0&&X.__version!==R.version){ke(X,R,A);return}t.bindTexture(i.TEXTURE_2D_ARRAY,X.__webglTexture,i.TEXTURE0+A)}function Z(R,A){const X=n.get(R);if(R.version>0&&X.__version!==R.version){ke(X,R,A);return}t.bindTexture(i.TEXTURE_3D,X.__webglTexture,i.TEXTURE0+A)}function de(R,A){const X=n.get(R);if(R.version>0&&X.__version!==R.version){mt(X,R,A);return}t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture,i.TEXTURE0+A)}const se={[io]:i.REPEAT,[dn]:i.CLAMP_TO_EDGE,[ro]:i.MIRRORED_REPEAT},le={[wt]:i.NEAREST,[yl]:i.NEAREST_MIPMAP_NEAREST,[ha]:i.NEAREST_MIPMAP_LINEAR,[en]:i.LINEAR,[Rp]:i.LINEAR_MIPMAP_NEAREST,[Hr]:i.LINEAR_MIPMAP_LINEAR},ge={[Wp]:i.NEVER,[Zp]:i.ALWAYS,[Xp]:i.LESS,[Yp]:i.LEQUAL,[qp]:i.EQUAL,[Kp]:i.GEQUAL,[jp]:i.GREATER,[$p]:i.NOTEQUAL};function Te(R,A,X){if(X?(i.texParameteri(R,i.TEXTURE_WRAP_S,se[A.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,se[A.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,se[A.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,le[A.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,le[A.minFilter])):(i.texParameteri(R,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(R,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(A.wrapS!==dn||A.wrapT!==dn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(R,i.TEXTURE_MAG_FILTER,T(A.magFilter)),i.texParameteri(R,i.TEXTURE_MIN_FILTER,T(A.minFilter)),A.minFilter!==wt&&A.minFilter!==en&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),A.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,ge[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ne=e.get("EXT_texture_filter_anisotropic");if(A.magFilter===wt||A.minFilter!==ha&&A.minFilter!==Hr||A.type===jn&&e.has("OES_texture_float_linear")===!1||o===!1&&A.type===Vr&&e.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||n.get(A).__currentAnisotropy)&&(i.texParameterf(R,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,r.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy)}}function _e(R,A){let X=!1;R.__webglInit===void 0&&(R.__webglInit=!0,A.addEventListener("dispose",D));const ne=A.source;let ee=m.get(ne);ee===void 0&&(ee={},m.set(ne,ee));const ie=Y(A);if(ie!==R.__cacheKey){ee[ie]===void 0&&(ee[ie]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,X=!0),ee[ie].usedTimes++;const me=ee[R.__cacheKey];me!==void 0&&(ee[R.__cacheKey].usedTimes--,me.usedTimes===0&&U(A)),R.__cacheKey=ie,R.__webglTexture=ee[ie].texture}return X}function ke(R,A,X){let ne=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(ne=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(ne=i.TEXTURE_3D);const ee=_e(R,A),ie=A.source;t.bindTexture(ne,R.__webglTexture,i.TEXTURE0+X);const me=n.get(ie);if(ie.version!==me.__version||ee===!0){t.activeTexture(i.TEXTURE0+X),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.NONE);const re=M(A)&&y(A.image)===!1;let q=v(A.image,re,!1,u);q=dt(A,q);const P=y(q)||o,Q=s.convert(A.format,A.colorSpace);let he=s.convert(A.type),ae=b(A.internalFormat,Q,he,A.colorSpace);Te(ne,A,P);let fe;const be=A.mipmaps,Be=o&&A.isVideoTexture!==!0,I=me.__version===void 0||ee===!0,ce=S(A,q,P);if(A.isDepthTexture)ae=i.DEPTH_COMPONENT,o?A.type===jn?ae=i.DEPTH_COMPONENT32F:A.type===Yn?ae=i.DEPTH_COMPONENT24:A.type===xi?ae=i.DEPTH24_STENCIL8:ae=i.DEPTH_COMPONENT16:A.type===jn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===Si&&ae===i.DEPTH_COMPONENT&&A.type!==Lo&&A.type!==Yn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=Yn,he=s.convert(A.type)),A.format===mr&&ae===i.DEPTH_COMPONENT&&(ae=i.DEPTH_STENCIL,A.type!==xi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=xi,he=s.convert(A.type))),I&&(Be?t.texStorage2D(i.TEXTURE_2D,1,ae,q.width,q.height):t.texImage2D(i.TEXTURE_2D,0,ae,q.width,q.height,0,Q,he,null));else if(A.isDataTexture)if(be.length>0&&P){Be&&I&&t.texStorage2D(i.TEXTURE_2D,ce,ae,be[0].width,be[0].height);for(let W=0,te=be.length;W<te;W++)fe=be[W],Be?t.texSubImage2D(i.TEXTURE_2D,W,0,0,fe.width,fe.height,Q,he,fe.data):t.texImage2D(i.TEXTURE_2D,W,ae,fe.width,fe.height,0,Q,he,fe.data);A.generateMipmaps=!1}else Be?(I&&t.texStorage2D(i.TEXTURE_2D,ce,ae,q.width,q.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,q.width,q.height,Q,he,q.data)):t.texImage2D(i.TEXTURE_2D,0,ae,q.width,q.height,0,Q,he,q.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Be&&I&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ce,ae,be[0].width,be[0].height,q.depth);for(let W=0,te=be.length;W<te;W++)fe=be[W],A.format!==fn?Q!==null?Be?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,fe.width,fe.height,q.depth,Q,fe.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,W,ae,fe.width,fe.height,q.depth,0,fe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?t.texSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,fe.width,fe.height,q.depth,Q,he,fe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,W,ae,fe.width,fe.height,q.depth,0,Q,he,fe.data)}else{Be&&I&&t.texStorage2D(i.TEXTURE_2D,ce,ae,be[0].width,be[0].height);for(let W=0,te=be.length;W<te;W++)fe=be[W],A.format!==fn?Q!==null?Be?t.compressedTexSubImage2D(i.TEXTURE_2D,W,0,0,fe.width,fe.height,Q,fe.data):t.compressedTexImage2D(i.TEXTURE_2D,W,ae,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?t.texSubImage2D(i.TEXTURE_2D,W,0,0,fe.width,fe.height,Q,he,fe.data):t.texImage2D(i.TEXTURE_2D,W,ae,fe.width,fe.height,0,Q,he,fe.data)}else if(A.isDataArrayTexture)Be?(I&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ce,ae,q.width,q.height,q.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,q.width,q.height,q.depth,Q,he,q.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,ae,q.width,q.height,q.depth,0,Q,he,q.data);else if(A.isData3DTexture)Be?(I&&t.texStorage3D(i.TEXTURE_3D,ce,ae,q.width,q.height,q.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,q.width,q.height,q.depth,Q,he,q.data)):t.texImage3D(i.TEXTURE_3D,0,ae,q.width,q.height,q.depth,0,Q,he,q.data);else if(A.isFramebufferTexture){if(I)if(Be)t.texStorage2D(i.TEXTURE_2D,ce,ae,q.width,q.height);else{let W=q.width,te=q.height;for(let ue=0;ue<ce;ue++)t.texImage2D(i.TEXTURE_2D,ue,ae,W,te,0,Q,he,null),W>>=1,te>>=1}}else if(be.length>0&&P){Be&&I&&t.texStorage2D(i.TEXTURE_2D,ce,ae,be[0].width,be[0].height);for(let W=0,te=be.length;W<te;W++)fe=be[W],Be?t.texSubImage2D(i.TEXTURE_2D,W,0,0,Q,he,fe):t.texImage2D(i.TEXTURE_2D,W,ae,Q,he,fe);A.generateMipmaps=!1}else Be?(I&&t.texStorage2D(i.TEXTURE_2D,ce,ae,q.width,q.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,Q,he,q)):t.texImage2D(i.TEXTURE_2D,0,ae,Q,he,q);w(A,P)&&E(ne),me.__version=ie.version,A.onUpdate&&A.onUpdate(A)}R.__version=A.version}function mt(R,A,X){if(A.image.length!==6)return;const ne=_e(R,A),ee=A.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+X);const ie=n.get(ee);if(ee.version!==ie.__version||ne===!0){t.activeTexture(i.TEXTURE0+X),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.NONE);const me=A.isCompressedTexture||A.image[0].isCompressedTexture,re=A.image[0]&&A.image[0].isDataTexture,q=[];for(let W=0;W<6;W++)!me&&!re?q[W]=v(A.image[W],!1,!0,c):q[W]=re?A.image[W].image:A.image[W],q[W]=dt(A,q[W]);const P=q[0],Q=y(P)||o,he=s.convert(A.format,A.colorSpace),ae=s.convert(A.type),fe=b(A.internalFormat,he,ae,A.colorSpace),be=o&&A.isVideoTexture!==!0,Be=ie.__version===void 0||ne===!0;let I=S(A,P,Q);Te(i.TEXTURE_CUBE_MAP,A,Q);let ce;if(me){be&&Be&&t.texStorage2D(i.TEXTURE_CUBE_MAP,I,fe,P.width,P.height);for(let W=0;W<6;W++){ce=q[W].mipmaps;for(let te=0;te<ce.length;te++){const ue=ce[te];A.format!==fn?he!==null?be?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,te,0,0,ue.width,ue.height,he,ue.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,te,fe,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):be?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,te,0,0,ue.width,ue.height,he,ae,ue.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,te,fe,ue.width,ue.height,0,he,ae,ue.data)}}}else{ce=A.mipmaps,be&&Be&&(ce.length>0&&I++,t.texStorage2D(i.TEXTURE_CUBE_MAP,I,fe,q[0].width,q[0].height));for(let W=0;W<6;W++)if(re){be?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,0,0,q[W].width,q[W].height,he,ae,q[W].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,fe,q[W].width,q[W].height,0,he,ae,q[W].data);for(let te=0;te<ce.length;te++){const Ue=ce[te].image[W].image;be?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,te+1,0,0,Ue.width,Ue.height,he,ae,Ue.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,te+1,fe,Ue.width,Ue.height,0,he,ae,Ue.data)}}else{be?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,0,0,he,ae,q[W]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,fe,he,ae,q[W]);for(let te=0;te<ce.length;te++){const ue=ce[te];be?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,te+1,0,0,he,ae,ue.image[W]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,te+1,fe,he,ae,ue.image[W])}}}w(A,Q)&&E(i.TEXTURE_CUBE_MAP),ie.__version=ee.version,A.onUpdate&&A.onUpdate(A)}R.__version=A.version}function Ce(R,A,X,ne,ee,ie){const me=s.convert(X.format,X.colorSpace),re=s.convert(X.type),q=b(X.internalFormat,me,re,X.colorSpace);if(!n.get(A).__hasExternalTextures){const Q=Math.max(1,A.width>>ie),he=Math.max(1,A.height>>ie);ee===i.TEXTURE_3D||ee===i.TEXTURE_2D_ARRAY?t.texImage3D(ee,ie,q,Q,he,A.depth,0,me,re,null):t.texImage2D(ee,ie,q,Q,he,0,me,re,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),Ge(A)?p.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ne,ee,n.get(X).__webglTexture,0,we(A)):(ee===i.TEXTURE_2D||ee>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ne,ee,n.get(X).__webglTexture,ie),t.bindFramebuffer(i.FRAMEBUFFER,null)}function H(R,A,X){if(i.bindRenderbuffer(i.RENDERBUFFER,R),A.depthBuffer&&!A.stencilBuffer){let ne=i.DEPTH_COMPONENT16;if(X||Ge(A)){const ee=A.depthTexture;ee&&ee.isDepthTexture&&(ee.type===jn?ne=i.DEPTH_COMPONENT32F:ee.type===Yn&&(ne=i.DEPTH_COMPONENT24));const ie=we(A);Ge(A)?p.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ie,ne,A.width,A.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,ie,ne,A.width,A.height)}else i.renderbufferStorage(i.RENDERBUFFER,ne,A.width,A.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,R)}else if(A.depthBuffer&&A.stencilBuffer){const ne=we(A);X&&Ge(A)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ne,i.DEPTH24_STENCIL8,A.width,A.height):Ge(A)?p.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ne,i.DEPTH24_STENCIL8,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,R)}else{const ne=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let ee=0;ee<ne.length;ee++){const ie=ne[ee],me=s.convert(ie.format,ie.colorSpace),re=s.convert(ie.type),q=b(ie.internalFormat,me,re,ie.colorSpace),P=we(A);X&&Ge(A)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,P,q,A.width,A.height):Ge(A)?p.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,P,q,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,q,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ot(R,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),K(A.depthTexture,0);const ne=n.get(A.depthTexture).__webglTexture,ee=we(A);if(A.depthTexture.format===Si)Ge(A)?p.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ne,0,ee):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ne,0);else if(A.depthTexture.format===mr)Ge(A)?p.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ne,0,ee):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function ve(R){const A=n.get(R),X=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!A.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");ot(A.__webglFramebuffer,R)}else if(X){A.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[ne]),A.__webglDepthbuffer[ne]=i.createRenderbuffer(),H(A.__webglDepthbuffer[ne],R,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=i.createRenderbuffer(),H(A.__webglDepthbuffer,R,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ae(R,A,X){const ne=n.get(R);A!==void 0&&Ce(ne.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),X!==void 0&&ve(R)}function Me(R){const A=R.texture,X=n.get(R),ne=n.get(A);R.addEventListener("dispose",B),R.isWebGLMultipleRenderTargets!==!0&&(ne.__webglTexture===void 0&&(ne.__webglTexture=i.createTexture()),ne.__version=A.version,a.memory.textures++);const ee=R.isWebGLCubeRenderTarget===!0,ie=R.isWebGLMultipleRenderTargets===!0,me=y(R)||o;if(ee){X.__webglFramebuffer=[];for(let re=0;re<6;re++)if(o&&A.mipmaps&&A.mipmaps.length>0){X.__webglFramebuffer[re]=[];for(let q=0;q<A.mipmaps.length;q++)X.__webglFramebuffer[re][q]=i.createFramebuffer()}else X.__webglFramebuffer[re]=i.createFramebuffer()}else{if(o&&A.mipmaps&&A.mipmaps.length>0){X.__webglFramebuffer=[];for(let re=0;re<A.mipmaps.length;re++)X.__webglFramebuffer[re]=i.createFramebuffer()}else X.__webglFramebuffer=i.createFramebuffer();if(ie)if(r.drawBuffers){const re=R.texture;for(let q=0,P=re.length;q<P;q++){const Q=n.get(re[q]);Q.__webglTexture===void 0&&(Q.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&R.samples>0&&Ge(R)===!1){const re=ie?A:[A];X.__webglMultisampledFramebuffer=i.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let q=0;q<re.length;q++){const P=re[q];X.__webglColorRenderbuffer[q]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,X.__webglColorRenderbuffer[q]);const Q=s.convert(P.format,P.colorSpace),he=s.convert(P.type),ae=b(P.internalFormat,Q,he,P.colorSpace,R.isXRRenderTarget===!0),fe=we(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,fe,ae,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+q,i.RENDERBUFFER,X.__webglColorRenderbuffer[q])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(X.__webglDepthRenderbuffer=i.createRenderbuffer(),H(X.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ee){t.bindTexture(i.TEXTURE_CUBE_MAP,ne.__webglTexture),Te(i.TEXTURE_CUBE_MAP,A,me);for(let re=0;re<6;re++)if(o&&A.mipmaps&&A.mipmaps.length>0)for(let q=0;q<A.mipmaps.length;q++)Ce(X.__webglFramebuffer[re][q],R,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+re,q);else Ce(X.__webglFramebuffer[re],R,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);w(A,me)&&E(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ie){const re=R.texture;for(let q=0,P=re.length;q<P;q++){const Q=re[q],he=n.get(Q);t.bindTexture(i.TEXTURE_2D,he.__webglTexture),Te(i.TEXTURE_2D,Q,me),Ce(X.__webglFramebuffer,R,Q,i.COLOR_ATTACHMENT0+q,i.TEXTURE_2D,0),w(Q,me)&&E(i.TEXTURE_2D)}t.unbindTexture()}else{let re=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(o?re=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(re,ne.__webglTexture),Te(re,A,me),o&&A.mipmaps&&A.mipmaps.length>0)for(let q=0;q<A.mipmaps.length;q++)Ce(X.__webglFramebuffer[q],R,A,i.COLOR_ATTACHMENT0,re,q);else Ce(X.__webglFramebuffer,R,A,i.COLOR_ATTACHMENT0,re,0);w(A,me)&&E(re),t.unbindTexture()}R.depthBuffer&&ve(R)}function qe(R){const A=y(R)||o,X=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let ne=0,ee=X.length;ne<ee;ne++){const ie=X[ne];if(w(ie,A)){const me=R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,re=n.get(ie).__webglTexture;t.bindTexture(me,re),E(me),t.unbindTexture()}}}function Ie(R){if(o&&R.samples>0&&Ge(R)===!1){const A=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],X=R.width,ne=R.height;let ee=i.COLOR_BUFFER_BIT;const ie=[],me=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=n.get(R),q=R.isWebGLMultipleRenderTargets===!0;if(q)for(let P=0;P<A.length;P++)t.bindFramebuffer(i.FRAMEBUFFER,re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+P,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+P,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,re.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,re.__webglFramebuffer);for(let P=0;P<A.length;P++){ie.push(i.COLOR_ATTACHMENT0+P),R.depthBuffer&&ie.push(me);const Q=re.__ignoreDepthValues!==void 0?re.__ignoreDepthValues:!1;if(Q===!1&&(R.depthBuffer&&(ee|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&(ee|=i.STENCIL_BUFFER_BIT)),q&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,re.__webglColorRenderbuffer[P]),Q===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[me]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[me])),q){const he=n.get(A[P]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,he,0)}i.blitFramebuffer(0,0,X,ne,0,0,X,ne,ee,i.NEAREST),h&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ie)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),q)for(let P=0;P<A.length;P++){t.bindFramebuffer(i.FRAMEBUFFER,re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+P,i.RENDERBUFFER,re.__webglColorRenderbuffer[P]);const Q=n.get(A[P]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+P,i.TEXTURE_2D,Q,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,re.__webglMultisampledFramebuffer)}}function we(R){return Math.min(d,R.samples)}function Ge(R){const A=n.get(R);return o&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function lt(R){const A=a.render.frame;_.get(R)!==A&&(_.set(R,A),R.update())}function dt(R,A){const X=R.colorSpace,ne=R.format,ee=R.type;return R.isCompressedTexture===!0||R.format===so||X!==Mn&&X!==yi&&(X===Le?o===!1?e.has("EXT_sRGB")===!0&&ne===fn?(R.format=so,R.minFilter=en,R.generateMipmaps=!1):A=Uu.sRGBToLinear(A):(ne!==fn||ee!==ei)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),A}this.allocateTextureUnit=N,this.resetTextureUnits=O,this.setTexture2D=K,this.setTexture2DArray=z,this.setTexture3D=Z,this.setTextureCube=de,this.rebindTextures=Ae,this.setupRenderTarget=Me,this.updateRenderTargetMipmap=qe,this.updateMultisampleRenderTarget=Ie,this.setupDepthRenderbuffer=ve,this.setupFrameBufferTexture=Ce,this.useMultisampledRTT=Ge}function Q0(i,e,t){const n=t.isWebGL2;function r(s,a=yi){let o;if(s===ei)return i.UNSIGNED_BYTE;if(s===Au)return i.UNSIGNED_SHORT_4_4_4_4;if(s===wu)return i.UNSIGNED_SHORT_5_5_5_1;if(s===Pp)return i.BYTE;if(s===Lp)return i.SHORT;if(s===Lo)return i.UNSIGNED_SHORT;if(s===bu)return i.INT;if(s===Yn)return i.UNSIGNED_INT;if(s===jn)return i.FLOAT;if(s===Vr)return n?i.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Dp)return i.ALPHA;if(s===fn)return i.RGBA;if(s===Ip)return i.LUMINANCE;if(s===Up)return i.LUMINANCE_ALPHA;if(s===Si)return i.DEPTH_COMPONENT;if(s===mr)return i.DEPTH_STENCIL;if(s===so)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===Op)return i.RED;if(s===Cu)return i.RED_INTEGER;if(s===Np)return i.RG;if(s===Ru)return i.RG_INTEGER;if(s===Pu)return i.RGBA_INTEGER;if(s===pa||s===ma||s===ga||s===_a)if(a===Le)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===pa)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ma)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===ga)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===_a)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===pa)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ma)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===ga)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===_a)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===El||s===Tl||s===bl||s===Al)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===El)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Tl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===bl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Al)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Fp)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===wl||s===Cl)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===wl)return a===Le?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Cl)return a===Le?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Rl||s===Pl||s===Ll||s===Dl||s===Il||s===Ul||s===Ol||s===Nl||s===Fl||s===Bl||s===zl||s===Gl||s===kl||s===Hl)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===Rl)return a===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Pl)return a===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Ll)return a===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Dl)return a===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Il)return a===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Ul)return a===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Ol)return a===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Nl)return a===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Fl)return a===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Bl)return a===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===zl)return a===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Gl)return a===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===kl)return a===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Hl)return a===Le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===va)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===va)return a===Le?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===Bp||s===Vl||s===Wl||s===Xl)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===va)return o.COMPRESSED_RED_RGTC1_EXT;if(s===Vl)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Wl)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Xl)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===xi?n?i.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class ex extends tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ir extends Ut{constructor(){super(),this.isGroup=!0,this.type="Group"}}const tx={type:"move"};class ka{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ir,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ir,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ir,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,n),f=this._getHandJoint(c,g);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],p=u.position.distanceTo(d.position),h=.02,_=.005;c.inputState.pinching&&p>h+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=h-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(tx)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ir;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class nx extends It{constructor(e,t,n,r,s,a,o,l,c,u){if(u=u!==void 0?u:Si,u!==Si&&u!==mr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Si&&(n=Yn),n===void 0&&u===mr&&(n=xi),super(null,r,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:wt,this.minFilter=l!==void 0?l:wt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class ix extends Ii{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,p=null,h=null,_=null;const g=t.getContextAttributes();let m=null,f=null;const x=[],v=[],y=new tn;y.layers.enable(1),y.viewport=new _t;const M=new tn;M.layers.enable(2),M.viewport=new _t;const w=[y,M],E=new ex;E.layers.enable(1),E.layers.enable(2);let b=null,S=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let Z=x[z];return Z===void 0&&(Z=new ka,x[z]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(z){let Z=x[z];return Z===void 0&&(Z=new ka,x[z]=Z),Z.getGripSpace()},this.getHand=function(z){let Z=x[z];return Z===void 0&&(Z=new ka,x[z]=Z),Z.getHandSpace()};function T(z){const Z=v.indexOf(z.inputSource);if(Z===-1)return;const de=x[Z];de!==void 0&&(de.update(z.inputSource,z.frame,c||a),de.dispatchEvent({type:z.type,data:z.inputSource}))}function D(){r.removeEventListener("select",T),r.removeEventListener("selectstart",T),r.removeEventListener("selectend",T),r.removeEventListener("squeeze",T),r.removeEventListener("squeezestart",T),r.removeEventListener("squeezeend",T),r.removeEventListener("end",D),r.removeEventListener("inputsourceschange",B);for(let z=0;z<x.length;z++){const Z=v[z];Z!==null&&(v[z]=null,x[z].disconnect(Z))}b=null,S=null,e.setRenderTarget(m),h=null,p=null,d=null,r=null,f=null,K.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){s=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){o=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(z){c=z},this.getBaseLayer=function(){return p!==null?p:h},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(z){if(r=z,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",T),r.addEventListener("selectstart",T),r.addEventListener("selectend",T),r.addEventListener("squeeze",T),r.addEventListener("squeezestart",T),r.addEventListener("squeezeend",T),r.addEventListener("end",D),r.addEventListener("inputsourceschange",B),g.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Z={antialias:r.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,Z),r.updateRenderState({baseLayer:h}),f=new Ri(h.framebufferWidth,h.framebufferHeight,{format:fn,type:ei,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let Z=null,de=null,se=null;g.depth&&(se=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Z=g.stencil?mr:Si,de=g.stencil?xi:Yn);const le={colorFormat:t.RGBA8,depthFormat:se,scaleFactor:s};d=new XRWebGLBinding(r,t),p=d.createProjectionLayer(le),r.updateRenderState({layers:[p]}),f=new Ri(p.textureWidth,p.textureHeight,{format:fn,type:ei,depthTexture:new nx(p.textureWidth,p.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});const ge=e.properties.get(f);ge.__ignoreDepthValues=p.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),K.setContext(r),K.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function B(z){for(let Z=0;Z<z.removed.length;Z++){const de=z.removed[Z],se=v.indexOf(de);se>=0&&(v[se]=null,x[se].disconnect(de))}for(let Z=0;Z<z.added.length;Z++){const de=z.added[Z];let se=v.indexOf(de);if(se===-1){for(let ge=0;ge<x.length;ge++)if(ge>=v.length){v.push(de),se=ge;break}else if(v[ge]===null){v[ge]=de,se=ge;break}if(se===-1)break}const le=x[se];le&&le.connect(de)}}const L=new V,U=new V;function F(z,Z,de){L.setFromMatrixPosition(Z.matrixWorld),U.setFromMatrixPosition(de.matrixWorld);const se=L.distanceTo(U),le=Z.projectionMatrix.elements,ge=de.projectionMatrix.elements,Te=le[14]/(le[10]-1),_e=le[14]/(le[10]+1),ke=(le[9]+1)/le[5],mt=(le[9]-1)/le[5],Ce=(le[8]-1)/le[0],H=(ge[8]+1)/ge[0],ot=Te*Ce,ve=Te*H,Ae=se/(-Ce+H),Me=Ae*-Ce;Z.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(Me),z.translateZ(Ae),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert();const qe=Te+Ae,Ie=_e+Ae,we=ot-Me,Ge=ve+(se-Me),lt=ke*_e/Ie*qe,dt=mt*_e/Ie*qe;z.projectionMatrix.makePerspective(we,Ge,lt,dt,qe,Ie),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}function J(z,Z){Z===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(Z.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(r===null)return;E.near=M.near=y.near=z.near,E.far=M.far=y.far=z.far,(b!==E.near||S!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),b=E.near,S=E.far);const Z=z.parent,de=E.cameras;J(E,Z);for(let se=0;se<de.length;se++)J(de[se],Z);de.length===2?F(E,y,M):E.projectionMatrix.copy(y.projectionMatrix),O(z,E,Z)};function O(z,Z,de){de===null?z.matrix.copy(Z.matrixWorld):(z.matrix.copy(de.matrixWorld),z.matrix.invert(),z.matrix.multiply(Z.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0);const se=z.children;for(let le=0,ge=se.length;le<ge;le++)se[le].updateMatrixWorld(!0);z.projectionMatrix.copy(Z.projectionMatrix),z.projectionMatrixInverse.copy(Z.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=ao*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(p===null&&h===null))return l},this.setFoveation=function(z){l=z,p!==null&&(p.fixedFoveation=z),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=z)};let N=null;function Y(z,Z){if(u=Z.getViewerPose(c||a),_=Z,u!==null){const de=u.views;h!==null&&(e.setRenderTargetFramebuffer(f,h.framebuffer),e.setRenderTarget(f));let se=!1;de.length!==E.cameras.length&&(E.cameras.length=0,se=!0);for(let le=0;le<de.length;le++){const ge=de[le];let Te=null;if(h!==null)Te=h.getViewport(ge);else{const ke=d.getViewSubImage(p,ge);Te=ke.viewport,le===0&&(e.setRenderTargetTextures(f,ke.colorTexture,p.ignoreDepthValues?void 0:ke.depthStencilTexture),e.setRenderTarget(f))}let _e=w[le];_e===void 0&&(_e=new tn,_e.layers.enable(le),_e.viewport=new _t,w[le]=_e),_e.matrix.fromArray(ge.transform.matrix),_e.matrix.decompose(_e.position,_e.quaternion,_e.scale),_e.projectionMatrix.fromArray(ge.projectionMatrix),_e.projectionMatrixInverse.copy(_e.projectionMatrix).invert(),_e.viewport.set(Te.x,Te.y,Te.width,Te.height),le===0&&(E.matrix.copy(_e.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),se===!0&&E.cameras.push(_e)}}for(let de=0;de<x.length;de++){const se=v[de],le=x[de];se!==null&&le!==void 0&&le.update(se,Z,c||a)}N&&N(z,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),_=null}const K=new Wu;K.setAnimationLoop(Y),this.setAnimationLoop=function(z){N=z},this.dispose=function(){}}}function rx(i,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Gu(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,x,v,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),d(m,f)):f.isMeshPhongMaterial?(s(m,f),u(m,f)):f.isMeshStandardMaterial?(s(m,f),p(m,f),f.isMeshPhysicalMaterial&&h(m,f,y)):f.isMeshMatcapMaterial?(s(m,f),_(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),g(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,x,v):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Dt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Dt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const x=e.get(f).envMap;if(x&&(m.envMap.value=x,m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const v=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*v,t(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,x,v){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*x,m.scale.value=v*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function p(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),e.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function h(m,f,x){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Dt&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,f){f.matcap&&(m.matcap.value=f.matcap)}function g(m,f){const x=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function sx(i,e,t,n){let r={},s={},a=[];const o=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(x,v){const y=v.program;n.uniformBlockBinding(x,y)}function c(x,v){let y=r[x.id];y===void 0&&(_(x),y=u(x),r[x.id]=y,x.addEventListener("dispose",m));const M=v.program;n.updateUBOMapping(x,M);const w=e.render.frame;s[x.id]!==w&&(p(x),s[x.id]=w)}function u(x){const v=d();x.__bindingPointIndex=v;const y=i.createBuffer(),M=x.__size,w=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,M,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,y),y}function d(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(x){const v=r[x.id],y=x.uniforms,M=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let w=0,E=y.length;w<E;w++){const b=y[w];if(h(b,w,M)===!0){const S=b.__offset,T=Array.isArray(b.value)?b.value:[b.value];let D=0;for(let B=0;B<T.length;B++){const L=T[B],U=g(L);typeof L=="number"?(b.__data[0]=L,i.bufferSubData(i.UNIFORM_BUFFER,S+D,b.__data)):L.isMatrix3?(b.__data[0]=L.elements[0],b.__data[1]=L.elements[1],b.__data[2]=L.elements[2],b.__data[3]=L.elements[0],b.__data[4]=L.elements[3],b.__data[5]=L.elements[4],b.__data[6]=L.elements[5],b.__data[7]=L.elements[0],b.__data[8]=L.elements[6],b.__data[9]=L.elements[7],b.__data[10]=L.elements[8],b.__data[11]=L.elements[0]):(L.toArray(b.__data,D),D+=U.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,S,b.__data)}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(x,v,y){const M=x.value;if(y[v]===void 0){if(typeof M=="number")y[v]=M;else{const w=Array.isArray(M)?M:[M],E=[];for(let b=0;b<w.length;b++)E.push(w[b].clone());y[v]=E}return!0}else if(typeof M=="number"){if(y[v]!==M)return y[v]=M,!0}else{const w=Array.isArray(y[v])?y[v]:[y[v]],E=Array.isArray(M)?M:[M];for(let b=0;b<w.length;b++){const S=w[b];if(S.equals(E[b])===!1)return S.copy(E[b]),!0}}return!1}function _(x){const v=x.uniforms;let y=0;const M=16;let w=0;for(let E=0,b=v.length;E<b;E++){const S=v[E],T={boundary:0,storage:0},D=Array.isArray(S.value)?S.value:[S.value];for(let B=0,L=D.length;B<L;B++){const U=D[B],F=g(U);T.boundary+=F.boundary,T.storage+=F.storage}if(S.__data=new Float32Array(T.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=y,E>0){w=y%M;const B=M-w;w!==0&&B-T.boundary<0&&(y+=M-w,S.__offset=y)}y+=T.storage}return w=y%M,w>0&&(y+=M-w),x.__size=y,x.__cache={},this}function g(x){const v={boundary:0,storage:0};return typeof x=="number"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function m(x){const v=x.target;v.removeEventListener("dispose",m);const y=a.indexOf(v.__bindingPointIndex);a.splice(y,1),i.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function f(){for(const x in r)i.deleteBuffer(r[x]);a=[],r={},s={}}return{bind:l,update:c,dispose:f}}function ax(){const i=Wr("canvas");return i.style.display="block",i}class $u{constructor(e={}){const{canvas:t=ax(),context:n=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let p;n!==null?p=n.getContextAttributes().alpha:p=a;const h=new Uint32Array(4),_=new Int32Array(4);let g=null,m=null;const f=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Le,this._useLegacyLights=!1,this.toneMapping=Qn,this.toneMappingExposure=1;const v=this;let y=!1,M=0,w=0,E=null,b=-1,S=null;const T=new _t,D=new _t;let B=null;const L=new Xe(0);let U=0,F=t.width,J=t.height,O=1,N=null,Y=null;const K=new _t(0,0,F,J),z=new _t(0,0,F,J);let Z=!1;const de=new Vu;let se=!1,le=!1,ge=null;const Te=new vt,_e=new De,ke=new V,mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ce(){return E===null?O:1}let H=n;function ot(C,k){for(let $=0;$<C.length;$++){const G=C[$],j=t.getContext(G,k);if(j!==null)return j}return null}try{const C={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Po}`),t.addEventListener("webglcontextlost",ce,!1),t.addEventListener("webglcontextrestored",W,!1),t.addEventListener("webglcontextcreationerror",te,!1),H===null){const k=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&k.shift(),H=ot(k,C),H===null)throw ot(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&H instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),H.getShaderPrecisionFormat===void 0&&(H.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let ve,Ae,Me,qe,Ie,we,Ge,lt,dt,R,A,X,ne,ee,ie,me,re,q,P,Q,he,ae,fe,be;function Be(){ve=new gv(H),Ae=new cv(H,ve,e),ve.init(Ae),ae=new Q0(H,ve,Ae),Me=new Z0(H,ve,Ae),qe=new xv(H),Ie=new F0,we=new J0(H,ve,Me,Ie,Ae,ae,qe),Ge=new dv(v),lt=new mv(v),dt=new Cm(H,Ae),fe=new ov(H,ve,dt,Ae),R=new _v(H,dt,qe,fe),A=new Ev(H,R,dt,qe),P=new yv(H,Ae,we),me=new uv(Ie),X=new N0(v,Ge,lt,ve,Ae,fe,me),ne=new rx(v,Ie),ee=new z0,ie=new X0(ve,Ae),q=new av(v,Ge,lt,Me,A,p,l),re=new K0(v,A,Ae),be=new sx(H,qe,Ae,Me),Q=new lv(H,ve,qe,Ae),he=new vv(H,ve,qe,Ae),qe.programs=X.programs,v.capabilities=Ae,v.extensions=ve,v.properties=Ie,v.renderLists=ee,v.shadowMap=re,v.state=Me,v.info=qe}Be();const I=new ix(v,H);this.xr=I,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const C=ve.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=ve.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(C){C!==void 0&&(O=C,this.setSize(F,J,!1))},this.getSize=function(C){return C.set(F,J)},this.setSize=function(C,k,$=!0){if(I.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=C,J=k,t.width=Math.floor(C*O),t.height=Math.floor(k*O),$===!0&&(t.style.width=C+"px",t.style.height=k+"px"),this.setViewport(0,0,C,k)},this.getDrawingBufferSize=function(C){return C.set(F*O,J*O).floor()},this.setDrawingBufferSize=function(C,k,$){F=C,J=k,O=$,t.width=Math.floor(C*$),t.height=Math.floor(k*$),this.setViewport(0,0,C,k)},this.getCurrentViewport=function(C){return C.copy(T)},this.getViewport=function(C){return C.copy(K)},this.setViewport=function(C,k,$,G){C.isVector4?K.set(C.x,C.y,C.z,C.w):K.set(C,k,$,G),Me.viewport(T.copy(K).multiplyScalar(O).floor())},this.getScissor=function(C){return C.copy(z)},this.setScissor=function(C,k,$,G){C.isVector4?z.set(C.x,C.y,C.z,C.w):z.set(C,k,$,G),Me.scissor(D.copy(z).multiplyScalar(O).floor())},this.getScissorTest=function(){return Z},this.setScissorTest=function(C){Me.setScissorTest(Z=C)},this.setOpaqueSort=function(C){N=C},this.setTransparentSort=function(C){Y=C},this.getClearColor=function(C){return C.copy(q.getClearColor())},this.setClearColor=function(){q.setClearColor.apply(q,arguments)},this.getClearAlpha=function(){return q.getClearAlpha()},this.setClearAlpha=function(){q.setClearAlpha.apply(q,arguments)},this.clear=function(C=!0,k=!0,$=!0){let G=0;if(C){let j=!1;if(E!==null){const pe=E.texture.format;j=pe===Pu||pe===Ru||pe===Cu}if(j){const pe=E.texture.type,xe=pe===ei||pe===Yn||pe===Lo||pe===xi||pe===Au||pe===wu,ye=q.getClearColor(),Ee=q.getClearAlpha(),Ne=ye.r,Se=ye.g,Re=ye.b;xe?(h[0]=Ne,h[1]=Se,h[2]=Re,h[3]=Ee,H.clearBufferuiv(H.COLOR,0,h)):(_[0]=Ne,_[1]=Se,_[2]=Re,_[3]=Ee,H.clearBufferiv(H.COLOR,0,_))}else G|=H.COLOR_BUFFER_BIT}k&&(G|=H.DEPTH_BUFFER_BIT),$&&(G|=H.STENCIL_BUFFER_BIT),H.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ce,!1),t.removeEventListener("webglcontextrestored",W,!1),t.removeEventListener("webglcontextcreationerror",te,!1),ee.dispose(),ie.dispose(),Ie.dispose(),Ge.dispose(),lt.dispose(),A.dispose(),fe.dispose(),be.dispose(),X.dispose(),I.dispose(),I.removeEventListener("sessionstart",je),I.removeEventListener("sessionend",hn),ge&&(ge.dispose(),ge=null),Tt.stop()};function ce(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function W(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const C=qe.autoReset,k=re.enabled,$=re.autoUpdate,G=re.needsUpdate,j=re.type;Be(),qe.autoReset=C,re.enabled=k,re.autoUpdate=$,re.needsUpdate=G,re.type=j}function te(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ue(C){const k=C.target;k.removeEventListener("dispose",ue),Ue(k)}function Ue(C){He(C),Ie.remove(C)}function He(C){const k=Ie.get(C).programs;k!==void 0&&(k.forEach(function($){X.releaseProgram($)}),C.isShaderMaterial&&X.releaseShaderCache(C))}this.renderBufferDirect=function(C,k,$,G,j,pe){k===null&&(k=mt);const xe=j.isMesh&&j.matrixWorld.determinant()<0,ye=Zd(C,k,$,G,j);Me.setMaterial(G,xe);let Ee=$.index,Ne=1;if(G.wireframe===!0){if(Ee=R.getWireframeAttribute($),Ee===void 0)return;Ne=2}const Se=$.drawRange,Re=$.attributes.position;let Je=Se.start*Ne,et=(Se.start+Se.count)*Ne;pe!==null&&(Je=Math.max(Je,pe.start*Ne),et=Math.min(et,(pe.start+pe.count)*Ne)),Ee!==null?(Je=Math.max(Je,0),et=Math.min(et,Ee.count)):Re!=null&&(Je=Math.max(Je,0),et=Math.min(et,Re.count));const Kt=et-Je;if(Kt<0||Kt===1/0)return;fe.setup(j,G,ye,$,Ee);let En,nt=Q;if(Ee!==null&&(En=dt.get(Ee),nt=he,nt.setIndex(En)),j.isMesh)G.wireframe===!0?(Me.setLineWidth(G.wireframeLinewidth*Ce()),nt.setMode(H.LINES)):nt.setMode(H.TRIANGLES);else if(j.isLine){let Fe=G.linewidth;Fe===void 0&&(Fe=1),Me.setLineWidth(Fe*Ce()),j.isLineSegments?nt.setMode(H.LINES):j.isLineLoop?nt.setMode(H.LINE_LOOP):nt.setMode(H.LINE_STRIP)}else j.isPoints?nt.setMode(H.POINTS):j.isSprite&&nt.setMode(H.TRIANGLES);if(j.isInstancedMesh)nt.renderInstances(Je,Kt,j.count);else if($.isInstancedBufferGeometry){const Fe=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,ta=Math.min($.instanceCount,Fe);nt.renderInstances(Je,Kt,ta)}else nt.render(Je,Kt)},this.compile=function(C,k){function $(G,j,pe){G.transparent===!0&&G.side===Un&&G.forceSinglePass===!1?(G.side=Dt,G.needsUpdate=!0,is(G,j,pe),G.side=ii,G.needsUpdate=!0,is(G,j,pe),G.side=Un):is(G,j,pe)}m=ie.get(C),m.init(),x.push(m),C.traverseVisible(function(G){G.isLight&&G.layers.test(k.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),m.setupLights(v._useLegacyLights),C.traverse(function(G){const j=G.material;if(j)if(Array.isArray(j))for(let pe=0;pe<j.length;pe++){const xe=j[pe];$(xe,C,G)}else $(j,C,G)}),x.pop(),m=null};let Ye=null;function zn(C){Ye&&Ye(C)}function je(){Tt.stop()}function hn(){Tt.start()}const Tt=new Wu;Tt.setAnimationLoop(zn),typeof self<"u"&&Tt.setContext(self),this.setAnimationLoop=function(C){Ye=C,I.setAnimationLoop(C),C===null?Tt.stop():Tt.start()},I.addEventListener("sessionstart",je),I.addEventListener("sessionend",hn),this.render=function(C,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),I.enabled===!0&&I.isPresenting===!0&&(I.cameraAutoUpdate===!0&&I.updateCamera(k),k=I.getCamera()),C.isScene===!0&&C.onBeforeRender(v,C,k,E),m=ie.get(C,x.length),m.init(),x.push(m),Te.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),de.setFromProjectionMatrix(Te),le=this.localClippingEnabled,se=me.init(this.clippingPlanes,le),g=ee.get(C,f.length),g.init(),f.push(g),nl(C,k,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(N,Y),this.info.render.frame++,se===!0&&me.beginShadows();const $=m.state.shadowsArray;if(re.render($,C,k),se===!0&&me.endShadows(),this.info.autoReset===!0&&this.info.reset(),q.render(g,C),m.setupLights(v._useLegacyLights),k.isArrayCamera){const G=k.cameras;for(let j=0,pe=G.length;j<pe;j++){const xe=G[j];il(g,C,xe,xe.viewport)}}else il(g,C,k);E!==null&&(we.updateMultisampleRenderTarget(E),we.updateRenderTargetMipmap(E)),C.isScene===!0&&C.onAfterRender(v,C,k),fe.resetDefaultState(),b=-1,S=null,x.pop(),x.length>0?m=x[x.length-1]:m=null,f.pop(),f.length>0?g=f[f.length-1]:g=null};function nl(C,k,$,G){if(C.visible===!1)return;if(C.layers.test(k.layers)){if(C.isGroup)$=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(k);else if(C.isLight)m.pushLight(C),C.castShadow&&m.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||de.intersectsSprite(C)){G&&ke.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Te);const xe=A.update(C),ye=C.material;ye.visible&&g.push(C,xe,ye,$,ke.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||de.intersectsObject(C))){const xe=A.update(C),ye=C.material;if(G&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),ke.copy(C.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),ke.copy(xe.boundingSphere.center)),ke.applyMatrix4(C.matrixWorld).applyMatrix4(Te)),Array.isArray(ye)){const Ee=xe.groups;for(let Ne=0,Se=Ee.length;Ne<Se;Ne++){const Re=Ee[Ne],Je=ye[Re.materialIndex];Je&&Je.visible&&g.push(C,xe,Je,$,ke.z,Re)}}else ye.visible&&g.push(C,xe,ye,$,ke.z,null)}}const pe=C.children;for(let xe=0,ye=pe.length;xe<ye;xe++)nl(pe[xe],k,$,G)}function il(C,k,$,G){const j=C.opaque,pe=C.transmissive,xe=C.transparent;m.setupLightsView($),se===!0&&me.setGlobalState(v.clippingPlanes,$),pe.length>0&&Kd(j,pe,k,$),G&&Me.viewport(T.copy(G)),j.length>0&&ns(j,k,$),pe.length>0&&ns(pe,k,$),xe.length>0&&ns(xe,k,$),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function Kd(C,k,$,G){const j=Ae.isWebGL2;ge===null&&(ge=new Ri(1,1,{generateMipmaps:!0,type:ve.has("EXT_color_buffer_half_float")?Vr:ei,minFilter:Hr,samples:j?4:0})),v.getDrawingBufferSize(_e),j?ge.setSize(_e.x,_e.y):ge.setSize(oo(_e.x),oo(_e.y));const pe=v.getRenderTarget();v.setRenderTarget(ge),v.getClearColor(L),U=v.getClearAlpha(),U<1&&v.setClearColor(16777215,.5),v.clear();const xe=v.toneMapping;v.toneMapping=Qn,ns(C,$,G),we.updateMultisampleRenderTarget(ge),we.updateRenderTargetMipmap(ge);let ye=!1;for(let Ee=0,Ne=k.length;Ee<Ne;Ee++){const Se=k[Ee],Re=Se.object,Je=Se.geometry,et=Se.material,Kt=Se.group;if(et.side===Un&&Re.layers.test(G.layers)){const En=et.side;et.side=Dt,et.needsUpdate=!0,rl(Re,$,G,Je,et,Kt),et.side=En,et.needsUpdate=!0,ye=!0}}ye===!0&&(we.updateMultisampleRenderTarget(ge),we.updateRenderTargetMipmap(ge)),v.setRenderTarget(pe),v.setClearColor(L,U),v.toneMapping=xe}function ns(C,k,$){const G=k.isScene===!0?k.overrideMaterial:null;for(let j=0,pe=C.length;j<pe;j++){const xe=C[j],ye=xe.object,Ee=xe.geometry,Ne=G===null?xe.material:G,Se=xe.group;ye.layers.test($.layers)&&rl(ye,k,$,Ee,Ne,Se)}}function rl(C,k,$,G,j,pe){C.onBeforeRender(v,k,$,G,j,pe),C.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),j.onBeforeRender(v,k,$,G,C,pe),j.transparent===!0&&j.side===Un&&j.forceSinglePass===!1?(j.side=Dt,j.needsUpdate=!0,v.renderBufferDirect($,k,G,j,C,pe),j.side=ii,j.needsUpdate=!0,v.renderBufferDirect($,k,G,j,C,pe),j.side=Un):v.renderBufferDirect($,k,G,j,C,pe),C.onAfterRender(v,k,$,G,j,pe)}function is(C,k,$){k.isScene!==!0&&(k=mt);const G=Ie.get(C),j=m.state.lights,pe=m.state.shadowsArray,xe=j.state.version,ye=X.getParameters(C,j.state,pe,k,$),Ee=X.getProgramCacheKey(ye);let Ne=G.programs;G.environment=C.isMeshStandardMaterial?k.environment:null,G.fog=k.fog,G.envMap=(C.isMeshStandardMaterial?lt:Ge).get(C.envMap||G.environment),Ne===void 0&&(C.addEventListener("dispose",ue),Ne=new Map,G.programs=Ne);let Se=Ne.get(Ee);if(Se!==void 0){if(G.currentProgram===Se&&G.lightsStateVersion===xe)return sl(C,ye),Se}else ye.uniforms=X.getUniforms(C),C.onBuild($,ye,v),C.onBeforeCompile(ye,v),Se=X.acquireProgram(ye,Ee),Ne.set(Ee,Se),G.uniforms=ye.uniforms;const Re=G.uniforms;(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Re.clippingPlanes=me.uniform),sl(C,ye),G.needsLights=Qd(C),G.lightsStateVersion=xe,G.needsLights&&(Re.ambientLightColor.value=j.state.ambient,Re.lightProbe.value=j.state.probe,Re.directionalLights.value=j.state.directional,Re.directionalLightShadows.value=j.state.directionalShadow,Re.spotLights.value=j.state.spot,Re.spotLightShadows.value=j.state.spotShadow,Re.rectAreaLights.value=j.state.rectArea,Re.ltc_1.value=j.state.rectAreaLTC1,Re.ltc_2.value=j.state.rectAreaLTC2,Re.pointLights.value=j.state.point,Re.pointLightShadows.value=j.state.pointShadow,Re.hemisphereLights.value=j.state.hemi,Re.directionalShadowMap.value=j.state.directionalShadowMap,Re.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Re.spotShadowMap.value=j.state.spotShadowMap,Re.spotLightMatrix.value=j.state.spotLightMatrix,Re.spotLightMap.value=j.state.spotLightMap,Re.pointShadowMap.value=j.state.pointShadowMap,Re.pointShadowMatrix.value=j.state.pointShadowMatrix);const Je=Se.getUniforms(),et=Ps.seqWithValue(Je.seq,Re);return G.currentProgram=Se,G.uniformsList=et,Se}function sl(C,k){const $=Ie.get(C);$.outputColorSpace=k.outputColorSpace,$.instancing=k.instancing,$.instancingColor=k.instancingColor,$.skinning=k.skinning,$.morphTargets=k.morphTargets,$.morphNormals=k.morphNormals,$.morphColors=k.morphColors,$.morphTargetsCount=k.morphTargetsCount,$.numClippingPlanes=k.numClippingPlanes,$.numIntersection=k.numClipIntersection,$.vertexAlphas=k.vertexAlphas,$.vertexTangents=k.vertexTangents,$.toneMapping=k.toneMapping}function Zd(C,k,$,G,j){k.isScene!==!0&&(k=mt),we.resetTextureUnits();const pe=k.fog,xe=G.isMeshStandardMaterial?k.environment:null,ye=E===null?v.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:Mn,Ee=(G.isMeshStandardMaterial?lt:Ge).get(G.envMap||xe),Ne=G.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Se=!!$.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Re=!!$.morphAttributes.position,Je=!!$.morphAttributes.normal,et=!!$.morphAttributes.color;let Kt=Qn;G.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(Kt=v.toneMapping);const En=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,nt=En!==void 0?En.length:0,Fe=Ie.get(G),ta=m.state.lights;if(se===!0&&(le===!0||C!==S)){const Gt=C===S&&G.id===b;me.setState(G,C,Gt)}let it=!1;G.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==ta.state.version||Fe.outputColorSpace!==ye||j.isInstancedMesh&&Fe.instancing===!1||!j.isInstancedMesh&&Fe.instancing===!0||j.isSkinnedMesh&&Fe.skinning===!1||!j.isSkinnedMesh&&Fe.skinning===!0||j.isInstancedMesh&&Fe.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Fe.instancingColor===!1&&j.instanceColor!==null||Fe.envMap!==Ee||G.fog===!0&&Fe.fog!==pe||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==me.numPlanes||Fe.numIntersection!==me.numIntersection)||Fe.vertexAlphas!==Ne||Fe.vertexTangents!==Se||Fe.morphTargets!==Re||Fe.morphNormals!==Je||Fe.morphColors!==et||Fe.toneMapping!==Kt||Ae.isWebGL2===!0&&Fe.morphTargetsCount!==nt)&&(it=!0):(it=!0,Fe.__version=G.version);let oi=Fe.currentProgram;it===!0&&(oi=is(G,k,j));let al=!1,Tr=!1,na=!1;const bt=oi.getUniforms(),li=Fe.uniforms;if(Me.useProgram(oi.program)&&(al=!0,Tr=!0,na=!0),G.id!==b&&(b=G.id,Tr=!0),al||S!==C){if(bt.setValue(H,"projectionMatrix",C.projectionMatrix),Ae.logarithmicDepthBuffer&&bt.setValue(H,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),S!==C&&(S=C,Tr=!0,na=!0),G.isShaderMaterial||G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshStandardMaterial||G.envMap){const Gt=bt.map.cameraPosition;Gt!==void 0&&Gt.setValue(H,ke.setFromMatrixPosition(C.matrixWorld))}(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&bt.setValue(H,"isOrthographic",C.isOrthographicCamera===!0),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial||G.isShadowMaterial||j.isSkinnedMesh)&&bt.setValue(H,"viewMatrix",C.matrixWorldInverse)}if(j.isSkinnedMesh){bt.setOptional(H,j,"bindMatrix"),bt.setOptional(H,j,"bindMatrixInverse");const Gt=j.skeleton;Gt&&(Ae.floatVertexTextures?(Gt.boneTexture===null&&Gt.computeBoneTexture(),bt.setValue(H,"boneTexture",Gt.boneTexture,we),bt.setValue(H,"boneTextureSize",Gt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const ia=$.morphAttributes;if((ia.position!==void 0||ia.normal!==void 0||ia.color!==void 0&&Ae.isWebGL2===!0)&&P.update(j,$,oi),(Tr||Fe.receiveShadow!==j.receiveShadow)&&(Fe.receiveShadow=j.receiveShadow,bt.setValue(H,"receiveShadow",j.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(li.envMap.value=Ee,li.flipEnvMap.value=Ee.isCubeTexture&&Ee.isRenderTargetTexture===!1?-1:1),Tr&&(bt.setValue(H,"toneMappingExposure",v.toneMappingExposure),Fe.needsLights&&Jd(li,na),pe&&G.fog===!0&&ne.refreshFogUniforms(li,pe),ne.refreshMaterialUniforms(li,G,O,J,ge),Ps.upload(H,Fe.uniformsList,li,we)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Ps.upload(H,Fe.uniformsList,li,we),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&bt.setValue(H,"center",j.center),bt.setValue(H,"modelViewMatrix",j.modelViewMatrix),bt.setValue(H,"normalMatrix",j.normalMatrix),bt.setValue(H,"modelMatrix",j.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Gt=G.uniformsGroups;for(let ra=0,ef=Gt.length;ra<ef;ra++)if(Ae.isWebGL2){const ol=Gt[ra];be.update(ol,oi),be.bind(ol,oi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return oi}function Jd(C,k){C.ambientLightColor.needsUpdate=k,C.lightProbe.needsUpdate=k,C.directionalLights.needsUpdate=k,C.directionalLightShadows.needsUpdate=k,C.pointLights.needsUpdate=k,C.pointLightShadows.needsUpdate=k,C.spotLights.needsUpdate=k,C.spotLightShadows.needsUpdate=k,C.rectAreaLights.needsUpdate=k,C.hemisphereLights.needsUpdate=k}function Qd(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(C,k,$){Ie.get(C.texture).__webglTexture=k,Ie.get(C.depthTexture).__webglTexture=$;const G=Ie.get(C);G.__hasExternalTextures=!0,G.__hasExternalTextures&&(G.__autoAllocateDepthBuffer=$===void 0,G.__autoAllocateDepthBuffer||ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,k){const $=Ie.get(C);$.__webglFramebuffer=k,$.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(C,k=0,$=0){E=C,M=k,w=$;let G=!0,j=null,pe=!1,xe=!1;if(C){const Ee=Ie.get(C);Ee.__useDefaultFramebuffer!==void 0?(Me.bindFramebuffer(H.FRAMEBUFFER,null),G=!1):Ee.__webglFramebuffer===void 0?we.setupRenderTarget(C):Ee.__hasExternalTextures&&we.rebindTextures(C,Ie.get(C.texture).__webglTexture,Ie.get(C.depthTexture).__webglTexture);const Ne=C.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(xe=!0);const Se=Ie.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Se[k])?j=Se[k][$]:j=Se[k],pe=!0):Ae.isWebGL2&&C.samples>0&&we.useMultisampledRTT(C)===!1?j=Ie.get(C).__webglMultisampledFramebuffer:Array.isArray(Se)?j=Se[$]:j=Se,T.copy(C.viewport),D.copy(C.scissor),B=C.scissorTest}else T.copy(K).multiplyScalar(O).floor(),D.copy(z).multiplyScalar(O).floor(),B=Z;if(Me.bindFramebuffer(H.FRAMEBUFFER,j)&&Ae.drawBuffers&&G&&Me.drawBuffers(C,j),Me.viewport(T),Me.scissor(D),Me.setScissorTest(B),pe){const Ee=Ie.get(C.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ee.__webglTexture,$)}else if(xe){const Ee=Ie.get(C.texture),Ne=k||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ee.__webglTexture,$||0,Ne)}b=-1},this.readRenderTargetPixels=function(C,k,$,G,j,pe,xe){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=Ie.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&xe!==void 0&&(ye=ye[xe]),ye){Me.bindFramebuffer(H.FRAMEBUFFER,ye);try{const Ee=C.texture,Ne=Ee.format,Se=Ee.type;if(Ne!==fn&&ae.convert(Ne)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Re=Se===Vr&&(ve.has("EXT_color_buffer_half_float")||Ae.isWebGL2&&ve.has("EXT_color_buffer_float"));if(Se!==ei&&ae.convert(Se)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Se===jn&&(Ae.isWebGL2||ve.has("OES_texture_float")||ve.has("WEBGL_color_buffer_float")))&&!Re){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=C.width-G&&$>=0&&$<=C.height-j&&H.readPixels(k,$,G,j,ae.convert(Ne),ae.convert(Se),pe)}finally{const Ee=E!==null?Ie.get(E).__webglFramebuffer:null;Me.bindFramebuffer(H.FRAMEBUFFER,Ee)}}},this.copyFramebufferToTexture=function(C,k,$=0){const G=Math.pow(2,-$),j=Math.floor(k.image.width*G),pe=Math.floor(k.image.height*G);we.setTexture2D(k,0),H.copyTexSubImage2D(H.TEXTURE_2D,$,0,0,C.x,C.y,j,pe),Me.unbindTexture()},this.copyTextureToTexture=function(C,k,$,G=0){const j=k.image.width,pe=k.image.height,xe=ae.convert($.format),ye=ae.convert($.type);we.setTexture2D($,0),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,$.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,$.unpackAlignment),k.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,G,C.x,C.y,j,pe,xe,ye,k.image.data):k.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,G,C.x,C.y,k.mipmaps[0].width,k.mipmaps[0].height,xe,k.mipmaps[0].data):H.texSubImage2D(H.TEXTURE_2D,G,C.x,C.y,xe,ye,k.image),G===0&&$.generateMipmaps&&H.generateMipmap(H.TEXTURE_2D),Me.unbindTexture()},this.copyTextureToTexture3D=function(C,k,$,G,j=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const pe=C.max.x-C.min.x+1,xe=C.max.y-C.min.y+1,ye=C.max.z-C.min.z+1,Ee=ae.convert(G.format),Ne=ae.convert(G.type);let Se;if(G.isData3DTexture)we.setTexture3D(G,0),Se=H.TEXTURE_3D;else if(G.isDataArrayTexture)we.setTexture2DArray(G,0),Se=H.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,G.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,G.unpackAlignment);const Re=H.getParameter(H.UNPACK_ROW_LENGTH),Je=H.getParameter(H.UNPACK_IMAGE_HEIGHT),et=H.getParameter(H.UNPACK_SKIP_PIXELS),Kt=H.getParameter(H.UNPACK_SKIP_ROWS),En=H.getParameter(H.UNPACK_SKIP_IMAGES),nt=$.isCompressedTexture?$.mipmaps[0]:$.image;H.pixelStorei(H.UNPACK_ROW_LENGTH,nt.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,nt.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,C.min.x),H.pixelStorei(H.UNPACK_SKIP_ROWS,C.min.y),H.pixelStorei(H.UNPACK_SKIP_IMAGES,C.min.z),$.isDataTexture||$.isData3DTexture?H.texSubImage3D(Se,j,k.x,k.y,k.z,pe,xe,ye,Ee,Ne,nt.data):$.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),H.compressedTexSubImage3D(Se,j,k.x,k.y,k.z,pe,xe,ye,Ee,nt.data)):H.texSubImage3D(Se,j,k.x,k.y,k.z,pe,xe,ye,Ee,Ne,nt),H.pixelStorei(H.UNPACK_ROW_LENGTH,Re),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Je),H.pixelStorei(H.UNPACK_SKIP_PIXELS,et),H.pixelStorei(H.UNPACK_SKIP_ROWS,Kt),H.pixelStorei(H.UNPACK_SKIP_IMAGES,En),j===0&&G.generateMipmaps&&H.generateMipmap(Se),Me.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?we.setTextureCube(C,0):C.isData3DTexture?we.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?we.setTexture2DArray(C,0):we.setTexture2D(C,0),Me.unbindTexture()},this.resetState=function(){M=0,w=0,E=null,Me.reset(),fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return On}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Le?Mi:Lu}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Mi?Le:Mn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class ox extends $u{}ox.prototype.isWebGL1Renderer=!0;class lx extends Ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}const Dc={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class cx{constructor(e,t,n){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,p=c.length;d<p;d+=2){const h=c[d],_=c[d+1];if(h.global&&(h.lastIndex=0),h.test(u))return _}return null}}}const ux=new cx;class Fo{constructor(e){this.manager=e!==void 0?e:ux,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Fo.DEFAULT_MATERIAL_NAME="__DEFAULT";class dx extends Fo{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Dc.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=Wr("img");function l(){u(),Dc.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(d){u(),r&&r(d),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class fx extends Fo{constructor(e){super(e)}load(e,t,n,r){const s=new It,a=new dx(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class hx extends Ut{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Xe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class px extends hx{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class mx{constructor(e,t,n=0,r=1/0){this.ray=new Io(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Uo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return co(e,this,n,t),n.sort(Ic),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)co(e[r],this,n,t);return n.sort(Ic),n}}function Ic(i,e){return i.distance-e.distance}function co(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){const r=i.children;for(let s=0,a=r.length;s<a;s++)co(r[s],e,t,!0)}}class Uc{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Ct(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Po}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Po);const Oc={type:"change"},Ha={type:"start"},Nc={type:"end"},As=new Io,Fc=new Wn,gx=Math.cos(70*Qp.DEG2RAD);class _x extends Ii{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new V,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Fi.ROTATE,MIDDLE:Fi.DOLLY,RIGHT:Fi.PAN},this.touches={ONE:Bi.ROTATE,TWO:Bi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(P){P.addEventListener("keydown",A),this._domElementKeyEvents=P},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",A),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Oc),n.update(),s=r.NONE},this.update=function(){const P=new V,Q=new Pi().setFromUnitVectors(e.up,new V(0,1,0)),he=Q.clone().invert(),ae=new V,fe=new Pi,be=new V,Be=2*Math.PI;return function(){const ce=n.object.position;P.copy(ce).sub(n.target),P.applyQuaternion(Q),o.setFromVector3(P),n.autoRotate&&s===r.NONE&&D(S()),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let W=n.minAzimuthAngle,te=n.maxAzimuthAngle;isFinite(W)&&isFinite(te)&&(W<-Math.PI?W+=Be:W>Math.PI&&(W-=Be),te<-Math.PI?te+=Be:te>Math.PI&&(te-=Be),W<=te?o.theta=Math.max(W,Math.min(te,o.theta)):o.theta=o.theta>(W+te)/2?Math.max(W,o.theta):Math.min(te,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.zoomToCursor&&w||n.object.isOrthographicCamera?o.radius=Y(o.radius):o.radius=Y(o.radius*c),P.setFromSpherical(o),P.applyQuaternion(he),ce.copy(n.target).add(P),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0));let ue=!1;if(n.zoomToCursor&&w){let Ue=null;if(n.object.isPerspectiveCamera){const He=P.length();Ue=Y(He*c);const Ye=He-Ue;n.object.position.addScaledVector(y,Ye),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const He=new V(M.x,M.y,0);He.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),ue=!0;const Ye=new V(M.x,M.y,0);Ye.unproject(n.object),n.object.position.sub(Ye).add(He),n.object.updateMatrixWorld(),Ue=P.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Ue!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Ue).add(n.object.position):(As.origin.copy(n.object.position),As.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(As.direction))<gx?e.lookAt(n.target):(Fc.setFromNormalAndCoplanarPoint(n.object.up,n.target),As.intersectPlane(Fc,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),ue=!0);return c=1,w=!1,ue||ae.distanceToSquared(n.object.position)>a||8*(1-fe.dot(n.object.quaternion))>a||be.distanceToSquared(n.target)>0?(n.dispatchEvent(Oc),ae.copy(n.object.position),fe.copy(n.object.quaternion),be.copy(n.target),ue=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",ee),n.domElement.removeEventListener("pointerdown",Ie),n.domElement.removeEventListener("pointercancel",Ge),n.domElement.removeEventListener("wheel",R),n.domElement.removeEventListener("pointermove",we),n.domElement.removeEventListener("pointerup",Ge),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",A),n._domElementKeyEvents=null)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const a=1e-6,o=new Uc,l=new Uc;let c=1;const u=new V,d=new De,p=new De,h=new De,_=new De,g=new De,m=new De,f=new De,x=new De,v=new De,y=new V,M=new De;let w=!1;const E=[],b={};function S(){return 2*Math.PI/60/60*n.autoRotateSpeed}function T(){return Math.pow(.95,n.zoomSpeed)}function D(P){l.theta-=P}function B(P){l.phi-=P}const L=function(){const P=new V;return function(he,ae){P.setFromMatrixColumn(ae,0),P.multiplyScalar(-he),u.add(P)}}(),U=function(){const P=new V;return function(he,ae){n.screenSpacePanning===!0?P.setFromMatrixColumn(ae,1):(P.setFromMatrixColumn(ae,0),P.crossVectors(n.object.up,P)),P.multiplyScalar(he),u.add(P)}}(),F=function(){const P=new V;return function(he,ae){const fe=n.domElement;if(n.object.isPerspectiveCamera){const be=n.object.position;P.copy(be).sub(n.target);let Be=P.length();Be*=Math.tan(n.object.fov/2*Math.PI/180),L(2*he*Be/fe.clientHeight,n.object.matrix),U(2*ae*Be/fe.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(L(he*(n.object.right-n.object.left)/n.object.zoom/fe.clientWidth,n.object.matrix),U(ae*(n.object.top-n.object.bottom)/n.object.zoom/fe.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function J(P){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=P:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function O(P){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=P:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function N(P){if(!n.zoomToCursor)return;w=!0;const Q=n.domElement.getBoundingClientRect(),he=P.clientX-Q.left,ae=P.clientY-Q.top,fe=Q.width,be=Q.height;M.x=he/fe*2-1,M.y=-(ae/be)*2+1,y.set(M.x,M.y,1).unproject(e).sub(e.position).normalize()}function Y(P){return Math.max(n.minDistance,Math.min(n.maxDistance,P))}function K(P){d.set(P.clientX,P.clientY)}function z(P){N(P),f.set(P.clientX,P.clientY)}function Z(P){_.set(P.clientX,P.clientY)}function de(P){p.set(P.clientX,P.clientY),h.subVectors(p,d).multiplyScalar(n.rotateSpeed);const Q=n.domElement;D(2*Math.PI*h.x/Q.clientHeight),B(2*Math.PI*h.y/Q.clientHeight),d.copy(p),n.update()}function se(P){x.set(P.clientX,P.clientY),v.subVectors(x,f),v.y>0?J(T()):v.y<0&&O(T()),f.copy(x),n.update()}function le(P){g.set(P.clientX,P.clientY),m.subVectors(g,_).multiplyScalar(n.panSpeed),F(m.x,m.y),_.copy(g),n.update()}function ge(P){N(P),P.deltaY<0?O(T()):P.deltaY>0&&J(T()),n.update()}function Te(P){let Q=!1;switch(P.code){case n.keys.UP:P.ctrlKey||P.metaKey||P.shiftKey?B(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(0,n.keyPanSpeed),Q=!0;break;case n.keys.BOTTOM:P.ctrlKey||P.metaKey||P.shiftKey?B(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(0,-n.keyPanSpeed),Q=!0;break;case n.keys.LEFT:P.ctrlKey||P.metaKey||P.shiftKey?D(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(n.keyPanSpeed,0),Q=!0;break;case n.keys.RIGHT:P.ctrlKey||P.metaKey||P.shiftKey?D(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(-n.keyPanSpeed,0),Q=!0;break}Q&&(P.preventDefault(),n.update())}function _e(){if(E.length===1)d.set(E[0].pageX,E[0].pageY);else{const P=.5*(E[0].pageX+E[1].pageX),Q=.5*(E[0].pageY+E[1].pageY);d.set(P,Q)}}function ke(){if(E.length===1)_.set(E[0].pageX,E[0].pageY);else{const P=.5*(E[0].pageX+E[1].pageX),Q=.5*(E[0].pageY+E[1].pageY);_.set(P,Q)}}function mt(){const P=E[0].pageX-E[1].pageX,Q=E[0].pageY-E[1].pageY,he=Math.sqrt(P*P+Q*Q);f.set(0,he)}function Ce(){n.enableZoom&&mt(),n.enablePan&&ke()}function H(){n.enableZoom&&mt(),n.enableRotate&&_e()}function ot(P){if(E.length==1)p.set(P.pageX,P.pageY);else{const he=q(P),ae=.5*(P.pageX+he.x),fe=.5*(P.pageY+he.y);p.set(ae,fe)}h.subVectors(p,d).multiplyScalar(n.rotateSpeed);const Q=n.domElement;D(2*Math.PI*h.x/Q.clientHeight),B(2*Math.PI*h.y/Q.clientHeight),d.copy(p)}function ve(P){if(E.length===1)g.set(P.pageX,P.pageY);else{const Q=q(P),he=.5*(P.pageX+Q.x),ae=.5*(P.pageY+Q.y);g.set(he,ae)}m.subVectors(g,_).multiplyScalar(n.panSpeed),F(m.x,m.y),_.copy(g)}function Ae(P){const Q=q(P),he=P.pageX-Q.x,ae=P.pageY-Q.y,fe=Math.sqrt(he*he+ae*ae);x.set(0,fe),v.set(0,Math.pow(x.y/f.y,n.zoomSpeed)),J(v.y),f.copy(x)}function Me(P){n.enableZoom&&Ae(P),n.enablePan&&ve(P)}function qe(P){n.enableZoom&&Ae(P),n.enableRotate&&ot(P)}function Ie(P){n.enabled!==!1&&(E.length===0&&(n.domElement.setPointerCapture(P.pointerId),n.domElement.addEventListener("pointermove",we),n.domElement.addEventListener("pointerup",Ge)),ie(P),P.pointerType==="touch"?X(P):lt(P))}function we(P){n.enabled!==!1&&(P.pointerType==="touch"?ne(P):dt(P))}function Ge(P){me(P),E.length===0&&(n.domElement.releasePointerCapture(P.pointerId),n.domElement.removeEventListener("pointermove",we),n.domElement.removeEventListener("pointerup",Ge)),n.dispatchEvent(Nc),s=r.NONE}function lt(P){let Q;switch(P.button){case 0:Q=n.mouseButtons.LEFT;break;case 1:Q=n.mouseButtons.MIDDLE;break;case 2:Q=n.mouseButtons.RIGHT;break;default:Q=-1}switch(Q){case Fi.DOLLY:if(n.enableZoom===!1)return;z(P),s=r.DOLLY;break;case Fi.ROTATE:if(P.ctrlKey||P.metaKey||P.shiftKey){if(n.enablePan===!1)return;Z(P),s=r.PAN}else{if(n.enableRotate===!1)return;K(P),s=r.ROTATE}break;case Fi.PAN:if(P.ctrlKey||P.metaKey||P.shiftKey){if(n.enableRotate===!1)return;K(P),s=r.ROTATE}else{if(n.enablePan===!1)return;Z(P),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(Ha)}function dt(P){switch(s){case r.ROTATE:if(n.enableRotate===!1)return;de(P);break;case r.DOLLY:if(n.enableZoom===!1)return;se(P);break;case r.PAN:if(n.enablePan===!1)return;le(P);break}}function R(P){n.enabled===!1||n.enableZoom===!1||s!==r.NONE||(P.preventDefault(),n.dispatchEvent(Ha),ge(P),n.dispatchEvent(Nc))}function A(P){n.enabled===!1||n.enablePan===!1||Te(P)}function X(P){switch(re(P),E.length){case 1:switch(n.touches.ONE){case Bi.ROTATE:if(n.enableRotate===!1)return;_e(),s=r.TOUCH_ROTATE;break;case Bi.PAN:if(n.enablePan===!1)return;ke(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(n.touches.TWO){case Bi.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ce(),s=r.TOUCH_DOLLY_PAN;break;case Bi.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;H(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(Ha)}function ne(P){switch(re(P),s){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;ot(P),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;ve(P),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Me(P),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;qe(P),n.update();break;default:s=r.NONE}}function ee(P){n.enabled!==!1&&P.preventDefault()}function ie(P){E.push(P)}function me(P){delete b[P.pointerId];for(let Q=0;Q<E.length;Q++)if(E[Q].pointerId==P.pointerId){E.splice(Q,1);return}}function re(P){let Q=b[P.pointerId];Q===void 0&&(Q=new De,b[P.pointerId]=Q),Q.set(P.pageX,P.pageY)}function q(P){const Q=P.pointerId===E[0].pointerId?E[1]:E[0];return b[Q.pointerId]}n.domElement.addEventListener("contextmenu",ee),n.domElement.addEventListener("pointerdown",Ie),n.domElement.addEventListener("pointercancel",Ge),n.domElement.addEventListener("wheel",R,{passive:!1}),this.update()}}function Dn(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function Ku(i,e){i.prototype=Object.create(e.prototype),i.prototype.constructor=i,i.__proto__=e}/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Yt={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},_r={duration:.5,overwrite:!1,delay:0},Bo,xt,$e,nn=1e8,We=1/nn,uo=Math.PI*2,vx=uo/4,xx=0,Zu=Math.sqrt,Sx=Math.cos,Mx=Math.sin,pt=function(e){return typeof e=="string"},Qe=function(e){return typeof e=="function"},Fn=function(e){return typeof e=="number"},zo=function(e){return typeof e>"u"},yn=function(e){return typeof e=="object"},Ot=function(e){return e!==!1},Go=function(){return typeof window<"u"},ws=function(e){return Qe(e)||pt(e)},Ju=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Et=Array.isArray,fo=/(?:-?\.?\d|\.)+/gi,Qu=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,rr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Va=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,ed=/[+-]=-?[.\d]+/,td=/[^,'"\[\]\s]+/gi,yx=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ke,pn,ho,ko,jt={},Gs={},nd,id=function(e){return(Gs=vr(e,jt))&&zt},Ho=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Xr=function(e,t){return!t&&console.warn(e)},rd=function(e,t){return e&&(jt[e]=t)&&Gs&&(Gs[e]=t)||jt},qr=function(){return 0},Ex={suppressEvents:!0,isStart:!0,kill:!1},Ls={suppressEvents:!0,kill:!1},Tx={suppressEvents:!0},Vo={},ti=[],po={},sd,Wt={},Wa={},Bc=30,Ds=[],Wo="",Xo=function(e){var t=e[0],n,r;if(yn(t)||Qe(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(r=Ds.length;r--&&!Ds[r].targetTest(t););n=Ds[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new Rd(e[r],n)))||e.splice(r,1);return e},Ti=function(e){return e._gsap||Xo(rn(e))[0]._gsap},ad=function(e,t,n){return(n=e[t])&&Qe(n)?e[t]():zo(n)&&e.getAttribute&&e.getAttribute(t)||n},Nt=function(e,t){return(e=e.split(",")).forEach(t)||e},tt=function(e){return Math.round(e*1e5)/1e5||0},at=function(e){return Math.round(e*1e7)/1e7||0},cr=function(e,t){var n=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+r:n==="-"?e-r:n==="*"?e*r:e/r},bx=function(e,t){for(var n=t.length,r=0;e.indexOf(t[r])<0&&++r<n;);return r<n},ks=function(){var e=ti.length,t=ti.slice(0),n,r;for(po={},ti.length=0,n=0;n<e;n++)r=t[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},qo=function(e){return!!(e._initted||e._startAt||e.add)},od=function(e,t,n,r){ti.length&&!xt&&ks(),e.render(t,n,!!(xt&&t<0&&qo(e))),ti.length&&!xt&&ks()},ld=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(td).length<2?t:pt(e)?e.trim():e},cd=function(e){return e},$t=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Ax=function(e){return function(t,n){for(var r in n)r in t||r==="duration"&&e||r==="ease"||(t[r]=n[r])}},vr=function(e,t){for(var n in t)e[n]=t[n];return e},zc=function i(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=yn(t[n])?i(e[n]||(e[n]={}),t[n]):t[n]);return e},Hs=function(e,t){var n={},r;for(r in e)r in t||(n[r]=e[r]);return n},Fr=function(e){var t=e.parent||Ke,n=e.keyframes?Ax(Et(e.keyframes)):$t;if(Ot(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},wx=function(e,t){for(var n=e.length,r=n===t.length;r&&n--&&e[n]===t[n];);return n<0},ud=function(e,t,n,r,s){var a=e[r],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[r]=t,t._prev=a,t.parent=t._dp=e,t},Js=function(e,t,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var s=t._prev,a=t._next;s?s._next=a:e[n]===t&&(e[n]=a),a?a._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},ri=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},bi=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Cx=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},mo=function(e,t,n,r){return e._startAt&&(xt?e._startAt.revert(Ls):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},Rx=function i(e){return!e||e._ts&&i(e.parent)},Gc=function(e){return e._repeat?xr(e._tTime,e=e.duration()+e._rDelay)*e:0},xr=function(e,t){var n=Math.floor(e=at(e/t));return e&&n===e?n-1:n},Vs=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Qs=function(e){return e._end=at(e._start+(e._tDur/Math.abs(e._ts||e._rts||We)||0))},ea=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=at(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Qs(e),n._dirty||bi(n,e)),e},dd=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Vs(e.rawTime(),t),(!t._dur||ts(0,t.totalDuration(),n)-t._tTime>We)&&t.render(n,!0)),bi(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-We}},gn=function(e,t,n,r){return t.parent&&ri(t),t._start=at((Fn(n)?n:n||e!==Ke?Jt(e,n,t):e._time)+t._delay),t._end=at(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),ud(e,t,"_first","_last",e._sort?"_start":0),go(t)||(e._recent=t),r||dd(e,t),e._ts<0&&ea(e,e._tTime),e},fd=function(e,t){return(jt.ScrollTrigger||Ho("scrollTrigger",t))&&jt.ScrollTrigger.create(t,e)},hd=function(e,t,n,r,s){if(jo(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!xt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&sd!==Xt.frame)return ti.push(e),e._lazy=[s,r],1},Px=function i(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||i(t))},go=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Lx=function(e,t,n,r){var s=e.ratio,a=t<0||!t&&(!e._start&&Px(e)&&!(!e._initted&&go(e))||(e._ts<0||e._dp._ts<0)&&!go(e))?0:1,o=e._rDelay,l=0,c,u,d;if(o&&e._repeat&&(l=ts(0,e._tDur,t),u=xr(l,o),e._yoyo&&u&1&&(a=1-a),u!==xr(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||xt||r||e._zTime===We||!t&&e._zTime){if(!e._initted&&hd(e,t,r,n,l))return;for(d=e._zTime,e._zTime=t||(n?We:0),n||(n=t&&!d),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&mo(e,t,n,!0),e._onUpdate&&!n&&qt(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&qt(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&ri(e,1),!n&&!xt&&(qt(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Dx=function(e,t,n){var r;if(n>t)for(r=e._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},Sr=function(e,t,n,r){var s=e._repeat,a=at(t)||0,o=e._tTime/e._tDur;return o&&!r&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:at(a*(s+1)+e._rDelay*s):a,o>0&&!r&&ea(e,e._tTime=e._tDur*o),e.parent&&Qs(e),n||bi(e.parent,e),e},kc=function(e){return e instanceof Rt?bi(e):Sr(e,e._dur)},Ix={_start:0,endTime:qr,totalDuration:qr},Jt=function i(e,t,n){var r=e.labels,s=e._recent||Ix,a=e.duration()>=nn?s.endTime(!1):e._dur,o,l,c;return pt(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(t in r||(r[t]=a),r[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(Et(n)?n[0]:n).totalDuration()),o>1?i(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},Br=function(e,t,n){var r=Fn(t[1]),s=(r?2:1)+(e<2?0:1),a=t[s],o,l;if(r&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Ot(l.vars.inherit)&&l.parent;a.immediateRender=Ot(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new st(t[0],a,t[s+1])},ai=function(e,t){return e||e===0?t(e):t},ts=function(e,t,n){return n<e?e:n>t?t:n},yt=function(e,t){return!pt(e)||!(t=yx.exec(e))?"":t[1]},Ux=function(e,t,n){return ai(n,function(r){return ts(e,t,r)})},_o=[].slice,pd=function(e,t){return e&&yn(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&yn(e[0]))&&!e.nodeType&&e!==pn},Ox=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(r){var s;return pt(r)&&!t||pd(r,1)?(s=n).push.apply(s,rn(r)):n.push(r)})||n},rn=function(e,t,n){return $e&&!t&&$e.selector?$e.selector(e):pt(e)&&!n&&(ho||!Mr())?_o.call((t||ko).querySelectorAll(e),0):Et(e)?Ox(e,n):pd(e)?_o.call(e,0):e?[e]:[]},vo=function(e){return e=rn(e)[0]||Xr("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return rn(t,n.querySelectorAll?n:n===e?Xr("Invalid scope")||ko.createElement("div"):e)}},md=function(e){return e.sort(function(){return .5-Math.random()})},gd=function(e){if(Qe(e))return e;var t=yn(e)?e:{each:e},n=Ai(t.ease),r=t.from||0,s=parseFloat(t.base)||0,a={},o=r>0&&r<1,l=isNaN(r)||o,c=t.axis,u=r,d=r;return pt(r)?u=d={center:.5,edges:.5,end:1}[r]||0:!o&&l&&(u=r[0],d=r[1]),function(p,h,_){var g=(_||t).length,m=a[g],f,x,v,y,M,w,E,b,S;if(!m){if(S=t.grid==="auto"?0:(t.grid||[1,nn])[1],!S){for(E=-nn;E<(E=_[S++].getBoundingClientRect().left)&&S<g;);S<g&&S--}for(m=a[g]=[],f=l?Math.min(S,g)*u-.5:r%S,x=S===nn?0:l?g*d/S-.5:r/S|0,E=0,b=nn,w=0;w<g;w++)v=w%S-f,y=x-(w/S|0),m[w]=M=c?Math.abs(c==="y"?y:v):Zu(v*v+y*y),M>E&&(E=M),M<b&&(b=M);r==="random"&&md(m),m.max=E-b,m.min=b,m.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(S>g?g-1:c?c==="y"?g/S:S:Math.max(S,g/S))||0)*(r==="edges"?-1:1),m.b=g<0?s-g:s,m.u=yt(t.amount||t.each)||0,n=n&&g<0?Ad(n):n}return g=(m[p]-m.min)/m.max||0,at(m.b+(n?n(g):g)*m.v)+m.u}},xo=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var r=at(Math.round(parseFloat(n)/e)*e*t);return(r-r%1)/t+(Fn(n)?0:yt(n))}},_d=function(e,t){var n=Et(e),r,s;return!n&&yn(e)&&(r=n=e.radius||nn,e.values?(e=rn(e.values),(s=!Fn(e[0]))&&(r*=r)):e=xo(e.increment)),ai(t,n?Qe(e)?function(a){return s=e(a),Math.abs(s-a)<=r?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=nn,u=0,d=e.length,p,h;d--;)s?(p=e[d].x-o,h=e[d].y-l,p=p*p+h*h):p=Math.abs(e[d]-o),p<c&&(c=p,u=d);return u=!r||c<=r?e[u]:a,s||u===a||Fn(a)?u:u+yt(a)}:xo(e))},vd=function(e,t,n,r){return ai(Et(e)?!t:n===!0?!!(n=0):!r,function(){return Et(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*r)/r})},Nx=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduce(function(s,a){return a(s)},r)}},Fx=function(e,t){return function(n){return e(parseFloat(n))+(t||yt(n))}},Bx=function(e,t,n){return Sd(e,t,0,1,n)},xd=function(e,t,n){return ai(n,function(r){return e[~~t(r)]})},zx=function i(e,t,n){var r=t-e;return Et(e)?xd(e,i(0,e.length),t):ai(n,function(s){return(r+(s-e)%r)%r+e})},Gx=function i(e,t,n){var r=t-e,s=r*2;return Et(e)?xd(e,i(0,e.length-1),t):ai(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>r?s-a:a)})},Yr=function(e){for(var t=0,n="",r,s,a,o;~(r=e.indexOf("random(",t));)a=e.indexOf(")",r),o=e.charAt(r+7)==="[",s=e.substr(r+7,a-r-7).match(o?td:fo),n+=e.substr(t,r-t)+vd(o?s:+s[0],o?0:+s[1],+s[2]||1e-5),t=a+1;return n+e.substr(t,e.length-t)},Sd=function(e,t,n,r,s){var a=t-e,o=r-n;return ai(s,function(l){return n+((l-e)/a*o||0)})},kx=function i(e,t,n,r){var s=isNaN(e+t)?0:function(h){return(1-h)*e+h*t};if(!s){var a=pt(e),o={},l,c,u,d,p;if(n===!0&&(r=1)&&(n=null),a)e={p:e},t={p:t};else if(Et(e)&&!Et(t)){for(u=[],d=e.length,p=d-2,c=1;c<d;c++)u.push(i(e[c-1],e[c]));d--,s=function(_){_*=d;var g=Math.min(p,~~_);return u[g](_-g)},n=t}else r||(e=vr(Et(e)?[]:{},e));if(!u){for(l in t)Yo.call(o,e,l,"get",t[l]);s=function(_){return Zo(_,o)||(a?e.p:e)}}}return ai(n,s)},Hc=function(e,t,n){var r=e.labels,s=nn,a,o,l;for(a in r)o=r[a]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},qt=function(e,t,n){var r=e.vars,s=r[t],a=$e,o=e._ctx,l,c,u;if(s)return l=r[t+"Params"],c=r.callbackScope||e,n&&ti.length&&ks(),o&&($e=o),u=l?s.apply(c,l):s.call(c),$e=a,u},Ur=function(e){return ri(e),e.scrollTrigger&&e.scrollTrigger.kill(!!xt),e.progress()<1&&qt(e,"onInterrupt"),e},sr,Md=[],yd=function(e){if(e)if(e=!e.name&&e.default||e,Go()||e.headless){var t=e.name,n=Qe(e),r=t&&!n&&e.init?function(){this._props=[]}:e,s={init:qr,render:Zo,add:Yo,kill:iS,modifier:nS,rawVars:0},a={targetTest:0,get:0,getSetter:Ko,aliases:{},register:0};if(Mr(),e!==r){if(Wt[t])return;$t(r,$t(Hs(e,s),a)),vr(r.prototype,vr(s,Hs(e,a))),Wt[r.prop=t]=r,e.targetTest&&(Ds.push(r),Vo[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}rd(t,r),e.register&&e.register(zt,r,Ft)}else Md.push(e)},Ve=255,Or={aqua:[0,Ve,Ve],lime:[0,Ve,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ve],navy:[0,0,128],white:[Ve,Ve,Ve],olive:[128,128,0],yellow:[Ve,Ve,0],orange:[Ve,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ve,0,0],pink:[Ve,192,203],cyan:[0,Ve,Ve],transparent:[Ve,Ve,Ve,0]},Xa=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Ve+.5|0},Ed=function(e,t,n){var r=e?Fn(e)?[e>>16,e>>8&Ve,e&Ve]:0:Or.black,s,a,o,l,c,u,d,p,h,_;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Or[e])r=Or[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&Ve,r&Ve,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&Ve,e&Ve]}else if(e.substr(0,3)==="hsl"){if(r=_=e.match(fo),!t)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,r.length>3&&(r[3]*=1),r[0]=Xa(l+1/3,s,a),r[1]=Xa(l,s,a),r[2]=Xa(l-1/3,s,a);else if(~e.indexOf("="))return r=e.match(Qu),n&&r.length<4&&(r[3]=1),r}else r=e.match(fo)||Or.transparent;r=r.map(Number)}return t&&!_&&(s=r[0]/Ve,a=r[1]/Ve,o=r[2]/Ve,d=Math.max(s,a,o),p=Math.min(s,a,o),u=(d+p)/2,d===p?l=c=0:(h=d-p,c=u>.5?h/(2-d-p):h/(d+p),l=d===s?(a-o)/h+(a<o?6:0):d===a?(o-s)/h+2:(s-a)/h+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),n&&r.length<4&&(r[3]=1),r},Td=function(e){var t=[],n=[],r=-1;return e.split(ni).forEach(function(s){var a=s.match(rr)||[];t.push.apply(t,a),n.push(r+=a.length+1)}),t.c=n,t},Vc=function(e,t,n){var r="",s=(e+r).match(ni),a=t?"hsla(":"rgba(",o=0,l,c,u,d;if(!s)return e;if(s=s.map(function(p){return(p=Ed(p,t,1))&&a+(t?p[0]+","+p[1]+"%,"+p[2]+"%,"+p[3]:p.join(","))+")"}),n&&(u=Td(e),l=n.c,l.join(r)!==u.c.join(r)))for(c=e.replace(ni,"1").split(rr),d=c.length-1;o<d;o++)r+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(ni),d=c.length-1;o<d;o++)r+=c[o]+s[o];return r+c[d]},ni=function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Or)i+="|"+e+"\\b";return new RegExp(i+")","gi")}(),Hx=/hsl[a]?\(/,bd=function(e){var t=e.join(" "),n;if(ni.lastIndex=0,ni.test(t))return n=Hx.test(t),e[1]=Vc(e[1],n),e[0]=Vc(e[0],n,Td(e[1])),!0},jr,Xt=function(){var i=Date.now,e=500,t=33,n=i(),r=n,s=1e3/240,a=s,o=[],l,c,u,d,p,h,_=function g(m){var f=i()-r,x=m===!0,v,y,M,w;if((f>e||f<0)&&(n+=f-t),r+=f,M=r-n,v=M-a,(v>0||x)&&(w=++d.frame,p=M-d.time*1e3,d.time=M=M/1e3,a+=v+(v>=s?4:s-v),y=1),x||(l=c(g)),y)for(h=0;h<o.length;h++)o[h](M,p,w,m)};return d={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return p/(1e3/(m||60))},wake:function(){nd&&(!ho&&Go()&&(pn=ho=window,ko=pn.document||{},jt.gsap=zt,(pn.gsapVersions||(pn.gsapVersions=[])).push(zt.version),id(Gs||pn.GreenSockGlobals||!pn.gsap&&pn||{}),Md.forEach(yd)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=u||function(m){return setTimeout(m,a-d.time*1e3+1|0)},jr=1,_(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),jr=0,c=qr},lagSmoothing:function(m,f){e=m||1/0,t=Math.min(f||33,e)},fps:function(m){s=1e3/(m||240),a=d.time*1e3+s},add:function(m,f,x){var v=f?function(y,M,w,E){m(y,M,w,E),d.remove(v)}:m;return d.remove(m),o[x?"unshift":"push"](v),Mr(),v},remove:function(m,f){~(f=o.indexOf(m))&&o.splice(f,1)&&h>=f&&h--},_listeners:o},d}(),Mr=function(){return!jr&&Xt.wake()},ze={},Vx=/^[\d.\-M][\d.\-,\s]/,Wx=/["']/g,Xx=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),r=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[r]=isNaN(c)?c.replace(Wx,"").trim():+c,r=l.substr(o+1).trim();return t},qx=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<n?e.indexOf(")",n+1):n)},Yx=function(e){var t=(e+"").split("("),n=ze[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[Xx(t[1])]:qx(e).split(",").map(ld)):ze._CE&&Vx.test(e)?ze._CE("",e):n},Ad=function(e){return function(t){return 1-e(1-t)}},wd=function i(e,t){for(var n=e._first,r;n;)n instanceof Rt?i(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?i(n.timeline,t):(r=n._ease,n._ease=n._yEase,n._yEase=r,n._yoyo=t)),n=n._next},Ai=function(e,t){return e&&(Qe(e)?e:ze[e]||Yx(e))||t},Oi=function(e,t,n,r){n===void 0&&(n=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:r},a;return Nt(e,function(o){ze[o]=jt[o]=s,ze[a=o.toLowerCase()]=n;for(var l in s)ze[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ze[o+"."+l]=s[l]}),s},Cd=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},qa=function i(e,t,n){var r=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),a=s/uo*(Math.asin(1/r)||0),o=function(u){return u===1?1:r*Math.pow(2,-10*u)*Mx((u-a)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:Cd(o);return s=uo/s,l.config=function(c,u){return i(e,c,u)},l},Ya=function i(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},r=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:Cd(n);return r.config=function(s){return i(e,s)},r};Nt("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,e){var t=e<5?e+1:e;Oi(i+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});ze.Linear.easeNone=ze.none=ze.Linear.easeIn;Oi("Elastic",qa("in"),qa("out"),qa());(function(i,e){var t=1/e,n=2*t,r=2.5*t,s=function(o){return o<t?i*o*o:o<n?i*Math.pow(o-1.5/e,2)+.75:o<r?i*(o-=2.25/e)*o+.9375:i*Math.pow(o-2.625/e,2)+.984375};Oi("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);Oi("Expo",function(i){return Math.pow(2,10*(i-1))*i+i*i*i*i*i*i*(1-i)});Oi("Circ",function(i){return-(Zu(1-i*i)-1)});Oi("Sine",function(i){return i===1?1:-Sx(i*vx)+1});Oi("Back",Ya("in"),Ya("out"),Ya());ze.SteppedEase=ze.steps=jt.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,r=e+(t?0:1),s=t?1:0,a=1-We;return function(o){return((r*ts(0,a,o)|0)+s)*n}}};_r.ease=ze["quad.out"];Nt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return Wo+=i+","+i+"Params,"});var Rd=function(e,t){this.id=xx++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:ad,this.set=t?t.getSetter:Ko},$r=function(){function i(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Sr(this,+t.duration,1,1),this.data=t.data,$e&&(this._ctx=$e,$e.data.push(this)),jr||Xt.wake()}var e=i.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Sr(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,r){if(Mr(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(ea(this,n),!s._dp||s.parent||dd(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&gn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===We||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),od(this,n,r)),this},e.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Gc(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},e.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Gc(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,r):this._repeat?xr(this._tTime,s)+1:1},e.timeScale=function(n,r){if(!arguments.length)return this._rts===-We?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Vs(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-We?0:this._rts,this.totalTime(ts(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),Qs(this),Cx(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Mr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==We&&(this._tTime-=We)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&gn(r,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Ot(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Vs(r.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=Tx);var r=xt;return xt=n,qo(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),xt=r,this},e.globalTime=function(n){for(var r=this,s=arguments.length?n:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,kc(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,kc(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,r){return this.totalTime(Jt(this,n),Ot(r))},e.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,Ot(r)),this._dur||(this._zTime=-We),this},e.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},e.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-We:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-We,this},e.isActive=function(){var n=this.parent||this._dp,r=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=r&&s<this.endTime(!0)-We)},e.eventCallback=function(n,r,s){var a=this.vars;return arguments.length>1?(r?(a[n]=r,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=r)):delete a[n],this):a[n]},e.then=function(n){var r=this;return new Promise(function(s){var a=Qe(n)?n:cd,o=function(){var c=r.then;r.then=null,Qe(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=c),s(a),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?o():r._prom=o})},e.kill=function(){Ur(this)},i}();$t($r.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-We,_prom:0,_ps:!1,_rts:1});var Rt=function(i){Ku(e,i);function e(n,r){var s;return n===void 0&&(n={}),s=i.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Ot(n.sortChildren),Ke&&gn(n.parent||Ke,Dn(s),r),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&fd(Dn(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,a){return Br(0,arguments,this),this},t.from=function(r,s,a){return Br(1,arguments,this),this},t.fromTo=function(r,s,a,o){return Br(2,arguments,this),this},t.set=function(r,s,a){return s.duration=0,s.parent=this,Fr(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new st(r,s,Jt(this,a),1),this},t.call=function(r,s,a){return gn(this,st.delayedCall(0,r,s),a)},t.staggerTo=function(r,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new st(r,a,Jt(this,l)),this},t.staggerFrom=function(r,s,a,o,l,c,u){return a.runBackwards=1,Fr(a).immediateRender=Ot(a.immediateRender),this.staggerTo(r,s,a,o,l,c,u)},t.staggerFromTo=function(r,s,a,o,l,c,u,d){return o.startAt=a,Fr(o).immediateRender=Ot(o.immediateRender),this.staggerTo(r,s,o,l,c,u,d)},t.render=function(r,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:at(r),d=this._zTime<0!=r<0&&(this._initted||!c),p,h,_,g,m,f,x,v,y,M,w,E;if(this!==Ke&&u>l&&r>=0&&(u=l),u!==this._tTime||a||d){if(o!==this._time&&c&&(u+=this._time-o,r+=this._time-o),p=u,y=this._start,v=this._ts,f=!v,d&&(c||(o=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(w=this._yoyo,m=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,a);if(p=at(u%m),u===l?(g=this._repeat,p=c):(M=at(u/m),g=~~M,g&&g===M&&(p=c,g--),p>c&&(p=c)),M=xr(this._tTime,m),!o&&this._tTime&&M!==g&&this._tTime-M*m-this._dur<=0&&(M=g),w&&g&1&&(p=c-p,E=1),g!==M&&!this._lock){var b=w&&M&1,S=b===(w&&g&1);if(g<M&&(b=!b),o=b?0:u%c?c:u,this._lock=1,this.render(o||(E?0:at(g*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&qt(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1),o&&o!==this._time||f!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,S&&(this._lock=2,o=b?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!f)return this;wd(this,E)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(x=Dx(this,at(o),at(p)),x&&(u-=p-(p=x._start))),this._tTime=u,this._time=p,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,o=0),!o&&u&&!s&&!M&&(qt(this,"onStart"),this._tTime!==u))return this;if(p>=o&&r>=0)for(h=this._first;h;){if(_=h._next,(h._act||p>=h._start)&&h._ts&&x!==h){if(h.parent!==this)return this.render(r,s,a);if(h.render(h._ts>0?(p-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(p-h._start)*h._ts,s,a),p!==this._time||!this._ts&&!f){x=0,_&&(u+=this._zTime=-We);break}}h=_}else{h=this._last;for(var T=r<0?r:p;h;){if(_=h._prev,(h._act||T<=h._end)&&h._ts&&x!==h){if(h.parent!==this)return this.render(r,s,a);if(h.render(h._ts>0?(T-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(T-h._start)*h._ts,s,a||xt&&qo(h)),p!==this._time||!this._ts&&!f){x=0,_&&(u+=this._zTime=T?-We:We);break}}h=_}}if(x&&!s&&(this.pause(),x.render(p>=o?0:-We)._zTime=p>=o?1:-1,this._ts))return this._start=y,Qs(this),this.render(r,s,a);this._onUpdate&&!s&&qt(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(y===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&ri(this,1),!s&&!(r<0&&!o)&&(u||o||!l)&&(qt(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var a=this;if(Fn(s)||(s=Jt(this,s,r)),!(r instanceof $r)){if(Et(r))return r.forEach(function(o){return a.add(o,s)}),this;if(pt(r))return this.addLabel(r,s);if(Qe(r))r=st.delayedCall(0,r);else return this}return this!==r?gn(this,r,s):this},t.getChildren=function(r,s,a,o){r===void 0&&(r=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-nn);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof st?s&&l.push(c):(a&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===r)return s[a]},t.remove=function(r){return pt(r)?this.removeLabel(r):Qe(r)?this.killTweensOf(r):(r.parent===this&&Js(this,r),r===this._recent&&(this._recent=this._last),bi(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=at(Xt.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),i.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=Jt(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,a){var o=st.delayedCall(0,s||qr,a);return o.data="isPause",this._hasPause=1,gn(this,o,Jt(this,r))},t.removePause=function(r){var s=this._first;for(r=Jt(this,r);s;)s._start===r&&s.data==="isPause"&&ri(s),s=s._next},t.killTweensOf=function(r,s,a){for(var o=this.getTweensOf(r,a),l=o.length;l--;)$n!==o[l]&&o[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var a=[],o=rn(r),l=this._first,c=Fn(s),u;l;)l instanceof st?bx(l._targets,o)&&(c?(!$n||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(r,s){s=s||{};var a=this,o=Jt(a,r),l=s,c=l.startAt,u=l.onStart,d=l.onStartParams,p=l.immediateRender,h,_=st.to(a,$t({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||We,onStart:function(){if(a.pause(),!h){var m=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());_._dur!==m&&Sr(_,m,0,1).render(_._time,!0,!0),h=1}u&&u.apply(_,d||[])}},s));return p?_.render(0):_},t.tweenFromTo=function(r,s,a){return this.tweenTo(s,$t({startAt:{time:Jt(this,r)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),Hc(this,Jt(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),Hc(this,Jt(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+We)},t.shiftChildren=function(r,s,a){a===void 0&&(a=0);for(var o=this._first,l=this.labels,c;o;)o._start>=a&&(o._start+=r,o._end+=r),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=r);return bi(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return i.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),bi(this)},t.totalDuration=function(r){var s=0,a=this,o=a._last,l=nn,c,u,d;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-r:r));if(a._dirty){for(d=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,gn(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!d&&!a._dp||d&&d.smoothChildTiming)&&(a._start+=u/a._ts,a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;Sr(a,a===Ke&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(r){if(Ke._ts&&(od(Ke,Vs(r,Ke)),sd=Xt.frame),Xt.frame>=Bc){Bc+=Yt.autoSleep||120;var s=Ke._first;if((!s||!s._ts)&&Yt.autoSleep&&Xt._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Xt.sleep()}}},e}($r);$t(Rt.prototype,{_lock:0,_hasPause:0,_forcing:0});var jx=function(e,t,n,r,s,a,o){var l=new Ft(this._pt,e,t,0,1,Od,null,s),c=0,u=0,d,p,h,_,g,m,f,x;for(l.b=n,l.e=r,n+="",r+="",(f=~r.indexOf("random("))&&(r=Yr(r)),a&&(x=[n,r],a(x,e,t),n=x[0],r=x[1]),p=n.match(Va)||[];d=Va.exec(r);)_=d[0],g=r.substring(c,d.index),h?h=(h+1)%5:g.substr(-5)==="rgba("&&(h=1),_!==p[u++]&&(m=parseFloat(p[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:m,c:_.charAt(1)==="="?cr(m,_)-m:parseFloat(_)-m,m:h&&h<4?Math.round:0},c=Va.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=o,(ed.test(r)||f)&&(l.e=0),this._pt=l,l},Yo=function(e,t,n,r,s,a,o,l,c,u){Qe(r)&&(r=r(s||0,e,a));var d=e[t],p=n!=="get"?n:Qe(d)?c?e[t.indexOf("set")||!Qe(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():d,h=Qe(d)?c?Qx:Id:$o,_;if(pt(r)&&(~r.indexOf("random(")&&(r=Yr(r)),r.charAt(1)==="="&&(_=cr(p,r)+(yt(p)||0),(_||_===0)&&(r=_))),!u||p!==r||So)return!isNaN(p*r)&&r!==""?(_=new Ft(this._pt,e,t,+p||0,r-(p||0),typeof d=="boolean"?tS:Ud,0,h),c&&(_.fp=c),o&&_.modifier(o,this,e),this._pt=_):(!d&&!(t in e)&&Ho(t,r),jx.call(this,e,t,p,r,h,l||Yt.stringFilter,c))},$x=function(e,t,n,r,s){if(Qe(e)&&(e=zr(e,s,t,n,r)),!yn(e)||e.style&&e.nodeType||Et(e)||Ju(e))return pt(e)?zr(e,s,t,n,r):e;var a={},o;for(o in e)a[o]=zr(e[o],s,t,n,r);return a},Pd=function(e,t,n,r,s,a){var o,l,c,u;if(Wt[e]&&(o=new Wt[e]).init(s,o.rawVars?t[e]:$x(t[e],r,s,a,n),n,r,a)!==!1&&(n._pt=l=new Ft(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==sr))for(c=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},$n,So,jo=function i(e,t,n){var r=e.vars,s=r.ease,a=r.startAt,o=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.runBackwards,d=r.yoyoEase,p=r.keyframes,h=r.autoRevert,_=e._dur,g=e._startAt,m=e._targets,f=e.parent,x=f&&f.data==="nested"?f.vars.targets:m,v=e._overwrite==="auto"&&!Bo,y=e.timeline,M,w,E,b,S,T,D,B,L,U,F,J,O;if(y&&(!p||!s)&&(s="none"),e._ease=Ai(s,_r.ease),e._yEase=d?Ad(Ai(d===!0?s:d,_r.ease)):0,d&&e._yoyo&&!e._repeat&&(d=e._yEase,e._yEase=e._ease,e._ease=d),e._from=!y&&!!r.runBackwards,!y||p&&!r.stagger){if(B=m[0]?Ti(m[0]).harness:0,J=B&&r[B.prop],M=Hs(r,Vo),g&&(g._zTime<0&&g.progress(1),t<0&&u&&o&&!h?g.render(-1,!0):g.revert(u&&_?Ls:Ex),g._lazy=0),a){if(ri(e._startAt=st.set(m,$t({data:"isStart",overwrite:!1,parent:f,immediateRender:!0,lazy:!g&&Ot(l),startAt:null,delay:0,onUpdate:c&&function(){return qt(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(xt||!o&&!h)&&e._startAt.revert(Ls),o&&_&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&_&&!g){if(t&&(o=!1),E=$t({overwrite:!1,data:"isFromStart",lazy:o&&!g&&Ot(l),immediateRender:o,stagger:0,parent:f},M),J&&(E[B.prop]=J),ri(e._startAt=st.set(m,E)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(xt?e._startAt.revert(Ls):e._startAt.render(-1,!0)),e._zTime=t,!o)i(e._startAt,We,We);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&Ot(l)||l&&!_,w=0;w<m.length;w++){if(S=m[w],D=S._gsap||Xo(m)[w]._gsap,e._ptLookup[w]=U={},po[D.id]&&ti.length&&ks(),F=x===m?w:x.indexOf(S),B&&(L=new B).init(S,J||M,e,F,x)!==!1&&(e._pt=b=new Ft(e._pt,S,L.name,0,1,L.render,L,0,L.priority),L._props.forEach(function(N){U[N]=b}),L.priority&&(T=1)),!B||J)for(E in M)Wt[E]&&(L=Pd(E,M,e,F,S,x))?L.priority&&(T=1):U[E]=b=Yo.call(e,S,E,"get",M[E],F,x,0,r.stringFilter);e._op&&e._op[w]&&e.kill(S,e._op[w]),v&&e._pt&&($n=e,Ke.killTweensOf(S,U,e.globalTime(t)),O=!e.parent,$n=0),e._pt&&l&&(po[D.id]=1)}T&&Nd(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!O,p&&t<=0&&y.render(nn,!0,!0)},Kx=function(e,t,n,r,s,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,d,p,h;if(!c)for(c=e._ptCache[t]=[],p=e._ptLookup,h=e._targets.length;h--;){if(u=p[h][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return So=1,e.vars[t]="+=0",jo(e,o),So=0,l?Xr(t+" not eligible for reset"):1;c.push(u)}for(h=c.length;h--;)d=c[h],u=d._pt||d,u.s=(r||r===0)&&!s?r:u.s+(r||0)+a*u.c,u.c=n-u.s,d.e&&(d.e=tt(n)+yt(d.e)),d.b&&(d.b=u.s+yt(d.b))},Zx=function(e,t){var n=e[0]?Ti(e[0]).harness:0,r=n&&n.aliases,s,a,o,l;if(!r)return t;s=vr({},t);for(a in r)if(a in s)for(l=r[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},Jx=function(e,t,n,r){var s=t.ease||r||"power1.inOut",a,o;if(Et(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:s})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},zr=function(e,t,n,r,s){return Qe(e)?e.call(t,n,r,s):pt(e)&&~e.indexOf("random(")?Yr(e):e},Ld=Wo+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Dd={};Nt(Ld+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return Dd[i]=1});var st=function(i){Ku(e,i);function e(n,r,s,a){var o;typeof r=="number"&&(s.duration=r,r=s,s=null),o=i.call(this,a?r:Fr(r))||this;var l=o.vars,c=l.duration,u=l.delay,d=l.immediateRender,p=l.stagger,h=l.overwrite,_=l.keyframes,g=l.defaults,m=l.scrollTrigger,f=l.yoyoEase,x=r.parent||Ke,v=(Et(n)||Ju(n)?Fn(n[0]):"length"in r)?[n]:rn(n),y,M,w,E,b,S,T,D;if(o._targets=v.length?Xo(v):Xr("GSAP target "+n+" not found. https://gsap.com",!Yt.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=h,_||p||ws(c)||ws(u)){if(r=o.vars,y=o.timeline=new Rt({data:"nested",defaults:g||{},targets:x&&x.data==="nested"?x.vars.targets:v}),y.kill(),y.parent=y._dp=Dn(o),y._start=0,p||ws(c)||ws(u)){if(E=v.length,T=p&&gd(p),yn(p))for(b in p)~Ld.indexOf(b)&&(D||(D={}),D[b]=p[b]);for(M=0;M<E;M++)w=Hs(r,Dd),w.stagger=0,f&&(w.yoyoEase=f),D&&vr(w,D),S=v[M],w.duration=+zr(c,Dn(o),M,S,v),w.delay=(+zr(u,Dn(o),M,S,v)||0)-o._delay,!p&&E===1&&w.delay&&(o._delay=u=w.delay,o._start+=u,w.delay=0),y.to(S,w,T?T(M,S,v):0),y._ease=ze.none;y.duration()?c=u=0:o.timeline=0}else if(_){Fr($t(y.vars.defaults,{ease:"none"})),y._ease=Ai(_.ease||r.ease||"none");var B=0,L,U,F;if(Et(_))_.forEach(function(J){return y.to(v,J,">")}),y.duration();else{w={};for(b in _)b==="ease"||b==="easeEach"||Jx(b,_[b],w,_.easeEach);for(b in w)for(L=w[b].sort(function(J,O){return J.t-O.t}),B=0,M=0;M<L.length;M++)U=L[M],F={ease:U.e,duration:(U.t-(M?L[M-1].t:0))/100*c},F[b]=U.v,y.to(v,F,B),B+=F.duration;y.duration()<c&&y.to({},{duration:c-y.duration()})}}c||o.duration(c=y.duration())}else o.timeline=0;return h===!0&&!Bo&&($n=Dn(o),Ke.killTweensOf(v),$n=0),gn(x,Dn(o),s),r.reversed&&o.reverse(),r.paused&&o.paused(!0),(d||!c&&!_&&o._start===at(x._time)&&Ot(d)&&Rx(Dn(o))&&x.data!=="nested")&&(o._tTime=-We,o.render(Math.max(0,-u)||0)),m&&fd(Dn(o),m),o}var t=e.prototype;return t.render=function(r,s,a){var o=this._time,l=this._tDur,c=this._dur,u=r<0,d=r>l-We&&!u?l:r<We?0:r,p,h,_,g,m,f,x,v,y;if(!c)Lx(this,r,s,a);else if(d!==this._tTime||!r||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(p=d,v=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+r,s,a);if(p=at(d%g),d===l?(_=this._repeat,p=c):(m=at(d/g),_=~~m,_&&_===m?(p=c,_--):p>c&&(p=c)),f=this._yoyo&&_&1,f&&(y=this._yEase,p=c-p),m=xr(this._tTime,g),p===o&&!a&&this._initted&&_===m)return this._tTime=d,this;_!==m&&(v&&this._yEase&&wd(v,f),this.vars.repeatRefresh&&!f&&!this._lock&&p!==g&&this._initted&&(this._lock=a=1,this.render(at(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(hd(this,u?r:p,a,s,d))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&_!==m))return this;if(c!==this._dur)return this.render(r,s,a)}if(this._tTime=d,this._time=p,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=x=(y||this._ease)(p/c),this._from&&(this.ratio=x=1-x),!o&&d&&!s&&!m&&(qt(this,"onStart"),this._tTime!==d))return this;for(h=this._pt;h;)h.r(x,h.d),h=h._next;v&&v.render(r<0?r:v._dur*v._ease(p/this._dur),s,a)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&mo(this,r,s,a),qt(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!s&&this.parent&&qt(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(u&&!this._onUpdate&&mo(this,r,!0,!0),(r||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&ri(this,1),!s&&!(u&&!o)&&(d||o||f)&&(qt(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),i.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,a,o,l){jr||Xt.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||jo(this,c),u=this._ease(c/this._dur),Kx(this,r,s,a,o,u,c,l)?this.resetTo(r,s,a,o,1):(ea(this,0),this.parent||ud(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Ur(this):this.scrollTrigger&&this.scrollTrigger.kill(!!xt),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,$n&&$n.vars.overwrite!==!0)._first||Ur(this),this.parent&&a!==this.timeline.totalDuration()&&Sr(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=r?rn(r):o,c=this._ptLookup,u=this._pt,d,p,h,_,g,m,f;if((!s||s==="all")&&wx(o,l))return s==="all"&&(this._pt=0),Ur(this);for(d=this._op=this._op||[],s!=="all"&&(pt(s)&&(g={},Nt(s,function(x){return g[x]=1}),s=g),s=Zx(o,s)),f=o.length;f--;)if(~l.indexOf(o[f])){p=c[f],s==="all"?(d[f]=s,_=p,h={}):(h=d[f]=d[f]||{},_=s);for(g in _)m=p&&p[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&Js(this,m,"_pt"),delete p[g]),h!=="all"&&(h[g]=1)}return this._initted&&!this._pt&&u&&Ur(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return Br(1,arguments)},e.delayedCall=function(r,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(r,s,a){return Br(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,a){return Ke.killTweensOf(r,s,a)},e}($r);$t(st.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Nt("staggerTo,staggerFrom,staggerFromTo",function(i){st[i]=function(){var e=new Rt,t=_o.call(arguments,0);return t.splice(i==="staggerFromTo"?5:4,0,0),e[i].apply(e,t)}});var $o=function(e,t,n){return e[t]=n},Id=function(e,t,n){return e[t](n)},Qx=function(e,t,n,r){return e[t](r.fp,n)},eS=function(e,t,n){return e.setAttribute(t,n)},Ko=function(e,t){return Qe(e[t])?Id:zo(e[t])&&e.setAttribute?eS:$o},Ud=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},tS=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Od=function(e,t){var n=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=t.c}t.set(t.t,t.p,r,t)},Zo=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},nS=function(e,t,n,r){for(var s=this._pt,a;s;)a=s._next,s.p===r&&s.modifier(e,t,n),s=a},iS=function(e){for(var t=this._pt,n,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?Js(this,t,"_pt"):t.dep||(n=1),t=r;return!n},rS=function(e,t,n,r){r.mSet(e,t,r.m.call(r.tween,n,r.mt),r)},Nd=function(e){for(var t=e._pt,n,r,s,a;t;){for(n=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:a)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:a=t,t=n}e._pt=s},Ft=function(){function i(t,n,r,s,a,o,l,c,u){this.t=n,this.s=s,this.c=a,this.p=r,this.r=o||Ud,this.d=l||this,this.set=c||$o,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=i.prototype;return e.modifier=function(n,r,s){this.mSet=this.mSet||this.set,this.set=rS,this.m=n,this.mt=s,this.tween=r},i}();Nt(Wo+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(i){return Vo[i]=1});jt.TweenMax=jt.TweenLite=st;jt.TimelineLite=jt.TimelineMax=Rt;Ke=new Rt({sortChildren:!1,defaults:_r,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Yt.stringFilter=bd;var wi=[],Is={},sS=[],Wc=0,aS=0,ja=function(e){return(Is[e]||sS).map(function(t){return t()})},Mo=function(){var e=Date.now(),t=[];e-Wc>2&&(ja("matchMediaInit"),wi.forEach(function(n){var r=n.queries,s=n.conditions,a,o,l,c;for(o in r)a=pn.matchMedia(r[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),ja("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(r){return n.add(null,r)})}),Wc=e,ja("matchMedia"))},Fd=function(){function i(t,n){this.selector=n&&vo(n),this.data=[],this._r=[],this.isReverted=!1,this.id=aS++,t&&this.add(t)}var e=i.prototype;return e.add=function(n,r,s){Qe(n)&&(s=r,r=n,n=Qe);var a=this,o=function(){var c=$e,u=a.selector,d;return c&&c!==a&&c.data.push(a),s&&(a.selector=vo(s)),$e=a,d=r.apply(a,arguments),Qe(d)&&a._r.push(d),$e=c,a.selector=u,a.isReverted=!1,d};return a.last=o,n===Qe?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},e.ignore=function(n){var r=$e;$e=null,n(this),$e=r},e.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof i?n.push.apply(n,r.getTweens()):r instanceof st&&!(r.parent&&r.parent.data==="nested")&&n.push(r)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,r){var s=this;if(n?function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,d){return d.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Rt?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof st)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),r)for(var a=wi.length;a--;)wi[a].id===this.id&&wi.splice(a,1)},e.revert=function(n){this.kill(n||{})},i}(),oS=function(){function i(t){this.contexts=[],this.scope=t,$e&&$e.data.push(this)}var e=i.prototype;return e.add=function(n,r,s){yn(n)||(n={matches:n});var a=new Fd(0,s||this.scope),o=a.conditions={},l,c,u;$e&&!a.selector&&(a.selector=$e.selector),this.contexts.push(a),r=a.add("onMatch",r),a.queries=n;for(c in n)c==="all"?u=1:(l=pn.matchMedia(n[c]),l&&(wi.indexOf(a)<0&&wi.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(Mo):l.addEventListener("change",Mo)));return u&&r(a,function(d){return a.add(null,d)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},i}(),Ws={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(r){return yd(r)})},timeline:function(e){return new Rt(e)},getTweensOf:function(e,t){return Ke.getTweensOf(e,t)},getProperty:function(e,t,n,r){pt(e)&&(e=rn(e)[0]);var s=Ti(e||{}).get,a=n?cd:ld;return n==="native"&&(n=""),e&&(t?a((Wt[t]&&Wt[t].get||s)(e,t,n,r)):function(o,l,c){return a((Wt[o]&&Wt[o].get||s)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=rn(e),e.length>1){var r=e.map(function(u){return zt.quickSetter(u,t,n)}),s=r.length;return function(u){for(var d=s;d--;)r[d](u)}}e=e[0]||{};var a=Wt[t],o=Ti(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(u){var d=new a;sr._pt=0,d.init(e,n?u+n:u,sr,0,[e]),d.render(1,d),sr._pt&&Zo(1,sr)}:o.set(e,l);return a?c:function(u){return c(e,l,n?u+n:u,o,1)}},quickTo:function(e,t,n){var r,s=zt.to(e,$t((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),n||{})),a=function(l,c,u){return s.resetTo(t,l,c,u)};return a.tween=s,a},isTweening:function(e){return Ke.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Ai(e.ease,_r.ease)),zc(_r,e||{})},config:function(e){return zc(Yt,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,r=e.plugins,s=e.defaults,a=e.extendTimeline;(r||"").split(",").forEach(function(o){return o&&!Wt[o]&&!jt[o]&&Xr(t+" effect requires "+o+" plugin.")}),Wa[t]=function(o,l,c){return n(rn(o),$t(l||{},s),c)},a&&(Rt.prototype[t]=function(o,l,c){return this.add(Wa[t](o,yn(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){ze[e]=Ai(t)},parseEase:function(e,t){return arguments.length?Ai(e,t):ze},getById:function(e){return Ke.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Rt(e),r,s;for(n.smoothChildTiming=Ot(e.smoothChildTiming),Ke.remove(n),n._dp=0,n._time=n._tTime=Ke._time,r=Ke._first;r;)s=r._next,(t||!(!r._dur&&r instanceof st&&r.vars.onComplete===r._targets[0]))&&gn(n,r,r._start-r._delay),r=s;return gn(Ke,n,0),n},context:function(e,t){return e?new Fd(e,t):$e},matchMedia:function(e){return new oS(e)},matchMediaRefresh:function(){return wi.forEach(function(e){var t=e.conditions,n,r;for(r in t)t[r]&&(t[r]=!1,n=1);n&&e.revert()})||Mo()},addEventListener:function(e,t){var n=Is[e]||(Is[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Is[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},utils:{wrap:zx,wrapYoyo:Gx,distribute:gd,random:vd,snap:_d,normalize:Bx,getUnit:yt,clamp:Ux,splitColor:Ed,toArray:rn,selector:vo,mapRange:Sd,pipe:Nx,unitize:Fx,interpolate:kx,shuffle:md},install:id,effects:Wa,ticker:Xt,updateRoot:Rt.updateRoot,plugins:Wt,globalTimeline:Ke,core:{PropTween:Ft,globals:rd,Tween:st,Timeline:Rt,Animation:$r,getCache:Ti,_removeLinkedListItem:Js,reverting:function(){return xt},context:function(e){return e&&$e&&($e.data.push(e),e._ctx=$e),$e},suppressOverwrites:function(e){return Bo=e}}};Nt("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return Ws[i]=st[i]});Xt.add(Rt.updateRoot);sr=Ws.to({},{duration:0});var lS=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},cS=function(e,t){var n=e._targets,r,s,a;for(r in t)for(s=n.length;s--;)a=e._ptLookup[s][r],a&&(a=a.d)&&(a._pt&&(a=lS(a,r)),a&&a.modifier&&a.modifier(t[r],e,n[s],r))},$a=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,s,a){a._onInit=function(o){var l,c;if(pt(s)&&(l={},Nt(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}cS(o,s)}}}},zt=Ws.registerPlugin({name:"attr",init:function(e,t,n,r,s){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],r,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)xt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},$a("roundProps",xo),$a("modifiers"),$a("snap",_d))||Ws;st.version=Rt.version=zt.version="3.13.0";nd=1;Go()&&Mr();ze.Power0;ze.Power1;ze.Power2;ze.Power3;ze.Power4;ze.Linear;ze.Quad;ze.Cubic;ze.Quart;ze.Quint;ze.Strong;ze.Elastic;ze.Back;ze.SteppedEase;ze.Bounce;ze.Sine;ze.Expo;ze.Circ;/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Xc,Kn,ur,Jo,vi,qc,Qo,uS=function(){return typeof window<"u"},Bn={},gi=180/Math.PI,dr=Math.PI/180,tr=Math.atan2,Yc=1e8,el=/([A-Z])/g,dS=/(left|right|width|margin|padding|x)/i,fS=/[\s,\(]\S/,vn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},yo=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},hS=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},pS=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},mS=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Bd=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},zd=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},gS=function(e,t,n){return e.style[t]=n},_S=function(e,t,n){return e.style.setProperty(t,n)},vS=function(e,t,n){return e._gsap[t]=n},xS=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},SS=function(e,t,n,r,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},MS=function(e,t,n,r,s){var a=e._gsap;a[t]=n,a.renderTransform(s,a)},Ze="transform",Bt=Ze+"Origin",yS=function i(e,t){var n=this,r=this.target,s=r.style,a=r._gsap;if(e in Bn&&s){if(this.tfm=this.tfm||{},e!=="transform")e=vn[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=In(r,o)}):this.tfm[e]=a.x?a[e]:In(r,e),e===Bt&&(this.tfm.zOrigin=a.zOrigin);else return vn.transform.split(",").forEach(function(o){return i.call(n,o,t)});if(this.props.indexOf(Ze)>=0)return;a.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(Bt,t,"")),e=Ze}(s||t)&&this.props.push(e,t,s[e])},Gd=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},ES=function(){var e=this.props,t=this.target,n=t.style,r=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(el,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)r[a]=this.tfm[a];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Qo(),(!s||!s.isStart)&&!n[Ze]&&(Gd(n),r.zOrigin&&n[Bt]&&(n[Bt]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},kd=function(e,t){var n={target:e,props:[],revert:ES,save:yS};return e._gsap||zt.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return n.save(r)}),n},Hd,Eo=function(e,t){var n=Kn.createElementNS?Kn.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Kn.createElement(e);return n&&n.style?n:Kn.createElement(e)},sn=function i(e,t,n){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(el,"-$1").toLowerCase())||r.getPropertyValue(t)||!n&&i(e,yr(t)||t,1)||""},jc="O,Moz,ms,Ms,Webkit".split(","),yr=function(e,t,n){var r=t||vi,s=r.style,a=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(jc[a]+e in s););return a<0?null:(a===3?"ms":a>=0?jc[a]:"")+e},To=function(){uS()&&window.document&&(Xc=window,Kn=Xc.document,ur=Kn.documentElement,vi=Eo("div")||{style:{}},Eo("div"),Ze=yr(Ze),Bt=Ze+"Origin",vi.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Hd=!!yr("perspective"),Qo=zt.core.reverting,Jo=1)},$c=function(e){var t=e.ownerSVGElement,n=Eo("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",n.appendChild(r),ur.appendChild(n);try{s=r.getBBox()}catch{}return n.removeChild(r),ur.removeChild(n),s},Kc=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Vd=function(e){var t,n;try{t=e.getBBox()}catch{t=$c(e),n=1}return t&&(t.width||t.height)||n||(t=$c(e)),t&&!t.width&&!t.x&&!t.y?{x:+Kc(e,["x","cx","x1"])||0,y:+Kc(e,["y","cy","y1"])||0,width:0,height:0}:t},Wd=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Vd(e))},Di=function(e,t){if(t){var n=e.style,r;t in Bn&&t!==Bt&&(t=Ze),n.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(r==="--"?t:t.replace(el,"-$1").toLowerCase())):n.removeAttribute(t)}},Zn=function(e,t,n,r,s,a){var o=new Ft(e._pt,t,n,0,1,a?zd:Bd);return e._pt=o,o.b=r,o.e=s,e._props.push(n),o},Zc={deg:1,rad:1,turn:1},TS={grid:1,flex:1},si=function i(e,t,n,r){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=vi.style,l=dS.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),d=100,p=r==="px",h=r==="%",_,g,m,f;if(r===a||!s||Zc[r]||Zc[a])return s;if(a!=="px"&&!p&&(s=i(e,t,n,"px")),f=e.getCTM&&Wd(e),(h||a==="%")&&(Bn[t]||~t.indexOf("adius")))return _=f?e.getBBox()[l?"width":"height"]:e[u],tt(h?s/_*d:s/100*_);if(o[l?"width":"height"]=d+(p?a:r),g=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!c?e:e.parentNode,f&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===Kn||!g.appendChild)&&(g=Kn.body),m=g._gsap,m&&h&&m.width&&l&&m.time===Xt.time&&!m.uncache)return tt(s/m.width*d);if(h&&(t==="height"||t==="width")){var x=e.style[t];e.style[t]=d+r,_=e[u],x?e.style[t]=x:Di(e,t)}else(h||a==="%")&&!TS[sn(g,"display")]&&(o.position=sn(e,"position")),g===e&&(o.position="static"),g.appendChild(vi),_=vi[u],g.removeChild(vi),o.position="absolute";return l&&h&&(m=Ti(g),m.time=Xt.time,m.width=g[u]),tt(p?_*s/d:_&&s?d/_*s:0)},In=function(e,t,n,r){var s;return Jo||To(),t in vn&&t!=="transform"&&(t=vn[t],~t.indexOf(",")&&(t=t.split(",")[0])),Bn[t]&&t!=="transform"?(s=Zr(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:qs(sn(e,Bt))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=Xs[t]&&Xs[t](e,t,n)||sn(e,t)||ad(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?si(e,t,s,n)+n:s},bS=function(e,t,n,r){if(!n||n==="none"){var s=yr(t,e,1),a=s&&sn(e,s,1);a&&a!==n?(t=s,n=a):t==="borderColor"&&(n=sn(e,"borderTopColor"))}var o=new Ft(this._pt,e.style,t,0,1,Od),l=0,c=0,u,d,p,h,_,g,m,f,x,v,y,M;if(o.b=n,o.e=r,n+="",r+="",r.substring(0,6)==="var(--"&&(r=sn(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(g=e.style[t],e.style[t]=r,r=sn(e,t)||r,g?e.style[t]=g:Di(e,t)),u=[n,r],bd(u),n=u[0],r=u[1],p=n.match(rr)||[],M=r.match(rr)||[],M.length){for(;d=rr.exec(r);)m=d[0],x=r.substring(l,d.index),_?_=(_+1)%5:(x.substr(-5)==="rgba("||x.substr(-5)==="hsla(")&&(_=1),m!==(g=p[c++]||"")&&(h=parseFloat(g)||0,y=g.substr((h+"").length),m.charAt(1)==="="&&(m=cr(h,m)+y),f=parseFloat(m),v=m.substr((f+"").length),l=rr.lastIndex-v.length,v||(v=v||Yt.units[t]||y,l===r.length&&(r+=v,o.e+=v)),y!==v&&(h=si(e,t,g,v)||0),o._pt={_next:o._pt,p:x||c===1?x:",",s:h,c:f-h,m:_&&_<4||t==="zIndex"?Math.round:0});o.c=l<r.length?r.substring(l,r.length):""}else o.r=t==="display"&&r==="none"?zd:Bd;return ed.test(r)&&(o.e=0),this._pt=o,o},Jc={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},AS=function(e){var t=e.split(" "),n=t[0],r=t[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(e=n,n=r,r=e),t[0]=Jc[n]||n,t[1]=Jc[r]||r,t.join(" ")},wS=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,r=n.style,s=t.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],Bn[o]&&(l=1,o=o==="transformOrigin"?Bt:Ze),Di(n,o);l&&(Di(n,Ze),a&&(a.svg&&n.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",Zr(n,1),a.uncache=1,Gd(r)))}},Xs={clearProps:function(e,t,n,r,s){if(s.data!=="isFromStart"){var a=e._pt=new Ft(e._pt,t,n,0,0,wS);return a.u=r,a.pr=-10,a.tween=s,e._props.push(n),1}}},Kr=[1,0,0,1,0,0],Xd={},qd=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Qc=function(e){var t=sn(e,Ze);return qd(t)?Kr:t.substr(7).match(Qu).map(tt)},tl=function(e,t){var n=e._gsap||Ti(e),r=e.style,s=Qc(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Kr:s):(s===Kr&&!e.offsetParent&&e!==ur&&!n.svg&&(l=r.display,r.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,ur.appendChild(e)),s=Qc(e),l?r.display=l:Di(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):ur.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},bo=function(e,t,n,r,s,a){var o=e._gsap,l=s||tl(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,d=o.xOffset||0,p=o.yOffset||0,h=l[0],_=l[1],g=l[2],m=l[3],f=l[4],x=l[5],v=t.split(" "),y=parseFloat(v[0])||0,M=parseFloat(v[1])||0,w,E,b,S;n?l!==Kr&&(E=h*m-_*g)&&(b=y*(m/E)+M*(-g/E)+(g*x-m*f)/E,S=y*(-_/E)+M*(h/E)-(h*x-_*f)/E,y=b,M=S):(w=Vd(e),y=w.x+(~v[0].indexOf("%")?y/100*w.width:y),M=w.y+(~(v[1]||v[0]).indexOf("%")?M/100*w.height:M)),r||r!==!1&&o.smooth?(f=y-c,x=M-u,o.xOffset=d+(f*h+x*g)-f,o.yOffset=p+(f*_+x*m)-x):o.xOffset=o.yOffset=0,o.xOrigin=y,o.yOrigin=M,o.smooth=!!r,o.origin=t,o.originIsAbsolute=!!n,e.style[Bt]="0px 0px",a&&(Zn(a,o,"xOrigin",c,y),Zn(a,o,"yOrigin",u,M),Zn(a,o,"xOffset",d,o.xOffset),Zn(a,o,"yOffset",p,o.yOffset)),e.setAttribute("data-svg-origin",y+" "+M)},Zr=function(e,t){var n=e._gsap||new Rd(e);if("x"in n&&!t&&!n.uncache)return n;var r=e.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=sn(e,Bt)||"0",u,d,p,h,_,g,m,f,x,v,y,M,w,E,b,S,T,D,B,L,U,F,J,O,N,Y,K,z,Z,de,se,le;return u=d=p=g=m=f=x=v=y=0,h=_=1,n.svg=!!(e.getCTM&&Wd(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[Ze]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ze]!=="none"?l[Ze]:"")),r.scale=r.rotate=r.translate="none"),E=tl(e,n.svg),n.svg&&(n.uncache?(N=e.getBBox(),c=n.xOrigin-N.x+"px "+(n.yOrigin-N.y)+"px",O=""):O=!t&&e.getAttribute("data-svg-origin"),bo(e,O||c,!!O||n.originIsAbsolute,n.smooth!==!1,E)),M=n.xOrigin||0,w=n.yOrigin||0,E!==Kr&&(D=E[0],B=E[1],L=E[2],U=E[3],u=F=E[4],d=J=E[5],E.length===6?(h=Math.sqrt(D*D+B*B),_=Math.sqrt(U*U+L*L),g=D||B?tr(B,D)*gi:0,x=L||U?tr(L,U)*gi+g:0,x&&(_*=Math.abs(Math.cos(x*dr))),n.svg&&(u-=M-(M*D+w*L),d-=w-(M*B+w*U))):(le=E[6],de=E[7],K=E[8],z=E[9],Z=E[10],se=E[11],u=E[12],d=E[13],p=E[14],b=tr(le,Z),m=b*gi,b&&(S=Math.cos(-b),T=Math.sin(-b),O=F*S+K*T,N=J*S+z*T,Y=le*S+Z*T,K=F*-T+K*S,z=J*-T+z*S,Z=le*-T+Z*S,se=de*-T+se*S,F=O,J=N,le=Y),b=tr(-L,Z),f=b*gi,b&&(S=Math.cos(-b),T=Math.sin(-b),O=D*S-K*T,N=B*S-z*T,Y=L*S-Z*T,se=U*T+se*S,D=O,B=N,L=Y),b=tr(B,D),g=b*gi,b&&(S=Math.cos(b),T=Math.sin(b),O=D*S+B*T,N=F*S+J*T,B=B*S-D*T,J=J*S-F*T,D=O,F=N),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,f=180-f),h=tt(Math.sqrt(D*D+B*B+L*L)),_=tt(Math.sqrt(J*J+le*le)),b=tr(F,J),x=Math.abs(b)>2e-4?b*gi:0,y=se?1/(se<0?-se:se):0),n.svg&&(O=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!qd(sn(e,Ze)),O&&e.setAttribute("transform",O))),Math.abs(x)>90&&Math.abs(x)<270&&(s?(h*=-1,x+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,x+=x<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=d-((n.yPercent=d&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=p+a,n.scaleX=tt(h),n.scaleY=tt(_),n.rotation=tt(g)+o,n.rotationX=tt(m)+o,n.rotationY=tt(f)+o,n.skewX=x+o,n.skewY=v+o,n.transformPerspective=y+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(r[Bt]=qs(c)),n.xOffset=n.yOffset=0,n.force3D=Yt.force3D,n.renderTransform=n.svg?RS:Hd?Yd:CS,n.uncache=0,n},qs=function(e){return(e=e.split(" "))[0]+" "+e[1]},Ka=function(e,t,n){var r=yt(t);return tt(parseFloat(t)+parseFloat(si(e,"x",n+"px",r)))+r},CS=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Yd(e,t)},hi="0deg",Lr="0px",pi=") ",Yd=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,d=n.rotationX,p=n.skewX,h=n.skewY,_=n.scaleX,g=n.scaleY,m=n.transformPerspective,f=n.force3D,x=n.target,v=n.zOrigin,y="",M=f==="auto"&&e&&e!==1||f===!0;if(v&&(d!==hi||u!==hi)){var w=parseFloat(u)*dr,E=Math.sin(w),b=Math.cos(w),S;w=parseFloat(d)*dr,S=Math.cos(w),a=Ka(x,a,E*S*-v),o=Ka(x,o,-Math.sin(w)*-v),l=Ka(x,l,b*S*-v+v)}m!==Lr&&(y+="perspective("+m+pi),(r||s)&&(y+="translate("+r+"%, "+s+"%) "),(M||a!==Lr||o!==Lr||l!==Lr)&&(y+=l!==Lr||M?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+pi),c!==hi&&(y+="rotate("+c+pi),u!==hi&&(y+="rotateY("+u+pi),d!==hi&&(y+="rotateX("+d+pi),(p!==hi||h!==hi)&&(y+="skew("+p+", "+h+pi),(_!==1||g!==1)&&(y+="scale("+_+", "+g+pi),x.style[Ze]=y||"translate(0, 0)"},RS=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,d=n.scaleX,p=n.scaleY,h=n.target,_=n.xOrigin,g=n.yOrigin,m=n.xOffset,f=n.yOffset,x=n.forceCSS,v=parseFloat(a),y=parseFloat(o),M,w,E,b,S;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=dr,c*=dr,M=Math.cos(l)*d,w=Math.sin(l)*d,E=Math.sin(l-c)*-p,b=Math.cos(l-c)*p,c&&(u*=dr,S=Math.tan(c-u),S=Math.sqrt(1+S*S),E*=S,b*=S,u&&(S=Math.tan(u),S=Math.sqrt(1+S*S),M*=S,w*=S)),M=tt(M),w=tt(w),E=tt(E),b=tt(b)):(M=d,b=p,w=E=0),(v&&!~(a+"").indexOf("px")||y&&!~(o+"").indexOf("px"))&&(v=si(h,"x",a,"px"),y=si(h,"y",o,"px")),(_||g||m||f)&&(v=tt(v+_-(_*M+g*E)+m),y=tt(y+g-(_*w+g*b)+f)),(r||s)&&(S=h.getBBox(),v=tt(v+r/100*S.width),y=tt(y+s/100*S.height)),S="matrix("+M+","+w+","+E+","+b+","+v+","+y+")",h.setAttribute("transform",S),x&&(h.style[Ze]=S)},PS=function(e,t,n,r,s){var a=360,o=pt(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?gi:1),c=l-r,u=r+c+"deg",d,p;return o&&(d=s.split("_")[1],d==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),d==="cw"&&c<0?c=(c+a*Yc)%a-~~(c/a)*a:d==="ccw"&&c>0&&(c=(c-a*Yc)%a-~~(c/a)*a)),e._pt=p=new Ft(e._pt,t,n,r,c,hS),p.e=u,p.u="deg",e._props.push(n),p},eu=function(e,t){for(var n in t)e[n]=t[n];return e},LS=function(e,t,n){var r=eu({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,d,p,h,_;r.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[Ze]=t,o=Zr(n,1),Di(n,Ze),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Ze],a[Ze]=t,o=Zr(n,1),a[Ze]=c);for(l in Bn)c=r[l],u=o[l],c!==u&&s.indexOf(l)<0&&(h=yt(c),_=yt(u),d=h!==_?si(n,l,c,_):parseFloat(c),p=parseFloat(u),e._pt=new Ft(e._pt,o,l,d,p-d,yo),e._pt.u=_||0,e._props.push(l));eu(o,r)};Nt("padding,margin,Width,Radius",function(i,e){var t="Top",n="Right",r="Bottom",s="Left",a=(e<3?[t,n,r,s]:[t+s,t+n,r+n,r+s]).map(function(o){return e<2?i+o:"border"+o+i});Xs[e>1?"border"+i:i]=function(o,l,c,u,d){var p,h;if(arguments.length<4)return p=a.map(function(_){return In(o,_,c)}),h=p.join(" "),h.split(p[0]).length===5?p[0]:h;p=(u+"").split(" "),h={},a.forEach(function(_,g){return h[_]=p[g]=p[g]||p[(g-1)/2|0]}),o.init(l,h,d)}});var jd={name:"css",register:To,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,r,s){var a=this._props,o=e.style,l=n.vars.startAt,c,u,d,p,h,_,g,m,f,x,v,y,M,w,E,b;Jo||To(),this.styles=this.styles||kd(e),b=this.styles.props,this.tween=n;for(g in t)if(g!=="autoRound"&&(u=t[g],!(Wt[g]&&Pd(g,t,n,r,e,s)))){if(h=typeof u,_=Xs[g],h==="function"&&(u=u.call(n,r,e,s),h=typeof u),h==="string"&&~u.indexOf("random(")&&(u=Yr(u)),_)_(this,e,g,u,n)&&(E=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),u+="",ni.lastIndex=0,ni.test(c)||(m=yt(c),f=yt(u)),f?m!==f&&(c=si(e,g,c,f)+f):m&&(u+=m),this.add(o,"setProperty",c,u,r,s,0,0,g),a.push(g),b.push(g,0,o[g]);else if(h!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,r,e,s):l[g],pt(c)&&~c.indexOf("random(")&&(c=Yr(c)),yt(c+"")||c==="auto"||(c+=Yt.units[g]||yt(In(e,g))||""),(c+"").charAt(1)==="="&&(c=In(e,g))):c=In(e,g),p=parseFloat(c),x=h==="string"&&u.charAt(1)==="="&&u.substr(0,2),x&&(u=u.substr(2)),d=parseFloat(u),g in vn&&(g==="autoAlpha"&&(p===1&&In(e,"visibility")==="hidden"&&d&&(p=0),b.push("visibility",0,o.visibility),Zn(this,o,"visibility",p?"inherit":"hidden",d?"inherit":"hidden",!d)),g!=="scale"&&g!=="transform"&&(g=vn[g],~g.indexOf(",")&&(g=g.split(",")[0]))),v=g in Bn,v){if(this.styles.save(g),h==="string"&&u.substring(0,6)==="var(--"&&(u=sn(e,u.substring(4,u.indexOf(")"))),d=parseFloat(u)),y||(M=e._gsap,M.renderTransform&&!t.parseTransform||Zr(e,t.parseTransform),w=t.smoothOrigin!==!1&&M.smooth,y=this._pt=new Ft(this._pt,o,Ze,0,1,M.renderTransform,M,0,-1),y.dep=1),g==="scale")this._pt=new Ft(this._pt,M,"scaleY",M.scaleY,(x?cr(M.scaleY,x+d):d)-M.scaleY||0,yo),this._pt.u=0,a.push("scaleY",g),g+="X";else if(g==="transformOrigin"){b.push(Bt,0,o[Bt]),u=AS(u),M.svg?bo(e,u,0,w,0,this):(f=parseFloat(u.split(" ")[2])||0,f!==M.zOrigin&&Zn(this,M,"zOrigin",M.zOrigin,f),Zn(this,o,g,qs(c),qs(u)));continue}else if(g==="svgOrigin"){bo(e,u,1,w,0,this);continue}else if(g in Xd){PS(this,M,g,p,x?cr(p,x+u):u);continue}else if(g==="smoothOrigin"){Zn(this,M,"smooth",M.smooth,u);continue}else if(g==="force3D"){M[g]=u;continue}else if(g==="transform"){LS(this,u,e);continue}}else g in o||(g=yr(g)||g);if(v||(d||d===0)&&(p||p===0)&&!fS.test(u)&&g in o)m=(c+"").substr((p+"").length),d||(d=0),f=yt(u)||(g in Yt.units?Yt.units[g]:m),m!==f&&(p=si(e,g,c,f)),this._pt=new Ft(this._pt,v?M:o,g,p,(x?cr(p,x+d):d)-p,!v&&(f==="px"||g==="zIndex")&&t.autoRound!==!1?mS:yo),this._pt.u=f||0,m!==f&&f!=="%"&&(this._pt.b=c,this._pt.r=pS);else if(g in o)bS.call(this,e,g,c,x?x+u:u);else if(g in e)this.add(e,g,c||e[g],x?x+u:u,r,s);else if(g!=="parseTransform"){Ho(g,u);continue}v||(g in o?b.push(g,0,o[g]):typeof e[g]=="function"?b.push(g,2,e[g]()):b.push(g,1,c||e[g])),a.push(g)}}E&&Nd(this)},render:function(e,t){if(t.tween._time||!Qo())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:In,aliases:vn,getSetter:function(e,t,n){var r=vn[t];return r&&r.indexOf(",")<0&&(t=r),t in Bn&&t!==Bt&&(e._gsap.x||In(e,"x"))?n&&qc===n?t==="scale"?xS:vS:(qc=n||{})&&(t==="scale"?SS:MS):e.style&&!zo(e.style[t])?gS:~t.indexOf("-")?_S:Ko(e,t)},core:{_removeProperty:Di,_getMatrix:tl}};zt.utils.checkPrefix=yr;zt.core.getStyleSaver=kd;(function(i,e,t,n){var r=Nt(i+","+e+","+t,function(s){Bn[s]=1});Nt(e,function(s){Yt.units[s]="deg",Xd[s]=1}),vn[r[13]]=i+","+e,Nt(n,function(s){var a=s.split(":");vn[a[1]]=r[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Nt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){Yt.units[i]="px"});zt.registerPlugin(jd);var $d=zt.registerPlugin(jd)||zt;$d.core.Tween;const DS="/yahua/assets/img1-NK-WABYQ.jpg",IS="/yahua/assets/img2-RAlzlFcq.jpg",US="/yahua/assets/img3-ByTesBPd.jpg",OS="/yahua/assets/img4-EyukDir_.jpg",NS="/yahua/assets/img5-DskvykOn.jpg",FS="/yahua/assets/img6-D-oeRpl9.jpg",BS="/yahua/assets/img7-CMMsb4nH.jpg",zS="data:image/jpeg;base64,",GS="/yahua/assets/img9-DupnUNwC.jpg",kS="/yahua/assets/img10-xig6PEr0.jpg",HS={__name:"ImageSphere",emits:["image-click"],setup(i,{emit:e}){const t=[DS,IS,US,OS,NS,FS,BS,zS,GS,kS],n=gt(null),r=e,s=new Ir;return Ao(()=>{const a=new lx,o=new tn(90,window.innerWidth/window.innerHeight,.1,1e3),l=new $u({antialias:!0,alpha:!0});l.setSize(window.innerWidth,window.innerHeight),n.value.appendChild(l.domElement),o.position.z=300;const c=new px(16777215,1.2);a.add(c);const u=new fx,d=50,p=100;for(let v=0;v<d;v++){const y=u.load(t[v%t.length]),M=new Oo({map:y}),w=new Ks(20,20),E=new Nn(w,M),b=Math.acos(-1+2*v/d),S=Math.sqrt(d*Math.PI)*b;E.position.setFromSphericalCoords(p,b,S),E.lookAt(0,0,0),s.add(E)}a.add(s);const h=new _x(o,l.domElement),_="ontouchstart"in window||navigator.maxTouchPoints>0;h.enableZoom=_;const g=new mx,m=new De;function f(v){const y=l.domElement.getBoundingClientRect();m.x=(v.clientX-y.left)/y.width*2-1,m.y=-((v.clientY-y.top)/y.height)*2+1,g.setFromCamera(m,o);const M=g.intersectObjects(s.children);if(M.length>0){const E=M[0].object.material.map.image;r("image-click",E.src)}}window.addEventListener("click",f),window.addEventListener("scroll",()=>{const v=window.scrollY,y=Math.min(2.5,1+v/800);$d.to(s.scale,{x:y,y,z:y,duration:.5})});function x(){requestAnimationFrame(x),l.render(a,o)}x()}),(a,o)=>(fr(),Gr("div",{ref_key:"container",ref:n,class:"three-container"},null,512))}},VS=wo(HS,[["__scopeId","data-v-05396441"]]),WS={props:["src"],emits:["close"],methods:{close(){this.$emit("close")}}},XS={class:"modal-content"},qS=["src"];function YS(i,e,t,n,r,s){return fr(),Gr("div",{class:"modal-backdrop",onClick:e[0]||(e[0]=cf((...a)=>s.close&&s.close(...a),["self"]))},[Xn("div",XS,[Xn("img",{src:t.src,alt:"preview"},null,8,qS)])])}const jS=wo(WS,[["render",YS]]),$S={class:"page"},KS={class:"hero"},ZS={class:"main"},QS=uf({__name:"home",setup(i){const e=gt(!1),t=gt("");function n(r){t.value=r,e.value=!0}return(r,s)=>(fr(),Gr("div",$S,[Xn("header",KS,[Us(Qh)]),Xn("main",ZS,[Us(VS,{onImageClick:n})]),e.value?(fr(),df(jS,{key:0,src:t.value,onClose:s[0]||(s[0]=a=>e.value=!1)},null,8,["src"])):ff("",!0)]))}});export{QS as default};
