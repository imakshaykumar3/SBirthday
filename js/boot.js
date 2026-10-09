/* loader */
         $("#ldt").innerHTML = T();
         $("#ldp").textContent = `Preparing something special for ${N}… 🎀`;
         const lh = setInterval(
            () =>
               burst(
                  innerWidth / 2 + (R() - 0.5) * 120,
                  innerHeight / 2 + 60,
                  "💗",
                  1,
               ),
            300,
         );
         setTimeout(() => {
            clearInterval(lh);
            $("#ld").classList.add("off");
            $("#mu").style.display = "block";
            go(0);
         }, 2700);
