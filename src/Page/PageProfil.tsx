import React from "react";
import MyHeader from "../Component/MyHeader.tsx";
import MyFooter from "../Component/MyFooter.tsx";
import Profil from "../Component/Profil.tsx";

class PageProfil extends React.Component{
    render() {
        return (
            <>
            <MyHeader></MyHeader>
            <Profil></Profil>
            <MyFooter></MyFooter>
            </>
        );
    }
}

export default PageProfil;

