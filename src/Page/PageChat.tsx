import React from "react";
import MyHeader from "../Component/MyHeader.tsx";
import MyFooter from "../Component/MyFooter.tsx";
import Chat from "../Component/Chat.tsx";
class PageChat extends React.Component{
    render() {
        return (
            <>
            <MyHeader></MyHeader>
            <Chat></Chat>
            <MyFooter></MyFooter>
            </>
        );
    }
}

export default PageChat;

