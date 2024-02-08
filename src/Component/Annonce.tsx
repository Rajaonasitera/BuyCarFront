import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../Assets/css/Annonce.css";
// import logofoot from "../Assets/img/logo1.jpg"

function Annonce() {
  const nav = useNavigate();
  // const history = useHist();
  const [annonce, setAnnonce] = useState<any[]>([]);
  const fnct = async () => {
    let url =
      "https://webservicevoiture-production.up.railway.app/annonce/listfavoris";
    // let token = localStorage.getItem("Token");
    // console.log("tok :" + token);
    let response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // Authorization: "Bearer " + token,
      },
      body : JSON.stringify(token)
    }) as any ;
    response  = await response.json();
    setAnnonce(response.object);
    // if(response.status)
    console.log(response.object[0].photos[0].url)
    console.log(response.status);
  };

  useEffect(() => {
    fnct();
  }, []);
  let token = localStorage.getItem('Token');
  if (token==null) {
    nav('/Login');
  }else if (token !=null) {
    
  return (
    <>
      <div className="favtitre">
        <h2>Vos Favoris</h2>
        <p>
          Découvrez vos Coups de Cœur Automobiles! Parcourez notre sélection
          personnalisée des véhicules qui correspondent à vos critères et
          préférences. Des choix qui vous séduiront à coup sûr!"
        </p>
      </div>
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {annonce.map(function (a, index, array) {
                console.log(a)
        return (
          <>
            <div className="col mb-5" key={a}>
              <div className="card h-100">
                <div
                  className="badge bg-dark text-white position-absolute"
                  style={{ top: " 0.5rem", right: " 0.5rem" }}
                >    
                </div>
                <img
                  className="card-img-top"
                  src={a.photos.length >0 ? a.photos[0].url : ""}
                  
                  alt="..."
                />
                
                <div className="card-body p-4">
                  <div className="text-center">
                    <h5 className="fw-bolder">{a.voiture.modele}</h5>
                    <div className="d-flex justify-content-center small text-warning mb-2">
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                    </div>        
                    {a.prix}
                  </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    <NavLink to={"/Details/"+a.id_annonce}>
                      Voir plus
                      </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}

                         </div>
            </div>
      </section>
    </>
  );
  }
  
}

export default Annonce;
