import styles from './Popup.module.css';
import { useState } from "react";
import Question from "../Question/Question";
import Post from "../Post/Post";

export default function Popup({ trigger, setTrigger }) {
  const [popupdata, setPopupData] = useState("question");

  return trigger ? (
    <div className={styles.Popup}>
      <i class="fa-solid fa-xmark" onClick={() => setTrigger(false)}></i>
      <div className={styles.linksDiv}>
        <div onClick={() => setPopupData("question")}>Add Question</div>
        <div onClick={() => setPopupData("post")}>Create Post</div>
      </div>
      {popupdata === "question" ? <Question /> : <Post />}
    </div>
  ) : (
    ""
  );
}
