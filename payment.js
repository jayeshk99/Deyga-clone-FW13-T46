var payData = JSON.parse(localStorage.getItem("paymentDetail"));

console.log(payData);
document.querySelector(
  ".box2>div:nth-child(1)"
).innerHTML = `₹ ${payData.subTotal}`;
document.querySelector(
  ".box2>div:nth-child(2)"
).innerHTML = `₹ ${payData.discount}`;
document.querySelector(
  ".box2>div:nth-child(3)"
).innerHTML = `₹ ${payData.shippingCharges}`;
console.log(`₹ ${payData.shippingCharges}`);
document.querySelector(
  ".box2>div:nth-child(4)"
).innerHTML = `₹ ${payData.grandTotal}`;

// Showing shipping details

var addData = JSON.parse(localStorage.getItem("shippingDetails"));
// console.log(addData);
document.querySelector("#shippingInfo > h5").textContent = addData.fistName;
document.querySelector("#shippingInfo > h6").textContent = addData.number;
var addDiv = document.querySelector("#shippingInfo > p");
addDiv.textContent =
  addData.country + " " + addData.address + " " + addData.pin;

// Pay now button function
document.getElementById("payNow").addEventListener("click", function () {
  document.querySelector(".credit-container1").style.display = "none";
  document.getElementById("orderPlaced").style.display = "block";
  document.querySelector(".credit-container").style.display = "none";
  document.querySelector(".credit-container2").style.display = "none";
  document.querySelector(".payT").textContent = "";
  document.querySelector(".containerPay").style.marginLeft = "0";
});
//continue shopping button
document
  .querySelector("#orderPlaced>*:nth-child(4)")
  .addEventListener("click", function () {
    localStorage.removeItem("nykaaCartDataNew");
    window.location.href = "index.html";
  });
