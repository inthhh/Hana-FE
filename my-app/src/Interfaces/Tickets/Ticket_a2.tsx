import React, { useState } from "react";
import "../Main.css";
import { useNavigate } from "react-router-dom";
import Hanaboy from "../../imgs/hanaBoy.png";
import { useDispatch, useSelector } from "react-redux";
import { setTicketWhere } from "../../redux/store";

function Ticket_a2() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const ticketWhere = useSelector((state: any) => state.ticketWhere);

  const handleToBefore = () => {
    navigate("/Ticket_a1");
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
        선택하신 지점은
        <br />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div
            style={{
              color: "#008485",
              background: "#DDEBEB",
              border: "1px solid #B3B3B3",
              borderRadius: "10px",
              padding: "0 5px",
            }}
          >
            {ticketWhere}
          </div>{" "}
          입니다.
        </div>
      </div>
      <div style={{ display: "flex", marginTop: "10px" }}>
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

export default Ticket_a2;
