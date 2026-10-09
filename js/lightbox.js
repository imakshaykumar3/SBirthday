/* lightbox.js */
         let li = 0;
         const lb = $("#lb");
         function lbs(i) {
            li = (i + CFG.photos.length) % CFG.photos.length;
            const p = CFG.photos[li];
            const c = $("#lbc");
            c.style.animation = "none";
            void c.offsetWidth;
            c.style.animation = "";
            c.innerHTML = p.src ? `<img src="${p.src}" alt="">` : ph(li);
            $("#lbt").innerHTML = m(p.cap) + (p.date ? ` · ${p.date}` : "");
            $("#lbm").textContent = p.memory || "";
            burst(innerWidth / 2, innerHeight / 2, "💗✨", 12);
         }
         $("#gal").onclick = (e) => {
            const f = e.target.closest(".pl");
            if (f) {
               lb.classList.add("on");
               lbs(+f.dataset.i);
               sfx("tap");
            }
         };
         $("#lbx").onclick = () => lb.classList.remove("on");
         $("#lbp").onclick = () => lbs(li - 1);
         $("#lbn").onclick = () => lbs(li + 1);
         addEventListener("keydown", (e) => {
            if (!lb.classList.contains("on")) return;
            if (e.key === "ArrowRight") lbs(li + 1);
            if (e.key === "ArrowLeft") lbs(li - 1);
            if (e.key === "Escape") lb.classList.remove("on");
         });
         let tx = 0;
         lb.addEventListener("touchstart", (e) => (tx = e.touches[0].clientX), {
            passive: true,
         });
         lb.addEventListener("touchend", (e) => {
            const d = e.changedTouches[0].clientX - tx;
            if (Math.abs(d) > 50) lbs(li + (d < 0 ? 1 : -1));
         });
