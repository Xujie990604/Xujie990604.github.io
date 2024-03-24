import{aC as ke,aD as De,h as me,b as B,m as V,aA as ue,p as z,r as W,aE as q,ax as ge,U as T,aq as _,aF as Je,aG as xe,aH as ae,aI as re,aJ as pe,q as O,as as Q,aK as Ee,aL as D,aM as Se,aN as he,aO as Ve,aP as Ze,x as ye,l as We,aQ as Oe,ar as et,s as Y,aR as tt,aw as nt,a as Ne,n as ot,aS as at,t as rt,A as it,M as st,Q as lt,i as He,W as ct,ay as ut,a8 as ft,C as dt,$ as vt,v as mt,aT as gt,j as _e,aU as ht,G as yt,H as wt,a3 as bt,F as xt,aV as pt,E as Et,aW as St}from"./index-Bxy9rwkz.js";import{m as Ot,M as Pt}from"./transition-f4SfVhAt.js";class j{constructor(n){let{x:t,y:a,width:r,height:o}=n;this.x=t,this.y=a,this.width=r,this.height=o}get top(){return this.y}get bottom(){return this.y+this.height}get left(){return this.x}get right(){return this.x+this.width}}function Pe(e,n){return{x:{before:Math.max(0,n.left-e.left),after:Math.max(0,e.right-n.right)},y:{before:Math.max(0,n.top-e.top),after:Math.max(0,e.bottom-n.bottom)}}}function Ie(e){return Array.isArray(e)?new j({x:e[0],y:e[1],width:0,height:0}):e.getBoundingClientRect()}function $e(e){const n=e.getBoundingClientRect(),t=getComputedStyle(e),a=t.transform;if(a){let r,o,i,s,c;if(a.startsWith("matrix3d("))r=a.slice(9,-1).split(/, /),o=+r[0],i=+r[5],s=+r[12],c=+r[13];else if(a.startsWith("matrix("))r=a.slice(7,-1).split(/, /),o=+r[0],i=+r[3],s=+r[4],c=+r[5];else return new j(n);const l=t.transformOrigin,f=n.x-s-(1-o)*parseFloat(l),d=n.y-c-(1-i)*parseFloat(l.slice(l.indexOf(" ")+1)),h=o?n.width/o:e.offsetWidth+1,v=i?n.height/i:e.offsetHeight+1;return new j({x:f,y:d,width:h,height:v})}else return new j(n)}function K(e,n,t){if(typeof e.animate>"u")return{finished:Promise.resolve()};let a;try{a=e.animate(n,t)}catch{return{finished:Promise.resolve()}}return typeof a.finished>"u"&&(a.finished=new Promise(r=>{a.onfinish=()=>{r(a)}})),a}const J=new WeakMap;function At(e,n){Object.keys(n).forEach(t=>{if(ke(t)){const a=De(t),r=J.get(e);if(n[t]==null)r==null||r.forEach(o=>{const[i,s]=o;i===a&&(e.removeEventListener(a,s),r.delete(o))});else if(!r||![...r].some(o=>o[0]===a&&o[1]===n[t])){e.addEventListener(a,n[t]);const o=r||new Set;o.add([a,n[t]]),J.has(e)||J.set(e,o)}}else n[t]==null?e.removeAttribute(t):e.setAttribute(t,n[t])})}function Ct(e,n){Object.keys(n).forEach(t=>{if(ke(t)){const a=De(t),r=J.get(e);r==null||r.forEach(o=>{const[i,s]=o;i===a&&(e.removeEventListener(a,s),r.delete(o))})}else e.removeAttribute(t)})}function qe(e){if(typeof e.getRootNode!="function"){for(;e.parentNode;)e=e.parentNode;return e!==document?null:document}const n=e.getRootNode();return n!==document&&n.getRootNode({composed:!0})!==document?null:n}const fe="cubic-bezier(0.4, 0, 0.2, 1)",Rt="cubic-bezier(0.0, 0, 0.2, 1)",Tt="cubic-bezier(0.4, 0, 1, 1)";function Ft(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;for(;e;){if(n?Bt(e):we(e))return e;e=e.parentElement}return document.scrollingElement}function ee(e,n){const t=[];if(n&&e&&!n.contains(e))return t;for(;e&&(we(e)&&t.push(e),e!==n);)e=e.parentElement;return t}function we(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const n=window.getComputedStyle(e);return n.overflowY==="scroll"||n.overflowY==="auto"&&e.scrollHeight>e.clientHeight}function Bt(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const n=window.getComputedStyle(e);return["scroll","auto"].includes(n.overflowY)}function Lt(e){for(;e;){if(window.getComputedStyle(e).position==="fixed")return!0;e=e.offsetParent}return!1}const Mt=z({target:[Object,Array]},"v-dialog-transition"),kt=me()({name:"VDialogTransition",props:Mt(),setup(e,n){let{slots:t}=n;const a={onBeforeEnter(r){r.style.pointerEvents="none",r.style.visibility="hidden"},async onEnter(r,o){var h;await new Promise(v=>requestAnimationFrame(v)),await new Promise(v=>requestAnimationFrame(v)),r.style.visibility="";const{x:i,y:s,sx:c,sy:l,speed:f}=Ce(e.target,r),d=K(r,[{transform:`translate(${i}px, ${s}px) scale(${c}, ${l})`,opacity:0},{}],{duration:225*f,easing:Rt});(h=Ae(r))==null||h.forEach(v=>{K(v,[{opacity:0},{opacity:0,offset:.33},{}],{duration:225*2*f,easing:fe})}),d.finished.then(()=>o())},onAfterEnter(r){r.style.removeProperty("pointer-events")},onBeforeLeave(r){r.style.pointerEvents="none"},async onLeave(r,o){var h;await new Promise(v=>requestAnimationFrame(v));const{x:i,y:s,sx:c,sy:l,speed:f}=Ce(e.target,r);K(r,[{},{transform:`translate(${i}px, ${s}px) scale(${c}, ${l})`,opacity:0}],{duration:125*f,easing:Tt}).finished.then(()=>o()),(h=Ae(r))==null||h.forEach(v=>{K(v,[{},{opacity:0,offset:.2},{opacity:0}],{duration:125*2*f,easing:fe})})},onAfterLeave(r){r.style.removeProperty("pointer-events")}};return()=>e.target?B(ue,V({name:"dialog-transition"},a,{css:!1}),t):B(ue,{name:"dialog-transition"},t)}});function Ae(e){var t;const n=(t=e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list"))==null?void 0:t.children;return n&&[...n]}function Ce(e,n){const t=Ie(e),a=$e(n),[r,o]=getComputedStyle(n).transformOrigin.split(" ").map(C=>parseFloat(C)),[i,s]=getComputedStyle(n).getPropertyValue("--v-overlay-anchor-origin").split(" ");let c=t.left+t.width/2;i==="left"||s==="left"?c-=t.width/2:(i==="right"||s==="right")&&(c+=t.width/2);let l=t.top+t.height/2;i==="top"||s==="top"?l-=t.height/2:(i==="bottom"||s==="bottom")&&(l+=t.height/2);const f=t.width/a.width,d=t.height/a.height,h=Math.max(1,f,d),v=f/h||0,m=d/h||0,g=a.width*a.height/(window.innerWidth*window.innerHeight),A=g>.12?Math.min(1.5,(g-.12)*10+1):1;return{x:c-(r+a.left),y:l-(o+a.top),sx:v,sy:m,speed:A}}function ie(e,n){return{x:e.x+n.x,y:e.y+n.y}}function Dt(e,n){return{x:e.x-n.x,y:e.y-n.y}}function Re(e,n){if(e.side==="top"||e.side==="bottom"){const{side:t,align:a}=e,r=a==="left"?0:a==="center"?n.width/2:a==="right"?n.width:a,o=t==="top"?0:t==="bottom"?n.height:t;return ie({x:r,y:o},n)}else if(e.side==="left"||e.side==="right"){const{side:t,align:a}=e,r=t==="left"?0:t==="right"?n.width:t,o=a==="top"?0:a==="center"?n.height/2:a==="bottom"?n.height:a;return ie({x:r,y:o},n)}return ie({x:n.width/2,y:n.height/2},n)}const ze={static:Nt,connected:_t},Vt=z({locationStrategy:{type:[String,Function],default:"static",validator:e=>typeof e=="function"||e in ze},location:{type:String,default:"bottom"},origin:{type:String,default:"auto"},offset:[Number,String,Array]},"VOverlay-location-strategies");function Wt(e,n){const t=W({}),a=W();q&&ge(()=>!!(n.isActive.value&&e.locationStrategy),o=>{var i,s;T(()=>e.locationStrategy,o),_(()=>{window.removeEventListener("resize",r),a.value=void 0}),window.addEventListener("resize",r,{passive:!0}),typeof e.locationStrategy=="function"?a.value=(i=e.locationStrategy(n,e,t))==null?void 0:i.updateLocation:a.value=(s=ze[e.locationStrategy](n,e,t))==null?void 0:s.updateLocation});function r(o){var i;(i=a.value)==null||i.call(a,o)}return{contentStyles:t,updateLocation:a}}function Nt(){}function Ht(e,n){n?e.style.removeProperty("left"):e.style.removeProperty("right");const t=$e(e);return n?t.x+=parseFloat(e.style.right||0):t.x-=parseFloat(e.style.left||0),t.y-=parseFloat(e.style.top||0),t}function _t(e,n,t){(Array.isArray(e.target.value)||Lt(e.target.value))&&Object.assign(t.value,{position:"fixed",top:0,[e.isRtl.value?"right":"left"]:0});const{preferredAnchor:r,preferredOrigin:o}=Je(()=>{const m=xe(n.location,e.isRtl.value),g=n.origin==="overlap"?m:n.origin==="auto"?ae(m):xe(n.origin,e.isRtl.value);return m.side===g.side&&m.align===re(g).align?{preferredAnchor:pe(m),preferredOrigin:pe(g)}:{preferredAnchor:m,preferredOrigin:g}}),[i,s,c,l]=["minWidth","minHeight","maxWidth","maxHeight"].map(m=>O(()=>{const g=parseFloat(n[m]);return isNaN(g)?1/0:g})),f=O(()=>{if(Array.isArray(n.offset))return n.offset;if(typeof n.offset=="string"){const m=n.offset.split(" ").map(parseFloat);return m.length<2&&m.push(0),m}return typeof n.offset=="number"?[n.offset,0]:[0,0]});let d=!1;const h=new ResizeObserver(()=>{d&&v()});T([e.target,e.contentEl],(m,g)=>{let[A,C]=m,[p,b]=g;p&&!Array.isArray(p)&&h.unobserve(p),A&&!Array.isArray(A)&&h.observe(A),b&&h.unobserve(b),C&&h.observe(C)},{immediate:!0}),_(()=>{h.disconnect()});function v(){if(d=!1,requestAnimationFrame(()=>d=!0),!e.target.value||!e.contentEl.value)return;const m=Ie(e.target.value),g=Ht(e.contentEl.value,e.isRtl.value),A=ee(e.contentEl.value),C=12;A.length||(A.push(document.documentElement),e.contentEl.value.style.top&&e.contentEl.value.style.left||(g.x-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x")||0),g.y-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y")||0)));const p=A.reduce((S,x)=>{const y=x.getBoundingClientRect(),w=new j({x:x===document.documentElement?0:y.x,y:x===document.documentElement?0:y.y,width:x.clientWidth,height:x.clientHeight});return S?new j({x:Math.max(S.left,w.left),y:Math.max(S.top,w.top),width:Math.min(S.right,w.right)-Math.max(S.left,w.left),height:Math.min(S.bottom,w.bottom)-Math.max(S.top,w.top)}):w},void 0);p.x+=C,p.y+=C,p.width-=C*2,p.height-=C*2;let b={anchor:r.value,origin:o.value};function I(S){const x=new j(g),y=Re(S.anchor,m),w=Re(S.origin,x);let{x:L,y:k}=Dt(y,w);switch(S.anchor.side){case"top":k-=f.value[0];break;case"bottom":k+=f.value[0];break;case"left":L-=f.value[0];break;case"right":L+=f.value[0];break}switch(S.anchor.align){case"top":k-=f.value[1];break;case"bottom":k+=f.value[1];break;case"left":L-=f.value[1];break;case"right":L+=f.value[1];break}return x.x+=L,x.y+=k,x.width=Math.min(x.width,c.value),x.height=Math.min(x.height,l.value),{overflows:Pe(x,p),x:L,y:k}}let M=0,R=0;const u={x:0,y:0},F={x:!1,y:!1};let ne=-1;for(;!(ne++>10);){const{x:S,y:x,overflows:y}=I(b);M+=S,R+=x,g.x+=S,g.y+=x;{const w=Ee(b.anchor),L=y.x.before||y.x.after,k=y.y.before||y.y.after;let U=!1;if(["x","y"].forEach(P=>{if(P==="x"&&L&&!F.x||P==="y"&&k&&!F.y){const $={anchor:{...b.anchor},origin:{...b.origin}},G=P==="x"?w==="y"?re:ae:w==="y"?ae:re;$.anchor=G($.anchor),$.origin=G($.origin);const{overflows:N}=I($);(N[P].before<=y[P].before&&N[P].after<=y[P].after||N[P].before+N[P].after<(y[P].before+y[P].after)/2)&&(b=$,U=F[P]=!0)}}),U)continue}y.x.before&&(M+=y.x.before,g.x+=y.x.before),y.x.after&&(M-=y.x.after,g.x-=y.x.after),y.y.before&&(R+=y.y.before,g.y+=y.y.before),y.y.after&&(R-=y.y.after,g.y-=y.y.after);{const w=Pe(g,p);u.x=p.width-w.x.before-w.x.after,u.y=p.height-w.y.before-w.y.after,M+=w.x.before,g.x+=w.x.before,R+=w.y.before,g.y+=w.y.before}break}const oe=Ee(b.anchor);return Object.assign(t.value,{"--v-overlay-anchor-origin":`${b.anchor.side} ${b.anchor.align}`,transformOrigin:`${b.origin.side} ${b.origin.align}`,top:D(se(R)),left:e.isRtl.value?void 0:D(se(M)),right:e.isRtl.value?D(se(-M)):void 0,minWidth:D(oe==="y"?Math.min(i.value,m.width):i.value),maxWidth:D(Te(Se(u.x,i.value===1/0?0:i.value,c.value))),maxHeight:D(Te(Se(u.y,s.value===1/0?0:s.value,l.value)))}),{available:u,contentBox:g}}return T(()=>[r.value,o.value,n.offset,n.minWidth,n.minHeight,n.maxWidth,n.maxHeight],()=>v()),Q(()=>{const m=v();if(!m)return;const{available:g,contentBox:A}=m;A.height>g.y&&requestAnimationFrame(()=>{v(),requestAnimationFrame(()=>{v()})})}),{updateLocation:v}}function se(e){return Math.round(e*devicePixelRatio)/devicePixelRatio}function Te(e){return Math.ceil(e*devicePixelRatio)/devicePixelRatio}let de=!0;const te=[];function It(e){!de||te.length?(te.push(e),ve()):(de=!1,e(),ve())}let Fe=-1;function ve(){cancelAnimationFrame(Fe),Fe=requestAnimationFrame(()=>{const e=te.shift();e&&e(),te.length?ve():de=!0})}const Z={none:null,close:zt,block:jt,reposition:Yt},$t=z({scrollStrategy:{type:[String,Function],default:"block",validator:e=>typeof e=="function"||e in Z}},"VOverlay-scroll-strategies");function qt(e,n){if(!q)return;let t;he(async()=>{t==null||t.stop(),n.isActive.value&&e.scrollStrategy&&(t=Ve(),await Q(),t.active&&t.run(()=>{var a;typeof e.scrollStrategy=="function"?e.scrollStrategy(n,e,t):(a=Z[e.scrollStrategy])==null||a.call(Z,n,e,t)}))}),_(()=>{t==null||t.stop()})}function zt(e){function n(t){e.isActive.value=!1}je(e.targetEl.value??e.contentEl.value,n)}function jt(e,n){var i;const t=(i=e.root.value)==null?void 0:i.offsetParent,a=[...new Set([...ee(e.targetEl.value,n.contained?t:void 0),...ee(e.contentEl.value,n.contained?t:void 0)])].filter(s=>!s.classList.contains("v-overlay-scroll-blocked")),r=window.innerWidth-document.documentElement.offsetWidth,o=(s=>we(s)&&s)(t||document.documentElement);o&&e.root.value.classList.add("v-overlay--scroll-blocked"),a.forEach((s,c)=>{s.style.setProperty("--v-body-scroll-x",D(-s.scrollLeft)),s.style.setProperty("--v-body-scroll-y",D(-s.scrollTop)),s!==document.documentElement&&s.style.setProperty("--v-scrollbar-offset",D(r)),s.classList.add("v-overlay-scroll-blocked")}),_(()=>{a.forEach((s,c)=>{const l=parseFloat(s.style.getPropertyValue("--v-body-scroll-x")),f=parseFloat(s.style.getPropertyValue("--v-body-scroll-y")),d=s.style.scrollBehavior;s.style.scrollBehavior="auto",s.style.removeProperty("--v-body-scroll-x"),s.style.removeProperty("--v-body-scroll-y"),s.style.removeProperty("--v-scrollbar-offset"),s.classList.remove("v-overlay-scroll-blocked"),s.scrollLeft=-l,s.scrollTop=-f,s.style.scrollBehavior=d}),o&&e.root.value.classList.remove("v-overlay--scroll-blocked")})}function Yt(e,n,t){let a=!1,r=-1,o=-1;function i(s){It(()=>{var f,d;const c=performance.now();(d=(f=e.updateLocation).value)==null||d.call(f,s),a=(performance.now()-c)/(1e3/60)>2})}o=(typeof requestIdleCallback>"u"?s=>s():requestIdleCallback)(()=>{t.run(()=>{je(e.targetEl.value??e.contentEl.value,s=>{a?(cancelAnimationFrame(r),r=requestAnimationFrame(()=>{r=requestAnimationFrame(()=>{i(s)})})):i(s)})})}),_(()=>{typeof cancelIdleCallback<"u"&&cancelIdleCallback(o),cancelAnimationFrame(r)})}function je(e,n){const t=[document,...ee(e)];t.forEach(a=>{a.addEventListener("scroll",n,{passive:!0})}),_(()=>{t.forEach(a=>{a.removeEventListener("scroll",n)})})}const Ut=Symbol.for("vuetify:v-menu"),Gt=z({closeDelay:[Number,String],openDelay:[Number,String]},"delay");function Xt(e,n){let t=()=>{};function a(i){t==null||t();const s=Number(i?e.openDelay:e.closeDelay);return new Promise(c=>{t=Ze(s,()=>{n==null||n(i),c(i)})})}function r(){return a(!0)}function o(){return a(!1)}return{clearDelay:t,runOpenDelay:r,runCloseDelay:o}}const Kt=z({target:[String,Object],activator:[String,Object],activatorProps:{type:Object,default:()=>({})},openOnClick:{type:Boolean,default:void 0},openOnHover:Boolean,openOnFocus:{type:Boolean,default:void 0},closeOnContentClick:Boolean,...Gt()},"VOverlay-activator");function Qt(e,n){let{isActive:t,isTop:a}=n;const r=ye("useActivator"),o=W();let i=!1,s=!1,c=!0;const l=O(()=>e.openOnFocus||e.openOnFocus==null&&e.openOnHover),f=O(()=>e.openOnClick||e.openOnClick==null&&!e.openOnHover&&!l.value),{runOpenDelay:d,runCloseDelay:h}=Xt(e,u=>{u===(e.openOnHover&&i||l.value&&s)&&!(e.openOnHover&&t.value&&!a.value)&&(t.value!==u&&(c=!0),t.value=u)}),v=W(),m={onClick:u=>{u.stopPropagation(),o.value=u.currentTarget||u.target,t.value||(v.value=[u.clientX,u.clientY]),t.value=!t.value},onMouseenter:u=>{var F;(F=u.sourceCapabilities)!=null&&F.firesTouchEvents||(i=!0,o.value=u.currentTarget||u.target,d())},onMouseleave:u=>{i=!1,h()},onFocus:u=>{et(u.target,":focus-visible")!==!1&&(s=!0,u.stopPropagation(),o.value=u.currentTarget||u.target,d())},onBlur:u=>{s=!1,u.stopPropagation(),h()}},g=O(()=>{const u={};return f.value&&(u.onClick=m.onClick),e.openOnHover&&(u.onMouseenter=m.onMouseenter,u.onMouseleave=m.onMouseleave),l.value&&(u.onFocus=m.onFocus,u.onBlur=m.onBlur),u}),A=O(()=>{const u={};if(e.openOnHover&&(u.onMouseenter=()=>{i=!0,d()},u.onMouseleave=()=>{i=!1,h()}),l.value&&(u.onFocusin=()=>{s=!0,d()},u.onFocusout=()=>{s=!1,h()}),e.closeOnContentClick){const F=We(Ut,null);u.onClick=()=>{t.value=!1,F==null||F.closeParents()}}return u}),C=O(()=>{const u={};return e.openOnHover&&(u.onMouseenter=()=>{c&&(i=!0,c=!1,d())},u.onMouseleave=()=>{i=!1,h()}),u});T(a,u=>{u&&(e.openOnHover&&!i&&(!l.value||!s)||l.value&&!s&&(!e.openOnHover||!i))&&(t.value=!1)}),T(t,u=>{u||setTimeout(()=>{v.value=void 0})},{flush:"post"});const p=W();he(()=>{p.value&&Q(()=>{o.value=Oe(p.value)})});const b=W(),I=O(()=>e.target==="cursor"&&v.value?v.value:b.value?Oe(b.value):Ye(e.target,r)||o.value),M=O(()=>Array.isArray(I.value)?void 0:I.value);let R;return T(()=>!!e.activator,u=>{u&&q?(R=Ve(),R.run(()=>{Jt(e,r,{activatorEl:o,activatorEvents:g})})):R&&R.stop()},{flush:"post",immediate:!0}),_(()=>{R==null||R.stop()}),{activatorEl:o,activatorRef:p,target:I,targetEl:M,targetRef:b,activatorEvents:g,contentEvents:A,scrimEvents:C}}function Jt(e,n,t){let{activatorEl:a,activatorEvents:r}=t;T(()=>e.activator,(c,l)=>{if(l&&c!==l){const f=s(l);f&&i(f)}c&&Q(()=>o())},{immediate:!0}),T(()=>e.activatorProps,()=>{o()}),_(()=>{i()});function o(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:s(),l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;c&&At(c,V(r.value,l))}function i(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:s(),l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;c&&Ct(c,V(r.value,l))}function s(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:e.activator;const l=Ye(c,n);return a.value=(l==null?void 0:l.nodeType)===Node.ELEMENT_NODE?l:void 0,a.value}}function Ye(e,n){var a,r;if(!e)return;let t;if(e==="parent"){let o=(r=(a=n==null?void 0:n.proxy)==null?void 0:a.$el)==null?void 0:r.parentNode;for(;o!=null&&o.hasAttribute("data-no-activator");)o=o.parentNode;t=o}else typeof e=="string"?t=document.querySelector(e):"$el"in e?t=e.$el:t=e;return t}function Zt(){if(!q)return Y(!1);const{ssr:e}=tt();if(e){const n=Y(!1);return nt(()=>{n.value=!0}),n}else return Y(!0)}const en=z({eager:Boolean},"lazy");function tn(e,n){const t=Y(!1),a=O(()=>t.value||e.eager||n.value);T(n,()=>t.value=!0);function r(){e.eager||(t.value=!1)}return{isBooted:t,hasContent:a,onAfterLeave:r}}function Ue(){const n=ye("useScopeId").vnode.scopeId;return{scopeId:n?{[n]:""}:void 0}}const Be=Symbol.for("vuetify:stack"),X=Ne([]);function nn(e,n,t){const a=ye("useStack"),r=!t,o=We(Be,void 0),i=Ne({activeChildren:new Set});ot(Be,i);const s=Y(+n.value);ge(e,()=>{var d;const f=(d=X.at(-1))==null?void 0:d[1];s.value=f?f+10:+n.value,r&&X.push([a.uid,s.value]),o==null||o.activeChildren.add(a.uid),_(()=>{if(r){const h=rt(X).findIndex(v=>v[0]===a.uid);X.splice(h,1)}o==null||o.activeChildren.delete(a.uid)})});const c=Y(!0);r&&he(()=>{var d;const f=((d=X.at(-1))==null?void 0:d[0])===a.uid;setTimeout(()=>c.value=f)});const l=O(()=>!i.activeChildren.size);return{globalTop:at(c),localTop:l,stackStyles:O(()=>({zIndex:s.value}))}}function on(e){return{teleportTarget:O(()=>{const t=e.value;if(t===!0||!q)return;const a=t===!1?document.body:typeof t=="string"?document.querySelector(t):t;if(a==null)return;let r=a.querySelector(":scope > .v-overlay-container");return r||(r=document.createElement("div"),r.className="v-overlay-container",a.appendChild(r)),r})}}function an(){return!0}function Ge(e,n,t){if(!e||Xe(e,t)===!1)return!1;const a=qe(n);if(typeof ShadowRoot<"u"&&a instanceof ShadowRoot&&a.host===e.target)return!1;const r=(typeof t.value=="object"&&t.value.include||(()=>[]))();return r.push(n),!r.some(o=>o==null?void 0:o.contains(e.target))}function Xe(e,n){return(typeof n.value=="object"&&n.value.closeConditional||an)(e)}function rn(e,n,t){const a=typeof t.value=="function"?t.value:t.value.handler;n._clickOutside.lastMousedownWasOutside&&Ge(e,n,t)&&setTimeout(()=>{Xe(e,t)&&a&&a(e)},0)}function Le(e,n){const t=qe(e);n(document),typeof ShadowRoot<"u"&&t instanceof ShadowRoot&&n(t)}const sn={mounted(e,n){const t=r=>rn(r,e,n),a=r=>{e._clickOutside.lastMousedownWasOutside=Ge(r,e,n)};Le(e,r=>{r.addEventListener("click",t,!0),r.addEventListener("mousedown",a,!0)}),e._clickOutside||(e._clickOutside={lastMousedownWasOutside:!1}),e._clickOutside[n.instance.$.uid]={onClick:t,onMousedown:a}},unmounted(e,n){e._clickOutside&&(Le(e,t=>{var o;if(!t||!((o=e._clickOutside)!=null&&o[n.instance.$.uid]))return;const{onClick:a,onMousedown:r}=e._clickOutside[n.instance.$.uid];t.removeEventListener("click",a,!0),t.removeEventListener("mousedown",r,!0)}),delete e._clickOutside[n.instance.$.uid])}};function ln(e){const{modelValue:n,color:t,...a}=e;return B(ue,{name:"fade-transition",appear:!0},{default:()=>[e.modelValue&&B("div",V({class:["v-overlay__scrim",e.color.backgroundColorClasses.value],style:e.color.backgroundColorStyles.value},a),null)]})}const Ke=z({absolute:Boolean,attach:[Boolean,String,Object],closeOnBack:{type:Boolean,default:!0},contained:Boolean,contentClass:null,contentProps:null,disabled:Boolean,opacity:[Number,String],noClickAnimation:Boolean,modelValue:Boolean,persistent:Boolean,scrim:{type:[Boolean,String],default:!0},zIndex:{type:[Number,String],default:2e3},...Kt(),...it(),...st(),...en(),...Vt(),...$t(),...lt(),...Ot()},"VOverlay"),Me=me()({name:"VOverlay",directives:{ClickOutside:sn},inheritAttrs:!1,props:{_disableGlobalStack:Boolean,...Ke()},emits:{"click:outside":e=>!0,"update:modelValue":e=>!0,afterLeave:()=>!0},setup(e,n){let{slots:t,attrs:a,emit:r}=n;const o=He(e,"modelValue"),i=O({get:()=>o.value,set:E=>{E&&e.disabled||(o.value=E)}}),{teleportTarget:s}=on(O(()=>e.attach||e.contained)),{themeClasses:c}=ct(e),{rtlClasses:l,isRtl:f}=ut(),{hasContent:d,onAfterLeave:h}=tn(e,i),v=ft(O(()=>typeof e.scrim=="string"?e.scrim:null)),{globalTop:m,localTop:g,stackStyles:A}=nn(i,dt(e,"zIndex"),e._disableGlobalStack),{activatorEl:C,activatorRef:p,target:b,targetEl:I,targetRef:M,activatorEvents:R,contentEvents:u,scrimEvents:F}=Qt(e,{isActive:i,isTop:g}),{dimensionStyles:ne}=vt(e),oe=Zt(),{scopeId:S}=Ue();T(()=>e.disabled,E=>{E&&(i.value=!1)});const x=W(),y=W(),{contentStyles:w,updateLocation:L}=Wt(e,{isRtl:f,contentEl:y,target:b,isActive:i});qt(e,{root:x,contentEl:y,targetEl:I,isActive:i,updateLocation:L});function k(E){r("click:outside",E),e.persistent?N():i.value=!1}function U(){return i.value&&m.value}q&&T(i,E=>{E?window.addEventListener("keydown",P):window.removeEventListener("keydown",P)},{immediate:!0}),mt(()=>{q&&window.removeEventListener("keydown",P)});function P(E){var H,be;E.key==="Escape"&&m.value&&(e.persistent?N():(i.value=!1,(H=y.value)!=null&&H.contains(document.activeElement)&&((be=C.value)==null||be.focus())))}const $=gt();ge(()=>e.closeOnBack,()=>{pt($,E=>{m.value&&i.value?(E(!1),e.persistent?N():i.value=!1):E()})});const G=W();T(()=>i.value&&(e.absolute||e.contained)&&s.value==null,E=>{if(E){const H=Ft(x.value);H&&H!==document.scrollingElement&&(G.value=H.scrollTop)}});function N(){e.noClickAnimation||y.value&&K(y.value,[{transformOrigin:"center"},{transform:"scale(1.03)"},{transformOrigin:"center"}],{duration:150,easing:fe})}function Qe(){h(),r("afterLeave")}return _e(()=>{var E;return B(xt,null,[(E=t.activator)==null?void 0:E.call(t,{isActive:i.value,props:V({ref:p,targetRef:M},R.value,e.activatorProps)}),oe.value&&d.value&&B(ht,{disabled:!s.value,to:s.value},{default:()=>[B("div",V({class:["v-overlay",{"v-overlay--absolute":e.absolute||e.contained,"v-overlay--active":i.value,"v-overlay--contained":e.contained},c.value,l.value,e.class],style:[A.value,{"--v-overlay-opacity":e.opacity,top:D(G.value)},e.style],ref:x},S,a),[B(ln,V({color:v,modelValue:i.value&&!!e.scrim},F.value),null),B(Pt,{appear:!0,persisted:!0,transition:e.transition,target:b.value,onAfterLeave:Qe},{default:()=>{var H;return[yt(B("div",V({ref:y,class:["v-overlay__content",e.contentClass],style:[ne.value,w.value]},u.value,e.contentProps),[(H=t.default)==null?void 0:H.call(t,{isActive:i})]),[[wt,i.value],[bt("click-outside"),{handler:k,closeConditional:U,include:()=>[C.value]}]])]}})])]})])}),{activatorEl:C,target:b,animateClick:N,contentEl:y,globalTop:m,localTop:g,updateLocation:L}}}),le=Symbol("Forwarded refs");function ce(e,n){let t=e;for(;t;){const a=Reflect.getOwnPropertyDescriptor(t,n);if(a)return a;t=Object.getPrototypeOf(t)}}function cn(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),a=1;a<n;a++)t[a-1]=arguments[a];return e[le]=t,new Proxy(e,{get(r,o){if(Reflect.has(r,o))return Reflect.get(r,o);if(!(typeof o=="symbol"||o.startsWith("$")||o.startsWith("__"))){for(const i of t)if(i.value&&Reflect.has(i.value,o)){const s=Reflect.get(i.value,o);return typeof s=="function"?s.bind(i.value):s}}},has(r,o){if(Reflect.has(r,o))return!0;if(typeof o=="symbol"||o.startsWith("$")||o.startsWith("__"))return!1;for(const i of t)if(i.value&&Reflect.has(i.value,o))return!0;return!1},set(r,o,i){if(Reflect.has(r,o))return Reflect.set(r,o,i);if(typeof o=="symbol"||o.startsWith("$")||o.startsWith("__"))return!1;for(const s of t)if(s.value&&Reflect.has(s.value,o))return Reflect.set(s.value,o,i);return!1},getOwnPropertyDescriptor(r,o){var s;const i=Reflect.getOwnPropertyDescriptor(r,o);if(i)return i;if(!(typeof o=="symbol"||o.startsWith("$")||o.startsWith("__"))){for(const c of t){if(!c.value)continue;const l=ce(c.value,o)??("_"in c.value?ce((s=c.value._)==null?void 0:s.setupState,o):void 0);if(l)return l}for(const c of t){const l=c.value&&c.value[le];if(!l)continue;const f=l.slice();for(;f.length;){const d=f.shift(),h=ce(d.value,o);if(h)return h;const v=d.value&&d.value[le];v&&f.push(...v)}}}}})}const un=z({fullscreen:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,...Ke({origin:"center center",scrollStrategy:"block",transition:{component:kt},zIndex:2400})},"VDialog"),vn=me()({name:"VDialog",props:un(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:t}=n;const a=He(e,"modelValue"),{scopeId:r}=Ue(),o=W();function i(c){var d,h;const l=c.relatedTarget,f=c.target;if(l!==f&&((d=o.value)!=null&&d.contentEl)&&((h=o.value)!=null&&h.globalTop)&&![document,o.value.contentEl].includes(f)&&!o.value.contentEl.contains(f)){const v=St(o.value.contentEl);if(!v.length)return;const m=v[0],g=v[v.length-1];l===m?g.focus():m.focus()}}q&&T(()=>a.value&&e.retainFocus,c=>{c?document.addEventListener("focusin",i):document.removeEventListener("focusin",i)},{immediate:!0}),T(a,async c=>{var l,f;await Q(),c?(l=o.value.contentEl)==null||l.focus({preventScroll:!0}):(f=o.value.activatorEl)==null||f.focus({preventScroll:!0})});const s=O(()=>V({"aria-haspopup":"dialog","aria-expanded":String(a.value)},e.activatorProps));return _e(()=>{const c=Me.filterProps(e);return B(Me,V({ref:o,class:["v-dialog",{"v-dialog--fullscreen":e.fullscreen,"v-dialog--scrollable":e.scrollable},e.class],style:e.style},c,{modelValue:a.value,"onUpdate:modelValue":l=>a.value=l,"aria-modal":"true",activatorProps:s.value,role:"dialog"},r),{activator:t.activator,default:function(){for(var l=arguments.length,f=new Array(l),d=0;d<l;d++)f[d]=arguments[d];return B(Et,{root:"VDialog"},{default:()=>{var h;return[(h=t.default)==null?void 0:h.call(t,...f)]}})}})}),cn({},o)}});export{vn as V,un as m};
