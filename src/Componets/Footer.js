import React from 'react';
import footericon from '../assets/food-app-img/foodHome.png'


function Footer(props) {
    return (

        < section className="footer">
            <footer style={{
                backgroundColor: "#85b767", bottom: 0, padding: " 40px 25px"
            }} >
                <div className="row">
                    <div className="col-md-4 col-12 footer-heading1">
                        <div><img src={footericon} className="footer-img" alt="footer img..." /></div>
                        <p className="mt-3">
                            2058  Sugar Camp Road<br />
                            Blue Earth<br />
                            Minnesota<br /><br />
                            Phone Number- 507-525-8599<br />
                            Mobile Number- 507-600-7120</p>
                        <p> qr3x56bgtkg@temporary-mail.net</p>
                        <div>
                            <p> Follow us on :-</p>
                        </div>
                    </div>

                    <div className="col-md-4 col-12">
                        <div className="footer-link">
                            <h4 className="footer-heading2"><b>Food</b></h4>
                            <ul className="mt-4  footer-list pl-0">
                                <li>Tacos</li>
                                <li>Poutine</li>
                                <li> Chicken rice</li>
                                <li>   Som tam</li>
                                <li>  Seafood paella</li>
                                <li> Potato chips</li>
                                <li>Masala dosa</li>
                                <li> Buttered popcorn</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4 footer-link ">
                        <h4 className="footer-heading2"><b>Restaurants</b></h4>
                        <ul className="mt-4 footer-list pl-0">
                            <li> Ithaa. Rangali Island,</li>
                            <li>Dinner in the Sky.</li>
                            <li> Parallax Restaurant</li>
                            <li>  El Diablo</li>
                            <li> The Disaster Café</li>
                            <li> Planet of the Grapes</li>
                            <li>Eatmore Fried Chicken</li>
                            <li> Dinner in the Sky.</li>
                        </ul>
                    </div>
                </div>
            </footer>

        </section >
    );
}

export default Footer;