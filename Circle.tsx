import styled from "styled-components";

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 100px;
  border: 1px solid ${(props) => props.borderColor};
`;

interface CircleProps {
  bgColor: string; //required
  borderColor?: string; //optional ==> undefined 될 수 있음.
  text?: string;
}

interface ContainerProps {
  bgColor: string;
  borderColor: string;
}

//원한다면 default 값을 argument에서 설정 가능: text 참고
function Circle({ bgColor, borderColor, text = "default text" }: CircleProps) {
  return (
    <Container
      bgColor={bgColor}
      //CircleProps에서는 borderColor가 optional한데 ContainerProps에서는 require ==> 오류가 뜬다.
      //이 때 초기값을 주는 것. 만약 undefined된 상태라면 다른 값을 보낸다 (?? 뒤에 입력 == bgColor)
      borderColor={borderColor ?? bgColor}
    >
      {text}
    </Container>
  );
}

export default Circle;
