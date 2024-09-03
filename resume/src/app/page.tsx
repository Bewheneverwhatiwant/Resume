"use client";

import styled from "styled-components";
import CustomFont from "@/components/CustomFont";
import CustomRow from "@/components/CustomRow";
import StyledImg from "@/components/StyledImg";
import CustomColumn from "@/components/CustomColumn";
import CustomBox from "@/components/CustomBox";

import MainProfile from "./mainpage/mainprofile";
import MainProjects from "./mainpage/mainprojects";
import AllProjects from "./mainpage/allprojects";

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 5rem;
min-height: 100vh;
padding: 1rem 10vh 10rem;
`;

const MainBanner = styled(StyledImg)`
  width: 100%;
  height: 70vh;
  object-fit: cover;
  position: relative;
  z-index: 1;
`;

const MainBannerCover = styled.div`
background-color: black;
opacity: 0.7;
border: none;
width: 100%;
height: 70vh;
position: absolute;
top: 0;
z-index: 2;
`;

export default function Home() {
  return (
    <>
      <MainBanner src="/mainBanner.jpg" />
      <MainBannerCover />
      <Container>
        <MainProfile />
        <CustomColumn width='100%' gap='13rem'>
          <MainProjects />
          <AllProjects />
        </CustomColumn>
      </Container>
    </>
  );
}
