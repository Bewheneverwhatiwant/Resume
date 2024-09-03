"use client";
import styled from "styled-components";
import CustomBox from "@/components/CustomBox";
import CustomColumn from "@/components/CustomColumn";
import CustomFont from "@/components/CustomFont";
import CustomRow from "@/components/CustomRow";
import StyledImg from "@/components/StyledImg";
import AllSkills from "./allskills";

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

export default function CoreSkills() {
    return (
        <CustomColumn width="90%" alignitems="flex-start" justifycontent="center" gap="3rem">
            <AllSkills />
            <CustomRow width="100%">
                <CustomColumn width="50%" alignitems="flex-start" justifycontent="center" gap="3rem">
                    <CustomFont color="white" font="1.5rem" fontweight="bold">
                        주로 사용하는 언어
                    </CustomFont>
                    <CustomBox
                        flexdirection="row"
                        width="100%"
                        height="20rem"
                        alignitems="flex-start"
                        justifycontent="space-around"
                        overflowx="scroll"
                        gap="5rem"
                        backgroundcolor="transparent"
                        paddingbottom="5rem"
                    >
                        <CustomRow width="5rem">
                            <MainProjectImgWrapper>
                                <HoverText className="hoverText" color="red" font="1rem" fontweight="bold">
                                    JavaScript
                                </HoverText>
                                <MainProjectImg src={"icon_js.png"} width="5rem" height='5rem' borderradius="0.5rem" />
                            </MainProjectImgWrapper>
                        </CustomRow>

                        <CustomRow width="5rem">
                            <MainProjectImgWrapper>
                                <HoverText className="hoverText" color="red" font="1rem" fontweight="bold">
                                    TypeScript
                                </HoverText>
                                <MainProjectImg src={"icon_ts.png"} width="5rem" height='5rem' borderradius="0.5rem" />
                            </MainProjectImgWrapper>
                        </CustomRow>

                        <CustomRow width="5rem">
                            <MainProjectImgWrapper>
                                <HoverText className="hoverText" color="red" font="1rem" fontweight="bold">
                                    Python
                                </HoverText>
                                <MainProjectImg src={"icon_python.png"} width="5rem" height='5rem' borderradius="0.5rem" />
                            </MainProjectImgWrapper>
                        </CustomRow>
                    </CustomBox>
                </CustomColumn>

                <CustomColumn width="50%" alignitems="flex-start" justifycontent="center" gap="3rem">
                    <CustomFont color="white" font="1.5rem" fontweight="bold">
                        종종 사용하는 언어
                    </CustomFont>
                    <CustomBox
                        flexdirection="row"
                        width="100%"
                        height="20rem"
                        alignitems="flex-start"
                        justifycontent="space-around"
                        overflowx="scroll"
                        gap="5rem"
                        backgroundcolor="transparent"
                        paddingbottom="5rem"
                    >

                        <CustomRow width="5rem">
                            <MainProjectImgWrapper>
                                <HoverText className="hoverText" color="red" font="1rem" fontweight="bold">
                                    Dart
                                </HoverText>
                                <MainProjectImg src={"icon_dart.png"} width="5rem" height="5rem" borderradius="0.5rem" />
                            </MainProjectImgWrapper>
                        </CustomRow>

                        <CustomRow width="5rem">
                            <MainProjectImgWrapper>
                                <HoverText className="hoverText" color="red" font="1rem" fontweight="bold">
                                    Kotlin
                                </HoverText>
                                <MainProjectImg src={"icon_kotlin.png"} width="5rem" height="5rem" borderradius="0.5rem" />
                            </MainProjectImgWrapper>
                        </CustomRow>
                    </CustomBox>
                </CustomColumn>
            </CustomRow>

            <CustomRow width="100%">
                <CustomColumn width="50%" alignitems="flex-start" justifycontent="center" gap="3rem">
                    <CustomFont color="white" font="1.5rem" fontweight="bold">
                        주로 사용하는 프레임워크
                    </CustomFont>

                    <CustomBox
                        flexdirection="row"
                        width="100%"
                        height="20rem"
                        alignitems="flex-start"
                        justifycontent="space-around"
                        overflowx="scroll"
                        gap="5rem"
                        backgroundcolor="transparent"
                        paddingbottom="5rem"
                    >
                        <CustomRow width="5rem">
                            <MainProjectImgWrapper>
                                <HoverText className="hoverText" color="red" font="1rem" fontweight="bold">
                                    React
                                </HoverText>
                                <MainProjectImg src={"icon_react.png"} width="5rem" height='5rem' borderradius="0.5rem" />
                            </MainProjectImgWrapper>
                        </CustomRow>

                        <CustomRow width="5rem">
                            <MainProjectImgWrapper>
                                <HoverText className="hoverText" color="red" font="0.8rem" fontweight="bold">
                                    React + Vite
                                </HoverText>
                                <MainProjectImg src={"icon_vite.png"} width="5rem" height='5rem' borderradius="0.5rem" />
                            </MainProjectImgWrapper>
                        </CustomRow>

                        <CustomRow width="5rem">
                            <MainProjectImgWrapper>
                                <HoverText className="hoverText" color="red" font="1rem" fontweight="bold">
                                    Flutter
                                </HoverText>
                                <MainProjectImg src={"icon_flutter.png"} width="5rem" height='5rem' borderradius="0.5rem" />
                            </MainProjectImgWrapper>
                        </CustomRow>

                        <CustomRow width="5rem">
                            <MainProjectImgWrapper>
                                <HoverText className="hoverText" color="red" font="1rem" fontweight="bold">
                                    Next.JS
                                </HoverText>
                                <MainProjectImg src={"icon_nextjs.png"} width="5rem" height="5rem" borderradius="0.5rem" />
                            </MainProjectImgWrapper>
                        </CustomRow>
                    </CustomBox>
                </CustomColumn>

                <CustomColumn width="50%" alignitems="flex-start" justifycontent="center" gap="3rem">

                    <CustomColumn alignitems="flex-start" gap='0.5rem'>
                        <CustomFont color="white" font="1.5rem" fontweight="bold">
                            사용 경험이 있는 기술
                        </CustomFont>
                        <CustomFont color="#444444" font="1.2rem" fontweight="bold">
                            스크롤하여 모두 보기
                        </CustomFont>
                    </CustomColumn>
                    <CustomBox
                        flexdirection="row"
                        width="100%"
                        height="20rem"
                        alignitems="flex-start"
                        justifycontent="space-around"
                        overflowx="scroll"
                        gap="5rem"
                        backgroundcolor="transparent"
                        paddingbottom="5rem"
                    >
                        <CustomRow width="5rem">
                            <MainProjectImgWrapper>
                                <HoverText className="hoverText" color="red" font="1rem" fontweight="bold">
                                    Linux
                                </HoverText>
                                <MainProjectImg src={"icon_linux.png"} width="5rem" height='5rem' borderradius="0.5rem" />
                            </MainProjectImgWrapper>
                        </CustomRow>

                        <CustomRow width="5rem">
                            <MainProjectImgWrapper>
                                <HoverText className="hoverText" color="red" font="1rem" fontweight="bold">
                                    Docker
                                </HoverText>
                                <MainProjectImg src={"icon_docker.png"} width="5rem" height='5rem' borderradius="0.5rem" />
                            </MainProjectImgWrapper>
                        </CustomRow>

                        <CustomRow width="5rem">
                            <MainProjectImgWrapper>
                                <HoverText className="hoverText" color="red" font="1rem" fontweight="bold">
                                    NginX
                                </HoverText>
                                <MainProjectImg src={"icon_nginx.png"} width="5rem" height="5rem" borderradius="0.5rem" />
                            </MainProjectImgWrapper>
                        </CustomRow>

                        <CustomRow width="5rem">
                            <MainProjectImgWrapper>
                                <HoverText className="hoverText" color="red" font="1rem" fontweight="bold">
                                    django
                                </HoverText>
                                <MainProjectImg src={"icon_django.png"} width="5rem" height='5rem' borderradius="0.5rem" />
                            </MainProjectImgWrapper>
                        </CustomRow>

                        <CustomRow width="10rem">
                            <MainProjectImgWrapper>
                                <HoverText className="hoverText" color="red" font="0.8rem" fontweight="bold">
                                    spring boot
                                </HoverText>
                                <MainProjectImg src={"icon_springboot.png"} width="5rem" height="5rem" borderradius="0.5rem" />
                            </MainProjectImgWrapper>
                        </CustomRow>

                        <CustomRow width="5rem">
                            <MainProjectImgWrapper>
                                <HoverText className="hoverText" color="red" font="1rem" fontweight="bold">
                                    MySQL
                                </HoverText>
                                <MainProjectImg src={"icon_mysql.png"} width="5rem" height="5rem" borderradius="0.5rem" />
                            </MainProjectImgWrapper>
                        </CustomRow>

                        <CustomRow width="5rem">
                            <MainProjectImgWrapper>
                                <HoverText className="hoverText" color="red" font="1rem" fontweight="bold">
                                    node.js
                                </HoverText>
                                <MainProjectImg src={"icon_nodejs.png"} width="5rem" height="5rem" borderradius="0.5rem" />
                            </MainProjectImgWrapper>
                        </CustomRow>
                    </CustomBox>
                </CustomColumn>
            </CustomRow>
        </CustomColumn>
    );
}
