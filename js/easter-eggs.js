/* easter-eggs.js */
         let tc = 0;
         document.addEventListener("click", (e) => {
            const t = e.target;
            if (t.closest(".ted")) {
               const d = t.closest(".tb,.pk,.tw2,div");
               if (++tc >= 3) {
                  tc = 0;
                  $$(".ted").forEach((x) => {
                     x.classList.add("dance");
                     setTimeout(() => x.classList.remove("dance"), 4500);
                  });
                  confetti(30);
                  toast("Teddy is dancing for you 🧸💃");
               }
               burst(e.clientX, e.clientY, "💗🧸", 7);
               return;
            }
            if (t.closest(".fh")) {
               burst(e.clientX, e.clientY, "💗💖💗✨", 26);
               t.closest(".fh").remove();
               return;
            }
            if (t.closest(".sx")) {
               toast(CFG.secrets[+t.dataset.m] || CFG.secrets[0]);
               burst(e.clientX, e.clientY, "⭐✨", 12);
               return;
            }
            if (t.closest(".m")) {
               burst(e.clientX, e.clientY, "👑✨💗", 18);
               toast(K + " detected 👑 status: confirmed");
               sfx("flip");
               return;
            }
            if (t.closest("button,.env,.pl,.rc"))
               burst(e.clientX, e.clientY, "💗✨", 5);
            if (t.closest("button")) sfx("tap");
         });
         let lt2 = 0;
         addEventListener("pointermove", (e) => {
            const d = document.documentElement.style;
            d.setProperty("--mx", (e.clientX / innerWidth - 0.5) * 2);
            d.setProperty("--my", (e.clientY / innerHeight - 0.5) * 2);
            if (e.pointerType === "mouse" && e.timeStamp - lt2 > 110) {
               lt2 = e.timeStamp;
               burst(e.clientX, e.clientY, "✦", 1);
            }
         });
