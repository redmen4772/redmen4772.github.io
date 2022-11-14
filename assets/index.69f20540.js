(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const d of s)if(d.type==="childList")for(const u of d.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&o(u)}).observe(document,{childList:!0,subtree:!0});function n(s){const d={};return s.integrity&&(d.integrity=s.integrity),s.referrerpolicy&&(d.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?d.credentials="include":s.crossorigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function o(s){if(s.ep)return;s.ep=!0;const d=n(s);fetch(s.href,d)}})();function j(){}function ft(t){return t()}function at(){return Object.create(null)}function F(t){t.forEach(ft)}function ut(t){return typeof t=="function"}function pt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let G;function gt(t,e){return G||(G=document.createElement("a")),G.href=e,t===G.href}function yt(t){return Object.keys(t).length===0}function r(t,e){t.appendChild(e)}function ct(t,e,n){t.insertBefore(e,n||null)}function E(t){t.parentNode&&t.parentNode.removeChild(t)}function c(t){return document.createElement(t)}function ht(t){return document.createTextNode(t)}function g(){return ht(" ")}function bt(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function a(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function _t(t){return Array.from(t.childNodes)}function J(t,e,n,o){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,o?"important":"")}let Z;function I(t){Z=t}const S=[],q=[],Y=[],dt=[],wt=Promise.resolve();let X=!1;function vt(){X||(X=!0,wt.then(mt))}function Q(t){Y.push(t)}const W=new Set;let K=0;function mt(){const t=Z;do{for(;K<S.length;){const e=S[K];K++,I(e),xt(e.$$)}for(I(null),S.length=0,K=0;q.length;)q.pop()();for(let e=0;e<Y.length;e+=1){const n=Y[e];W.has(n)||(W.add(n),n())}Y.length=0}while(S.length);for(;dt.length;)dt.pop()();X=!1,W.clear(),I(t)}function xt(t){if(t.fragment!==null){t.update(),F(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Q)}}const kt=new Set;function Ct(t,e){t&&t.i&&(kt.delete(t),t.i(e))}function Lt(t,e,n,o){const{fragment:s,after_update:d}=t.$$;s&&s.m(e,n),o||Q(()=>{const u=t.$$.on_mount.map(ft).filter(ut);t.$$.on_destroy?t.$$.on_destroy.push(...u):F(u),t.$$.on_mount=[]}),d.forEach(Q)}function $t(t,e){const n=t.$$;n.fragment!==null&&(F(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Et(t,e){t.$$.dirty[0]===-1&&(S.push(t),vt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function St(t,e,n,o,s,d,u,y=[-1]){const w=Z;I(t);const i=t.$$={fragment:null,ctx:[],props:d,update:j,not_equal:s,bound:at(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(w?w.$$.context:[])),callbacks:at(),dirty:y,skip_bound:!1,root:e.target||w.$$.root};u&&u(i.root);let b=!1;if(i.ctx=n?n(t,e.props||{},(l,x,..._)=>{const f=_.length?_[0]:x;return i.ctx&&s(i.ctx[l],i.ctx[l]=f)&&(!i.skip_bound&&i.bound[l]&&i.bound[l](f),b&&Et(t,l)),x}):[],i.update(),b=!0,F(i.before_update),i.fragment=o?o(i.ctx):!1,e.target){if(e.hydrate){const l=_t(e.target);i.fragment&&i.fragment.l(l),l.forEach(E)}else i.fragment&&i.fragment.c();e.intro&&Ct(t.$$.fragment),Lt(t,e.target,e.anchor,e.customElement),mt()}I(w)}class It{$destroy(){$t(this,1),this.$destroy=j}$on(e,n){if(!ut(n))return j;const o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(n),()=>{const s=o.indexOf(n);s!==-1&&o.splice(s,1)}}$set(e){this.$$set&&!yt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const qt="/assets/profile.6c8c94f4.svg";function jt(t){let e,n,o,s,d,u,y,w,i,b,l,x,_,f,m,p,C,h,A,N,tt,H,et,P,nt,M,ot,O,rt,v,B,st,T,z,lt,R,D,L,U,V,it;return{c(){e=c("main"),n=c("div"),o=c("h1"),s=ht("\uC548\uB155\uD558\uC138\uC694"),d=g(),u=c("h1"),u.textContent="\uC800\uB294 redmen4772\uC785\uB2C8\uB2E4",y=g(),w=c("h1"),w.textContent="\u2B07",i=g(),b=c("div"),l=c("div"),x=c("div"),_=c("img"),m=g(),p=c("h1"),p.textContent="redmen4772",C=g(),h=c("h1"),h.innerHTML="<br/>",A=g(),N=c("h1"),N.textContent="\uC65C \uC544\uBB34\uB7F0 \uB0B4\uC6A9\uC774 \uC5C6\uB0D0\uAD6C\uC694?",tt=g(),H=c("h1"),H.textContent=".",et=g(),P=c("h1"),P.textContent=".",nt=g(),M=c("h1"),M.textContent=".",ot=g(),O=c("h4"),O.textContent="\uCC44\uC6B0\uAE30 \uADC0\uCC2E\uC558\uAC70\uB4E0\uC694",rt=g(),v=c("div"),B=c("h1"),B.textContent="\uB354 \uAD81\uAE08\uD55C\uC810\uC774 \uC788\uC73C\uC2E0\uAC00\uC694?",st=g(),T=c("div"),z=c("p"),lt=g(),R=c("footer"),R.innerHTML='<p class="svelte-t3lqsm">Copyright 2022. redmen4772 All rights reserved<br/>\uB9CC\uB4E4\uAE30 \uAC81\uB098 \uADC0\uCC2E\uB124</p>',D=g(),L=c("link"),U=c("style"),U.textContent=`*{
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
		}`,a(o,"class","font700 white center middle"),J(o,"top",t[2]?"42%":"50%",1),a(u,"class","font700 white center middle"),a(w,"class","font700 white center middle"),a(n,"class","container svelte-t3lqsm"),gt(_.src,f=qt)||a(_,"src",f),a(_,"class","profile showed svelte-t3lqsm"),a(_,"alt","profile"),a(_,"loading","lazy"),a(p,"class","font700 white"),a(h,"class","font700 white center"),a(N,"class","font700 white center"),a(H,"class","font700 white center"),a(P,"class","font700 white center"),a(M,"class","font700 white center"),a(O,"class","font700 white center"),a(l,"class","container svelte-t3lqsm"),a(B,"class","font700 white center middle"),a(z,"class","svelte-t3lqsm"),a(T,"class","discordServerJoinButton showed hideItem svelte-t3lqsm"),a(R,"class","hideItem showed svelte-t3lqsm"),a(v,"class","container svelte-t3lqsm"),J(b,"display",t[1]?"block":"none"),a(e,"class","svelte-t3lqsm"),document.title="about me",a(L,"rel","stylesheet"),a(L,"as","style"),a(L,"crossorigin","true"),a(L,"href","https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/variable/pretendardvariable-dynamic-subset.css")},m(k,$){ct(k,e,$),r(e,n),r(n,o),r(o,s),r(n,d),r(n,u),r(n,y),r(n,w),t[3](n),r(e,i),r(e,b),r(b,l),r(l,x),r(x,_),r(l,m),r(l,p),r(l,C),r(l,h),r(l,A),r(l,N),r(l,tt),r(l,H),r(l,et),r(l,P),r(l,nt),r(l,M),r(l,ot),r(l,O),t[4](l),r(b,rt),r(b,v),r(v,B),r(v,st),r(v,T),r(T,z),r(v,lt),r(v,R),t[6](v),ct(k,D,$),r(document.head,L),r(document.head,U),V||(it=bt(z,"click",t[5]),V=!0)},p(k,[$]){$&4&&J(o,"top",k[2]?"42%":"50%",1),$&2&&J(b,"display",k[1]?"block":"none")},i:j,o:j,d(k){k&&E(e),t[3](null),t[4](null),t[6](null),k&&E(D),E(L),E(U),V=!1,it()}}}function At(t,e,n){let o=[],s,d=!1,u=!1;const y=f=>new Promise(m=>setTimeout(m,f)),w=new IntersectionObserver(async f=>{for(let m of f)if(m.isIntersecting&&m.intersectionRatio>=.9){s=o.findIndex(h=>h==m.target);let p=[...m.target.children],C=o.findIndex(h=>h==m.target);if(await y(200),C==0){if(n(1,d=!1),!p[0].classList.contains("showed")){p[0].classList.add("showed"),n(2,u=!1);for(let h of i.slice(0,i.length-5))p[0].textContent=h,await y(60);for(let h=i.length-5;h<i.length;h++)p[0].textContent=i[h],await y((h-i.length+6)*80);n(2,u=!0)}await y(200),p[1].classList.add("showed"),await y(400),p[2].classList.add("showed"),await y(400),n(1,d=!0)}else for(let h of p)if(s==C)h.classList.add("showed"),await y(400);else{p.forEach(A=>A.classList.remove("showed"));return}}else(!m.isIntersecting||m.intersectionRatio<=.1)&&[...m.target.children].forEach(C=>C.classList.remove("showed"))},{threshold:[0,.9],rootMargin:"-39px -40px 0px -40px"}),i=["Witam","\u4F60\u597D","Xin ch\xE0o","Ciao","\u043F\u0440\u0438\u0432\u0435\u0442","Hall\xE5","Guten Tag","Hej","\u0928\u092E\u0938\u094D\u0915\u093E\u0930","salve","Apa kabar","\u0E2A\u0E27\u0E31\u0E2A\u0E14\u0E35\u0E04\u0E23\u0E31\u0E1A","merhaba","Habari za kucha","Salom","\u0421\u0430\u0439\u043D \u0431\u0430\u0439\u043D\u0430 \u0443\u0443","\u0417\u0434\u0440\u0430\u0432\u0441\u0442\u0432\u0443\u0439\u0442\u0435","mir\xEBm\xEBngjes","\u0AA8\u0AAE\u0AB8\u0ACD\u0AA4\u0AC7","\u0645\u0631\u062D\u0628\u064B\u0627 ","\u0928\u092E\u0938\u094D\u0924\u0947","\u0421\u0430\u0439\u043D \u0443\u0443","Kamusta","\u0915\u0941\u0936\u0932","Bonjour","Hola","\u3053\u3093\u306B\u3061\u306F","Hello","\uC548\uB155\uD558\uC138\uC694"];function b(f){q[f?"unshift":"push"](()=>{o[o.length]=f,n(0,o)})}function l(f){q[f?"unshift":"push"](()=>{o[o.length]=f,n(0,o)})}const x=()=>location.href="https://discord.gg/Hf8T32UPs7";function _(f){q[f?"unshift":"push"](()=>{o[o.length]=f,n(0,o)})}return t.$$.update=()=>{if(t.$$.dirty&1)for(let f of o){w.observe(f);for(let m of[...f.children])m.classList.add("hideItem")}},[o,d,u,b,l,x,_]}class Nt extends It{constructor(e){super(),St(this,e,At,jt,pt,{})}}new Nt({target:document.getElementById("app")});
