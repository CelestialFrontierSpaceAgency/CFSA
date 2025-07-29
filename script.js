// bg //
const canvas = document.getElementById("stars-canvas");
  const ctx = canvas.getContext("2d");

  let stars = [];
  const numStars = 100;

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  window.addEventListener("resize", resizeCanvas);
  resizeCanvas();

  for (let i = 0; i < numStars; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.5 + 0.5,
      speed: Math.random() * 0.1 + 0.05
    });
  }

  function animateStars() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "white";
    stars.forEach(star => {
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      ctx.fill();

      star.y += star.speed;
      if (star.y > canvas.height) {
        star.y = 0;
        star.x = Math.random() * canvas.width;
      }
    });

    requestAnimationFrame(animateStars);
  }

  animateStars();

// animations //
const panels = document.querySelectorAll('.panel');
  const totalPanels = panels.length;

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const viewportHeight = window.innerHeight;

    panels.forEach((panel, i) => {
      const panelStart = i * viewportHeight;
      const panelEnd = (i + 1) * viewportHeight;

      if (scrollY >= panelStart && scrollY < panelEnd) {
        panel.classList.add('active');
        panel.classList.remove('fade-out');
      } else if (scrollY >= panelEnd) {
        panel.classList.remove('active');
        panel.classList.add('fade-out');
      } else {
        panel.classList.remove('active', 'fade-out');
      }
    });
  });

  // reload return //
  window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};



  