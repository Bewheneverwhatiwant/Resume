"use client";

import CustomBox from "@/components/CustomBox";
import CustomButton from "@/components/CustomButton";
import CustomColumn from "@/components/CustomColumn";
import CustomFont from "@/components/CustomFont";
import CustomRow from "@/components/CustomRow";
import activities from "@/app/data/activities";

export default function AllProjects() {
    return (
        <CustomColumn width='70%' alignitems="flex-start" justifycontent="center" gap='2.5rem'>
            <CustomColumn alignitems="flex-start" gap='0.5rem'>
                <CustomFont color="white" font="2rem" fontweight="bold">
                    모든 활동
                </CustomFont>
                <CustomFont color="#444444" font="1.2rem" fontweight="bold">
                    스크롤하여 모두 보기
                </CustomFont>
            </CustomColumn>
            <CustomBox width='100%' height='70vh' overflowy="auto" alignitems="flex-start" justifycontent="flex-start" gap='2rem'>
                <CustomRow width='100%' alignitems="center" justifycontent="space-around">
                    <CustomRow style={{ flex: 1 }}>
                        <CustomFont color='white' font='1.2rem' fontweight='bold'>기관</CustomFont>
                    </CustomRow>
                    <CustomRow style={{ flex: 1 }}>
                        <CustomFont color='white' font='1.2rem' fontweight='bold'>주관</CustomFont>
                    </CustomRow>
                    <CustomRow style={{ flex: 1 }}>
                        <CustomFont color='white' font='1.2rem' fontweight='bold'>프로젝트명</CustomFont>
                    </CustomRow>
                    <CustomRow style={{ flex: 1 }}>
                        <CustomFont color='white' font='1.2rem' fontweight='bold'>성과</CustomFont>
                    </CustomRow>
                </CustomRow>
                <CustomColumn width='100%' gap='0.5rem' alignitems="center" justifycontent="center">
                    {activities.map((activity, index) => (
                        <CustomRow key={index} width='100%' alignitems="center" justifycontent="center" gap='1rem'>
                            <CustomColumn style={{ flex: 1 }} justifycontent="center" alignitems="center">
                                <CustomFont color='white' font='1rem'>{activity.기관}</CustomFont>
                            </CustomColumn>
                            <CustomColumn style={{ flex: 1 }} alignitems="flex-start">
                                <CustomFont color='white' font='1rem'>{activity.주관}</CustomFont>
                            </CustomColumn>
                            <CustomColumn style={{ flex: 1 }} alignitems="flex-start">
                                <CustomFont color='white' font='1rem'>{activity.프로젝트명}</CustomFont>
                            </CustomColumn>
                            <CustomColumn style={{ flex: 1 }} alignitems="flex-start">
                                <CustomFont color='skyblue' font='1rem' fontweight='bold'>{activity.성과}</CustomFont>
                            </CustomColumn>
                        </CustomRow>
                    ))}
                </CustomColumn>
            </CustomBox>
        </CustomColumn>
    );
}
