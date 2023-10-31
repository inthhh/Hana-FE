import React, { useState, useEffect } from "react";
import { getSpeech } from "./getSpeech";

function TTS() {
  const [value, setValue] = useState("안녕하세요");

  //음성 변환 목소리 preload
  useEffect(() => {
    window.speechSynthesis.getVoices();
  }, []);

  const handleInput = (e: { target: { value: any } }) => {
    const { value } = e.target;
    setValue(value);
  };

  const handleButton = () => {
    getSpeech(value);
  };

  return (
    <div className="App">
      <div>
        {/* <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a> */}
      </div>
      <h1 style={{ marginTop: "30px" }}>TTS(한국어)</h1>
      <p>텍스트를 음성으로</p>
      <div className="box">
        <input onChange={handleInput} value={value} />
        <button onClick={handleButton}>음성 변환</button>
      </div>
    </div>
  );
}

export default TTS;
