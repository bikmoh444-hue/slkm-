(function () {
  const map = {
    accueil: "index.html",
    voyages: "voyages.html",
    "rechercher-reserver": "index.html#booking",
    agences: "agences.html",
    services: "index.html#poles",
    "mes-reservations": "confirmation.html",
    "ticket-viewer": "billet.html",
    "my-bookings": "confirmation.html",
    "station-network": "agences.html",
    "freight-waybill": "#",
  };

  document.addEventListener("click", function (e) {
    const el = e.target.closest("[data-path]");
    if (!el) return;
    const path = el.getAttribute("data-path");
    if (!path) return;
    const href = map[path];
    if (href && href !== "#") {
      e.preventDefault();
      window.location.href = href;
    }
  });
})();
