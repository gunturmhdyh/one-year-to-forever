// =========================================
// LOVE LETTER / ANNIVERSARY WEBSITE
// =========================================

// =========================================
// LOGIKA ELEMEN MELAYANG
// =========================================
const bg = document.getElementById('floating-bg');

const images = [
  'little-bubu/bubu1.jpeg',
  'little-bubu/gua1.jpeg',
  'little-bubu/bubu2.jpeg',
  'little-bubu/gua2.jpeg',
  'little-bubu/bubu3.jpeg',
  'little-bubu/gua3.jpeg'
];

for (let i = 0; i < 15; i++) {
  const floatEl = document.createElement('div');
  floatEl.classList.add('float');

  const img = document.createElement('img');

  img.src = images[Math.floor(Math.random() * images.length)];
  img.alt = 'floating decoration';

  img.style.width = '100%';
  img.style.height = '100%';
  img.style.objectFit = 'contain';

  floatEl.appendChild(img);

  const size = (Math.random() * 90 + 60); // 30px - 70px

  floatEl.style.width = size + 'px';
  floatEl.style.height = size + 'px';

  floatEl.style.left = Math.random() * 100 + '%';

  floatEl.style.animationDuration =
    (Math.random() * 12 + 8) + 's';

  floatEl.style.animationDelay =
    (Math.random() * 8) + 's';

  bg.appendChild(floatEl);
}

// =========================================
// DETEKSI SAAT LOVE LETTER TERLIHAT
// =========================================

const letterSection = document.getElementById('letter');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        document.body.classList.add('letter-active');
      } else {
        document.body.classList.remove('letter-active');
      }
    });
  },
  {
    threshold: 0.15
  }
);

observer.observe(letterSection);

// =========================================
// OPTIONAL: EFEK CLICK PADA ARROW
// =========================================

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    const targetId = link.getAttribute('href');
    const target = document.querySelector(targetId);

    if (!target) return;

    event.preventDefault();

    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});
const bgMusic = document.getElementById("bgMusic");
const musicToggle = document.getElementById("musicToggle");

let isPlaying = false;

musicToggle.addEventListener("click", () => {
  if (isPlaying) {
    bgMusic.pause();
    musicToggle.textContent = "♫";
    musicToggle.classList.remove("playing");
  } else {
    bgMusic.play()
      .then(() => {
        musicToggle.textContent = "❚❚";
        musicToggle.classList.add("playing");
      })
      .catch(() => {
        console.log("Music playback was blocked by the browser.");
      });
  }

  isPlaying = !isPlaying;
});