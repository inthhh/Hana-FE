import React, { useState } from "react";
import "../Main.css";
import { useNavigate } from "react-router-dom";
import Hanagirl from "../../imgs/hanaGirl.png";
import { useDispatch, useSelector } from "react-redux";
import { setTicketWhere } from "../../redux/store";
import PlaceSearch from "./PlaceSearch";

function Ticket_a1() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const ticketWhere = useSelector((state: any) => state.ticketWhere);

  const handleToBefore = () => {
    navigate("/Ticket1");
  };
  const handleToAfter = () => {
    navigate("/Ticket_a2");
  };

  const handleInputChange = (event: any) => {
    const inputValue = event.target.value;
    setQuery(inputValue);
    setSearchValue(inputValue);
    dispatch(setTicketWhere(inputValue)); // Redux 스토어에 값 저장
  };

  const [searchValue, setSearchValue] = useState("");
  const [query, setQuery] = useState("");
  const [places, setPlaces] = useState([]);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", fontSize: "35px" }}>
      <div className="ticketTop">
        <div>
          <div style={{ display: "flex" }}>
            <p style={{ color: "#008485" }}>원하시는 지점</p>을
          </div>
          입력해주세요
        </div>
      </div>
      <input
        type="text"
        value={ticketWhere}
        onChange={handleInputChange}
        placeholder="지점 입력하기"
        style={{
          left: "20px",
          marginBottom: "20px",
          width: "240px",
          height: "50px",
          fontSize: "30px",

          textAlign: "center",
          background: "#DDEBEB",
          borderRadius: "10px",
          stroke: "#B3B3B3",
        }}
      />
      {/* {searchValue ? (
        <PlaceSearch
          searchPlace={searchValue}
          setPlaces={setPlaces}
          onPlaceClick={(placeName: string) => setQuery(placeName)}
        />
      ) : null} */}
      <img src={Hanagirl} width={"180px"} />
      <div className="buttonContainer">
        <div className="beforebtn" onClick={handleToBefore}>
          &lt; 이전
        </div>
        <div className="afterbtn" onClick={handleToAfter}>
          다음 &gt;
        </div>
      </div>
    </div>
  );
}

export default Ticket_a1;
