document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.project-card-interactive');

    projectCards.forEach(card => {
        card.addEventListener('click', function() {
            const destination = this.getAttribute('data-id');
            if (destination) {
                window.location.href = destination;
            }
        });
    });
});
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".contact-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const link = btn.getAttribute("data-id");
      if (link) window.location.href = link;
    });
  });
});

