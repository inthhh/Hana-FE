import React, { useState, useEffect } from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";

const STT: React.FC = () => {
  const { transcript, listening, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition();
  const [scrollState, setScrollState] = useState(0);
  const [guide, setGuide] = useState("");

  const word = transcript.split(" ");

  const checking = async () => {
    try {
      console.log("인식된 문장 : ", word[word.length - 1]);
      const response = await fetch("https://with-pet-be.org/api/voice", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userVoice: word[word.length - 1],
        }),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("API Response:", result);

        // Update state with the received guide value
        setGuide(result.data.guide);
        console.log(result.data.guide);
      } else {
        console.error("API Error:", response.statusText);
      }
    } catch (error) {
      console.error("API Error:");
    }
  };

  useEffect(() => {
    if (browserSupportsSpeechRecognition) checking();
  }, [transcript]);

  if (!browserSupportsSpeechRecognition) {
    return <span>브라우저가 음성 인식을 지원하지 않습니다.</span>;
  }

  return (
    <div>
      <div style={{ display: "flex", marginLeft: "100px" }}>
        <p style={{ fontSize: "10px", marginRight: "10px" }}>마이크 상태: {listening ? "on" : "off"}</p>

        <button onClick={() => SpeechRecognition.startListening({ continuous: true, language: "ko" })}>Start</button>
        <button onClick={SpeechRecognition.stopListening}>Stop</button>
      </div>
      {/* <p>인식된 문장 : {transcript}</p> */}
      {/* <p>가이드 값: {guide}</p> */}
    </div>
  );
};

export default STT;
