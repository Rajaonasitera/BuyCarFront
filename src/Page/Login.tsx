import React from "react";
import "../Assets/css/Login.css"
import sary from "../Assets/img/eduardo-flores-xpcUYaZtplI-unsplash.jpg";
import { useNavigate } from "react-router-dom";
// import { useHistory } from "react-router";
function Login() {
  const nav = useNavigate();
  // const history = useHistory();
    return(
        <>
<section className="text-center text-lg-start">

  <div className="container py-4">
    <div className="row g-0 align-items-center">
      <div className="col-lg-6 mb-5 mb-lg-0">
        <div className="card cascading-right">
          <div className="card-body p-5 shadow-5 text-center">
            <h2 className="fw-bold mb-5">Connectez vous</h2>
            {/* <form> */}
              

              <div className="form-outline mb-4">
                <input type="email" id="email" className="form-control" name="email" value={"jean@gmail.com"}/>
                <label className="form-label" for="form3Example3" >Email</label>
              </div>

              <div className="form-outline mb-4">
                <input type="password" id="password" className="form-control" value={"1234"} name="password"/>
                <label className="form-label" htmlFor="form3Example4" >Mots de passe</label>
              </div>
              <div className="form-check d-flex justify-content-center mb-4">
                {/* <input className="form-check-input me-2" type="checkbox" value="" id="form2Example33" checked /> */}
                <label className="form-check-label labmdp" for="form2Example33">
                  Mots de passe oublié

                </label>
              </div>

              <button  type="submit" className="btn btn-primary btn-block mb-4 bttLog" 
              onClick={async () => {
                var email = document.getElementById("email");
                var password = document.getElementById("password");
                let auth = {
                  email: email.value,
                  password: password.value,
                };
                console.log(auth);
                let url =
                  "https://buycarwebservice-production.up.railway.app/auth/authenticate";
                let response = await fetch(url, {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(auth),
                });
                response = await response.json();
                console.log(response);
                console.log("Token :"+response.token);
                if (response.status === "ok") {
                  localStorage.setItem("Token", response.object.token);
                  nav("/");
                  // window.location.href = "/Annonce";
                } else {
                  nav("/Login");
                  // window.location.href = "/";
                }
              }}>
                Connexion
              </button>
              <button  type="submit" className="btn btn-primary btn-block mb-4 bttLog" 
              onClick={async () => {
                nav("/")
              }}>
              Retour
            </button>
            {/* </form> */}
          </div>
        </div>
      </div>

      <div className="col-lg-6 mb-5 mb-lg-0">
        <img src={sary} className="w-100 rounded-4 shadow-4"
          alt="" />
      </div>
    </div>
  </div>
</section>
        	
    </>
    )
}
export default Login;