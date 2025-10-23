document.addEventListener("DOMContentLoaded", function() {
  const slide = document.querySelector('.carousel-slide');
  const images = document.querySelectorAll('.carousel-slide img');
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const nextBtn = document.querySelector('.carousel-btn.next');

  if (!slide || images.length === 0) {
    console.error("⚠️ Carrossel não encontrado no HTML.");
    return;
  }

  let counter = 0;

  function showSlide(index) {
    if (index >= images.length) counter = 0;
    else if (index < 0) counter = images.length - 1;
    else counter = index;

    slide.style.transform = `translateX(${-counter * 100}%)`;
  }

  nextBtn?.addEventListener('click', () => showSlide(counter + 1));
  prevBtn?.addEventListener('click', () => showSlide(counter - 1));

  // Troca automática a cada 5 segundos
  setInterval(() => showSlide(counter + 1), 5000);
});
// === CARROSSEL ===
document.addEventListener("DOMContentLoaded", () => {
  const slide = document.querySelector(".carousel-slide");
  const images = document.querySelectorAll(".carousel-slide img");
  const prevBtn = document.querySelector(".carousel-btn.prev");
  const nextBtn = document.querySelector(".carousel-btn.next");

  if (!slide || images.length === 0) return;

  let counter = 0;

  function showSlide(index) {
    if (index >= images.length) counter = 0;
    else if (index < 0) counter = images.length - 1;
    else counter = index;

    slide.style.transform = `translateX(${-counter * 100}%)`;
  }

  nextBtn?.addEventListener("click", () => showSlide(counter + 1));
  prevBtn?.addEventListener("click", () => showSlide(counter - 1));

  // troca automática
  setInterval(() => showSlide(counter + 1), 5000);
});

// === MODO ESCURO / CLARO ===
document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;

  // Define modo inicial
  if (localStorage.getItem("theme") === "light") {
    body.classList.add("light-mode");
    themeToggle.innerHTML = '<ion-icon name="moon-outline"></ion-icon>';
  } else {
    themeToggle.innerHTML = '<ion-icon name="sunny-outline"></ion-icon>';
  }

  themeToggle.addEventListener("click", () => {
    body.classList.toggle("light-mode");
    if (body.classList.contains("light-mode")) {
      localStorage.setItem("theme", "light");
      themeToggle.innerHTML = '<ion-icon name="moon-outline"></ion-icon>';
    } else {
      localStorage.setItem("theme", "dark");
      themeToggle.innerHTML = '<ion-icon name="sunny-outline"></ion-icon>';
    }
  });
});

// === BOTÃO VOLTAR AO TOPO ===
document.addEventListener("DOMContentLoaded", () => {
  const btnTop = document.getElementById("backToTop");
  if (!btnTop) return;

  window.addEventListener("scroll", () => {
    btnTop.style.display = window.scrollY > 300 ? "flex" : "none";
  });

  btnTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
// === DAILY QUOTE WIDGET ===
document.addEventListener("DOMContentLoaded", () => {
  const quotes = [
    "Code is like humor. When you have to explain it, it’s bad.",
    "Talk is cheap. Show me the code.",
    "First, solve the problem. Then, write the code.",
    "Simplicity is the soul of efficiency.",
    "Clean code always looks like it was written by someone who cares.",
    "A good programmer looks both ways before crossing a one-way street.",
    "Dream big, start small, act now.",
    "Stay inspired, stay coding.",
    "Done is better than perfect.",
    "Keep improving one line at a time.",
    "Fail fast, learn faster.",
    "Push your limits, not your luck.",
    "Be stronger than your excuses.",
    "Every expert was once a beginner.",
    "Think logically, code creatively.",
    "Stay curious, stay learning."
  ];

  const currentDay = new Date();
  const index = currentDay.getDate() % quotes.length;
  const quoteText = document.getElementById("quote-text");

  if (quoteText) {
    quoteText.textContent = quotes[index];
  } else {
    console.error("⚠️ Elemento #quote-text não encontrado!");
  }
});



