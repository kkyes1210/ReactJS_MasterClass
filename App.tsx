import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { hourSelector, minuteState } from "./atoms";

function App() {
  //minutes은 atoms에서 선언한 것처럼 number타입이지만(default:0)
  //setMinutes에서 넘어오는 값은 string (event.currentTarget.value)
  //+를 붙여주는데, string을 number로 바꿔준다.
  const [minutes, setMinutes] = useRecoilState(minuteState);
  const hours = useRecoilValue(hourSelector);
  const onMinutesChange = (event: React.FormEvent<HTMLInputElement>) => {
    setMinutes(+event.currentTarget.value);
  };
  return (
    <div>
      <input
        value={minutes}
        onChange={onMinutesChange}
        type="number"
        placeholder="Minutes"
      />
      <input value={hours} type="number" placeholder="Hours" />
    </div>
  );
}
//hours input에 onChangeEvent가 없어서 값을 읽기만 가능
//현재코드를 실행하면 input이 읽기전용이라는 에러가 난다. (다음시간에 수정)

export default App;
