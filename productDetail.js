let productDetailData = JSON.parse(localStorage.getItem("clickedProduct"));
let cartData = JSON.parse(localStorage.getItem("cartData")) || [];

// ----------Import functions-------
import { navbar, footer } from "./components/navbar.js";
import { cartComp } from "./components/cart.js";
import { appendCart } from "./scripts/cart.js";

let headerPart = document.getElementById("navbar");
headerPart.innerHTML = navbar();

let cartPart = document.getElementById("cart");
cartPart.innerHTML = cartComp();

let footerPart = document.querySelector("footer");
footerPart.innerHTML = footer();

let currUser = JSON.parse(localStorage.getItem("loginUser")) || 0;
console.log(currUser);
if (currUser != 0) {
  document.getElementById("User").textContent = currUser["username"];
  document.getElementById("logoutUser").style.display = "none";
  document.getElementById("loginUser").style.display = "block";
} else {
  document.getElementById("User").textContent = "Account";
  document.getElementById("logoutUser").style.display = "block";
  document.getElementById("loginUser").style.display = "none";
}

document.getElementById("logout").addEventListener("click", function () {
  currUser = 0;
  document.getElementById("User").textContent = "Account";
  document.getElementById("logoutUser").style.display = "block";
  document.getElementById("loginUser").style.display = "none";
  localStorage.setItem("loginUser", JSON.stringify(currUser));
  window.location.href = "loginpage.html";
});

// -------------------path of page-----------------------------
let path = document.getElementById("path");
let pathDiv = document.createElement("div");
pathDiv.setAttribute("id", "pathDiv");
pathDiv.innerHTML = `<a href="index.html" class="linkPath">Home ></a>
<a href="category.html" class="linkPath" id="clickedCat"></a>
<a href="" class="linkPath">${productDetailData.productName}</a>`;
path.append(pathDiv);
// -----------nav hiding & showing on scroll ----------------

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-180px";
  }
  prevScrollpos = currentScrollPos;
};

// ----------- disabling and enabling body scroll ----------

function disableBodyScroll() {
  const element = document.querySelector("body");
  element.classList.add("stop-scroll");
}
function enableBodyScroll() {
  const element = document.querySelector("body");
  element.classList.remove("stop-scroll");
}

// -------------for cart---------------------
let cartBtn = document.querySelector("#submenu>ul>li:nth-child(2)");
cartBtn.addEventListener("click", () => {
  document.getElementById("cart").style.display = "block";
  window.scrollTo(0, 0);
  appendCart();
  document.getElementById("cart").style.marginLeft = "0%";
  disableBodyScroll();
});

let cartCloseBtn = document.querySelector(".cartClose");
cartCloseBtn.addEventListener("click", () => {
  document.getElementById("cart").style.marginLeft = "100%";
  enableBodyScroll();
});

let productImageContainer = document.getElementById("productImageContainer");
let productDescriptionContainer = document.getElementById(
  "productDescriptionContainer"
);

//left side part Showing images
let productImgMain = document.createElement("img");
productImgMain.setAttribute("id", "productImgMain");
productImgMain.src = productDetailData.productImgUrl2[0];

let thumbNailDiv = document.createElement("div");
thumbNailDiv.setAttribute("id", "thumbNailDiv");

productDetailData.productImgUrl2.forEach((element) => {
  let thumbImgSpan = document.createElement("span");
  thumbImgSpan.setAttribute("id", "thumbImgSpan");

  thumbImgSpan.addEventListener("click", function () {
    productImgMain.src = element;
    thumbImgSpan.style.border = "1px solid";
  });
  thumbImgSpan.style.border = "none";
  let thumbImg = document.createElement("img");
  thumbImg.setAttribute("id", "thumbImg");
  thumbImg.src = element;
  thumbImgSpan.append(thumbImg);
  thumbNailDiv.append(thumbImgSpan);
});
productImageContainer.append(productImgMain, thumbNailDiv);

// right side par showing product discription
let productNameDiv = document.createElement("div");
productNameDiv.setAttribute("id", "productNameDiv");

let productTitle = document.createElement("h1");
productTitle.setAttribute("id", "productTitle");
productTitle.textContent = productDetailData.productName;
let ratingSpan = document.createElement("span");
ratingSpan.setAttribute("id", "ratingSpan");
let i = 0;
while (i < 5) {
  let starSpan = document.createElement("span");
  if (i < productDetailData.productRating) {
    starSpan.innerHTML = `<i class="fas fa-star checked"></i>`;
  } else {
    starSpan.innerHTML = `<i class="far fa-star checked"></i>`;
  }
  ratingSpan.append(starSpan);
  i++;
}

let totalReview = document.createElement("span");
totalReview.textContent = `${productDetailData.totalReview}review`;
ratingSpan.append(totalReview);

let productPriceDiv = document.createElement("div");
productPriceDiv.setAttribute("id", "productPriceDiv");
let productPrice = document.createElement("span");
productPrice.textContent = `Rs. ${productDetailData.price}`;
productPrice.setAttribute("id", "productPrice");
productPriceDiv.append(productPrice);

productNameDiv.append(productTitle, ratingSpan, productPriceDiv);

// product size variants

let productSizeDiv = document.createElement("div");
productSizeDiv.setAttribute("id", "productSizeDiv");
let sizeSpan = document.createElement("span");
sizeSpan.textContent = "Size:";
let sizeType = document.createElement("span");
sizeType.setAttribute("id", "sizeType");
sizeType.textContent = productDetailData.productSize;
productSizeDiv.append(sizeSpan, sizeType);

let productQuantityDiv = document.createElement("div");
productQuantityDiv.setAttribute("id", "productQuantityDiv");
let quantitySpan = document.createElement("span");
quantitySpan.textContent = "Quantity:";
let quantityDiv = document.createElement("div");
quantityDiv.setAttribute("id", "quantityDiv");

let minusBtn = document.createElement("span");
minusBtn.textContent = "-";
minusBtn.setAttribute("class", "quantityBtn");
minusBtn.addEventListener("click", function () {
  if (productDetailData.productQuantity > 1) {
    productDetailData.productQuantity--;
  }

  showQuantity.textContent = productDetailData.productQuantity;
});
let showQuantity = document.createElement("span");
showQuantity.setAttribute("id", "showQuantity");
showQuantity.textContent = productDetailData.productQuantity;
let plusBtn = document.createElement("span");
plusBtn.setAttribute("class", "quantityBtn");
plusBtn.textContent = "+";
plusBtn.addEventListener("click", function () {
  productDetailData.productQuantity++;
  showQuantity.textContent = productDetailData.productQuantity;
});
quantityDiv.append(minusBtn, showQuantity, plusBtn);
productQuantityDiv.append(quantitySpan, quantityDiv);
let freeDilv = document.createElement("p");
freeDilv.setAttribute("class", "paraGreen");

freeDilv.textContent = "Get free shipping on prepaid orders above Rs. 1400";

let btnDiv = document.createElement("div");
btnDiv.setAttribute("id", "btnDiv");
let addToCartBtn = document.createElement("button");
addToCartBtn.setAttribute(
  "class",
  "addToCart-hover-underline-animation addToCartBtn"
);
addToCartBtn.textContent = "ADD TO CART";

let viewCartBtn = document.createElement("button");
viewCartBtn.textContent = "PROCEED TO CART";
viewCartBtn.style.display = "none";

addToCartBtn.addEventListener("click", () => {
  viewCartBtn.style.display = "block";
  addToCartBtn.style.display = "none";
  cartData.push(productDetailData);
  localStorage.setItem("cartData", JSON.stringify(cartData));
});

viewCartBtn.addEventListener("click", () => {
  document.getElementById("cart").style.display = "block";
  window.scrollTo(0, 0);
  appendCart();
  document.getElementById("cart").style.marginLeft = "0%";
  disableBodyScroll();
});
viewCartBtn.setAttribute(
  "class",
  "viewCarthover-underline-animation addToCartBtn"
);
let buyItNowBtn = document.createElement("button");
buyItNowBtn.setAttribute("id", "buyItNowBtn");
buyItNowBtn.setAttribute("class", "buyItNowBtnhover-underline-animation");
buyItNowBtn.textContent = "BUY IT NOW";
buyItNowBtn.addEventListener("click", () => {
  window.location.href = "payment.html";
});
btnDiv.append(addToCartBtn, viewCartBtn, buyItNowBtn);

let naturalImgDiv = document.createElement("div");
naturalImgDiv.setAttribute("id", "naturalImgDiv");
let naturalImg = document.createElement("img");
naturalImg.setAttribute("id", "naturalImg");
naturalImg.src =
  "https://cdn.shopify.com/s/files/1/0034/7901/1441/files/Untitled_design_1_ffb99d9a-dabf-45a3-b489-fcca97415010.png?v=1595966482";
naturalImgDiv.append(naturalImg);

let howToUseDiv = document.createElement("div");
howToUseDiv.setAttribute("id", "howToUseDiv");
let productDesBtn = ["Description", "How to Use"];
let productDesBtnData = [
  "The Charcoal Soap Bar is perfect for times when you'd want to take a thoroughly cleansing shower at the end of a messy, grimy day. Also, using our Charcoal soap bar consistently on your face can reduce or eliminate acne, bumps and blackheads. So if you suffer from any of these, we’d recommend you use this as a part of your daily regimen.",
];
productDesBtn.forEach((el, i) => {
  let descBtn = document.createElement("button");
  descBtn.setAttribute("class", "descBtn");

  descBtn.textContent = el;
  descBtn.addEventListener("click", () => {
    descBtn.style.backgroundColor = "black";
    descBtn.style.color = "white";
    showDescDetail(i);
  });

  howToUseDiv.append(descBtn);
});
let showDesc = document.createElement("div");
showDesc.setAttribute("id", "showDesc");

let showDescDetail = (i) => {
  if (i === 0) {
    showDesc.textContent = productDesBtnData[i];
  } else {
    showDesc.innerHTML = `<img id="showDescImg"src="https://cdn.shopify.com/s/files/1/0034/7901/1441/files/HERBAL_HAIR_PACK-01_480x480.jpg?v=1577109782"></img>`;
  }
};

productDescriptionContainer.append(
  productNameDiv,
  productSizeDiv,
  productQuantityDiv,
  freeDilv,
  btnDiv,
  naturalImgDiv,
  howToUseDiv,
  showDesc
);

// updating cart items value in navbar
let cartitemsNo = JSON.parse(localStorage.getItem("cartData")).length;
console.log(cartitemsNo);
let cartLengthShow = document.querySelector(".dropdown+li>p>b");
console.log(cartLengthShow);
cartLengthShow.innerText = `Cart (${cartitemsNo})`;

let clickedCategory = JSON.parse(localStorage.getItem("clickedCategory"));
let productData = JSON.parse(localStorage.getItem(`${clickedCategory}`));
let camelArr = [
  "skinCare",
  "babyCareProduct",
  "menProduct",
  "comboProduct",
  "hairCareData",
  "bathBody",
  "OralCare",
  "wellNess",
];
let nameArr = [
  "Skin Care",
  "Baby Care",
  "Men",
  "Combo",
  "Hair Care",
  "Bath & Body",
  "Oral Care",
  "Wellness",
];
for (let k = 0; k < camelArr.length; k++) {
  if (clickedCategory === camelArr[k]) {
    document.getElementById("clickedCat").textContent = `${nameArr[k]} >`;
    break;
  }
}

// category click function
document
  .querySelector(".menu>ul>li:nth-child(1)")
  .addEventListener("click", () => {
    localStorage.setItem("clickedCategory", JSON.stringify("skinCare"));
  });
document
  .querySelector(".menu>ul>li:nth-child(2)")
  .addEventListener("click", () => {
    localStorage.setItem("clickedCategory", JSON.stringify("hairCareData"));
  });
document
  .querySelector(".menu>ul>li:nth-child(3)")
  .addEventListener("click", () => {
    localStorage.setItem("clickedCategory", JSON.stringify("bathBody"));
  });
document
  .querySelector(".menu>ul>li:nth-child(4)")
  .addEventListener("click", () => {
    localStorage.setItem("clickedCategory", JSON.stringify("OralCare"));
  });
document
  .querySelector(".menu>ul>li:nth-child(5)")
  .addEventListener("click", () => {
    localStorage.setItem("clickedCategory", JSON.stringify("wellNess"));
  });
document
  .querySelector(".menu>ul>li:nth-child(6)")
  .addEventListener("click", () => {
    localStorage.setItem("clickedCategory", JSON.stringify("babyCareProduct"));
  });
document
  .querySelector(".menu>ul>li:nth-child(7)")
  .addEventListener("click", () => {
    localStorage.setItem("clickedCategory", JSON.stringify("menProduct"));
  });
document
  .querySelector(".menu>ul>li:nth-child(8)")
  .addEventListener("click", () => {
    localStorage.setItem("clickedCategory", JSON.stringify("comboProduct"));
  });
