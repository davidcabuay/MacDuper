document.addEventListener("DOMContentLoaded",(()=>{const t=document.getElementById("game-canvas"),e=t.getContext("2d"),n=[{name:"screwdriver",txt:"I turn and twist, with a handle to grip, With screws I work to tighten or strip",img:"src/scripts/screwdriver.png",id:0},{name:"copper wire",txt:"I am thin, I am red, Electricity, I carry ahead",img:"src/scripts/copperwire.png",id:1},{name:"sharpie",txt:"I am used for art, or just to jot, A permanent marker is what I get called a lot!",img:"src/scripts/sharpie.png",id:2},{name:"paper clip",txt:"Papers and notes, I keep in line, A humble helper all the time",img:"src/scripts/paperclip.png",id:3},{name:"paper",txt:"I am usually white but now I am scruched tight, I am the canvas you write on at night",img:"src/scripts/paper.png",id:4},{name:"toothpaste",txt:"I come in a tube, and i foam and I squirt, I keep your teeth clean and remove the dirt",img:"src/scripts/toothpaste.png",id:5},{name:"toothbrush",txt:"With bristles firm and clean, I keep your teeth serene",img:"src/scripts/toothbrush.png",id:6},{name:"quarter",txt:"I am round and shiny with a picture or two, In wallets and purses you can find my crew",img:"src/scripts/coin.png",id:7},{name:"tide pod",txt:"I have many colors, but I am not to eat, I am used for the laundry to clean your sheets",img:"src/scripts/tidepod.png",id:8},{name:"pizza",txt:"With cheese, sause and dough, I am complete, A favorite food you can not wait to eat",img:"src/scripts/pizza.png",id:9},{name:"loose thread",txt:"I am thin and long and can be spun, With needle and cloth I would not be undone",img:"src/scripts/thread.png",id:10},{name:"hotdog",txt:"I am long in a bun and often called a glizzy, you can eat me on the go whenever you are busy",img:"src/scripts/hotdog.png",id:11},{name:"clothespin",txt:"I am small and wooden, with two arms and a spring, I clip clothes to the line and let the breeze make them swing ,",img:"src/scripts/clothespin.png",id:13},{name:"comb",txt:"I have teeth that are fine and sturdy, I comb your hair to make you look thirty",img:"src/scripts/comb.png",id:14},{name:"feather",txt:"From birds I come to keep them warm, I am used for writing and decoration and even to peform",img:"src/scripts/feather.png",id:15},{name:"fork",txt:"I have tines that are sharp and slick, With me you eat, no chopsticks",img:"src/scripts/fork.png",id:16},{name:"gum",txt:"I am chewy and sticky, and I fight halitosis, I freshen your breath for your awaited kiss",img:"src/scripts/gum.png",id:17},{name:"pills",txt:"I am small and oblong and filled with surprise, With medicine or vitamins, I protect you from demise ",img:"src/scripts/pills.png",id:18},{name:"rubberband",txt:"I am stretchy and strong, and come in a band, I hold things together, under your command ",img:"src/scripts/rubberband.png",id:19},{name:"scissors",txt:"I have two blades, that can be used for trimming, I cut paper or fabric, do not use me for killing",img:"src/scripts/scissors.png",id:20},{name:"scrunchie",txt:"I am soft and stretchy, and come in a knot, I keep your hair back, to hide your bald spot",img:"src/scripts/scrunchie.png",id:21},{name:"spoon",txt:"I have a bowl, and a handle so long, if you think I am a fork then you are wrong",img:"src/scripts/spoon.png",id:22},{name:"spring",txt:"I am coiled and tight and made of metal, with tension and force stronger than a boiling kettle",img:"src/scripts/spring.png",id:23},{name:"thermometer",txt:"I measure heat and come in many forms, Like oral or ear, I am here to inform",img:"src/scripts/thermometer.png",id:24},{name:"wrench",txt:"I am a tool, that loosens and tightens, with nuts and bolts, then and again ",img:"src/scripts/wrench.png",id:25},{name:"pen",txt:"I have a point, that writes on paper, with a blob of ink, you are my maker ",img:"src/scripts/pen.png",id:26},{name:"brush",txt:"I have bristles, straight  and in angles, with the knots in your hair, I can help you de-tangle",img:"src/scripts/brush.png",id:27}],i=new Audio;i.setAttribute("src","src/scripts/backmusic.mp3");const s=new Audio;s.setAttribute("src","src/scripts/test20.mp3");const r=new Audio;r.setAttribute("src","src/scripts/10good.mp3");const o=new Audio;o.setAttribute("src","src/scripts/15good.mp3");const a=new Audio;a.setAttribute("src","src/scripts/5good.mp3");const c=new Audio;c.setAttribute("src","src/scripts/explosion.mp3");const d=new Audio;d.setAttribute("src","src/scripts/victory.mp3"),d.volume=.2;const m=new Audio;m.setAttribute("src","src/scripts/noreal.mp3");const u=new Audio;u.setAttribute("src","src/scripts/congreal.mp3");const l=new Audio;l.setAttribute("src","src/scripts/MissImp.mp3"),l.volume=.1;const p=new Audio;p.setAttribute("src","src/scripts/nice.mp3");const g=new Audio;g.setAttribute("src","src/scripts/omgwedie.mp3");const h=new Audio;h.setAttribute("src","src/scripts/death.mp3");const y=document.getElementById("mute");y.addEventListener("click",(()=>{!1===i.muted&&!1===s.muted&&!1===o.muted&&!1===r.muted&&!1===a.muted&&!1===d.muted&&!1===c.muted&&!1===m.muted&&!1===l.muted&&!1===p.muted&&!1===g.muted&&!1===h.muted&&!1===u.muted?(i.muted=!0,s.muted=!0,o.muted=!0,r.muted=!0,a.muted=!0,d.muted=!0,c.muted=!0,m.muted=!0,u.muted=!0,l.muted=!0,p.muted=!0,h.muted=!0,g.muted=!0,y.innerHTML="Unmute"):(i.muted=!1,s.muted=!1,o.muted=!1,r.muted=!1,a.muted=!1,d.muted=!1,c.muted=!1,m.muted=!1,u.muted=!1,l.muted=!1,p.muted=!1,h.muted=!1,g.muted=!1,y.innerHTML="Mute")}));const I=document.getElementById("reflist"),b=(document.getElementById("items"),document.getElementById("initialize")),f=document.querySelector("#homebutton"),w=document.querySelector("#losebutton"),k=[],x=[],A=n.sort((()=>Math.random()-.5)),v=[],E=function(){const e=t.offsetHeight-50,n=t.offsetWidth-50,i=Math.floor(Math.random()*n),s=Math.floor(Math.random()*e),r=[i,s];return console.log(e),console.log(n),console.log(r),v.some((t=>t[0]<i+50&&t[0]+50>i&&t[1]<s+50&&t[1]+50>s))?E():(v.push(r),r)};function L(t,e){const n=function(t){let e;return k.forEach((n=>{let i=n.getAttribute("data-id");console.log(i+" list ID"),console.log(t+" parameter id"),parseInt(i)===parseInt(t)&&(console.log("listID === parameter id"),e=n)})),console.log(e),e}(t);if(void 0!==n){p.play();const t=n;console.log(t),t.className="found",x.push(t)}else m.play(),limit-=2}const M=document.getElementById("losepage"),B=document.getElementById("winpage");f.addEventListener("click",(function(){return window.location.reload(),!1})),w.addEventListener("click",(function(){return window.location.reload(),!1})),b.addEventListener("click",(function m(){z.setAttribute("hidden",!0),document.body.style.backgroundImage="url('src/scripts/background.png')",T.removeAttribute("hidden"),i.play(),function(){for(let t=0;t<3;t++){const e=document.createElement("li");e.setAttribute("class","listed"),e.setAttribute("data-id",A[t].id),e.innerHTML=A[t].txt,k.push(e),I.append(e)}}(),setTimeout((()=>{!function(t){limit=20,s.play();const e=setInterval((function(){document.getElementById("timer").innerHTML=limit,limit--,14===limit&&o.play(),9===limit&&r.play(),4===limit&&a.play(),1===limit&&g.play(),x.length===k.length?(clearInterval(e),B.style.display="flex",d.play(),document.getElementById("timer").innerHTML="GG",setTimeout((()=>{u.play()}),1e3)):limit<0&&(clearInterval(e),M.style.display="flex",c.play(),document.getElementById("timer").innerHTML="GG",setTimeout((()=>{h.play()}),1e3))}),1e3)}(),i.pause(),l.play()}),2e3),function(){for(let i=0;i<n.length;i++){const s=new Image,r=E();s.src=n[i].img,s.addEventListener("load",(function(){e.drawImage(s,r[0],r[1],50,50),t.addEventListener("click",(function(e){const s=t.getBoundingClientRect(),o=Math.floor(s.top),a=Math.floor(s.left);if(e.x-a>=r[0]&&e.x-a<=r[0]+50&&e.y-o>=r[1]&&e.y-o<=r[1]+50){const t=n[i].id;console.log(t),L(t,n[i])}}))}))}}(),b.removeEventListener("click",m)}));const T=document.getElementById("gamepage"),z=document.getElementById("startpage")}));
//# sourceMappingURL=main.js.map