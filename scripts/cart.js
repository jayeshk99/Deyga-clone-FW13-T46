// ---------------Appending in cart------------------
function appendCart() {
    let cartData = JSON.parse(localStorage.getItem("cartData")) || [];
    // let cartData = [];
    console.log(cartData)
    if (!cartData.length) {
        document.getElementById("emptyCart").style.display = "flex";
        document.getElementById("showCartProduct").style.display = "none";
        document.getElementById("showCartBottom").style.display = "none";

    } else {

        cartData.forEach((el) => {

            let showCartProduct = document.getElementById("showCartProduct");


            let cartProductCard = document.createElement("div");
            cartProductCard.setAttribute("class", "cartProductCard");


            let cartProductImg = document.createElement("div");
            cartProductImg.setAttribute("class", "cartProductImg");
            let img = document.createElement("img");
            img.setAttribute("src", el.productImgUrl2[0]);
            cartProductImg.append(img);


            let cartProductDetails = document.createElement("div");
            cartProductDetails.setAttribute("class", "cartProductDetails");
            let nameSpan = document.createElement("span");
            nameSpan.innerText = el.productName;
            let priceSpan = document.createElement("span");
            priceSpan.innerText = `Rs. ${el.price}`;

            let qtySpan = document.createElement("span");
            qtySpan.setAttribute("class", "qtyButton");
            let qtyShowSpan = document.createElement("span");
            qtyShowSpan.innerText = el.productQuantity;
            let reduceQty = document.createElement("span");
            reduceQty.setAttribute("class", "material-icons");
            reduceQty.innerText = "remove";
            reduceQty.addEventListener("click", () => {
                if (el.productQuantity < 1) {
                    el.productQuantity -= 1;
                    qtyShowSpan.innerText = el.productQuantity;
                }
            });
            let increaseQty = document.createElement("span");
            increaseQty.setAttribute("class", "material-icons");
            increaseQty.innerText = "add";
            increaseQty.addEventListener("click", () => {
                el.productQuantity += 1;
                qtyShowSpan.innerText = el.productQuantity;
            });
            qtySpan.append(reduceQty, qtyShowSpan, increaseQty)


            cartProductDetails.append(nameSpan, priceSpan, qtySpan);


            cartProductCard.append(cartProductImg, cartProductDetails);
            showCartProduct.append(cartProductCard);
        })
        let totalPrice = 0;
        for (let i = 0; i < cartData.length; i++) {
            totalPrice += cartData[i].price;
        }

        let checkoutBtn = document.querySelector("#showCartBottom>button>span:nth-child(3)");
        checkoutBtn.innerText = `Rs.${totalPrice} `;
    }
}

export { appendCart };