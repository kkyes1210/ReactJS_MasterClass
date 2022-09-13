import { DefaultTheme } from "styled-components";

//Recoil은 React JS에서 사용할 수 있는 state management library
//왜 state management가 필요한지 알기 위해 우선 Recoil을 사용하지 않고 만들어 볼 것임.

export const darkTheme: DefaultTheme = {
  bgColor: "#2f3640",
  textColor: "white",
  accentColor: "#4cd137",
  cardBgColor: "transparent",
};

export const lightTheme: DefaultTheme = {
  bgColor: "whitesmoke",
  textColor: "black",
  accentColor: "#4cd137",
  cardBgColor: "white",
};
