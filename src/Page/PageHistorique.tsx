import React from "react";
import MyHeader from "../Component/MyHeader.tsx";
import MyFooter from "../Component/MyFooter.tsx";
import Historique from "../Component/Historique.tsx";
class PageHistorique extends React.Component{
    render() {
        return (
            <>
            <MyHeader></MyHeader>
            <Historique></Historique>
            <MyFooter></MyFooter>
            </>
        );
    }
}

export default PageHistorique;

