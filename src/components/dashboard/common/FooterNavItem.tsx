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
    link: string,
    isSidebar?: boolean
}

const FooterNavItem: React.FC<FooterNavItemProps> = ({ text, link, isSidebar }) => {
    const router = useRouter();

    const toggleSidebarMobile = () => {
        const sidebarMobile = document.querySelector('#sidebarMobile') as HTMLDivElement;
        sidebarMobile.classList.toggle('show');
    }

    const handleClick = () => {
        if (isSidebar) {
            toggleSidebarMobile();
        }
        router.push(link);
    }

    return (
        <li>
            <div></div>
            <Button onClick={handleClick}>{text}</Button>
        </li>
    )
}

export default FooterNavItem