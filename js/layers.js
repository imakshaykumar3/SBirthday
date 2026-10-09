const BC = ["#ff9cc4", "#ffc9a8", "#cdb8ff", "#fff1e0", "#ffd36b"];
$$(".scene").forEach((s) => {
    const l = document.createElement("div");
    l.className = "lay";
    let h = "";
    
    if ("st" in s.dataset) {
        for (let i = 0; i < 34; i++) {
            h += `<i class="star" style="left:${R() * 100}%;top:${R() * 100}%;--z:${1 + R() * 2};--d:${2 + R() * 4}s">✦</i>`;
        }
    }
    
    for (let i = 0; i < 7; i++) {
        h += `<i class="fh" style="left:${R() * 96}%;font-size:${14 + R() * 16}px;animation-duration:${14 + R() * 14}s;animation-delay:-${R() * 20}s">💗</i>`;
    }
    
    if ("bl" in s.dataset) {
        [
            [2, 12, 64],
            [13, 30, 78],
            [78, 16, 70],
            [88, 34, 58],
            [66, 6, 50],
        ].forEach(([x, b, z], i) => {
            h += `<div class="bl" style="left:${x}%;bottom:${b}%;--s:${z};--c:${BC[i]};animation-delay:-${i}s"></div>`;
        });
        
        for (let i = 0; i < 16; i++) {
            h += `<i class="fy" style="left:${(i / 15) * 98}%;top:${10 + Math.abs(Math.sin(i * 0.7)) * 22}px;--c:${BC[i % 5]};animation-delay:-${i * 0.3}s"></i>`;
        }
    }
    
    l.innerHTML = h;
    s.prepend(l);
});