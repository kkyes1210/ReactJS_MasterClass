import { useParams } from "react-router";
import { useLocation } from "react-router";
import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.span`
  text-align: center;
  display: block;
`;

interface RouteState {
  state: {
    name: string;
  };
}

//원한다면 link를 통해서 다른 화면에 정보를 보낼 수 도 있음 (state)
function Coin() {
  const { coinId } = useParams();
  const [loading, setLoading] = useState(true);
  //const location = useLocation();
  //console.log(location);
  const { state } = useLocation() as RouteState;
  //console.log(state);

  return (
    <Container>
      <Header>
        <Title>{state?.name || "Loading.."}</Title>
      </Header>
      {loading ? <Loader>Loading...</Loader> : null}
    </Container>
  );
}

export default Coin;
