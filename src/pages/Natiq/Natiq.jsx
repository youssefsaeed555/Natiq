import axios from "axios";
import React, { useState, useRef } from "react";
import { CirclesWithBar } from "react-loader-spinner";
import styles from "./natiq.module.css";
import { ToastContainer, toast } from "react-toastify";

function Natiq() {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [audioURL, setAudioURL] = useState("");
  const [buttonClicked, setButtonClicked] = useState(false);
  const ref = useRef();

  const remove = () => {
    setAudioURL("");
    setText("");
    ref.current.disabled = false;
    setButtonClicked(false);
    setLoading(false);
  };

  const callNatiq = async () => {
    setLoading(true);
    const textData = text;
    // Get the last word from the input text
    const words = textData.split(" ");
    const lastWord = words[words.length - 1];
    const repeatedLastWord = `${lastWord} ${lastWord}`;

    // Combine the original audio data with the repeated words
    const finalAudioData = `${text} ${repeatedLastWord}`;
    var formdata = { text: finalAudioData };
    setButtonClicked(true);

    try {
      const { data } = await axios.post(
        "https://echo-6sdzv54itq-uc.a.run.app/natiq",
        formdata
      );
      const audioData = data.wave.replace(/-/g, "+").replace(/_/g, "/");
      setAudioURL(audioData);
      ref.current.disabled = true;
      setLoading(false);
    } catch (err) {
      setLoading(false);
      toast.error(err.response.data.description);
    }
  };

  const handleKeyDown = (e) => {
    const inputValue = e.target.value;
    const arabicPattern = /^[\u0600-\u06FF\s]*$/;

    if (
      ((inputValue !== "" && !arabicPattern.test(e.key)) ||
        (inputValue === "" && !arabicPattern.test(e.key))) &&
      e.key !== "Backspace"
    ) {
      e.preventDefault();
    }
  };

  return (
    <div className={`${styles.natiqPage}`}>
      <h2 className={`${styles.natiqHeading}`}>جرب نَاطِقٌ</h2>
      <div className={`${styles.natiq}`}>
        <div className={`container ${styles.container}`}>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            ref={ref}
            placeholder="اكتب ماتريد ان تسمع"
            className={`${styles.natiqText}`}
            onKeyDownCapture={(e) => handleKeyDown(e)}
          />
          <div className={`${styles.buttons}`}>
            {loading ? (
              <button className="flex gap-2">
                <CirclesWithBar
                  height="30"
                  width="30"
                  color="white"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                  outerCircleColor=""
                  innerCircleColor=""
                  barColor=""
                  ariaLabel="circles-with-bar-loading"
                />
                تحميل
              </button>
            ) : (
              <button
                onClick={callNatiq}
                disabled={text === "" || buttonClicked}
              >
                <i className="fa-solid fa-play"></i>
                استماع
              </button>
            )}

            <span>متوفر باللغه العربيه فقط</span>
            <button type="reset" onClick={remove}>
              <i className="fa-solid fa-rotate-right"></i>
              تجربه اخري
            </button>
          </div>
          <div className={`${styles.audio}`}>
            {audioURL && (
              <audio controls autoPlay>
                <source
                  src={`data:audio/wav;base64,${audioURL}`}
                  type="audio/wav"
                />
                Your browser does not support the audio element.
              </audio>
            )}
          </div>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default Natiq;
