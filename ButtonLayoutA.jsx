import styled from "styled-components";
import ButtonA from "./ButtonA";
import ButtonA1 from "./OutlineButtonA";
const Div = styled.div`
  display: flex;
  gap: 12px;
  margin: 12px;
`;
const ButtonLayoutA = () => {
  return (
    <Div>
      <ButtonA color="white" background="blue">
        blue
      </ButtonA>

      <ButtonA color="white" background="pink">
        pink
      </ButtonA>

      <ButtonA1 outline={true}>outline</ButtonA1>
      <ButtonA1 outline={false}>Without outline</ButtonA1>
    </Div>
  );
};

export default ButtonLayoutA;
