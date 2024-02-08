import React, { FunctionComponent } from "react";
import MyHeader from "./Component/MyHeader.tsx";

class Test extends React.Component {
  render() {
    return (
      <>
        <MyHeader></MyHeader>
        <p>Coucou</p>
      </>
    );
  }
}

export default Test;
