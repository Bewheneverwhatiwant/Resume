import styled from "styled-components";

// props 타입 정의
interface CustomRowProps {
    width?: string;
    height?: string;
    gap?: string;
    alignitems?: string;
    justifycontent?: string;
    margin?: string;
    padding?: string;
}

const CustomRow = styled.div<CustomRowProps>`
  display: flex;
  flex-direction: row;
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
  gap: ${(props) => props.gap || "10px"};
  align-items: ${(props) => props.alignitems || "center"};
  justify-content: ${(props) => props.justifycontent || "center"};
  margin: ${(props) => props.margin || '0'};
  padding: ${(props) => props.padding || '0'};
`;

export default CustomRow;