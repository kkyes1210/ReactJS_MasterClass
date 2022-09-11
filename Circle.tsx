import styled from "styled-components";

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 100px;
`;

//interface: 객체모양(object shape)을 TypeScript에게 설명해주는 TypeScript의 개념
//과거에는 const x = (a:number, b:number) => a+b
interface CircleProps {
  bgColor: string;
}

interface ContainerProps {
  bgColor: string;
}

function Circle({ bgColor }: CircleProps) {
  return <Container bgColor={bgColor}></Container>;
}

export default Circle;

//연습
interface PlayerShape {
  name: string;
  age: number;
}

const sayHello = (playerObj: PlayerShape) =>
  `Hello ${playerObj.name} you are ${playerObj.age} years old.`;

console.log(sayHello({ name: "kang", age: 32 }));

//Proptypes와 유사하지만,
//Interface는 Typescript와 코드가 실행되기 '전'에 확인해주는것
//PropTypes는 코드 실행 '후' 브라우저에 에러가 나타난다.
