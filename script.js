document.addEventListener("DOMContentLoaded", () => {
  const text = "Welcome to My Futuristic World";
  const heroText = document.getElementById("hero-text");

  function typeLetter(index) {
    if (index < text.length) {
      const span = document.createElement("span");
      span.textContent = text[index];
      span.style.opacity = "0";
      heroText.appendChild(span);

      setTimeout(() => {
        span.style.opacity = "1";
      }, 50); // Fade-in effect delay per letter

      setTimeout(() => typeLetter(index + 1), 100); // Timing between letters
    }
  }

  typeLetter(0);
});
