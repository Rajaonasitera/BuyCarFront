import React, { FunctionComponent } from "react";
import MyHeader from "../Component/MyHeader.tsx";
import MyFooter from "../Component/MyFooter.tsx";
import Details from "../Component/Details.tsx";
class PageDetails extends React.Component{
    render() {
        return (
            <>
            <MyHeader></MyHeader>
            <Details></Details>
            <MyFooter></MyFooter>
            </>
        );
    }
}

export default PageDetails;

