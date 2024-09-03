import styled from "styled-components";

// props 타입 정의
interface CustomBoxProps {
  width?: string;
  height?: string;
  gap?: string;
  display?: string;
  flexdirection?: string;
  alignitems?: string;
  justifycontent?: string;
  margin?: string;
  padding?: string;
  backgroundcolor?: string;
  color?: string;
  border?: string;
  borderradius?: string;
  overflowy?: string;
  overflowx?: string;
  scrollbarColor?: string;
  scrollbarTrackColor?: string;
  scrollbarBorderRadius?: string;
}

const CustomBox = styled.div<CustomBoxProps>`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "5rem"};
  gap: ${(props) => props.gap || "1rem"};
  display: ${(props) => props.display || "flex"};
  flex-direction: ${(props) => props.flexdirection || 'column'};
  align-items: ${(props) => props.alignitems || "center"};
  justify-content: ${(props) => props.justifycontent || "center"};
  margin: ${(props) => props.margin || "0"};
  padding: ${(props) => props.padding || "0"};
  background: ${(props) => props.backgroundcolor || "#1E1E1E"};
  color: ${(props) => props.color || "black"};
  padding: 0.75rem 1.5rem;
  border: ${(props) => props.border || "none"};
  border-radius: ${(props) => props.borderradius || "0.5rem"};
  overflow-x: ${(props) => props.overflowx || "auto"};
  overflow-y: ${(props) => props.overflowy || "auto"};

  /* 세로 스크롤바 스타일링 */
  ::-webkit-scrollbar:vertical {
    width: 12px; /* 세로 스크롤바 너비 */
  }

  /* 가로 스크롤바 스타일링 */
  ::-webkit-scrollbar:horizontal {
    height: 12px; /* 가로 스크롤바 높이 */
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.scrollbarColor || "#888"};
    border-radius: ${(props) => props.scrollbarBorderRadius || "10px"};
  }

  ::-webkit-scrollbar-track {
    background: ${(props) => props.scrollbarTrackColor || "#f1f1f1"};
  }
`;

export default CustomBox;
