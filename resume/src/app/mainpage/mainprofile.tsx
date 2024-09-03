"use client";

import CustomButton from "@/components/CustomButton";
import CustomColumn from "@/components/CustomColumn";
import CustomFont from "@/components/CustomFont";
import CustomRow from "@/components/CustomRow";
import StyledImg from "@/components/StyledImg";
import { BsPersonFill, BsGeoAltFill, BsAt, BsBank2, BsBook } from 'react-icons/bs';

export default function MainProfile() {
    return (
        <CustomColumn width='100%' alignitems="center" justifycontent="flex-start">
            <CustomRow width='70%' alignitems="flex-start" justifycontent="space-between">
                <StyledImg src={'profileImg.jpg'} width='15rem' borderradius="0.5rem" />
                <CustomColumn width='70%' alignitems="flex-start" justifycontent="flex-start" gap='2rem'>

                    <CustomColumn width='100%' height='20rem' alignitems="flex-start" justifycontent="space-between">
                        <CustomFont color='white' fontweight='bold' font='5rem'>이나영</CustomFont>

                        <CustomColumn width='100%' alignitems="flex-start" justifycontent="center" gap='1rem'>
                            <CustomRow width='100%' alignitems="center" justifycontent="flex-start">
                                <BsPersonFill size={'1rem'} color='white' />
                                <CustomFont font='0.8rem' color='white'>2002.11.02</CustomFont>
                            </CustomRow>
                            <CustomRow width='100%' alignitems="center" justifycontent="flex-start">
                                <BsGeoAltFill size={'1rem'} color='white' />
                                <CustomFont font='0.8rem' color='white'>경기도 용인시 처인구 거주</CustomFont>
                            </CustomRow>
                            <CustomRow width='100%' alignitems="center" justifycontent="flex-start">
                                <BsAt size={'1rem'} color='white' />
                                <CustomFont font='0.8rem' color='white'>lny021102@gmail.com | 010-4595-7817</CustomFont>
                            </CustomRow>
                            <CustomRow width='100%' alignitems="center" justifycontent="flex-start">
                                <BsBank2 size={'1rem'} color='white' />
                                <CustomFont font='0.8rem' color='white'>한국외국어대학교 글로벌캠퍼스 4학년 2학기 재학</CustomFont>
                            </CustomRow>
                            <CustomRow width='100%' alignitems="center" justifycontent="flex-start">
                                <BsBook size={'1rem'} color='white' />
                                <CustomFont font='0.8rem' color='white'>독일어통번역학과 + 컴퓨터공학부 이중전공</CustomFont>
                            </CustomRow>
                        </CustomColumn>
                    </CustomColumn>

                    <CustomRow width="100%" alignitems="center" justifycontent="flex-start">
                        <CustomButton width='20%' alignitems="center" justifycontent="center" backgroundcolor="red" borderradius="0.5rem">
                            <CustomFont color="white" font="1rem" fontweight="bold">LinkedIn</CustomFont>
                        </CustomButton>
                        <CustomButton width='20%' alignitems="center" justifycontent="center" backgroundcolor="red" borderradius="0.5rem">
                            <CustomFont color="white" font="1rem" fontweight="bold">Github</CustomFont>
                        </CustomButton>
                        <CustomButton width='20%' alignitems="center" justifycontent="center" backgroundcolor="red" borderradius="0.5rem">
                            <CustomFont color="white" font="1rem" fontweight="bold">Notion</CustomFont>
                        </CustomButton>
                    </CustomRow>
                </CustomColumn>
            </CustomRow>
        </CustomColumn>
    );
}
