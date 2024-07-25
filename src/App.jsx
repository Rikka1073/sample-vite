import { useState } from "react";
import "./App.css";

function App() {
  const [studyText, setStudyText] = useState("");
  const [studyTime, setStudyTime] = useState("");
  const [record, setRecord] = useState([]);
  const [error, setError] = useState([]);
  const [time, setTime] = useState([]);

  const onChangeText = (event) => {
    setStudyText(event.target.value);
  };

  const onChangeTime = (event) => {
    setStudyTime(event.target.value);
  };

  const onClickAddTodo = () => {
    if (studyText === "" || studyTime === "") {
      const errorword = "入力されていない項目があります";
      !error.includes(errorword) && setError([...error, errorword]);
      return;
    } else {
      const newRecord = { title: studyText, time: parseInt(studyTime) };
      const newRecords = [...record, newRecord];
      const sumTim = [...time, newRecord.time];
      setRecord(newRecords);
      setStudyText("");
      setStudyTime("");
      setError([]);
      setTime(sumTim);
    }
  };

  const totalTime = time.reduce((totalTime, currentTime) => {
    return totalTime + currentTime;
  }, 0);

  return (
    <div className="App">
      <h1>学習記録一覧</h1>
      <div>
        学習内容
        <input type="text" onChange={onChangeText} value={studyText} />
      </div>
      <div>
        学習時間
        <input type="text" onChange={onChangeTime} value={studyTime} />
        時間
      </div>
      <div>
        <p>入力されている学習内容 {studyText}</p>
      </div>
      <div>
        <p>入力されている時間 {studyTime}時間</p>
      </div>
      <div>
        {record.map((record, index) => {
          return (
            <div className="" key={index}>
              <p>
                {record.title} {record.time}時間
              </p>
            </div>
          );
        })}
      </div>
      <div>
        <div></div>
      </div>
      <button onClick={onClickAddTodo}>登録</button>
      <div>
        <p>{error}</p>
      </div>
      <div>
        <p>合計時間:{totalTime}/1000（h）</p>
      </div>
    </div>
  );
}

export default App;
