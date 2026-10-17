var Ae=Object.defineProperty;var $e=(n,e,t)=>e in n?Ae(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var u=(n,e,t)=>$e(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();var J={};(function n(e,t,i,s){var o=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),l=typeof Path2D=="function"&&typeof DOMMatrix=="function",b=function(){if(!e.OffscreenCanvas)return!1;try{var a=new OffscreenCanvas(1,1),r=a.getContext("2d");r.fillRect(0,0,1,1);var c=a.transferToImageBitmap();r.createPattern(c,"no-repeat")}catch{return!1}return!0}();function m(){}function M(a){var r=t.exports.Promise,c=r!==void 0?r:e.Promise;return typeof c=="function"?new c(a):(a(m,m),null)}var P=function(a,r){return{transform:function(c){if(a)return c;if(r.has(c))return r.get(c);var f=new OffscreenCanvas(c.width,c.height),p=f.getContext("2d");return p.drawImage(c,0,0),r.set(c,f),f},clear:function(){r.clear()}}}(b,new Map),B=function(){var a=Math.floor(16.666666666666668),r,c,f={},p=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(r=function(g){var y=Math.random();return f[y]=requestAnimationFrame(function d(v){p===v||p+a-1<v?(p=v,delete f[y],g()):f[y]=requestAnimationFrame(d)}),y},c=function(g){f[g]&&cancelAnimationFrame(f[g])}):(r=function(g){return setTimeout(g,a)},c=function(g){return clearTimeout(g)}),{frame:r,cancel:c}}(),H=function(){var a,r,c={};function f(p){function g(y,d){p.postMessage({options:y||{},callback:d})}p.init=function(d){var v=d.transferControlToOffscreen();p.postMessage({canvas:v},[v])},p.fire=function(d,v,w){if(r)return g(d,null),r;var S=Math.random().toString(36).slice(2);return r=M(function(C){function T(A){A.data.callback===S&&(delete c[S],p.removeEventListener("message",T),r=null,P.clear(),w(),C())}p.addEventListener("message",T),g(d,S),c[S]=T.bind(null,{data:{callback:S}})}),r},p.reset=function(){p.postMessage({reset:!0});for(var d in c)c[d](),delete c[d]}}return function(){if(a)return a;if(!i&&o){var p=["var CONFETTI, SIZE = {}, module = {};","("+n.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{a=new Worker(URL.createObjectURL(new Blob([p])))}catch(g){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",g),null}f(a)}return a}}(),F={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function V(a,r){return r?r(a):a}function O(a){return a!=null}function k(a,r,c){return V(a&&O(a[r])?a[r]:F[r],c)}function U(a){return a<0?0:Math.floor(a)}function le(a,r){return Math.floor(Math.random()*(r-a))+a}function Q(a){return parseInt(a,16)}function ne(a){return a.map(ce)}function ce(a){var r=String(a).replace(/[^0-9a-f]/gi,"");return r.length<6&&(r=r[0]+r[0]+r[1]+r[1]+r[2]+r[2]),{r:Q(r.substring(0,2)),g:Q(r.substring(2,4)),b:Q(r.substring(4,6))}}function de(a){var r=k(a,"origin",Object);return r.x=k(r,"x",Number),r.y=k(r,"y",Number),r}function he(a){a.width=document.documentElement.clientWidth,a.height=document.documentElement.clientHeight}function fe(a){var r=a.getBoundingClientRect();a.width=r.width,a.height=r.height}function ue(a){var r=document.createElement("canvas");return r.style.position="fixed",r.style.top="0px",r.style.left="0px",r.style.pointerEvents="none",r.style.zIndex=a,r}function pe(a,r,c,f,p,g,y,d,v){a.save(),a.translate(r,c),a.rotate(g),a.scale(f,p),a.arc(0,0,1,y,d,v),a.restore()}function ge(a){var r=a.angle*(Math.PI/180),c=a.spread*(Math.PI/180);return{x:a.x,y:a.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:a.startVelocity*.5+Math.random()*a.startVelocity,angle2D:-r+(.5*c-Math.random()*c),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:a.color,shape:a.shape,tick:0,totalTicks:a.ticks,decay:a.decay,drift:a.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:a.gravity*3,ovalScalar:.6,scalar:a.scalar,flat:a.flat}}function ye(a,r){r.x+=Math.cos(r.angle2D)*r.velocity+r.drift,r.y+=Math.sin(r.angle2D)*r.velocity+r.gravity,r.velocity*=r.decay,r.flat?(r.wobble=0,r.wobbleX=r.x+10*r.scalar,r.wobbleY=r.y+10*r.scalar,r.tiltSin=0,r.tiltCos=0,r.random=1):(r.wobble+=r.wobbleSpeed,r.wobbleX=r.x+10*r.scalar*Math.cos(r.wobble),r.wobbleY=r.y+10*r.scalar*Math.sin(r.wobble),r.tiltAngle+=.1,r.tiltSin=Math.sin(r.tiltAngle),r.tiltCos=Math.cos(r.tiltAngle),r.random=Math.random()+2);var c=r.tick++/r.totalTicks,f=r.x+r.random*r.tiltCos,p=r.y+r.random*r.tiltSin,g=r.wobbleX+r.random*r.tiltCos,y=r.wobbleY+r.random*r.tiltSin;if(a.fillStyle="rgba("+r.color.r+", "+r.color.g+", "+r.color.b+", "+(1-c)+")",a.beginPath(),l&&r.shape.type==="path"&&typeof r.shape.path=="string"&&Array.isArray(r.shape.matrix))a.fill(me(r.shape.path,r.shape.matrix,r.x,r.y,Math.abs(g-f)*.1,Math.abs(y-p)*.1,Math.PI/10*r.wobble));else if(r.shape.type==="bitmap"){var d=Math.PI/10*r.wobble,v=Math.abs(g-f)*.1,w=Math.abs(y-p)*.1,S=r.shape.bitmap.width*r.scalar,C=r.shape.bitmap.height*r.scalar,T=new DOMMatrix([Math.cos(d)*v,Math.sin(d)*v,-Math.sin(d)*w,Math.cos(d)*w,r.x,r.y]);T.multiplySelf(new DOMMatrix(r.shape.matrix));var A=a.createPattern(P.transform(r.shape.bitmap),"no-repeat");A.setTransform(T),a.globalAlpha=1-c,a.fillStyle=A,a.fillRect(r.x-S/2,r.y-C/2,S,C),a.globalAlpha=1}else if(r.shape==="circle")a.ellipse?a.ellipse(r.x,r.y,Math.abs(g-f)*r.ovalScalar,Math.abs(y-p)*r.ovalScalar,Math.PI/10*r.wobble,0,2*Math.PI):pe(a,r.x,r.y,Math.abs(g-f)*r.ovalScalar,Math.abs(y-p)*r.ovalScalar,Math.PI/10*r.wobble,0,2*Math.PI);else if(r.shape==="star")for(var x=Math.PI/2*3,$=4*r.scalar,R=8*r.scalar,D=r.x,G=r.y,z=5,q=Math.PI/z;z--;)D=r.x+Math.cos(x)*R,G=r.y+Math.sin(x)*R,a.lineTo(D,G),x+=q,D=r.x+Math.cos(x)*$,G=r.y+Math.sin(x)*$,a.lineTo(D,G),x+=q;else a.moveTo(Math.floor(r.x),Math.floor(r.y)),a.lineTo(Math.floor(r.wobbleX),Math.floor(p)),a.lineTo(Math.floor(g),Math.floor(y)),a.lineTo(Math.floor(f),Math.floor(r.wobbleY));return a.closePath(),a.fill(),r.tick<r.totalTicks}function ve(a,r,c,f,p){var g=r.slice(),y=a.getContext("2d"),d,v,w=M(function(S){function C(){d=v=null,y.clearRect(0,0,f.width,f.height),P.clear(),p(),S()}function T(){i&&!(f.width===s.width&&f.height===s.height)&&(f.width=a.width=s.width,f.height=a.height=s.height),!f.width&&!f.height&&(c(a),f.width=a.width,f.height=a.height),y.clearRect(0,0,f.width,f.height),g=g.filter(function(A){return ye(y,A)}),g.length?d=B.frame(T):C()}d=B.frame(T),v=C});return{addFettis:function(S){return g=g.concat(S),w},canvas:a,promise:w,reset:function(){d&&B.cancel(d),v&&v()}}}function X(a,r){var c=!a,f=!!k(r||{},"resize"),p=!1,g=k(r,"disableForReducedMotion",Boolean),y=o&&!!k(r||{},"useWorker"),d=y?H():null,v=c?he:fe,w=a&&d?!!a.__confetti_initialized:!1,S=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,C;function T(x,$,R){for(var D=k(x,"particleCount",U),G=k(x,"angle",Number),z=k(x,"spread",Number),q=k(x,"startVelocity",Number),ke=k(x,"decay",Number),we=k(x,"gravity",Number),Ce=k(x,"drift",Number),te=k(x,"colors",ne),Me=k(x,"ticks",Number),ie=k(x,"shapes"),Se=k(x,"scalar"),Te=!!k(x,"flat"),re=de(x),se=D,_=[],Le=a.width*re.x,Pe=a.height*re.y;se--;)_.push(ge({x:Le,y:Pe,angle:G,spread:z,startVelocity:q,color:te[se%te.length],shape:ie[le(0,ie.length)],ticks:Me,decay:ke,gravity:we,drift:Ce,scalar:Se,flat:Te}));return C?C.addFettis(_):(C=ve(a,_,v,$,R),C.promise)}function A(x){var $=g||k(x,"disableForReducedMotion",Boolean),R=k(x,"zIndex",Number);if($&&S)return M(function(q){q()});c&&C?a=C.canvas:c&&!a&&(a=ue(R),document.body.appendChild(a)),f&&!w&&v(a);var D={width:a.width,height:a.height};d&&!w&&d.init(a),w=!0,d&&(a.__confetti_initialized=!0);function G(){if(d){var q={getBoundingClientRect:function(){if(!c)return a.getBoundingClientRect()}};v(q),d.postMessage({resize:{width:q.width,height:q.height}});return}D.width=D.height=null}function z(){C=null,f&&(p=!1,e.removeEventListener("resize",G)),c&&a&&(document.body.contains(a)&&document.body.removeChild(a),a=null,w=!1)}return f&&!p&&(p=!0,e.addEventListener("resize",G,!1)),d?d.fire(x,D,z):T(x,D,z)}return A.reset=function(){d&&d.reset(),C&&C.reset()},A}var j;function ee(){return j||(j=X(null,{useWorker:!0,resize:!0})),j}function me(a,r,c,f,p,g,y){var d=new Path2D(a),v=new Path2D;v.addPath(d,new DOMMatrix(r));var w=new Path2D;return w.addPath(v,new DOMMatrix([Math.cos(y)*p,Math.sin(y)*p,-Math.sin(y)*g,Math.cos(y)*g,c,f])),w}function xe(a){if(!l)throw new Error("path confetti are not supported in this browser");var r,c;typeof a=="string"?r=a:(r=a.path,c=a.matrix);var f=new Path2D(r),p=document.createElement("canvas"),g=p.getContext("2d");if(!c){for(var y=1e3,d=y,v=y,w=0,S=0,C,T,A=0;A<y;A+=2)for(var x=0;x<y;x+=2)g.isPointInPath(f,A,x,"nonzero")&&(d=Math.min(d,A),v=Math.min(v,x),w=Math.max(w,A),S=Math.max(S,x));C=w-d,T=S-v;var $=10,R=Math.min($/C,$/T);c=[R,0,0,R,-Math.round(C/2+d)*R,-Math.round(T/2+v)*R]}return{type:"path",path:r,matrix:c}}function be(a){var r,c=1,f="#000000",p='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof a=="string"?r=a:(r=a.text,c="scalar"in a?a.scalar:c,p="fontFamily"in a?a.fontFamily:p,f="color"in a?a.color:f);var g=10*c,y=""+g+"px "+p,d=new OffscreenCanvas(g,g),v=d.getContext("2d");v.font=y;var w=v.measureText(r),S=Math.ceil(w.actualBoundingBoxRight+w.actualBoundingBoxLeft),C=Math.ceil(w.actualBoundingBoxAscent+w.actualBoundingBoxDescent),T=2,A=w.actualBoundingBoxLeft+T,x=w.actualBoundingBoxAscent+T;S+=T+T,C+=T+T,d=new OffscreenCanvas(S,C),v=d.getContext("2d"),v.font=y,v.fillStyle=f,v.fillText(r,A,x);var $=1/c;return{type:"bitmap",bitmap:d.transferToImageBitmap(),matrix:[$,0,0,$,-S*$/2,-C*$/2]}}t.exports=function(){return ee().apply(this,arguments)},t.exports.reset=function(){ee().reset()},t.exports.create=X,t.exports.shapeFromPath=xe,t.exports.shapeFromText=be})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),J,!1);const Be=J.exports;J.exports.create;class Ee{constructor(){u(this,"ctx",null);u(this,"enabled",!0)}initCtx(){if(!this.ctx){const e=window.AudioContext||window.webkitAudioContext;this.ctx=new e}this.ctx.state==="suspended"&&this.ctx.resume()}playClick(){if(!this.enabled||(this.initCtx(),!this.ctx))return;const e=this.ctx.createOscillator(),t=this.ctx.createGain();e.type="triangle",e.frequency.setValueAtTime(400,this.ctx.currentTime),e.frequency.exponentialRampToValueAtTime(80,this.ctx.currentTime+.05),t.gain.setValueAtTime(.2,this.ctx.currentTime),t.gain.linearRampToValueAtTime(.01,this.ctx.currentTime+.05),e.connect(t),t.connect(this.ctx.destination),e.start(),e.stop(this.ctx.currentTime+.05)}playSizzle(){if(!this.enabled||(this.initCtx(),!this.ctx))return;const e=this.ctx.sampleRate*.4,t=this.ctx.createBuffer(1,e,this.ctx.sampleRate),i=t.getChannelData(0);for(let b=0;b<e;b++)i[b]=Math.random()*2-1;const s=this.ctx.createBufferSource();s.buffer=t;const o=this.ctx.createBiquadFilter();o.type="bandpass",o.frequency.setValueAtTime(3500,this.ctx.currentTime),o.Q.setValueAtTime(3,this.ctx.currentTime);const l=this.ctx.createGain();l.gain.setValueAtTime(.18,this.ctx.currentTime),l.gain.linearRampToValueAtTime(.01,this.ctx.currentTime+.4),s.connect(o),o.connect(l),l.connect(this.ctx.destination),s.start(),s.stop(this.ctx.currentTime+.4)}playFryer(){if(!this.enabled||(this.initCtx(),!this.ctx))return;const e=this.ctx.sampleRate*.5,t=this.ctx.createBuffer(1,e,this.ctx.sampleRate),i=t.getChannelData(0);for(let b=0;b<e;b++)i[b]=(Math.random()*2-1)*.8;const s=this.ctx.createBufferSource();s.buffer=t;const o=this.ctx.createBiquadFilter();o.type="lowpass",o.frequency.setValueAtTime(1800,this.ctx.currentTime);const l=this.ctx.createGain();l.gain.setValueAtTime(.25,this.ctx.currentTime),l.gain.linearRampToValueAtTime(.01,this.ctx.currentTime+.5),s.connect(o),o.connect(l),l.connect(this.ctx.destination),s.start(),s.stop(this.ctx.currentTime+.5)}playServe(){if(!this.enabled||(this.initCtx(),!this.ctx))return;const e=this.ctx.currentTime;[523.25,659.25,783.99].forEach((t,i)=>{if(!this.ctx)return;const s=this.ctx.createOscillator(),o=this.ctx.createGain();s.type="sine",s.frequency.setValueAtTime(t,e+i*.08),o.gain.setValueAtTime(.15,e+i*.08),o.gain.exponentialRampToValueAtTime(.001,e+i*.08+.35),s.connect(o),o.connect(this.ctx.destination),s.start(e+i*.08),s.stop(e+i*.08+.35)})}playCoin(){if(!this.enabled||(this.initCtx(),!this.ctx))return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),i=this.ctx.createOscillator(),s=this.ctx.createGain();t.type="sine",i.type="triangle",t.frequency.setValueAtTime(987.77,e),t.frequency.setValueAtTime(1318.51,e+.08),i.frequency.setValueAtTime(1975.53,e+.08),s.gain.setValueAtTime(.2,e),s.gain.exponentialRampToValueAtTime(.001,e+.4),t.connect(s),i.connect(s),s.connect(this.ctx.destination),t.start(e),i.start(e+.08),t.stop(e+.4),i.stop(e+.4)}playBell(){if(!this.enabled||(this.initCtx(),!this.ctx))return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),i=this.ctx.createGain();t.type="sine",t.frequency.setValueAtTime(1174.66,e),i.gain.setValueAtTime(.15,e),i.gain.exponentialRampToValueAtTime(.001,e+.6),t.connect(i),i.connect(this.ctx.destination),t.start(e),t.stop(e+.6)}playBurnWarning(){if(!this.enabled||(this.initCtx(),!this.ctx))return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),i=this.ctx.createGain();t.type="sawtooth",t.frequency.setValueAtTime(300,e),i.gain.setValueAtTime(.12,e),i.gain.linearRampToValueAtTime(.01,e+.12),t.connect(i),i.connect(this.ctx.destination),t.start(e),t.stop(e+.12)}playTrash(){if(!this.enabled||(this.initCtx(),!this.ctx))return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),i=this.ctx.createGain();t.type="square",t.frequency.setValueAtTime(160,e),t.frequency.exponentialRampToValueAtTime(50,e+.2),i.gain.setValueAtTime(.2,e),i.gain.linearRampToValueAtTime(.01,e+.2),t.connect(i),i.connect(this.ctx.destination),t.start(e),t.stop(e+.2)}playWin(){if(!this.enabled||(this.initCtx(),!this.ctx))return;const e=[523.25,659.25,783.99,1046.5],t=this.ctx.currentTime;e.forEach((i,s)=>{if(!this.ctx)return;const o=this.ctx.createOscillator(),l=this.ctx.createGain();o.type="triangle",o.frequency.setValueAtTime(i,t+s*.12),l.gain.setValueAtTime(.2,t+s*.12),l.gain.exponentialRampToValueAtTime(.001,t+s*.12+.4),o.connect(l),l.connect(this.ctx.destination),o.start(t+s*.12),o.stop(t+s*.12+.4)})}playPourDrink(){if(!this.enabled||(this.initCtx(),!this.ctx))return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),i=this.ctx.createGain();t.type="sine",t.frequency.setValueAtTime(300,e),t.frequency.exponentialRampToValueAtTime(700,e+.6),i.gain.setValueAtTime(.12,e),i.gain.linearRampToValueAtTime(.01,e+.6),t.connect(i),i.connect(this.ctx.destination),t.start(e),t.stop(e+.6)}playCheese(){if(!this.enabled||(this.initCtx(),!this.ctx))return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),i=this.ctx.createGain();t.type="sine",t.frequency.setValueAtTime(520,e),t.frequency.exponentialRampToValueAtTime(220,e+.1),i.gain.setValueAtTime(.18,e),i.gain.linearRampToValueAtTime(.01,e+.1),t.connect(i),i.connect(this.ctx.destination),t.start(e),t.stop(e+.1)}playLettuce(){if(!this.enabled||(this.initCtx(),!this.ctx))return;const e=this.ctx.currentTime,t=this.ctx.sampleRate*.08,i=this.ctx.createBuffer(1,t,this.ctx.sampleRate),s=i.getChannelData(0);for(let m=0;m<t;m++)s[m]=(Math.random()*2-1)*.6;const o=this.ctx.createBufferSource();o.buffer=i;const l=this.ctx.createBiquadFilter();l.type="highpass",l.frequency.setValueAtTime(2400,e);const b=this.ctx.createGain();b.gain.setValueAtTime(.15,e),b.gain.linearRampToValueAtTime(.01,e+.08),o.connect(l),l.connect(b),b.connect(this.ctx.destination),o.start(e),o.stop(e+.08)}}const h=new Ee,W="cooking_paradise_save_v1",Z=[{id:"grill_slots",name:"Qo'shimcha Grill Joyi",category:"appliances",level:1,maxLevel:3,cost:100,gemCost:0,description:"Bir vaqtning o'zida ko'proq kotlet qovuring (2 -> 4 -> 6)",icon:"🔥",effectText:"+2 ta kotlet joyi"},{id:"fryer_slots",name:"Tezkor Fri Savati",category:"appliances",level:1,maxLevel:3,cost:150,gemCost:1,description:"Fri kartoshkasini tezroq qovurish va ko'proq porsiya saqlash",icon:"🍟",effectText:"+1 ta qo'shimcha fri porsiyasi"},{id:"drink_machine",name:"Avtomat Kola Krani",category:"appliances",level:1,maxLevel:2,cost:120,gemCost:0,description:"Ichimliklar stakanini tezroq to'ldiradi",icon:"🥤",effectText:"2 barobar tez quyish"},{id:"meat_quality",name:"Premium Mol Go'shti",category:"ingredients",level:1,maxLevel:4,cost:180,gemCost:2,description:"Kotletlar yanada mazali bo'lib, har bir burger narxini oshiradi",icon:"🥩",effectText:"Har bir burger uchun +$10 daromad"},{id:"hotdog_sausage",name:"Germaniya Sosiskalari",category:"ingredients",level:1,maxLevel:3,cost:140,gemCost:1,description:"Hot-doglar uchun sifatli go'shtli sosiskalar",icon:"🌭",effectText:"Hot-dog uchun +$8 qo'shimcha narx"},{id:"radio_jukebox",name:"Musiqa Jukebox",category:"interior",level:1,maxLevel:3,cost:200,gemCost:2,description:"Kutayotgan mijozlarni xushnud qiladi va ularning sabrini oshiradi",icon:"📻",effectText:"+25% mijoz sabri"},{id:"deluxe_kitchen",name:"Zamonaviy Oshxona Dizayni",category:"interior",level:1,maxLevel:2,cost:500,gemCost:5,description:"Oshxonani 4-rasmdagi yangi yaltiroq zamonaviy holatga o'zgartiradi",icon:"✨",effectText:"Yangi yorqin restoran interyeri"}],Y={coins:250,gems:5,currentLevel:1,highestLevelUnlocked:1,levelStars:{1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0},unlockedRecipes:["burger","hotdog","fries","drink"],kitchenTheme:"standard"};class Re{constructor(){u(this,"stats");u(this,"upgrades");this.stats=this.loadStats(),this.upgrades=this.loadUpgrades()}loadStats(){try{const e=localStorage.getItem(W+"_stats");if(e)return{...Y,...JSON.parse(e)}}catch{}return{...Y}}loadUpgrades(){try{const e=localStorage.getItem(W+"_upgrades");if(e){const t=JSON.parse(e);return Z.map(i=>{const s=t.find(o=>o.id===i.id);return s?{...i,level:s.level,cost:s.cost}:i})}}catch{}return[...Z]}save(){try{localStorage.setItem(W+"_stats",JSON.stringify(this.stats)),localStorage.setItem(W+"_upgrades",JSON.stringify(this.upgrades))}catch(e){console.warn("Storage save error:",e)}}getStats(){return this.stats}getUpgrades(){return this.upgrades}getUpgrade(e){return this.upgrades.find(t=>t.id===e)}addCoins(e){this.stats.coins+=e,this.save()}addGems(e){this.stats.gems+=e,this.save()}purchaseUpgrade(e){const t=this.upgrades.find(i=>i.id===e);return!t||t.level>=t.maxLevel?!1:this.stats.coins>=t.cost&&this.stats.gems>=t.gemCost?(this.stats.coins-=t.cost,this.stats.gems-=t.gemCost,t.level+=1,t.cost=Math.round(t.cost*1.6),t.gemCost=Math.round(t.gemCost*1.5),e==="deluxe_kitchen"&&t.level>=2&&(this.stats.kitchenTheme="deluxe"),this.save(),!0):!1}completeLevel(e,t,i){const s=this.stats.levelStars[e]||0;t>s&&(this.stats.levelStars[e]=t),e===this.stats.highestLevelUnlocked&&t>0&&(this.stats.highestLevelUnlocked=Math.min(10,e+1)),this.addCoins(i),this.addGems(t),this.save()}resetAll(){this.stats={...Y},this.upgrades=[...Z],this.save()}}const E=new Re,De=[(n="happy")=>`
    <svg viewBox="0 0 120 140" class="avatar-svg">
      <defs>
        <radialGradient id="skin0" cx="50%" cy="40%" r="50%">
          <stop offset="0%" stop-color="#af6e4d"/>
          <stop offset="100%" stop-color="#8a4f32"/>
        </radialGradient>
      </defs>
      <!-- Hair back -->
      <circle cx="60" cy="55" r="46" fill="#2d1c15"/>
      <circle cx="30" cy="45" r="22" fill="#2d1c15"/>
      <circle cx="90" cy="45" r="22" fill="#2d1c15"/>
      <circle cx="25" cy="70" r="18" fill="#2d1c15"/>
      <circle cx="95" cy="70" r="18" fill="#2d1c15"/>
      <!-- Body / Shirt -->
      <path d="M 25 140 C 25 105, 95 105, 95 140 Z" fill="#58a4e0"/>
      <path d="M 40 110 L 60 125 L 80 110" stroke="#fff" stroke-width="2" fill="none"/>
      <!-- Neck -->
      <rect x="52" y="80" width="16" height="20" rx="4" fill="#8a4f32"/>
      <!-- Face -->
      <ellipse cx="60" cy="62" rx="30" ry="34" fill="url(#skin0)"/>
      <!-- Headband -->
      <path d="M 33 46 C 45 32, 75 32, 87 46" stroke="#f6c23e" stroke-width="8" stroke-linecap="round" fill="none"/>
      <path d="M 40 43 C 50 35, 70 35, 80 43" stroke="#2e59d9" stroke-width="3" stroke-linecap="round" fill="none"/>
      <!-- Eyes -->
      ${n==="angry"?`
        <ellipse cx="49" cy="60" rx="4" ry="3" fill="#111"/>
        <ellipse cx="71" cy="60" rx="4" ry="3" fill="#111"/>
        <path d="M 43 54 L 54 58" stroke="#222" stroke-width="2.5" stroke-linecap="round"/>
        <path d="M 77 54 L 66 58" stroke="#222" stroke-width="2.5" stroke-linecap="round"/>
      `:n==="impatient"?`
        <ellipse cx="49" cy="60" rx="4.5" ry="4" fill="#111"/>
        <ellipse cx="71" cy="60" rx="4.5" ry="4" fill="#111"/>
        <path d="M 43 56 L 54 56" stroke="#222" stroke-width="2"/>
        <path d="M 66 56 L 77 56" stroke="#222" stroke-width="2"/>
        <!-- Sweat drop -->
        <path d="M 85 48 C 85 45, 89 42, 89 42 C 89 42, 93 45, 93 48 C 93 51, 85 51, 85 48 Z" fill="#36b9cc"/>
      `:`
        <ellipse cx="48" cy="60" rx="5" ry="6" fill="#111"/>
        <ellipse cx="72" cy="60" rx="5" ry="6" fill="#111"/>
        <circle cx="50" cy="58" r="2" fill="#fff"/>
        <circle cx="74" cy="58" r="2" fill="#fff"/>
        <!-- Eyelashes -->
        <path d="M 43 54 C 47 50, 53 50, 55 54" stroke="#222" stroke-width="2" fill="none"/>
        <path d="M 65 54 C 67 50, 73 50, 77 54" stroke="#222" stroke-width="2" fill="none"/>
      `}
      <!-- Nose -->
      <path d="M 58 66 C 60 69, 62 69, 64 66" stroke="#683921" stroke-width="1.8" fill="none" stroke-linecap="round"/>
      <!-- Mouth -->
      ${n==="angry"?`
        <path d="M 52 82 Q 60 75 68 82" stroke="#4d1616" stroke-width="3" fill="none" stroke-linecap="round"/>
      `:n==="impatient"?`
        <line x1="52" y1="78" x2="68" y2="78" stroke="#4d1616" stroke-width="3" stroke-linecap="round"/>
      `:`
        <path d="M 50 74 Q 60 86 70 74 Z" fill="#b92b27"/>
        <path d="M 54 75 Q 60 78 66 75" fill="#fff"/>
      `}
      <!-- Gold earring -->
      <circle cx="31" cy="68" r="4" stroke="#f6c23e" stroke-width="2" fill="none"/>
    </svg>
  `,(n="happy")=>`
    <svg viewBox="0 0 120 140" class="avatar-svg">
      <defs>
        <radialGradient id="skin1" cx="50%" cy="40%" r="50%">
          <stop offset="0%" stop-color="#ffe3d1"/>
          <stop offset="100%" stop-color="#f8c9b2"/>
        </radialGradient>
      </defs>
      <!-- Bun on top -->
      <circle cx="60" cy="24" r="20" fill="#ba4825"/>
      <circle cx="60" cy="30" r="14" fill="#a03b1c"/>
      <!-- Body / Plaid Shirt -->
      <path d="M 25 140 C 25 105, 95 105, 95 140 Z" fill="#2d6a9f"/>
      <path d="M 40 108 L 40 140 M 80 108 L 80 140" stroke="#71b1db" stroke-width="3"/>
      <path d="M 25 125 L 95 125" stroke="#71b1db" stroke-width="3"/>
      <!-- Neck -->
      <rect x="52" y="80" width="16" height="20" rx="4" fill="#f8c9b2"/>
      <!-- Hair back -->
      <path d="M 28 50 C 25 80, 40 90, 40 90 L 80 90 C 80 90, 95 80, 92 50 Z" fill="#ba4825"/>
      <!-- Face -->
      <ellipse cx="60" cy="62" rx="28" ry="32" fill="url(#skin1)"/>
      <!-- Bangs -->
      <path d="M 32 50 Q 60 38 88 50 Q 60 45 32 50 Z" fill="#ba4825"/>
      <!-- Glasses Frame -->
      <rect x="36" y="52" width="20" height="17" rx="5" fill="none" stroke="#222" stroke-width="3"/>
      <rect x="64" y="52" width="20" height="17" rx="5" fill="none" stroke="#222" stroke-width="3"/>
      <line x1="56" y1="60" x2="64" y2="60" stroke="#222" stroke-width="3"/>
      <!-- Eyes behind glasses -->
      ${n==="angry"?`
        <ellipse cx="46" cy="60" rx="3.5" ry="3" fill="#2e7d32"/>
        <ellipse cx="74" cy="60" rx="3.5" ry="3" fill="#2e7d32"/>
      `:`
        <ellipse cx="46" cy="60" rx="4.5" ry="5" fill="#2e7d32"/>
        <ellipse cx="74" cy="60" rx="4.5" ry="5" fill="#2e7d32"/>
        <circle cx="48" cy="58" r="1.5" fill="#fff"/>
        <circle cx="76" cy="58" r="1.5" fill="#fff"/>
      `}
      <!-- Eyebrows -->
      ${n==="angry"?`
        <path d="M 37 47 L 52 51" stroke="#8a3014" stroke-width="2.5" stroke-linecap="round"/>
        <path d="M 83 47 L 68 51" stroke="#8a3014" stroke-width="2.5" stroke-linecap="round"/>
      `:`
        <path d="M 37 49 Q 46 45 54 48" stroke="#8a3014" stroke-width="2" fill="none" stroke-linecap="round"/>
        <path d="M 66 48 Q 74 45 83 49" stroke="#8a3014" stroke-width="2" fill="none" stroke-linecap="round"/>
      `}
      <!-- Mouth -->
      ${n==="angry"?`
        <path d="M 52 81 Q 60 75 68 81" stroke="#900" stroke-width="3" fill="none" stroke-linecap="round"/>
      `:n==="impatient"?`
        <line x1="52" y1="78" x2="68" y2="78" stroke="#900" stroke-width="3" stroke-linecap="round"/>
        <!-- Sweat drop -->
        <path d="M 86 50 C 86 47, 90 44, 90 44 C 90 44, 94 47, 94 50 C 94 53, 86 53, 86 50 Z" fill="#36b9cc"/>
      `:`
        <path d="M 51 75 Q 60 85 69 75 Z" fill="#e84a5f"/>
      `}
    </svg>
  `,(n="happy")=>`
    <svg viewBox="0 0 120 140" class="avatar-svg">
      <defs>
        <radialGradient id="skin2" cx="50%" cy="40%" r="50%">
          <stop offset="0%" stop-color="#fde2cf"/>
          <stop offset="100%" stop-color="#ebbe9e"/>
        </radialGradient>
      </defs>
      <!-- White Hair -->
      <ellipse cx="60" cy="48" rx="36" ry="32" fill="#eceff1"/>
      <circle cx="28" cy="62" r="10" fill="#cfd8dc"/>
      <circle cx="92" cy="62" r="10" fill="#cfd8dc"/>
      <!-- Body: Orange sweater with green tie/argyle -->
      <path d="M 20 140 C 20 100, 100 100, 100 140 Z" fill="#d97724"/>
      <!-- Green Collar & Tie -->
      <polygon points="53,98 67,98 60,118" fill="#2d6a4f"/>
      <polygon points="60,112 65,138 55,138" fill="#1b4332"/>
      <polygon points="45,120 60,105 75,120 60,135" stroke="#ecc37b" stroke-width="2" fill="none"/>
      <!-- Neck -->
      <rect x="52" y="80" width="16" height="20" rx="3" fill="#ebbe9e"/>
      <!-- Face -->
      <ellipse cx="60" cy="64" rx="30" ry="32" fill="url(#skin2)"/>
      <!-- Grandpa Glasses -->
      <circle cx="47" cy="59" r="11" fill="none" stroke="#6d4c41" stroke-width="2.5"/>
      <circle cx="73" cy="59" r="11" fill="none" stroke="#6d4c41" stroke-width="2.5"/>
      <line x1="58" y1="59" x2="62" y2="59" stroke="#6d4c41" stroke-width="2.5"/>
      <!-- Eyes -->
      <circle cx="47" cy="59" r="3.5" fill="#37474f"/>
      <circle cx="73" cy="59" r="3.5" fill="#37474f"/>
      <circle cx="49" cy="58" r="1.2" fill="#fff"/>
      <circle cx="75" cy="58" r="1.2" fill="#fff"/>
      <!-- Moustache -->
      <path d="M 45 74 C 55 70, 60 76, 60 76 C 60 76, 65 70, 75 74 C 77 78, 68 83, 60 78 C 52 83, 43 78, 45 74 Z" fill="#ffffff" stroke="#cfd8dc" stroke-width="1"/>
      <!-- Smile / Mood under moustache -->
      ${n==="angry"?`
        <path d="M 52 87 Q 60 82 68 87" stroke="#4a1818" stroke-width="3" fill="none" stroke-linecap="round"/>
      `:n==="impatient"?`
        <line x1="54" y1="84" x2="66" y2="84" stroke="#4a1818" stroke-width="2.5" stroke-linecap="round"/>
        <path d="M 88 52 C 88 49, 92 46, 92 46 C 92 46, 96 49, 96 52 C 96 55, 88 55, 88 52 Z" fill="#36b9cc"/>
      `:`
        <path d="M 53 79 Q 60 88 67 79" stroke="#b71c1c" stroke-width="3" fill="none" stroke-linecap="round"/>
      `}
    </svg>
  `,(n="happy")=>`
    <svg viewBox="0 0 120 140" class="avatar-svg">
      <defs>
        <radialGradient id="skin3" cx="50%" cy="40%" r="50%">
          <stop offset="0%" stop-color="#fedac2"/>
          <stop offset="100%" stop-color="#f1b590"/>
        </radialGradient>
      </defs>
      <!-- Hair -->
      <path d="M 30 46 C 30 25, 90 25, 90 46 C 94 40, 75 22, 55 22 C 35 22, 28 35, 30 46 Z" fill="#543828"/>
      <path d="M 32 45 Q 60 30 88 45 Q 60 38 32 45 Z" fill="#3d281c"/>
      <!-- Body / Blue polo -->
      <path d="M 22 140 C 22 102, 98 102, 98 140 Z" fill="#1e88e5"/>
      <polygon points="46,104 60,118 74,104 60,108" fill="#1565c0"/>
      <!-- Neck -->
      <rect x="52" y="80" width="16" height="20" rx="3" fill="#f1b590"/>
      <!-- Face -->
      <ellipse cx="60" cy="62" rx="28" ry="32" fill="url(#skin3)"/>
      <!-- Glasses -->
      <rect x="36" y="52" width="20" height="16" rx="4" fill="none" stroke="#1f2937" stroke-width="2.5"/>
      <rect x="64" y="52" width="20" height="16" rx="4" fill="none" stroke="#1f2937" stroke-width="2.5"/>
      <line x1="56" y1="59" x2="64" y2="59" stroke="#1f2937" stroke-width="2.5"/>
      <!-- Eyes -->
      <circle cx="46" cy="60" r="4" fill="#2c3e50"/>
      <circle cx="74" cy="60" r="4" fill="#2c3e50"/>
      <circle cx="48" cy="58" r="1.3" fill="#fff"/>
      <circle cx="76" cy="58" r="1.3" fill="#fff"/>
      <!-- Mouth -->
      ${n==="angry"?`
        <path d="M 52 82 Q 60 76 68 82" stroke="#600" stroke-width="3" fill="none" stroke-linecap="round"/>
      `:n==="impatient"?`
        <line x1="53" y1="79" x2="67" y2="79" stroke="#600" stroke-width="2.5" stroke-linecap="round"/>
        <path d="M 87 49 C 87 46, 91 43, 91 43 C 91 43, 95 46, 95 49 C 95 52, 87 52, 87 49 Z" fill="#36b9cc"/>
      `:`
        <path d="M 51 76 Q 60 85 69 76" stroke="#991b1b" stroke-width="3" fill="none" stroke-linecap="round"/>
      `}
    </svg>
  `],L={rawPatty:`
    <svg viewBox="0 0 80 50" class="food-svg">
      <ellipse cx="40" cy="25" rx="36" ry="18" fill="#bc3939"/>
      <ellipse cx="40" cy="22" rx="34" ry="16" fill="#d9534f"/>
      <ellipse cx="38" cy="20" rx="30" ry="13" fill="#ea6153"/>
      <!-- marbling specks -->
      <circle cx="30" cy="18" r="2" fill="#ffd1d1"/>
      <circle cx="45" cy="22" r="2.5" fill="#ffd1d1"/>
      <circle cx="55" cy="17" r="1.8" fill="#ffd1d1"/>
    </svg>
  `,cookedPatty:`
    <svg viewBox="0 0 80 50" class="food-svg">
      <ellipse cx="40" cy="27" rx="36" ry="17" fill="#4a2511"/>
      <ellipse cx="40" cy="23" rx="35" ry="16" fill="#783f1d"/>
      <ellipse cx="40" cy="21" rx="33" ry="14" fill="#8c4a22"/>
      <!-- Grill marks -->
      <line x1="22" y1="16" x2="42" y2="28" stroke="#381a0b" stroke-width="3" stroke-linecap="round"/>
      <line x1="32" y1="13" x2="55" y2="27" stroke="#381a0b" stroke-width="3" stroke-linecap="round"/>
      <line x1="45" y1="12" x2="65" y2="24" stroke="#381a0b" stroke-width="3" stroke-linecap="round"/>
    </svg>
  `,burntPatty:`
    <svg viewBox="0 0 80 50" class="food-svg burnt">
      <ellipse cx="40" cy="25" rx="35" ry="16" fill="#1a1a1a"/>
      <ellipse cx="40" cy="22" rx="33" ry="14" fill="#2d2d2d"/>
      <!-- ash cracks -->
      <line x1="25" y1="20" x2="38" y2="24" stroke="#ff4500" stroke-width="1.5"/>
      <line x1="42" y1="18" x2="58" y2="22" stroke="#ff4500" stroke-width="1.5"/>
      <!-- X mark -->
      <path d="M 33 14 L 47 28 M 47 14 L 33 28" stroke="#e74a3b" stroke-width="3"/>
    </svg>
  `,completeBurger:`
    <svg viewBox="0 0 100 85" class="food-svg">
      <!-- Blue Rim Plate -->
      <ellipse cx="50" cy="68" rx="46" ry="15" fill="#d9e6f2"/>
      <ellipse cx="50" cy="67" rx="43" ry="13" fill="#4a90e2"/>
      <ellipse cx="50" cy="66" rx="39" ry="11" fill="#ffffff"/>

      <!-- Bottom Bun -->
      <ellipse cx="50" cy="58" rx="32" ry="10" fill="#d9822b"/>
      <ellipse cx="50" cy="56" rx="31" ry="9" fill="#f4caa1"/>

      <!-- Cooked Patty -->
      <ellipse cx="50" cy="50" rx="33" ry="10" fill="#5c2e17"/>
      <ellipse cx="50" cy="48" rx="32" ry="9" fill="#783f1d"/>

      <!-- Melted Cheese -->
      <path d="M 22 47 L 50 40 L 78 47 L 72 52 L 50 48 L 26 53 Z" fill="#ffc107"/>
      <polygon points="32,50 35,56 42,48" fill="#e0a800"/>
      <polygon points="58,48 65,56 68,50" fill="#e0a800"/>

      <!-- Lettuce wave -->
      <path d="M 20 44 C 28 38, 36 48, 48 40 C 60 48, 70 38, 78 44 C 80 47, 72 49, 50 49 C 26 49, 18 47, 20 44 Z" fill="#38a169"/>
      <path d="M 24 43 C 32 39, 44 46, 56 41 C 68 47, 74 42, 76 44" stroke="#68d391" stroke-width="1.5" fill="none"/>

      <!-- Top Bun with sesame seeds -->
      <path d="M 20 38 C 20 16, 80 16, 80 38 C 80 43, 20 43, 20 38 Z" fill="#d9822b"/>
      <path d="M 22 36 C 24 18, 76 18, 78 36 C 76 39, 24 39, 22 36 Z" fill="#e89838"/>
      <ellipse cx="36" cy="26" rx="2" ry="1.2" fill="#fff3d6" transform="rotate(-15 36 26)"/>
      <ellipse cx="50" cy="22" rx="2.2" ry="1.2" fill="#fff3d6"/>
      <ellipse cx="64" cy="26" rx="2" ry="1.2" fill="#fff3d6" transform="rotate(20 64 26)"/>
      <ellipse cx="43" cy="30" rx="1.8" ry="1" fill="#fff3d6"/>
      <ellipse cx="57" cy="30" rx="1.8" ry="1" fill="#fff3d6"/>
    </svg>
  `,completeHotdog:`
    <svg viewBox="0 0 100 70" class="food-svg">
      <!-- Blue Rim Plate -->
      <ellipse cx="50" cy="55" rx="45" ry="14" fill="#d9e6f2"/>
      <ellipse cx="50" cy="54" rx="42" ry="12" fill="#4a90e2"/>
      <ellipse cx="50" cy="53" rx="38" ry="10" fill="#ffffff"/>

      <!-- Green lettuce base -->
      <path d="M 18 42 C 26 34, 38 46, 50 36 C 62 46, 74 34, 82 42 C 78 48, 22 48, 18 42 Z" fill="#48bb78"/>

      <!-- Hot Dog Bun -->
      <ellipse cx="50" cy="42" rx="34" ry="12" fill="#d9822b"/>
      <ellipse cx="50" cy="39" rx="32" ry="10" fill="#f4caa1"/>

      <!-- Grilled Sausage -->
      <path d="M 20 35 C 16 35, 16 41, 20 41 L 80 41 C 84 41, 84 35, 80 35 Z" fill="#991b1b"/>
      <path d="M 22 36 L 78 36" stroke="#b91c1c" stroke-width="3" stroke-linecap="round"/>

      <!-- Mustard Zig-Zag -->
      <path d="M 25 38 Q 30 32 35 38 Q 40 44 45 38 Q 50 32 55 38 Q 60 44 65 38 Q 70 32 75 38" stroke="#ffeb3b" stroke-width="3.5" fill="none" stroke-linecap="round"/>
    </svg>
  `,frenchFries:`
    <svg viewBox="0 0 70 80" class="food-svg">
      <!-- Crispy Fries protruding -->
      <rect x="22" y="8" width="5" height="40" rx="1.5" fill="#f6c23e" transform="rotate(-15 22 8)"/>
      <rect x="30" y="5" width="5.5" height="42" rx="1.5" fill="#ffd15c" transform="rotate(-5 30 5)"/>
      <rect x="38" y="4" width="5.5" height="44" rx="1.5" fill="#f6c23e" transform="rotate(4 38 4)"/>
      <rect x="46" y="9" width="5" height="38" rx="1.5" fill="#eab308" transform="rotate(18 46 9)"/>
      <rect x="26" y="14" width="5" height="35" rx="1.5" fill="#facc15" transform="rotate(-8 26 14)"/>
      <rect x="35" y="12" width="6" height="38" rx="1.5" fill="#fde047"/>
      <rect x="42" y="16" width="5" height="32" rx="1.5" fill="#facc15" transform="rotate(10 42 16)"/>

      <!-- Red Fries Carton Box -->
      <polygon points="16,36 54,36 48,76 22,76" fill="#dc2626"/>
      <polygon points="16,36 54,36 52,42 18,42" fill="#b91c1c"/>
      <!-- Golden crest / logo on box -->
      <ellipse cx="35" cy="56" rx="10" ry="7" fill="#facc15"/>
      <ellipse cx="35" cy="56" rx="8" ry="5.5" fill="#dc2626"/>
      <path d="M 31 57 Q 35 52 39 57" stroke="#facc15" stroke-width="2" fill="none"/>
    </svg>
  `,coldDrink:`
    <svg viewBox="0 0 60 85" class="food-svg">
      <!-- Straw -->
      <rect x="38" y="2" width="4" height="40" rx="1" fill="#ef4444" transform="rotate(15 38 2)"/>
      <!-- Glass Cup -->
      <polygon points="14,24 46,24 41,78 19,78" fill="#2d3748" opacity="0.15"/>
      <!-- Cola Liquid -->
      <polygon points="15,30 45,30 40,76 20,76" fill="#3b1d11"/>
      <polygon points="16,32 44,32 39,74 21,74" fill="#4a2511"/>
      <!-- Ice cubes floating -->
      <rect x="22" y="34" width="8" height="8" rx="1.5" fill="#e2e8f0" opacity="0.75"/>
      <rect x="32" y="38" width="9" height="7" rx="1.5" fill="#e2e8f0" opacity="0.75"/>
      <!-- Glass Reflection Highlight -->
      <line x1="20" y1="32" x2="23" y2="72" stroke="#ffffff" stroke-width="2.5" opacity="0.6" stroke-linecap="round"/>
      <!-- Rim -->
      <ellipse cx="30" cy="24" rx="16" ry="4" fill="#cbd5e1" opacity="0.8"/>
    </svg>
  `,pizza:`
    <svg viewBox="0 0 85 70" class="food-svg">
      <ellipse cx="42" cy="40" rx="38" ry="24" fill="#d97706"/>
      <ellipse cx="42" cy="38" rx="35" ry="21" fill="#fbbf24"/>
      <!-- Pepperoni slices -->
      <circle cx="28" cy="35" r="5" fill="#b91c1c"/>
      <circle cx="42" cy="32" r="5.5" fill="#b91c1c"/>
      <circle cx="56" cy="36" r="5" fill="#b91c1c"/>
      <circle cx="35" cy="46" r="4.5" fill="#b91c1c"/>
      <circle cx="49" cy="45" r="4.5" fill="#b91c1c"/>
      <!-- Melted cheese strings -->
      <path d="M 20 38 Q 42 48 64 38" stroke="#fef08a" stroke-width="2" fill="none"/>
    </svg>
  `,nachos:`
    <svg viewBox="0 0 85 65" class="food-svg">
      <!-- Green tray -->
      <rect x="10" y="24" width="65" height="36" rx="6" fill="#22c55e"/>
      <rect x="12" y="26" width="61" height="32" rx="4" fill="#15803d"/>
      <!-- Tortilla chips -->
      <polygon points="18,48 30,30 38,48" fill="#facc15"/>
      <polygon points="32,50 44,32 54,48" fill="#eab308"/>
      <polygon points="46,49 58,32 68,48" fill="#facc15"/>
      <!-- Dip bowls -->
      <circle cx="28" cy="34" r="7" fill="#ef4444"/> <!-- salsa -->
      <circle cx="42" cy="32" r="7" fill="#84cc16"/> <!-- guacamole -->
      <circle cx="56" cy="34" r="7" fill="#f59e0b"/> <!-- cheese -->
    </svg>
  `};function qe(n){return`
    <svg viewBox="0 0 100 85" class="food-svg burger-plate-svg">
      <!-- Blue Rim Plate -->
      <ellipse cx="50" cy="68" rx="46" ry="15" fill="#d9e6f2"/>
      <ellipse cx="50" cy="67" rx="43" ry="13" fill="#4a90e2"/>
      <ellipse cx="50" cy="66" rx="39" ry="11" fill="#ffffff"/>

      ${n.hasBottomBun?"":`
        <!-- Plate center empty dashed ring -->
        <ellipse cx="50" cy="64" rx="24" ry="7" fill="none" stroke="#90cdf4" stroke-width="2" stroke-dasharray="4,3"/>
      `}

      ${n.hasBottomBun?`
        <!-- Bottom Bun -->
        <ellipse cx="50" cy="58" rx="32" ry="10" fill="#d9822b"/>
        <ellipse cx="50" cy="56" rx="31" ry="9" fill="#f4caa1"/>
      `:""}

      ${n.hasPatty?`
        <!-- Cooked Juicy Patty -->
        <ellipse cx="50" cy="50" rx="33" ry="10" fill="#5c2e17"/>
        <ellipse cx="50" cy="48" rx="32" ry="9" fill="#783f1d"/>
        <line x1="30" y1="46" x2="48" y2="52" stroke="#381a0b" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="48" y1="45" x2="68" y2="51" stroke="#381a0b" stroke-width="2.5" stroke-linecap="round"/>
      `:""}

      ${n.hasCheese?`
        <!-- Melted Golden Cheddar Cheese -->
        <path d="M 22 47 L 50 40 L 78 47 L 72 52 L 50 48 L 26 53 Z" fill="#ffc107"/>
        <polygon points="30,49 34,57 40,48" fill="#e0a800"/>
        <polygon points="58,48 64,57 68,50" fill="#e0a800"/>
        <polygon points="45,47 48,54 52,47" fill="#e0a800"/>
      `:""}

      ${n.hasLettuce?`
        <!-- Fresh Crisp Green Lettuce Leaf -->
        <path d="M 18 43 C 26 36, 36 47, 48 38 C 60 47, 72 36, 82 43 C 82 48, 72 49, 50 49 C 26 49, 18 48, 18 43 Z" fill="#38a169"/>
        <path d="M 22 42 C 30 37, 42 45, 54 39 C 66 45, 74 39, 78 42" stroke="#68d391" stroke-width="2" fill="none" stroke-linecap="round"/>
      `:""}

      ${n.hasTopBun?`
        <!-- Top Bun with sesame seeds -->
        <path d="M 20 38 C 20 16, 80 16, 80 38 C 80 43, 20 43, 20 38 Z" fill="#d9822b"/>
        <path d="M 22 36 C 24 18, 76 18, 78 36 C 76 39, 24 39, 22 36 Z" fill="#e89838"/>
        <ellipse cx="36" cy="26" rx="2" ry="1.2" fill="#fff3d6" transform="rotate(-15 36 26)"/>
        <ellipse cx="50" cy="22" rx="2.2" ry="1.2" fill="#fff3d6"/>
        <ellipse cx="64" cy="26" rx="2" ry="1.2" fill="#fff3d6" transform="rotate(20 64 26)"/>
        <ellipse cx="43" cy="30" rx="1.8" ry="1" fill="#fff3d6"/>
        <ellipse cx="57" cy="30" rx="1.8" ry="1" fill="#fff3d6"/>
      `:""}
    </svg>
  `}const Ie=`
<svg viewBox="0 0 1200 360" preserveAspectRatio="xMidYMid slice" class="restaurant-bg-svg" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Wall Gradient (Much lighter, airy bright cafe) -->
    <linearGradient id="wallGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="60%" stop-color="#fefaf2"/>
      <stop offset="100%" stop-color="#fbf2e3"/>
    </linearGradient>

    <!-- Wood Wainscoting (Light blonde honey wood) -->
    <linearGradient id="wainscotGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#ebd0b5"/>
      <stop offset="25%" stop-color="#dfbb98"/>
      <stop offset="100%" stop-color="#c2966c"/>
    </linearGradient>

    <!-- Floor Parquet (Golden honey parquet) -->
    <linearGradient id="floorGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#d6ab7e"/>
      <stop offset="100%" stop-color="#b07d4e"/>
    </linearGradient>

    <!-- Sun Window Sky (Bright sunny sky) -->
    <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#bae6fd"/>
      <stop offset="70%" stop-color="#e0f2fe"/>
      <stop offset="100%" stop-color="#f0f9ff"/>
    </linearGradient>

    <!-- Lamp Light Cone -->
    <linearGradient id="lampGlow" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="rgba(254, 240, 138, 0.45)"/>
      <stop offset="70%" stop-color="rgba(254, 240, 138, 0.15)"/>
      <stop offset="100%" stop-color="rgba(254, 240, 138, 0)"/>
    </linearGradient>

    <!-- Window Sunbeam (Bright sunlight) -->
    <linearGradient id="sunBeam" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="rgba(255, 255, 255, 0.6)"/>
      <stop offset="100%" stop-color="rgba(255, 255, 255, 0)"/>
    </linearGradient>

    <!-- Table Wood (Light blonde oak tables) -->
    <linearGradient id="tableWood" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#fbe0c3"/>
      <stop offset="40%" stop-color="#ecc093"/>
      <stop offset="100%" stop-color="#c8945f"/>
    </linearGradient>

    <!-- Chair Cushion -->
    <linearGradient id="cushionGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#f87171"/>
      <stop offset="100%" stop-color="#dc2626"/>
    </linearGradient>
    <linearGradient id="cushionTeal" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#38b2ac"/>
      <stop offset="100%" stop-color="#285e61"/>
    </linearGradient>
  </defs>

  <!-- 1. Upper Wall -->
  <rect x="0" y="0" width="1200" height="210" fill="url(#wallGrad)"/>

  <!-- 2. Wood Wainscoting Wall Paneling -->
  <rect x="0" y="190" width="1200" height="70" fill="url(#wainscotGrad)"/>
  <!-- Wainscot moulding trim -->
  <rect x="0" y="186" width="1200" height="8" fill="#e2985b"/>
  <rect x="0" y="190" width="1200" height="3" fill="#5c2e12"/>
  <!-- Wainscot vertical wood slat lines -->
  <g stroke="#613113" stroke-width="2" opacity="0.45">
    ${Array.from({length:30},(n,e)=>`<line x1="${e*42}" y1="194" x2="${e*42}" y2="260"/>`).join("")}
  </g>

  <!-- 3. Parquet Flooring -->
  <rect x="0" y="260" width="1200" height="100" fill="url(#floorGrad)"/>
  <rect x="0" y="258" width="1200" height="4" fill="#42210c"/>
  <!-- Perspective Floor Planks -->
  <g stroke="#42210c" stroke-width="2" opacity="0.5">
    <line x1="0" y1="285" x2="1200" y2="285"/>
    <line x1="0" y1="315" x2="1200" y2="315"/>
    <line x1="0" y1="345" x2="1200" y2="345"/>
    <line x1="150" y1="260" x2="90" y2="360"/>
    <line x1="320" y1="260" x2="280" y2="360"/>
    <line x1="500" y1="260" x2="480" y2="360"/>
    <line x1="700" y1="260" x2="720" y2="360"/>
    <line x1="880" y1="260" x2="920" y2="360"/>
    <line x1="1050" y1="260" x2="1110" y2="360"/>
  </g>

  <!-- 4. LEFT PANORAMIC SUNLIT WINDOW -->
  <g>
    <!-- Window Outer Frame -->
    <rect x="50" y="25" width="260" height="155" rx="8" fill="#e8c7a2" stroke="#8d5628" stroke-width="4"/>
    <!-- Glass Pane -->
    <rect x="58" y="33" width="244" height="139" rx="4" fill="url(#skyGrad)"/>
    <!-- Outdoor Trees / Sunshine View -->
    <circle cx="90" cy="145" r="45" fill="#48bb78" opacity="0.9"/>
    <circle cx="150" cy="150" r="55" fill="#38a169"/>
    <circle cx="210" cy="140" r="50" fill="#2f855a"/>
    <circle cx="270" cy="148" r="40" fill="#48bb78" opacity="0.85"/>
    <!-- Sunbeams -->
    <polygon points="60,35 140,35 240,170 120,170" fill="url(#sunBeam)"/>
    <!-- Window Grid Panes -->
    <line x1="180" y1="33" x2="180" y2="172" stroke="#8d5628" stroke-width="4"/>
    <line x1="58" y1="102" x2="302" y2="102" stroke="#8d5628" stroke-width="4"/>
    <!-- Window Sill with cute mini flower pots -->
    <rect x="42" y="176" width="276" height="10" rx="3" fill="#d4945d" stroke="#784218" stroke-width="2"/>
    <rect x="70" y="166" width="16" height="12" rx="2" fill="#c05621"/>
    <circle cx="78" cy="162" r="7" fill="#48bb78"/>
    <circle cx="78" cy="158" r="4" fill="#f56565"/>
    <rect x="250" y="166" width="16" height="12" rx="2" fill="#dd6b20"/>
    <circle cx="258" cy="161" r="7" fill="#38a169"/>
  </g>

  <!-- 5. RIGHT PANORAMIC SUNLIT WINDOW -->
  <g>
    <rect x="890" y="25" width="260" height="155" rx="8" fill="#e8c7a2" stroke="#8d5628" stroke-width="4"/>
    <rect x="898" y="33" width="244" height="139" rx="4" fill="url(#skyGrad)"/>
    <!-- Outdoor Trees -->
    <circle cx="930" cy="145" r="45" fill="#38a169"/>
    <circle cx="990" cy="150" r="55" fill="#48bb78"/>
    <circle cx="1060" cy="140" r="50" fill="#2f855a"/>
    <circle cx="1120" cy="152" r="45" fill="#38a169"/>
    <!-- Sunbeam -->
    <polygon points="900,35 980,35 1100,170 980,170" fill="url(#sunBeam)"/>
    <!-- Window Grid -->
    <line x1="1020" y1="33" x2="1020" y2="172" stroke="#8d5628" stroke-width="4"/>
    <line x1="898" y1="102" x2="1142" y2="102" stroke="#8d5628" stroke-width="4"/>
    <!-- Window Sill -->
    <rect x="882" y="176" width="276" height="10" rx="3" fill="#d4945d" stroke="#784218" stroke-width="2"/>
    <rect x="920" y="166" width="16" height="12" rx="2" fill="#c05621"/>
    <circle cx="928" cy="161" r="7" fill="#48bb78"/>
    <circle cx="928" cy="157" r="4" fill="#ecc94b"/>
  </g>

  <!-- 6. WALL DECORATIONS (Center Area) -->
  <!-- Chalkboard Menu -->
  <g>
    <!-- Frame -->
    <rect x="475" y="20" width="250" height="125" rx="8" fill="#5c2e12" stroke="#8d5628" stroke-width="4"/>
    <!-- Board -->
    <rect x="485" y="30" width="230" height="105" rx="4" fill="#1f2937"/>
    <!-- Chalk Text & Drawings -->
    <text x="600" y="52" fill="#fef08a" font-family="'Segoe UI', cursive, sans-serif" font-weight="900" font-size="14" text-anchor="middle" letter-spacing="1">⭐ RESTORAN MENYUSI ⭐</text>
    <line x1="510" y1="58" x2="690" y2="58" stroke="#fef08a" stroke-width="1.5" stroke-dasharray="3,3"/>
    <text x="505" y="76" fill="#ffffff" font-size="11" font-weight="bold">🍔 Burger ............ $25</text>
    <text x="505" y="94" fill="#ffffff" font-size="11" font-weight="bold">🌭 Hot-dog .......... $20</text>
    <text x="505" y="112" fill="#ffffff" font-size="11" font-weight="bold">🍟 Oltin Fri .......... $15</text>
    <text x="505" y="128" fill="#ffffff" font-size="11" font-weight="bold">🥤 Muzdek Kola .... $12</text>
    <!-- Little Chalk burger icon on right -->
    <circle cx="685" cy="85" r="14" fill="none" stroke="#f6c23e" stroke-width="1.5"/>
    <path d="M 675 85 Q 685 80 695 85" stroke="#f6c23e" stroke-width="2"/>
  </g>

  <!-- Framed Chef Art Print Left -->
  <g>
    <rect x="350" y="45" width="85" height="105" rx="4" fill="#ffffff" stroke="#ab6a38" stroke-width="4"/>
    <rect x="356" y="51" width="73" height="93" fill="#fed7aa"/>
    <text x="392" y="95" font-size="28" text-anchor="middle">👨‍🍳</text>
    <text x="392" y="125" fill="#7c2d12" font-size="10" font-weight="900" text-anchor="middle">MASTER CHEF</text>
  </g>

  <!-- Framed Retro Clock Right -->
  <g>
    <rect x="765" y="45" width="85" height="105" rx="4" fill="#ffffff" stroke="#ab6a38" stroke-width="4"/>
    <circle cx="807" cy="95" r="32" fill="#fff" stroke="#4a5568" stroke-width="3"/>
    <circle cx="807" cy="95" r="2.5" fill="#111"/>
    <line x1="807" y1="95" x2="807" y2="75" stroke="#222" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="807" y1="95" x2="822" y2="95" stroke="#e53e3e" stroke-width="2" stroke-linecap="round"/>
    <text x="807" y="70" font-size="7" font-weight="bold" text-anchor="middle" fill="#666">12</text>
    <text x="807" y="124" font-size="7" font-weight="bold" text-anchor="middle" fill="#666">6</text>
  </g>

  <!-- 7. BACKGROUND DINING TABLES & CHAIRS (Stol-stullar) -->

  <!-- TABLE SET 1: Mid-Left (Perspective Table & Chairs) -->
  <g>
    <!-- Left Chair -->
    <path d="M 360 215 C 360 185, 385 185, 385 215" stroke="#4a2511" stroke-width="4" fill="none"/>
    <rect x="365" y="215" width="26" height="8" rx="2" fill="url(#cushionTeal)"/>
    <line x1="367" y1="223" x2="365" y2="255" stroke="#331a0b" stroke-width="3"/>
    <line x1="389" y1="223" x2="391" y2="255" stroke="#331a0b" stroke-width="3"/>

    <!-- Right Chair -->
    <path d="M 455 215 C 455 185, 480 185, 480 215" stroke="#4a2511" stroke-width="4" fill="none"/>
    <rect x="450" y="215" width="26" height="8" rx="2" fill="url(#cushionTeal)"/>
    <line x1="452" y1="223" x2="450" y2="255" stroke="#331a0b" stroke-width="3"/>
    <line x1="474" y1="223" x2="476" y2="255" stroke="#331a0b" stroke-width="3"/>

    <!-- Table Top & Legs -->
    <polygon points="380,215 460,215 470,235 370,235" fill="url(#tableWood)" stroke="#5c2e12" stroke-width="2"/>
    <ellipse cx="420" cy="225" rx="46" ry="12" fill="url(#tableWood)"/>
    <!-- Table Pedestal Leg -->
    <rect x="415" y="235" width="10" height="35" rx="2" fill="#331a0b"/>
    <ellipse cx="420" cy="270" rx="20" ry="6" fill="#221107"/>
    <!-- Table Condiments -->
    <rect x="416" y="210" width="8" height="12" rx="1.5" fill="#f6ad55"/>
    <circle cx="410" cy="216" r="3" fill="#cbd5e0"/>
    <circle cx="428" cy="216" r="3" fill="#718096"/>
  </g>

  <!-- TABLE SET 2: Mid-Right (Perspective Table & Chairs) -->
  <g>
    <!-- Left Chair -->
    <path d="M 720 215 C 720 185, 745 185, 745 215" stroke="#4a2511" stroke-width="4" fill="none"/>
    <rect x="725" y="215" width="26" height="8" rx="2" fill="url(#cushionGrad)"/>
    <line x1="727" y1="223" x2="725" y2="255" stroke="#331a0b" stroke-width="3"/>
    <line x1="749" y1="223" x2="751" y2="255" stroke="#331a0b" stroke-width="3"/>

    <!-- Right Chair -->
    <path d="M 815 215 C 815 185, 840 185, 840 215" stroke="#4a2511" stroke-width="4" fill="none"/>
    <rect x="810" y="215" width="26" height="8" rx="2" fill="url(#cushionGrad)"/>
    <line x1="812" y1="223" x2="810" y2="255" stroke="#331a0b" stroke-width="3"/>
    <line x1="834" y1="223" x2="836" y2="255" stroke="#331a0b" stroke-width="3"/>

    <!-- Table Top & Legs -->
    <polygon points="740,215 820,215 830,235 730,235" fill="url(#tableWood)" stroke="#5c2e12" stroke-width="2"/>
    <ellipse cx="780" cy="225" rx="46" ry="12" fill="url(#tableWood)"/>
    <!-- Table Pedestal Leg -->
    <rect x="775" y="235" width="10" height="35" rx="2" fill="#331a0b"/>
    <ellipse cx="780" cy="270" rx="20" ry="6" fill="#221107"/>
    <!-- Table Vase with flower -->
    <rect x="777" y="211" width="6" height="10" rx="1" fill="#4299e1"/>
    <circle cx="780" cy="206" r="4" fill="#ed8936"/>
  </g>

  <!-- TABLE SET 3: Foreground Left Window Dining Table (Stol-stullar) -->
  <g>
    <!-- Chair Left -->
    <path d="M 100 240 C 100 200, 135 200, 135 240" stroke="#4a2511" stroke-width="5" fill="none"/>
    <path d="M 104 215 L 131 215" stroke="#4a2511" stroke-width="3"/>
    <rect x="102" y="240" width="36" height="12" rx="3" fill="url(#cushionGrad)"/>
    <line x1="106" y1="252" x2="102" y2="295" stroke="#2c1408" stroke-width="4" stroke-linecap="round"/>
    <line x1="134" y1="252" x2="138" y2="295" stroke="#2c1408" stroke-width="4" stroke-linecap="round"/>

    <!-- Chair Right -->
    <path d="M 235 240 C 235 200, 270 200, 270 240" stroke="#4a2511" stroke-width="5" fill="none"/>
    <path d="M 239 215 L 266 215" stroke="#4a2511" stroke-width="3"/>
    <rect x="232" y="240" width="36" height="12" rx="3" fill="url(#cushionGrad)"/>
    <line x1="236" y1="252" x2="232" y2="295" stroke="#2c1408" stroke-width="4" stroke-linecap="round"/>
    <line x1="264" y1="252" x2="268" y2="295" stroke="#2c1408" stroke-width="4" stroke-linecap="round"/>

    <!-- Large Foreground Table -->
    <ellipse cx="185" cy="255" rx="65" ry="18" fill="#693310"/>
    <ellipse cx="185" cy="252" rx="64" ry="17" fill="url(#tableWood)"/>
    <ellipse cx="185" cy="248" rx="60" ry="14" fill="#df9f68"/>
    <!-- Table Sturdy Legs -->
    <rect x="180" y="260" width="12" height="45" rx="3" fill="#331a0b"/>
    <polygon points="150,305 220,305 210,312 160,312" fill="#221107"/>
    <!-- Table Condiments: Ketchup, Mustard, Napkin holder -->
    <rect x="175" y="230" width="6" height="15" rx="1.5" fill="#e53e3e"/>
    <rect x="184" y="232" width="6" height="13" rx="1.5" fill="#ecc94b"/>
    <polygon points="194,242 202,232 208,242" fill="#edf2f7"/>
  </g>

  <!-- TABLE SET 4: Foreground Right Window Dining Table (Stol-stullar) -->
  <g>
    <!-- Chair Left -->
    <path d="M 930 240 C 930 200, 965 200, 965 240" stroke="#4a2511" stroke-width="5" fill="none"/>
    <path d="M 934 215 L 961 215" stroke="#4a2511" stroke-width="3"/>
    <rect x="932" y="240" width="36" height="12" rx="3" fill="url(#cushionTeal)"/>
    <line x1="936" y1="252" x2="932" y2="295" stroke="#2c1408" stroke-width="4" stroke-linecap="round"/>
    <line x1="964" y1="252" x2="968" y2="295" stroke="#2c1408" stroke-width="4" stroke-linecap="round"/>

    <!-- Chair Right -->
    <path d="M 1065 240 C 1065 200, 1100 200, 1100 240" stroke="#4a2511" stroke-width="5" fill="none"/>
    <path d="M 1069 215 L 1096 215" stroke="#4a2511" stroke-width="3"/>
    <rect x="1062" y="240" width="36" height="12" rx="3" fill="url(#cushionTeal)"/>
    <line x1="1066" y1="252" x2="1062" y2="295" stroke="#2c1408" stroke-width="4" stroke-linecap="round"/>
    <line x1="1094" y1="252" x2="1098" y2="295" stroke="#2c1408" stroke-width="4" stroke-linecap="round"/>

    <!-- Large Foreground Table -->
    <ellipse cx="1015" cy="255" rx="65" ry="18" fill="#693310"/>
    <ellipse cx="1015" cy="252" rx="64" ry="17" fill="url(#tableWood)"/>
    <ellipse cx="1015" cy="248" rx="60" ry="14" fill="#df9f68"/>
    <!-- Table Legs -->
    <rect x="1010" y="260" width="12" height="45" rx="3" fill="#331a0b"/>
    <polygon points="980,305 1050,305 1040,312 990,312" fill="#221107"/>
    <!-- Table items -->
    <circle cx="1015" cy="240" r="5" fill="#4fd1c5"/>
    <circle cx="1015" cy="235" r="4" fill="#f687b3"/>
    <rect x="1025" y="238" width="5" height="10" rx="1" fill="#cbd5e0"/>
  </g>

  <!-- 8. LUSH POTTED PLANTS (Corners) -->
  <g>
    <!-- Left Plant -->
    <polygon points="12,250 28,250 24,285 16,285" fill="#c05621"/>
    <ellipse cx="20" cy="250" rx="9" ry="3" fill="#9c4221"/>
    <path d="M 20 250 Q 8 220 2 205 Q 16 215 20 250" fill="#2f855a"/>
    <path d="M 20 250 Q 22 210 20 190 Q 28 215 20 250" fill="#38a169"/>
    <path d="M 20 250 Q 35 225 42 210 Q 32 230 20 250" fill="#48bb78"/>

    <!-- Right Plant -->
    <polygon points="1172,250 1188,250 1184,285 1176,285" fill="#c05621"/>
    <ellipse cx="1180" cy="250" rx="9" ry="3" fill="#9c4221"/>
    <path d="M 1180 250 Q 1168 220 1162 205 Q 1176 215 1180 250" fill="#2f855a"/>
    <path d="M 1180 250 Q 1182 210 1180 190 Q 1188 215 1180 250" fill="#38a169"/>
    <path d="M 1180 250 Q 1195 225 1202 210 Q 1192 230 1180 250" fill="#48bb78"/>
  </g>

  <!-- 9. HANGING PENDANT LAMPS & WARM LIGHT CONES -->
  ${[185,420,780,1015].map(n=>`
    <g>
      <line x1="${n}" y1="0" x2="${n}" y2="55" stroke="#1a202c" stroke-width="2.5"/>
      <path d="M ${n-22} 68 Q ${n} 52 ${n+22} 68 Z" fill="#2d3748" stroke="#1a202c" stroke-width="1.5"/>
      <ellipse cx="${n}" cy="68" rx="22" ry="6" fill="#d97706"/>
      <circle cx="${n}" cy="69" r="4" fill="#fef08a"/>
      <polygon points="${n-18},70 ${n+18},70 ${n+75},260 ${n-75},260" fill="url(#lampGlow)"/>
    </g>
  `).join("")}

  <!-- 10. FRONT COUNTER SNEEZE GUARD GLASS BARRIER (Bottom Divider) -->
  <g>
    <line x1="0" y1="345" x2="1200" y2="345" stroke="#e2e8f0" stroke-width="3" opacity="0.8"/>
    <rect x="0" y="345" width="1200" height="15" fill="rgba(226, 232, 240, 0.25)"/>
    ${[120,360,600,840,1080].map(n=>`
      <rect x="${n-4}" y="338" width="8" height="22" rx="2" fill="#e2e8f0" stroke="#718096" stroke-width="1.5"/>
      <circle cx="${n}" cy="344" r="2" fill="#4a5568"/>
    `).join("")}
  </g>
</svg>
`;class Ge{constructor(e,t){u(this,"container");u(this,"customers",[null,null,null]);u(this,"spawnTimer",0);u(this,"spawnInterval",6);u(this,"allowedDishes",["burger","fries","drink"]);u(this,"onCustomerServed");u(this,"onCustomerLost");u(this,"currentLevel",1);this.container=e,this.onCustomerServed=t.onCustomerServed,this.onCustomerLost=t.onCustomerLost}setAllowedDishes(e){this.allowedDishes=e}setSpawnInterval(e){this.spawnInterval=e}setLevel(e){this.currentLevel=e}reset(){this.customers=[null,null,null],this.spawnTimer=1,this.render()}update(e){var s;this.spawnTimer-=e,this.spawnTimer<=0&&(this.spawnCustomer(),this.spawnTimer=this.spawnInterval+Math.random()*2);let t=!1;const i=(((s=E.getUpgrade("radio_jukebox"))==null?void 0:s.level)||1)>1?1.3:1;for(let o=0;o<this.customers.length;o++){const l=this.customers[o];if(l){l.currentPatience-=e/i;const b=l.currentPatience/l.maxPatience;let m="happy";b<=.25?(m="angry",Math.random()<.05&&h.playBurnWarning()):b<=.55&&(m="impatient"),m!==l.mood&&(l.mood=m,t=!0),l.currentPatience<=0&&(h.playTrash(),this.customers[o]=null,this.onCustomerLost(),t=!0)}}this.updatePatienceDOM(),t&&this.render()}spawnCustomer(){var F,V;const e=[];if(this.customers.forEach((O,k)=>{O===null&&e.push(k)}),e.length===0)return;const t=e[Math.floor(Math.random()*e.length)],i=Math.floor(Math.random()*4);let s=1;this.currentLevel<=2?s=Math.random()<.75?1:2:this.currentLevel<=5?s=Math.random()<.35?1:2:this.currentLevel<=7?s=Math.random()<.15?1:Math.random()<.75?2:3:s=Math.random()<.35?2:3;const o=[],l=((F=E.getUpgrade("meat_quality"))==null?void 0:F.level)||1,b=((V=E.getUpgrade("hotdog_sausage"))==null?void 0:V.level)||1,m=25+(l-1)*10,M=20+(b-1)*8,P=15,B=12;for(let O=0;O<s;O++){const k=this.allowedDishes[Math.floor(Math.random()*this.allowedDishes.length)];let U=m;k==="hotdog"?U=M:k==="fries"?U=P:k==="drink"&&(U=B),o.push({id:`ord_${Date.now()}_${Math.random()}`,type:k,price:U,isDelivered:!1})}const H={id:`cust_${Date.now()}_${Math.random()}`,name:["Mijoz Aysha","Mijoz Dilnoza","Bobo Karim","Mijoz Alisher"][i],avatarId:i,slotIndex:t,orders:o,maxPatience:60,currentPatience:60,mood:"happy",tipMultiplier:1};this.customers[t]=H,h.playBell(),this.render()}deliverDish(e,t){let i=null,s=-1,o=1/0;if(this.customers.forEach((m,M)=>{if(!m)return;m.orders.some(B=>!B.isDelivered&&B.type===e)&&m.currentPatience<o&&(o=m.currentPatience,i=m,s=M)}),!i)return!1;const l=i.orders.find(m=>!m.isDelivered&&m.type===e);if(!l)return!1;if(l.isDelivered=!0,h.playServe(),i.orders.every(m=>m.isDelivered)){const m=i.currentPatience/i.maxPatience;let M=i.orders.reduce((V,O)=>V+O.price,0),P=0,B="";e==="burger"&&t&&(t.hasCheese&&t.hasLettuce?(P=20,B="🧀🥗 Deluxe"):t.hasCheese?(P=10,B="🧀 Pishloq"):t.hasLettuce&&(P=10,B="🥗 Salat"));const H=Math.round(M*m*.5)+P,F=M+H;h.playCoin(),this.showRewardFloat(s,F,B||(H>0?"Tezkor!":"")),setTimeout(()=>{this.customers[s]=null,this.onCustomerServed(F,m>.6),this.render()},400)}else h.playClick(),this.render();return!0}showRewardFloat(e,t,i){const s=this.container.querySelector(`.customer-slot[data-slot="${e}"]`);if(!s)return;const o=document.createElement("div");o.className="floating-coin-text",o.innerHTML=`+$${t} 🪙 ${i?`<span class="tip-tag">${i}</span>`:""}`,s.appendChild(o),setTimeout(()=>{o.remove()},1200)}updatePatienceDOM(){this.customers.forEach((e,t)=>{if(!e)return;const i=this.container.querySelector(`.patience-fill[data-slot="${t}"]`),s=this.container.querySelector(`.patience-sec[data-slot="${t}"]`);if(i){const o=Math.max(0,Math.min(100,e.currentPatience/e.maxPatience*100));i.style.height=`${o}%`,o>50?i.style.backgroundColor="#48bb78":o>25?i.style.backgroundColor="#ecc94b":i.style.backgroundColor="#f56565"}s&&(s.textContent=`${Math.ceil(e.currentPatience)}s`)})}render(){this.container.innerHTML=`
      <div class="customers-counter-row">
        ${[0,1,2].map(e=>{const t=this.customers[e];if(!t)return`
              <div class="customer-slot empty" data-slot="${e}">
                <div class="empty-stand-indicator"></div>
              </div>
            `;const i=De[t.avatarId](t.mood),s=Math.round(t.currentPatience/t.maxPatience*100);return`
            <div class="customer-slot active" data-slot="${e}">
              <!-- Order Speech Bubble -->
              <div class="order-bubble ${t.mood}">
                ${t.orders.map(o=>{let l=L.completeBurger;return o.type==="hotdog"?l=L.completeHotdog:o.type==="fries"?l=L.frenchFries:o.type==="drink"?l=L.coldDrink:o.type==="pizza"?l=L.pizza:o.type==="nachos"&&(l=L.nachos),`
                    <div class="bubble-dish-item ${o.isDelivered?"delivered":""}">
                      ${l}
                      ${o.isDelivered?'<div class="check-mark">✓</div>':""}
                    </div>
                  `}).join("")}
              </div>

              <!-- Patience Bar (Vertical meter next to customer with 60s countdown) -->
              <div class="patience-wrapper">
                <div class="patience-sec" data-slot="${e}">${Math.ceil(t.currentPatience)}s</div>
                <div class="patience-meter">
                  <div class="patience-fill" data-slot="${e}" style="height: ${s}%"></div>
                </div>
              </div>

              <!-- Customer Character Avatar -->
              <div class="customer-avatar-box ${t.mood}">
                ${i}
              </div>
            </div>
          `}).join("")}
      </div>
    `}}class Oe{constructor(e,t){u(this,"container");u(this,"customerManager");u(this,"grillSlots",[]);u(this,"burgerPlates",[]);u(this,"hotdogPlates",[]);u(this,"fryer",{id:0,state:"empty",progress:0,readyPortions:1,maxPortions:3});u(this,"drinkDispenser",{id:0,state:"ready",progress:1,hasReadyCup:!0});u(this,"cookTime",4);u(this,"burnTime",6);u(this,"fryTime",5);this.container=e,this.customerManager=t,this.initStations()}initStations(){var i;const e=((i=E.getUpgrade("grill_slots"))==null?void 0:i.level)||1,t=e===1?2:e===2?4:6;this.grillSlots=Array.from({length:t},(s,o)=>({id:o,state:"empty",progress:0,burnProgress:0,cookingDuration:this.cookTime,burnDuration:this.burnTime})),this.burgerPlates=Array.from({length:4},(s,o)=>({id:o,hasBottomBun:!1,hasPatty:!1,hasCheese:!1,hasLettuce:!1,hasTopBun:!1,isComplete:!1})),this.hotdogPlates=Array.from({length:2},(s,o)=>({id:o,hasBun:!1,hasSausage:!1,hasMustard:!1,isComplete:!1})),this.fryer={id:0,state:"empty",progress:0,readyPortions:1,maxPortions:3},this.drinkDispenser={id:0,state:"ready",progress:1,hasReadyCup:!0},this.render()}update(e){var i;let t=!1;for(const s of this.grillSlots)s.state==="cooking"?(s.progress+=e/s.cookingDuration,s.progress>=1&&(s.state="cooked",s.progress=1,h.playBell(),t=!0)):s.state==="cooked"&&(s.burnProgress+=e/s.burnDuration,s.burnProgress>=1&&(s.state="burnt",s.burnProgress=1,h.playBurnWarning(),t=!0));if(this.fryer.state==="frying"&&(this.fryer.progress+=e/this.fryTime,this.fryer.progress>=1&&(this.fryer.state="cooked",this.fryer.progress=1,this.fryer.readyPortions=Math.min(this.fryer.maxPortions,this.fryer.readyPortions+2),h.playServe(),t=!0)),this.drinkDispenser.state==="filling"){const o=(((i=E.getUpgrade("drink_machine"))==null?void 0:i.level)||1)>1?2.5:1.2;this.drinkDispenser.progress+=e*o,this.drinkDispenser.progress>=1&&(this.drinkDispenser.state="ready",this.drinkDispenser.hasReadyCup=!0,this.drinkDispenser.progress=1,h.playBell(),t=!0)}this.updateLiveMeters(),t&&this.render()}addPattyToGrill(){const e=this.grillSlots.find(t=>t.state==="empty"||t.state===void 0);e&&(e.state="cooking",e.progress=0,e.burnProgress=0,h.playSizzle(),this.render())}handleGrillSlotClick(e){const t=this.grillSlots.find(i=>i.id===e);if(t){if(t.state==="burnt"){t.state="empty",t.progress=0,t.burnProgress=0,h.playTrash(),this.render();return}if(t.state==="cooked"){const i=this.burgerPlates.find(s=>s.hasBottomBun&&!s.hasPatty);if(i)i.hasPatty=!0,t.state="empty",t.progress=0,t.burnProgress=0,h.playClick(),this.render();else{const s=this.burgerPlates.find(o=>!o.hasBottomBun);s&&(s.hasBottomBun=!0,s.hasPatty=!0,t.state="empty",t.progress=0,t.burnProgress=0,h.playClick(),this.render())}}}}handleBurgerPlateClick(e){const t=this.burgerPlates.find(i=>i.id===e);if(t){if(t.isComplete){this.customerManager.deliverDish("burger",{hasCheese:t.hasCheese,hasLettuce:t.hasLettuce})&&(t.hasBottomBun=!1,t.hasPatty=!1,t.hasCheese=!1,t.hasLettuce=!1,t.hasTopBun=!1,t.isComplete=!1,this.render());return}if(!t.hasBottomBun){t.hasBottomBun=!0,h.playClick(),this.render();return}if(t.hasBottomBun&&!t.hasPatty){const i=this.grillSlots.find(s=>s.state==="cooked");if(i){t.hasPatty=!0,i.state="empty",i.progress=0,i.burnProgress=0,h.playClick(),this.render();return}}if(t.hasBottomBun&&t.hasPatty&&!t.isComplete){t.hasCheese?t.hasLettuce?(t.hasTopBun=!0,t.isComplete=!0,h.playServe()):(t.hasLettuce=!0,h.playLettuce()):(t.hasCheese=!0,h.playCheese()),this.render();return}}}addToppingToPlate(e){if(e==="bun"){const t=this.burgerPlates.find(i=>!i.hasBottomBun);t&&(t.hasBottomBun=!0,h.playClick(),this.render());return}if(e==="cheese"){const t=this.burgerPlates.find(i=>i.hasBottomBun&&i.hasPatty&&!i.hasCheese&&!i.isComplete);if(t)t.hasCheese=!0,h.playCheese(),this.render();else{const i=this.burgerPlates.find(s=>s.hasBottomBun&&!s.hasCheese&&!s.isComplete);i&&(i.hasCheese=!0,h.playCheese(),this.render())}return}if(e==="lettuce"){const t=this.burgerPlates.find(i=>i.hasBottomBun&&i.hasPatty&&!i.hasLettuce&&!i.isComplete);if(t)t.hasLettuce=!0,h.playLettuce(),this.render();else{const i=this.burgerPlates.find(s=>s.hasBottomBun&&!s.hasLettuce&&!s.isComplete);i&&(i.hasLettuce=!0,h.playLettuce(),this.render())}return}if(e==="topBun"){const t=this.burgerPlates.find(i=>i.hasBottomBun&&i.hasPatty&&!i.hasTopBun&&!i.isComplete);t&&(t.hasTopBun=!0,t.isComplete=!0,h.playServe(),this.render());return}}autoAssembleBurger(){const e=this.grillSlots.find(i=>i.state==="cooked"),t=this.burgerPlates.find(i=>!i.isComplete);e&&t&&(t.hasBottomBun=!0,t.hasPatty=!0,t.hasCheese=!0,t.hasLettuce=!0,t.hasTopBun=!0,t.isComplete=!0,e.state="empty",h.playServe(),this.render())}handleFryerClick(){this.fryer.state==="empty"?(this.fryer.state="frying",this.fryer.progress=0,h.playFryer(),this.render()):this.fryer.state==="cooked"&&this.fryer.readyPortions>0&&this.customerManager.deliverDish("fries")&&(this.fryer.readyPortions--,this.fryer.readyPortions<=0&&(this.fryer.state="empty"),this.render())}serveFries(){this.fryer.readyPortions>0?this.customerManager.deliverDish("fries")&&(this.fryer.readyPortions--,this.fryer.readyPortions<=0&&this.fryer.state==="cooked"&&(this.fryer.state="empty"),this.render()):this.handleFryerClick()}handleDrinkClick(){this.drinkDispenser.hasReadyCup?this.customerManager.deliverDish("drink")&&(this.drinkDispenser.hasReadyCup=!1,this.drinkDispenser.state="filling",this.drinkDispenser.progress=0,h.playPourDrink(),this.render()):this.drinkDispenser.state==="empty"&&(this.drinkDispenser.state="filling",this.drinkDispenser.progress=0,h.playPourDrink(),this.render())}handleHotdogPlateClick(e){const t=this.hotdogPlates.find(i=>i.id===e);if(t){if(t.isComplete){this.customerManager.deliverDish("hotdog")&&(t.hasBun=!1,t.hasSausage=!1,t.hasMustard=!1,t.isComplete=!1,this.render());return}if(!t.hasBun){t.hasBun=!0,t.hasSausage=!0,h.playClick(),this.render();return}t.hasBun&&!t.isComplete&&(t.hasMustard=!0,t.isComplete=!0,h.playServe(),this.render())}}updateLiveMeters(){this.grillSlots.forEach(i=>{const s=this.container.querySelector(`.grill-meter[data-slot="${i.id}"]`);s&&(i.state==="cooking"?(s.style.width=`${i.progress*100}%`,s.style.backgroundColor="#f6c23e"):i.state==="cooked"?(s.style.width=`${(1-i.burnProgress)*100}%`,s.style.backgroundColor="#48bb78"):s.style.width="0%")});const e=this.container.querySelector(".fryer-meter");e&&(this.fryer.state==="frying"?e.style.height=`${this.fryer.progress*100}%`:e.style.height="0%");const t=this.container.querySelector(".drink-meter");t&&(this.drinkDispenser.state==="filling"?t.style.height=`${this.drinkDispenser.progress*100}%`:t.style.height="100%")}render(){this.container.innerHTML=`
      <div class="kitchen-counter-layout">

        <!-- LEFT SECTION: French Fries Deep Fryer & Soda Fountain -->
        <div class="station-side station-left">
          <!-- Fries Fryer -->
          <div class="fryer-station-card">
            <div class="station-title">Fritiyur (Fri)</div>
            <div class="fryer-box ${this.fryer.state}" id="btn-fryer">
              <div class="fryer-oil">
                <div class="oil-bubbles"></div>
              </div>
              <div class="fryer-meter"></div>
              <div class="fryer-basket">
                ${this.fryer.state==="frying"?"🔥 Qovurilmoqda...":"🍟 Kartoshka solish"}
              </div>
            </div>

            <!-- Ready Fries Portions on Counter -->
            <div class="ready-fries-row">
              ${[0,1,2].map(e=>`
                <div class="ready-fries-item ${e<this.fryer.readyPortions?"filled":"empty"}" data-fry="${e}">
                  ${e<this.fryer.readyPortions?L.frenchFries:'<div class="empty-tray"></div>'}
                </div>
              `).join("")}
            </div>
          </div>

          <!-- Cold Drink Dispenser -->
          <div class="drink-station-card">
            <div class="station-title">Kola Mashinasi</div>
            <div class="drink-dispenser-box" id="btn-drink">
              <div class="dispenser-nozzle"></div>
              <div class="dispenser-cup-slot">
                ${this.drinkDispenser.hasReadyCup?`
                  <div class="ready-drink-cup">
                    ${L.coldDrink}
                  </div>
                `:`
                  <div class="filling-cup-wrapper">
                    <div class="drink-meter"></div>
                    <div class="empty-cup-outline">🥤 To'ldirish...</div>
                  </div>
                `}
              </div>
            </div>
          </div>
        </div>

        <!-- CENTER SECTION: Burger & Hotdog Prep Plates (Matching Image 1 & 2) -->
        <div class="station-center">
          <div class="assembly-table-card">
            <div class="station-title">
              <span>Peshtaxta (Burger & Hot-dog)</span>
              <button class="quick-prep-btn" id="btn-quick-prep" title="Tezkor Burger tayyorlash">⚡ Tez Yig'ish</button>
            </div>

            <!-- 4 Burger Plates on Table -->
            <div class="burger-plates-grid">
              ${this.burgerPlates.map(e=>`
                <div class="burger-plate-box ${e.isComplete?"ready-to-serve":""}" data-plate="${e.id}">
                  <div class="plate-base">
                    ${qe(e)}
                    <div class="plate-status-indicator">
                      ${e.isComplete?'<span class="status-badge ready">✨ TAYYOR!</span>':e.hasPatty?`<span class="status-badge in-progress ${e.hasCheese?"has-ch":""} ${e.hasLettuce?"has-lt":""}">
                          ${e.hasCheese?"🧀":""}${e.hasLettuce?"🥗":""} ${!e.hasCheese||!e.hasLettuce?"+ Pishloq/Salat":"+ Yopish"}
                        </span>`:e.hasBottomBun?'<span class="status-badge bun">🥩 + Kotlet</span>':'<span class="status-badge empty">+ Non</span>'}
                    </div>
                  </div>
                </div>
              `).join("")}
            </div>

            <!-- Hot-dog Plates Row -->
            <div class="hotdog-plates-row">
              ${this.hotdogPlates.map(e=>`
                <div class="hotdog-plate-box ${e.isComplete?"ready-to-serve":""}" data-hotdog="${e.id}">
                  ${e.isComplete?`
                    <div class="hotdog-complete-anim">
                      ${L.completeHotdog}
                      <div class="serve-tag">TAYYOR!</div>
                    </div>
                  `:e.hasBun?`
                    <div class="assembling-hotdog">
                      ${L.completeHotdog}
                      <div class="assemble-hint">+ Gorchitsa</div>
                    </div>
                  `:`
                    <div class="empty-hotdog-tray">
                      <span>🌭 + Hot-dog</span>
                    </div>
                  `}
                </div>
              `).join("")}
            </div>

            <!-- Interactive Ingredient Counters / Trays -->
            <div class="ingredient-trays-container">
              <div class="ing-station-card" id="btn-add-bun">
                <div class="ing-mini-icon">🍞</div>
                <div class="ing-info">
                  <span class="ing-title">Non qo'yish</span>
                </div>
              </div>

              <div class="ing-station-card highlight-cheese" id="btn-add-cheese">
                <div class="ing-mini-icon">🧀</div>
                <div class="ing-info">
                  <span class="ing-title">Pishloq</span>
                  <span class="ing-sub">+10$ Bonus</span>
                </div>
              </div>

              <div class="ing-station-card highlight-lettuce" id="btn-add-lettuce">
                <div class="ing-mini-icon">🥗</div>
                <div class="ing-info">
                  <span class="ing-title">Salat bargi</span>
                  <span class="ing-sub">+10$ Bonus</span>
                </div>
              </div>

              <div class="ing-station-card" id="btn-add-topbun">
                <div class="ing-mini-icon">🍔</div>
                <div class="ing-info">
                  <span class="ing-title">Qopqoq</span>
                  <span class="ing-sub">Yopish</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- RIGHT SECTION: Sizzling Meat Grill & Raw Patty Stash (Matching Image 1 & 2) -->
        <div class="station-side station-right">
          <div class="grill-station-card">
            <div class="station-title">
              <span>Grill (Kotletlar)</span>
              <span class="grill-badge">🔥 Olov</span>
            </div>

            <!-- Grill Surface with Heating Grates -->
            <div class="grill-surface-grid cols-${Math.min(3,this.grillSlots.length)}">
              ${this.grillSlots.map(e=>`
                <div class="grill-slot ${e.state}" data-slot="${e.id}">
                  <div class="grill-grate-lines"></div>
                  <div class="grill-meter-bar">
                    <div class="grill-meter" data-slot="${e.id}"></div>
                  </div>

                  <div class="grill-slot-content">
                    ${e.state==="cooking"?`
                      <div class="sizzling-patty">
                        ${L.rawPatty}
                        <div class="smoke-puff">💨</div>
                      </div>
                    `:e.state==="cooked"?`
                      <div class="cooked-patty-glow">
                        ${L.cookedPatty}
                        <div class="ready-badge">TAYYOR!</div>
                      </div>
                    `:e.state==="burnt"?`
                      <div class="burnt-patty-box">
                        ${L.burntPatty}
                        <div class="burnt-badge">KUYDI! (Axlat)</div>
                      </div>
                    `:`
                      <div class="empty-grill-mark">+ Go'sht</div>
                    `}
                  </div>
                </div>
              `).join("")}
            </div>

            <!-- Raw Patties Stash Stack -->
            <div class="raw-patty-stash" id="btn-raw-patty">
              <div class="stash-header">🥩 Xom Kotletlar (Bosing)</div>
              <div class="patty-stack-visual">
                ${L.rawPatty}
              </div>
            </div>
          </div>
        </div>

      </div>
    `,this.attachEventListeners()}attachEventListeners(){var e,t,i,s,o,l,b,m;(e=this.container.querySelector("#btn-raw-patty"))==null||e.addEventListener("click",()=>{this.addPattyToGrill()}),(t=this.container.querySelector("#btn-quick-prep"))==null||t.addEventListener("click",()=>{this.autoAssembleBurger()}),this.container.querySelectorAll(".grill-slot").forEach(M=>{M.addEventListener("click",()=>{const P=parseInt(M.getAttribute("data-slot")||"0",10);this.handleGrillSlotClick(P)})}),this.container.querySelectorAll(".burger-plate-box").forEach(M=>{M.addEventListener("click",()=>{const P=parseInt(M.getAttribute("data-plate")||"0",10);this.handleBurgerPlateClick(P)})}),this.container.querySelectorAll(".hotdog-plate-box").forEach(M=>{M.addEventListener("click",()=>{const P=parseInt(M.getAttribute("data-hotdog")||"0",10);this.handleHotdogPlateClick(P)})}),(i=this.container.querySelector("#btn-add-bun"))==null||i.addEventListener("click",()=>{this.addToppingToPlate("bun")}),(s=this.container.querySelector("#btn-add-cheese"))==null||s.addEventListener("click",()=>{this.addToppingToPlate("cheese")}),(o=this.container.querySelector("#btn-add-lettuce"))==null||o.addEventListener("click",()=>{this.addToppingToPlate("lettuce")}),(l=this.container.querySelector("#btn-add-topbun"))==null||l.addEventListener("click",()=>{this.addToppingToPlate("topBun")}),(b=this.container.querySelector("#btn-fryer"))==null||b.addEventListener("click",()=>{this.handleFryerClick()}),this.container.querySelectorAll(".ready-fries-item").forEach(M=>{M.addEventListener("click",()=>{this.serveFries()})}),(m=this.container.querySelector("#btn-drink"))==null||m.addEventListener("click",()=>{this.handleDrinkClick()})}}const N=[{levelNumber:1,targetScore:140,durationSeconds:100,customerSpawnInterval:6,allowedDishes:["burger","drink"],starScores:[100,140,190]},{levelNumber:2,targetScore:220,durationSeconds:110,customerSpawnInterval:5.5,allowedDishes:["burger","fries","drink"],starScores:[160,220,300]},{levelNumber:3,targetScore:320,durationSeconds:120,customerSpawnInterval:5,allowedDishes:["burger","hotdog","fries","drink"],starScores:[230,320,420]},{levelNumber:4,targetScore:430,durationSeconds:130,customerSpawnInterval:4.6,allowedDishes:["burger","hotdog","fries","drink"],starScores:[310,430,560]},{levelNumber:5,targetScore:550,durationSeconds:135,customerSpawnInterval:4.2,allowedDishes:["burger","hotdog","fries","drink"],starScores:[410,550,700]},{levelNumber:6,targetScore:680,durationSeconds:140,customerSpawnInterval:3.8,allowedDishes:["burger","hotdog","fries","drink"],starScores:[510,680,850]},{levelNumber:7,targetScore:820,durationSeconds:145,customerSpawnInterval:3.5,allowedDishes:["burger","hotdog","fries","drink"],starScores:[630,820,1020]},{levelNumber:8,targetScore:960,durationSeconds:150,customerSpawnInterval:3.2,allowedDishes:["burger","hotdog","fries","drink"],starScores:[750,960,1180]},{levelNumber:9,targetScore:1120,durationSeconds:155,customerSpawnInterval:3,allowedDishes:["burger","hotdog","fries","drink"],starScores:[890,1120,1380]},{levelNumber:10,targetScore:1320,durationSeconds:160,customerSpawnInterval:2.7,allowedDishes:["burger","hotdog","fries","drink"],starScores:[1050,1320,1650]}];class Ne{constructor(e){u(this,"customerManager");u(this,"kitchenManager");u(this,"isRunning",!1);u(this,"isPaused",!1);u(this,"lastTime",0);u(this,"currentLevelIndex",0);u(this,"currentScore",0);u(this,"timeRemaining",60);u(this,"customersServedCount",0);u(this,"customersLostCount",0);u(this,"comboCount",0);u(this,"lastServeTime",0);u(this,"headerEl");u(this,"customerAreaEl");u(this,"kitchenAreaEl");u(this,"modalAreaEl");this.headerEl=e.header,this.customerAreaEl=e.customerArea,this.kitchenAreaEl=e.kitchenArea,this.modalAreaEl=e.modalArea,this.initManagers()}initManagers(){this.customerManager=new Ge(this.customerAreaEl,{onCustomerServed:(e,t)=>this.handleCustomerServed(e,t),onCustomerLost:()=>this.handleCustomerLost()}),this.kitchenManager=new Oe(this.kitchenAreaEl,this.customerManager)}startLevel(e){this.currentLevelIndex=Math.max(0,Math.min(N.length-1,e-1));const t=N[this.currentLevelIndex];this.currentScore=0,this.timeRemaining=t.durationSeconds,this.customersServedCount=0,this.customersLostCount=0,this.comboCount=0,this.lastServeTime=0,this.customerManager.setAllowedDishes(t.allowedDishes),this.customerManager.setSpawnInterval(t.customerSpawnInterval),this.customerManager.setLevel(t.levelNumber),this.customerManager.reset(),this.kitchenManager.initStations(),this.isRunning=!0,this.isPaused=!1,this.lastTime=performance.now(),this.renderHeader(),requestAnimationFrame(i=>this.loop(i))}loop(e){if(!this.isRunning)return;if(this.isPaused){this.lastTime=e,requestAnimationFrame(i=>this.loop(i));return}const t=Math.min(.1,(e-this.lastTime)/1e3);if(this.lastTime=e,this.timeRemaining-=t,this.timeRemaining<=0){this.timeRemaining=0,this.endLevel();return}e-this.lastServeTime>4500&&this.comboCount>0&&(this.comboCount=0,this.renderHeader()),this.customerManager.update(t),this.kitchenManager.update(t),this.updateHeaderTime(),requestAnimationFrame(i=>this.loop(i))}handleCustomerServed(e,t){this.customersServedCount++;const i=performance.now();i-this.lastServeTime<4500?this.comboCount++:this.comboCount=1,this.lastServeTime=i;let s=0;this.comboCount>1&&(s=this.comboCount*5,this.showComboFloat(this.comboCount,s)),this.currentScore+=e+s,this.renderHeader();const o=N[this.currentLevelIndex];this.currentScore>=o.targetScore&&this.currentScore-(e+s)<o.targetScore&&h.playWin()}handleCustomerLost(){this.customersLostCount++,this.comboCount=0,this.renderHeader()}showComboFloat(e,t){const i=document.createElement("div");i.className="combo-floating-badge",i.innerHTML=`🔥 COMBO x${e}! +$${t}`,document.body.appendChild(i),setTimeout(()=>{i.remove()},1500)}endLevel(){this.isRunning=!1;const e=N[this.currentLevelIndex];let t=0;this.currentScore>=e.starScores[2]?t=3:this.currentScore>=e.starScores[1]?t=2:this.currentScore>=e.starScores[0]&&(t=1);const i=t>=1;i?(h.playWin(),Be({particleCount:100,spread:80,origin:{y:.6}}),E.completeLevel(e.levelNumber,t,this.currentScore)):h.playTrash(),this.showLevelResultModal(i,t)}showLevelResultModal(e,t){var s,o,l;const i=N[this.currentLevelIndex];this.modalAreaEl.innerHTML=`
      <div class="result-modal-overlay">
        <div class="result-modal-card ${e?"win":"lose"}">
          <div class="result-icon">${e?"🏆":"😢"}</div>
          <h2 class="result-title">${e?"DARAJA YAKUNLANDI!":"VAQT TUGADI!"}</h2>
          <p class="result-subtitle">
            ${e?`${i.levelNumber}-Daraja a'lo darajada yakunlandi!`:"Mijozlar buyurtmasini tezroq yetkazing!"}
          </p>

          <!-- Stars display -->
          <div class="stars-row">
            <span class="star-item ${t>=1?"earned":"empty"}">⭐</span>
            <span class="star-item ${t>=2?"earned":"empty"}">⭐</span>
            <span class="star-item ${t>=3?"earned":"empty"}">⭐</span>
          </div>

          <!-- Score Breakdown -->
          <div class="result-stats-table">
            <div class="stat-row">
              <span>To'plangan mablag':</span>
              <span class="val-gold">🪙 $${this.currentScore}</span>
            </div>
            <div class="stat-row">
              <span>Maqsadli mablag':</span>
              <span>$${i.targetScore}</span>
            </div>
            <div class="stat-row">
              <span>Xizmat ko'rsatilgan mijozlar:</span>
              <span>👥 ${this.customersServedCount} ta</span>
            </div>
            <div class="stat-row">
              <span>Ketib qolganlar:</span>
              <span>🚪 ${this.customersLostCount} ta</span>
            </div>
          </div>

          <!-- Buttons -->
          <div class="result-actions-row">
            <button class="action-btn replay" id="btn-replay">Qayta O'ynash 🔄</button>
            <button class="action-btn upgrades" id="btn-open-upgrade">Oshxona Yangilash ✨</button>
            ${e&&this.currentLevelIndex<N.length-1?`
              <button class="action-btn next" id="btn-next">Keyingi Daraja ⏩</button>
            `:""}
          </div>
        </div>
      </div>
    `,(s=this.modalAreaEl.querySelector("#btn-replay"))==null||s.addEventListener("click",()=>{this.modalAreaEl.innerHTML="",this.startLevel(i.levelNumber)}),(o=this.modalAreaEl.querySelector("#btn-next"))==null||o.addEventListener("click",()=>{this.modalAreaEl.innerHTML="",this.startLevel(i.levelNumber+1)}),(l=this.modalAreaEl.querySelector("#btn-open-upgrade"))==null||l.addEventListener("click",()=>{this.modalAreaEl.innerHTML="";const b=new CustomEvent("open-upgrades");window.dispatchEvent(b)})}updateHeaderTime(){const e=this.headerEl.querySelector(".timer-value");if(e){const t=Math.floor(this.timeRemaining/60),i=Math.floor(this.timeRemaining%60);e.textContent=`${t.toString().padStart(2,"0")}:${i.toString().padStart(2,"0")}`}}renderHeader(){var b,m,M;const e=N[this.currentLevelIndex],t=E.getStats(),i=Math.floor(this.timeRemaining/60),s=Math.floor(this.timeRemaining%60),o=`${i.toString().padStart(2,"0")}:${s.toString().padStart(2,"0")}`,l=Math.min(100,this.currentScore/e.targetScore*100);this.headerEl.innerHTML=`
      <div class="game-top-bar">
        <!-- Level & Target Info -->
        <div class="bar-section level-info">
          <div class="level-badge">${e.levelNumber}-DARAJA</div>
          <div class="score-progress-box">
            <div class="score-labels">
              <span class="current-score">🪙 $${this.currentScore}</span>
              <span class="target-score">/ $${e.targetScore}</span>
            </div>
            <div class="score-track">
              <div class="score-bar" style="width: ${l}%"></div>
              <!-- 3 Star Markers -->
              <div class="star-marker m1" style="left: ${e.starScores[0]/e.targetScore*100}%">⭐</div>
              <div class="star-marker m2" style="left: ${e.starScores[1]/e.targetScore*100}%">⭐</div>
              <div class="star-marker m3" style="left: ${e.starScores[2]/e.targetScore*100}%">⭐</div>
            </div>
          </div>
        </div>

        <!-- Center: Level Countdown Timer -->
        <div class="bar-section timer-section">
          <div class="timer-box">
            <span class="timer-icon">⏳</span>
            <span class="timer-value">${o}</span>
          </div>
          ${this.comboCount>1?`
            <div class="combo-pill">COMBO x${this.comboCount}!</div>
          `:""}
        </div>

        <!-- Right: Coins, Gems, Navigation Buttons -->
        <div class="bar-section nav-section">
          <div class="currency-pill coins">
            <span>🪙</span>
            <span id="player-coins-val">${t.coins}</span>
          </div>
          <div class="currency-pill gems">
            <span>💎</span>
            <span id="player-gems-val">${t.gems}</span>
          </div>

          <button class="nav-icon-btn" id="btn-toggle-sound" title="Ovoz yoqish/o'chirish">
            ${h.enabled?"🔊":"🔇"}
          </button>
          <button class="nav-icon-btn highlight" id="btn-nav-upgrades" title="Oshxonani Yangilash (4-rasm)">
            ✨ Yangilash
          </button>
          <button class="nav-icon-btn highlight book" id="btn-nav-cookbook" title="Retseptlar Albomi (5-rasm)">
            📖 Albom
          </button>
        </div>
      </div>
    `,(b=this.headerEl.querySelector("#btn-toggle-sound"))==null||b.addEventListener("click",()=>{h.enabled=!h.enabled,h.playClick(),this.renderHeader()}),(m=this.headerEl.querySelector("#btn-nav-upgrades"))==null||m.addEventListener("click",()=>{h.playClick(),window.dispatchEvent(new CustomEvent("open-upgrades"))}),(M=this.headerEl.querySelector("#btn-nav-cookbook"))==null||M.addEventListener("click",()=>{h.playClick(),window.dispatchEvent(new CustomEvent("open-cookbook"))})}refreshTheme(){this.kitchenManager.initStations(),this.renderHeader()}}class Fe{constructor(e,t){u(this,"container");u(this,"onUpgradePurchased");this.container=e,this.onUpgradePurchased=t}render(){const e=E.getStats(),t=E.getUpgrades();this.container.innerHTML=`
      <div class="upgrade-modal-overlay">
        <div class="upgrade-modal-content">
          <!-- Header -->
          <div class="upgrade-header">
            <div class="upgrade-title-badge">
              <span class="icon">✨</span>
              <h2>OSHXONANI YANGILASH (UPGRADE YOUR KITCHEN)</h2>
            </div>
            <div class="upgrade-stats-pill">
              <span class="coin-pill">🪙 ${e.coins}</span>
              <span class="gem-pill">💎 ${e.gems}</span>
            </div>
          </div>

          <!-- Before / After Visual Showcase (Matching Image 4) -->
          <div class="kitchen-comparison-banner">
            <div class="kitchen-before ${e.kitchenTheme==="standard"?"active":""}">
              <div class="badge-tag">Oddiy Oshxona</div>
              <div class="preview-kitchen old-theme">
                <div class="cracked-wall"></div>
                <div class="old-counter">🏚️ Standart jihozlar</div>
              </div>
            </div>

            <div class="upgrade-arrow">➡️</div>

            <div class="kitchen-after ${e.kitchenTheme==="deluxe"?"active":""}">
              <div class="badge-tag deluxe">Lyuks Oshxona ✨</div>
              <div class="preview-kitchen new-theme">
                <div class="sparkle-anim">✨</div>
                <div class="modern-counter">🌟 Yuqori tezlik & Daromad</div>
              </div>
            </div>
          </div>

          <!-- Upgrades Grid -->
          <div class="upgrades-grid">
            ${t.map(i=>this.renderUpgradeCard(i,e.coins,e.gems)).join("")}
          </div>

          <!-- Footer Back Button -->
          <div class="upgrade-footer">
            <button class="modal-close-btn" id="btn-close-upgrade">Oshxonaga Qaytish 👨‍🍳</button>
          </div>
        </div>
      </div>
    `,this.attachEvents()}renderUpgradeCard(e,t,i){const s=e.level>=e.maxLevel,o=t>=e.cost&&i>=e.gemCost;return`
      <div class="upgrade-card ${s?"maxed":""}">
        <div class="card-icon-box">${e.icon}</div>
        <div class="card-info">
          <div class="card-title-row">
            <span class="card-name">${e.name}</span>
            <span class="level-indicator">Lvl ${e.level}/${e.maxLevel}</span>
          </div>
          <div class="card-desc">${e.description}</div>
          <div class="card-effect">⚡ ${e.effectText}</div>
        </div>

        <div class="card-action">
          ${s?`
            <div class="max-badge">MAX DARAXA</div>
          `:`
            <button class="buy-upgrade-btn ${o?"affordable":"disabled"}" data-upgrade="${e.id}">
              <span class="btn-cost">🪙 ${e.cost}</span>
              ${e.gemCost>0?`<span class="btn-gem">💎 ${e.gemCost}</span>`:""}
              <span class="btn-label">Sotib olish</span>
            </button>
          `}
        </div>
      </div>
    `}attachEvents(){var e;this.container.querySelectorAll(".buy-upgrade-btn.affordable").forEach(t=>{t.addEventListener("click",()=>{const i=t.getAttribute("data-upgrade");i&&E.purchaseUpgrade(i)&&(h.playCoin(),this.render(),this.onUpgradePurchased())})}),(e=this.container.querySelector("#btn-close-upgrade"))==null||e.addEventListener("click",()=>{h.playClick(),this.container.innerHTML=""})}}class ze{constructor(e){u(this,"container");this.container=e}render(){const e=E.getStats(),t=[{id:"burger",title:"Klassik Chizburger",desc:"Yumshoq kunchutli non, suvli mol go'shti kotleti, erigan pishloq va yangi barra salat bargi.",icon:L.completeBurger,stars:3,sticker:"🍔 Zo'r!",price:"+$35"},{id:"hotdog",title:"Qarsildoq Hot-dog",desc:"Maxsus nonga qovurilgan go'shtli sosiska, barra salat va achchiq gorchitsa sousi bilan.",icon:L.completeHotdog,stars:3,sticker:"🌭 Yangi!",price:"+$28"},{id:"fries",title:"Oltinrang Fri Kartoshkasi",desc:"Yog'da qizarguncha qovurilgan xushxo'r fri kartoshkalari. Har bir mijozning sevimlisi.",icon:L.frenchFries,stars:3,sticker:"🍟 Qars-qurs",price:"+$15"},{id:"drink",title:"Muzdek Kola",desc:"Muz bo'lakchalari va naycha bilan to'ldirilgan tetiklashtiruvchi gazli ichimlik.",icon:L.coldDrink,stars:3,sticker:"🥤 Muzdek",price:"+$12"},{id:"pizza",title:"Pepperoni Pitsa",desc:"Yupqa xamir, boy pomidor sousi, cho'ziluvchan motsarella pishlog'i va achchiq sosiskalar.",icon:L.pizza,stars:e.highestLevelUnlocked>=3?3:1,sticker:e.highestLevelUnlocked>=3?"🍕 Italiya":"🔒 3-Darajada",price:"+$45"},{id:"nachos",title:"Meksika Nachoslari",desc:"Qarsildoq makkajo'xori chipsi 3 xil sous bilan: Guakamole, Salsa va issiq Pishloq.",icon:L.nachos,stars:e.highestLevelUnlocked>=4?3:1,sticker:e.highestLevelUnlocked>=4?"🌮 Meksika":"🔒 4-Darajada",price:"+$40"}];this.container.innerHTML=`
      <div class="cookbook-modal-overlay">
        <div class="cookbook-book-wrapper">
          <!-- Scrapbook Header with Pin Notes -->
          <div class="book-header-banner">
            <div class="washi-tape tape-left"></div>
            <div class="washi-tape tape-right"></div>
            <h1 class="book-title">📖 OSHXONA JANNATI: RETSEPTLAR ALBOMI</h1>
            <p class="book-subtitle">FOOD PARADISE WITH MANY TASTY DISHES!</p>
          </div>

          <!-- Scrapbook Grid with Polaroid Photos (Matching Image 5) -->
          <div class="polaroid-grid">
            ${t.map(i=>`
              <div class="polaroid-card">
                <div class="polaroid-pin">📌</div>
                <div class="polaroid-photo-frame">
                  <div class="dish-illustration">
                    ${i.icon}
                  </div>
                  <div class="photo-sticker">${i.sticker}</div>
                </div>

                <div class="polaroid-caption">
                  <div class="caption-title">${i.title}</div>
                  <div class="caption-stars">⭐⭐⭐</div>
                  <div class="caption-desc">${i.desc}</div>
                  <div class="caption-reward">Daromad: <span class="price-highlight">${i.price}</span></div>
                </div>
              </div>
            `).join("")}
          </div>

          <!-- Close button -->
          <div class="cookbook-footer">
            <button class="modal-close-btn" id="btn-close-cookbook">Albomni Yopish 📖</button>
          </div>
        </div>
      </div>
    `,this.attachEvents()}attachEvents(){var e;(e=this.container.querySelector("#btn-close-cookbook"))==null||e.addEventListener("click",()=>{h.playClick(),this.container.innerHTML=""})}}const He=document.querySelector("#app");He.innerHTML=`
  <div class="game-container" id="game-root">
    <!-- Top Header Bar -->
    <header id="game-header"></header>

    <!-- Counter Area: Restaurant Dining Hall Scenery + Customers Queue -->
    <div id="customer-area" class="restaurant-hall-bg">
      <div id="restaurant-scenery" class="restaurant-scenery-layer"></div>
      <div id="customer-slots-container"></div>
    </div>

    <!-- Kitchen Counter Area: Grill, Assembly Table, Fryer, Drinks -->
    <div id="kitchen-area" class="kitchen-counter-bg"></div>

    <!-- Modals & Overlays Container -->
    <div id="modal-area"></div>
  </div>
`;const Ve=document.querySelector("#game-header"),Ue=document.querySelector("#customer-slots-container"),We=document.querySelector("#kitchen-area"),I=document.querySelector("#modal-area"),Qe=document.querySelector("#restaurant-scenery");Qe.innerHTML=Ie;const K=new Ne({header:Ve,customerArea:Ue,kitchenArea:We,modalArea:I}),ae=new Fe(I,()=>{K.refreshTheme()}),oe=new ze(I);window.addEventListener("open-upgrades",()=>{ae.render()});window.addEventListener("open-cookbook",()=>{oe.render()});function je(){var e,t,i;const n=E.getStats();I.innerHTML=`
    <div class="welcome-modal-overlay">
      <div class="welcome-card">
        <div class="welcome-banner">
          <div class="chef-hat-badge">👨‍🍳</div>
          <h1>CHEF FEVER: OSHXONA JANNATI</h1>
          <p class="tagline">Xush kelibsiz! Mijozlarga mazali taomlar tayyorlang va oshxonangizni yulduz darajasiga olib chiqing!</p>
        </div>

        <!-- Level Selector Grid -->
        <div class="level-select-grid">
          ${N.map(s=>{const o=s.levelNumber<=n.highestLevelUnlocked,l=n.levelStars[s.levelNumber]||0;return`
              <div class="level-select-card ${o?"unlocked":"locked"}" data-lvl="${s.levelNumber}">
                <div class="level-num">${s.levelNumber}</div>
                <div class="level-stars-mini">
                  ${o?`
                    <span>${l>=1?"⭐":"☆"}</span>
                    <span>${l>=2?"⭐":"☆"}</span>
                    <span>${l>=3?"⭐":"☆"}</span>
                  `:"🔒"}
                </div>
                <div class="level-goal">$${s.targetScore}</div>
              </div>
            `}).join("")}
        </div>

        <!-- Action buttons -->
        <div class="welcome-actions">
          <button class="primary-play-btn" id="btn-start-game">
            🎮 1-DARAJANI BOSHLASH
          </button>
          <div class="welcome-sub-actions">
            <button class="secondary-btn" id="btn-open-shop">✨ Oshxona Yangilash (4-rasm)</button>
            <button class="secondary-btn" id="btn-open-book">📖 Retseptlar Albomi (5-rasm)</button>
          </div>
        </div>
      </div>
    </div>
  `,I.querySelectorAll(".level-select-card.unlocked").forEach(s=>{s.addEventListener("click",()=>{const o=parseInt(s.getAttribute("data-lvl")||"1",10);h.playClick(),I.innerHTML="",K.startLevel(o)})}),(e=I.querySelector("#btn-start-game"))==null||e.addEventListener("click",()=>{h.playServe(),I.innerHTML="",K.startLevel(1)}),(t=I.querySelector("#btn-open-shop"))==null||t.addEventListener("click",()=>{h.playClick(),ae.render()}),(i=I.querySelector("#btn-open-book"))==null||i.addEventListener("click",()=>{h.playClick(),oe.render()})}je();
