(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const c of n)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&o(f)}).observe(document,{childList:!0,subtree:!0});function r(n){const c={};return n.integrity&&(c.integrity=n.integrity),n.referrerpolicy&&(c.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?c.credentials="include":n.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(n){if(n.ep)return;n.ep=!0;const c=r(n);fetch(n.href,c)}})();function v(){}function rt(t){return t()}function tt(){return Object.create(null)}function B(t){t.forEach(rt)}function ot(t){return typeof t=="function"}function st(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let T;function lt(t,e){return T||(T=document.createElement("a")),T.href=e,t===T.href}function ct(t){return Object.keys(t).length===0}function i(t,e){t.appendChild(e)}function et(t,e,r){t.insertBefore(e,r||null)}function k(t){t.parentNode&&t.parentNode.removeChild(t)}function u(t){return document.createElement(t)}function at(t){return document.createTextNode(t)}function h(){return at(" ")}function dt(t,e,r,o){return t.addEventListener(e,r,o),()=>t.removeEventListener(e,r,o)}function l(t,e,r){r==null?t.removeAttribute(e):t.getAttribute(e)!==r&&t.setAttribute(e,r)}function ft(t){return Array.from(t.childNodes)}let R;function L(t){R=t}const $=[],C=[],z=[],nt=[],ut=Promise.resolve();let G=!1;function ht(){G||(G=!0,ut.then(it))}function K(t){z.push(t)}const F=new Set;let H=0;function it(){const t=R;do{for(;H<$.length;){const e=$[H];H++,L(e),mt(e.$$)}for(L(null),$.length=0,H=0;C.length;)C.pop()();for(let e=0;e<z.length;e+=1){const r=z[e];F.has(r)||(F.add(r),r())}z.length=0}while($.length);for(;nt.length;)nt.pop()();G=!1,F.clear(),L(t)}function mt(t){if(t.fragment!==null){t.update(),B(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(K)}}const pt=new Set;function gt(t,e){t&&t.i&&(pt.delete(t),t.i(e))}function _t(t,e,r,o){const{fragment:n,after_update:c}=t.$$;n&&n.m(e,r),o||K(()=>{const f=t.$$.on_mount.map(rt).filter(ot);t.$$.on_destroy?t.$$.on_destroy.push(...f):B(f),t.$$.on_mount=[]}),c.forEach(K)}function yt(t,e){const r=t.$$;r.fragment!==null&&(B(r.on_destroy),r.fragment&&r.fragment.d(e),r.on_destroy=r.fragment=null,r.ctx=[])}function bt(t,e){t.$$.dirty[0]===-1&&($.push(t),ht(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function vt(t,e,r,o,n,c,f,b=[-1]){const m=R;L(t);const s=t.$$={fragment:null,ctx:[],props:c,update:v,not_equal:n,bound:tt(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(m?m.$$.context:[])),callbacks:tt(),dirty:b,skip_bound:!1,root:e.target||m.$$.root};f&&f(s.root);let a=!1;if(s.ctx=r?r(t,e.props||{},(d,p,..._)=>{const x=_.length?_[0]:p;return s.ctx&&n(s.ctx[d],s.ctx[d]=x)&&(!s.skip_bound&&s.bound[d]&&s.bound[d](x),a&&bt(t,d)),p}):[],s.update(),a=!0,B(s.before_update),s.fragment=o?o(s.ctx):!1,e.target){if(e.hydrate){const d=ft(e.target);s.fragment&&s.fragment.l(d),d.forEach(k)}else s.fragment&&s.fragment.c();e.intro&&gt(t.$$.fragment),_t(t,e.target,e.anchor,e.customElement),it()}L(m)}class xt{$destroy(){yt(this,1),this.$destroy=v}$on(e,r){if(!ot(r))return v;const o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(r),()=>{const n=o.indexOf(r);n!==-1&&o.splice(n,1)}}$set(e){this.$$set&&!ct(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const wt="/assets/profile.6c8c94f4.svg";function kt(t){let e,r,o,n,c,f,b,m,s,a,d,p,_,x,E,D,S,J,A,V,I,Y,g,N,Q,j,O,W,M,U,y,P,q,X;return{c(){e=u("main"),r=u("div"),r.innerHTML=`<h1 class="font700 white center middle">\uC548\uB155\uD558\uC138\uC694</h1> 
		<h1 class="font700 white center middle">\uC800\uB294 redmen4772\uC785\uB2C8\uB2E4</h1> 
		<h1 class="font700 white center middle" style="transform: rotate(90deg) !important;">&gt;</h1>`,o=h(),n=u("div"),c=u("div"),f=u("img"),m=h(),s=u("h1"),s.textContent="redmen4772",a=h(),d=u("h1"),d.innerHTML="<br/>",p=h(),_=u("h1"),_.textContent="\uC65C \uC544\uBB34\uB7F0 \uB0B4\uC6A9\uC774 \uC5C6\uB0D0\uAD6C\uC694?",x=h(),E=u("h1"),E.textContent=".",D=h(),S=u("h1"),S.textContent=".",J=h(),A=u("h1"),A.textContent=".",V=h(),I=u("h4"),I.textContent="\uCC44\uC6B0\uAE30 \uADC0\uCC2E\uC558\uAC70\uB4E0\uC694",Y=h(),g=u("div"),N=u("h1"),N.textContent="\uB354 \uAD81\uAE08\uD55C\uC810\uC774 \uC788\uC73C\uC2E0\uAC00\uC694?",Q=h(),j=u("div"),O=u("p"),W=h(),M=u("footer"),M.innerHTML='<p class="svelte-1iuxc7x">Copyright 2022. redmen4772 All rights reserved<br/>\uB9CC\uB4E4\uAE30 \uAC81\uB098 \uADC0\uCC2E\uB124</p>',U=h(),y=u("link"),P=u("style"),P.textContent=`*{
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
		}`,l(r,"class","container svelte-1iuxc7x"),lt(f.src,b=wt)||l(f,"src",b),l(f,"class","profile showed svelte-1iuxc7x"),l(f,"alt","profile"),l(f,"loading","lazy"),l(s,"class","font700 white"),l(d,"class","font700 white center"),l(_,"class","font700 white center"),l(E,"class","font700 white center"),l(S,"class","font700 white center"),l(A,"class","font700 white center"),l(I,"class","font700 white center"),l(n,"class","container svelte-1iuxc7x"),l(N,"class","font700 white center middle"),l(O,"class","svelte-1iuxc7x"),l(j,"class","discordServerJoinButton showed hideItem svelte-1iuxc7x"),l(M,"class","hideItem showed svelte-1iuxc7x"),l(g,"class","container svelte-1iuxc7x"),l(e,"class","svelte-1iuxc7x"),document.title="about me",l(y,"rel","stylesheet"),l(y,"as","style"),l(y,"crossorigin","true"),l(y,"href","https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/variable/pretendardvariable-dynamic-subset.css")},m(w,Z){et(w,e,Z),i(e,r),t[1](r),i(e,o),i(e,n),i(n,c),i(c,f),i(n,m),i(n,s),i(n,a),i(n,d),i(n,p),i(n,_),i(n,x),i(n,E),i(n,D),i(n,S),i(n,J),i(n,A),i(n,V),i(n,I),t[2](n),i(e,Y),i(e,g),i(g,N),i(g,Q),i(g,j),i(j,O),i(g,W),i(g,M),t[4](g),et(w,U,Z),i(document.head,y),i(document.head,P),q||(X=dt(O,"click",t[3]),q=!0)},p:v,i:v,o:v,d(w){w&&k(e),t[1](null),t[2](null),t[4](null),w&&k(U),k(y),k(P),q=!1,X()}}}function $t(t,e,r){let o=[];const n=a=>new Promise(d=>setTimeout(d,a)),c=new IntersectionObserver(async a=>{for(let d of a)if(d.isIntersecting)for(let p of[...d.target.children])await n(600),p.classList.add("showed");else for(let p of[...d.target.children])p.classList.remove("showed")});function f(a){C[a?"unshift":"push"](()=>{o[o.length]=a,r(0,o)})}function b(a){C[a?"unshift":"push"](()=>{o[o.length]=a,r(0,o)})}const m=()=>location.href="https://discord.gg/Hf8T32UPs7";function s(a){C[a?"unshift":"push"](()=>{o[o.length]=a,r(0,o)})}return t.$$.update=()=>{if(t.$$.dirty&1)for(let a of o){c.observe(a);for(let d of[...a.children])d.classList.add("hideItem")}},[o,f,b,m,s]}class Lt extends xt{constructor(e){super(),vt(this,e,$t,kt,st,{})}}new Lt({target:document.getElementById("app")});
