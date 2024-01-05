"use client"
import {
    InfoCardStyled,
    YellowDiv1,
    BlackDiv1,
    YellowDiv2,
    BlackDiv2,
    CopyMessage,
    CardText,
    CopyButton, ConnectWalletButton
} from "@/styles/pages/components/dashboard/currentStats/InfoCard.styled"
import { useEffect, useState } from "react"
import { CONTENT as content } from '@/content/content'


const InfoCard = () => {

    const [showMessage, setShowMessage] = useState(false);
    const [referralLink, setReferralLink] = useState('https://trontrx.world/?ref=TEvG6VpgitzigWyqvhmGcihLf6WBEM1Q6s')
    const [background, setBackground] = useState('transparent')

    const copyLink = () => {
        navigator.clipboard.writeText(referralLink);
        setShowMessage(true);
        setTimeout(() => {
            setShowMessage(false);
        }, 3000)
    }

    const selectTextOnclick = (event: any) => {
        // console.log(event.target.id, ' <<< ')
        event.target.select()
        // setBackground('lightgrey')
    }

    const deselectText = (event: any) => {
        if (event.target.id !== 'referral') {
            setBackground('transparent')
        }
    }

    useEffect(() => {
        document.addEventListener("mousedown", deselectText)
    }, [])

    return (
        <InfoCardStyled>
            <YellowDiv1>{content.dashboard.currentStats.infoCard.yellowButton1}</YellowDiv1>
            <BlackDiv1>
                <span>{content.dashboard.currentStats.infoCard.blackButton1.span1}</span>
                <span style={{ textTransform: 'none' }}>
                    {content.dashboard.currentStats.infoCard.blackButton1.span2}
                </span>
            </BlackDiv1>
            <YellowDiv2>
                <span>{content.dashboard.currentStats.infoCard.yellowButton2.span1}</span>
                <span style={{ textTransform: 'none' }}>{content.dashboard.currentStats.infoCard.yellowButton2.span2}</span>
            </YellowDiv2>
            <BlackDiv2>
                <span>{content.dashboard.currentStats.infoCard.blackButton2.span1}</span>
                <input type={'text'} id="referral" value={referralLink} onClick={selectTextOnclick} style={{ background: background }} readOnly={true} />
            </BlackDiv2>
            <CardText>
                {content.dashboard.currentStats.infoCard.card1Text}
            </CardText>
            <CardText>{content.dashboard.currentStats.infoCard.card2Text}</CardText>
            <CopyButton onClick={copyLink}>
                <p>{content.dashboard.currentStats.infoCard.copyButton}</p>
                <CopyMessage className={showMessage ? "shown" : ""}>Link Copied</CopyMessage>
            </CopyButton>
            {/* <ConnectWalletButton>
                <p>{content.dashboard.currentStats.infoCard.connectWalletButton}</p>
            </ConnectWalletButton> */}
        </InfoCardStyled>
    )
}

export default InfoCard