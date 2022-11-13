(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const c of n)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&o(f)}).observe(document,{childList:!0,subtree:!0});function r(n){const c={};return n.integrity&&(c.integrity=n.integrity),n.referrerpolicy&&(c.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?c.credentials="include":n.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(n){if(n.ep)return;n.ep=!0;const c=r(n);fetch(n.href,c)}})();function v(){}function rt(t){return t()}function tt(){return Object.create(null)}function H(t){t.forEach(rt)}function ot(t){return typeof t=="function"}function it(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let P;function lt(t,e){return P||(P=document.createElement("a")),P.href=e,t===P.href}function ct(t){return Object.keys(t).length===0}function s(t,e){t.appendChild(e)}function et(t,e,r){t.insertBefore(e,r||null)}function k(t){t.parentNode&&t.parentNode.removeChild(t)}function u(t){return document.createElement(t)}function at(t){return document.createTextNode(t)}function h(){return at(" ")}function dt(t,e,r,o){return t.addEventListener(e,r,o),()=>t.removeEventListener(e,r,o)}function l(t,e,r){r==null?t.removeAttribute(e):t.getAttribute(e)!==r&&t.setAttribute(e,r)}function ft(t){return Array.from(t.childNodes)}let G;function L(t){G=t}const $=[],S=[],T=[],nt=[],ut=Promise.resolve();let Y=!1;function ht(){Y||(Y=!0,ut.then(st))}function F(t){T.push(t)}const J=new Set;let B=0;function st(){const t=G;do{for(;B<$.length;){const e=$[B];B++,L(e),mt(e.$$)}for(L(null),$.length=0,B=0;S.length;)S.pop()();for(let e=0;e<T.length;e+=1){const r=T[e];J.has(r)||(J.add(r),r())}T.length=0}while($.length);for(;nt.length;)nt.pop()();Y=!1,J.clear(),L(t)}function mt(t){if(t.fragment!==null){t.update(),H(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(F)}}const pt=new Set;function gt(t,e){t&&t.i&&(pt.delete(t),t.i(e))}function yt(t,e,r,o){const{fragment:n,after_update:c}=t.$$;n&&n.m(e,r),o||F(()=>{const f=t.$$.on_mount.map(rt).filter(ot);t.$$.on_destroy?t.$$.on_destroy.push(...f):H(f),t.$$.on_mount=[]}),c.forEach(F)}function _t(t,e){const r=t.$$;r.fragment!==null&&(H(r.on_destroy),r.fragment&&r.fragment.d(e),r.on_destroy=r.fragment=null,r.ctx=[])}function bt(t,e){t.$$.dirty[0]===-1&&($.push(t),ht(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function vt(t,e,r,o,n,c,f,b=[-1]){const m=G;L(t);const i=t.$$={fragment:null,ctx:[],props:c,update:v,not_equal:n,bound:tt(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(m?m.$$.context:[])),callbacks:tt(),dirty:b,skip_bound:!1,root:e.target||m.$$.root};f&&f(i.root);let a=!1;if(i.ctx=r?r(t,e.props||{},(d,p,...y)=>{const w=y.length?y[0]:p;return i.ctx&&n(i.ctx[d],i.ctx[d]=w)&&(!i.skip_bound&&i.bound[d]&&i.bound[d](w),a&&bt(t,d)),p}):[],i.update(),a=!0,H(i.before_update),i.fragment=o?o(i.ctx):!1,e.target){if(e.hydrate){const d=ft(e.target);i.fragment&&i.fragment.l(d),d.forEach(k)}else i.fragment&&i.fragment.c();e.intro&&gt(t.$$.fragment),yt(t,e.target,e.anchor,e.customElement),st()}L(m)}class wt{$destroy(){_t(this,1),this.$destroy=v}$on(e,r){if(!ot(r))return v;const o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(r),()=>{const n=o.indexOf(r);n!==-1&&o.splice(n,1)}}$set(e){this.$$set&&!ct(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const xt="/assets/profile.6c8c94f4.svg";function kt(t){let e,r,o,n,c,f,b,m,i,a,d,p,y,w,C,K,E,R,q,D,I,V,g,A,Q,N,j,W,O,z,_,M,U,X;return{c(){e=u("main"),r=u("div"),r.innerHTML=`<h1 class="font700 white center middle">\uC548\uB155\uD558\uC138\uC694</h1> 
		<h1 class="font700 white center middle">\uC800\uB294 redmen4772\uC785\uB2C8\uB2E4</h1> 
		<h1 class="font700 white center middle" style="transform: rotate(90deg) !important;">&gt;</h1>`,o=h(),n=u("div"),c=u("div"),f=u("img"),m=h(),i=u("h1"),i.textContent="redmen4772",a=h(),d=u("h1"),d.innerHTML="<br/>",p=h(),y=u("h1"),y.textContent="\uC65C \uC544\uBB34\uB7F0 \uB0B4\uC6A9\uC774 \uC5C6\uB0D0\uAD6C\uC694?",w=h(),C=u("h1"),C.textContent=".",K=h(),E=u("h1"),E.textContent=".",R=h(),q=u("h1"),q.textContent=".",D=h(),I=u("h4"),I.textContent="\uCC44\uC6B0\uAE30 \uADC0\uCC2E\uC558\uAC70\uB4E0\uC694",V=h(),g=u("div"),A=u("h1"),A.textContent="\uB354 \uAD81\uAE08\uD55C\uC810\uC774 \uC788\uC73C\uC2E0\uAC00\uC694?",Q=h(),N=u("div"),j=u("p"),W=h(),O=u("footer"),O.innerHTML='<p class="svelte-t3lqsm">Copyright 2022. redmen4772 All rights reserved<br/>\uB9CC\uB4E4\uAE30 \uAC81\uB098 \uADC0\uCC2E\uB124</p>',z=h(),_=u("link"),M=u("style"),M.textContent=`*{
			font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
			font-variation-settings: 'wght' 400;
			font-synthesis: none;
			text-rendering: optimizeLegibility;
			-webkit-font-smoothing: antialiased;
			-moz-osx-font-smoothing: grayscale;
			-webkit-text-size-adjust: 100%;
			position: relative;
		}
		body {
			margin: 0;
			overflow: hidden;
		}
		#app {
			scroll-snap-type: y mandatory;
			overflow-x: hidden;
			overflow-y: auto;
			color: rgba(255, 255, 255, 0.87);
			background-color: #242424;
			width: 100vw;
			height: 100vh;
			margin: 0;
			padding: 0;
		}
		#app::-webkit-scrollbar{
            width: 15px;
        }
        #app::-webkit-scrollbar-thumb{
            background-clip: padding-box;
            border-radius: 6px;
            border: 3.5px solid transparent;
            background-color: #333333;
        }
        #app::-webkit-scrollbar-track{
            background-color: #1d1d1d;
        }
		.white{
			color: #ffffff;
		}
		.font700{
			font-variation-settings: 'wght' 700;
		}
		.center{
			text-align: center;
		}
		.middle{
			top: 42%;
			transform: translateY(-50%);
		}
		.showed:not(.discordServerJoinButton){
			opacity: 1 !important;
			transition: all 1s;
			transform: translateY(0px) !important;
		}
		.hideItem:not(.discordServerJoinButton){
			transform: translateY(15px);
			opacity: 0;
		}`,l(r,"class","container svelte-t3lqsm"),lt(f.src,b=xt)||l(f,"src",b),l(f,"class","profile showed svelte-t3lqsm"),l(f,"alt","profile"),l(f,"loading","lazy"),l(i,"class","font700 white"),l(d,"class","font700 white center"),l(y,"class","font700 white center"),l(C,"class","font700 white center"),l(E,"class","font700 white center"),l(q,"class","font700 white center"),l(I,"class","font700 white center"),l(n,"class","container svelte-t3lqsm"),l(A,"class","font700 white center middle"),l(j,"class","svelte-t3lqsm"),l(N,"class","discordServerJoinButton showed hideItem svelte-t3lqsm"),l(O,"class","hideItem showed svelte-t3lqsm"),l(g,"class","container svelte-t3lqsm"),l(e,"class","svelte-t3lqsm"),document.title="about me",l(_,"rel","stylesheet"),l(_,"as","style"),l(_,"crossorigin","true"),l(_,"href","https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/variable/pretendardvariable-dynamic-subset.css")},m(x,Z){et(x,e,Z),s(e,r),t[1](r),s(e,o),s(e,n),s(n,c),s(c,f),s(n,m),s(n,i),s(n,a),s(n,d),s(n,p),s(n,y),s(n,w),s(n,C),s(n,K),s(n,E),s(n,R),s(n,q),s(n,D),s(n,I),t[2](n),s(e,V),s(e,g),s(g,A),s(g,Q),s(g,N),s(N,j),s(g,W),s(g,O),t[4](g),et(x,z,Z),s(document.head,_),s(document.head,M),U||(X=dt(j,"click",t[3]),U=!0)},p:v,i:v,o:v,d(x){x&&k(e),t[1](null),t[2](null),t[4](null),x&&k(z),k(_),k(M),U=!1,X()}}}function $t(t,e,r){let o=[];const n=a=>new Promise(d=>setTimeout(d,a)),c=new IntersectionObserver(async a=>{for(let d of a)if(d.isIntersecting)for(let p of[...d.target.children])await n(600),p.classList.add("showed");else for(let p of[...d.target.children])p.classList.remove("showed")});function f(a){S[a?"unshift":"push"](()=>{o[o.length]=a,r(0,o)})}function b(a){S[a?"unshift":"push"](()=>{o[o.length]=a,r(0,o)})}const m=()=>location.href="https://discord.gg/Hf8T32UPs7";function i(a){S[a?"unshift":"push"](()=>{o[o.length]=a,r(0,o)})}return t.$$.update=()=>{if(t.$$.dirty&1)for(let a of o){c.observe(a);for(let d of[...a.children])d.classList.add("hideItem")}},[o,f,b,m,i]}class Lt extends wt{constructor(e){super(),vt(this,e,$t,kt,it,{})}}new Lt({target:document.getElementById("app")});
