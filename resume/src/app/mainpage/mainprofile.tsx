"use client";

import { useState } from "react";
import CustomButton from "@/components/CustomButton";
import CustomColumn from "@/components/CustomColumn";
import CustomFont from "@/components/CustomFont";
import CustomRow from "@/components/CustomRow";
import StyledImg from "@/components/StyledImg";
import CustomBox from "@/components/CustomBox";
import { BsPersonFill, BsGeoAltFill, BsAt, BsBank2, BsBook } from "react-icons/bs";
import styled from "styled-components";

interface ModalOverlayProps {
    isOpen: boolean;
}

const ModalOverlay = styled.div<ModalOverlayProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  transition: opacity 0.3s ease-in-out;
  visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
`;

const ModalImage = styled.img<ModalOverlayProps>`
  max-width: 90%;
  max-height: 90%;
  border-radius: 0.5rem;
  transition: transform 0.3s ease-in-out;
  transform: ${(props) => (props.isOpen ? "scale(1)" : "scale(0.8)")};
`;

const Modal = styled.div<ModalOverlayProps>`
background-color: white;
width: 50%;
height: 30%;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
gap: 1rem;
padding: 1rem;

border-radius: 0.5rem;
transition: transform 0.3s ease-in-out;
transform: ${(props) => (props.isOpen ? "scale(1)" : "scale(0.8)")};
`;

const ProfileImg = styled(StyledImg)`
width: 15rem;
border-radius: 0.5rem;
cursor: pointer;
transition: transform 0.3s ease-in-out;

&:hover {
  transform: rotate(-10deg);
}
`;

const Tooltip = styled.div`
  position: absolute;
  background-color: red;
  color: white;
  padding: 0.5rem;
  border-radius: 0.5rem;
  top: 0;
  left: 15rem;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease-in-out;
  z-index: 1000;

  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: -0.5rem;
    transform: translateY(-50%);
    border-width: 5px;
    border-style: solid;
    border-color: transparent red transparent transparent;
  }
`;

const NameWrapper = styled.div`
  width: 100%;
  cursor: pointer;
  position: relative;
  display: inline-block;

  &:hover ${Tooltip} {
    opacity: 1;
    visibility: visible;
  }
`;


export default function MainProfile() {
    const [isModalOpen, setModalOpen] = useState(false);
    const [isExModalOpen, setExModalOpen] = useState(false);

    function navigateTo(url: string) {
        window.location.href = url;
    }

    const handleImgClick = () => {
        setModalOpen(true);
    };

    const handleQclick = () => {
        setExModalOpen(true);
    }

    const handleModalClose = () => {
        setModalOpen(false);
        setExModalOpen(false);
    };

    return (
        <>
            <CustomBox
                width="100%"
                height="50vh"
                alignitems="center"
                justifycontent="center"
                backgroundcolor="transparent"
                margintop="-30vh"
            >
                <CustomColumn width="100%" alignitems="center" justifycontent="flex-start">
                    <CustomRow width="70%" alignitems="flex-start" justifycontent="space-between">
                        <ProfileImg
                            src={"profileImg.jpg"}
                            onClick={handleImgClick}
                        />
                        <CustomColumn width="70%" alignitems="flex-start" justifycontent="flex-start" gap="2rem">
                            <CustomColumn width="100%" height="20rem" alignitems="flex-start" justifycontent="space-between">
                                <NameWrapper>
                                    <CustomFont color="white" fontweight="bold" font="5rem">
                                        이나영
                                    </CustomFont>
                                    <Tooltip>반갑습니다.</Tooltip>
                                </NameWrapper>

                                <CustomColumn width="100%" alignitems="flex-start" justifycontent="center" gap="1rem">
                                    <CustomRow width="100%" alignitems="center" justifycontent="flex-start">
                                        <BsPersonFill size={"1rem"} color="white" />
                                        <CustomFont font="0.8rem" color="white">
                                            2002.11.02
                                        </CustomFont>
                                    </CustomRow>
                                    <CustomRow width="100%" alignitems="center" justifycontent="flex-start">
                                        <BsGeoAltFill size={"1rem"} color="white" />
                                        <CustomFont font="0.8rem" color="white">
                                            경기도 용인시 처인구 거주
                                        </CustomFont>
                                    </CustomRow>
                                    <CustomRow width="100%" alignitems="center" justifycontent="flex-start">
                                        <BsAt size={"1rem"} color="white" />
                                        <CustomFont font="0.8rem" color="white">
                                            lny021102@gmail.com | 010-4595-7817
                                        </CustomFont>
                                    </CustomRow>
                                    <CustomRow width="100%" alignitems="center" justifycontent="flex-start">
                                        <BsBank2 size={"1rem"} color="white" />
                                        <CustomFont font="0.8rem" color="white">
                                            한국외국어대학교 글로벌캠퍼스 21학번
                                        </CustomFont>
                                    </CustomRow>
                                    <CustomRow width="100%" alignitems="center" justifycontent="flex-start">
                                        <BsBook size={"1rem"} color="white" />
                                        <CustomFont font="0.8rem" color="white">
                                            독일어통번역학과 + 컴퓨터공학부 이중전공
                                        </CustomFont>
                                        <CustomButton padding="0.5rem" backgroundcolor="red" width='1.2rem' height='1.2rem'
                                            onClick={handleQclick}>
                                            <CustomFont color='white' font='0.9rem' fontweight='bold'>
                                                ﹖
                                            </CustomFont>
                                        </CustomButton>
                                    </CustomRow>
                                </CustomColumn>
                            </CustomColumn>

                            <CustomRow width="100%" alignitems="center" justifycontent="flex-start">
                                <CustomButton
                                    width="20%"
                                    alignitems="center"
                                    justifycontent="center"
                                    backgroundcolor="red"
                                    borderradius="0.5rem"
                                >
                                    <CustomFont color="white" font="1rem" fontweight="bold">
                                        LinkedIn
                                    </CustomFont>
                                </CustomButton>
                                <CustomButton
                                    width="20%"
                                    alignitems="center"
                                    justifycontent="center"
                                    backgroundcolor="red"
                                    borderradius="0.5rem"
                                    onClick={() => navigateTo("https://github.com/Bewheneverwhatiwant")}
                                >
                                    <CustomFont color="white" font="1rem" fontweight="bold">
                                        Github
                                    </CustomFont>
                                </CustomButton>
                                <CustomButton
                                    width="20%"
                                    alignitems="center"
                                    justifycontent="center"
                                    backgroundcolor="red"
                                    borderradius="0.5rem"
                                >
                                    <CustomFont color="white" font="1rem" fontweight="bold">
                                        Notion
                                    </CustomFont>
                                </CustomButton>
                            </CustomRow>
                        </CustomColumn>
                    </CustomRow>
                </CustomColumn>
            </CustomBox>

            <ModalOverlay isOpen={isModalOpen} onClick={handleModalClose}>
                <ModalImage src={"profileImg.jpg"} isOpen={isModalOpen} />
            </ModalOverlay>

            <ModalOverlay isOpen={isExModalOpen} onClick={handleModalClose}>
                <Modal isOpen={isModalOpen}>
                    <CustomFont color='black' font='1.2rem'>대학교 1학년이던 2021년 겨울, 동계 기숙사 룸메이트가 컴퓨터공학부 언니였습니다.</CustomFont>
                    <CustomFont color='black' font='1.2rem'>언니는 종종 알고리즘 과제의 풀이 방법을 설명해주었는데,</CustomFont>
                    <CustomFont color='black' font='1.2rem'>풀이과정이 흥미롭고 제 적성에 맞는 분야라는 생각이 들어서</CustomFont>
                    <CustomFont color='black' font='1.2rem'>대학교 2학년 2학기부터 컴퓨터공학을 이중전공하기 시작했습니다.</CustomFont>
                </Modal>
            </ModalOverlay>
        </>
    );
}
