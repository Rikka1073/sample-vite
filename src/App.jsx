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
    const newRecord = { title: studyText, time: studyTime };
    const newRecords = [...record, newRecord];
    const newTime = [...time, newRecord];
    setTime(newTime);
    console.log(newTime);
    if (studyText === "" || studyTime === "") {
      const errorword = "入力されていない項目があります";
      !error.includes(errorword) && setError([...error, errorword]);
      return;
    } else {
      setRecord(newRecords);
      setStudyText("");
      setStudyTime(0);
      setError([]);
    }
  };

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
        <p>合計時間:{time.time}/1000（h）</p>
      </div>
    </div>
  );
}

export default App;
