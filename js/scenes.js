/* scenes.js */
let cur = 0;
const S = document.querySelectorAll(".scene");
const H = {};

function go(i) {
    const v = document.querySelector("#veil");
    if (v) {
        v.classList.remove("go");
        void v.offsetWidth; // Trigger reflow
        v.classList.add("go");
    }
    
    if (S && S.length > i) {
        S.forEach((s, k) => s.classList.toggle("on", k === i));
        cur = i;
        S[i].scrollTop = 0;
        
        // ADD THIS: Update the URL hash to the current scene number
        history.replaceState(null, null, "#" + i);
        
        if (H[i]) H[i](S[i]);
    }
}

H[1] = (s) => {
    s.classList.remove("done");
    const e1 = document.querySelector("#e1");
    if (e1) e1.classList.remove("open");
};

H[2] = (s) => s.classList.remove("lit");

H[3] = () => {
    const cw = document.querySelector("#cw");
    const t3a = document.querySelector("#t3a");
    const t3b = document.querySelector("#t3b");
    if (cw) cw.classList.remove("cut");
    if (t3a) t3a.style.display = "";
    if (t3b) t3b.classList.remove("show");
};

H[4] = () => {
    const w1 = document.querySelector("#w1");
    const w2 = document.querySelector("#w2");
    const b4 = document.querySelector("#b4");
    const b4n = document.querySelector("#b4n");
    const hrt = document.querySelector("#hrt");
    const ss = document.querySelector("#ss");
    
    if (w1) w1.textContent = "Close your eyes… ✨";
    if (w2) w2.textContent = "Make a little wish for the year ahead.";
    if (b4) b4.style.display = "";
    if (b4n) b4n.style.display = "none";
    if (hrt) hrt.innerHTML = "";
    
    setTimeout(() => {
        if (ss) {
            ss.classList.remove("go");
            void ss.offsetWidth;
            ss.classList.add("go");
        }
    }, 900);
};

H[6] = (s) => {
    s.classList.remove("done");
    const e6 = document.querySelector("#e6");
    if (e6) e6.classList.remove("open");
};

H[7] = () => {
    document.querySelectorAll(".rc").forEach((c) => c.classList.remove("f"));
};

H[8] = (s) => {
    const gw = document.querySelector("#gw");
    const gm = document.querySelector("#gm");
    const gh = document.querySelector("#gh");
    const gf = document.querySelector("#gf");
    
    if (gw) gw.classList.remove("gopen");
    if (gm) gm.classList.remove("show");
    if (gh) gh.style.display = "";
    if (gf) gf.classList.remove("shake");
};

H[9] = () => {
    if (typeof confetti === "function") confetti(110);
    if (typeof rise === "function") rise(14);
    if (typeof sfx === "function") sfx("gift");
};

function openEnv(id, sc) {
    const e = document.querySelector("#" + id);
    if (!e || e.classList.contains("open")) return;
    
    e.classList.add("open");
    if (typeof sfx === "function") sfx("open");
    
    const r = e.getBoundingClientRect();
    if (typeof burst === "function") burst(r.left + r.width / 2, r.top + 10, "💗✨🌸", 14);
    
    setTimeout(() => {
        if (S && S[sc]) S[sc].classList.add("done");
        if (typeof confetti === "function") confetti(40);
        if (sc == 6 && typeof lt === "function") lt();
    }, 1500);
}

function lt() {
    const ltEl = document.querySelector("#lt");
    if (ltEl && typeof CFG !== "undefined") {
        ltEl.innerHTML =
            CFG.letter.map((t, i) => `<p style="animation-delay:${0.5 + (i * 0.4)}s">${m(t)}</p>`).join("") +
`<p class="sig" style="animation-delay:${0.5 + (CFG.letter.length * 0.7)}s">${CFG.sign}</p>`;
    }
}

// Handle all Scene Button clicks safely via Event Delegation
document.addEventListener("click", (e) => {
    if (e.target.closest("#b0")) {
        e.preventDefault();
        e.stopPropagation();
        if (typeof sfx === "function") sfx("open");
        if (typeof confetti === "function") confetti(50);
        setTimeout(() => go(2), 250);
    }
    
    if (e.target.closest("#b1") || e.target.closest("#e1")) openEnv("e1", 1);
    if (e.target.closest("#b1n")) go(2);
    
    if (e.target.closest("#b2")) {
        e.target.closest("#b2").style.display = "none";
        
        document.querySelectorAll("#s2 p").forEach(p => p.style.display = "none");
        
        const s = S[2];
        if (s) s.classList.add("lit");
        if (typeof sfx === "function") sfx("light");
        const d1 = document.querySelector("#d1");
        if (d1) d1.textContent = "Surprise! ✨";
        document.querySelectorAll("#s2 .ted").forEach((t) => t.classList.add("dance"));
        setTimeout(() => { if (typeof confetti === "function") confetti(90); }, 1400);
        if (typeof rise === "function") rise(8);
        setTimeout(() => {
            document.querySelectorAll("#s2 .ted").forEach((t) => t.classList.remove("dance"));
            go(3);
        }, 4200);
    }

    if (e.target.closest("#b3")) {
        const cw = document.querySelector("#cw");
        if (!cw || cw.classList.contains("cut")) return;
        cw.classList.add("cut");
        if (typeof sfx === "function") sfx("cut");
        const t3a = document.querySelector("#t3a");
        if (t3a) t3a.style.display = "none";
        setTimeout(() => {
            if (typeof confetti === "function") confetti(110);
            if (typeof rise === "function") rise(10);
            document.querySelectorAll("#s3 .ted").forEach((t) => {
                t.classList.add("dance");
                setTimeout(() => t.classList.remove("dance"), 4500);
            });
            const t3b = document.querySelector("#t3b");
            if (t3b) t3b.classList.add("show");
        }, 1000);
    }

    if (e.target.closest("#b3n")) {
        if (typeof sfx === "function") sfx("tap");
        go(4);
    }

    if (e.target.closest("#b4")) {
        const b4 = document.querySelector("#b4");
        if (b4) b4.style.display = "none";
        const w1 = document.querySelector("#w1");
        const w2 = document.querySelector("#w2");
        if (w1) w1.textContent = "Your wish is on its way ✨";
        if (w2) w2.textContent = "Somewhere up there, the stars are listening.";
        
        const ss = document.querySelector("#ss");
        if (ss) {
            ss.classList.remove("go");
            void ss.offsetWidth;
            ss.classList.add("go");
        }
        if (typeof sfx === "function") sfx("wish");
        
        let h = "";
        for (let i = 0; i < 40; i++) {
            const t = (i / 40) * 6.283,
                x = 16 * Math.pow(Math.sin(t), 3),
                y = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t);
            
            // THIS LINE IS NOW FIXED. DO NOT BREAK IT ACROSS MULTIPLE LINES.
            h += `<i style="left:${50 + (x * 2.7)}%;top:${46 - (y * 2.7)}%;font-size:${10 + (Math.random() * 8)}px;animation-delay:${1.8 + (i * 0.07)}s,${1.8 + (i * 0.07)}s">✦</i>`;
        }
        const hrt = document.querySelector("#hrt");
        if (hrt) hrt.innerHTML = h;
        setTimeout(() => {
            const b4n = document.querySelector("#b4n");
            if (b4n) b4n.style.display = "";
        }, 4800);
    }

    if (e.target.closest("#b4n")) go(5);
});