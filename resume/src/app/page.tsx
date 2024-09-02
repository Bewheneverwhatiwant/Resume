"use client";

import styled from "styled-components";

const Container = styled.div`
display: flex;
flex-direction: center;
align-items: center;
justify-content: center;
gap: 1rem;
min-height: 100vh;
padding: 1rem;
`;

const Font = styled.a`
font-size: 1rem;
color: white;
font-weight: bold;
`;

export default function Home() {
  return (
    <Container>
      <Font>여기는 메인화면</Font>
    </Container>
  );
}
