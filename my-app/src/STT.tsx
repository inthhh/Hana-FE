import React, { useState, useEffect } from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";

const STT: React.FC = () => {
  const { transcript, listening, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition();

  const [scrollState, setScrollState] = useState(0);
  const word = transcript.split(" ");

  //   console.log(transcript);

  //   const prevButton = () => {
  //     if (scrollState === 0) {
  //       setScrollState(imageList.length - 1);
  //     } else {
  //       setScrollState(scrollState - 1);
  //     }
  //   };

  //   const nextButton = () => {
  //     if (scrollState === imageList.length - 1) {
  //       setScrollState(0);
  //     } else {
  //       setScrollState(scrollState + 1);
  //     }
  //   };

  const checking = () => {
    console.log("인식된 문장 : ", word[word.length - 1]);
    // setSpeakWords(word[word.length - 1]);
  };

  useEffect(() => {
    if (browserSupportsSpeechRecognition) checking();
  }, [transcript]);

  if (!browserSupportsSpeechRecognition) {
    return <span>브라우저가 음성 인식을 지원하지 않습니다.</span>;
  }

  return (
    <div>
      <h1 style={{ marginTop: "30px" }}>STT(한국어)</h1>
      <p>마이크 : {listening ? "on" : "off"}</p>
      <button onClick={() => SpeechRecognition.startListening({ continuous: true, language: "ko" })}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      <p>
        인식된 문장 : <br />"{transcript}"
      </p>
    </div>
  );
};

export default STT;
