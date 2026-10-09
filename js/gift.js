/* gift.js */
         $("#gf").onclick = () => {
            const w = $("#gw");
            if (w.classList.contains("gopen")) return;
            const g = $("#gf");
            g.classList.add("shake");
            $("#gh").style.display = "none";
            setTimeout(() => {
               w.classList.add("gopen");
               sfx("gift");
               confetti(120);
               const r = w.getBoundingClientRect();
               burst(r.left + r.width / 2, r.top + 100, "✨⭐💗🎀", 24);
               rise(8);
               setTimeout(() => $("#gm").classList.add("show"), 1300);
            }, 650);
         };
         $("#b8n").onclick = () => go(9);
         $("#b9").onclick = () => go(0);
