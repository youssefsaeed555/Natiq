import axios from "axios";
import React, { useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import styles from "./natiq.module.css";
import Loader from "../../components/shared/Loader";
import Buttons from "../../components/shared/Buttons";
const BaseUrl = "https://echo-6sdzv54itq-uc.a.run.app";

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
    setButtonClicked(true);

    const textData = text;
    const words = textData.split(" ");
    const lastWord = words[words.length - 1];
    const repeatedLastWord = `${lastWord} ${lastWord}`;
    const finalAudioData = `${text} ${repeatedLastWord}`;

    try {
      const { data } = await axios.post(`${BaseUrl}/natiq`, {
        text: finalAudioData,
      });
      const audioData = data.wave.replace(/-/g, "+").replace(/_/g, "/");
      setAudioURL(audioData);
      ref.current.disabled = true;
      setLoading(false);
    } catch (err) {
      setLoading(false);
      if (err?.message) {
        toast.error(err.message);
      }
      if (err.response?.data) {
        toast.error(err.response.data.description);
      }
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
              <Buttons
                style={"flex gap-2"}
                children={<Loader></Loader>}
                text={"تحميل"}
              />
            ) : (
              <Buttons
                onClickHandler={callNatiq}
                disabled={text === "" || buttonClicked}
                children={<i className="fa-solid fa-play"></i>}
                text={"استماع"}
              />
            )}
            <span>متوفر باللغه العربيه فقط</span>
            <Buttons
              onClickHandler={remove}
              children={<i className="fa-solid fa-rotate-right"></i>}
              text={"تجربه اخري"}
              type="reset"
            />
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
