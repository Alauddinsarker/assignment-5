function blogLink() {
  window.location.href = "../blog.html";
}
function homeLink() {
  window.location.href = "../index.html";
}

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

function showSectionById(id) {
  document.getElementById("donation-section").classList.add("hidden");
  document.getElementById("donation-history").classList.add("hidden");
  document.getElementById(id).classList.remove("hidden");
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
    modalAmount.innerHTML = `
       ${noakhaliAmount}
      `;

    const h4 = document.createElement("h4");
    const noakhaliHeading =
      document.getElementById("noakhali-heading").innerText;
    h4.innerHTML = `
      <div class="border border-gray-400 rounded-lg p-2 my-5">
      <p class="font-bold text-xl">${noakhaliAmount} Taka is ${noakhaliHeading}</p>
      <p>Date: ${new Date()}</p>
      </div>
      `;
    document.getElementById("donation-history-log").appendChild(h4);
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
    modalAmount.innerHTML = `
       ${feniAmount}
      `;
    const h4 = document.createElement("h4");
    const feniHeading = document.getElementById("feni-heading").innerText;
    h4.innerHTML = `
      <div class="border border-gray-400 rounded-lg p-2 my-5">
      <p class="font-bold text-xl">${feniAmount} Taka is ${feniHeading}</p>
      <p>Date: ${new Date()}</p>
      </div>
      `;
    document.getElementById("donation-history-log").appendChild(h4);
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
    modalAmount.innerHTML = `
       ${quotaAmount}
      `;

    const h4 = document.createElement("h4");
    const quotaHeading = document.getElementById("quota-heading").innerText;
    h4.innerHTML = `
      <div class="border border-gray-400 rounded-lg p-2 my-5">
      <p class="font-bold text-xl">${quotaAmount} Taka is ${quotaHeading}</p>
      <p>Date: ${new Date()}</p>
      </div>
      `;
    document.getElementById("donation-history-log").appendChild(h4);
    document.getElementById("quota-amount").value = "";
  });
const showDonation = document.getElementById("show-donation");
const showHistory = document.getElementById("show-history");

showDonation.addEventListener("click", function () {
  showDonation.classList.add("bg-[#B4F461]");
  showHistory.classList.remove("bg-[#B4F461]");
  showDonation.classList.remove("bg-slate-200");
  showHistory.classList.add("bg-slate-200");

  showSectionById("donation-section");
});
showHistory.addEventListener("click", function () {
  showDonation.classList.remove("bg-[#B4F461]");
  showHistory.classList.add("bg-[#B4F461]");
  showDonation.classList.add("bg-slate-200");
  showHistory.classList.remove("bg-slate-200");

  showSectionById("donation-history");
});
