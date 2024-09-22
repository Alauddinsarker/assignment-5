document.getElementById("donate-now").addEventListener("click", function () {
  const noakhaliAmount = parseFloat(
    document.getElementById("noakhali-amount").value
  );

  const donationableAmount = parseFloat(
    document.getElementById("donationable-amount").innerText
  );

  const donatedAmount = parseFloat(
    document.getElementById("donated-amount").innerText
  );
  document.getElementById("donated-amount").innerText =
    noakhaliAmount + donatedAmount;
  document.getElementById("donationable-amount").innerText =
    donationableAmount - noakhaliAmount;
  document.getElementById("noakhali-amount").value = "";
  //   console.log(donatedAmount);
});
