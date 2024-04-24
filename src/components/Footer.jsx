import React from "react";

function Footer() {

    const date = new Date();
    const corrnetYear =  date.getFullYear();

    return (
        <div>
            <footer>
                <div className="waves">
                    <div className="wave" id="wave1"></div>
                    <div className="wave" id="wave2"></div>
                    <div className="wave" id="wave3"></div>
                    <div className="wave" id="wave4"></div>
                </div>
                <ul className="social_icon">
                    <li><a href="https://www.facebook.com"><ion-icon name="logo-facebook"></ion-icon></a></li>
                    <li><a href="https://www.twitter.com"><ion-icon name="logo-twitter"></ion-icon></a></li>
                    <li><a href="https://www.linkedin.com"><ion-icon name="logo-linkedin"></ion-icon></a></li>
                    <li><a href="https://www.instagram.com"><ion-icon name="logo-instagram"></ion-icon></a></li>
                </ul>

                <ul className="menu">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="#">Team</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
                <p className="copyright"> Walid Siwas © {corrnetYear}.</p>
             </footer>
        </div>
    );
}


export default Footer;