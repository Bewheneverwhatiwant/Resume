"use client";
import styled from "styled-components";
import CustomBox from "@/components/CustomBox";
import CustomColumn from "@/components/CustomColumn";
import CustomFont from "@/components/CustomFont";
import CustomRow from "@/components/CustomRow";
import StyledImg from "@/components/StyledImg";

const MainProjectImgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  cursor: pointer;

  &:hover .hoverText {
    opacity: 1;
  }
`;

const MainProjectImg = styled(StyledImg)`
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-20px);
  }
`;

const HoverText = styled(CustomFont)`
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
`;

export default function MainProjects() {
    return (
        <CustomColumn width="70%" alignitems="flex-start" justifycontent="center" gap="0.5rem">
            <CustomColumn alignitems="flex-start" gap='0.5rem'>
                <CustomFont color="white" font="2rem" fontweight="bold">
                    대표 프로젝트(3개)
                </CustomFont>
                <CustomFont color="#444444" font="1.2rem" fontweight="bold">
                    스크롤하여 모두 보기
                </CustomFont>
            </CustomColumn>
            <CustomBox
                flexdirection="row"
                width="100%"
                height="40rem"
                alignitems="flex-end"
                justifycontent="space-around"
                overflowx="scroll"
                gap="5rem"
                backgroundcolor="transparent"
                paddingbottom="5rem"
            >
                <CustomRow width="50rem" alignitems="flex-end" justifycontent="center">
                    <CustomFont color="#444444" font="10rem" fontweight="bold">
                        1
                    </CustomFont>
                    <MainProjectImgWrapper>
                        <HoverText className="hoverText" color="red" font="1.3rem" fontweight="bold">
                            내 문서를 부탁해(대상)
                        </HoverText>
                        <MainProjectImg src={"mainProject1.png"} width="30rem" borderradius="0.5rem" />
                    </MainProjectImgWrapper>
                </CustomRow>

                <CustomRow width="50rem" alignitems="flex-end" justifycontent="center">
                    <CustomFont color="#444444" font="10rem" fontweight="bold">
                        2
                    </CustomFont>
                    <MainProjectImgWrapper>
                        <HoverText className="hoverText" color="red" font="1.3rem" fontweight="bold">
                            Battle for us(우수상)
                        </HoverText>
                        <MainProjectImg src={"mainProject2.png"} width="30rem" borderradius="0.5rem" />
                    </MainProjectImgWrapper>
                </CustomRow>

                <CustomRow width="50rem" alignitems="flex-end" justifycontent="center">
                    <CustomFont color="#444444" font="10rem" fontweight="bold">
                        3
                    </CustomFont>
                    <MainProjectImgWrapper>
                        <CustomColumn gap='0.5rem'>
                            <HoverText className="hoverText" color="red" font="1.3rem" fontweight="bold">
                                항해
                            </HoverText>
                            <HoverText className="hoverText" color="red" font="1rem" fontweight="bold">
                                (12팀/150팀 1차합격, 최종탈락)
                            </HoverText>
                        </CustomColumn>
                        <MainProjectImg src={"mainProject4.png"} width="15rem" height="30rem" borderradius="0.5rem" />
                    </MainProjectImgWrapper>
                </CustomRow>
            </CustomBox>
        </CustomColumn>
    );
}
