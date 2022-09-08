import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "styled-components";

//theme이란, 기본적으로 모든 색상들을 가지고 있는 object

const darkTheme = {
  textColor: "whitesmoke",
  backgroundColor: "#111",
};

const lightTheme = {
  textColor: "#111",
  backgroundColor: "whitesmoke",
};

//Title이 App 컴포넌트 안에 있고, 이 App은 ThemeProvider 안에 있기 때문에
//내 Title이 Theme object에 접근해서 TextColor를 얻을 수 있음

//두개의 theme을 만들고, 이 두개의 theme이 동일한 property이름(ex: textColor, backgroundColor)을 갖고 있다면 theme을 전환해줄 때 component를 따로 바꿔줄 필요가 없다.
//==property 이름이 같기 때문

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={lightTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
