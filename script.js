
document.querySelectorAll(".card").forEach(card => {
  const overlay = card.querySelector(".bio-overlay");

  let isHoveringCard = false;
  let isHoveringOverlay = false;

  const updateOverlayState = () => {
    if (isHoveringCard || isHoveringOverlay) {
      overlay.style.opacity = "1";
      overlay.style.pointerEvents = "auto";
      document.body.classList.add("show-overlay");
    } else {
      overlay.style.opacity = "0";
      overlay.style.pointerEvents = "none";
      document.body.classList.remove("show-overlay");
    }
  };

  card.addEventListener("mouseenter", () => {
    isHoveringCard = true;
    updateOverlayState();
  });

  card.addEventListener("mouseleave", () => {
    isHoveringCard = false;
    setTimeout(updateOverlayState, 100);
  });

  overlay.addEventListener("mouseenter", () => {
    isHoveringOverlay = true;
    updateOverlayState();
  });

  overlay.addEventListener("mouseleave", () => {
    isHoveringOverlay = false;
    setTimeout(updateOverlayState, 100);
  });

  // Mobile fallback: tap to toggle overlay
  card.addEventListener("click", () => {
    if (window.innerWidth <= 600) {
      const isVisible = overlay.style.opacity === "1";
      overlay.style.opacity = isVisible ? "0" : "1";
      overlay.style.pointerEvents = isVisible ? "none" : "auto";
      document.body.classList.toggle("show-overlay", !isVisible);
    }
  });
});
