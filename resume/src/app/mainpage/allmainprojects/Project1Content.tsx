// Project1Content.tsx
"use client";

import CustomColumn from "@/components/CustomColumn";
import CustomFont from "@/components/CustomFont";
import StyledImg from "@/components/StyledImg";
import CustomDivider from "@/components/CustomDivider";

const Project1Content = () => {
    return (
        <CustomColumn width='90%' height='90vh'>

            <CustomColumn height='10vh' />
            <StyledImg src={'mainProject1.png'} width='95%' height='40vh' borderradius="0.5rem" />

            <CustomColumn width='100%' alignitems="flex-start">
                <CustomFont font="1.5rem" fontweight="bold" color="black">
                    내 문서를 부탁해
                </CustomFont>

                <CustomColumn width='100%' gap='0.5rem' alignitems="flex-start">
                    <CustomFont font="1rem" color="gray">
                        맡은 역할 | 팀장, frontend 리더, 기획자
                    </CustomFont>
                    <CustomFont font="1rem" color="gray">
                        사용 기술 | JS, React(CRA), styled component
                    </CustomFont>
                    <CustomFont font="1rem" color="gray">
                        Github | 링크
                    </CustomFont>
                    <CustomFont font="1rem" color="gray">
                        시연영상 | 링크
                    </CustomFont>
                </CustomColumn>
                <CustomDivider />
                <CustomFont font="1rem" color="gray">
                    트러블슈팅 |
                </CustomFont>
                <CustomFont font="1rem" color="gray">
                    ㅁㅁㅁㅁ
                </CustomFont>
                <CustomFont font="1rem" color="gray">
                    ㅁㅁㅁㅁ
                </CustomFont>
                <CustomFont font="1rem" color="gray">
                    ㅁㅁ
                </CustomFont>
            </CustomColumn>
        </CustomColumn>
    );
};

export default Project1Content;
