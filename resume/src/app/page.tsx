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
padding: 30vh 1rem 10vh;
`;

export default function Home() {
  return (
    <Container>
      <MainProfile />
      <MainProjects />
      <AllProjects />
    </Container>
  );
}
