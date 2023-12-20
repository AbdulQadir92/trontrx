import React from 'react'
import { useRouter } from 'next/navigation'
import styled from 'styled-components'
import Link from "next/link"


const FooterNavItemStyled = styled.li`

    > a {
        border: none;
        background: none;
        color: white;
        font-family: 'Poppins', sans-serif;
        font-style: normal;
        font-size: 14px;
        font-weight: 700;
    }

    @media (max-width: 330px) {
        > a {
            font-size: 12px;
        }
    }
`

interface FooterNavItemProps {
    text: string,
    link: string
}

const FooterNavItem: React.FC<FooterNavItemProps> = ({ text, link }) => {

    const router = useRouter()

    return (
        <FooterNavItemStyled>
            <div></div>
            <Link href={link}>{text}</Link>
        </FooterNavItemStyled>
    )
}

export default FooterNavItem