const sponsorButtons = document.querySelectorAll(".sponsor-btn");
const animalInput = document.getElementById("animal");
const fakeDonateBtn = document.getElementById("fakeDonateBtn");
const formMessage = document.getElementById("formMessage");

sponsorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const animalName = button.getAttribute("data-animal");

    if (animalInput) {
      animalInput.value = animalName;
    }
  });
});

if (fakeDonateBtn) {
  fakeDonateBtn.addEventListener("click", () => {
    const selectedAnimal = animalInput ? animalInput.value : "";

    if (!formMessage) return;

    if (!selectedAnimal) {
      formMessage.textContent = "Please choose an animal to sponsor.";
      return;
    }

    formMessage.textContent =
      `Thank you for choosing to support ${selectedAnimal}. ` +
      `This is a placeholder button for now — later this can connect to Stripe or PayPal.`;
  });
}