"use client";

import styled from "styled-components";
import CustomFont from "@/components/CustomFont";
import CustomRow from "@/components/CustomRow";
import StyledImg from "@/components/StyledImg";
import CustomColumn from "@/components/CustomColumn";

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 1rem;
min-height: 100vh;
padding: 1rem;
`;

export default function Home() {
  return (
    <Container>
      <CustomRow width='70%' alignitems="center" justifycontent="space-between">
        <StyledImg src={'profileImg.jpg'} width='15rem' borderradius="0.5rem" />
        <CustomColumn width='60%' alignitems="flex-start" justifycontent="center" gap='1rem'>
          <CustomFont color='white' fontweight='bold' font='5rem'>이나영</CustomFont>
          <CustomFont color='white' fontweight='normal' font='1.5rem'>한국외국어대학교 글로벌캠퍼스</CustomFont>
        </CustomColumn>
      </CustomRow>
    </Container>
  );
}
