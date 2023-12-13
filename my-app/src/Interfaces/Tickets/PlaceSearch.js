import React, { useEffect, useState } from "react";
import "./PlaceSearch.css";
const { kakao } = window;

const PlaceSearch = ({ searchPlace, onPlaceClick }) => {
  const [Places, setPlaces] = useState([]);
  //   console.log("Place search : ", searchPlace);
  const [isActive, setIsActive] = useState(true);
  useEffect(() => {
    const ps = new kakao.maps.services.Places();

    ps.keywordSearch(searchPlace, placesSearchCB);

    function placesSearchCB(data, status, pagination) {
      if (status === kakao.maps.services.Status.OK) {
        setPlaces(data);
      }
    }
  }, [searchPlace]);
  console.log(Places);

  const handleItemClick = (placeName) => {
    onPlaceClick(placeName);
    setIsActive(false);
  };

  return (
    <div>
      {isActive ? (
        <div className="result-list">
          {Places.slice(0, 3).map((item, i) => (
            <div key={i} style={{ marginTop: "0px" }} onClick={() => handleItemClick(item.place_name)}>
              {/* <span>{i + 1}</span> */}
              <div>
                <h4>{item.place_name}</h4>
                {item.road_address_name ? (
                  <div>
                    <span>{item.road_address_name}</span>
                    <span>{item.address_name}</span>
                  </div>
                ) : (
                  <span>{item.address_name}</span>
                )}
              </div>
              <div className="h-line"></div>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default PlaceSearch;
