(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const c of n)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function r(n){const c={};return n.integrity&&(c.integrity=n.integrity),n.referrerpolicy&&(c.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?c.credentials="include":n.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function i(n){if(n.ep)return;n.ep=!0;const c=r(n);fetch(n.href,c)}})();function w(){}function ot(t){return t()}function et(){return Object.create(null)}function B(t){t.forEach(ot)}function it(t){return typeof t=="function"}function lt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let T;function ct(t,e){return T||(T=document.createElement("a")),T.href=e,t===T.href}function at(t){return Object.keys(t).length===0}function o(t,e){t.appendChild(e)}function nt(t,e,r){t.insertBefore(e,r||null)}function x(t){t.parentNode&&t.parentNode.removeChild(t)}function d(t){return document.createElement(t)}function ft(t){return document.createTextNode(t)}function h(){return ft(" ")}function dt(t,e,r,i){return t.addEventListener(e,r,i),()=>t.removeEventListener(e,r,i)}function s(t,e,r){r==null?t.removeAttribute(e):t.getAttribute(e)!==r&&t.setAttribute(e,r)}function ut(t){return Array.from(t.childNodes)}let D;function C(t){D=t}const L=[],E=[],z=[],rt=[],ht=Promise.resolve();let K=!1;function mt(){K||(K=!0,ht.then(st))}function R(t){z.push(t)}const G=new Set;let U=0;function st(){const t=D;do{for(;U<L.length;){const e=L[U];U++,C(e),pt(e.$$)}for(C(null),L.length=0,U=0;E.length;)E.pop()();for(let e=0;e<z.length;e+=1){const r=z[e];G.has(r)||(G.add(r),r())}z.length=0}while(L.length);for(;rt.length;)rt.pop()();K=!1,G.clear(),C(t)}function pt(t){if(t.fragment!==null){t.update(),B(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(R)}}const gt=new Set;function bt(t,e){t&&t.i&&(gt.delete(t),t.i(e))}function yt(t,e,r,i){const{fragment:n,after_update:c}=t.$$;n&&n.m(e,r),i||R(()=>{const u=t.$$.on_mount.map(ot).filter(it);t.$$.on_destroy?t.$$.on_destroy.push(...u):B(u),t.$$.on_mount=[]}),c.forEach(R)}function _t(t,e){const r=t.$$;r.fragment!==null&&(B(r.on_destroy),r.fragment&&r.fragment.d(e),r.on_destroy=r.fragment=null,r.ctx=[])}function vt(t,e){t.$$.dirty[0]===-1&&(L.push(t),mt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function xt(t,e,r,i,n,c,u,_=[-1]){const m=D;C(t);const l=t.$$={fragment:null,ctx:[],props:c,update:w,not_equal:n,bound:et(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(m?m.$$.context:[])),callbacks:et(),dirty:_,skip_bound:!1,root:e.target||m.$$.root};u&&u(l.root);let a=!1;if(l.ctx=r?r(t,e.props||{},(f,p,...b)=>{const k=b.length?b[0]:p;return l.ctx&&n(l.ctx[f],l.ctx[f]=k)&&(!l.skip_bound&&l.bound[f]&&l.bound[f](k),a&&vt(t,f)),p}):[],l.update(),a=!0,B(l.before_update),l.fragment=i?i(l.ctx):!1,e.target){if(e.hydrate){const f=ut(e.target);l.fragment&&l.fragment.l(f),f.forEach(x)}else l.fragment&&l.fragment.c();e.intro&&bt(t.$$.fragment),yt(t,e.target,e.anchor,e.customElement),st()}C(m)}class wt{$destroy(){_t(this,1),this.$destroy=w}$on(e,r){if(!it(r))return w;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(r),()=>{const n=i.indexOf(r);n!==-1&&i.splice(n,1)}}$set(e){this.$$set&&!at(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const kt="/assets/profile.6c8c94f4.svg";function $t(t){let e,r,i,n,c,u,_,m,l,a,f,p,b,k,S,J,A,V,I,Y,N,Q,g,j,W,O,M,X,P,q,y,v,H,F,Z;return{c(){e=d("main"),r=d("div"),r.innerHTML=`<h1 class="font700 white center middle">\uC548\uB155\uD558\uC138\uC694</h1> 
		<h1 class="font700 white center middle">\uC800\uB294 redmen4772\uC785\uB2C8\uB2E4</h1> 
		<h1 class="font700 white center middle" style="transform: rotate(90deg) !important;">&gt;</h1>`,i=h(),n=d("div"),c=d("div"),u=d("img"),m=h(),l=d("h1"),l.textContent="redmen4772",a=h(),f=d("h1"),f.innerHTML="<br/>",p=h(),b=d("h1"),b.textContent="\uC65C \uC544\uBB34\uB7F0 \uB0B4\uC6A9\uC774 \uC5C6\uB0D0\uAD6C\uC694?",k=h(),S=d("h1"),S.textContent=".",J=h(),A=d("h1"),A.textContent=".",V=h(),I=d("h1"),I.textContent=".",Y=h(),N=d("h4"),N.textContent="\uCC44\uC6B0\uAE30 \uADC0\uCC2E\uC558\uAC70\uB4E0\uC694",Q=h(),g=d("div"),j=d("h1"),j.textContent="\uB354 \uAD81\uAE08\uD55C\uC810\uC774 \uC788\uC73C\uC2E0\uAC00\uC694?",W=h(),O=d("div"),M=d("p"),X=h(),P=d("footer"),P.innerHTML='<p class="svelte-1iuxc7x">Copyright 2022. redmen4772 All rights reserved<br/>\uB9CC\uB4E4\uAE30 \uAC81\uB098 \uADC0\uCC2E\uB124</p>',q=h(),y=d("link"),v=d("link"),H=d("style"),H.textContent=`*{
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
		}`,s(r,"class","container svelte-1iuxc7x"),ct(u.src,_=kt)||s(u,"src",_),s(u,"class","profile showed svelte-1iuxc7x"),s(u,"alt","profile"),s(u,"loading","lazy"),s(l,"class","font700 white"),s(f,"class","font700 white center"),s(b,"class","font700 white center"),s(S,"class","font700 white center"),s(A,"class","font700 white center"),s(I,"class","font700 white center"),s(N,"class","font700 white center"),s(n,"class","container svelte-1iuxc7x"),s(j,"class","font700 white center middle"),s(M,"class","svelte-1iuxc7x"),s(O,"class","discordServerJoinButton showed hideItem svelte-1iuxc7x"),s(P,"class","hideItem showed svelte-1iuxc7x"),s(g,"class","container svelte-1iuxc7x"),s(e,"class","svelte-1iuxc7x"),document.title="about me",s(y,"rel","stylesheet"),s(y,"as","style"),s(y,"crossorigin","true"),s(y,"href","https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/variable/pretendardvariable-dynamic-subset.css"),s(v,"href","//db.onlinewebfonts.com/c/4f6fb2fa3c231278167b36e966718cbb?family=Uni+Sans+Heavy"),s(v,"rel","stylesheet"),s(v,"type","text/css")},m($,tt){nt($,e,tt),o(e,r),t[1](r),o(e,i),o(e,n),o(n,c),o(c,u),o(n,m),o(n,l),o(n,a),o(n,f),o(n,p),o(n,b),o(n,k),o(n,S),o(n,J),o(n,A),o(n,V),o(n,I),o(n,Y),o(n,N),t[2](n),o(e,Q),o(e,g),o(g,j),o(g,W),o(g,O),o(O,M),o(g,X),o(g,P),t[4](g),nt($,q,tt),o(document.head,y),o(document.head,v),o(document.head,H),F||(Z=dt(M,"click",t[3]),F=!0)},p:w,i:w,o:w,d($){$&&x(e),t[1](null),t[2](null),t[4](null),$&&x(q),x(y),x(v),x(H),F=!1,Z()}}}function Lt(t,e,r){let i=[];const n=a=>new Promise(f=>setTimeout(f,a)),c=new IntersectionObserver(async a=>{for(let f of a)if(f.isIntersecting)for(let p of[...f.target.children])await n(600),p.classList.add("showed");else for(let p of[...f.target.children])p.classList.remove("showed")});function u(a){E[a?"unshift":"push"](()=>{i[i.length]=a,r(0,i)})}function _(a){E[a?"unshift":"push"](()=>{i[i.length]=a,r(0,i)})}const m=()=>location.href="https://discord.gg/Hf8T32UPs7";function l(a){E[a?"unshift":"push"](()=>{i[i.length]=a,r(0,i)})}return t.$$.update=()=>{if(t.$$.dirty&1)for(let a of i){c.observe(a);for(let f of[...a.children])f.classList.add("hideItem")}},[i,u,_,m,l]}class Ct extends wt{constructor(e){super(),xt(this,e,Lt,$t,lt,{})}}new Ct({target:document.getElementById("app")});
