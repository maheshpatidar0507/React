import styled from "styled-components";

const Div = styled.div`
  display: flex;
  gap: 12px;
  margin: 12px;
`;

const ButtonA1 = ({
  children,
  color = "red",
  background = "black",
  outline,
}) => {
  console.log({ children, color, background });

  const btnStyle = {
    color,
    backgroundColor: background,
    cursor: "pointer",
    borderRadius: 5,
  };

  if (outline) {
    btnStyle["backgroundColor"] = "transparent";
    btnStyle["border"] = `1px solid ${background}`;
    btnStyle["color"] = background;
  }

  return <button style={btnStyle}>{children}</button>;
};
export default ButtonA1;
