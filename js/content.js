/* content.js */

if ($("#e6")) {
    $("#e6").onclick = () => openEnv("e6", 6);
}

if ($("#b6n")) {
    $("#b6n").onclick = () => go(7);
}

// FIX: Safely check if #mcs exists before updating (prevents script crash)
if ($("#mcs")) {
    $("#mcs").innerHTML = CFG.modelCards
        .map((c, i) => `<div class="mc rv" style="--r:${i % 2 ? 2 : -2}deg">${c[0]} ${m(c[1])}</div>`)
        .join("");
}

// FIX: Safely check if #mcc exists before updating
if ($("#mcc")) {
    $("#mcc").innerHTML = m(CFG.conclusion);
}

// FIX: Attach the flip events safely
if ($("#rg")) {
    // Regenerate the cards dynamically based on config
    $("#rg").innerHTML = CFG.reasons
        .map((r, i) => `<div class="rc"><div><div class="fc">💗<br>${i + 1}</div><div class="bc">${m(r)}</div></div></div>`)
        .join("");

    // Click listener for flipping
    $("#rg").onclick = (e) => {
        const c = e.target.closest(".rc");
        if (!c || c.classList.contains("f")) return;
        
        c.classList.add("f");
        if (typeof sfx === 'function') sfx("flip");
        
        const r = c.getBoundingClientRect();
        if (typeof burst === 'function') burst(r.left + r.width / 2, r.top + r.height / 2, "💗✨", 8);
        
        // Check if all cards are flipped
        if (document.querySelectorAll(".rc.f").length == CFG.reasons.length) {
            if (typeof confetti === 'function') confetti(80);
            if (typeof toast === 'function') toast("All unlocked 💗 you really are that great");
        }
    };
}

// Initialize gallery observer
if (typeof obs === 'function') {
    obs();
}

if ($("#b7n")) {
    $("#b7n").onclick = () => go(8);
}