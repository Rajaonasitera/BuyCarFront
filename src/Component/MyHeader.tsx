import React from "react";
import popo from '../Assets/img/l.png';
import '../Assets/css/MyHeader.css'
import { NavLink } from "react-router-dom";
// import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
// import { faCoffee } from '@fortawesome/pro-regular-svg-icons';
// import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
// import "../Assets/fontawesome-free-6.5.1-web"

function MyHeader(){
        return (
            <>
            <div className="navh">
                <div className="navgauche">
                <img src={popo} alt="" />

                </div>
                <div className="navdroite">
                    <div className="navdroitehaut">
                    {/* <FontAwesomeIcon icon={faHome} /> */}
                    <FontAwesomeIcon icon={faFacebook} />
                    <FontAwesomeIcon icon={faTwitter} />
                    <FontAwesomeIcon icon={faGithub} />
                    {/* <FontAwesomeIcon icon={icon({iconName: 'coffee-pot', IconLookup: 'regular'})} style={{color:'white'}}/> */}
                        {/* <p>Jeudi 25 janvier 2024 </p>
                        <p>Andoharanofotsy</p>
                        <a href="tel:+">0334951651</a> */}
                        {/* <p>jkbj</p> */}
                    </div>
                    <div className="navdroitebas">
                    <NavLink to="/">ACCUEIL</NavLink>
                        <NavLink to="/Annonce">FAVORIS</NavLink>
                        <NavLink to="/Annonce">ANNONCES</NavLink>
                        <NavLink to="/Profil">PROFIL</NavLink>
                        {/* <a href="#">SERVICES</a>
                        <a href="#">SHOP</a>
                        <a href="#">NEW</a>
                        <a href="#">CONTACT</a> */}
                    </div>
                </div>
            </div>
            
            </>
        );
    
                    };

export default MyHeader;

