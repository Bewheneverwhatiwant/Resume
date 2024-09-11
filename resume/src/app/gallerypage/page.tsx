"use client";

import { useState } from "react";
import styled from "styled-components";
import CustomFont from "@/components/CustomFont";
import CustomColumn from "@/components/CustomColumn";
import CustomRow from "@/components/CustomRow";
import CustomDivider from "@/components/CustomDivider";
import StyledImg from "@/components/StyledImg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 5rem;
  min-height: 100vh;
  padding: 1rem 10vh 10rem;
`;

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

const AnimatedStyledImg = styled(StyledImg)`
  opacity: 0;
  transform: scale(0.9);
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;

  &.loaded {
    opacity: 1 !important;
    transform: scale(1) !important;
  }
`;

export default function GalleryPage() {
    const [isModalOpen, setModalOpen] = useState(false);
    const [modalImageSrc, setModalImageSrc] = useState("");

    const handleImgClick = (src: string) => {
        setModalImageSrc(src);
        setModalOpen(true);
    };

    const handleModalClose = () => {
        setModalOpen(false);
    };

    // 이미지 로드 이벤트 핸들러
    const handleImageLoad = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
        event.currentTarget.classList.add('loaded');
    };

    return (
        <Container>
            <CustomColumn gap="1rem" width="100%">
                <CustomRow width="100%" justifycontent="flex-start">
                    <CustomFont color="white" font="3rem">Gallery.</CustomFont>
                </CustomRow>
                <CustomDivider backgroundcolor="white" width="100%" height="1px" />
                <CustomRow width="100%" justifycontent="flex-end">
                    <CustomColumn alignitems="flex-start" gap="0.5rem">
                        <CustomFont color="white" font="1rem">All the drawings were drawn by nayeong.</CustomFont>
                        <CustomFont color="white" font="1rem">Sorted by newest!</CustomFont>
                    </CustomColumn>
                </CustomRow>
            </CustomColumn>
            <CustomColumn width="100%">
                <CustomRow width="100%" justifycontent="space-between">
                    <AnimatedStyledImg src={'draw8.png'} width="25%" borderradius="0.5rem" onClick={() => handleImgClick('draw8.png')} onLoad={handleImageLoad} cursor="pointer" />
                    <AnimatedStyledImg src={'draw7.jpg'} width="25%" borderradius="0.5rem" onClick={() => handleImgClick('draw7.jpg')} onLoad={handleImageLoad} cursor="pointer" />
                    <AnimatedStyledImg src={'draw6.jpg'} width="25%" borderradius="0.5rem" onClick={() => handleImgClick('draw6.jpg')} onLoad={handleImageLoad} cursor="pointer" />
                    <AnimatedStyledImg src={'draw5.jpg'} width="25%" borderradius="0.5rem" onClick={() => handleImgClick('draw5.jpg')} onLoad={handleImageLoad} cursor="pointer" />
                </CustomRow>
                <CustomRow width="100%" justifycontent="space-between">
                    <AnimatedStyledImg src={'draw4.jpg'} width="25%" borderradius="0.5rem" onClick={() => handleImgClick('draw4.jpg')} onLoad={handleImageLoad} cursor="pointer" />
                    <AnimatedStyledImg src={'draw3.jpg'} width="25%" borderradius="0.5rem" onClick={() => handleImgClick('draw3.jpg')} onLoad={handleImageLoad} cursor="pointer" />
                    <AnimatedStyledImg src={'draw2.jpg'} width="25%" borderradius="0.5rem" onClick={() => handleImgClick('draw2.jpg')} onLoad={handleImageLoad} cursor="pointer" />
                    <AnimatedStyledImg src={'draw1.jpg'} width="25%" borderradius="0.5rem" onClick={() => handleImgClick('draw1.jpg')} onLoad={handleImageLoad} cursor="pointer" />
                </CustomRow>
            </CustomColumn>

            <ModalOverlay isOpen={isModalOpen} onClick={handleModalClose}>
                <ModalImage src={modalImageSrc} isOpen={isModalOpen} />
            </ModalOverlay>
        </Container>
    );
}
