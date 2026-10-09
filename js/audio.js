/* audio */
         let AC,
            snd = 0,
            mi,
            ma;
         const tn = (f, d = 0.2, t = 0, v = 0.07, ty = "sine") => {
            if (!snd || !AC) return;
            const o = AC.createOscillator(),
               g = AC.createGain(),
               s = AC.currentTime + t;
            o.type = ty;
            o.frequency.value = f;
            g.gain.setValueAtTime(0, s);
            g.gain.linearRampToValueAtTime(v, s + 0.01);
            g.gain.exponentialRampToValueAtTime(0.0001, s + d);
            o.connect(g);
            g.connect(AC.destination);
            o.start(s);
            o.stop(s + d + 0.05);
         };
         const SF = {
            tap: [[880, 0.1]],
            open: [
               [523, 0.2, 0],
               [659, 0.2, 0.12],
               [784, 0.5, 0.24],
            ],
            light: [
               [392, 0.4, 0],
               [523, 0.4, 0.15],
               [659, 0.4, 0.3],
               [988, 0.9, 0.45],
            ],
            cut: [
               [300, 0.1, 0, 0.1, "triangle"],
               [180, 0.3, 0.1, 0.1, "triangle"],
               [784, 0.4, 0.5],
               [988, 0.5, 0.65],
            ],
            wish: [
               [1047, 0.5, 0],
               [1319, 0.5, 0.15],
               [1568, 0.9, 0.3],
            ],
            gift: [
               [523, 0.3, 0],
               [659, 0.3, 0.1],
               [784, 0.3, 0.2],
               [1047, 0.8, 0.3],
               [1319, 0.9, 0.45],
            ],
            flip: [
               [700, 0.12, 0, 0.05],
               [900, 0.12, 0.06, 0.05],
            ],
         };
         const sfx = (t) => (SF[t] || []).forEach((a) => tn(...a));
         const mel = [
            523, 659, 784, 659, 587, 698, 880, 698, 523, 659, 784, 1047, 988,
            784, 659, 587,
         ];
         let mk = 0;
         $("#mub").onclick = () => {
            if (!AC)
               AC = new (window.AudioContext || window.webkitAudioContext)();
            AC.resume();
            snd = !snd;
            $("#mub").textContent = snd ? "♪ On" : "♪ Music";
            if (CFG.music) {
               if (!ma) {
                  ma = new Audio(CFG.music);
                  ma.loop = true;
               }
               snd ? ma.play() : ma.pause();
            } else {
               clearInterval(mi);
               if (snd)
                  mi = setInterval(() => {
                     tn(mel[mk++ % 16], 1.1, 0, 0.045);
                     if (mk % 2 == 0) tn(mel[(mk + 3) % 16] / 2, 1.4, 0, 0.03);
                  }, 460);
            }
            sfx("tap");
         };
