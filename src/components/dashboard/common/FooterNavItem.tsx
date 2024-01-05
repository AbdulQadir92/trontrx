import React from 'react'
import { useRouter } from 'next/navigation'
import styled from 'styled-components'

const Button = styled.button`
  border: none;
  background: none;
  color: white;
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 700;
`


interface FooterNavItemProps {
    text: string,
    link: string
}

const FooterNavItem: React.FC<FooterNavItemProps> = ({ text, link }) => {

    const router = useRouter()

    const handleClick = () => {
        router.push(link)
    }

    return (
        <li>
            <div></div>
            <Button onClick={handleClick}>{text}</Button>
        </li>
    )
}

export default FooterNavItem