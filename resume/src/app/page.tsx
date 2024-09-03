"use client";

import styled from "styled-components";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import CustomFont from "@/components/CustomFont";
import CustomRow from "@/components/CustomRow";
import StyledImg from "@/components/StyledImg";
import CustomColumn from "@/components/CustomColumn";
import CustomBox from "@/components/CustomBox";

import MainProfile from "./mainpage/mainprofile";
import MainProjects from "./mainpage/mainprojects";
import AllProjects from "./mainpage/allprojects";
import AllClubs from "./mainpage/allclubs";
import AllSkills from "./mainpage/allskills";
import CoreSkills from "./mainpage/coreskills";
import CustomButton from "@/components/CustomButton";

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
background: linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9));
border: none;
width: 100%;
height: 70vh;
position: absolute;
top: 0;
z-index: 2;
`;

const Header = styled.div`
background-color: transparent;
border: none;
width: 100%;
height: 5rem;
position: absolute;
top: 0;
z-index: 4;
display: flex;
flex-direction: row;
padding-right: 1rem;
align-items: center;
justify-content: flex-end;
`;

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // 클라이언트 사이드에서만 렌더링

  const handleNavigation = () => {
    router.push('/gallerypage');
  };

  return (
    <>
      <Header>
        <CustomButton backgroundcolor="red" padding="0.5rem" width='6rem' height='2rem' onClick={handleNavigation}>
          <CustomFont color="white" font='1rem' fontweight="bold" >Gallery</CustomFont>
        </CustomButton>
      </Header>
      <MainBanner src="/mainBanner.jpg" />
      <MainBannerCover />
      <Container>
        <MainProfile />
        <CustomColumn width='100%' gap='10rem'>
          <MainProjects />
          <AllClubs />
          <AllProjects />
          <CoreSkills />
        </CustomColumn>
      </Container>
    </>
  );
}
