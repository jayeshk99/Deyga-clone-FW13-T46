let data = JSON.parse(localStorage.getItem("cartData"));

let paymentDetail = JSON.parse(localStorage.getItem("paymentDetail"));
let couponFlag = JSON.parse(localStorage.getItem("couponFlag"));
console.log(data);
function appendCheckout(data) {
  let totalPrice = 0;
  for (let i = 0; i < data.length; i++) {
    totalPrice += data[i].price * data[i].productQuantity;
  }
  data.map((el, index) => {
    let checkProductCard = document.createElement("div");
    checkProductCard.setAttribute("class", "checkProductCard");
    checkProductCard.innerHTML = `<div class="checkImg">
            <img src="${el.productImgUrl2[0]}"
                alt = "" >
        </div >
        <div class="checkDesc">
            <span>${el.productName}</span >
            <span>${el.productQuantity}Unit</span >
        </div >
        <div class="checkPrice">
            ₹ ${el.price * el.productQuantity}
        </div>`;

    document.getElementById("checkoutProuctDetails").append(checkProductCard);
  });

  let priceShow1 = document.querySelector(
    ".checkoutTextDirecton>p:nth-child(1)"
  );
  priceShow1.textContent = `₹ ${totalPrice}`;
  let priceShow2 = document.querySelector("#checkoutTotalAmount>div>span");
  priceShow2.textContent = `₹ ${totalPrice + paymentDetail.shippingCharges}`;

  document.querySelector(".checkoutTextDirecton>p:nth-child(2)").textContent =
    "₹ " + paymentDetail.shippingCharges;
}
appendCheckout(data);

let couponBtn = document.getElementById("couponBtn");
couponBtn.addEventListener("click", () => {
  let couponCode = document.getElementById("couponCode").value;
  if (couponCode === "masai30") {
    if (couponFlag) {
      alert("Coupon Already Applied");
    } else {
      let discountValue = Math.floor(paymentDetail.subTotal * 0.3);
      console.log("dis", discountValue);
      let grandTotal =
        paymentDetail.subTotal + paymentDetail.shippingCharges - discountValue;
      let priceShow2 = document.querySelector("#checkoutTotalAmount>div>span");
      priceShow2.textContent = `₹ ${grandTotal}`;
      document.querySelector(
        ".checkoutTextDirecton>p:nth-child(3)"
      ).textContent = `₹ ${discountValue}`;
      document.querySelector(
        ".checkoutTextDirecton>p:nth-child(3)"
      ).style.color = "green";
      document.querySelector(
        ".checkoutSubtoal>div>p:nth-child(3)"
      ).style.color = "green";
      alert("30% off applied");
      couponFlag = true;

      paymentDetail.discount = discountValue;
      paymentDetail.grandTotal = grandTotal;
      localStorage.setItem("paymentDetail", JSON.stringify(paymentDetail));
      localStorage.setItem("couponFlag", JSON.stringify(couponFlag));
    }
  } else {
    alert("Invalid Coupon code");
  }
});

let continueBtn = document.querySelector(".cToShippingDiv2");
continueBtn.addEventListener("click", () => {
  let shippingDetails = {
    fistName: document.querySelector(".nameDiv>input:nth-child(1)").value,
    lastName: document.querySelector(".nameDiv>input:nth-child(2)").value,
    address: document.querySelector("#address").value,
    country: document.querySelector("#country").value,
    city: document.querySelector(".pincityDiv>input:nth-child(1)").value,
    pin: document.querySelector(".pincityDiv>input:nth-child(2)").value,
    state: document.querySelector("#state").value,
    number: document.querySelector("#number").value,
  };
  localStorage.setItem("shippingDetails", JSON.stringify(shippingDetails));

  window.location.href = "payment.html";
});
