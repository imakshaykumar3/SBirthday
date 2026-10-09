const fx = $("#fx"),
    CC = ["#ff6fae", "#ffd166", "#c8b4ff", "#fff", "#ffb3d1", "#ffc9a8"];

function confetti(n = 80) {
    for (let i = 0; i < n; i++) {
        const e = document.createElement("i");
        e.className = "cf";
        e.style.cssText = `left:${R() * 100}vw;background:${CC[i % 6]};--x:${(R() - 0.5) * 220}px;--r:${R() * 720}deg;animation-duration:${2.6 + R() * 2}s;animation-delay:${R() * 0.5}s;width:${6 + R() * 6}px;height:${10 + R() * 8}px`;
        fx.appendChild(e);
        setTimeout(() => e.remove(), 5400);
    }
}

function burst(x, y, s = "💗✨", n = 8) {
    const a = [...s];
    for (let i = 0; i < n; i++) {
        const e = document.createElement("b");
        e.className = "bt";
        e.textContent = a[i % a.length];
        const g = R() * 6.28,
            d = 40 + R() * 70;
        e.style.cssText = `left:${x}px;top:${y}px;--dx:${Math.cos(g) * d}px;--dy:${(Math.sin(g) * d) - 30}px;font-size:${12 + R() * 14}px`;
        fx.appendChild(e);
        setTimeout(() => e.remove(), 1300);
    }
}

function rise(n = 10) {
    for (let i = 0; i < n; i++) {
        const e = document.createElement("div");
        e.className = "bl up";
        e.style.cssText = `left:${R() * 92}vw;bottom:-130px;--s:${44 + R() * 30};--c:${BC[i % 5]};animation-delay:${R() * 1.2}s`;
        fx.appendChild(e);
        setTimeout(() => e.remove(), 9000);
    }
}

let tt;
function toast(t) {
    const e = $("#ts");
    e.textContent = t;
    e.classList.add("on");
    clearTimeout(tt);
    tt = setTimeout(() => e.classList.remove("on"), 2800);
}