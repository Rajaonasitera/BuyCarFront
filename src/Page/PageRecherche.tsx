import React from "react";
import MyHeader from "../Component/MyHeader.tsx";
import MyFooter from "../Component/MyFooter.tsx";
import Recherche from "../Component/Recherche.tsx";

class PageRecherche extends React.Component{
    render() {
        return (
            <>
            <MyHeader></MyHeader>
            <Recherche></Recherche>
            <MyFooter></MyFooter>
            </>
        );
    }
}

export default PageRecherche;
