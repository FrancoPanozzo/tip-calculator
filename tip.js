function calculateTip(bill, service, people) {
  let percentage;
  switch (service) {
    case "average":
      percentage = 0.025;
      break;
    case "good":
      percentage = 0.5;
      break;
    case "great":
      percentage = 0.1;
      break;
    case "excellent":
      percentage = 0.15;
      break;
  }
  return (bill * percentage) / people;
}

const calculateTipBtn = document.querySelector("#calculateTip");

calculateTipBtn.addEventListener("click", () => {
  const billAmount = document.querySelector("#billAmount").value;

  const serviceQuality = document.querySelector("#serviceQuality").value;

  const amountOfPeople = document.querySelector("#amountOfPeople").value;

  const tip = calculateTip(billAmount, serviceQuality, amountOfPeople);

  if (tip && tip != Infinity && tip != -Infinity) {
    document.querySelector(
      "#target"
    ).innerHTML = `<span class="result">You should each pay ${tip.toFixed(
      2
    )} <br> for a total of ${(tip * amountOfPeople).toFixed(2)}</span>`;
  } else {
    document.querySelector(
      "#target"
    ).innerHTML = `<span class="result" id="error">ERROR. Please check your entries</span>`;
  }
});
