(()=>{"use strict";class t{#t=(()=>{if("undefined"==typeof isDefaultStylesAdded){const t=document.createElement("style");t.setAttribute("type","text/css"),t.innerHTML="\n                .error-message {\n                    position: absolute;\n                    font-size: 0.8em;\n                    opacity: 0;\n                    transition: opacity 500ms ease-in-out;\n                }\n            ",document.querySelector("head").appendChild(t)}})();#e=(()=>{globalThis.isDefaultStylesAdded=!0})();#s=t=>{t.style.opacity="0",t.style.transition="none",setTimeout((()=>{t.style.opacity="1",this.message.style.transition=this.transition}),0)};#i=(t,e,s)=>{this.input.style.border=t,this.message.innerText=e,this.message.style.color=s};#n=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;constructor(t){this.form=t,this.submit=()=>{},this.color="green",this.colorError="red",this.textError="Please check your email",this.text="Submitted successfully!",this.transition="500ms ease-in-out",this.gap=5,this.input=this.form.querySelector("input"),this.inputBorder="1px solid green",this.inputBorderError="1px solid red",this.button=this.form.querySelector("button"),this.message=document.createElement("div")}render=()=>{window.addEventListener("load",(()=>{this.form.setAttribute("novalidate",""),this.message.classList.add("error-message"),this.form.insertBefore(this.message,this.input.nextSibling),this.form.style.position="relative",this.message.style.top=`${this.input.clientHeight+this.gap}px`,this.form.addEventListener("submit",(t=>{!1===this.checkEmail(this.input)?(t.preventDefault(),this.#s(this.message),this.#i(this.inputBorderError,this.textError,this.colorError)):(this.submit(),t.preventDefault(),this.#s(this.message),this.#i(this.inputBorder,this.text,this.color))}))}))};checkEmail=()=>!!this.input.value.match(this.#n)}const e=document.querySelector("header form");new class extends t{constructor(t){super(t),this.message.style.alignSelf="baseline"}}(e).render();const s=document.querySelector(".second-call form");new class extends t{constructor(t){super(t),this.message.style.alignSelf="baseline",this.colorError="white",this.color="white"}}(s).render();let i=!1,n=e.querySelector("button");e.addEventListener("submit",(()=>{window.innerWidth<=768&&n.classList.add("button-animation"),i=!0}));let o=s.querySelector("button");s.addEventListener("submit",(()=>{o.classList.add("button-animation")})),window.addEventListener("resize",(()=>{!0===i&&window.innerWidth<=768?n.classList.add("button-animation"):n.classList.remove("button-animation")})),document.querySelector("body").style.opacity="0%",window.addEventListener("load",(()=>{setTimeout((()=>{document.querySelector("body").style.opacity="100%"}),0)})),window.addEventListener("scroll",(()=>{sessionStorage.setItem("scroll-position",scrollY)})),window.addEventListener("load",(()=>{window.scrollTo(0,sessionStorage.getItem("scroll-position"))})),function(){const t=document.createElement("style");let e;t.setAttribute("type","text/css"),t.innerHTML="\n    .resize-animation-stopper * {\n        animation: none !important;\n        transition: none !important;\n    }\n    ",document.getElementsByTagName("head")[0].appendChild(t),window.addEventListener("resize",(()=>{document.body.classList.add("resize-animation-stopper"),clearTimeout(e),e=setTimeout((()=>{document.body.classList.remove("resize-animation-stopper")}),100)}))}()})();