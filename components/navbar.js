//Function for exporting navbar component
let navbar = () => {
    return `
    <div class="header-wrapper">
    <div class="header-left-div">
    <div class="mb-header-lists">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
  </svg>
    </div>
        <div class="header-lists">
            <ul>
                <li>
                    <p style="display:flex;align-items:center;gap:10px;margin:9px"><img src="https://flagsweb.com/Flag_Emoji/India_Flag_Emoji.png" style="width:25px">IND</p>
                </li>
                <li>
                    <p>Blogs</p>
                </li>
                <li>
                    <p>Ingredients</p>
                </li>
            </ul>
        </div>
    </div>
    <div class="header-center-div">
        <div class="logo">
           <a href="index.html"><img src="https://cdn.shopify.com/s/files/1/0034/7901/1441/files/Deyga_-_Registered_Logo-01_140x.png?v=1600239326"
           alt=""></a> 
        </div>
    </div>
    <div class="header-right-div">
    <div class="mb-account">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-bag" viewBox="0 0 16 16">
    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
  </svg>
    </div>
        <div class="account">
            <div class="searchBox">
                <p><input type="text" id="search" placeholder="SEARCH PRODUCTS"><button id="searchBtn"><i
                            class="fa fa-search" style="font-size:15px;"></i>
                    </button></p>
            </div>
            <div id="submenu">
                <ul>
                    <li class="dropdown">
                        <p id="User"><b>Account</b></p>
                        <div class="dropdown-content-account" id="dropdown-content-account">
                                <ul id="loginUser">
                                    <li><a id="logout">Logout</a></li>
                                </ul>
                                <ul id="logoutUser">
                                    <li><a href="loginpage.html">Login</a></li>
                                    <li>Track Order</li>
                                    <li><a href="signup.html">Signup</a> </li>
                                </ul>
                            </div>
                    </li>
                    <li>
                        <p><b>Cart(0)</b> </p>
                    </li>
                </ul>
                <div id="header-right-img">
                <img id="header-help-img"
                    src="https://cdn.shopify.com/s/files/1/0034/7901/1441/files/HELP_ME_CHOOSE-06_1.png?214"
                    alt=""></div>
            </div>
            </div>
            </div>
            </div>
            <nav>
                <div class="menu">
                    <ul>
                        <li class="dropdown hover-underline-animation1"><a href="category.html"> Skin Care</a>
                            <div class="dropdown-content">
                                <ul>
                                    <li>Face Mask(Gel)</li>
                                    <li>Face Pack</li>
                                    <li>Aloevera Gel</li>
                                    <li>Toner</li>
                                    <li>Lip Care</li>
                                    <li>Eye Care</li>
                                    <li>Body butter</li>
                                    <li>Scrubs</li>
                                    <li>Foot Care</li>
                                    <li>Skin Serum</li>
                                    <li>Sun Screens</li>
                                    <li>Deodrant</li>
                                </ul>
                            </div>
                        </li>
                        <li class="dropdown hover-underline-animation1"><a href="category.html"> Hair Care</a>
                            <div class="dropdown-content">
                                <ul>
                                    <li>Hair Care</li>
                                    <li>Hair Serum</li>
                                    <li>Hair Oil</li>
                                    <li>Har Butter</li>
                                    <li>Shampoo Bar</li>
                                    <li>Combs</li>
                                </ul>
                            </div>
                        </li>
                        <li class="dropdown hover-underline-animation1"><a href="category.html"> Bath & Body</a>
                            <div class="dropdown-content">
                                <ul>
                                    <li>HandMade Soap</li>
                                    <li>Massage Oil</li>
                                    <li>Deodrant</li>
                                    <li>Powder</li>
                                    <li>Shampoo Bar</li>
                                    <li>Loofah</li>
                                </ul>
                            </div>
                        </li>
                        <li class="dropdown hover-underline-animation1"><a href="category.html"> Oral Care</a>
                            <div class="dropdown-content">
                                <ul>
                                    <li>Tooth Powder</li>
                                    <li>Toothe Brush</li>
                                </ul>
                            </div>
                        </li>
                        <li class="dropdown hover-underline-animation1"><a href="category.html"> Wellness</a>
                            <div class="dropdown-content">
                                <ul>
                                    <li>Cold Pressed Oil</li>
                                    <li>Essential Oil</li>
                                    <li>Hand Sanitizer</li>
                                </ul>
                            </div>
                        </li>
                        <li class="dropdown hover-underline-animation1"><a href="category.html"> Baby Care</a>
                            <div class="dropdown-content">
                                <ul>
                                    <li>Baby Soap</li>
                                    <li>Baby Massage Oil</li>
                                    <li>Powder</li>
                                    <li>Baby Butter</li>
                                    </ul>
                                    </div>
                                    </li>
                                    <li class="dropdown hover-underline-animation1"><a href="category.html"> Men</a>
                                        <div class="dropdown-content">
                                            <ul>
                                                <li>Men Bath Soap</li>
                                                <li>Beard Care</li>
                                                <li>Powder</li>
                                                <li>Shampoo Bar</li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li class="dropdown hover-underline-animation1"><a href="category.html"> Combo</a>
                                        </li>
                <li class="dropdown hover-underline-animation1"><a href="#"> Gifting</a>
                    <div class="dropdown-content">
                        <ul>
                            <li>Gift Card</li>
                            <li>Gift Box</li>
                        </ul>
                    </div>
                </li>
                <li class="dropdown"><a href="#"> Help me choose</a>
                </li>
                </ul>
        </div>
    </nav>
    `;
}

let footer = () => {
    return `
    <div class="footer-wrapper">
    <h1>We ❤️ Being Friends</h1>
    <div class="socialicons">
        <ul>
            <li><img src="https://cdn.shopify.com/s/files/1/0034/7901/1441/t/139/assets/facebook-svg2.svg?v=1619612966"
                    alt=""></li>
            <li><img src="https://cdn.shopify.com/s/files/1/0034/7901/1441/t/139/assets/twitter-svg2.svg?v=1619612966"
                    alt=""></li>
            <li><img src="https://cdn.shopify.com/s/files/1/0034/7901/1441/t/139/assets/instagram-svg2.svg?v=1619612966"
                    alt=""></li>
            <li><img src="https://cdn.shopify.com/s/files/1/0034/7901/1441/t/139/assets/ping-svg2.svg?v=1619612966"
                    alt=""></li>
            <li><img src="https://cdn.shopify.com/s/files/1/0034/7901/1441/t/139/assets/youtube-svg2.svg?v=1619612966"
                    alt=""></li>
        </ul>
    </div>
    <h3>Choose Pure! Choose Deyga!</h3>
    <div class="footer-row">
        <div class="col">
            <h4>Contact</h4>
            <ul>
                <li>+91 9159305599</li>
                <li>enquiry@deyga.in</li>
                <li>Contact us</li>
            </ul>
            <h4>FOR CORPORATE ORDERS:</h4>
            <ul>
                <li>business@deyga.in</li>
            </ul>
        </div>
        <div class="col">
            <h4>Support</h4>
            <ul>
                <li> About us</li>
                <li>FAQs</li>
                <li>Privacy policy</li>
                <li>Terms and Conditions</li>
                <li>Shipping & Returns</li>
                <li>Track your order</li>
            </ul>
        </div>
        <div class="col">
            <h4>Sign-up to get closer</h4>
            <ul>
                <li>
                    <p>Subscribe to get special offers, free giveaways and once in a lifetime deals</p>
                </li>
                <li><input type="text" id="Subscribe" placeholder="Enter your email address">
                    <button class="hover-underline-animation" id="subscribe">SUBSCRIBE</button></li>
            </ul>
        </div>
    </div>
</div>
    `;
}
export { navbar, footer };