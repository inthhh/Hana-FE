import React, { useState } from "react";
import "../Main.css";
import HanaGirl from "../../imgs/효녀하나.png";

function SendFinal() {
  return (
    <div>
      <div>송금을 완료했어요.</div>
      <img src={HanaGirl} style={{ width: "200px" }} />
      <div>
        OOO님에게
        <br />
        OOO원 보내기 완료
      </div>
    </div>
  );
}

export default SendFinal;
