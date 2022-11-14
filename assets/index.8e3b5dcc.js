(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();function q(){}function st(t){return t()}function et(){return Object.create(null)}function U(t){t.forEach(st)}function it(t){return typeof t=="function"}function at(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let T;function ct(t,e){return T||(T=document.createElement("a")),T.href=e,t===T.href}function dt(t){return Object.keys(t).length===0}function i(t,e){t.appendChild(e)}function nt(t,e,n){t.insertBefore(e,n||null)}function C(t){t.parentNode&&t.parentNode.removeChild(t)}function u(t){return document.createElement(t)}function ft(t){return document.createTextNode(t)}function y(){return ft(" ")}function ut(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function l(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function ht(t){return Array.from(t.childNodes)}function rt(t,e,n,s){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,s?"important":"")}let D;function S(t){D=t}const E=[],I=[],R=[],ot=[],mt=Promise.resolve();let Y=!1;function pt(){Y||(Y=!0,mt.then(lt))}function F(t){R.push(t)}const K=new Set;let z=0;function lt(){const t=D;do{for(;z<E.length;){const e=E[z];z++,S(e),gt(e.$$)}for(S(null),E.length=0,z=0;I.length;)I.pop()();for(let e=0;e<R.length;e+=1){const n=R[e];K.has(n)||(K.add(n),n())}R.length=0}while(E.length);for(;ot.length;)ot.pop()();Y=!1,K.clear(),S(t)}function gt(t){if(t.fragment!==null){t.update(),U(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(F)}}const yt=new Set;function bt(t,e){t&&t.i&&(yt.delete(t),t.i(e))}function _t(t,e,n,s){const{fragment:o,after_update:r}=t.$$;o&&o.m(e,n),s||F(()=>{const a=t.$$.on_mount.map(st).filter(it);t.$$.on_destroy?t.$$.on_destroy.push(...a):U(a),t.$$.on_mount=[]}),r.forEach(F)}function wt(t,e){const n=t.$$;n.fragment!==null&&(U(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function vt(t,e){t.$$.dirty[0]===-1&&(E.push(t),pt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function xt(t,e,n,s,o,r,a,b=[-1]){const m=D;S(t);const c=t.$$={fragment:null,ctx:[],props:r,update:q,not_equal:o,bound:et(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(m?m.$$.context:[])),callbacks:et(),dirty:b,skip_bound:!1,root:e.target||m.$$.root};a&&a(c.root);let _=!1;if(c.ctx=n?n(t,e.props||{},(p,w,...d)=>{const f=d.length?d[0]:w;return c.ctx&&o(c.ctx[p],c.ctx[p]=f)&&(!c.skip_bound&&c.bound[p]&&c.bound[p](f),_&&vt(t,p)),w}):[],c.update(),_=!0,U(c.before_update),c.fragment=s?s(c.ctx):!1,e.target){if(e.hydrate){const p=ht(e.target);c.fragment&&c.fragment.l(p),p.forEach(C)}else c.fragment&&c.fragment.c();e.intro&&bt(t.$$.fragment),_t(t,e.target,e.anchor,e.customElement),lt()}S(m)}class kt{$destroy(){wt(this,1),this.$destroy=q}$on(e,n){if(!it(n))return q;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const o=s.indexOf(n);o!==-1&&s.splice(o,1)}}$set(e){this.$$set&&!dt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const $t="/assets/profile.6c8c94f4.svg";function Lt(t){let e,n,s,o,r,a,b,m,c,_,p,w,d,f,g,v,h,L,V,j,W,A,X,x,N,Q,H,P,Z,M,G,k,O,J,tt;return{c(){e=u("main"),n=u("div"),n.innerHTML=`<h1 class="font700 white center middle">\uC548\uB155\uD558\uC138\uC694</h1> 
		<h1 class="font700 white center middle">\uC800\uB294 redmen4772\uC785\uB2C8\uB2E4</h1> 
		<h1 class="font700 white center middle">\u2B07</h1>`,s=y(),o=u("div"),r=u("div"),a=u("div"),b=u("img"),c=y(),_=u("h1"),_.textContent="redmen4772",p=y(),w=u("h1"),w.innerHTML="<br/>",d=y(),f=u("h1"),f.textContent="\uC65C \uC544\uBB34\uB7F0 \uB0B4\uC6A9\uC774 \uC5C6\uB0D0\uAD6C\uC694?",g=y(),v=u("h1"),v.textContent=".",h=y(),L=u("h1"),L.textContent=".",V=y(),j=u("h1"),j.textContent=".",W=y(),A=u("h4"),A.textContent="\uCC44\uC6B0\uAE30 \uADC0\uCC2E\uC558\uAC70\uB4E0\uC694",X=y(),x=u("div"),N=u("h1"),N.textContent="\uB354 \uAD81\uAE08\uD55C\uC810\uC774 \uC788\uC73C\uC2E0\uAC00\uC694?",Q=y(),H=u("div"),P=u("p"),Z=y(),M=u("footer"),M.innerHTML='<p class="svelte-t3lqsm">Copyright 2022. redmen4772 All rights reserved<br/>\uB9CC\uB4E4\uAE30 \uAC81\uB098 \uADC0\uCC2E\uB124</p>',G=y(),k=u("link"),O=u("style"),O.textContent=`*{
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
		}`,l(n,"class","container svelte-t3lqsm"),ct(b.src,m=$t)||l(b,"src",m),l(b,"class","profile showed svelte-t3lqsm"),l(b,"alt","profile"),l(b,"loading","lazy"),l(_,"class","font700 white"),l(w,"class","font700 white center"),l(f,"class","font700 white center"),l(v,"class","font700 white center"),l(L,"class","font700 white center"),l(j,"class","font700 white center"),l(A,"class","font700 white center"),l(r,"class","container svelte-t3lqsm"),l(N,"class","font700 white center middle"),l(P,"class","svelte-t3lqsm"),l(H,"class","discordServerJoinButton showed hideItem svelte-t3lqsm"),l(M,"class","hideItem showed svelte-t3lqsm"),l(x,"class","container svelte-t3lqsm"),rt(o,"display",t[1]?"block":"none"),l(e,"class","svelte-t3lqsm"),document.title="about me",l(k,"rel","stylesheet"),l(k,"as","style"),l(k,"crossorigin","true"),l(k,"href","https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/variable/pretendardvariable-dynamic-subset.css")},m($,B){nt($,e,B),i(e,n),t[2](n),i(e,s),i(e,o),i(o,r),i(r,a),i(a,b),i(r,c),i(r,_),i(r,p),i(r,w),i(r,d),i(r,f),i(r,g),i(r,v),i(r,h),i(r,L),i(r,V),i(r,j),i(r,W),i(r,A),t[3](r),i(o,X),i(o,x),i(x,N),i(x,Q),i(x,H),i(H,P),i(x,Z),i(x,M),t[5](x),nt($,G,B),i(document.head,k),i(document.head,O),J||(tt=ut(P,"click",t[4]),J=!0)},p($,[B]){B&2&&rt(o,"display",$[1]?"block":"none")},i:q,o:q,d($){$&&C(e),t[2](null),t[3](null),t[5](null),$&&C(G),C(k),C(O),J=!1,tt()}}}function Ct(t,e,n){let s=[],o,r=!1;const a=d=>new Promise(f=>setTimeout(f,d)),b=new IntersectionObserver(async d=>{for(let f of d)if(f.isIntersecting&&f.intersectionRatio>=.9){o=s.findIndex(h=>h==f.target);let g=[...f.target.children],v=s.findIndex(h=>h==f.target);if(await a(200),v==0){if(n(1,r=!1),!g[0].classList.contains("showed")){g[0].classList.add("showed");for(let h of m.slice(0,m.length-5))g[0].textContent=h,await a(60);for(let h=m.length-5;h<m.length;h++)g[0].textContent=m[h],await a((h-m.length+6)*80)}await a(100),g[1].classList.add("showed"),await a(400),g[2].classList.add("showed"),await a(400),n(1,r=!0)}else for(let h of g)if(o==v)h.classList.add("showed"),await a(400);else{g.forEach(L=>L.classList.remove("showed"));return}}else(!f.isIntersecting||f.intersectionRatio<=.1)&&[...f.target.children].forEach(v=>v.classList.remove("showed"))},{threshold:[0,.9],rootMargin:"-39px -40px 0px -40px"}),m=["Witam","\u4F60\u597D","Xin ch\xE0o","Ciao","\u043F\u0440\u0438\u0432\u0435\u0442","Hall\xE5","Guten Tag","Hej","\u0928\u092E\u0938\u094D\u0915\u093E\u0930","salve","Apa kabar","\u0E2A\u0E27\u0E31\u0E2A\u0E14\u0E35\u0E04\u0E23\u0E31\u0E1A","merhaba","Habari za kucha","Salom","\u0421\u0430\u0439\u043D \u0431\u0430\u0439\u043D\u0430 \u0443\u0443","\u0417\u0434\u0440\u0430\u0432\u0441\u0442\u0432\u0443\u0439\u0442\u0435","mir\xEBm\xEBngjes","\u0AA8\u0AAE\u0AB8\u0ACD\u0AA4\u0AC7","\u0645\u0631\u062D\u0628\u064B\u0627 ","\u0928\u092E\u0938\u094D\u0924\u0947","\u0421\u0430\u0439\u043D \u0443\u0443","Kamusta","\u0915\u0941\u0936\u0932","Bonjour","Hola","\u3053\u3093\u306B\u3061\u306F","Hello","\uC548\uB155\uD558\uC138\uC694"];function c(d){I[d?"unshift":"push"](()=>{s[s.length]=d,n(0,s)})}function _(d){I[d?"unshift":"push"](()=>{s[s.length]=d,n(0,s)})}const p=()=>location.href="https://discord.gg/Hf8T32UPs7";function w(d){I[d?"unshift":"push"](()=>{s[s.length]=d,n(0,s)})}return t.$$.update=()=>{if(t.$$.dirty&1)for(let d of s){b.observe(d);for(let f of[...d.children])f.classList.add("hideItem")}},[s,r,c,_,p,w]}class Et extends kt{constructor(e){super(),xt(this,e,Ct,Lt,at,{})}}new Et({target:document.getElementById("app")});
