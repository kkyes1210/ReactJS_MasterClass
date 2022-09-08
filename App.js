import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;

//1. 컴포넌트의 태그를 바꾸고 싶은데 스타일은 바꾸고 싶지 않을때
const Btn = styled.button`
  color: white;
  background-color: tomato;
  border: 0;
  border-radius: 15px;
`;
//컴포넌트 타입은 button이므로 적절하지 않음
//const Link = styled(Btn);

//2. 컴포넌트를 생성할 때, 속성값을 설정할 수 있게 해줌
//그렇지 않으면, 코드는 불필요하게 길게 작성이 될것
//<input required/>
//<input required/>
//<input required/>
//<input required/>
const Input = styled.input.attrs({ required: true, minLength: "10" })`
  background-color: tomato;
`;

function App() {
  return (
    <Father>
      <Btn>Log in</Btn>
      <Btn as="a" href="/">
        Log in
      </Btn>
      <Input />
      <Input />
      <Input />
      <Input />
    </Father>
  );
}

export default App;
