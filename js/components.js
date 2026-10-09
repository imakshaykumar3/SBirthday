/* component.js */ 
const N = CFG.name, K = CFG.nick, $= (s) => document.querySelector(s),$$ = (s) => [...document.querySelectorAll(s)], R = Math.random; 
const m = (s) => String(s).replace(/\n/g, "<br />") .split(K) .join('<b class="m">' + K + "</b>"); 
const T = () => `<img class="ted" src="${IMG.ted}" alt="" />`; 
const cake = () =>
   `<div class="cake">

      <!-- Cut cake image: increased width to make it larger -->
      <div class="cake-photo" style="margin-top: 95px; width: 85%; max-width: 300px;">
         <img
            src="${IMG.cutCake}"
            alt="Cut Cake"
         />
      </div>

      <!-- Original cake -->
      <img
         class="cb"
         src="${IMG.cake}"
         alt="Birthday Cake"
      />

      <img
         class="sl"
         src="${IMG.cake}"
         alt="Birthday Cake"
      />

      <!-- Cake details -->
      <i class="cdl" style="left:57%"></i>
      <i class="cdl" style="left:60.5%; top:27%"></i>
      <i class="cdl" style="left:64%"></i>

   </div>`;
const env = (id) => `
<div class="env x" id="${id}">
   <div class="bk"></div>
   <div class="ct">💌</div>
   <div class="fr"></div>
   <div class="fp"></div>
   <div class="seal">💗</div>
   <i class="f1">🌸</i><i class="f2">✨</i>
</div>
`; const nx = (id, t, sc) => `<button class="btn" id="${id}">${t}</button>`;
$("#app").innerHTML = `
<section class="scene" id="s0" data-st data-bl>
   <div class="w opening-wrap">
      <img
         class="hbd-title a"
         style="--d: 1s"
         src="${IMG.hbd}"
         alt="Happy Birthday"
      />
      // <img
      //    class="sneh-title a"
      //    style="--d: 1.45s"
      //    src="${IMG.sneh}"
      //    alt="Sneh"
      // />
      <button class="btn a" style="--d: 2.15s" id="b0">
         OPEN YOUR SURPRISE ✨
      </button>
   </div>
   <i class="sx" data-m="0" style="top: 20%; right: 10%">⭐</i>
   <div class="tb">${T()}</div>
</section>
<section class="scene" id="s1" data-st>
   <div class="w">
      <p class="hw x">A little birthday surprise…</p>
      <p class="sub x">
         For the girl who is somehow both chaos and perfection.
      </p>
      ${env("e1")}<button class="btn x" id="b1">Open it 💌</button>
      <div class="rev">
         <div class="glass">${m(CFG.envMsg)}</div>
         <button class="btn" id="b1n">Next ✨</button>
      </div>
   </div>
   <div class="pk">${T()}</div>
</section>
<section class="scene dk" id="s2" data-st data-bl>
   <div class="warm"></div>
   <div class="rays"></div>
   <div class="w">
      <h2 class="sc dt" style="color: #fff" id="d1">Buddhu...</h2>
      <p class="hw dt" style="color: #fff">The room is waiting for you.</p>
      <p class="sub dt" style="color: #fff">
         Someone left the lights off on purpose…
      </p>
      <button class="btn" id="b2">Turn on the lights ✨</button>
   </div>
   <b class="zz">z Z z</b>
   <div class="tb">${T()}</div>
</section>
<section class="scene" id="s3" data-st data-bl>
   <div class="w">

      <img
         class="hbd-cake-title"
         src="${IMG.hbdCake}"
         alt="Happy Birthday Sneh"
      />

      <div class="cw" id="cw">
         ${cake()}
         <span class="kn">🔪</span>
      </div>

      <div id="t3a">
         <button class="btn" id="b3">
            Swipe down to cut the cake 🎂
         </button>
      </div>

      <div class="rev2" id="t3b" style="margin-top: -100px;">
         <h2 class="sc">You did it! 🎉</h2>
         <button class="btn" id="b3n">
            Make a Wish ✨
         </button>
      </div>

   </div>

   <i class="sx" data-m="1" style="top: 24%; left: 8%">⭐</i>
   <div class="tb l">${T()}</div>
</section>
<section class="scene" id="s4" data-st>
   <div class="w">
      <h2 class="sc" id="w1">Close your eyes… ✨</h2>
      <p class="sub" id="w2">Make a little wish for the year ahead.</p>
      <div class="cw sm">${cake()}</div>
      <button class="btn" id="b4">I made my wish 💗</button
      ><button class="btn" id="b4n" style="display: none">
         Memories 📸
      </button>
   </div>
   <div class="ss" id="ss"></div>
   <div class="hrt" id="hrt"></div>
   <div class="tb r">${T()}</div>
</section>
<section class="scene" id="s5" data-st>
   <div class="w wide">
      <p class="hw">Memories with</p>
      <h2 class="sc" style="margin-top: -10px">${N}</h2>
      <p class="sub">tap any polaroid ✨</p>
      <div id="gal"></div>
      <button class="btn" id="b5n">Open the letter 💌</button>
   </div>
   <div class="pk">${T()}</div>
</section>
<section class="scene" id="s6" data-st>
   <div class="w">
      <h2 class="sc x">A little something for her 💌</h2>
      ${env("e6")}
      <p class="hw x">Tap the envelope to open it.</p>
      <div class="rev">
         <div class="paper" id="lt"></div>
         <button class="btn" id="b6n">Keep going ✨</button>
      </div>
   </div>
   <div class="pk">${T()}</div>
</section>
<section class="scene" id="s7" data-st>
   <div class="w">
      <h2 class="sf" style="margin-top: 30px">
         10 tiny reasons you're one of my favorite people 💗
      </h2>
      <p class="sub">tap each card</p>
      
      <div class="rg" id="rg">
         ${CFG.reasons.map((r, i) => `
            <div class="rc">
               <div>
                  <div class="fc">💗<br>${i + 1}</div>
                  <div class="bc">${m(r)}</div>
               </div>
            </div>
         `).join("")}
      </div>

      <button class="btn" id="b7n" style="margin-top: 14px">
         One last thing… 🎁
      </button>
   </div>
   <i class="sx" data-m="2" style="top: 30%; right: 6%">⭐</i>
   <div class="pk">${T()}</div>
</section>
<section class="scene" id="s8" data-st>
   <div class="w">
      <h2 class="sc">One last thing… 🎁</h2>
      <p class="sub">
         Because obviously, I couldn't end this without one more surprise.
      </p>
      <div class="gw" id="gw">
         <div class="gl"></div>
         <div class="tw2">${T()}</div>
         <div class="gift" id="gf">
            <div class="bx"></div>
            <div class="lid"><i class="bow"></i></div>
         </div>
      </div>
      <p class="hw" id="gh">Tap the gift.</p>
      <div id="gm">
         <div class="gift-text">
            <h2 class="sc" style="font-size: clamp(2.5rem, 10vw, 4.2rem); line-height: 1.2; margin: 0; text-align: center;">
               Good Night<br>Byeee
            </h2>
            <div style="font-size: 2.8rem; margin-top: 5px; text-align: center;">😑</div>
         </div>
         
         <button class="btn" id="b8n" style="margin-top: 20px;">Finish the surprise 💗</button>
      </div>
   </div>
</section>
<section class="scene" id="s9" data-st data-bl>
   <div class="w">
      <!-- Main heading replaced with images -->
      <img
         class="hbd-title a"
         style="--d: 0.2s; margin-top: 8px; height: auto;" 
         src="${IMG.hbd2}"
         alt="Happy Birthday"
      />
      <img
         class="sneh-title a"
         style="--d: 0.6s; margin-top: -15px;" 
         src="${IMG.sneh2}"
         alt="Sneh"
      />
      
      <!-- Subtitle/Finale text -->
      <p class="hw a" style="--d: 1s; margin-top: 5px;">${CFG.finale}</p>
      
      <!-- Centered Teddy Bear (Cake removed) -->
      <div style="margin: 20px 0; width: min(40vw, 180px);">
         ${T()}
      </div>
      
      <p class="sub">${CFG.madeWith}</p>
      <button class="btn" id="b9">Replay the Surprise ↻</button>
   </div>
</section>
`;