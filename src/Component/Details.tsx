import React, {  useState } from "react";
// import popo from '../Assets/img/logo1.jpg';
import "../Assets/css/Details.css";
import { NavLink, useNavigate, useParams } from "react-router-dom";
// import { NavLink } from "react-router-dom";

function Details() {
  const [annonce, setAnnonce] = useState<any>();
  const [fetchOk, setFetchOk] = useState(false);
  const { id } = useParams();
  let nav = useNavigate()
  const fnct = async () => {
    let url =
      "https://webservicevoiture-production.up.railway.app/annonce/get/" + id;
    // let token = localStorage.getItem("Token");
    // console.log("tok :" + token);
    let response = (await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // Authorization: "Bearer " + token,
      },
    })) as any;
    response = await response.json();
    setAnnonce(response.object);
    setFetchOk(true);
    console.log(response.object);
    // if(response.status)
    // console.log(response.object[0].photos[0].url);
    // console.log(response.status);
  };

  // useEffect(() => {
    fnct();
  // }, []);
  return (
    <>
      {fetchOk === true && (
        <section className="py-5">
          <div className="container px-4 px-lg-5 my-5">
            <div className="row gx-4 gx-lg-5 align-items-center">
              <div className="col-md-6">
                {annonce.photos.map(function (photo, index, array) {
                  return (
                    <>
                      <img
                        key={photo}
                        className="card-img-top mb-5 mb-md-0"
                        src={photo.url}
                        alt="..."
                      />
                    </>
                  );
                })}
              </div>
              <div className="col-md-6">
                <div className="small mb-1">
                  <span className="titrekely">Modele : </span>
                  {annonce.voiture.modele}
                </div>
                <div className="small mb-1">
                  <span className="titrekely">Categorie : </span>
                  {annonce.voiture.categorie.libelle}
                </div>
                <div className="small mb-1">
                  <span className="titrekely">Marque : </span>
                  {annonce.voiture.marque.libelle}
                </div>
                <div className="small mb-1">
                  <span className="titrekely">Boite de vitesse : </span>
                  {annonce.voiture.boite_vitesse.libelle}
                </div>
                <div className="small mb-1">
                  <span className="titrekely">Moteur : </span>
                  {annonce.voiture.moteur}
                </div>
                <div className="small mb-1">
                  <span className="titrekely">Numero : </span>
                  {annonce.voiture.numero_matricule}
                </div>
                <div className="small mb-1">
                  <span className="titrekely">Consommation : </span>
                  {annonce.voiture.consommation}
                </div>
                <div className="small mb-1">
                  <span className="titrekely">Puissance : </span>
                  {annonce.voiture.puissance}
                </div>
                <div className="small mb-1">
                  <span className="titrekely">Energie : </span>
                  {annonce.voiture.energie.libelle}
                </div>
                <h1 className="display-5 fw-bolder"></h1>

                <h3>Description</h3>
                <p className="lead">{annonce.voiture.description}</p>
                <div className="fs-5 mb-5">
                  {/* <span  className="text-decoration-line-through">$45.00</span> */}
                  <span>{annonce.prix} Ar</span>
                </div>
                <div className="d-flex">
                  <input
                    className="form-control text-center me-3"
                    id="inputQuantity"
                    type="num"
                    value="1"
                    style={{ maxWidth: "3rem" }}
                  />
                  <button
                    className="btn btn-outline-dark flex-shrink-0"
                    type="button"
                  >
                    <i className="bi-cart-fill me-1"></i>
                    <NavLink to={"/Chat"}>Acheter</NavLink>
                  </button>
                  <button
                    className="btn btn-outline-dark flex-shrink-0"
                    type="button"
                    onClick={ async () => {
                        let token = localStorage.getItem('Token');
                        if (token==null) {
                            nav("/Login")
                        }

                        let obj = {
                          "object" : annonce.id_annonce,
                          "token" : token
                        }
                      let url =
                        "https://webservicevoiture-production.up.railway.app/annonce/favoris";
                      let response = await fetch(url, {
                        method: "POST",
                        headers: {
                          "Content-Type": "application/json",
                          Authorization: "Bearer " + token,
                        },
                        body:JSON.stringify(obj)
                      });
                      response = await response.json();
                      console.log(response.status)
                    }}
                  >
                    <i className="bi-cart-fill me-1"></i>
                    Ajouter au favoris
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default Details;
