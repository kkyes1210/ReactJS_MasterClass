import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
`;

const rotationAnimation = keyframes`
  0% {
    transform:rotate(0deg);
    border-radius:0px;
  }
  50% {
    transform:rotate(360deg);
    border-radius:100px;
  }
  100% {
    transform:rotate(0deg);
    border-radius:0px;
  }
`;

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  animation: ${rotationAnimation} 1s linear infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  //<span>☺</span>은 styled component 안에 있지 않음
  //Box안에 있는 span 선택할 수 있는 방법
  span {
    font-size: 36px;
    &:hover {
      font-size: 48px;
    }
    &:active {
      opacity: 0;
    }
  }
  //&:hover는 여기에서 span:hover와 뜻이 같음
`;

function App() {
  return (
    <Wrapper>
      <Box>
        <span>☺</span>
      </Box>
    </Wrapper>
  );
}

export default App;
