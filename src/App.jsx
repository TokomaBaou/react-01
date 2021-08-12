import React, { useState, useEffect } from "react";
import { ColorfulMessage } from "./compornents/colorfulMessage";

const App = () => {
  //ステートの変数名とステートを更新する関数名
  const [num, setNum] = useState(0);
  const [showFaceFlag, setshowFaceFlag] = useState(true);

  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwitchShowFlag = () => {
    setshowFaceFlag(!showFaceFlag);
  };

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        showFaceFlag || setshowFaceFlag(true);
      } else {
        showFaceFlag && setshowFaceFlag(false);
      }
    }
  }, [num]);

  return (
    //画面がレンダリングされる
    <>
      <h1 style={{ color: `red` }}>こんにちは</h1>
      <ColorfulMessage color="blue">いかがお過ごしですか？</ColorfulMessage>

      <ColorfulMessage color="pink">元気です！</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {showFaceFlag && <p>😆</p>}
    </>
  );
};

export default App;
