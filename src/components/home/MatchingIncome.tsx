import { MatchingIncomeStyled, Paragraphs, LevelsSection, Level } from "@/styles/pages/components/home/MatchingIncome.styled"
import { useState, useEffect } from "react"
import { CONTENT } from '@/content/content'


const MatchingIncome = () => {

    const animate = (setAnimationClass: any, element: any) => {
        const elementBottomPosition = element.getBoundingClientRect().top - window.innerHeight;
        if (elementBottomPosition <= 0 && elementBottomPosition >= -100) {
            setAnimationClass(true);
        }
        if (elementBottomPosition > 100) {
            setAnimationClass(false);
        }
    }
    const [matchingIncomeHeadingClass, setMatchingIncomeHeadingClass] = useState(false);
    const [matchingParagraphsClass, setMatchingParagraphsClass] = useState(false);
    const [levelsClass, setlevelsClass] = useState(false);
    useEffect(() => {
        const matchingIncomeHeading = document.querySelectorAll('.matchingIncomeHeading');
        const matchingParagraphs = document.querySelectorAll('.matchingParagraphs');
        const levels = document.querySelectorAll('.levels');

        document.addEventListener('scroll', () => {
            if (!matchingIncomeHeadingClass) {
                animate(setMatchingIncomeHeadingClass, matchingIncomeHeading[0]);
            }
            if (!matchingParagraphsClass) {
                animate(setMatchingParagraphsClass, matchingParagraphs[0]);
            }
            if (!levelsClass) {
                animate(setlevelsClass, levels[0]);
            }
        })
    })

    return (
        <MatchingIncomeStyled>
            <h1 className={`matchingIncomeHeading ${matchingIncomeHeadingClass ? 'animate' : ''}`}>
                {CONTENT.matchingIncome.mainHeading[0]}
                <span>{CONTENT.matchingIncome.mainHeading[1]}</span>
                {CONTENT.matchingIncome.mainHeading[2]}
            </h1>
            <Paragraphs className={`matchingParagraphs ${matchingParagraphsClass ? 'animate' : ''}`}>
                {CONTENT.matchingIncome.paragraphs.map((para: any, index: any) => (
                    <li key={index}>
                        {para}
                    </li>
                ))}
            </Paragraphs>
            <LevelsSection className={`levels ${levelsClass ? 'animate' : ''}`}>
                <div>
                    <img src="/assets/images/home/matchingIncome/main.png" />
                    {CONTENT.matchingIncome.levels.map((level: any, index: any) => (
                        <Level key={index} id={`level${index}`}>
                            <p>{level.percentage}</p>
                            <p>{level.level}</p>
                        </Level>
                    ))}
                </div>
            </LevelsSection>
        </MatchingIncomeStyled>
    )
}

export default MatchingIncome