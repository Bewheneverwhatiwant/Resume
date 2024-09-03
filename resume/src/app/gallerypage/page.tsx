"use client";

import styled from "styled-components";
import CustomFont from "@/components/CustomFont";

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 5rem;
min-height: 100vh;
padding: 1rem 10vh 10rem;
`;

export default function GalleryPage() {

    return (
        <Container>
            <CustomFont color='white' font='3rem'>여기는 갤러리</CustomFont>
        </Container>
    );
}
