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
    if (isNaN(noakhaliAmount) || noakhaliAmount < 0) {
      alert("Please provide a positive number");
      document.getElementById("noakhali-amount").value = "";
      return;
    }
    document.getElementById("my_modal").showModal();
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
    const modalAmount = document.getElementById("modal-amount");
    const p = document.createElement("p");
    p.innerHTML = `
      <img src="./assets/coin.png" alt="" /> ${noakhaliAmount}
      `;
    modalAmount.appendChild(p);

    document.getElementById("noakhali-amount").value = "";
  });

document
  .getElementById("feni-donate-now")
  .addEventListener("click", function () {
    // Get Input Field Value
    const feniAmount = parseFloat(getInputFieldValueById("feni-amount"));
    if (isNaN(feniAmount) || feniAmount < 0) {
      alert("Please provide a positive number");
      document.getElementById("feni-amount").value = "";
      return;
    }
    document.getElementById("my_modal").showModal();
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
    const modalAmount = document.getElementById("modal-amount");
    const p = document.createElement("p");
    p.innerHTML = `
      <img src="./assets/coin.png" alt="" /> ${feniAmount}
      `;
    modalAmount.appendChild(p);

    document.getElementById("feni-amount").value = "";
  });

document
  .getElementById("quota-donate-now")
  .addEventListener("click", function () {
    // Get Input Field Value
    const quotaAmount = parseFloat(getInputFieldValueById("quota-amount"));
    if (isNaN(quotaAmount) || quotaAmount < 0) {
      alert("Please provide a positive number");
      document.getElementById("quota-amount").value = "";
      return;
    }
    document.getElementById("my_modal").showModal();

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
    const modalAmount = document.getElementById("modal-amount");
    const p = document.createElement("p");
    p.innerHTML = `
      <img src="./assets/coin.png" alt="" /> ${quotaAmount}
      `;
    modalAmount.appendChild(p);
    document.getElementById("quota-amount").value = "";
  });
