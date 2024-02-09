import React, {  useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../Assets/css/Annonce.css";
// import logofoot from "../Assets/img/logo1.jpg"

function Recherche() {
  const nav = useNavigate();
  // const history = useHist();
  const [annonce, setAnnonce] = useState<any[]>([]);
  const test = useState(false)
  let token = localStorage.getItem("Token");
//   console.log(token)
  if (token == null) {
    nav("/Login");
  }
    
    let [categorie, setCategorie] = useState<any[]>([]);
    let [marque, setMarque] = useState<any[]>([]);
    let [energie, setEnergie] = useState<any[]>([]);
    let [vitesse, setVitesse] = useState<any[]>([]);
    // let recher = useState(false);
    const fnct = async () => {
        if (test===false) {
            let url =
            "https://buycarwebservice-production.up.railway.app/annonce/list";
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
        //   // if(response.status)
        //   console.log(response.object[0].photos[0].url);
        //   console.log(response.status);
        }
      let token = localStorage.getItem("Token");
      console.log("tok :" + token);
      let response1 = await fetch(
        "https://buycarwebservice-production.up.railway.app/categorie/list",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        }
      );
      response1 = await response1.json();
      setCategorie(response1.object);
  
      let response2 = await fetch(
        "https://buycarwebservice-production.up.railway.app/marque/list",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        }
      );
      response2 = await response2.json();
      setMarque(response2.object);
  
      let response3 = await fetch(
        "https://buycarwebservice-production.up.railway.app/energie/list",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        }
      );
      response3 = await response3.json();
      setEnergie(response3.object);
  
      let response4 = await fetch(
        "https://buycarwebservice-production.up.railway.app/boite_vitesse/list",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        }
      );
      response4 = await response4.json();
      setVitesse(response4.object);
    };
  
    // useEffect(() => {
      fnct();
    // }, []);
//     let url =
//       "https://buycarwebservice-production.up.railway.app/annonce/listfavoris";
//     // let token = localStorage.getItem("Token");
//     // console.log("tok :" + token);
//     let response = (await fetch(url, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: "Bearer " + token,
//       },
//       body: JSON.stringify(token),
//     })) as any;

//     console.log(response);
//     if (response.ok) {
//       response = await response.json();
//       setAnnonce(response.object);
//       // if(response.status)
//       console.log(response.object[0].photos[0].url);
//       console.log(response.status);
//     }
//   };

//   useEffect(() => {
//     fnct();
//   }, []);

  if (token != null) {
    return (
      <>
        {/* <div className="favtitre"> */}
        <div className="recherchee">
          {/* <p>jhdkzhd</p> */}
          <div className="titreCont">
            <p>Trouvez votre voiture</p>
          </div>
          <div className="selectCat">
            <div>
          <p>
                  Categorie :{" "}
                  <select className="inputtxt" id="categorie">
                    <option value={0}>Tous</option>
                    {categorie.map(function (one, index, array) {
                      return (
                        <>
                          <option value={one.id_categorie}>
                            {one.libelle}
                          </option>
                        </>
                      );
                    })}
                  </select>
                </p>
                </div>
                <div>
                <p>
                  Marque :{" "}
                  <select className="inputtxt" id="marque">
                    <option value={0}>Tous</option>
                    {marque.map(function (one, index, array) {
                      return (
                        <>
                          <option value={one.id_marque}>{one.libelle}</option>
                        </>
                      );
                    })}
                  </select>
                </p>
                </div>
                <div>
                <p>
                  Boite de vitesse :{" "}
                  <select className="inputtxt" id="vitesse">
                    <option value={0}>Tous</option>
                    {vitesse.map(function (one, index, array) {
                      return (
                        <>
                          <option value={one.id_boite_vitesse}>
                            {one.libelle}
                          </option>
                        </>
                      );
                    })}
                  </select>
                </p>
                </div>
                <div>
                <p>
                  Energie :{" "}
                  <select className="inputtxt" id="energie">
                    <option value={0}>Tous</option>
                    {energie.map(function (one, index, array) {
                      return (
                        <>
                          <option value={one.id_energie}>{one.libelle}</option>
                        </>
                      );
                    })}
                  </select>
                </p>
                </div>
                <div>
                <h2>Prix</h2>
                <p>Min{" "}
                  <input type="number"defaultValue={0} id="pmin" />
                </p>
                <p>Max{" "}
                  <input type="number" defaultValue={0} id="pmax"/>
                </p>
                </div>
                <div>
                <h2>Consommation</h2>
                <p>Min{" "}
                  <input type="number" defaultValue={0} id="cmin"/>
                </p>
                <p>Max{" "}
                  <input type="number" defaultValue={0} id="cmax"/>
                </p>
                </div>
                <div className="rech" onClick={async ()=>{
                  let cat = document.getElementById('categorie');
                  let mar = document.getElementById('marque');
                  let en = document.getElementById('energie');
                  let v = document.getElementById('vitesse');
                  let pmin = document.getElementById('pmin');
                  let pmax = document.getElementById('pmax');
                  let cmin = document.getElementById('cmin');
                  let cmax = document.getElementById('cmax');
            
                  let obj ={
                    motCle:null,
                    date:null,
                    idCategiorie:cat.value,
                    prixMin:pmin.value,
                    prixMax:pmax.value,
                    idMarque:mar.value,
                    idEnergie:en.value,
                    idBoiteVitesse:v.value,
                    consoMin:cmin.value,
                    consoMax:cmax.value
                  }
                  let rep = await fetch(
                      "https://buycarwebservice-production.up.railway.app/annonce/rechercher",
                      {
                        method: "POST",
                        headers: {
                          "Content-Type": "application/json",
                          // Authorization: "Bearer " + token,
                        },
                        body:JSON.stringify(obj)
                      }
                    );
                    rep = await rep.json();
                    setAnnonce(rep.object)
                    // localStorage.setItem("recherche",JSON.stringify(rep.object));
                    // console.log("kjhkjfhfjhqk "+ rep.status);
                    // console.log("kjhkjfhfjhqk "+ rep.details);
                    // let r = localStorage.getItem("recherche")
                    // console.log('sjhdjskdhkhdksh' + r)

                }
                  
                }>
                  Rechercher
                </div>

          </div>
        </div>
        {/* </div> */}
        <section className="py-5">
          <div className="container px-4 px-lg-5 mt-5">
            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
              {annonce.map(function (a, index, array) {
                console.log(a);
                return (
                  <>
                    <div className="col mb-5" key={a}>
                      <div className="card h-100">
                        <div
                          className="badge bg-dark text-white position-absolute"
                          style={{ top: " 0.5rem", right: " 0.5rem" }}
                        ></div>
                        <img
                          className="card-img-top"
                          src={a.photos.length > 0 ? a.photos[0].url : ""}
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
                            <NavLink to={"/Details/" + a.id_annonce}>
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

export default Recherche;
