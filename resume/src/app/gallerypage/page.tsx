"use client";

import styled from "styled-components";
import CustomFont from "@/components/CustomFont";
import CustomColumn from "@/components/CustomColumn";
import CustomRow from "@/components/CustomRow";
import CustomDivider from "@/components/CustomDivider";

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
gap: 5rem;
min-height: 100vh;
padding: 1rem 10vh 10rem;
`;

export default function GalleryPage() {

    return (
        <Container>
            <CustomColumn gap='1rem' width='100%'>
                <CustomRow width='100%' justifycontent="flex-start">
                    <CustomFont color='white' font='3rem'>Gallery.</CustomFont>
                </CustomRow>
                <CustomDivider backgroundcolor="white" width='100%' height='1px' />
                <CustomRow width='100%' justifycontent="flex-end">
                    <CustomFont color='white' font='1rem'>All the drawings were drawn by nayeong.</CustomFont>
                </CustomRow>
            </CustomColumn>
        </Container>
    );
}
