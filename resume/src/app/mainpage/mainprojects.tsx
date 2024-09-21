"use client";
import { useState } from "react";
import styled from "styled-components";
import CustomBox from "@/components/CustomBox";
import CustomColumn from "@/components/CustomColumn";
import CustomFont from "@/components/CustomFont";
import CustomRow from "@/components/CustomRow";
import StyledImg from "@/components/StyledImg";
import CustomModal from "@/components/CustomModal";
import CustomButton from "@/components/CustomButton";

import Project1Content from "./allmainprojects/Project1Content";
import Project2Content from "./allmainprojects/Project2Content";
import Project3Content from "./allmainprojects/Project3Content";

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
    const [isModalOpen, setModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState<React.ReactNode>(null);

    function navigateTo(url: string) {
        window.location.href = url;
    }

    const handleOpenModal = (content: React.ReactNode) => {
        setModalContent(content);
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
        setModalContent(null);
    };

    return (
        <CustomColumn width="70%" alignitems="flex-start" justifycontent="center" gap="0.5rem">
            <CustomRow width="100%" justifycontent="space-between">
                <CustomColumn alignitems="flex-start" gap='0.5rem'>
                    <CustomFont color="white" font="2rem" fontweight="bold">
                        대표 프로젝트(3개)
                    </CustomFont>
                    <CustomFont color="#444444" font="1.2rem" fontweight="bold">
                        스크롤하여 모두 보기
                    </CustomFont>
                </CustomColumn>
                <CustomButton
                    width="15%"
                    alignitems="center"
                    justifycontent="center"
                    backgroundcolor="red"
                    borderradius="0.5rem"
                    onClick={() => navigateTo("https://drive.google.com/file/d/1H2XCXgCcXkvWH98YPGPV-5bu3veyKuMh/view?usp=drivesdk")}
                >
                    <CustomFont color="white" font="1rem" fontweight="bold">
                        Certificate
                    </CustomFont>
                </CustomButton>
            </CustomRow>
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
                    {/* onClick={() => handleOpenModal(<Project1Content />)} */}
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
                    {/* onClick={() => handleOpenModal(<Project2Content />)} */}
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
                    {/* onClick={() => handleOpenModal(<Project3Content />)} */}
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

            <CustomModal width='50%' height='80vh' backgroundColor="white" isOpen={isModalOpen} onClose={handleCloseModal} overflowy="scroll" padding="2rem">
                {modalContent}
            </CustomModal>
        </CustomColumn>
    );
}
