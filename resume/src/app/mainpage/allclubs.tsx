"use client";

import CustomBox from "@/components/CustomBox";
import CustomColumn from "@/components/CustomColumn";
import CustomFont from "@/components/CustomFont";
import CustomRow from "@/components/CustomRow";
import clubs from "@/app/data/clubs";
import { useState } from "react";

export default function AllClubs() {
    const hoverTexts = ['교내동아리', '교내동아리', '연합동아리', '교내동아리', '교내동아리'];
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <CustomColumn width='70%' alignitems="flex-start" justifycontent="center" gap='3rem'>
            <CustomFont color='white' font="2rem" fontweight="bold">동아리 활동(5개)</CustomFont>
            <CustomBox width='100%' height='20vh' overflowx="auto" alignitems="center" justifycontent="center" backgroundcolor="transparent">
                <CustomRow width='100%' alignitems="center" justifycontent="space-around">
                    {clubs.map((club, index) => (

                        <CustomColumn
                            key={index}
                            style={{ flex: 1, position: 'relative', cursor: 'pointer', transition: 'transform 0.3s' }}
                            alignitems="flex-start"
                            justifycontent="center"
                            gap='0.5rem'
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >

                            <CustomRow width='70%' justifycontent="flex-end">
                                {hoveredIndex === index && (
                                    <CustomFont
                                        style={{ position: 'absolute', top: '-1rem', transition: 'top 0.3s' }}
                                        color='red'
                                        font='1rem'
                                        fontweight='bold'
                                    >
                                        {hoverTexts[index]}
                                    </CustomFont>
                                )}
                            </CustomRow>

                            <CustomFont color='#444444' font='2rem' fontweight='bold'
                                style={{ transform: hoveredIndex === index ? 'translateY(1rem)' : 'translateY(0)', transition: 'transform 0.3s' }}>
                                {club.start}</CustomFont>
                            <CustomFont color='#444444' font='2rem' fontweight='bold'
                                style={{ transform: hoveredIndex === index ? 'translateY(1rem)' : 'translateY(0)', transition: 'transform 0.3s' }}>
                                {club.end}</CustomFont>
                            <CustomFont
                                color='white'
                                font='1.5rem'
                                fontweight='bold'
                                style={{ transform: hoveredIndex === index ? 'translateY(1rem)' : 'translateY(0)', transition: 'transform 0.3s' }}
                            >
                                {club.name}
                            </CustomFont>
                        </CustomColumn>

                    ))}
                </CustomRow>
            </CustomBox>
        </CustomColumn>
    );
}
