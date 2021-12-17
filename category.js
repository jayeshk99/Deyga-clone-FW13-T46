


// ------------Importing functions----------------
import { navbar, footer } from "/components/navbar.js";
import { appendCart } from "/scripts/cart.js";
import { cartComp } from "/components/cart.js";
import { setDataToLocal } from "/scripts/data.js";

let navComp = navbar();
let footerComp = footer();

let headerPart = document.getElementById("navbar");
headerPart.innerHTML = navComp;

let cartPart = document.getElementById("cart");
cartPart.innerHTML = cartComp();

let footerPart = document.querySelector("footer");
footerPart.innerHTML = footerComp;

setDataToLocal();

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
    window.scrollTo(0, 0);
    appendCart();
    document.getElementById("cart").style.marginLeft = "0%";
    disableBodyScroll();


})

let cartCloseBtn = document.querySelector(".cartClose");
cartCloseBtn.addEventListener("click", () => {
    document.getElementById("cart").style.marginLeft = "100%"
    enableBodyScroll()
})


// ---------------for sort--------------------
let x = 1;
let menuBtn = document.getElementById("productSortIcon");
menuBtn.addEventListener("click", () => {
    if (x === 1) {
        window.scrollTo(0, 0);
        document.getElementById("sortList").style.right = "0%"
        x += 1;
        disableBodyScroll()
    } else {
        document.getElementById("sortList").style.right = "-30%"
        x -= 1;
        enableBodyScroll();
    }
});

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
}


// ------------------Appending products---------------------

function appendData(data) {
    data.forEach((el) => {
        let gridDiv = document.getElementById("productGrid");

        let productCard = document.createElement("div");
        productCard.setAttribute("class", "productCard");

        productCard.addEventListener("click", (event) => {
            event.preventDefault();
            localStorage.setItem("clickedProduct", JSON.stringify(el));
            window.location.href = "productDetail.html";
        })


        // img div
        let prductImgDiv = document.createElement("div");
        prductImgDiv.setAttribute("class", "prductImgDiv");
        let img = document.createElement("img");
        img.setAttribute("class", "productImg")
        img.setAttribute("src", el.productImgUrl2[0]);
        prductImgDiv.append(img);


        // details div
        let productDetailsDiv = document.createElement("div");
        productDetailsDiv.setAttribute("class", "productDetailsDiv");

        let productNameDiv = document.createElement("div");
        productNameDiv.setAttribute("class", "productNameDiv");
        productNameDiv.innerText = el.productName;

        let productReviewsDiv = document.createElement("div");
        productReviewsDiv.setAttribute("class", "productReviewsDiv");
        let ratingSpan = document.createElement("span");
        let i = 0;
        while (i < 5) {
            let starSpan = document.createElement("span");
            if (i < el.productRating) {
                starSpan.innerHTML = `<i class="fas fa-star checked"></i>`;
            } else {
                starSpan.innerHTML = `<i class="far fa-star checked"></i>`;
            }
            ratingSpan.append(starSpan);
            i++;
        }
        let reviewsSpan = document.createElement("span");
        reviewsSpan.innerText = `${el.totalReview} reviews`;
        productReviewsDiv.append(ratingSpan, reviewsSpan);

        let productPriceDiv = document.createElement("div");
        productPriceDiv.setAttribute("class", "productPriceDiv");
        let priceSpan = document.createElement("span");
        priceSpan.innerText = `MRP Rs. ${el.price}`;
        productPriceDiv.append(priceSpan);

        productDetailsDiv.append(productNameDiv, productReviewsDiv, productPriceDiv)


        productCard.append(prductImgDiv, productDetailsDiv);
        gridDiv.append(productCard);
    })
}



let productData = JSON.parse(localStorage.getItem("productData"));
appendData(productData);


// appending rating stars

// let ratingSpan = document.createElement("span");
// ratingSpan.setAttribute("id", "ratingSpan");
// let i = 0;
// while (i < 5) {
//     let starSpan = document.createElement("span");
//     if (i < productDetailData.productRating) {
//         starSpan.innerHTML = `< i class="fas fa-star checked" ></i > `;
//     } else {
//         starSpan.innerHTML = `< i class="far fa-star checked" ></i > `;
//     }
//     ratingSpan.append(starSpan);
//     i++;
// }