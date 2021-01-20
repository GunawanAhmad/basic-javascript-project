let cards = document.querySelectorAll(".card");

cards.forEach((card, index) => {
  card.addEventListener("mouseover", () => {
    card.style.transform = "rotate(5deg)";
    for (let i = index; i < cards.length; i++) {
      if (cards[i + 1]) {
        cards[i + 1].style.transform = `translateX(${i + 50}%)`;
      }
    }
  });
  card.addEventListener("mouseleave", () => {
    console.log("leave");
    card.style.transform = "rotate(0deg)";
    for (let i = index; i < cards.length; i++) {
      if (cards[i + 1]) {
        cards[i + 1].style.transform = `translateX(0%)`;
      }
    }
  });
});
