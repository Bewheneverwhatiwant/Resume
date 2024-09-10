// Project3Content.tsx
"use client";

import CustomColumn from "@/components/CustomColumn";
import CustomFont from "@/components/CustomFont";

const Project3Content = () => {
    return (
        <CustomColumn>
            <CustomFont font="1.5rem" fontweight="bold" color="black">
                3번 프로젝트 내용
            </CustomFont>
            <CustomFont font="1rem" color="gray">
                여기에 3번 내용
            </CustomFont>
        </CustomColumn>
    );
};

export default Project3Content;
