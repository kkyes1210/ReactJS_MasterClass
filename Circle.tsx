import { useState } from "react";
import styled from "styled-components";

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 100px;
  border: 1px solid ${(props) => props.borderColor};
`;

interface CircleProps {
  bgColor: string;
  borderColor?: string;
  text?: string;
}

interface ContainerProps {
  bgColor: string;
  borderColor: string;
}

function Circle({ bgColor, borderColor, text = "default text" }: CircleProps) {
  //대부분의 경우 useState(0) 안에 있는 데이터 타입으로 쭉 가게 된다. 하지만 타입 지정도 가능
  //== Typescript를 쓰지 않았더라도 dafault 값으로 어떤 타입을 쓸건지 알 수 있다.
  const [value, setValue] = useState<number | string>(1);
  setValue(1);
  setValue("hello");
  //setvalue(true) ==> 에러
  return (
    <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>
      {text}
    </Container>
  );
}

export default Circle;
