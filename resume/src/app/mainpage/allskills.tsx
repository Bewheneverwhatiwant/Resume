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

export default function AllSkills() {
    return (
        <CustomColumn width="100%" alignitems="flex-start" justifycontent="center" gap="3rem">
            <CustomFont color="white" font="1.5rem" fontweight="bold">
                사용 가능한 협업 도구
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
                            Github
                        </HoverText>
                        <MainProjectImg src={"icon_github3.png"} width="5rem" height='5rem' borderradius="0.5rem" />
                    </MainProjectImgWrapper>
                </CustomRow>

                <CustomRow width="5rem">
                    <MainProjectImgWrapper>
                        <HoverText className="hoverText" color="red" font="1rem" fontweight="bold">
                            Notion
                        </HoverText>
                        <MainProjectImg src={"icon_notion2.png"} width="5rem" height='5rem' borderradius="0.5rem" />
                    </MainProjectImgWrapper>
                </CustomRow>

                <CustomRow width="5rem">
                    <MainProjectImgWrapper>
                        <HoverText className="hoverText" color="red" font="1rem" fontweight="bold">
                            Figma
                        </HoverText>
                        <MainProjectImg src={"icon_figma2.png"} width="5rem" height='5rem' borderradius="0.5rem" />
                    </MainProjectImgWrapper>
                </CustomRow>

                <CustomRow width="5rem">
                    <MainProjectImgWrapper>
                        <HoverText className="hoverText" color="red" font="1rem" fontweight="bold">
                            Slack
                        </HoverText>
                        <MainProjectImg src={"icon_slack2.png"} width="5rem" height="5rem" borderradius="0.5rem" />
                    </MainProjectImgWrapper>
                </CustomRow>

                <CustomRow width="5rem">
                    <MainProjectImgWrapper>
                        <HoverText className="hoverText" color="red" font="1rem" fontweight="bold">
                            Discord
                        </HoverText>
                        <MainProjectImg src={"icon_discord2.png"} width="5rem" height="5rem" borderradius="0.5rem" />
                    </MainProjectImgWrapper>
                </CustomRow>

                <CustomRow width="5rem">
                    <MainProjectImgWrapper>
                        <HoverText className="hoverText" color="red" font="0.8rem" fontweight="bold">
                            Source Tree
                        </HoverText>
                        <MainProjectImg src={"icon_sourcetree2.png"} width="5rem" height="5rem" borderradius="0.5rem" />
                    </MainProjectImgWrapper>
                </CustomRow>

                <CustomRow width="5rem">
                    <MainProjectImgWrapper>
                        <HoverText className="hoverText" color="red" font="1rem" fontweight="bold">
                            Jira
                        </HoverText>
                        <MainProjectImg src={"icon_jira.png"} width="5rem" height="5rem" borderradius="0.5rem" />
                    </MainProjectImgWrapper>
                </CustomRow>
            </CustomBox>
        </CustomColumn>
    );
}
