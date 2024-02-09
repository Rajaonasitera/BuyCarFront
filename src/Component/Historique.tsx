import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Assets/css/Historique.css";
// import logofoot from "../Assets/img/logo1.jpg"

function Historique() {
  const nav = useNavigate();
  // const history = useHist();
  const [annonce, setAnnonce] = useState<any[]>([]);
  let token = localStorage.getItem("Token");
  console.log(token);
  if (token == null) {
    nav("/Login");
  }
  const fnct = async () => {
    let obj = {
        "token":token
    }
    let url =
      "https://webservicevoiture-production.up.railway.app/historique/list";
    // let token = localStorage.getItem("Token");
    // console.log("tok :" + token);
    let response = (await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify(obj),
    })) as any;

    console.log(response);
    if (response.ok) {
      response = await response.json();
      setAnnonce(response.object);
      // if(response.status)
    //   console.log(response.object[0].photos[0].url);
      console.log(response.status);
    }
  };

//   useEffect(() => {
    fnct();
//   }, []);

  if (token != null) {
    return (
      <>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Historique de vos annonces</h5>
            <p>Découvrez l'historique complet de nos annonces.</p>

            <table className="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">Date annonce</th>
                  <th scope="col">Date modification</th>
                  <th scope="col">Status</th>
                  <th scope="col">Voiture</th>
                </tr>
              </thead>
              <tbody>
                {annonce.map(function (an, index, array) {
                    let status = "Non valider"
                    if (an.id_status===5) {
                        status = "Valider"
                    }
                    if (an.id_status===10) {
                        status = "Vendu"
                    }
                  return (
                    <>
                      <tr>
                        <th scope="row" key={an}>{an.date_annonce}</th>
                        <td>{an.date_modification}</td>
                        <td>{status}</td>
                        <td>{an.voiture.numero_matricule}</td>
                      </tr>
                    </>
                  );
                })}

               
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  }
}

export default Historique;
