const bars = document.querySelectorAll(".bar");
const percentages = [60, 84, 22, 34, 98];

const updatePercentages = () => {
  for (let i = 0; i < bars.length; i++) {
    const percentage = percentages[i];
    const percentageElement = document.getElementById(`percentage-${i}`);
    percentageElement.textContent = percentage;
  }
};

setInterval(updatePercentages, 100);
