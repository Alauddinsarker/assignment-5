function getInputFieldValueById(id) {
  const inputDonationAmount = document.getElementById(id).value;
  return inputDonationAmount;
}
function getDonatedAmountById(id) {
  const donatedAmount = document.getElementById(id).innerText;
  return donatedAmount;
}

function getDonationAbleAmountById() {
  const donationAbleAmount = parseFloat(
    document.getElementById("donationable-amount").innerText
  );
  return donationAbleAmount;
}

document
  .getElementById("noakhali-donate-now")
  .addEventListener("click", function () {
    // Get Input Field Value
    const noakhaliAmount = parseFloat(
      getInputFieldValueById("noakhali-amount")
    );

    // Get Donated Amount
    const noakhaliDonatedAmount = parseFloat(
      getDonatedAmountById("noakhali-donated-amount")
    );
    const noakhaliDonatedTotalAmount = noakhaliDonatedAmount + noakhaliAmount;
    document.getElementById("noakhali-donated-amount").innerText =
      noakhaliDonatedTotalAmount;
    // Get Donationable Amount

    const donationAbleAmount = getDonationAbleAmountById("donationable-amount");

    const newDonationAbleAmount = donationAbleAmount - noakhaliAmount;
    document.getElementById("donationable-amount").innerText =
      newDonationAbleAmount;

    document.getElementById("noakhali-amount").value = "";
  });

document
  .getElementById("feni-donate-now")
  .addEventListener("click", function () {
    // Get Input Field Value
    const feniAmount = parseFloat(getInputFieldValueById("feni-amount"));

    // Get Donated Amount
    const feniDonatedAmount = parseFloat(
      getDonatedAmountById("feni-donated-amount")
    );
    const feniDonatedTotalAmount = feniDonatedAmount + feniAmount;
    document.getElementById("feni-donated-amount").innerText =
      feniDonatedTotalAmount;
    // Get Donationable Amount

    const donationAbleAmount = getDonationAbleAmountById("donationable-amount");

    const newDonationAbleAmount = donationAbleAmount - feniAmount;
    document.getElementById("donationable-amount").innerText =
      newDonationAbleAmount;

    document.getElementById("feni-amount").value = "";
  });

document
  .getElementById("quota-donate-now")
  .addEventListener("click", function () {
    // Get Input Field Value
    const quotaAmount = parseFloat(getInputFieldValueById("quota-amount"));

    // Get Donated Amount
    const quotaDonatedAmount = parseFloat(
      getDonatedAmountById("quota-donated-amount")
    );
    const quotaDonatedTotalAmount = quotaDonatedAmount + quotaAmount;
    document.getElementById("quota-donated-amount").innerText =
      quotaDonatedTotalAmount;

    // Get Donationable Amount
    const donationAbleAmount = getDonationAbleAmountById("donationable-amount");
    const newDonationAbleAmount = donationAbleAmount - quotaAmount;
    document.getElementById("donationable-amount").innerText =
      newDonationAbleAmount;
    document.getElementById("quota-amount").value = "";
  });
