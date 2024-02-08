import React from "react";
import '../Assets/css/MyFooter.css'
import logofoot from "../Assets/img/logo1.jpg"

function MyFooter (){
        return (
            <>
            <div className="foot">
                <div className="foot1">
                    <h2>Logo</h2>
                    <p>Tatiana <span>Rajaonasitera</span></p>
                    <p>Loann <span>Ramanantsihoarana</span></p>
                    <p>Dimby <span>Rakotomalala</span></p>
                    <p>Jerrick <span>Rakotonirina</span></p>
                </div>
                <div className="foot2">
                    <h2>Etu</h2>
                    <p>1814</p>
                    <p>1845</p>
                    <p>1825</p>
                    <p>1841</p>
                </div>
                <div className="foot3">
                    <h2>Page</h2>
                    <p><a href="#">Accueil</a></p>
                    <p><a href="#">Favoris</a></p>
                    <p><a href="#">Se connecter</a></p>
                    <p className="dwn"><a href="#">Download apk</a></p>
                    <p className="dw"><a href="#">%</a></p>
                </div>
                <div className="foot4">
                    <h2>Download APK</h2>
                    <a href="">http//BuyCar.download.com</a>
                    <div className="recherche">
                        <input type="text" name="" id="" />
                    </div>
                </div>
            </div>
            </>
        );
    }

export default MyFooter;

