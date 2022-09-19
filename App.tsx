import styled from "styled-components";
import { motion, useMotionValue } from "framer-motion";
import { useEffect, useRef } from "react";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

//Box를 움직여도, 컴포넌트는 재랜더링 되고 있지 않음 => useEffect 사용
function App() {
  const x = useMotionValue(0);
  useEffect(() => {
    x.onChange(() => console.log(x.get()));
  }, [x]);

  return (
    <Wrapper>
      <button onClick={() => x.set(200)}>click me</button>
      <Box drag="x" dragSnapToOrigin style={{ x }} />
    </Wrapper>
  );
}
export default App;
