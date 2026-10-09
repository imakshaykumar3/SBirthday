/* gallery.js */

const ph = (i) =>
  `<div class="ph" style="--ar:${["4/5", "1/1", "3/4", "5/6"][i % 4]}">
    🧸<small>photo ${i + 1}</small>
  </div>`;

window.ph = ph;

const io = new IntersectionObserver(
  (entries) =>
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
      }
    }),
  { threshold: 0.12 }
);

const obs = () => {
  const items = document.querySelectorAll(".rv:not(.in)");

  if (items.length) {
    items.forEach((el) => io.observe(el));
  }
};

function gal() {
  const galEl = document.querySelector("#gal");

  if (
    galEl &&
    typeof CFG !== "undefined" &&
    CFG.photos
  ) {
    galEl.innerHTML = CFG.photos
      .map(
        (p, i) =>
          `<figure class="pl rv" data-i="${i}" style="--r:${(((i * 37) % 9) - 4) * 0.9}deg">
            <i class="tp"></i>

            ${
              p.src
                ? `<img
                    loading="lazy"
                    src="${p.src}"
                    alt=""
                    style="object-position:${p.pos || "center"}"
                    onerror="this.outerHTML=ph(${i})"
                  >`
                : ph(i)
            }

            <figcaption>
              ${m(p.cap)}
              ${
                p.date
                  ? `<small style="display:block;font-size:.9rem;opacity:.6">${p.date}</small>`
                  : ""
              }
            </figcaption>

            <span class="stk">${["💗", "⭐", "🎀", "🌸", "✨"][i % 5]}</span>
          </figure>`
      )
      .join("");

    obs();
  }
}

// Initialize gallery safely
try {
  gal();
} catch (err) {
  console.error("Gallery Init Error:", err);
}

// Failsafe Event Delegation for buttons & uploads
document.addEventListener("click", (e) => {
  // Safely handle the "Open the letter" button click
  if (e.target.closest("#b5n")) {
    if (typeof go === "function") {
      go(6);
    } else {
      console.error(
        "Error: go() function from scenes.js is not loaded."
      );
    }
  }
});

document.addEventListener("change", (e) => {
  if (e.target.closest("#up")) {
    if (
      typeof CFG === "undefined" ||
      !Array.isArray(CFG.photos)
    ) {
      console.error("CFG.photos is not initialized.");
      return;
    }

    if (!e.target.files) return;

    [...e.target.files].forEach((f) => {
      CFG.photos.push({
        src: URL.createObjectURL(f),
        cap: "A new memory 💗",
        date: "",
        memory: "",
      });
    });

    gal();
  }
});