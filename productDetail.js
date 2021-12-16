let productDetailData = {
  productImgUrl2: [
    "https://cdn.shopify.com/s/files/1/0034/7901/1441/products/YFP03136_800x.jpg?v=1623384069",
    "https://cdn.shopify.com/s/files/1/0034/7901/1441/products/YFP02009_800x.jpg?v=1623388869",
    "https://cdn.shopify.com/s/files/1/0034/7901/1441/products/PG_800x.jpg?v=1623388869",
  ],

  productName: "Anti Dandruff Oil",
  productRating: 3,
  totalReview: 51,
  price: 451,
  productSize: 100,
  productQuantity: 1,
};

let productDetailContainer = document.getElementById("productDetailContainer");
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
sizeType.textContent = `${productDetailData.productSize}ml`;
productSizeDiv.append(sizeSpan, sizeType);

productQuantityDiv = document.createElement("div");
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
addToCartBtn.setAttribute("id", "addToCartBtn");
addToCartBtn.setAttribute("class", "hover-underline-animation");
addToCartBtn.textContent = "ADD TO CART";
let buyItNowBtn = document.createElement("button");
buyItNowBtn.setAttribute("id", "buyItNowBtn");
buyItNowBtn.setAttribute("class", "buyItNowBtnhover-underline-animation");
buyItNowBtn.textContent = "BUY IT NOW";
btnDiv.append(addToCartBtn, buyItNowBtn);

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
    showDesc.innerHTML = `<img src="https://cdn.shopify.com/s/files/1/0034/7901/1441/files/HERBAL_HAIR_PACK-01_480x480.jpg?v=1577109782"></img>`;
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
