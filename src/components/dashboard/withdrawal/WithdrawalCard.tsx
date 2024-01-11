"use client"
import {
    WithdrawalCardStyled, InfoButton,
    CardsSectionDesktop, ThreeCardsDesktop, TwoCardsDesktop, CardDesktop, CardsSectionMobile, CardMobile,
    TimerSection, Paragraphs, Paragraph, WithdrawButton
} from "@/styles/pages/components/dashboard/withdrawal/WithdrawalCard.styled"
import { CONTENT as content } from '@/content/content'
import { useState, useEffect } from "react"
import Timer from "./Timer"


const WithdrawalCard = () => {

    const cardImages = [
        "/assets/images/dashboard/withdrawal/cards/current-active.svg",
        "/assets/images/dashboard/withdrawal/cards/daily-roi.svg",
        "/assets/images/dashboard/withdrawal/cards/referral-income.svg",
        "/assets/images/dashboard/withdrawal/cards/matching-level.svg",
        "/assets/images/dashboard/withdrawal/cards/total-withdrawn.svg",
        "/assets/images/dashboard/withdrawal/cards/income-limit.svg",
        "/assets/images/dashboard/withdrawal/cards/available.svg",
        "/assets/images/dashboard/withdrawal/cards/last-withdrawn.svg"
    ]

    const [animateClass, setAnimateClass] = useState(false);
    // useEffect(() => {
    //     document.addEventListener('scroll', () => {
    //         // console.log(window.scrollY);
    //         if (window.innerWidth <= 1200 && window.innerWidth > 992) {
    //             if (window.scrollY >= 100 && window.scrollY <= 210) {
    //                 setAnimateClass(true);
    //             }
    //             // else if (window.scrollY < 100) {
    //             //     setAnimateClass(false);
    //             // }
    //         }

    //         if (window.innerWidth > 1200) {
    //             if (window.scrollY >= 100 && window.scrollY <= 210) {
    //                 setAnimateClass(true);
    //             }
    //             // else if (window.scrollY < 100) {
    //             //     setAnimateClass(false);
    //             // }
    //         }
    //     })
    // }, [])

    const animate = (setAnimationClass: any, element: any) => {
        const elementBottomPosition = element.getBoundingClientRect().top - window.innerHeight;
        if (elementBottomPosition <= 0 && elementBottomPosition >= -100) {
            setAnimationClass(true);
        }
        if (elementBottomPosition > 50) {
            setAnimationClass(false);
        }
    }
    const [timerWithdrawalClass, setTimerWithdrawalClass] = useState(false);
    const [withdrawButtonClass, setWithdrawButtonClass] = useState(false);
    const [paraWithdrawalClass, setParaWithdrawalClass] = useState(false);
    const [dailyRoi, setDailyRoi] = useState(0)

    useEffect(() => {
        const timerWithdrawal = document.querySelectorAll('.timerWithdrawal');
        const withdrawButton = document.querySelectorAll('.withdrawButton');
        const paraWithdrawal = document.querySelectorAll('.paraWithdrawal');
        document.addEventListener('scroll', () => {
            if (!timerWithdrawalClass) {
                animate(setTimerWithdrawalClass, timerWithdrawal[0]);
            }
            if (!withdrawButtonClass) {
                animate(setWithdrawButtonClass, withdrawButton[0]);
            }
            if (!paraWithdrawalClass) {
                animate(setParaWithdrawalClass, paraWithdrawal[0]);
            }
        })
    }, [])

    const timerCallback = () => {
        console.log('timer callback')
    }

    return (
        <WithdrawalCardStyled>
            <InfoButton>Withdrawal Info</InfoButton>
            {/* Cards Desktop */}
            <CardsSectionDesktop>
                <ThreeCardsDesktop>
                    <CardDesktop>
                        <img src={cardImages[0]} alt="..." />
                        {/*current active deposit*/}
                        <p>{content.dashboard.withdrawal.cards[0].title}</p>
                        <div>{content.dashboard.withdrawal.cards[0].amount}</div>
                    </CardDesktop>
                    <CardDesktop>
                        <img src={cardImages[1]} alt="..." />
                        {/*daily ROI*/}
                        <p>{content.dashboard.withdrawal.cards[1].title}</p>
                        <div>{content.dashboard.withdrawal.cards[1].amount}</div>
                    </CardDesktop>
                    <CardDesktop>
                        <img src={cardImages[2]} alt="..." />
                        {/*DIRECT REFERRAL INCOME*/}
                        <p>{content.dashboard.withdrawal.cards[2].title}</p>
                        <div>{content.dashboard.withdrawal.cards[2].amount}</div>
                    </CardDesktop>
                </ThreeCardsDesktop>
                <TwoCardsDesktop>
                    <CardDesktop>
                        <img src={cardImages[3]} alt="..." />
                        {/*MATCHING LEVEL INCOME*/}
                        <p>{content.dashboard.withdrawal.cards[3].title}</p>
                        <div>{content.dashboard.withdrawal.cards[3].amount}</div>
                    </CardDesktop>
                    <CardDesktop>
                        <img src={cardImages[4]} alt="..." />
                        {/*TOTAL WITHDRAWN*/}
                        <p>{content.dashboard.withdrawal.cards[4].title}</p>
                        <div>{content.dashboard.withdrawal.cards[4].amount}</div>
                    </CardDesktop>
                </TwoCardsDesktop>
                <ThreeCardsDesktop>
                    <CardDesktop>
                        <img src={cardImages[5]} alt="..." />
                        {/*310% REMAINING INCOME LIMIT*/}
                        <p>{content.dashboard.withdrawal.cards[5].title}</p>
                        <div>{content.dashboard.withdrawal.cards[5].amount}</div>
                    </CardDesktop>
                    <CardDesktop>
                        <img src={cardImages[6]} alt="..." />
                        {/*AVAILABLE TO WITHDRAW*/}
                        <p>{content.dashboard.withdrawal.cards[6].title}</p>
                        <div>{content.dashboard.withdrawal.cards[6].amount}</div>
                    </CardDesktop>
                    <CardDesktop>
                        <img src={cardImages[7]} alt="..." />
                        {/*LAST WITHDRAWN*/}
                        <p>{content.dashboard.withdrawal.cards[7].title}</p>
                        <div>{content.dashboard.withdrawal.cards[7].amount}</div>
                    </CardDesktop>
                </ThreeCardsDesktop>
            </CardsSectionDesktop>
            {/* Cards Mobile */}
            <CardsSectionMobile>
                <CardMobile>
                    <p>{content.dashboard.withdrawal.cards[0].title}</p>
                    <div>{content.dashboard.withdrawal.cards[0].amount}</div>
                </CardMobile>
                <CardMobile>
                    <p>{content.dashboard.withdrawal.cards[1].title}</p>
                    <div>{content.dashboard.withdrawal.cards[1].amount}</div>
                </CardMobile>
                <CardMobile>
                    <p>{content.dashboard.withdrawal.cards[2].title}</p>
                    <div>{content.dashboard.withdrawal.cards[2].amount}</div>
                </CardMobile>
                <CardMobile>
                    <p>{content.dashboard.withdrawal.cards[3].title}</p>
                    <div>{content.dashboard.withdrawal.cards[3].amount}</div>
                </CardMobile>
                <CardMobile>
                    <p>{content.dashboard.withdrawal.cards[4].title}</p>
                    <div>{content.dashboard.withdrawal.cards[4].amount}</div>
                </CardMobile>
                <CardMobile>
                    <p>{content.dashboard.withdrawal.cards[5].title}</p>
                    <div>{content.dashboard.withdrawal.cards[5].amount}</div>
                </CardMobile>
                <CardMobile>
                    <p>{content.dashboard.withdrawal.cards[6].title}</p>
                    <div>{content.dashboard.withdrawal.cards[6].amount}</div>
                </CardMobile>
                <CardMobile>
                    <p>{content.dashboard.withdrawal.cards[7].title}</p>
                    <div>{content.dashboard.withdrawal.cards[7].amount}</div>
                </CardMobile>
            </CardsSectionMobile>
            <TimerSection className={`timerWithdrawal ${timerWithdrawalClass ? 'animate' : ''}`}>
                <p>{content.dashboard.withdrawal.timerTitle}</p>
                <Timer endTs={90} callback={timerCallback} />
            </TimerSection>
            <Paragraphs>
                {content.dashboard.withdrawal.paragraphs.map((paragraph, index) => (
                    <Paragraph key={index} id={`para${index + 1}`}
                        className={`paraWithdrawal ${paraWithdrawalClass ? 'animate' : ''}`}>
                        <img src="/assets/images/dashboard/withdrawal/paragraph.svg" alt="..." />
                        <p style={{ fontWeight: 'bold' }}>{paragraph}</p>
                    </Paragraph>
                ))}
            </Paragraphs>
            <WithdrawButton className={`withdrawButton ${withdrawButtonClass ? 'animate' : ''}`}>
                <button>{content.dashboard.withdrawal.withdrawButton}</button>
            </WithdrawButton>
        </WithdrawalCardStyled>
    )
}

export default WithdrawalCard