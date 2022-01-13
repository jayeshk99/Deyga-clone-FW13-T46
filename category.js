


// ------------Importing functions----------------
import { navbar, footer } from "./components/navbar.js";
import { appendCart } from "./scripts/cart.js";
import { cartComp } from "./components/cart.js";
import { setDataToLocal } from "./scripts/data.js";

let navComp = navbar();
let footerComp = footer();

let headerPart = document.getElementById("navbar");
headerPart.innerHTML = navComp;

let cartPart = document.getElementById("cart");
cartPart.innerHTML = cartComp();

let footerPart = document.querySelector("footer");
footerPart.innerHTML = footerComp;

setDataToLocal();


let currUser = JSON.parse(localStorage.getItem("loginUser")) || 0;
console.log(currUser)
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
})
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


let clickedCategory = JSON.parse(localStorage.getItem("clickedCategory"));
let productData = JSON.parse(localStorage.getItem(`${clickedCategory}`));
let camelArr = ["skinCare", "babyCareProduct", "menProduct", "comboProduct", "hairCareData", "bathBody", "OralCare", "wellNess"];
let nameArr = ["Skin Care", "Baby Care", "Men", "Combo", "Hair Care", "Bath & Body", "Oral Care", "Wellness"]
for (let k = 0; k < camelArr.length; k++) {
    if (clickedCategory === camelArr[k]) {
        document.getElementById("categoryTitle").textContent = nameArr[k];
        document.getElementById("linkTitle").textContent = nameArr[k];
        break;
    }
}
console.log(productData);
appendData(productData);



// ------Sort Function --------

let lowSort = () => {
    let lowSortArr = productData.sort((a, b) => {
        return a.price - b.price;
    })
    let gridDiv = document.getElementById("productGrid");
    gridDiv.innerHTML = "";
    appendData(lowSortArr);
    document.getElementById("sortList").style.right = "-30%"
    x -= 1;
    enableBodyScroll();
}
let highSort = () => {
    let highSortArr = productData.sort((a, b) => {
        return b.price - a.price;
    })
    let gridDiv = document.getElementById("productGrid");
    gridDiv.innerHTML = "";
    appendData(highSortArr);
    document.getElementById("sortList").style.right = "-30%"
    x -= 1;
    enableBodyScroll();
}



function order(str1, str2) {
    let n1 = str1.length;
    let n2 = str2.length;
    let min;
    if (n1 < n2) {
        min = n1;
    } else {
        min = n2;
    }
    for (var i = 0; i < min; i++) {
        if (str1.charCodeAt(i) !== str2.charCodeAt(i)) {
            if (str1.charCodeAt(i) > str2.charCodeAt(i)) {
                return true;
            } else {
                return false;
            }
        }
    }
    if (n1 > n2) {
        return true;
    } else {
        return false;
    }
}
function aTozSort() {
    let N = productData.length;
    for (var i = 0; i < N - 1; i++) {
        for (var j = 0; j < N - i - 1; j++) {

            if (order(productData[j].productName, productData[j + 1].productName)) {

                let temp = productData[j];
                productData[j] = productData[j + 1];
                productData[j + 1] = temp;
            }
        }
    }
    let gridDiv = document.getElementById("productGrid");
    gridDiv.innerHTML = "";
    appendData(productData);
    document.getElementById("sortList").style.right = "-30%"
    x -= 1;
    enableBodyScroll();
}
function zToaSort() {
    let N = productData.length;
    for (var i = 0; i < N - 1; i++) {
        for (var j = 0; j < N - i - 1; j++) {

            if (!order(productData[j].productName, productData[j + 1].productName)) {

                let temp = productData[j];
                productData[j] = productData[j + 1];
                productData[j + 1] = temp;
            }
        }
    }
    let gridDiv = document.getElementById("productGrid");
    gridDiv.innerHTML = "";
    appendData(productData);
    document.getElementById("sortList").style.right = "-30%"
    x -= 1;
    enableBodyScroll();
}

document.querySelector("#sortList>ul>li:nth-child(1)").addEventListener("click", aTozSort);
document.querySelector("#sortList>ul>li:nth-child(2)").addEventListener("click", zToaSort);
document.querySelector("#sortList>ul>li:nth-child(3)").addEventListener("click", lowSort);
document.querySelector("#sortList>ul>li:nth-child(4)").addEventListener("click", highSort);


// updating cart items value in navbar
let cartitemsNo = JSON.parse(localStorage.getItem("cartData")).length;
console.log(cartitemsNo);
let cartLengthShow = document.querySelector(".dropdown+li>p>b");
console.log(cartLengthShow)
cartLengthShow.innerText = `Cart (${cartitemsNo})`;
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

// category click function
document.querySelector(".menu>ul>li:nth-child(1)").addEventListener("click", () => {
    localStorage.setItem("clickedCategory", JSON.stringify("skinCare"));
})
document.querySelector(".menu>ul>li:nth-child(2)").addEventListener("click", () => {
    localStorage.setItem("clickedCategory", JSON.stringify("hairCareData"));
})
document.querySelector(".menu>ul>li:nth-child(3)").addEventListener("click", () => {
    localStorage.setItem("clickedCategory", JSON.stringify("bathBody"));
})
document.querySelector(".menu>ul>li:nth-child(4)").addEventListener("click", () => {
    localStorage.setItem("clickedCategory", JSON.stringify("OralCare"));
})
document.querySelector(".menu>ul>li:nth-child(5)").addEventListener("click", () => {
    localStorage.setItem("clickedCategory", JSON.stringify("wellNess"));
})
document.querySelector(".menu>ul>li:nth-child(6)").addEventListener("click", () => {
    localStorage.setItem("clickedCategory", JSON.stringify("babyCareProduct"));
})
document.querySelector(".menu>ul>li:nth-child(7)").addEventListener("click", () => {
    localStorage.setItem("clickedCategory", JSON.stringify("menProduct"));
})
document.querySelector(".menu>ul>li:nth-child(8)").addEventListener("click", () => {
    localStorage.setItem("clickedCategory", JSON.stringify("comboProduct"));
})
