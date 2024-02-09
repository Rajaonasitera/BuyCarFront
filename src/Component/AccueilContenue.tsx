import React from "react";
// import { IconName } from "react-icons/ci";
import "../Assets/css/AccueilContenue.css";
import ListCategorie from "./ListCategorie.tsx";
import {NavLink } from "react-router-dom";
// import MyHeader from "./MyHeader.tsx";

function AccueilContenue() {
  
  // const [x, setX] = useState(false);
  // let tab = [1, 2, 3, 4, 5];

  // let recher = useState(false);
  // // const fnct = async () => {
  //   let token = localStorage.getItem("Token");
  //   console.log("tok :" + token);
    
  // };

  // useEffect(() => {
  //   fnct();
  // }, []);

  return (
    <>
      <div className="banniere">
        <div className="filtre">
          <div className="textAcc">
            <h1>
              Véhicules d'Exception <br></br>
              Découvrez Notre Sélection
            </h1>
            <p>
              Bienvenue sur Buy Car, votre destination ultime pour trouver la
              voiture de vos rêves ! <br />
              Que vous soyez à la recherche d'une voiture d'occasion fiable,
              d'une voiture neuve dernier cri ou simplement à la recherche
              d'inspiration, vous êtes au bon endroit.
            </p>
          </div>
          <div className="buttAcc"><NavLink to="/Login" style={{color:"black",textDecoration:"none"}}>Se connecter</NavLink></div>
        </div>
      </div>

      <div className="contenueAcc">
        
        <div className="contenueAccDroite">
          <h2>Explorez nos Offres Exceptionnelles de Voitures d'Occasion!</h2>
          <div className="contenueAccDroiteall">
          <ListCategorie></ListCategorie>
          </div>
        </div>
      </div>
      {/* <p>Coucou</p> */}
      {/* <div>
          <h1>khdkqhd</h1>
        </div> */}
    </>
  );
}

export default AccueilContenue;
