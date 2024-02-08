import React  from "react";
import MyHeader from "../Component/MyHeader.tsx";
import Annonce from "../Component/Annonce.tsx";
import MyFooter from "../Component/MyFooter.tsx";
class PageAnnonce extends React.Component{
    render() {
        return (
            <>
            <MyHeader></MyHeader>
            <Annonce></Annonce>
            <MyFooter></MyFooter>
            </>
        );
    }
}

export default PageAnnonce;

