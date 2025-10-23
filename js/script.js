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