import React from "react";
import MyHeader from "../Component/MyHeader.tsx";
import AccueilContenue from "../Component/AccueilContenue.tsx";
import MyFooter from "../Component/MyFooter.tsx";

class Accueil extends React.Component{
    render() {
        return (
            <>
            <MyHeader></MyHeader>
            <AccueilContenue></AccueilContenue>
            <MyFooter></MyFooter>
            </>
        );
    }
}

export default Accueil;

