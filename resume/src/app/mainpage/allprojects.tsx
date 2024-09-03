"use client";

import CustomBox from "@/components/CustomBox";
import CustomButton from "@/components/CustomButton";
import CustomColumn from "@/components/CustomColumn";
import CustomFont from "@/components/CustomFont";
import CustomRow from "@/components/CustomRow";

export default function AllProjects() {
    return (
        <CustomColumn width='70%' alignitems="flex-start" justifycontent="center" gap='2rem'>
            <CustomFont color='white' font="2rem" fontweight="bold">모든 활동</CustomFont>
            <CustomBox width='100%' height='30vh' overflowy="auto" alignitems="flex-start" justifycontent="flex-start" gap='0.5rem'>
                <CustomFont color='white' font='1rem'>여기 모든 활동</CustomFont>
                <CustomFont color='white' font='1rem'>여기 모든 활동</CustomFont>
                <CustomFont color='white' font='1rem'>여기 모든 활동</CustomFont>
                <CustomFont color='white' font='1rem'>여기 모든 활동</CustomFont>
                <CustomFont color='white' font='1rem'>여기 모든 활동</CustomFont>
                <CustomFont color='white' font='1rem'>여기 모든 활동</CustomFont>
            </CustomBox>
        </CustomColumn>
    );
}
