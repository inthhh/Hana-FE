import React, { useState } from "react";
import "../Main.css";
import { useNavigate } from "react-router-dom";
import Hanaboy from "../../imgs/hanaBoy.png";

function Ticket1() {
  const navigate = useNavigate();
  const handleToBefore = () => {
    navigate("/");
  };
  const handleToAfter = () => {
    navigate("/Ticket_ok");
  };
  const handleToAnother = () => {
    navigate("/Ticket_a1");
  };
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center", fontSize: "35px", lineHeight: "1.3" }}
    >
      <div style={{ margin: "40px 0" }}>
        가장 가까운 지점은
        <br />
        <div style={{ display: "flex" }}>
          <div
            style={{
              color: "#008485",
              background: "#DDEBEB",
              border: "1px solid #B3B3B3",
              borderRadius: "10px",
              padding: "0 5px",
            }}
          >
            여의도점
          </div>{" "}
          입니다.
        </div>
      </div>
      <div>
        번호표를
        <br />
        <div style={{ display: "flex" }}>
          <div style={{ color: "#008485" }}>발급</div>하시겠습니까?
        </div>
      </div>
      <div style={{ display: "flex", marginTop: "20px" }}>
        <div className="ticket_yesno" onClick={handleToBefore}>
          아니오
        </div>
        <div className="ticket_yesno" onClick={handleToAfter}>
          예
        </div>
      </div>
      <img src={Hanaboy} width={"150px"} />
      <div className="buttonContainer">
        {/* <div className="beforebtn" onClick={handleToBefore}>
          &lt; 이전
        </div> */}
        <div className="afterbtn" onClick={handleToAnother} style={{ width: "100%" }}>
          다른 지점 선택하기 &gt;
        </div>
      </div>
    </div>
  );
}

export default Ticket1;
