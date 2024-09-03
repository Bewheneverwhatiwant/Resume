import styled from "styled-components";

// props 타입 정의
interface CustomBoxProps {
    width?: string;
    height?: string;
    gap?: string;
    display?: string;
    alignitems?: string;
    justifycontent?: string;
    margin?: string;
    padding?: string;
    backgroundcolor?: string;
    color?: string;
    border?: string;
    borderradius?: string;
}

const CustomBox = styled.div<CustomBoxProps>`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "5rem"};
  gap: ${(props) => props.gap || "1rem"};
  display: ${(props) => props.display || "flex"};
  align-items:  ${(props) => props.alignitems || "center"};
  justify-content:  ${(props) => props.justifycontent || "center"};
  margin:  ${(props) => props.margin || "0"};
  padding:  ${(props) => props.padding || "0"};
  background: ${(props) => props.backgroundcolor || "#AFAFAF"};
  color:  ${(props) => props.color || "black"};
  padding: 0.75rem 1.5rem;
  border:  ${(props) => props.border || "none"};
  border-radius: ${(props) => props.borderradius || "0.5rem"};
`;

export default CustomBox;