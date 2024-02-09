// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Test from './Test.tsx';
import Accueil from './Page/Accueil.tsx';
import Login from './Page/Login.tsx';
import Annonce from './Page/PageAnnonce.tsx';
import PageDetails from './Page/PageDetails.tsx';
import PageProfil from './Page/PageProfil.tsx';
import PageChat from './Page/PageChat.tsx';
import PageHistorique from './Page/PageHistorique.tsx';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     {/* <img src={logo} className="App-logo" alt="logo" /> */}
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accueil />}/>
        <Route path="/Login" element={<Login />}/>
        <Route path="/Annonce" element={<Annonce />}/>
        <Route path="/PageDetails" element={<PageDetails />}/>
        <Route path="/Details/:id" element={<PageDetails />}/>
        <Route path="/Profil" element={<PageProfil />}/>
        <Route path="/Chat" element={<PageChat />}/>
        <Route path="/Historique" element={<PageHistorique />}/>
          {/* <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
    // <Routes> 
    //     <Route path="/" element={<test/>}/>
    // </Routes>
  );
}

export default App;
