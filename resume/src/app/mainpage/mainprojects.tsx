"use client";

import CustomBox from "@/components/CustomBox";
import CustomColumn from "@/components/CustomColumn";
import CustomFont from "@/components/CustomFont";
import CustomRow from "@/components/CustomRow";
import StyledImg from "@/components/StyledImg";

export default function MainProjects() {
    return (
        <CustomColumn width='70%' alignitems="flex-start" justifycontent="center" gap='2rem'>
            <CustomFont color='white' font="1.5rem" fontweight="bold">대표 프로젝트</CustomFont>
            <CustomBox flexdirection='row' width='100%' height='20vh' alignitems="flex-end" justifycontent="space-around"
                gap='0.5rem' backgroundcolor="transparent">
                <CustomRow width='10rem' alignitems="flex-end" justifycontent="center">
                    <CustomFont color='#616161' font='4rem' fontweight="bold">1</CustomFont>
                    <StyledImg src={'mainProject1.png'} width='15rem' borderradius="0.5rem" />
                </CustomRow>

                <CustomRow width='10rem' alignitems="flex-end" justifycontent="center">
                    <CustomFont color='#616161' font='4rem' fontweight="bold">2</CustomFont>
                    <StyledImg src={'mainProject2.png'} width='15rem' borderradius="0.5rem" />
                </CustomRow>

                <CustomRow width='10rem' alignitems="flex-end" justifycontent="center">
                    <CustomFont color='#616161' font='4rem' fontweight="bold">3</CustomFont>
                    <StyledImg src={'mainProject3.png'} width='15rem' borderradius="0.5rem" />
                </CustomRow>
            </CustomBox>
        </CustomColumn>
    );
}
