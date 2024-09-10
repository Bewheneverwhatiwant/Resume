// Project1Content.tsx
"use client";

import CustomColumn from "@/components/CustomColumn";
import CustomFont from "@/components/CustomFont";

const Project1Content = () => {
    return (
        <CustomColumn>
            <CustomFont font="1.5rem" fontweight="bold" color="black">
                1번 프로젝트 내용
            </CustomFont>
            <CustomFont font="1rem" color="gray">
                여기에 내용
            </CustomFont>
        </CustomColumn>
    );
};

export default Project1Content;
